//
// Version 0.0.9
// CSSandbox.js is required to get the framework working correctly

// Fixes transitions problem in some browser to run on page-load.
$(window).load(function() {
	$("body").removeClass("preload");
});