Screw.Unit(function() {
  describe("format-phone-input", function() {
    var input;

    before(function() {
      $('#dom_test').html('<input type="text" name="phone" value="" id="phone">')
      input = $('input[name="phone"]');
      input.val('');
      input.formatsPhone();
    });

    it("does not insert any punctuation after 1 digit", function() {
      input.val('5');
      input.trigger('keypress');
      expect(input.val()).to(equal, '5');
    });

    it("does not insert any punctuation after 2 digits", function() {
      input.val('55');
      input.trigger('keypress');
      expect(input.val()).to(equal, '55');
    });

    it("inserts a dash after 3 digits", function() {
      input.val('555');
      input.trigger('keypress');
      expect(input.val()).to(equal, '555-');
    });

    it("inserts a dash after 3 digits before the 4th", function() {
      input.val('5551');
      input.trigger('keypress');
      expect(input.val()).to(equal, '555-1');
    });
    
    it("inserts a dash after 3 digits before the 4th and 5th", function() {
      input.val('55512');
      input.trigger('keypress');
      expect(input.val()).to(equal, '555-12');
    });

    it("inserts a dash after 3 digits before the 4-6th digits", function() {
      input.val('555123');
      input.trigger('keypress');
      expect(input.val()).to(equal, '555-123');
    });
    
    it("starts parenthesizing at 7th digits", function() {
      input.val('5551234');
      input.trigger('keypress');
      expect(input.val()).to(equal, '(555) 123-4');
    });
    
    it("begins parenthesizing at 8 digits", function() {
      input.val('55512345');
      input.trigger('keypress');
      expect(input.val()).to(equal, '(555) 123-45')
    });
    
    it("keeps parenthesizing at 9 digits", function() {
      input.val('555123456');
      input.trigger('keypress');
      expect(input.val()).to(equal, '(555) 123-456')
    });
    
    it("keeps parenthesizing at 10 digits", function() {
      input.val('5551234567');
      input.trigger('keypress');
      expect(input.val()).to(equal, '(555) 123-4567')
    });
    
    it("stops formatting after 10 digits", function() {
      input.val('55512345678');
      input.trigger('keypress');
      expect(input.val()).to(equal, '55512345678')
    });
  });
});
