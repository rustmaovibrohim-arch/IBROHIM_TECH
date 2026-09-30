tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                brand: {
                    50: '#f0f9ff',
                    500: '#06b6d4',
                    600: '#0284c7',
                    700: '#0369a1',
                    violet: '#8b5cf6',
                    pink: '#ec4899',
                    dark: '#060911',
                    lightBg: '#f8fafc',
                    lightCard: '#ffffff'
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            boxShadow: {
                'neon-rainbow': '0 0 25px rgba(236, 72, 153, 0.45), 0 0 35px rgba(6, 182, 212, 0.45)',
                'neon-blue': '0 0 25px rgba(6, 182, 212, 0.45)',
                'neon-purple': '0 0 25px rgba(139, 92, 246, 0.45)',
                'sun-glow': '0 0 50px rgba(251, 191, 36, 0.75)'
            }
        }
    }
}



const USD_TO_UZS = 12800;

// Expanded 20+ Products Catalog
const products = [
    {
        id: 1,
        name: "iPhone 16 Pro Max",
        category: "phones",
        brand: "Apple",
        price: 1299,
        originalPrice: 1399,
        rating: 4.9,
        badge: "Top Flagman",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80",
        specs: { processor: "Apple A18 Pro (3nm)", ram: "8 GB", display: '6.9" OLED 120Hz', battery: "4685 mAh", storage: "256GB" },
        description: "Camera Control tugmasi va titanium ramkaga ega eng kuchli iPhone."
    },
    {
        id: 2,
        name: "Samsung Galaxy S25 Ultra",
        category: "phones",
        brand: "Samsung",
        price: 1249,
        originalPrice: 1349,
        rating: 4.8,
        badge: "Galaxy AI",
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=80",
        specs: { processor: "Snapdragon 8 Elite", ram: "12 GB", display: '6.8" Dynamic AMOLED 2X', battery: "5000 mAh", storage: "512GB" },
        description: "S-Pen va sun'iy intellekt AI imkoniyatlari bilan jihozlangan bayroqdor."
    },
    {
        id: 3,
        name: "PlayStation 5 Pro",
        category: "gaming",
        brand: "Sony",
        price: 799,
        originalPrice: 849,
        rating: 4.9,
        badge: "4K 120FPS",
        image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=600&q=80",
        specs: { processor: "Custom AMD RDNA 3", ram: "16 GB GDDR6", display: "8K Support", battery: "AC Power", storage: "2TB NVMe SSD" },
        description: "PSSR AI grafikasi va 2TB saqlash hajmiga ega yangi PS5 Pro."
    },
    {
        id: 4,
        name: "MacBook Pro 16 M4 Max",
        category: "laptops",
        brand: "Apple",
        price: 2499,
        originalPrice: 2699,
        rating: 5.0,
        badge: "M4 Powerhouse",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80",
        specs: { processor: "Apple M4 Max 16-Core", ram: "36 GB Unified", display: '16.2" Liquid XDR', battery: "100Wh", storage: "1TB SSD" },
        description: "Professional ishlar va og'ir 3D loyihalar uchun cheksiz quvvat."
    },
    {
        id: 5,
        name: "Apple Vision Pro",
        category: "accessories",
        brand: "Apple",
        price: 3499,
        originalPrice: 3699,
        rating: 4.7,
        badge: "Spatial Computer",
        image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=600&q=80",
        specs: { processor: "Apple M2 + R1 Dual Chip", ram: "16 GB", display: "Micro-OLED 23M Pixels", battery: "2.5 soat", storage: "512GB" },
        description: "Fazo va virtual olamni birlashtiruvchi inqilobiy spatial ko'zoynak."
    },
    {
        id: 6,
        name: "AirPods Max 2 (Type-C)",
        category: "audio",
        brand: "Apple",
        price: 549,
        originalPrice: 599,
        rating: 4.8,
        badge: "Hi-Res Audio",
        image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80",
        specs: { processor: "Apple H1 Chip", ram: "N/A", display: "Active Noise Cancelling", battery: "20 soat", storage: "N/A" },
        description: "Atrof-muhit shovqinini so'ndiruvchi va premium audio quloqchin."
    },
    {
        id: 7,
        name: "ASUS ROG Strix SCAR 18",
        category: "laptops",
        brand: "ASUS",
        price: 2899,
        originalPrice: 3099,
        rating: 4.9,
        badge: "RTX 4090",
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=600&q=80",
        specs: { processor: "Intel Core i9-14900HX", ram: "64 GB DDR5", display: '18" Nebula HDR 240Hz', battery: "90Wh", storage: "2TB SSD" },
        description: "O'yin ishqibozlari uchun eng so'nggi va kuchli geyming noutbuk."
    },
    {
        id: 8,
        name: "iPad Pro 13 M4",
        category: "accessories",
        brand: "Apple",
        price: 1199,
        originalPrice: 1299,
        rating: 4.9,
        badge: "Tandem OLED",
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80",
        specs: { processor: "Apple M4 Chip", ram: "8 GB / 16 GB", display: '13" OLED Ultra Retina', battery: "38.99 Wh", storage: "256GB" },
        description: "Juda ingichka va Tandem OLED displeyiga ega planshet."
    },
    {
        id: 9,
        name: "DJI Drone Mini 4 Pro",
        category: "drones",
        brand: "DJI",
        price: 759,
        originalPrice: 829,
        rating: 4.9,
        badge: "4K 60FPS HDR",
        image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=600&q=80",
        specs: { processor: "O4 Video Transmission", ram: "N/A", display: "4K HDR Video", battery: "34 daqiqa", storage: "MicroSD Slot" },
        description: "249 gramm vaznga ega va to'siqlardan qochish datchikli dron."
    },
    {
        id: 10,
        name: "Apple Watch Ultra 2",
        category: "watches",
        brand: "Apple",
        price: 779,
        originalPrice: 799,
        rating: 4.9,
        badge: "Titanium 3000nits",
        image: "https://images.unsplash.com/photo-1510017803434-a899398421b3?auto=format&fit=crop&w=600&q=80",
        specs: { processor: "S9 SiP Chip", ram: "64 GB", display: "Always-On Retina 3000nits", battery: "36-72 soat", storage: "64GB" },
        description: "Ekstremal sharoitlar uchun titanium korpusli aqlli soat."
    },
    {
        id: 11,
        name: "Steam Deck OLED 1TB",
        category: "gaming",
        brand: "Valve",
        price: 649,
        originalPrice: 699,
        rating: 4.8,
        badge: "Handheld PC",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80",
        specs: { processor: "6nm AMD APU", ram: "16 GB LPDDR5", display: '7.4" OLED 90Hz', battery: "50Wh", storage: "1TB NVMe SSD" },
        description: "OLED ekranli portativ kompyuter o'yin qurilmasi."
    },
    {
        id: 12,
        name: "Marshall Stanmore III",
        category: "audio",
        brand: "Marshall",
        price: 379,
        originalPrice: 399,
        rating: 4.8,
        badge: "Iconic Sound",
        image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
        specs: { processor: "Bluetooth 5.2", ram: "N/A", display: "Analog Controls", battery: "AC Powered", storage: "N/A" },
        description: "Retro dizayn va tiniq akustik ovozga ega bluetooth dinamik."
    },
    {
        id: 13,
        name: "Razer Blade 16 Gaming",
        category: "laptops",
        brand: "Razer",
        price: 2999,
        originalPrice: 3199,
        rating: 4.9,
        badge: "Dual OLED",
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80",
        specs: { processor: "Intel i9-14900HX", ram: "32 GB DDR5", display: '16" QHD+ 240Hz OLED', battery: "95Wh", storage: "2TB SSD" },
        description: "OLED Dual-Mode displeyga ega premium geyming noutbuk."
    },
    {
        id: 14,
        name: "Samsung Galaxy Z Fold 6",
        category: "phones",
        brand: "Samsung",
        price: 1899,
        originalPrice: 1999,
        rating: 4.7,
        badge: "Foldable AI",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=600&q=80",
        specs: { processor: "Snapdragon 8 Gen 3", ram: "12 GB", display: '7.6" Dynamic AMOLED', battery: "4400 mAh", storage: "512GB" },
        description: "Bukunuvchan katta displey va ko'p vazifalilik AI qulayliklari."
    },
    {
        id: 15,
        name: "Sony WH-1000XM5",
        category: "audio",
        brand: "Sony",
        price: 379,
        originalPrice: 399,
        rating: 4.8,
        badge: "Best ANC",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
        specs: { processor: "Sony V1 Processor", ram: "N/A", display: "Active Noise Cancelling", battery: "30 soat", storage: "N/A" },
        description: "Yuqori darajadagi shovqin so'ndiruvchi simsiz quloqchin."
    },
    {
        id: 16,
        name: "GoPro Hero 13 Black",
        category: "drones",
        brand: "GoPro",
        price: 429,
        originalPrice: 479,
        rating: 4.8,
        badge: "5.3K Video",
        image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=600&q=80",
        specs: { processor: "GP2 Processor", ram: "N/A", display: "Dual LCD Screens", battery: "1900 mAh", storage: "MicroSD" },
        description: "Suv o'tkazmaydigan va 5.3K kadr/sek formatida tasvirga oluvchi aksiya-kamera."
    },
    {
        id: 17,
        name: "Nintendo Switch OLED",
        category: "gaming",
        brand: "Nintendo",
        price: 349,
        originalPrice: 379,
        rating: 4.8,
        badge: "7.0 OLED",
        image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?auto=format&fit=crop&w=600&q=80",
        specs: { processor: "Custom Nvidia Tegra", ram: "4 GB", display: '7.0" OLED Screen', battery: "4.5 - 9 soat", storage: "64GB" },
        description: "OLED displeyli mashhur oilaviy va portativ o'yin konsoli."
    },
    {
        id: 18,
        name: "Anker Prime Power Bank 250W",
        category: "accessories",
        brand: "Anker",
        price: 169,
        originalPrice: 199,
        rating: 4.9,
        badge: "27,650mAh",
        image: "https://images.unsplash.com/photo-1609592424109-dd9892f1b177?auto=format&fit=crop&w=600&q=80",
        specs: { processor: "Smart App Control", ram: "N/A", display: "Digital Display", battery: "27,650 mAh", storage: "N/A" },
        description: "MacBook va smartfonlarni ultra tezkor quvvatlovchi pauerbank."
    },
    {
        id: 19,
        name: "Meta Quest 3 512GB",
        category: "gaming",
        brand: "Meta",
        price: 499,
        originalPrice: 549,
        rating: 4.7,
        badge: "Mixed Reality",
        image: "https://images.unsplash.com/photo-1622979135225-d2ba269bc1bd?auto=format&fit=crop&w=600&q=80",
        specs: { processor: "Snapdragon XR2 Gen 2", ram: "8 GB", display: "4K+ Infinite Display", battery: "2.2 soat", storage: "512GB" },
        description: "Aralash reallik (MR) va virtual o'yinlar uchun VR ko'zoynak."
    },
    {
        id: 20,
        name: "JBL Boombox 3 Wi-Fi",
        category: "audio",
        brand: "JBL",
        price: 499,
        originalPrice: 549,
        rating: 4.8,
        badge: "Massive Bass",
        image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=600&q=80",
        specs: { processor: "Wi-Fi 6 + BT 5.3", ram: "N/A", display: "Subwoofer Built-in", battery: "24 soat", storage: "N/A" },
        description: "Kuchli bas va 24 soatlik akkumuylatoga ega moslashtirilgan akustika."
    }
];

