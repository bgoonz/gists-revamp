function sandboxJS(js) {
  var whitelist = ["alert","console","navigator","location"];
  var handlers = {
    has(target,key,context) {
      if (whitelist.indexOf(key) >= 0) {
        return Reflect.has(
            target, key, context
        );
      }
      else {
        throw new Error("Not allowed: " + key);
      }
    }
  };
  var proxy = new Proxy(window,handlers);
  var proxyName = `proxy${Math.floor(Math.random() * 1E9)}`;
  var fn = new Function(proxyName,`with(${proxyName}){${js}}`);
  return fn.call(this,proxy);
}

sandboxJS("console.log(2)");        // 2
sandboxJS("console.log(history)");  // Error, Not allowed: history