/* made with love by Evan Hahn.
 * unlicensed.
 * you're a beautiful snowflake
 */

;(function(global) {

	var appended = false;

	var link = document.createElement('link');
	link.rel = 'icon';
	link.type = 'image/png';

	function canvasToFavicon(canvas) {
		link.href = canvas.toDataURL('image/png');
		if (!appended) {
			document.head.appendChild(link);
			appended = true;
		}
	}

	if (global.module && module.exports)
		module.exports = canvasToFavicon;
	else
		global.canvasToFavicon = canvasToFavicon;

})(this);