// Categories Data
const categories = [
    { id: "all", name: "Barchasi", icon: "fa-solid fa-border-all" },
    { id: "phones", name: "Telefonlar", icon: "fa-solid fa-mobile-screen-button" },
    { id: "laptops", name: "Noutbuklar", icon: "fa-solid fa-laptop" },
    { id: "gaming", name: "Playstation & Gaming", icon: "fa-solid fa-gamepad" },
    { id: "audio", name: "AirPods & Audio", icon: "fa-solid fa-headphones" },
    { id: "watches", name: "Smart Soatlar", icon: "fa-solid fa-stopwatch" },
    { id: "drones", name: "Dronlar", icon: "fa-solid fa-helicopter" },
    { id: "accessories", name: "Aksessuarlar", icon: "fa-solid fa-plug" }
];

// Application State
let activeCategory = "all";
let currentSort = "featured";
let maxPrice = 4000;
let searchQuery = "";
let isDarkMode = true;

let cart = JSON.parse(localStorage.getItem('ibrohim_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('ibrohim_wishlist')) || [];
let compareList = JSON.parse(localStorage.getItem('ibrohim_compare')) || [];
let promoApplied = false;

document.addEventListener('DOMContentLoaded', () => {
    initLiveClock();
    initTashkentWeather();
    initVisualParticles();
    renderCategories();
    renderProducts();
    updateCartBadge();
    updateWishlistBadge();
    updateCompareBadge();
    initCountdownTimer();

    document.getElementById('search-input').addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        handleSearchSuggestions(searchQuery);
        renderProducts();
    });
});

