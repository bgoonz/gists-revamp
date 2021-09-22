return (function () {
  var publicAPI;

  function read(file) {
    return FSREAD(file);
  }

  function write(file, content) {
    return FSWRITE(file, content);
  }

  publicAPI = {
    read: read,
    write: write,
  };
  return publicAPI;
})();
