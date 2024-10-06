// document.querySelector('.more-btn').addEventListener('click', () => {
//     alert('More options coming soon!');
// });

// document.querySelector('.cart-btn').addEventListener('click', () => {
//     alert('Cart is empty!');
// });
// let currentIndex = 0;

// function showSlide(index) {
//     const slides = document.querySelector('.slides');
//     const slideCount = slides.children.length;

//     // Ensure the index is within bounds
//     if (index >= slideCount) {
//         currentIndex = 0;
//     } else if (index < 0) {
//         currentIndex = slideCount - 1;
//     } else {
//         currentIndex = index;
//     }

//     // Update the slide position
//     slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    


//     // Update the active indicator
//     updateIndicators();
// }

// function moveSlide(step) {
//     showSlide(currentIndex + step);
// }

// function updateIndicators() {
//     const indicators = document.querySelectorAll('.indicators span');
//     indicators.forEach((indicator, index) => {
//         if (index === currentIndex) {
//             indicator.classList.add('active');
//         } else {
//             indicator.classList.remove('active');
//         }
//     });
// }

// // Add event listeners for navigation buttons
// document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
// document.querySelector('.next').addEventListener('click', () => moveSlide(1));

// // Add event listeners for indicators
// document.querySelectorAll('.indicators span').forEach((indicator, index) => {
//     indicator.addEventListener('click', () => showSlide(index));
// });

// // Initialize the slider
// showSlide(currentIndex);



// Buttons for "More" and "Cart"
document.querySelector('.more-btn').addEventListener('click', () => {
    alert('More options coming soon!');
});

document.querySelector('.cart-btn').addEventListener('click', () => {
    alert('Cart is empty!');
});

let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const slideCount = slides.children.length;

    // Ensure the index is within bounds
    if (index >= slideCount) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slideCount - 1;
    } else {
        currentIndex = index;
    }

    // Update the slide position
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Update the active indicator
    updateIndicators();
}

function moveSlide(step) {
    showSlide(currentIndex + step);
}

function updateIndicators() {
    const indicators = document.querySelectorAll('.indicators span');
    indicators.forEach((indicator, index) => {
        if (index === currentIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// Add event listeners for navigation buttons
document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
document.querySelector('.next').addEventListener('click', () => moveSlide(1));

// Add event listeners for indicators
document.querySelectorAll('.indicators span').forEach((indicator, index) => {
    indicator.addEventListener('click', () => showSlide(index));
});

// Initialize the slider
showSlide(currentIndex);
