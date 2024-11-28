let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(step) {
  showSlides(slideIndex += step);
}

function currentSlide(slideNumber) {
  showSlides(slideIndex = slideNumber);
}

function showSlides(currentIndex) {
  let slideElements = document.getElementsByClassName("first-project");
  let dotElements = document.getElementsByClassName("dot");

    if (currentIndex > slideElements.length) {
        slideIndex = 1;
    }
    
    if (currentIndex < 1) {
        slideIndex = slideElements.length;
    }

    // Hide all slides
    for (let index = 0; index < slideElements.length; index++) {
        slideElements[index].style.display = "none";
    }

    // Remove "active" class from all dots
    for (let dotIndex = 0; dotIndex < dotElements.length; dotIndex++) {
        dotElements[dotIndex].className = dotElements[dotIndex].className.replace(" active", "");
    }

    // Show the current slide
    slideElements[slideIndex - 1].style.display = "block";

    dotElements[slideIndex - 1].className += " active";
}
