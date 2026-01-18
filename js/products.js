const cart = new Map(); 

const cartCountEl = document.getElementById("cartCount");
const cartItemsEl = document.getElementById("cartItems");
const cartTotalEl = document.getElementById("cartTotal");

const cartToggle = document.getElementById("cartToggle");
const cartDropdown = document.getElementById("cartDropdown");
const clearBtn = document.getElementById("clearCart");
const checkoutBtn = document.getElementById("checkoutBtn");

function money(n) {
  return `RM ${Number(n).toFixed(2)}`;
}

function getTotals() {
  let total = 0;
  let count = 0;

  cart.forEach(item => {
    total += item.price * item.qty;
    count += item.qty;
  });

  return { total, count };
}

function renderCart() {
  const { total, count } = getTotals();

  cartCountEl.textContent = count;
  cartTotalEl.textContent = money(total);

  if (cart.size === 0) {
    cartItemsEl.innerHTML = `<p class="cart-empty">Your cart is empty.</p>`;
    return;
  }

  let html = "";

  cart.forEach(item => {
    html += `
      <div class="cart-item">
        <div>
          <strong>${item.name}</strong><br/>
          <small>${money(item.price)} × ${item.qty}</small>
        </div>
        <div><strong>${money(item.price * item.qty)}</strong></div>
      </div>
    `;
  });

  cartItemsEl.innerHTML = html;
}




document.querySelectorAll(".add-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".product-card");
    const id = card.dataset.id;
    const name = card.dataset.name;
    const price = Number(card.dataset.price);

    if (cart.has(id)) {
      cart.get(id).qty += 1;
    } else {
      cart.set(id, { name, price, qty: 1 });
    }

    renderCart();

    
    cartDropdown.hidden = false;
  });
});



cartToggle.addEventListener("click", () => {
  cartDropdown.hidden = !cartDropdown.hidden;
});



clearBtn.addEventListener("click", () => {
  cart.clear();
  renderCart();
});


checkoutBtn.addEventListener("click", () => {
  const { count, total } = getTotals();

  if (count === 0) {
    alert("Your cart is empty.");
    return;
  }

  alert(`Checkout successful ✅\nItems: ${count}\nTotal: ${money(total)}`);

  
  cart.clear();
  renderCart();


  cartDropdown.hidden = true;
});



document.addEventListener("click", (e) => {
  const inside = e.target.closest(".cart-wrapper");
  if (!inside) {
    cartDropdown.hidden = true;
  }
});


renderCart();

const openMenuBtn = document.getElementById("openMenu");
const closeMenuBtn = document.getElementById("closeMenu");
const menuOverlay = document.getElementById("menuOverlay");


openMenuBtn.addEventListener("click", () => {
  menuOverlay.hidden = false;
});


closeMenuBtn.addEventListener("click", () => {
  menuOverlay.hidden = true;
});


menuOverlay.addEventListener("click", (e) => {
  if (e.target === menuOverlay) {
    menuOverlay.hidden = true;
  }
});


document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    menuOverlay.hidden = true;
  }
});