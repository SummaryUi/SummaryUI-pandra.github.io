function getStyle(obj, attrs) {
	if (obj.currentStyle) {
		return obj.currentStyle[attrs];
	} else {
		return getComputedStyle(obj, false)[attrs];
	}
}