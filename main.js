// ============ MA'LUMOTLAR BAZASI ============
const products = [
    { id: 1, name: "iPhone 15 Pro Max", cat: "phone", price: 16500000, icon: "fa-mobile-screen", rating: 4.9, reviews: 234, badge: "TOP", desc: "A17 Pro chip, 256GB, Titanium dizayn. Eng kuchli iPhone." },
    { id: 2, name: "iPhone 15", cat: "phone", price: 12000000, icon: "fa-mobile-screen", rating: 4.8, reviews: 189, desc: "Dynamic Island, 48MP kamera, USB-C." },
    { id: 3, name: "Samsung Galaxy S24 Ultra", cat: "phone", price: 15000000, icon: "fa-mobile-screen", rating: 4.8, reviews: 156, badge: "NEW", desc: "Galaxy AI, S Pen, 200MP kamera." },
    { id: 4, name: "MacBook Pro 16 M3", cat: "laptop", price: 28000000, icon: "fa-laptop", rating: 5.0, reviews: 98, badge: "PRO", desc: "M3 Pro chip, 18GB RAM, 512GB SSD." },
    { id: 5, name: "MacBook Air 15 M3", cat: "laptop", price: 18500000, icon: "fa-laptop", rating: 4.9, reviews: 145, desc: "Yengil, kuchli, 18 soat batareya." },
    { id: 6, name: "ASUS ROG Strix G16", cat: "laptop", price: 22000000, icon: "fa-laptop", rating: 4.7, reviews: 87, badge: "GAMING", desc: "Intel i9, RTX 4070, 165Hz ekran." },
    { id: 7, name: "iPad Pro 12.9 M2", cat: "tablet", price: 14500000, icon: "fa-tablet-screen-button", rating: 4.9, reviews: 112, desc: "M2 chip, Liquid Retina XDR, Apple Pencil." },
    { id: 8, name: "iPad Air 11", cat: "tablet", price: 9500000, icon: "fa-tablet-screen-button", rating: 4.8, reviews: 94, desc: "M1 chip, 10.9 inch, Touch ID." },
    { id: 9, name: "AirPods Pro 2", cat: "audio", price: 3200000, icon: "fa-headphones", rating: 4.9, reviews: 312, badge: "HIT", desc: "Active Noise Cancellation, Adaptive Audio." },
    { id: 10, name: "AirPods Max", cat: "audio", price: 7500000, icon: "fa-headphones", rating: 4.7, reviews: 78, desc: "Premium over-ear, Spatial Audio." },
    { id: 11, name: "Sony WH-1000XM5", cat: "audio", price: 4500000, icon: "fa-headphones", rating: 4.8, reviews: 156, desc: "Eng yaxshi noise cancellation." },
    { id: 12, name: "PlayStation 5 Slim", cat: "gaming", price: 7800000, icon: "fa-gamepad", rating: 4.9, reviews: 289, badge: "HOT", desc: "4K gaming, DualSense, 1TB SSD." },
    { id: 13, name: "PlayStation 5 Pro", cat: "gaming", price: 11000000, icon: "fa-gamepad", rating: 5.0, reviews: 67, badge: "NEW", desc: "8K gaming, 2TB SSD, ray tracing." },
    { id: 14, name: "Xbox Series X", cat: "gaming", price: 7200000, icon: "fa-gamepad", rating: 4.8, reviews: 134, desc: "12 TFLOPS, 1TB SSD, Quick Resume." },
    { id: 15, name: "Apple Watch Ultra 2", cat: "watch", price: 10500000, icon: "fa-clock", rating: 4.9, reviews: 89, desc: "Titanium, 36 soat batareya, GPS." },
    { id: 16, name: "Apple Watch Series 9", cat: "watch", price: 5800000, icon: "fa-clock", rating: 4.8, reviews: 167, desc: "S9 chip, Double Tap gesture." },
    { id: 17, name: "Samsung Galaxy Watch 6", cat: "watch", price: 3800000, icon: "fa-clock", rating: 4.7, reviews: 92, desc: "BioActive Sensor, Wear OS." },
    { id: 18, name: "Nintendo Switch OLED", cat: "gaming", price: 4500000, icon: "fa-gamepad", rating: 4.8, reviews: 201, desc: "7 inch OLED ekran, 64GB." }
];

const catNames = {
    phone: "Telefon", laptop: "Noutbuk", tablet: "Planshet",
    audio: "Audio", gaming: "O'yin konsoli", watch: "Soat"
};

