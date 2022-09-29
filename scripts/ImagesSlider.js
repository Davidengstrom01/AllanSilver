var slideIndex = 1;// Variabler för vilken bild visas
showSlides(slideIndex); //Visar bild med index 

// Next/previous controls
function plusSlides(n) {//Funktionen ökar bildIndex med 1
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {//Funktionen mindskare bildIndex med 1
  showSlides(slideIndex = n);
}

function showSlides(n) {//Visar bilden och gör de andra två osynliga
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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
}