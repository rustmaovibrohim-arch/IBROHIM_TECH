tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                brand: {
                    500: '#8b5cf6',
                    600: '#7c3aed',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        }
    }
}


// Exchange Rate
const UZS_RATE = 12800;

// MULTI-LANGUAGE TRANSLATION DICTIONARY
const I18N = {
    uz: {
        searchPlaceholder: "Qidirish (masalan: iPhone, PlayStation, MacBook)...",
        heroBadge: "⚡ Yangi Avlod Texnologiyalari 2026",
        heroTitleStart: "Eng so'nggi gadjetlar",
        heroTitleEnd: "IBROHIM_TECH do'konida",
        heroSub: "iPhone 16 Pro Max, M4 MacBook, PS5 Pro va rasmiy kafolatli boshqa premium elektronikalar to'plami.",
        shopNow: "Hozir xarid qilish",
        catPhones: "Telefonlar katalogi",
        sortBy: "Saralash:",
        sortDefault: "Odatiy",
        sortPriceLow: "Narx: Arzonroq",
        sortPriceHigh: "Narx: Qimmatroq",
        sortRating: "Reyting bo'yicha",
        noProducts: "Mahsulotlar topilmadi",
        noProductsSub: "Qidiruv so'rovingizni o'zgartirib ko'ring yoki boshqa kategoriyani tanlang.",
        footerCopy: "Barcha huquqlar himoyalangan. Toshkent, O'zbekiston.",
        nameLabel: "Ismingiz va Familiyangiz",
        emailLabel: "Email manzilingiz",
        cartTitle: "Savatchangiz",
        wishlistTitle: "Sevimlilar",
        compareTitle: "Mahsulotlarni Taqqoslash",
        totalPrice: "Jami summa:",
        checkoutBtn: "Buyurtma berish",
        priceTag: "Narxi:",
        addToCart: "Savat",
        quickView: "Tezkor ko'rish",
        emptyCart: "Savatingiz hozircha bo'sh",
        emptyWishlist: "Sevimlilar ro'yxati bo'sh",
        signUpTitle: "Ro'yxatdan o'tish",
        signUpSub: "Ismingiz va emailingizni kiriting",
        signInTitle: "Xush kelibsiz!",
        signInSub: "Tizimga kirish uchun emailingizni kiriting",
        hasAccountQuestion: "Akkountingiz bormi? ",
        noAccountQuestion: "Akkountingiz yo'qmi? ",
        btnSignUp: "Ro'yxatdan o'tish (Sign Up)",
        btnSignIn: "Kirish (Sign In)",
        actionSignIn: "Kirish",
        actionSignUp: "Ro'yxatdan o'tish",
        logout: "Chiqish",
        garantyText: "Rasmiy Kafolat 1 Yil",
        specLabel: "Texnik parametrlar",
        categoryLabel: "Kategoriya",
        ratingLabel: "Reyting",
        delete: "O'chirish",
        orderSuccess: "Buyurtmangiz muvaffaqiyatli qabul qilindi!",
        addedToCart: "savatga qo'shildi!",
        addedToWishlist: "Sevimlilarga qo'shildi ❤",
        removedFromWishlist: "Sevimlilardan olib tashlandi",
        addedToCompare: "Taqqoslashga qo'shildi",
        removedFromCompare: "Taqqoslashdan olib tashlandi",
        maxCompareToast: "Maksimal 4 ta mahsulotni taqqoslashingiz mumkin!"
    },
    en: {
        searchPlaceholder: "Search (e.g. iPhone, PlayStation, MacBook)...",
        heroBadge: "⚡ Next-Gen Electronics 2026",
        heroTitleStart: "The Latest Tech Gadgets",
        heroTitleEnd: "at IBROHIM_TECH Store",
        heroSub: "iPhone 16 Pro Max, M4 MacBook, PS5 Pro, and other officially guaranteed premium tech.",
        shopNow: "Shop Now",
        catPhones: "Smartphones Catalog",
        sortBy: "Sort by:",
        sortDefault: "Default",
        sortPriceLow: "Price: Low to High",
        sortPriceHigh: "Price: High to Low",
        sortRating: "By Rating",
        noProducts: "No products found",
        noProductsSub: "Try changing your search query or pick another category.",
        footerCopy: "All rights reserved. Tashkent, Uzbekistan.",
        nameLabel: "Your Full Name",
        emailLabel: "Your Email Address",
        cartTitle: "Your Shopping Cart",
        wishlistTitle: "Wishlist",
        compareTitle: "Product Comparison",
        totalPrice: "Total Amount:",
        checkoutBtn: "Place Order",
        priceTag: "Price:",
        addToCart: "Cart",
        quickView: "Quick View",
        emptyCart: "Your cart is currently empty",
        emptyWishlist: "Your wishlist is empty",
        signUpTitle: "Sign Up",
        signUpSub: "Enter your full name and email address",
        signInTitle: "Welcome Back!",
        signInSub: "Enter your email address to sign in",
        hasAccountQuestion: "Already have an account? ",
        noAccountQuestion: "Don't have an account? ",
        btnSignUp: "Sign Up",
        btnSignIn: "Sign In",
        actionSignIn: "Sign In",
        actionSignUp: "Sign Up",
        logout: "Sign Out",
        garantyText: "1 Year Official Warranty",
        specLabel: "Technical Specs",
        categoryLabel: "Category",
        ratingLabel: "Rating",
        delete: "Remove",
        orderSuccess: "Your order has been placed successfully!",
        addedToCart: "added to cart!",
        addedToWishlist: "Added to wishlist ❤",
        removedFromWishlist: "Removed from wishlist",
        addedToCompare: "Added to compare list",
        removedFromCompare: "Removed from compare list",
        maxCompareToast: "You can compare up to 4 items max!"
    },
    ru: {
        searchPlaceholder: "Поиск (например: iPhone, PlayStation, MacBook)...",
        heroBadge: "⚡ Электроника Нового Поколения 2026",
        heroTitleStart: "Самые свежие гаджеты",
        heroTitleEnd: "в магазине IBROHIM_TECH",
        heroSub: "iPhone 16 Pro Max, M4 MacBook, PS5 Pro и другие премиум устройства с официальной гарантией.",
        shopNow: "Купить сейчас",
        catPhones: "Каталог смартфонов",
        sortBy: "Сортировка:",
        sortDefault: "По умолчанию",
        sortPriceLow: "Сначала дешевые",
        sortPriceHigh: "Сначала дорогие",
        sortRating: "По рейтингу",
        noProducts: "Товары не найдены",
        noProductsSub: "Попробуйте изменить поисковый запрос или выберите другую категорию.",
        footerCopy: "Все права защищены. Ташкент, Узбекистан.",
        nameLabel: "Ваше Имя и Фамилия",
        emailLabel: "Ваш Email адрес",
        cartTitle: "Ваша Корзина",
        wishlistTitle: "Избранное",
        compareTitle: "Сравнение товаров",
        totalPrice: "Итоговая сумма:",
        checkoutBtn: "Оформить заказ",
        priceTag: "Цена:",
        addToCart: "В корзину",
        quickView: "Быстрый просмотр",
        emptyCart: "Ваша корзина пока пуста",
        emptyWishlist: "Список избранного пуст",
        signUpTitle: "Регистрация",
        signUpSub: "Введите ваше имя и email адрес",
        signInTitle: "С возвращением!",
        signInSub: "Введите ваш email адрес для входа",
        hasAccountQuestion: "Уже есть аккаунт? ",
        noAccountQuestion: "Нет аккаунта? ",
        btnSignUp: "Зарегистрироваться (Sign Up)",
        btnSignIn: "Войти (Sign In)",
        actionSignIn: "Войти",
        actionSignUp: "Регистрация",
        logout: "Выйти",
        garantyText: "Официальная Гарантия 1 Год",
        specLabel: "Характеристики",
        categoryLabel: "Категория",
        ratingLabel: "Рейтинг",
        delete: "Удалить",
        orderSuccess: "Ваш заказ успешно принят!",
        addedToCart: "добавлен в корзину!",
        addedToWishlist: "Добавлено в избранное ❤",
        removedFromWishlist: "Удалено из избранного",
        addedToCompare: "Добавлено к сравнению",
        removedFromCompare: "Удалено из сравнения",
        maxCompareToast: "Вы можете сравнивать максимум 4 товара!"
    }
};

