/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

// Carousel constructor
class Carousel {
    constructor(img){
        // assign this.img to the carousel image DOM reference
        this.img = img;
    }
}

// Reference to the carousel
let carousel = document.querySelector(`.carousel`);
console.log(carousel);

// Reference to the images
const carouselImages = document.querySelectorAll(`.carousel img`).forEach( img => new Carousel(img));

// Reference to the images - Array
const carouselImg = Array.from(document.querySelectorAll(`.carousel img`));

// Current Index
let carouselIndex = 0;
carouselImg[carouselIndex].style.display = "flex";

// Left Button Reference
let leftButton = document.querySelector(`.left-button`);

    // Left Button Click Event
    leftButton.addEventListener('click', () => {
        // Move Backwards to previous image

        // Turn off display on current image
        carouselImg[carouselIndex].style.display = "none";

        // Update index to previous image
            // First check index, if 0 go to last image in array else go back 1 image
            if (carouselIndex == 0) {
                carouselIndex = carouselImg.length - 1;
            } else { carouselIndex--; }
            
        // Turn on display on next image
        carouselImg[carouselIndex].style.display = "flex";
    });

// Right Button Reference
const rightButton = document.querySelector(`.right-button`);

    // Right Button Click Event
    rightButton.addEventListener('click', () => {
        // Move Forward to next image

        // Turn off display on current image
        carouselImg[carouselIndex].style.display = "none";

        // Update index to next image
            // First check index, if this is last image in array go to first image in array else go to next image
            if (carouselIndex == carouselImg.length - 1) {
                carouselIndex = 0;
            } else { carouselIndex++; }
        
        // Turn on display on next image
        carouselImg[carouselIndex].style.display = "flex";
    });