function verifyPassword(e) {
    e.preventDefault();
    const input = document.getElementById('gate-password-input').value.trim();
    const errorMsg = document.getElementById('password-error');
    const card = document.getElementById('password-card');

    if (input === 'IBROHIM_TECH') {
        const gate = document.getElementById('password-gate');
        gate.classList.add('opacity-0', 'pointer-events-none');
        setTimeout(() => gate.remove(), 500);
        showToast("Xush kelibsiz! IBROHIM_TECH sayti ochildi.", "success");
    } else {
        errorMsg.classList.remove('hidden');
        card.classList.add('shake-animation');
        setTimeout(() => card.classList.remove('shake-animation'), 400);
    }
}

function togglePasswordVisibility() {
    const input = document.getElementById('gate-password-input');
    const icon = document.getElementById('eye-icon');
    if (input.type === 'password') {
        input.type = 'text';
        icon.className = 'fa-solid fa-eye-slash';
    } else {
        input.type = 'password';
        icon.className = 'fa-solid fa-eye';
    }
}

function initLiveClock() {
    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');

        const clockElem = document.getElementById('live-clock');
        if (clockElem) clockElem.innerText = `${hours}:${minutes}:${seconds}`;

        const months = ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avgust', 'Sentabr', 'Oktabr', 'Noyabr', 'Dekabr'];
        const dateElem = document.getElementById('live-date');
        if (dateElem) dateElem.innerText = `${now.getDate()}-${months[now.getMonth()]}, ${now.getFullYear()}`;
    }
    updateClock();
    setInterval(updateClock, 1000);
}

