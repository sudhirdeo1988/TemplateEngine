
/* --------------------------------------------------------
 JQUERY FUNCTION CALL
----------------------------------------------------------- */
(function ($) {
 "use strict";
	


	// -------- Filter
	$('body').delegate('.ts-navMobile .btn','click',function(){
		var thisCheck = $(this).parents('.ts-header'); 
		if(thisCheck.hasClass('st--menuOpen')){
			thisCheck.removeClass('st--menuOpen');
		}else{
			thisCheck.addClass('st--menuOpen');
		}
	});

	$('body').delegate('.hideSearch','click',function(){
		var thisCheck = $(this).parents('.ts-header');
			thisCheck.removeClass('st--menuOpen');
	});

	
	
})(jQuery);
