/* Rollovers and Links Script */

window.onload = initAll;

function initAll() {
	document.getElementById("redirect").onclick = initRedirect;
}

function initRedirect() {
	window.location = this;
	return true;
}
