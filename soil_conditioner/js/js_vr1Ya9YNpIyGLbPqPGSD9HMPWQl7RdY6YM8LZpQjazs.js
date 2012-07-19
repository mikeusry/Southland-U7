(function ($) {
  $(document).ready(function(){
    $('a.service-links-facebook-widget').each(function(){
      $(this).attr('share_url', $(this).attr('rel'));
      $(this).attr('expr:share_url', $(this).attr('rel'));
      $(this).attr('type', Drupal.settings.ws_fs.type);
      $(this).attr('name', 'fb_share');
    });

    if (Drupal.settings.ws_fs.fix_count) {
      fix_no_count = function() {
        $(".fb_share_no_count .fb_share_count_inner").text("0");
        $(".fb_share_no_count").removeClass("fb_share_no_count");
      }
      var to = window.setTimeout(fix_no_count, 1500);
    }
  });
})(jQuery);
;
(function ($) {

Drupal.behaviors.textarea = {
  attach: function (context, settings) {
    $('.form-textarea-wrapper.resizable', context).once('textarea', function () {
      var staticOffset = null;
      var textarea = $(this).addClass('resizable-textarea').find('textarea');
      var grippie = $('<div class="grippie"></div>').mousedown(startDrag);

      grippie.insertAfter(textarea);

      function startDrag(e) {
        staticOffset = textarea.height() - e.pageY;
        textarea.css('opacity', 0.25);
        $(document).mousemove(performDrag).mouseup(endDrag);
        return false;
      }

      function performDrag(e) {
        textarea.height(Math.max(32, staticOffset + e.pageY) + 'px');
        return false;
      }

      function endDrag(e) {
        $(document).unbind('mousemove', performDrag).unbind('mouseup', endDrag);
        textarea.css('opacity', 1);
      }
    });
  }
};

})(jQuery);
;
(function ($) {

/**
 * Automatically display the guidelines of the selected text format.
 */
Drupal.behaviors.filterGuidelines = {
  attach: function (context) {
    $('.filter-guidelines', context).once('filter-guidelines')
      .find(':header').hide()
      .closest('.filter-wrapper').find('select.filter-list')
      .bind('change', function () {
        $(this).closest('.filter-wrapper')
          .find('.filter-guidelines-item').hide()
          .siblings('.filter-guidelines-' + this.value).show();
      })
      .change();
  }
};

})(jQuery);
;
