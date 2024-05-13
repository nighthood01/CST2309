let total = 0;

// add items to the cart
function addToCart(itemName, price) {
    const cart = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    // create list for cart
    const li = document.createElement('li');
    li.textContent = itemName;
    cart.appendChild(li);

    // Add item price 
    total += price;
    cartTotal.textContent = total.toFixed(2);
}
function checkout() {
    alert("Total: $" + total.toFixed(2));
}
