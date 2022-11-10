/* Cyling Poster Script */

window.onload = rotate;

let theAd = 0;
let adImages = new Array("image/reading1.jpg","image/reading2.jpg","image/reading3.jpg","image/reading4.jpg","image/reading5.jpg","image/reading6.jpg","image/reading7.jpg");

function rotate() {
	/* cyle through posters */
	theAd++;
	if (theAd == adImages.length) {
		theAd = 0;
	}
	document.getElementById("adBanner").src = adImages[theAd];

	setTimeout(rotate, 4000);
}