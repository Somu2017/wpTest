$(document).ready(function() {
	// Cache the Window object
	var $window = $(window);

	/**
	 * Code to apply for each section with a data-type attrib of background (and with a data-speed attrib)
	 */
	$('section[data-type="background"]').each(function () {
		/**
		 * Caching the object for use in a function.
		 * @type {object containing section with a data-type of background}
		 */
		var $bgObj = $(this);
		/**
		 * @param  {anonymous function}
		 * Function that activates when the user scrolls. The new coordinates of the image is calculated and applied in CSS to render a parallax scrolling effect.
		 */
		$window.scroll(function() {
			/**
			 * Calculates the y-Position of the image during 
			 * @type {Number}
			 */
			var yPos = -($window.scrollTop()/$bgObj.data('speed'));
			var coOrds = '50% '+yPos+'px';
			$bgObj.css('background-position', coOrds);
		});
	});
});