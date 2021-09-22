// polyfill.worker.js

(function WorkerPolyfill() {
  function DualEventers() {
    var cycle,
      scheduling_queue,
      timer =
        typeof setImmediate !== "undefined"
          ? function timer(fn) {
              return setImmediate(fn);
            }
          : setTimeout;
    // Note: using a queue instead of array for efficiency
    function Queue() {
      var first, last, item;

      function Item(fn) {
        this.fn = fn;
        this.next = void 0;
      }

      return {
        add: function add(fn) {
          item = new Item(fn);
          if (last) {
            last.next = item;
          } else {
            first = item;
          }
          last = item;
          item = void 0;
        },
        drain: function drain() {
          var f = first;
          first = last = cycle = null;

          while (f) {
            f.fn();
            f = f.next;
          }
        },
      };
    }

    scheduling_queue = Queue();

    function schedule(fn) {
      scheduling_queue.add(fn);
      if (!cycle) {
        cycle = timer(scheduling_queue.drain);
      }
    }

    function Eventer(handlers) {
      function addEventListener(evtname, handler) {
        if (handlers.local) {
          handlers.local[evtname] = handlers.local[evtname] || [];
          handlers.local[evtname].push(handler);
        }
      }

      function notifyRemote(evtname, data) {
        if (evtname != "error") {
          data = { data: data };
        }
        if (typeof handlers.remoteEventer["on" + evtname] == "function") {
          handlers.remoteEventer["on" + evtname](data);
        }

        handlers.remote[evtname].forEach(function foreach(h) {
          h(data);
        });
      }

      function postMessage(data) {
        if (buffer) {
          buffer.push(data);
          return;
        }

        schedule(function scheduler() {
          notifyRemote("message", data);
        });
      }

      function unbuffer() {
        if (buffer && buffer.length > 0) {
          buffer.forEach(function foreach(item) {
            notifyRemote("message", item);
          });
        }
        buffer = null;
      }

      var buffer = [];

      this.onmessage = null;
      this.onerror = null;
      this.addEventListener = addEventListener;
      this.postMessage = postMessage;
      this.unbuffer = unbuffer;
      this.notifyRemote = notifyRemote;
    }

    var e1,
      e2,
      h1 = {
        local: { message: [], error: [] },
      },
      h2 = {
        local: { message: [], error: [] },
      };
    // wire the duals' handlers together
    h1.remote = h2.local;
    h2.remote = h1.local;

    // create the dual eventers
    e1 = new Eventer(h1);
    e2 = new Eventer(h2);

    h1.remoteEventer = e2;
    h2.remoteEventer = e1;

    return [e1, e2];
  }

  function importScripts() {
    throw "importScripts() not supported by this polyfill.";
  }

  function publicEventerAPI(e) {
    this.onmessage = e.onmessage;
    this.onerror = e.onerror;
    this.addEventListener = e.addEventListener;
    this.postMessage = e.postMessage;
  }

  if (!window.Worker) {
    window.Worker = function window$Worker(url) {
      var eventers = DualEventers(),
        e1 = eventers[0],
        e2 = eventers[1],
        worker,
        xhr,
        unbufferE1 = e1.unbuffer,
        unbufferE2 = e2.unbuffer,
        notifyE2 = e1.notifyRemote,
        notifyE1 = e2.notifyRemote,
        globalPropNames = [],
        globalProps;

      // clean up public APIs
      publicEventerAPI.call(this, e1);
      e2 = new publicEventerAPI(e2);

      // setup fake `self` global properties
      e2.importScripts = importScripts;
      e2.self = e2;
      e2.navigator = window.navigator;
      e2.location = { href: url };
      e2.XMLHttpRequest = window.XMLHttpRequest;
      e2.WebSocket = window.WebSocket;

      // prepare for worker fake Function
      globalPropNames = Object.getOwnPropertyNames(e2);
      globalProps = globalPropNames.map(function map(name) {
        return e2[name];
      });

      // inside eventer doesn't need to be buffered
      unbufferE2();

      // load the worker file
      xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function onready() {
        if (xhr.readyState == 4) {
          worker = Function.apply(
            null,
            globalPropNames.concat([xhr.responseText])
          );
          try {
            worker.apply(e2, globalProps);

            // unbuffer outside eventer now
            unbufferE1();
          } catch (err) {
            notifyE1("error", err);
          }
        }
      };
      xhr.open("GET", url);
      xhr.send();
    };
  }
})();
