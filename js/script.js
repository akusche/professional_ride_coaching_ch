/* Slider top */
  var slideIndexTop = 1;
 // showSlidesTop(slideIndexTop);

// Next/previous controls
function plusSlidesTop(n) {
  showSlidesTop(slideIndexTop += n);
}

// Thumbnail image controls
function currentSlideTop(n) {
  showSlidesTop(slideIndexTop = n);
}

function showSlidesTop(n) {
  var i;
  var slidesTop = document.getElementsByClassName("mySlidesTop");
  var dots = document.getElementsByClassName("dotTop");
  if (n > slidesTop.length) {slideIndexTop = 1} 
  if (n < 1) {slideIndexTop = slidesTop.length}
  for (i = 0; i < slidesTop.length; i++) {
      slidesTop[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" activeTop", "");
  }
  slidesTop[slideIndexTop-1].style.display = "block"; 
  dots[slideIndexTop-1].className += " activeTop";
}

/* Endlosschleife Gallery Top */
var slideIndexTopLoop = 0;
showSlidesTopLoop();

function showSlidesTopLoop() {
    var i;
    var slidesTopLoop = document.getElementsByClassName("mySlidesTop");
    var dots = document.getElementsByClassName("dotTop");
    for (i = 0; i < slidesTopLoop.length; i++) {
        slidesTopLoop[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" activeTop", "");
  	}
    slideIndexTopLoop++;
    if (slideIndexTopLoop > slidesTopLoop.length) {slideIndexTopLoop = 1} 
    slidesTopLoop[slideIndexTopLoop-1].style.display = "block"; 
    dots[slideIndexTopLoop-1].className += " activeTop";
    setTimeout(showSlidesTopLoop, 10000); // Change image every 2 seconds
}


/*  Bilder Gallery*/


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  
  //initilize the default lang
	var lang = 'en';	
	var langs = ["en", "de", "es"];
	if(langs.indexOf(getCookie("lang")) > -1) { lang = getCookie("lang"); }
	else if (navigator.language.indexOf("de") > -1) { lang = 'de'; }
	else if (navigator.language.indexOf("es") > -1) { lang = 'es'; }
	
	// check for language cookie
	//
   	//
 	captionText.innerHTML = t[lang]['image_gallery_'+slideIndex];
  //captionText.innerHTML = t['de']['image_gallery_'+slideIndex];
  //captionText.innerHTML = dots[slideIndex-1].alt;
}
    
