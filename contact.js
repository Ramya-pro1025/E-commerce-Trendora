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

