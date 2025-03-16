// ======= Mobile Navbar Toggle =======
const bar = document.getElementById('bar');  // Menu icon (open navbar)
const close = document.getElementById('close'); // Close icon (close navbar)
const nav = document.getElementById('navbar'); // Navbar element

// If menu button exists, add event listener to open navbar
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active'); // Adds 'active' class to display navbar
    });
}

// If close button exists, add event listener to close navbar
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active'); // Removes 'active' class to hide navbar
    });
}

// ======= Brand Slider Navigation =======
const slider = document.querySelector('.brands-slider'); // Selects the brand slider container
const scrollAmount = 200; // Defines how much to scroll per click

// Function to scroll the brand slider left (-1) or right (1)
function scrollSlider(direction) {
    const slider = document.querySelector('.brands-slider'); // Select the slider
    if (!slider) {
        console.error("Slider not found!");
        return;
    }
    
    const scrollAmount = 200; // Adjust scroll speed

    slider.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}

    

// ======= Offer Section Close Button =======
const offerClose = document.getElementById('offer-close'); // Selects the close button
const offerSection = document.querySelector('.offer'); // Selects the offer section

// If close button exists, allow users to hide the offer section
if (offerClose && offerSection) {
    offerClose.addEventListener('click', () => {
        offerSection.style.display = 'none'; // Hides the offer section
    });
}

// ======= Newsletter Subscription Validation =======
const newsletterInput = document.querySelector('.newsletter-input'); // Selects the email input field
const newsletterBtn = document.querySelector('.newsletter-btn'); // Selects the subscription button

// If newsletter elements exist, add event listener to validate email
if (newsletterInput && newsletterBtn) {
    newsletterBtn.addEventListener('click', () => {
        const email = newsletterInput.value.trim(); // Get input value & remove spaces

        // Check if email is empty
        if (email === '') {
            alert('Please enter your email!'); // Alert user to enter an email
        } 
        // Check if email is in valid format
        else if (!validateEmail(email)) {
            alert('Please enter a valid email address!'); // Alert user if email is invalid
        } 
        // If email is valid, show success message
        else {
            alert('Thank you for subscribing!'); // Confirmation message
            newsletterInput.value = ''; // Clear input field after submission
        }
    });
}

// ======= Email Validation Function =======
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Regular expression to check email format
}
