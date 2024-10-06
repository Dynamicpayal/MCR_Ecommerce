document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Fetch form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validation
    if (name === '' || email === '' || subject === '' || message === '') {
        showMessage('All fields are required.', 'error');
        return;
    }

    if (!validateEmail(email)) {
        showMessage('Please enter a valid email address.', 'error');
        return;
    }

    // If validation passes
    showMessage('Your message has been sent successfully!', 'success');

    // Optionally, you can reset the form
    document.getElementById('contactForm').reset();
});

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Show message function
function showMessage(msg, type) {
    const messageDiv = document.getElementById('formMessage');
    messageDiv.textContent = msg;
    messageDiv.style.color = type === 'error' ? 'red' : 'green';
}