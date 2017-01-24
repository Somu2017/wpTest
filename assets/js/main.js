$(document).ready(function() {

	/* === Code for Parallax Scrolling ==== */

	// Cache the Window object
	var $window = $(window);

	/** @param {anonymous function} Code to apply for each section with a data-type attrib of background (and with a data-speed attrib) */
	$('section[data-type="background"]').each(function () {
		/** @type {object containing section with a data-type of background} Caching the object for use in a function. */
		var $bgObj = $(this);
		/** @param {anonymous function} Function that activates when the user scrolls. The new coordinates of the image is calculated and applied in CSS to render a parallax scrolling effect. */
		$window.scroll(function() {
			/**
			 * Calculates the amount the image has to be scrolled by taking the current number of pixels of the container already hidden due to scrolling, and dividing it with the speed attrib of the bgObj.
			 * Essentially raises the picture by a certain factor of the actual scrolled amount to simulate parallax scrolling.
			 * @type {Number}
			 */
			var yPos = -($window.scrollTop()/$bgObj.data('speed'));
			/** @type {String} Prepares the coOrdinates by concatenating the yPos */
			var coOrds = '50% '+yPos+'px';
			$bgObj.css('background-position', coOrds);
		});
	}); // Parallax Scrolling Ends.

	
});