// Carousel 

// Reference to the carousel
let carousel = document.querySelector(`.carousel`);

// Reference to the images - Array
const carouselImg = Array.from(document.querySelectorAll(`.carousel img`));

// Reference to dots for which slide
var dots = document.getElementsByClassName("dot");

// Reference to the images - Array
const carouselArticle = Array.from(document.querySelectorAll(`#carouselContent article`));

// Current Index
let carouselIndex = 0;
carouselImg[carouselIndex].classList.add("show");
carouselArticle[carouselIndex].classList.add("show");

// Run Check View Window Size 
checkViewPort();
    // Recheck on resize event
    window.addEventListener('resize', checkViewPort);

// Left Button Reference
let leftButton = document.querySelector(`.left-button`);

    // Left Button Click Event
    //leftButton.addEventListener('click', carouselChange(-1));

// Right Button Reference
const rightButton = document.querySelector(`.right-button`);

    // Right Button Click Event
    //rightButton.addEventListener('click', () => carouselChange(1));

function carouselChange(num) {
    // Turn off display on current image
    carouselImg[carouselIndex].classList.remove("show");
    carouselArticle[carouselIndex].classList.remove("show");
    //dots[carouselIndex].classList.remove("show");

    // Update carouselIndex
    carouselIndex = carouselIndex + num;

    // Check num for out of array
        // If greater than the length of the array reset carousel to first image
        if (carouselIndex > carouselImg.length - 1) { carouselIndex = 0 }
        // If less than 0 (first image) then go to last image in array
        if (carouselIndex < 0) { carouselIndex = carouselImg.length - 1 }

    carouselImg[carouselIndex].classList.add("show");
    carouselArticle[carouselIndex].classList.add("show");
    //dots[carouselIndex].classList.add("show");
    checkViewPort();
}

function checkViewPort() {
    
    if (window.innerWidth / window.innerHeight < 1.5) {
        carousel.classList.remove("landscape");
        carousel.classList.add("portrait");
        //carouselImg[carouselIndex].style.height = window.innerHeight;
    } else {
        carousel.classList.remove("portrait");
        carousel.classList.add("landscape");
    }

    // Check Values
    // console.log( window.innerWidth / window.innerHeight );
    // console.log(carousel.classList);
    // console.log(window.innerHeight);
}