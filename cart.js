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


// Sample products added to the cart (in practice, this can be dynamically added)
const cartItems = [
    {
        name: 'Luxe Carbon Suit',
        price: 349.99,
        image: 'Image/Products/product6.png'
    },
    {
        name: 'Sandstone Classic Suit',
        price: 329.99,
        image: 'Image/Products/product7.png'
    }
];

// Function to render cart items
function renderCartItems() {
    const cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = '';  // Clear any existing cart items

    let totalPrice = 0;

    cartItems.forEach((item, index) => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');

        cartItemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p class="cart-item-price">$${item.price.toFixed(2)}</p>
            </div>
            <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
        `;

        cartContainer.appendChild(cartItemDiv);
        totalPrice += item.price;
    });

    // Update the total price
    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}

// Function to remove an item from the cart
function removeItem(index) {
    cartItems.splice(index, 1);  // Remove item from array
    renderCartItems();  // Re-render the cart
}

// Initial rendering of the cart
renderCartItems();