// ============ HOLAT ============
let cart = JSON.parse(localStorage.getItem('tz_cart') || '[]');
let currentUser = JSON.parse(localStorage.getItem('tz_user') || 'null');
let currentFilter = 'all';
let currentSort = 'default';
let maxPrice = 30000000;

// ============ YORDAMCHI FUNKSIYALAR ============
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

function formatPrice(p) {
    return p.toLocaleString('uz-UZ') + " so'm";
}

function showToast(msg, type = 'success') {
    const t = $('#toast');
    t.textContent = msg;
    t.className = 'toast show ' + type;
    setTimeout(() => t.classList.remove('show'), 3000);
}

function saveCart() {
    localStorage.setItem('tz_cart', JSON.stringify(cart));
    $('#cartCount').textContent = cart.reduce((s, i) => s + i.qty, 0);
}

// ============ ROUTING ============
function navigate(hash) {
    $$('.page').forEach(p => p.classList.remove('active'));
    const page = $(hash) || $('#home');
    page.classList.add('active');
    $$('.nav-link').forEach(l => l.classList.toggle('active', l.getAttribute('href') === hash));
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('hashchange', () => navigate(location.hash));
$$('.nav-link').forEach(l => l.addEventListener('click', () => {
    setTimeout(() => navigate(l.getAttribute('href')), 10);
}));

// ============ MAHSULOT KARTASI ============
function productCardHTML(p) {
    return `
    <div class="product-card" data-id="${p.id}">
      <div class="product-image">
        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
        <i class="fa-solid ${p.icon}"></i>
      </div>
      <div class="product-info">
        <div class="product-cat">${catNames[p.cat]}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-rating">
          ${'★'.repeat(Math.floor(p.rating))}${'☆'.repeat(5 - Math.floor(p.rating))}
          <span>(${p.reviews})</span>
        </div>
        <div class="product-bottom">
          <div class="product-price">${formatPrice(p.price)}</div>
          <button class="add-cart-btn" data-id="${p.id}"><i class="fa-solid fa-plus"></i></button>
        </div>
      </div>
    </div>
  `;
}

function renderFeatured() {
    const featured = products.filter(p => p.badge).slice(0, 8);
    $('#featuredProducts').innerHTML = featured.map(productCardHTML).join('');
    attachProductEvents($('#featuredProducts'));
}

function renderShop() {
    let filtered = products.filter(p => {
        if (currentFilter !== 'all' && p.cat !== currentFilter) return false;
        if (p.price > maxPrice) return false;
        return true;
    });
    if (currentSort === 'price-asc') filtered.sort((a, b) => a.price - b.price);
    else if (currentSort === 'price-desc') filtered.sort((a, b) => b.price - a.price);
    else if (currentSort === 'name') filtered.sort((a, b) => a.name.localeCompare(b.name));

    $('#shopProducts').innerHTML = filtered.map(productCardHTML).join('');
    $('#productCount').textContent = filtered.length + ' ta mahsulot';
    attachProductEvents($('#shopProducts'));
}

function attachProductEvents(container) {
    container.querySelectorAll('.product-card').forEach(c => {
        c.addEventListener('click', e => {
            if (e.target.closest('.add-cart-btn')) return;
            showProductDetail(parseInt(c.dataset.id));
        });
    });
    container.querySelectorAll('.add-cart-btn').forEach(b => {
        b.addEventListener('click', e => {
            e.stopPropagation();
            addToCart(parseInt(b.dataset.id));
        });
    });
}

// ============ MAHSULOT TAFSilotLARI ============
function showProductDetail(id) {
    const p = products.find(x => x.id === id);
    if (!p) return;
    $('#productDetail').innerHTML = `
    <div class="product-detail-image"><i class="fa-solid ${p.icon}"></i></div>
    <div class="product-detail-info">
      <div class="product-cat">${catNames[p.cat]}</div>
      <h1>${p.name}</h1>
      <div class="product-rating">
        ${'★'.repeat(Math.floor(p.rating))}${'☆'.repeat(5 - Math.floor(p.rating))}
        <span>(${p.reviews} ta sharh)</span>
      </div>
      <div class="price">${formatPrice(p.price)}</div>
      <p>${p.desc}</p>
      <p><strong>Xususiyatlar:</strong> Rasmiy kafolat 1 yil. Bepul yetkazib berish. Original mahsulot.</p>
      <div class="detail-actions">
        <div class="qty-selector">
          <button id="qtyMinus">−</button>
          <span id="qtyVal">1</span>
          <button id="qtyPlus">+</button>
        </div>
        <button class="btn-primary btn-lg" id="addToCartDetail"><i class="fa-solid fa-cart-shopping"></i> Savatchaga</button>
      </div>
    </div>
  `;
    location.hash = '#product';
    let qty = 1;
    $('#qtyMinus').onclick = () => { if (qty > 1) { qty--; $('#qtyVal').textContent = qty; } };
    $('#qtyPlus').onclick = () => { qty++; $('#qtyVal').textContent = qty; };
    $('#addToCartDetail').onclick = () => addToCart(p.id, qty);
}

// ============ SAVATCHA ============
function addToCart(id, qty = 1) {
    const p = products.find(x => x.id === id);
    const existing = cart.find(i => i.id === id);
    if (existing) existing.qty += qty;
    else cart.push({ id, name: p.name, price: p.price, icon: p.icon, qty });
    saveCart();
    renderCart();
    showToast(`✓ ${p.name} savatchaga qo'shildi`);
}

function renderCart() {
    const c = $('#cartItems');
    if (cart.length === 0) {
        c.innerHTML = '<p style="text-align:center;padding:3rem;color:var(--gray);">Savatcha bo\'sh</p>';
    } else {
        c.innerHTML = cart.map(i => `
      <div class="cart-item">
        <div class="cart-item-icon"><i class="fa-solid ${i.icon}"></i></div>
        <div class="cart-item-info">
          <h4>${i.name}</h4>
          <div class="price">${formatPrice(i.price)}</div>
          <div class="cart-item-qty">
            <button onclick="changeQty(${i.id},-1)">−</button>
            <span>${i.qty}</span>
            <button onclick="changeQty(${i.id},1)">+</button>
          </div>
        </div>
        <button class="remove-item" onclick="removeFromCart(${i.id})"><i class="fa-solid fa-trash"></i></button>
      </div>
    `).join('');
    }
    const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
    $('#cartTotal').textContent = formatPrice(total);
}

window.changeQty = (id, d) => {
    const i = cart.find(x => x.id === id);
    if (!i) return;
    i.qty += d;
    if (i.qty < 1) cart = cart.filter(x => x.id !== id);
    saveCart(); renderCart();
};

window.removeFromCart = id => {
    cart = cart.filter(x => x.id !== id);
    saveCart(); renderCart();
    showToast('Mahsulot o\'chirildi');
};

$('#cartBtn').onclick = () => $('#cartSidebar').classList.add('open');
$('#closeCart').onclick = () => $('#cartSidebar').classList.remove('open');

$('#checkoutBtn').onclick = () => {
    if (!currentUser) {
        $('#cartSidebar').classList.remove('open');
        openAuth();
        showToast('Avval tizimga kiring', 'error');
        return;
    }
    if (cart.length === 0) { showToast('Savatcha bo\'sh', 'error'); return; }
    const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
    showToast(`✓ Buyurtma qabul qilindi! Jami: ${formatPrice(total)}`);
    cart = []; saveCart(); renderCart();
    $('#cartSidebar').classList.remove('open');
};

// ============ FILTRLAR ============
$$('input[name="cat"]').forEach(r => r.addEventListener('change', () => {
    currentFilter = r.value; renderShop();
}));
$('#priceRange').addEventListener('input', e => {
    maxPrice = parseInt(e.target.value);
    $('#maxPrice').textContent = formatPrice(maxPrice);
    renderShop();
});
$('#sortSelect').addEventListener('change', e => {
    currentSort = e.target.value; renderShop();
});

// ============ KATEGORIYA BOSILGAN ============
$$('.cat-card').forEach(c => c.addEventListener('click', () => {
    currentFilter = c.dataset.cat;
    $$('input[name="cat"]').forEach(r => r.checked = r.value === currentFilter);
    location.hash = '#shop';
    renderShop();
}));

// ============ QIDIRUV ============
$('#searchBtn').onclick = () => $('#searchOverlay').classList.add('open');
$('#closeSearch').onclick = () => $('#searchOverlay').classList.remove('open');
$('#searchInput').addEventListener('input', e => {
    const q = e.target.value.toLowerCase().trim();
    const res = $('#searchResults');
    if (!q) { res.innerHTML = ''; return; }
    const found = products.filter(p => p.name.toLowerCase().includes(q));
    res.innerHTML = found.length ? found.map(p => `
    <div class="search-result-item" data-id="${p.id}">
      <i class="fa-solid ${p.icon}"></i>
      <div style="flex:1">
        <div style="font-weight:600">${p.name}</div>
        <div style="color:var(--gray);font-size:0.9rem">${catNames[p.cat]}</div>
      </div>
      <div style="color:var(--primary);font-weight:700">${formatPrice(p.price)}</div>
    </div>
  `).join('') : '<p style="text-align:center;padding:2rem;color:var(--gray)">Hech narsa topilmadi</p>';
    res.querySelectorAll('.search-result-item').forEach(i => i.onclick = () => {
        showProductDetail(parseInt(i.dataset.id));
        $('#searchOverlay').classList.remove('open');
        $('#searchInput').value = '';
        res.innerHTML = '';
    });
});

// ============ AUTENTIFIKATSIYA ============
function openAuth() { $('#authModal').classList.add('open'); }
function closeAuth() { $('#authModal').classList.remove('open'); }

$('#authBtn').onclick = () => {
    if (currentUser) {
        if (confirm(`${currentUser.name}, chiqmoqchimisiz?`)) {
            localStorage.removeItem('tz_user');
            currentUser = null;
            updateAuthUI();
            showToast('Chiqdingiz');
        }
    } else openAuth();
};
$('#closeAuth').onclick = closeAuth;
$('#authModal').addEventListener('click', e => { if (e.target.id === 'authModal') closeAuth(); });

$$('.auth-tab').forEach(t => t.addEventListener('click', () => {
    $$('.auth-tab').forEach(x => x.classList.remove('active'));
    t.classList.add('active');
    $$('.auth-form').forEach(f => f.classList.remove('active'));
    $(`#${t.dataset.tab}Form`).classList.add('active');
}));

$('#loginForm').addEventListener('submit', e => {
    e.preventDefault();
    const email = $('#loginEmail').value;
    const pass = $('#loginPassword').value;
    const users = JSON.parse(localStorage.getItem('tz_users') || '[]');
    const user = users.find(u => u.email === email && u.password === pass);
    if (user) {
        currentUser = user;
        localStorage.setItem('tz_user', JSON.stringify(user));
        updateAuthUI();
        closeAuth();
        showToast(`✓ Xush kelibsiz, ${user.name}!`);
        e.target.reset();
    } else {
        showToast('Email yoki parol noto\'g\'ri', 'error');
    }
});

$('#registerForm').addEventListener('submit', e => {
    e.preventDefault();
    const name = $('#regName').value;
    const email = $('#regEmail').value;
    const phone = $('#regPhone').value;
    const pass = $('#regPassword').value;
    const pass2 = $('#regPassword2').value;
    if (pass !== pass2) { showToast('Parollar mos kelmadi', 'error'); return; }
    const users = JSON.parse(localStorage.getItem('tz_users') || '[]');
    if (users.find(u => u.email === email)) {
        showToast('Bu email allaqachon ro\'yxatdan o\'tgan', 'error'); return;
    }
    const user = { name, email, phone, password: pass };
    users.push(user);
    localStorage.setItem('tz_users', JSON.stringify(users));
    currentUser = user;
    localStorage.setItem('tz_user', JSON.stringify(user));
    updateAuthUI();
    closeAuth();
    showToast(`✓ Hisob yaratildi! Xush kelibsiz, ${name}!`);
    e.target.reset();
});

function updateAuthUI() {
    if (currentUser) {
        $('#authBtnText').textContent = currentUser.name.split(' ')[0];
        $('#authBtn').style.background = 'var(--gradient)';
    } else {
        $('#authBtnText').textContent = 'Kirish';
        $('#authBtn').style.background = '';
    }
}

// ============ KONTAKT FORMA ============
$('#contactForm').addEventListener('submit', e => {
    e.preventDefault();
    showToast('✓ Xabaringiz yuborildi! Tez orada javob beramiz.');
    e.target.reset();
});

// ============ ESC TUGMASI ============
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        closeAuth();
        $('#searchOverlay').classList.remove('open');
        $('#cartSidebar').classList.remove('open');
    }
});

// ============ ISHGA TUSHIRISH ============
renderFeatured();
renderShop();
renderCart();
saveCart();
updateAuthUI();
if (location.hash) navigate(location.hash);