function learnMore() {
    alert("Learn more about our products and services!");
}

// Image-Slider
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

//Ends here

document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll(".star");
    let rating = 0;

    stars.forEach((star, index) => {
        star.addEventListener("click", () => {
            rating = index + 1;
            updateStars(rating);
        });

        star.addEventListener("mouseover", () => {
            updateStars(index + 1);
        });

        star.addEventListener("mouseout", () => {
            updateStars(rating);
        });
    });

    function updateStars(rating) {
        stars.forEach((star, index) => {
            if (index < rating) {
                star.classList.add("selected");
            } else {
                star.classList.remove("selected");
            }
        });
    }

    // Third Section Starts here

    const newsletterForm = document.getElementById('newsletter-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subscribeBtn = document.getElementById('subscribe-btn');
    const newsletterStatus = document.getElementById('newsletter-status');
    subscribeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
    
        if (name && email) {
            console.log({ name, email });
            newsletterStatus.innerText = 'Thank you for subscribing!';
            newsletterStatus.style.color = 'green';
            nameInput.value = '';
            emailInput.value = '';
        } else {
            newsletterStatus.innerText = 'Please fill in both fields.';
            newsletterStatus.style.color = 'red';
        }
    });


    // Ends Here

    document.getElementById("submit-review").addEventListener("click", () => {
        const reviewText = document.getElementById("review-text").value;
        if (rating === 0) {
            alert("Please select a star rating.");
        } else if (reviewText.trim() === "") {
            alert("Please enter your review.");
        } else {
            alert(`Thank you for your review! You rated this product ${rating} star(s).`);
        }
    });
});