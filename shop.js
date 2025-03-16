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

document.addEventListener('DOMContentLoaded', () => {
    const offerClose = document.getElementById('offer-close'); // Close button
    const offerSection = document.querySelector('.shop-offer'); // Shop offer section

    if (offerClose && offerSection) {
        offerClose.addEventListener('click', () => {
            offerSection.style.display = 'none'; // Hides the shop offer section
        });
    }
});

document.querySelector('.filter-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Get selected categories
    const selectedCategories = Array.from(document.querySelectorAll('input[name="category"]:checked'))
                                      .map(checkbox => checkbox.value);
    console.log('Selected Categories:', selectedCategories); // Log selected categories

    // If no category is selected, show all products
    if (selectedCategories.length === 0) {
        const productCards = document.querySelectorAll('.pro-card');
        productCards.forEach(card => {
            card.style.display = 'block'; // Show all products if no filter is applied
        });
        return;
    }
    
    // Loop through all product cards
    const productCards = document.querySelectorAll('.pro-card');
    productCards.forEach(card => {
        const productCategories = card.dataset.categories.split(',');
        console.log('Product Categories:', productCategories); // Log product categories
        const isVisible = selectedCategories.some(category => productCategories.includes(category));
        console.log('Is Visible:', isVisible); // Log visibility result for the product
        
        // Show or hide the product based on the filter
        card.style.display = isVisible ? 'block' : 'none';
    });
});

// Function to add product to cart
function addToCart(productId, productName, productPrice) {
    const cart = JSON.parse(localStorage.getItem('cart')) || []; // Get existing cart from localStorage or create an empty array
    const existingProduct = cart.find(item => item.id === productId);

    if (existingProduct) {
        existingProduct.quantity += 1; // If product already exists, increase its quantity
    } else {
        cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 }); // Add new product
    }

    localStorage.setItem('cart', JSON.stringify(cart)); // Save updated cart to localStorage
}

// Function to handle 'Add to Cart' button click event
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productCard = button.closest('.pro-card');
        const productId = productCard.querySelector('h2').textContent; // Using product name as a unique identifier for simplicity
        const productName = productCard.querySelector('h2').textContent;
        const productPrice = parseFloat(productCard.querySelector('p').textContent.replace('$', '')); // Parse price value

        addToCart(productId, productName, productPrice); // Add to cart
        alert(`${productName} added to cart!`); // Optional: Notify the user
    });
});