async function initTashkentWeather() {
    try {
        // Fetch Tashkent coordinates weather via Open-Meteo
        const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=41.2995&longitude=69.2401&current_weather=true');
        const data = await res.json();
        if (data && data.current_weather) {
            const temp = Math.round(data.current_weather.temperature);
            document.getElementById('weather-temp').innerText = `${temp > 0 ? '+' : ''}${temp}°C`;
        }
    } catch (err) {
        console.log('Tashkent weather fallback active');
    }
}

function initVisualParticles() {
    const canvas = document.getElementById('fx-canvas');
    const ctx = canvas.getContext('2d');

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const particles = [];
    for (let i = 0; i < 70; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 3 + 1,
            speedY: Math.random() * 1 + 0.5,
            speedX: Math.random() * 0.6 - 0.3,
            opacity: Math.random() * 0.7 + 0.3
        });
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        particles.forEach(p => {
            ctx.beginPath();
            ctx.globalAlpha = p.opacity;
            if (isDarkMode) {
                ctx.fillStyle = '#ffffff'; // Snowfall
            } else {
                ctx.fillStyle = '#f59e0b'; // Warm Golden Sparkles
            }
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fill();

            p.y += isDarkMode ? p.speedY : -p.speedY * 0.5;
            p.x += p.speedX;

            if (p.y > height) { p.y = -10; p.x = Math.random() * width; }
            if (p.y < -10) { p.y = height + 10; p.x = Math.random() * width; }
        });

        requestAnimationFrame(animate);
    }
    animate();
}

function toggleTheme() {
    const html = document.documentElement;
    const icon = document.getElementById('theme-icon');
    const sunWidget = document.getElementById('sun-widget');

    isDarkMode = !isDarkMode;

    if (isDarkMode) {
        html.classList.add('dark');
        icon.className = 'fa-solid fa-moon text-lg text-cyan-400';
        sunWidget.classList.add('opacity-0');
        showToast("Tungi rejim va qor yog'ishi effekti yoqildi", "info");
    } else {
        html.classList.remove('dark');
        icon.className = 'fa-solid fa-sun text-lg text-amber-400';
        sunWidget.classList.remove('opacity-0');
        showToast("Kunduzgi rejim va quyosh effekti yoqildi", "info");
    }
}

function renderCategories() {
    const container = document.getElementById('category-pills');
    container.innerHTML = categories.map(cat => `
                <button onclick="selectCategory('${cat.id}')" 
                        class="px-4 py-2 rounded-2xl text-xs font-semibold flex items-center gap-2 whitespace-nowrap transition-all ${activeCategory === cat.id
            ? 'rainbow-flowing-bg text-white shadow-neon-rainbow scale-105 font-bold'
            : 'bg-slate-900/80 text-gray-400 hover:bg-slate-800 hover:text-white border border-slate-800'
        }">
                    <i class="${cat.icon}"></i> ${cat.name}
                </button>
            `).join('');
}

