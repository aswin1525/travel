const cardContainer = document.querySelector('.card-container');
const scrollAmount = 2; // Increase this value for faster scrolling
const scrollInterval = 10; // Decrease this value for smoother scrolling

function autoScroll() {
    // Scroll the container
    cardContainer.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
    
    // Check if we've reached the end of the cards
    if (cardContainer.scrollLeft >= cardContainer.scrollWidth - cardContainer.clientWidth) {
        // Reset scroll position
        cardContainer.scrollLeft = 0;
    }
}

// Set the interval for auto scrolling
setInterval(autoScroll, scrollInterval);
