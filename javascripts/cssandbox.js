//
// Version 0.0.13
// CSSandbox.js is required to get the framework working correctly

// Fixes transitions problem in some browser to run on page-load.
// Make sure to have preload class on your body tag
$(window).load(function() {
	$("body").removeClass("preload");
});