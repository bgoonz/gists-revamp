//= require libs/get_elements_by_class_name_polyfill.js
"use strict";

var CodePenEmbed = {
  width: "100%",

  init: function () {
    this.showCodePenEmbeds();
    this.listenToParentPostMessages();
  },

  showCodePenEmbeds: function () {
    var codePenElements = document.getElementsByClassName("codepen");

    for (var i = codePenElements.length - 1; i > -1; i--) {
      var params = this._getParamsFromAttributes(codePenElements[i]);
      params = this._convertOldDataAttributesToNewDataAttributes(params);
      params.user = this._findUsernameForURL(params, codePenElements[i]);

      if (this._paramsHasRequiredAttributes(params)) {
        var url = this._buildURL(params);
        var iFrameHTML = this._buildIFrame(params, url);

        this._addIFrameToPage(codePenElements[i], iFrameHTML);
      }
    }
  },

  _findUsernameForURL: function (params, codePenElement) {
    if (typeof params.user === "string") {
      return params.user;
    } else {
      for (var i = 0, l = codePenElement.children.length; i < l; i++) {
        var link = codePenElement.children[i];
        var href = link.href || "";
        var m = href.match(/codepen\.(io|dev)\/(\w+)\/pen\//i);

        if (m) {
          return m[2];
        }
      }
    }

    return "anon";
  },

  // Ensure we have the required attributes to create the iframe
  _paramsHasRequiredAttributes: function (params) {
    return params["slug-hash"];
  },

  /*****************
  Build Params
  ******************/

  _getParamsFromAttributes: function (el) {
    var params = {};
    var attributes = el.attributes;

    for (var i = 0, l = attributes.length; i < l; i++) {
      var name = attributes[i].name;

      if (name.indexOf("data-") === 0) {
        params[name.replace("data-", "")] = attributes[i].value;
      }
    }

    return params;
  },

  /*
   * convert the old data attributes to new better names.
   * - href -> slug-hash
   * - type -> default-tab
   * - safe -> animations
   */
  _convertOldDataAttributesToNewDataAttributes: function (params) {
    if (params.href) {
      params["slug-hash"] = params.href;
    }

    if (params.type) {
      params["default-tab"] = params.type;
    }

    if (params.safe) {
      if (params.safe === "true") {
        params.animations = "run";
      } else {
        params.animations = "stop-after-5";
      }
    }

    return params;
  },

  /*****************
  Build URL
  ******************/

  _buildURL: function (params) {
    var host = this._getHost(params);
    var username = params.user ? params.user : "anon";
    var getParams = "?" + this._getGetParams(params);
    var url = [host, username, "embed", params["slug-hash"] + getParams].join(
      "/"
    );

    return url.replace(/\/\//g, "//");
  },

  _getHost: function (params) {
    if (params.host) {
      return this._getSafeHost(params.host);
    } else if (document.location.protocol === "file:") {
      // So it works locally at file URLs, see support #456
      return "http://codepen.io";
    } else {
      return "//codepen.io";
    }
  },

  _getSafeHost: function (host) {
    if (host.match(/^\/\//) || !host.match(/http:/)) {
      return "http://" + host;
    } else {
      return host;
    }
  },

  _getGetParams: function (params) {
    var dataValues = "";

    for (var key in params) {
      if (dataValues !== "") {
        dataValues += "&";
      }

      dataValues += key + "=" + encodeURIComponent(params[key]);
    }

    return dataValues;
  },

  /*****************
  Build IFrame
  *****************/

  _buildIFrame: function (params, url) {
    var extraClass = "";
    if (params["class"] !== "") {
      extraClass = params["class"];
    }

    var attrs = {
      id: "cp_embed_" + params["slug-hash"].replace("/", "_"),
      src: url,
      scrolling: "no",
      frameborder: "0",
      height: this._getHeight(params),
      allowTransparency: "true",
      allowfullscreen: "true",
      class: "cp_embed_iframe " + extraClass,
      style: "width: " + this.width + "; overflow: hidden;",
    };

    var src = "<iframe ";

    for (var key in attrs) {
      src += key + '="' + attrs[key] + '" ';
    }

    src += "></iframe>";

    return src;
  },

  /*
   * Get height, defaults to magic 300
   */
  _getHeight: function (params) {
    if (params.height) {
      return params.height === "auto" ? 300 : params.height;
    } else {
      return 300;
    }
  },

  _addIFrameToPage: function (el, iFrameHTML) {
    if (el.parentNode) {
      var iframeSpan = document.createElement("div");
      iframeSpan.innerHTML = iFrameHTML;

      el.parentNode.replaceChild(iframeSpan, el);
    } else {
      el.innerHTML = iFrameHTML;
    }
  },

  /************************
  Listen to Post Messages
  *************************/

  listenToParentPostMessages: function () {
    var eventMethod = window.addEventListener
      ? "addEventListener"
      : "attachEvent";
    var eventListener = window[eventMethod];
    var messageEvent = eventMethod === "attachEvent" ? "onmessage" : "message";

    eventListener(
      messageEvent,
      function (e) {
        try {
          var dataObj = eval("(" + e.data + ")");
          var iframe = document.getElementById("cp_embed_" + dataObj.hash);

          if (iframe) {
            iframe.height = dataObj.height;
          }
        } catch (err) {
          // do nothing
        }
      },
      false
    );
  },
};

CodePenEmbed.init();