// Category dictionary across languages
const CAT_TRANSLATIONS = {
    "Barchasi": { uz: "Barchasi", en: "All", ru: "Все" },
    "Telefonlar": { uz: "Telefonlar", en: "Smartphones", ru: "Смартфоны" },
    "Noutbuklar": { uz: "Noutbuklar", en: "Laptops", ru: "Ноутбуки" },
    "Konsollar": { uz: "Konsollar", en: "Gaming Consoles", ru: "Консоли" },
    "Audio": { uz: "Audio", en: "Audio", ru: "Аудио" },
    "Gadjetlar": { uz: "Gadjetlar", en: "Smart Gadgets", ru: "Гаджеты" }
};

// Rich 20+ Product Collection
const PRODUCTS = [
    { id: 1, name: "iPhone 16 Pro Max", category: "Telefonlar", priceUSD: 1299, image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80", rating: 4.9, spec: "256GB, Titanium, A18 Pro" },
    { id: 2, name: "Samsung Galaxy S25 Ultra", category: "Telefonlar", priceUSD: 1249, image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=80", rating: 4.8, spec: "512GB, Snapdragon 8 Gen 4" },
    { id: 3, name: "PlayStation 5 Pro", category: "Konsollar", priceUSD: 699, image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=600&q=80", rating: 4.9, spec: "2TB SSD, 4K 120FPS RayTracing" },
    { id: 4, name: "MacBook Pro 16 M4 Max", category: "Noutbuklar", priceUSD: 2499, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80", rating: 5.0, spec: "36GB RAM, 1TB SSD, M4 Max" },
    { id: 5, name: "Apple Vision Pro", category: "Gadjetlar", priceUSD: 3499, image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=600&q=80", rating: 4.7, spec: "Spatial Computer, Dual 4K Displays" },
    { id: 6, name: "AirPods Max 2 USB-C", category: "Audio", priceUSD: 549, image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80", rating: 4.6, spec: "Active Noise Cancellation, Spatial Audio" },
    { id: 7, name: "iPad Pro 13 M4", category: "Gadjetlar", priceUSD: 1299, image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80", rating: 4.8, spec: "Ultra Retina XDR OLED, M4 Chip" },
    { id: 8, name: "ASUS ROG Strix SCAR 18", category: "Noutbuklar", priceUSD: 3199, image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=600&q=80", rating: 4.9, spec: "i9-14900HX, RTX 4090, 64GB RAM" },
    { id: 9, name: "DJI Mini 4 Pro Drone", category: "Gadjetlar", priceUSD: 759, image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=600&q=80", rating: 4.9, spec: "4K 60fps HDR, 34 Min Flight Time" },
    { id: 10, name: "Apple Watch Ultra 2", category: "Gadjetlar", priceUSD: 799, image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=600&q=80", rating: 4.8, spec: "Titanium Case, 3000 nits display" },
    { id: 11, name: "Marshall Stanmore III", category: "Audio", priceUSD: 379, image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80", rating: 4.7, spec: "Bluetooth 5.2, Vintage Design" },
    { id: 12, name: "Sony WH-1000XM5", category: "Audio", priceUSD: 399, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80", rating: 4.8, spec: "Industry Leading Noise Canceling" },
    { id: 13, name: "Nintendo Switch OLED", category: "Konsollar", priceUSD: 349, image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?auto=format&fit=crop&w=600&q=80", rating: 4.6, spec: "7-inch OLED Screen, 64GB" },
    { id: 14, name: "GoPro HERO12 Black", category: "Gadjetlar", priceUSD: 399, image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=600&q=80", rating: 4.7, spec: "5.3K 60fps Video, Enduro Battery" },
    { id: 15, name: "Samsung Odyssey OLED G9", category: "Gadjetlar", priceUSD: 1599, image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80", rating: 4.9, spec: "49-inch Curved Dual QHD 240Hz" },
    { id: 16, name: "Steam Deck OLED 1TB", category: "Konsollar", priceUSD: 649, image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80", rating: 4.8, spec: "90Hz HDR OLED, 50Wh Battery" },
    { id: 17, name: "Bose QuietComfort Ultra", category: "Audio", priceUSD: 429, image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80", rating: 4.8, spec: "Immersive Audio, World-Class ANC" },
    { id: 18, name: "Razer Blade 16 Gaming", category: "Noutbuklar", priceUSD: 2899, image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=600&q=80", rating: 4.8, spec: "i9-14900HX, RTX 4080, Dual Mode Mini-LED" },
    { id: 19, name: "Canon EOS R5 Mark II", category: "Gadjetlar", priceUSD: 4299, image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80", rating: 5.0, spec: "45MP Full-Frame, 8K RAW Video" },
    { id: 20, name: "Anker Prime 27,650mAh", category: "Gadjetlar", priceUSD: 179, image: "https://images.unsplash.com/photo-1609592424109-dd9892f1b177?auto=format&fit=crop&w=600&q=80", rating: 4.8, spec: "250W Power Bank, Smart App Control" }
];

// Central Application State
let state = {
    currentUser: null,
    authIsSignUp: false,
    lang: "uz",          // "uz", "en", "ru"
    selectedCategory: "Barchasi",
    searchQuery: "",
    sortOption: "default",
    currency: "USD",     // "USD" or "UZS"
    theme: "dark",       // "dark" or "light"
    cart: [],            // [{product, qty}]
    wishlist: [],        // [productId]
    compareList: []      // [productId]
};

window.addEventListener('DOMContentLoaded', () => {
    // Restore Language
    const savedLang = localStorage.getItem('ibrohim_tech_lang');
    if (savedLang && I18N[savedLang]) {
        state.lang = savedLang;
        document.getElementById('langSelect').value = savedLang;
    }

    initCanvasAnimation();
    initClockAndWeather();
    checkAuthOnLoad();
    applyLanguage();
    renderCategories();
    renderProducts();
    updateBadges();
});

function changeLanguage(newLang) {
    if (!I18N[newLang]) return;
    state.lang = newLang;
    localStorage.setItem('ibrohim_tech_lang', newLang);
    applyLanguage();
    renderCategories();
    renderProducts();
    updateCartDrawer();
    updateWishlistDrawer();
    setAuthMode(state.authIsSignUp);
}

function t(key) {
    return I18N[state.lang][key] || key;
}

function applyLanguage() {
    // Translate all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const k = el.getAttribute('data-i18n');
        if (I18N[state.lang][k]) {
            el.textContent = I18N[state.lang][k];
        }
    });

    // Translate placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const k = el.getAttribute('data-i18n-placeholder');
        if (I18N[state.lang][k]) {
            el.setAttribute('placeholder', I18N[state.lang][k]);
        }
    });
}

// AUTHENTICATION SYSTEM
function checkAuthOnLoad() {
    const storedUser = localStorage.getItem('ibrohim_tech_user');
    const hasVisited = localStorage.getItem('ibrohim_tech_has_registered');

    if (storedUser) {
        state.currentUser = JSON.parse(storedUser);
        renderUserProfile();
        showToast(`${t('signInTitle')} ${state.currentUser.name}`);
    } else {
        if (hasVisited === 'true') {
            setAuthMode(false); // Sign In mode
        } else {
            setAuthMode(true);  // Sign Up mode
        }
        showAuthModal();
    }
}

function setAuthMode(isSignUp) {
    state.authIsSignUp = isSignUp;
    const titleEl = document.getElementById('authTitle');
    const subEl = document.getElementById('authSubtitle');
    const nameGrp = document.getElementById('nameGroup');
    const submitBtnText = document.getElementById('authBtnText');
    const toggleBtn = document.getElementById('authToggleBtn');
    const toggleQuestion = document.getElementById('authToggleQuestion');

    if (isSignUp) {
        titleEl.textContent = t('signUpTitle');
        subEl.textContent = t('signUpSub');
        nameGrp.classList.remove('hidden');
        document.getElementById('authNameInput').setAttribute('required', 'true');
        submitBtnText.textContent = t('actionSignUp');
        toggleQuestion.textContent = t('hasAccountQuestion');
        toggleBtn.textContent = t('btnSignIn');
    } else {
        titleEl.textContent = t('signInTitle');
        subEl.textContent = t('signInSub');
        nameGrp.classList.add('hidden');
        document.getElementById('authNameInput').removeAttribute('required');
        submitBtnText.textContent = t('actionSignIn');
        toggleQuestion.textContent = t('noAccountQuestion');
        toggleBtn.textContent = t('btnSignUp');
    }
}

function toggleAuthMode() {
    setAuthMode(!state.authIsSignUp);
}

function showAuthModal() {
    document.getElementById('authModal').classList.remove('hidden');
}

function closeAuthModal() {
    document.getElementById('authModal').classList.add('hidden');
}

function handleAuthSubmit(e) {
    e.preventDefault();
    const email = document.getElementById('authEmailInput').value.trim();
    const nameInput = document.getElementById('authNameInput').value.trim();

    if (!email) return;

    if (state.authIsSignUp) {
        const name = nameInput || email.split('@')[0];
        state.currentUser = { name, email };
        localStorage.setItem('ibrohim_tech_has_registered', 'true');
    } else {
        const derivedName = email.split('@')[0];
        const capitalized = derivedName.charAt(0).toUpperCase() + derivedName.slice(1);
        state.currentUser = { name: capitalized, email };
    }

    localStorage.setItem('ibrohim_tech_user', JSON.stringify(state.currentUser));
    renderUserProfile();
    closeAuthModal();
    showToast(`${t('signInTitle')} ${state.currentUser.name}!`);
}

function logoutUser() {
    state.currentUser = null;
    localStorage.removeItem('ibrohim_tech_user');
    renderUserProfile();
    showToast(t('logout'));
    checkAuthOnLoad();
}

function renderUserProfile() {
    const area = document.getElementById('userProfileArea');
    if (state.currentUser) {
        const initial = state.currentUser.name.charAt(0).toUpperCase();
        area.innerHTML = `
                    <div class="flex items-center gap-2">
                        <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 text-white font-bold flex items-center justify-center text-xs shadow-md">
                            ${initial}
                        </div>
                        <span class="hidden sm:inline text-xs font-semibold max-w-[90px] truncate">${state.currentUser.name}</span>
                        <button onclick="logoutUser()" class="p-1.5 text-slate-400 hover:text-red-400 transition" title="${t('logout')}">
                            <i class="fa-solid fa-right-from-bracket text-xs"></i>
                        </button>
                    </div>
                `;
    } else {
        area.innerHTML = `
                    <button onclick="showAuthModal()" class="px-3 py-1.5 rounded-xl bg-purple-600/20 text-purple-400 border border-purple-500/30 text-xs font-bold hover:bg-purple-600 hover:text-white transition">
                        ${t('btnSignIn')}
                    </button>
                `;
    }
}

// CURRENCY SWITCHER
function toggleCurrency() {
    state.currency = state.currency === "USD" ? "UZS" : "USD";
    document.getElementById('currencyBadge').textContent = state.currency === "USD" ? "USD ($)" : "UZS (so'm)";
    renderProducts();
    updateCartDrawer();
}

function formatPrice(usdPrice) {
    if (state.currency === "USD") {
        return `$${usdPrice.toLocaleString()}`;
    } else {
        const uzsPrice = usdPrice * UZS_RATE;
        return `${uzsPrice.toLocaleString()} so'm`;
    }
}

function renderCategories() {
    const rawCategories = ["Barchasi", "Telefonlar", "Noutbuklar", "Konsollar", "Audio", "Gadjetlar"];
    const container = document.getElementById('categoryContainer');

    container.innerHTML = rawCategories.map(catKey => {
        const active = state.selectedCategory === catKey;
        const label = CAT_TRANSLATIONS[catKey][state.lang];

        return `
                    <button onclick="selectCategory('${catKey}')" class="px-5 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${active
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30'
                : 'bg-slate-800/60 light:bg-slate-200 text-slate-300 light:text-slate-700 hover:bg-slate-700'
            }">
                        ${label}
                    </button>
                `;
    }).join('');
}

function selectCategory(catKey) {
    state.selectedCategory = catKey;
    renderCategories();
    renderProducts();
}

function scrollToCategory(catKey) {
    selectCategory(catKey);
    document.getElementById('productsSection').scrollIntoView({ behavior: 'smooth' });
}

function handleSearch(query) {
    state.searchQuery = query.toLowerCase().trim();
    renderProducts();
}

function handleSortChange(val) {
    state.sortOption = val;
    renderProducts();
}

function renderProducts() {
    const grid = document.getElementById('productsGrid');
    const emptyState = document.getElementById('emptyState');

    let filtered = PRODUCTS.filter(p => {
        const matchesCat = state.selectedCategory === "Barchasi" || p.category === state.selectedCategory;
        const matchesSearch = p.name.toLowerCase().includes(state.searchQuery) || p.spec.toLowerCase().includes(state.searchQuery);
        return matchesCat && matchesSearch;
    });

    // Sorting logic
    if (state.sortOption === "priceLow") {
        filtered.sort((a, b) => a.priceUSD - b.priceUSD);
    } else if (state.sortOption === "priceHigh") {
        filtered.sort((a, b) => b.priceUSD - a.priceUSD);
    } else if (state.sortOption === "rating") {
        filtered.sort((a, b) => b.rating - a.rating);
    }

    if (filtered.length === 0) {
        grid.innerHTML = "";
        emptyState.classList.remove('hidden');
        return;
    } else {
        emptyState.classList.add('hidden');
    }

    grid.innerHTML = filtered.map(p => {
        const isWishlisted = state.wishlist.includes(p.id);
        const isCompared = state.compareList.includes(p.id);
        const translatedCategory = CAT_TRANSLATIONS[p.category] ? CAT_TRANSLATIONS[p.category][state.lang] : p.category;

        return `
                    <div class="glass-card rounded-2xl p-4 flex flex-col justify-between hover:border-purple-500/50 transition-all duration-300 group hover:-translate-y-1 shadow-lg">
                        
                        <div class="relative overflow-hidden rounded-xl mb-3 h-48 bg-slate-800/40">
                            <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
                            
                            <!-- Wishlist Button -->
                            <button onclick="toggleWishlist(${p.id})" class="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-slate-900/70 backdrop-blur-md flex items-center justify-center text-xs transition ${isWishlisted ? 'text-pink-500' : 'text-slate-300 hover:text-pink-500'}">
                                <i class="fa-${isWishlisted ? 'solid' : 'regular'} fa-heart"></i>
                            </button>

                            <!-- Quick View Button -->
                            <button onclick="openQuickView(${p.id})" class="absolute bottom-2.5 left-2.5 px-3 py-1 rounded-lg bg-slate-900/80 backdrop-blur-md text-[11px] font-medium text-slate-200 hover:text-white transition opacity-0 group-hover:opacity-100">
                                <i class="fa-regular fa-eye mr-1"></i> ${t('quickView')}
                            </button>
                        </div>

                        <div>
                            <div class="flex items-center justify-between text-xs text-slate-400 mb-1">
                                <span>${translatedCategory}</span>
                                <span class="text-amber-400 font-semibold flex items-center gap-1">
                                    <i class="fa-solid fa-star text-[10px]"></i> ${p.rating}
                                </span>
                            </div>
                            
                            <h3 class="font-bold text-base mb-1 group-hover:text-purple-400 transition line-clamp-1">${p.name}</h3>
                            <p class="text-xs text-slate-400 light:text-slate-500 mb-3 line-clamp-1">${p.spec}</p>
                        </div>

                        <div class="pt-2 border-t border-slate-800/80 light:border-slate-200 flex items-center justify-between gap-2">
                            <div>
                                <span class="text-xs text-slate-400 block">${t('priceTag')}</span>
                                <span class="text-base font-extrabold rainbow-text">${formatPrice(p.priceUSD)}</span>
                            </div>

                            <div class="flex items-center gap-1.5">
                                <button onclick="toggleCompare(${p.id})" class="p-2.5 rounded-xl border border-slate-700/80 hover:bg-slate-800 text-xs text-slate-300 transition ${isCompared ? 'border-blue-500 text-blue-400' : ''}" title="${t('compareTitle')}">
                                    <i class="fa-solid fa-code-compare"></i>
                                </button>
                                <button onclick="addToCart(${p.id})" class="p-2.5 px-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition shadow-md shadow-purple-600/30 flex items-center gap-1">
                                    <i class="fa-solid fa-plus"></i> <span class="hidden sm:inline">${t('addToCart')}</span>
                                </button>
                            </div>
                        </div>

                    </div>
                `;
    }).join('');
}

function addToCart(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    const existing = state.cart.find(item => item.product.id === productId);

    if (existing) {
        existing.qty += 1;
    } else {
        state.cart.push({ product, qty: 1 });
    }

    updateBadges();
    updateCartDrawer();
    showToast(`${product.name} ${t('addedToCart')}`);
}

function updateCartQty(productId, change) {
    const item = state.cart.find(i => i.product.id === productId);
    if (!item) return;

    item.qty += change;
    if (item.qty <= 0) {
        state.cart = state.cart.filter(i => i.product.id !== productId);
    }

    updateBadges();
    updateCartDrawer();
}

function updateCartDrawer() {
    const container = document.getElementById('cartItemsList');
    const totalEl = document.getElementById('cartTotalPrice');

    if (state.cart.length === 0) {
        container.innerHTML = `
                    <div class="text-center py-12 text-slate-400">
                        <i class="fa-solid fa-cart-arrow-down text-4xl mb-3 opacity-50"></i>
                        <p class="text-sm">${t('emptyCart')}</p>
                    </div>
                `;
        totalEl.textContent = formatPrice(0);
        return;
    }

    let totalUSD = 0;

    container.innerHTML = state.cart.map(item => {
        const itemTotal = item.product.priceUSD * item.qty;
        totalUSD += itemTotal;

        return `
                    <div class="flex items-center justify-between p-3 rounded-xl bg-slate-800/40 light:bg-slate-100 border border-slate-700/50">
                        <img src="${item.product.image}" alt="${item.product.name}" class="w-12 h-12 rounded-lg object-cover">
                        <div class="flex-1 px-3">
                            <h4 class="text-xs font-bold line-clamp-1">${item.product.name}</h4>
                            <span class="text-xs text-purple-400 font-semibold">${formatPrice(item.product.priceUSD)}</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <button onclick="updateCartQty(${item.product.id}, -1)" class="w-6 h-6 rounded bg-slate-700 flex items-center justify-center text-xs text-white">-</button>
                            <span class="text-xs font-bold">${item.qty}</span>
                            <button onclick="updateCartQty(${item.product.id}, 1)" class="w-6 h-6 rounded bg-slate-700 flex items-center justify-center text-xs text-white">+</button>
                        </div>
                    </div>
                `;
    }).join('');

    totalEl.textContent = formatPrice(totalUSD);
}

function toggleCartDrawer() {
    document.getElementById('cartDrawer').classList.toggle('hidden');
    updateCartDrawer();
}

function handleCheckout() {
    if (state.cart.length === 0) {
        showToast(t('emptyCart'));
        return;
    }

    if (!state.currentUser) {
        showAuthModal();
        return;
    }

    confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
    });

    showToast(t('orderSuccess'));
    state.cart = [];
    updateBadges();
    updateCartDrawer();
    toggleCartDrawer();
}

function toggleWishlist(productId) {
    const idx = state.wishlist.indexOf(productId);
    if (idx > -1) {
        state.wishlist.splice(idx, 1);
        showToast(t('removedFromWishlist'));
    } else {
        state.wishlist.push(productId);
        showToast(t('addedToWishlist'));
    }

    updateBadges();
    renderProducts();
    updateWishlistDrawer();
}

function updateWishlistDrawer() {
    const container = document.getElementById('wishlistItemsList');
    const items = PRODUCTS.filter(p => state.wishlist.includes(p.id));

    if (items.length === 0) {
        container.innerHTML = `
                    <div class="text-center py-12 text-slate-400">
                        <i class="fa-regular fa-heart text-4xl mb-3 opacity-50"></i>
                        <p class="text-sm">${t('emptyWishlist')}</p>
                    </div>
                `;
        return;
    }

    container.innerHTML = items.map(p => `
                <div class="flex items-center justify-between p-3 rounded-xl bg-slate-800/40 light:bg-slate-100 border border-slate-700/50">
                    <img src="${p.image}" alt="${p.name}" class="w-12 h-12 rounded-lg object-cover">
                    <div class="flex-1 px-3">
                        <h4 class="text-xs font-bold line-clamp-1">${p.name}</h4>
                        <span class="text-xs text-purple-400 font-semibold">${formatPrice(p.priceUSD)}</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <button onclick="addToCart(${p.id})" class="p-2 rounded-lg bg-purple-600 text-white text-xs font-bold">
                            <i class="fa-solid fa-cart-plus"></i>
                        </button>
                        <button onclick="toggleWishlist(${p.id})" class="p-2 text-slate-400 hover:text-red-400 text-xs">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </div>
            `).join('');
}

function toggleWishlistDrawer() {
    document.getElementById('wishlistDrawer').classList.toggle('hidden');
    updateWishlistDrawer();
}

function toggleCompare(productId) {
    const idx = state.compareList.indexOf(productId);
    if (idx > -1) {
        state.compareList.splice(idx, 1);
        showToast(t('removedFromCompare'));
    } else {
        if (state.compareList.length >= 4) {
            showToast(t('maxCompareToast'));
            return;
        }
        state.compareList.push(productId);
        showToast(t('addedToCompare'));
    }
    updateBadges();
    renderProducts();
}

function openCompareModal() {
    if (state.compareList.length === 0) {
        showToast(t('compareTitle'));
        return;
    }

    const items = PRODUCTS.filter(p => state.compareList.includes(p.id));
    const container = document.getElementById('compareTableContainer');

    container.innerHTML = `
                <table class="w-full text-left text-xs border-collapse">
                    <thead>
                        <tr class="border-b border-slate-800">
                            <th class="p-3">${t('specLabel')}</th>
                            ${items.map(p => `
                                <th class="p-3 text-center min-w-[150px]">
                                    <img src="${p.image}" class="w-16 h-16 object-cover rounded-xl mx-auto mb-2">
                                    <p class="font-bold text-sm">${p.name}</p>
                                    <button onclick="toggleCompare(${p.id}); openCompareModal();" class="text-red-400 text-[10px] mt-1 hover:underline">${t('delete')}</button>
                                </th>
                            `).join('')}
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-800/50">
                        <tr>
                            <td class="p-3 font-bold text-slate-400">${t('categoryLabel')}</td>
                            ${items.map(p => `<td class="p-3 text-center">${CAT_TRANSLATIONS[p.category] ? CAT_TRANSLATIONS[p.category][state.lang] : p.category}</td>`).join('')}
                        </tr>
                        <tr>
                            <td class="p-3 font-bold text-slate-400">${t('priceTag')}</td>
                            ${items.map(p => `<td class="p-3 text-center font-bold rainbow-text">${formatPrice(p.priceUSD)}</td>`).join('')}
                        </tr>
                        <tr>
                            <td class="p-3 font-bold text-slate-400">${t('ratingLabel')}</td>
                            ${items.map(p => `<td class="p-3 text-center text-amber-400">★ ${p.rating}</td>`).join('')}
                        </tr>
                        <tr>
                            <td class="p-3 font-bold text-slate-400">${t('specLabel')}</td>
                            ${items.map(p => `<td class="p-3 text-center">${p.spec}</td>`).join('')}
                        </tr>
                    </tbody>
                </table>
            `;

    document.getElementById('compareModal').classList.remove('hidden');
}

function closeCompareModal() {
    document.getElementById('compareModal').classList.add('hidden');
}

function openQuickView(productId) {
    const p = PRODUCTS.find(item => item.id === productId);
    if (!p) return;

    const content = document.getElementById('quickViewContent');
    content.innerHTML = `
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <img src="${p.image}" alt="${p.name}" class="w-full h-64 object-cover rounded-2xl">
                    <div>
                        <span class="text-xs font-bold text-purple-400 uppercase tracking-widest">${CAT_TRANSLATIONS[p.category] ? CAT_TRANSLATIONS[p.category][state.lang] : p.category}</span>
                        <h2 class="text-2xl font-black mt-1 mb-2">${p.name}</h2>
                        <div class="flex items-center gap-2 mb-4">
                            <span class="text-amber-400 text-sm font-bold"><i class="fa-solid fa-star"></i> ${p.rating}</span>
                            <span class="text-slate-500">•</span>
                            <span class="text-xs text-slate-400">${t('garantyText')}</span>
                        </div>
                        <p class="text-xs text-slate-300 light:text-slate-600 mb-6 leading-relaxed">${p.spec}. IBROHIM_TECH.</p>
                        
                        <div class="flex items-center justify-between mb-6">
                            <span class="text-2xl font-extrabold rainbow-text">${formatPrice(p.priceUSD)}</span>
                        </div>

                        <div class="flex gap-3">
                            <button onclick="addToCart(${p.id}); closeQuickView();" class="flex-1 py-3 rounded-xl bg-purple-600 text-white font-bold text-sm hover:bg-purple-500 transition shadow-lg shadow-purple-600/30">
                                ${t('addToCart')}
                            </button>
                        </div>
                    </div>
                </div>
            `;

    document.getElementById('quickViewModal').classList.remove('hidden');
}

function closeQuickView() {
    document.getElementById('quickViewModal').classList.add('hidden');
}

function updateBadges() {
    const cartCountEl = document.getElementById('cartCount');
    const cartTotalQty = state.cart.reduce((sum, item) => sum + item.qty, 0);
    if (cartTotalQty > 0) {
        cartCountEl.textContent = cartTotalQty;
        cartCountEl.classList.remove('hidden');
    } else {
        cartCountEl.classList.add('hidden');
    }

    const wishlistCountEl = document.getElementById('wishlistCount');
    if (state.wishlist.length > 0) {
        wishlistCountEl.textContent = state.wishlist.length;
        wishlistCountEl.classList.remove('hidden');
    } else {
        wishlistCountEl.classList.add('hidden');
    }

    const compareCountEl = document.getElementById('compareCount');
    if (state.compareList.length > 0) {
        compareCountEl.textContent = state.compareList.length;
        compareCountEl.classList.remove('hidden');
    } else {
        compareCountEl.classList.add('hidden');
    }
}

function showToast(message) {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'px-4 py-3 rounded-xl bg-slate-900/90 text-white border border-slate-700 shadow-2xl text-xs font-semibold backdrop-blur-md flex items-center gap-2 animate-fade-in pointer-events-auto';
    toast.innerHTML = `<i class="fa-solid fa-circle-check text-purple-400"></i> ${message}`;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.3s';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function toggleTheme() {
    state.theme = state.theme === "dark" ? "light" : "dark";
    const html = document.documentElement;
    const icon = document.getElementById('themeIcon');

    if (state.theme === "light") {
        html.classList.remove('dark');
        html.classList.add('light');
        document.body.classList.replace('bg-slate-950', 'bg-slate-50');
        document.body.classList.replace('text-slate-100', 'text-slate-900');
        icon.className = "fa-solid fa-sun text-amber-500";
    } else {
        html.classList.remove('light');
        html.classList.add('dark');
        document.body.classList.replace('bg-slate-50', 'bg-slate-950');
        document.body.classList.replace('text-slate-900', 'text-slate-100');
        icon.className = "fa-solid fa-moon text-slate-300";
    }
}

function initCanvasAnimation() {
    const canvas = document.getElementById('themeCanvas');
    const ctx = canvas.getContext('2d');

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    const snowflakes = Array.from({ length: 65 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2.5 + 1,
        speedY: Math.random() * 1 + 0.5,
        speedX: Math.random() * 0.5 - 0.25,
        opacity: Math.random() * 0.7 + 0.3
    }));

    const sunRays = Array.from({ length: 25 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 20 + 10,
        speedY: -(Math.random() * 0.3 + 0.1),
        opacity: Math.random() * 0.2 + 0.05
    }));

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (state.theme === "dark") {
            ctx.fillStyle = "#ffffff";
            snowflakes.forEach(p => {
                ctx.beginPath();
                ctx.globalAlpha = p.opacity;
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fill();

                p.y += p.speedY;
                p.x += p.speedX;

                if (p.y > canvas.height) {
                    p.y = -5;
                    p.x = Math.random() * canvas.width;
                }
            });
        } else {
            sunRays.forEach(r => {
                ctx.beginPath();
                ctx.globalAlpha = r.opacity;
                const gradient = ctx.createRadialGradient(r.x, r.y, 0, r.x, r.y, r.radius);
                gradient.addColorStop(0, 'rgba(251, 191, 36, 0.4)');
                gradient.addColorStop(1, 'rgba(251, 191, 36, 0)');
                ctx.fillStyle = gradient;
                ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
                ctx.fill();

                r.y += r.speedY;
                if (r.y < -20) {
                    r.y = canvas.height + 20;
                    r.x = Math.random() * canvas.width;
                }
            });
        }

        requestAnimationFrame(animate);
    }

    animate();
}

function initClockAndWeather() {
    function updateClock() {
        const now = new Date();
        const options = { timeZone: 'Asia/Tashkent', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
        const timeString = new Intl.DateTimeFormat([], options).format(now);
        document.getElementById('clockText').textContent = timeString;
    }

    setInterval(updateClock, 1000);
    updateClock();
}