function selectCategory(id) {
    activeCategory = id;
    renderCategories();
    renderProducts();
}

function handleSortChange(value) {
    currentSort = value;
    renderProducts();
}

function handlePriceRange(val) {
    maxPrice = parseInt(val);
    document.getElementById('price-val').innerText = `$${maxPrice}`;
    renderProducts();
}

function renderProducts() {
    const grid = document.getElementById('product-grid');
    const noProducts = document.getElementById('no-products');

    let filtered = products.filter(p => {
        const matchCat = activeCategory === 'all' || p.category === activeCategory;
        const matchPrice = p.price <= maxPrice;
        const matchSearch = p.name.toLowerCase().includes(searchQuery) || p.brand.toLowerCase().includes(searchQuery);
        return matchCat && matchPrice && matchSearch;
    });

    if (currentSort === 'price-low') filtered.sort((a, b) => a.price - b.price);
    else if (currentSort === 'price-high') filtered.sort((a, b) => b.price - a.price);
    else if (currentSort === 'rating') filtered.sort((a, b) => b.rating - a.rating);

    if (filtered.length === 0) {
        grid.innerHTML = '';
        noProducts.classList.remove('hidden');
        return;
    } else {
        noProducts.classList.add('hidden');
    }

    grid.innerHTML = filtered.map(item => {
        const isWish = wishlist.includes(item.id);
        const isComp = compareList.includes(item.id);
        const priceInUzs = (item.price * USD_TO_UZS).toLocaleString('uz-UZ');

        return `
                    <div class="glass-card rounded-3xl overflow-hidden flex flex-col justify-between group relative">
                        <div class="absolute top-3 left-3 z-10">
                            <span class="bg-cyan-500/90 text-slate-950 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider backdrop-blur-md">
                                ${item.badge}
                            </span>
                        </div>

                        <div class="absolute top-3 right-3 z-10 flex flex-col space-y-2">
                            <button onclick="toggleWishlist(${item.id})" class="w-8 h-8 rounded-full bg-slate-900/80 border border-slate-700 text-gray-300 hover:text-pink-500 flex items-center justify-center backdrop-blur-md transition-all">
                                <i class="${isWish ? 'fa-solid fa-heart text-pink-500' : 'fa-regular fa-heart'}"></i>
                            </button>
                            <button onclick="toggleCompare(${item.id})" class="w-8 h-8 rounded-full bg-slate-900/80 border border-slate-700 text-gray-300 hover:text-cyan-400 flex items-center justify-center backdrop-blur-md transition-all">
                                <i class="fa-solid fa-scale-balanced ${isComp ? 'text-cyan-400' : ''}"></i>
                            </button>
                        </div>

                        <div class="relative h-48 bg-slate-950/40 p-4 flex items-center justify-center">
                            <img src="${item.image}" alt="${item.name}" class="max-h-full object-contain group-hover:scale-110 transition-transform duration-500">
                        </div>

                        <div class="p-5 flex-1 flex flex-col justify-between space-y-3">
                            <div>
                                <div class="flex items-center justify-between text-xs mb-1">
                                    <span class="uppercase font-bold text-cyan-400">${item.brand}</span>
                                    <span class="flex items-center gap-1 text-amber-400 font-bold">
                                        <i class="fa-solid fa-star text-[10px]"></i> ${item.rating}
                                    </span>
                                </div>
                                <h3 class="font-bold text-white text-base group-hover:text-cyan-300 transition-colors">${item.name}</h3>
                                <p class="text-xs text-gray-400 line-clamp-2 mt-1">${item.description}</p>
                            </div>

                            <div class="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                                <div>
                                    <div class="text-xs text-gray-500 line-through">$${item.originalPrice}</div>
                                    <div class="text-lg font-black text-white">$${item.price}</div>
                                    <div class="text-[10px] text-cyan-400 font-medium">${priceInUzs} so'm</div>
                                </div>

                                <div class="flex items-center space-x-2">
                                    <button onclick="openQuickView(${item.id})" class="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-gray-300 text-xs" title="Batafsil">
                                        <i class="fa-solid fa-eye"></i>
                                    </button>
                                    <button onclick="addToCart(${item.id})" class="px-3.5 py-2.5 rounded-xl rainbow-flowing-bg text-white font-bold text-xs shadow-md hover:scale-105 transition-all">
                                        <i class="fa-solid fa-cart-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
    }).join('');
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    const existing = cart.find(i => i.id === id);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart();
    updateCartBadge();
    showToast(`${product.name} savatga qo'shildi!`, "success");
}

function updateCartQuantity(id, delta) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            cart = cart.filter(i => i.id !== id);
        }
        saveCart();
        renderCartItems();
        updateCartBadge();
    }
}

