// format-phone-input
(function($) {
  function format(e) {
    var input = $(this)
    var digits = input.val().replace(/[^\d]/g, '');

    console.info(e);

    if (e.which == 8) {
      return;
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

    return false;
  }

  $.fn.formatsPhone = function() {
    this.bind('keypress', format);
    this.attr('maxlength', '14');
  };
})(jQuery);
