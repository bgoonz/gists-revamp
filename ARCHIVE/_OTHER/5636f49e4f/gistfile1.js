if (/chrome/i.test(navigator.userAgent)) {
  alert(
    "Sorry, but it appears you are using a web browser that is contrary to the open web. " +
      "Please consider upgrading to a modern browser that embraces the open web, like Firefox."
  );
  document.location.href = "http://www.mozilla.org/firefox";
  throw Error("Bad browser!");
}