function saveCart() {
    localStorage.setItem('ibrohim_cart', JSON.stringify(cart));
}

function updateCartBadge() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-badge').innerText = count;
}

function openCartDrawer() {
    renderCartItems();
    const drawer = document.getElementById('cart-drawer');
    drawer.classList.remove('invisible');
    setTimeout(() => {
        document.getElementById('cart-backdrop').classList.add('opacity-100');
        document.getElementById('cart-panel').classList.remove('translate-x-full');
    }, 10);
}

function closeCartDrawer() {
    document.getElementById('cart-backdrop').classList.remove('opacity-100');
    document.getElementById('cart-panel').classList.add('translate-x-full');
    setTimeout(() => document.getElementById('cart-drawer').classList.add('invisible'), 300);
}

function renderCartItems() {
    const container = document.getElementById('cart-items');
    if (cart.length === 0) {
        container.innerHTML = `<p class="text-center text-xs text-gray-500 py-10">Savat bo'sh</p>`;
        updateCartTotals();
        return;
    }

    container.innerHTML = cart.map(item => `
                <div class="p-3 bg-slate-950 rounded-2xl border border-slate-800 flex items-center space-x-3">
                    <img src="${item.image}" class="w-14 h-14 object-contain bg-slate-900 rounded-xl p-1">
                    <div class="flex-1 min-w-0">
                        <h4 class="text-xs font-bold text-white truncate">${item.name}</h4>
                        <div class="text-xs text-cyan-400 font-extrabold">$${item.price}</div>
                        <div class="flex items-center space-x-2 mt-2">
                            <button onclick="updateCartQuantity(${item.id}, -1)" class="w-5 h-5 bg-slate-800 text-white rounded text-xs">-</button>
                            <span class="text-xs text-white font-bold">${item.quantity}</span>
                            <button onclick="updateCartQuantity(${item.id}, 1)" class="w-5 h-5 bg-slate-800 text-white rounded text-xs">+</button>
                        </div>
                    </div>
                </div>
            `).join('');

    updateCartTotals();
}

function updateCartTotals() {
    const subtotal = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
    const discount = promoApplied ? subtotal * 0.10 : 0;
    const total = subtotal - discount;
    const totalUzs = (total * USD_TO_UZS).toLocaleString('uz-UZ');

    document.getElementById('cart-subtotal').innerText = `$${subtotal.toFixed(2)}`;
    document.getElementById('cart-discount').innerText = `-$${discount.toFixed(2)}`;
    document.getElementById('cart-total').innerText = `$${total.toFixed(2)}`;
    document.getElementById('cart-total-uzs').innerText = `${totalUzs} so'm`;
    document.getElementById('checkout-final-price').innerText = `$${total.toFixed(2)} (${totalUzs} so'm)`;

    if (promoApplied) document.getElementById('discount-row').classList.remove('hidden');
}

function applyPromoCode() {
    const val = document.getElementById('promo-input').value.trim().toUpperCase();
    if (val === 'IBROHIM10') {
        promoApplied = true;
        updateCartTotals();
        showToast("10% chegirma promokodi qo'llanildi!", "success");
    } else {
        showToast("Noto'g'ri promokod!", "error");
    }
}

function toggleWishlist(id) {
    if (wishlist.includes(id)) {
        wishlist = wishlist.filter(i => i !== id);
        showToast("Istaklardan olib tashlandi", "info");
    } else {
        wishlist.push(id);
        showToast("Istaklarga qo'shildi!", "success");
    }
    localStorage.setItem('ibrohim_wishlist', JSON.stringify(wishlist));
    updateWishlistBadge();
    renderProducts();
}

function updateWishlistBadge() {
    const badge = document.getElementById('wishlist-badge');
    if (wishlist.length > 0) {
        badge.innerText = wishlist.length;
        badge.classList.remove('hidden');
    } else {
        badge.classList.add('hidden');
    }
}

function openWishlistDrawer() {
    renderWishlistItems();
    const drawer = document.getElementById('wishlist-drawer');
    drawer.classList.remove('invisible');
    setTimeout(() => {
        document.getElementById('wishlist-backdrop').classList.add('opacity-100');
        document.getElementById('wishlist-panel').classList.remove('translate-x-full');
    }, 10);
}

