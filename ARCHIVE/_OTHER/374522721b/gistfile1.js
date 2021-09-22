// this jquery works:

$("<script></script>").attr({ src: "blah.js" }).appendTo(document.head);

// this bonzo doesn't work:

bonzo(bonzo.create("<script></script>"))
  .attr({ src: "blah.js" })
  .appendTo(document.head);

// This also doesn't work:

bonzo(bonzo.create("<script src='blah.js'></script>")).appendTo(document.head);

// but THAT same bonzo process works fine for other elements, like <link>:

bonzo(bonzo.create("<link rel='stylesheet' href='blah.css' />")).appendTo(
  document.head
);
