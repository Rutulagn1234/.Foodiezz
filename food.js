let cart = [];
let total = 0;

function addToCart(item, price) {
  cart.push({ item, price });
  total += price;
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cartItems");
  const totalSpan = document.getElementById("total");
  cartList.innerHTML = "";

  cart.forEach((entry, index) => {
    const li = document.createElement("li");
    li.textContent = `${entry.item} - $${entry.price}`;
    cartList.appendChild(li);
  });

  totalSpan.textContent = total;
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks for contacting us! We'll get back to you soon.");
  this.reset();
});
