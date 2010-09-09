// format-phone-input
(function($) {
  function format(e) {
    var input = $(this)
    var digits = input.val().replace(/[^\d]/g, '');
    
    if (e.which == 8 && digits.length <= 3) {
      return;
    }
    
    if (e.ctrlKey || e.shiftKey || e.metaKey) {
      return;
    }

    if (e.which == 8 && digits.length > 3) {
      input.val(digits.substring(0, digits.length - 1));
      input.trigger('keydown');
    }

    if (digits.length < 3) {
      return;
    }

    if ((digits.length >= 3 && digits.length <= 6)) {
      var prefix = digits.substring(0, 3);
      var rest = digits.substring(3, digits.length);
      return input.val(prefix + '-' + rest);
    }

    if (digits.length > 6 && digits.length <= 10) {
      var areaCode = digits.substring(0, 3);
      var prefix = digits.substring(3, 6);
      var rest = digits.substring(6, digits.length)
      return input.val('(' + areaCode + ') ' + prefix + '-' + rest);
    }

    return;
  }

  $.fn.formatsPhone = function() {
    this.bind('keydown', format);
    this.attr('maxlength', '14');
  };
})(jQuery);
