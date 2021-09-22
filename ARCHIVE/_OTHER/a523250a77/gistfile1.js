// hijack the next click anywhere

if (document.addEventListener) {
  document.addEventListener(
    "click",
    function handler(evt) {
      evt.preventDefault();
      evt.stopPropagation();
      evt.stopImmediatePropagation();

      document.removeEventListener("click", handler, true);

      // now do whatever else in response to the hijacked click
    },
    /*capturing=*/ true
  );
}
