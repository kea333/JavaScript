/* Keyboard Slideshow Script */

document.addEventListener("keydown",keyHit,false);
var thisPic = 0;

function keyHit(evt) {
    /* toggle these images */
	var myPix = new Array("image/abell_2744_massive_galaxy_cluster.jpg","image/messier_82_starburst_galaxy.jpg", "image/47_tucanae_giant_globular_star_cluster.jpg", "image/hercules_a_elliptical_galaxy.jpg", "image/6478_gault_asteroid.jpg", "image/milky_way_galaxy_filtered_illustration.jpg", "image/planet_uranus.jpg", "image/ngc_6543_nebula.jpg", "image/ngc_2207_and_ic_2163_interacting_spiral_galaxies.jpg", "image/red_rectangle_dying_star.jpg", "image/the_helix_nebula.jpg", "image/the_crab_nebula.jpg", "image/hubble.jpg", "image/james_webb.jpg");
	var imgCt = myPix.length-1;
	var ltArrow = 37;
	var rtArrow = 39;

	if (evt) {
		var thisKey = evt.which;
	}
	else {
		var thisKey = window.event.keyCode;
	}
	
	if (thisKey == ltArrow) {                       /* left arrow */
		chgSlide(-1);
	}
	else if (thisKey == rtArrow) {                  /* right arrow */
		chgSlide(1);
	}

	function chgSlide(direction) {                  /* change direction */
		thisPic = thisPic + direction;
		if (thisPic > imgCt) {
			thisPic = 0;
		}
		if (thisPic < 0) {
			thisPic = imgCt;
		}
		document.getElementById("myPicture").src = myPix[thisPic];
	}
}