function closeWishlistDrawer() {
    document.getElementById('wishlist-backdrop').classList.remove('opacity-100');
    document.getElementById('wishlist-panel').classList.add('translate-x-full');
    setTimeout(() => document.getElementById('wishlist-drawer').classList.add('invisible'), 300);
}

function renderWishlistItems() {
    const container = document.getElementById('wishlist-items');
    const wishProducts = products.filter(p => wishlist.includes(p.id));

    if (wishProducts.length === 0) {
        container.innerHTML = `<p class="text-center text-xs text-gray-500 py-10">Istaklar ro'yxati bo'sh</p>`;
        return;
    }

    container.innerHTML = wishProducts.map(item => `
                <div class="p-3 bg-slate-950 rounded-2xl border border-slate-800 flex items-center justify-between">
                    <div class="flex items-center space-x-3">
                        <img src="${item.image}" class="w-12 h-12 object-contain bg-slate-900 rounded-xl p-1">
                        <div>
                            <h4 class="text-xs font-bold text-white">${item.name}</h4>
                            <div class="text-xs text-cyan-400 font-bold">$${item.price}</div>
                        </div>
                    </div>
                    <button onclick="addToCart(${item.id})" class="px-3 py-1.5 rainbow-flowing-bg text-white font-bold text-xs rounded-xl">Savatga</button>
                </div>
            `).join('');
}

function toggleCompare(id) {
    if (compareList.includes(id)) {
        compareList = compareList.filter(i => i !== id);
        showToast("Taqqoslashdan olib tashlandi", "info");
    } else {
        if (compareList.length >= 3) {
            showToast("Maksimal 3 ta mahsulot taqqoslanadi", "error");
            return;
        }
        compareList.push(id);
        showToast("Taqqoslash ro'yxatiga qo'shildi", "success");
    }
    localStorage.setItem('ibrohim_compare', JSON.stringify(compareList));
    updateCompareBadge();
    renderProducts();
}

function updateCompareBadge() {
    const badge = document.getElementById('compare-badge');
    if (compareList.length > 0) {
        badge.innerText = compareList.length;
        badge.classList.remove('hidden');
    } else {
        badge.classList.add('hidden');
    }
}

function openCompareModal() {
    if (compareList.length === 0) {
        showToast("Taqqoslash uchun kamida 1 ta mahsulot tanlang", "info");
        return;
    }

    const items = products.filter(p => compareList.includes(p.id));
    const container = document.getElementById('compare-table-container');

    container.innerHTML = `
                <table class="w-full text-left border-collapse min-w-[500px] text-xs">
                    <thead>
                        <tr class="border-b border-slate-800">
                            <th class="p-2 text-gray-400">Xususiyat</th>
                            ${items.map(i => `
                                <th class="p-2 text-center">
                                    <img src="${i.image}" class="w-16 h-16 object-contain mx-auto mb-1">
                                    <div class="font-bold text-white">${i.name}</div>
                                    <div class="text-cyan-400 font-black">$${i.price}</div>
                                </th>
                            `).join('')}
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-800/60">
                        <tr><td class="p-2 text-gray-400">Protsessor</td>${items.map(i => `<td class="p-2 text-center text-white">${i.specs.processor}</td>`).join('')}</tr>
                        <tr><td class="p-2 text-gray-400">RAM Xotira</td>${items.map(i => `<td class="p-2 text-center text-white">${i.specs.ram}</td>`).join('')}</tr>
                        <tr><td class="p-2 text-gray-400">Displey</td>${items.map(i => `<td class="p-2 text-center text-white">${i.specs.display}</td>`).join('')}</tr>
                        <tr><td class="p-2 text-gray-400">Akkumulyator</td>${items.map(i => `<td class="p-2 text-center text-white">${i.specs.battery}</td>`).join('')}</tr>
                    </tbody>
                </table>
            `;

    document.getElementById('compare-modal').classList.remove('hidden');
}

function closeCompareModal() {
    document.getElementById('compare-modal').classList.add('hidden');
}

