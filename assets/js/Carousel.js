// Carousel

// Reference to the carousel
let carousel = document.querySelector(`.carousel`);

// Reference to the images - Array
const carouselImg = Array.from(document.querySelectorAll(`.carousel img`));

// Current Index
let carouselIndex = 0;
carouselImg[carouselIndex].classList.add("show");

// Run Check View Window Size 
checkViewPort();
    // Recheck on resize event
    window.addEventListener('resize', checkViewPort);

// Left Button Reference
let leftButton = document.querySelector(`.left-button`);

    // Left Button Click Event
    leftButton.addEventListener('click', () => {
        // Move Backwards to previous image

        // Turn off display on current image
        carouselImg[carouselIndex].classList.remove("show");

        // Update index to previous image
            // First check index, if 0 go to last image in array else go back 1 image
            if (carouselIndex == 0) {
                carouselIndex = carouselImg.length - 1;
            } else { carouselIndex--; }
            
        // Turn on display on next image
        carouselImg[carouselIndex].classList.add("show");
        checkViewPort();
    });

// Right Button Reference
const rightButton = document.querySelector(`.right-button`);

    // Right Button Click Event
    rightButton.addEventListener('click', () => {
        // Move Forward to next image

        // Turn off display on current image
        carouselImg[carouselIndex].classList.remove("show");

        // Update index to next image
            // First check index, if this is last image in array go to first image in array else go to next image
            if (carouselIndex == carouselImg.length - 1) {
                carouselIndex = 0;
            } else { carouselIndex++; }
        
        // Turn on display on next image
        carouselImg[carouselIndex].classList.add("show");
        checkViewPort();
    });    

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