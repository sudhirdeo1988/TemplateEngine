/* --------------------------------------------------------
 JQUERY FUNCTION CALL
----------------------------------------------------------- */
(function($) {
  "use strict";

  // -------- Sidebar
  $("body").delegate(".headerMobile_menuHamb button", "click", function() {
    var thisCheck = $(this).parents(".c-mainContainer");
    thisCheck.hasClass("st-openMenu")
      ? thisCheck.removeClass("st-openMenu")
      : thisCheck.addClass("st-openMenu");
  });

  $("body").delegate(".c-sidebar .closeMenu", "click", function() {
    var thisCheck = $(this).parents(".c-mainContainer");
    thisCheck.removeClass("st-openMenu");
  });
})(jQuery);