function openQuickView(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    const modal = document.getElementById('quickview-modal');
    const container = document.getElementById('quickview-content');

    container.innerHTML = `
                <div class="bg-slate-950 p-6 rounded-2xl flex items-center justify-center">
                    <img src="${product.image}" alt="${product.name}" class="max-h-64 object-contain">
                </div>
                <div class="space-y-3 flex flex-col justify-between">
                    <div>
                        <span class="text-[10px] uppercase font-bold text-cyan-400 tracking-wider">${product.brand}</span>
                        <h2 class="text-xl font-bold text-white">${product.name}</h2>
                        
                        <div class="flex items-center space-x-2 mt-2">
                            <span class="text-2xl font-black text-white">$${product.price}</span>
                            <span class="text-xs text-gray-500 line-through">$${product.originalPrice}</span>
                        </div>

                        <p class="text-xs text-gray-300 mt-2">${product.description}</p>

                        <div class="mt-4 pt-3 border-t border-slate-800 space-y-1 text-xs">
                            <div class="flex justify-between"><span class="text-gray-400">Protsessor:</span> <span class="text-white">${product.specs.processor}</span></div>
                            <div class="flex justify-between"><span class="text-gray-400">RAM:</span> <span class="text-white">${product.specs.ram}</span></div>
                            <div class="flex justify-between"><span class="text-gray-400">Displey:</span> <span class="text-white">${product.specs.display}</span></div>
                            <div class="flex justify-between"><span class="text-gray-400">Akkumulyator:</span> <span class="text-white">${product.specs.battery}</span></div>
                        </div>
                    </div>

                    <button onclick="addToCart(${product.id}); closeQuickView();" class="w-full py-3 rounded-xl rainbow-flowing-bg text-white font-bold text-xs shadow-lg">
                        Savatga Qo'shish
                    </button>
                </div>
            `;

    modal.classList.remove('hidden');
}

function closeQuickView() {
    document.getElementById('quickview-modal').classList.add('hidden');
}

function openCheckoutModal() {
    if (cart.length === 0) {
        showToast("Savat bo'sh!", "error");
        return;
    }
    closeCartDrawer();
    document.getElementById('checkout-modal').classList.remove('hidden');
}

function closeCheckoutModal() {
    document.getElementById('checkout-modal').classList.add('hidden');
}

function processOrder(e) {
    e.preventDefault();
    closeCheckoutModal();

    if (typeof confetti === 'function') {
        confetti({ particleCount: 150, spread: 90, origin: { y: 0.6 } });
    }

    cart = [];
    saveCart();
    updateCartBadge();
    showToast("Buyurtmangiz muvaffaqiyatli qabul qilindi!", "success");
}

function handleSearchSuggestions(query) {
    const container = document.getElementById('search-results');
    if (!query) {
        container.classList.add('hidden');
        return;
    }

    const matches = products.filter(p => p.name.toLowerCase().includes(query) || p.brand.toLowerCase().includes(query)).slice(0, 4);

    if (matches.length === 0) {
        container.classList.add('hidden');
        return;
    }

    container.innerHTML = matches.map(item => `
                <div onclick="openQuickView(${item.id}); document.getElementById('search-results').classList.add('hidden');" 
                     class="p-2.5 hover:bg-slate-800 flex items-center space-x-3 cursor-pointer">
                    <img src="${item.image}" class="w-8 h-8 object-contain bg-slate-950 rounded p-1">
                    <div>
                        <div class="text-xs font-bold text-white">${item.name}</div>
                        <div class="text-[10px] text-cyan-400">$${item.price}</div>
                    </div>
                </div>
            `).join('');

    container.classList.remove('hidden');
}

function initCountdownTimer() {
    let h = 7, m = 38, s = 45;
    setInterval(() => {
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }

        document.getElementById('timer-h').innerText = String(h).padStart(2, '0');
        document.getElementById('timer-m').innerText = String(m).padStart(2, '0');
        document.getElementById('timer-s').innerText = String(s).padStart(2, '0');
    }, 1000);
}

function showToast(msg, type = "info") {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');

    const bgClass = type === 'success' ? 'bg-emerald-950 border-emerald-500 text-emerald-200' : 'bg-slate-900 border-cyan-500 text-cyan-200';
    const iconClass = type === 'success' ? 'fa-circle-check text-emerald-400' : 'fa-circle-info text-cyan-400';

    toast.className = `p-3 rounded-xl border ${bgClass} shadow-2xl flex items-center space-x-2 text-xs font-semibold transform transition-all duration-300 translate-x-10 opacity-0 pointer-events-auto`;
    toast.innerHTML = `<i class="fa-solid ${iconClass}"></i> <span>${msg}</span>`;

    container.appendChild(toast);

    setTimeout(() => toast.classList.remove('translate-x-10', 'opacity-0'), 10);
    setTimeout(() => {
        toast.classList.add('translate-x-10', 'opacity-0');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}
