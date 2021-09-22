  // Fires when __CodePenIFrameAddedToPage() fires.
  makeCodePenEmbedsResizeable: function() {
    if (window.innerWidth > 625) {

      var maxWidth = 1000; // calculated below
      var minWidth = 320;
      var minHeight = 150;

      $(".cp_embed_wrapper").each(function() {
        var $wrapper = $(this);
        var $iframe = $wrapper.find("iframe");
        $wrapper.append("<div class='win-size-grip'></div>");
        var originalHeight = $iframe.outerHeight();
        $wrapper.css("height", originalHeight);
        // Can't set this in CSS, otherwise height measurement will be wrong
        $iframe.css("height", "100%");
        $wrapper.resizable({
          handleSelector: "> .win-size-grip",
          onDragStart: function (e, $el, opt) {
            $el.addClass("dragging");
            maxWidth = $(".article-content").width();
            if ($(".page-wrap").width() > $(".article-content").outerWidth()) {
              maxWidth += ($(".page-wrap").width() - $(".article-content").outerWidth());
            }
          },
          onDragEnd: function (e, $el, opt) {
            $el.removeClass("dragging");
          },
          onDrag: function (e, $el, newWidth, newHeight, opt) {
            if (newWidth > maxWidth) {
              newWidth = maxWidth;
            }
            if (newWidth < minWidth) {
              newWidth = minWidth;
            }
            if (newHeight < minHeight) {
              newHeight = minHeight;
            }
            $el.width(newWidth);
            $el.height(newHeight);
            return false;
          }
        });
      });
    }
  },