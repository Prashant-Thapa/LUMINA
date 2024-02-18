let direction = 1;
let currentIndex = 0;

function changePortfolio() {
    const items = document.querySelectorAll('.portfolio');

    // Hide the current testimonial item
    items[currentIndex].style.opacity = '0';

    // Increment the currentIndex based on the direction
    currentIndex += direction;

    // Check if currentIndex reaches the boundaries
    if (currentIndex === items.length || currentIndex === -1) {
        direction = -direction; // Reverse the direction when reaching boundaries
        currentIndex += direction; // Adjust currentIndex accordingly
    }

    // Update positions and opacity for all items
    for (let i = 0; i < items.length; i++) {
        const offset = (i - currentIndex) * 1000;
        items[i].style.left = `${offset}px`;
        items[i].style.opacity = (i === currentIndex) ? '1' : '0';
    }
}

// const nextBtn = document.querySelector('.testimonial-arrow-right');
// const prevBtn = document.querySelector('.testimonial-arrow-left');

// nextBtn.addEventListener('click', () => {
//     direction = 1;
//     changeTestimonial();
// });

// prevBtn.addEventListener('click', () => {
//     direction = -1;
//     changeTestimonial();
// });


setInterval(changePortfolio, 6000);

