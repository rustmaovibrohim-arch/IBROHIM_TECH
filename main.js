const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

const money = n =>
    "$" + Number(n).toLocaleString("en-US");

const products = [];

const names = [
    "iPhone 17 Pro Max",
    "Samsung Galaxy S26 Ultra",
    "Google Pixel 10 Pro",
    "Xiaomi 16 Ultra",
    "OnePlus 14 Pro",
    "iPhone 17 Pro",
    "Galaxy S26+",
    "Xiaomi 16 Pro",
    "MacBook Pro M5",
    "MacBook Air M5",
    "ASUS ROG Zephyrus G16",
    "ASUS Zenbook Pro",
    "Lenovo Legion 7",
    "Lenovo ThinkPad X1",
    "HP Spectre x360",
    "Dell XPS 15",
    "iPad Pro M4",
    "iPad Air M3",
    "Samsung Galaxy Tab S11",
    "Xiaomi Pad 8 Pro",
    "Lenovo Tab Extreme",
    "Samsung OLED 65",
    "LG OLED C5",
    "Sony Bravia XR",
    "Samsung Neo QLED",
    "LG QNED",
    "TCL Mini LED",
    "PlayStation 5 Pro",
    "PlayStation 5 Slim",
    "Xbox Series X",
    "Xbox Series S",
    "ROG Ally X",
    "Steam Deck OLED",
    "Nintendo Switch 2",
    "DualSense Edge",
    "AirPods Pro 3",
    "AirPods Max",
    "Sony WH-1000XM6",
    "Sony WF-1000XM6",
    "JBL Tour One M3",
    "JBL Live Pro 3",
    "Bose QuietComfort Ultra",
    "Apple Watch Ultra",
    "Apple Watch Series 11",
    "Galaxy Watch 8 Classic",
    "Galaxy Watch Ultra",
    "Garmin Fenix",
    "Xiaomi Watch S5",
    "Dyson Air Purifier",
    "Samsung Bespoke Fridge",
    "LG InstaView",
    "Dyson V16",
    "Roborock S9",
    "DJI Mini 5 Pro",
    "GoPro Hero 14",
    "Sony Alpha A7 V",
    "Canon EOS R8",
    "Nikon Z6 III",
    "Meta Quest 4",
    "Apple Vision Pro"
];

const categories = [
    "phones",
    "phones",
    "phones",
    "phones",
    "phones",
    "phones",
    "phones",
    "phones",
    "laptops",
    "laptops",
    "laptops",
    "laptops",
    "laptops",
    "laptops",
    "laptops",
    "laptops",
    "tablets",
    "tablets",
    "tablets",
    "tablets",
    "tablets",
    "tvs",
    "tvs",
    "tvs",
    "tvs",
    "tvs",
    "tvs",
    "gaming",
    "gaming",
    "gaming",
    "gaming",
    "gaming",
    "gaming",
    "gaming",
    "gaming",
    "audio",
    "audio",
    "audio",
    "audio",
    "audio",
    "audio",
    "audio",
    "watch",
    "watch",
    "watch",
    "watch",
    "watch",
    "watch",
    "home",
    "home",
    "home",
    "home",
    "home",
    "gaming",
    "gaming",
    "gaming",
    "gaming",
    "gaming",
    "gaming",
    "gaming"
];

const prices = [
    1299, 1199, 999, 899, 799, 1099, 999, 949,
    1899, 1199, 1699, 1799, 1599, 1499, 1399, 1599,
    999, 649, 799, 599, 899,
    1499, 1799, 1699, 1599, 1299, 899,
    699, 499, 499, 299, 799, 549, 449, 199,
    249, 549, 399, 299, 249, 199, 449,
    799, 449, 599, 649, 899, 399,
    699, 2199, 1599, 899, 999,
    1099, 799, 2499, 1499, 999, 3499
];

const images = [
    "https://images.unsplash.com/photo-1592286927505-2fd5b8e8b4e4",
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5",
    "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
    "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd",
    "https://images.unsplash.com/photo-1556656793-08538906a9f8",
    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0",
    "https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf",
    "https://images.unsplash.com/photo-1603302576837-37561b2e2302",
    "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed"
];

for (let i = 0; i < 60; i++) {

    products.push([
        names[i],
        categories[i],
        prices[i],
        +(4.3 + Math.random() * .7).toFixed(1),
        images[i % images.length] +
        "?auto=format&fit=crop&w=900&q=85"
    ]);

}


/* STATE */

const state = {
    cat: "all",
    query: "",
    sort: "default",
    cart: JSON.parse(
        localStorage.getItem("novaCart") || "[]"
    ),
    fav: JSON.parse(
        localStorage.getItem("novaFav") || "[]"
    ),
    lang: localStorage.getItem("novaLang") || "uz",
    user: JSON.parse(
        localStorage.getItem("novaUser") || "null"
    )
};


function save() {

    localStorage.setItem(
        "novaCart",
        JSON.stringify(state.cart)
    );

    localStorage.setItem(
        "novaFav",
        JSON.stringify(state.fav)
    );

}


/* TOAST */

function toast(text) {

    const t = $("#toast");

    t.textContent = text;

    t.classList.add("show");

    clearTimeout(window.toastTimer);

    window.toastTimer =
        setTimeout(
            () => t.classList.remove("show"),
            2200
        );

}


/* FILTERS */

function renderFilters() {

    const names = {
        all: "Barchasi",
        phones: "Telefonlar",
        laptops: "Noutbuklar",
        tablets: "Planshetlar",
        tvs: "Televizorlar",
        gaming: "Gaming",
        audio: "Audio",
        watch: "Smart Watch",
        home: "Uy texnikasi"
    };

    $("#filters").innerHTML =
        Object.entries(names)
            .map(([key, name]) => `
        <button
          class="${state.cat === key ? "active" : ""}"
          onclick="setCategory('${key}')"
        >
          ${name}
        </button>
      `)
            .join("");

}


window.setCategory = key => {

    state.cat = key;

    renderFilters();
    renderProducts();

};


/* PRODUCTS */

function renderProducts() {

    let arr = [...products];

    if (state.cat !== "all") {
        arr = arr.filter(
            p => p[1] === state.cat
        );
    }

    if (state.query) {

        const q = state.query.toLowerCase();

        arr = arr.filter(
            p =>
                p[0].toLowerCase().includes(q) ||
                p[1].toLowerCase().includes(q)
        );

    }

    if (state.sort === "low") {
        arr.sort((a, b) => a[2] - b[2]);
    }

    if (state.sort === "high") {
        arr.sort((a, b) => b[2] - a[2]);
    }

    if (state.sort === "rating") {
        arr.sort((a, b) => b[3] - a[3]);
    }


    $("#productGrid").innerHTML =
        arr.map((p, i) => {

            const index =
                products.indexOf(p);

            const liked =
                state.fav.includes(index);

            return `
        <article class="product">

          <div class="product-img">

            <img
              src="${p[4]}"
              alt="${p[0]}"
              loading="lazy"
            >

            <span class="product-badge">
              ${i < 3 ? "POPULAR" : "NOVA"}
            </span>

            <button
              class="heart ${liked ? "on" : ""}"
              onclick="toggleFav(${index})"
            >
              ${liked ? "♥" : "♡"}
            </button>

          </div>

          <div class="product-body">

            <small>
              ${p[1]}
            </small>

            <h3>
              ${p[0]}
            </h3>

            <div class="rating">
              ⭐ ${p[3]}
            </div>

            <div class="product-bottom">

              <strong class="price">
                ${money(p[2])}
              </strong>

              <button
                class="add"
                onclick="addCart(${index})"
              >
                +
              </button>

            </div>

          </div>

        </article>
      `;

        }).join("");

}


/* CART */

window.addCart = index => {

    const p = products[index];

    const existing =
        state.cart.findIndex(
            x => x[0] === p[0]
        );

    if (existing > -1) {

        state.cart[existing][1]++;

    } else {

        state.cart.push([
            p[0],
            1,
            p[2],
            p[4]
        ]);

    }

    save();
    updateCounts();

    toast(
        p[0] + " savatchaga qo'shildi ✓"
    );

};


window.toggleFav = index => {

    const i =
        state.fav.indexOf(index);

    if (i > -1) {

        state.fav.splice(i, 1);

    } else {

        state.fav.push(index);

    }

    save();
    renderProducts();
    updateCounts();

    toast(
        i > -1
            ? "Sevimlilardan olindi"
            : "Sevimlilarga qo'shildi ♥"
    );

};


function updateCounts() {

    $("#cartCount").textContent =
        state.cart.reduce(
            (a, x) => a + x[1],
            0
        );

    $("#favCount").textContent =
        state.fav.length;

}


function renderCart() {

    const box = $("#cartItems");

    const empty = $("#cartEmpty");

    if (!state.cart.length) {

        box.innerHTML = "";

        empty.style.display = "block";

        $("#cartTotal").textContent = "$0";

        return;
    }

    empty.style.display = "none";

    box.innerHTML =
        state.cart.map((x, i) => `

      <div class="cart-row">

        <img
          src="${x[3]}"
          alt="${x[0]}"
        >

        <div>

          <b>
            ${x[0]}
          </b>

          <small>
            ${money(x[2])} · x${x[1]}
          </small>

          <div>

            <button
              onclick="changeQty(${i},-1)"
            >
              −
            </button>

            <button
              onclick="changeQty(${i},1)"
            >
              +
            </button>

          </div>

        </div>

        <button
          class="remove"
          onclick="removeCart(${i})"
        >
          ×
        </button>

      </div>

    `).join("");

    $("#cartTotal").textContent =
        money(
            state.cart.reduce(
                (a, x) => a + x[1] * x[2],
                0
            )
        );

}


window.changeQty = (i, d) => {

    state.cart[i][1] += d;

    if (state.cart[i][1] <= 0) {

        state.cart.splice(i, 1);

    }

    save();
    renderCart();
    updateCounts();

};


window.removeCart = i => {

    state.cart.splice(i, 1);

    save();
    renderCart();
    updateCounts();

};


function openCart() {

    renderCart();

    $("#cartDrawer")
        .classList.add("open");

    $("#drawerOverlay")
        .classList.add("show");

}


function closeCart() {

    $("#cartDrawer")
        .classList.remove("open");

    $("#drawerOverlay")
        .classList.remove("show");

}


/* SNOW */

function snow() {

    const s = $("#snow");

    for (let i = 0; i < 70; i++) {

        const x =
            document.createElement("i");

        x.style.left =
            Math.random() * 100 + "%";

        x.style.top =
            Math.random() * -100 + "px";

        x.style.animationDuration =
            (6 + Math.random() * 10) + "s";

        x.style.animationDelay =
            (-Math.random() * 10) + "s";

        x.style.opacity =
            .25 + Math.random() * .7;

        s.appendChild(x);

    }

}


/* CLOCK */

function clock() {

    const d = new Date();

    $("#clock").textContent =
        d.toLocaleTimeString("en-GB");

    $("#date").textContent =
        d.toLocaleDateString("en-GB");

    $("#weatherTemp").textContent =
        (22 + Math.floor(Math.random() * 5))
        + "°C";

}


/* THEME */

function theme() {

    const light =
        localStorage.getItem("novaTheme")
        === "light";

    document.body.classList
        .toggle("light", light);

    $("#themeBtn").textContent =
        light ? "🌙" : "☀️";

}


/* LANGUAGE */

const translations = {

    uz: {
        home: "Bosh sahifa",
        store: "Do'kon",
        categories: "Kategoriyalar",
        about: "Biz haqimizda",
        heroText:
            "60+ premium mahsulot, aqlli yordamchi, gaming va bitta zamonaviy ekotizim.",
        shopNow: "Xarid qilish →"
    },

    ru: {
        home: "Главная",
        store: "Магазин",
        categories: "Категории",
        about: "О нас",
        heroText:
            "60+ премиальных товаров, умный помощник и gaming в одной экосистеме.",
        shopNow: "Купить →"
    },

    en: {
        home: "Home",
        store: "Store",
        categories: "Categories",
        about: "About us",
        heroText:
            "60+ premium products, a smart assistant, gaming and one modern ecosystem.",
        shopNow: "Shop now →"
    }

};


function setLang(l) {

    state.lang = l;

    localStorage.setItem(
        "novaLang",
        l
    );

    $$("[data-i18n]").forEach(e => {

        const k =
            e.dataset.i18n;

        if (translations[l][k]) {
            e.textContent =
                translations[l][k];
        }

    });

    $("#langBtn").textContent =
        l === "uz"
            ? "🇺🇿 UZ⌄"
            : l === "ru"
                ? "🇷🇺 RU⌄"
                : "🇬🇧 EN⌄";

    toast("Language changed");

}


/* AUTH */

function openAuth() {

    $("#authModal")
        .classList.add("show");

}


/* AI */

function smartAI(q) {

    const s =
        q.toLowerCase();

    let answer = "";

    const budgetMatch =
        s.match(
            /(?:\$|usd|dollar|dollargacha|до|up to)\s*(\d[\d,]*)/
        );

    const budget =
        budgetMatch
            ? budgetMatch[1]
            : null;


    if (
        s.includes("savatch") ||
        s.includes("cart")
    ) {

        if (state.cart.length) {

            const total =
                state.cart.reduce(
                    (a, x) => a + x[1] * x[2],
                    0
                );

            answer =
                `Savatchangizda ${state.cart.reduce(
                    (a, x) => a + x[1],
                    0
                )
                } ta mahsulot bor. Jami: ${money(total)
                }.`;

        } else {

            answer =
                "Savatchangiz hozircha bo'sh.";

        }

    }

    else if (
        s.includes("gaming") ||
        s.includes("playstation") ||
        s.includes("o'yin")
    ) {

        const g =
            products
                .filter(p => p[1] === "gaming")
                .sort((a, b) => b[3] - a[3])
                .slice(0, 4);

        answer =
            "Gaming uchun men mana bularni tavsiya qilaman: "
            +
            g.map(
                p => `${p[0]} (${money(p[2])})`
            ).join(", ")
            +
            ". Agar byudjetingizni aytsangiz, setupni aniqroq tuzaman.";

    }

    else if (
        s.includes("telefon") ||
        s.includes("iphone") ||
        s.includes("samsung")
    ) {

        let g =
            products.filter(
                p => p[1] === "phones"
            );

        if (budget) {

            g =
                g.filter(
                    p => p[2] <=
                        Number(
                            budget.replace(/,/g, "")
                        )
                );

        }

        g =
            g.sort(
                (a, b) => b[3] - a[3]
            ).slice(0, 4);

        answer =
            (
                g.length
                    ? "Siz uchun eng yaxshi variantlar: "
                    : "Bu byudjetda mos telefon topilmadi. "
            )
            +
            g.map(
                p =>
                    `${p[0]} — ${money(p[2])}, ⭐${p[3]}`
            ).join("; ");

    }

    else if (
        s.includes("macbook") ||
        s.includes("noutbuk") ||
        s.includes("laptop") ||
        s.includes("asus")
    ) {

        let g =
            products.filter(
                p => p[1] === "laptops"
            );

        if (budget) {

            g =
                g.filter(
                    p => p[2] <=
                        Number(
                            budget.replace(/,/g, "")
                        )
                );

        }

        g =
            g.sort(
                (a, b) => b[3] - a[3]
            ).slice(0, 4);

        answer =
            "Noutbuk bo'yicha tavsiyam: "
            +
            g.map(
                p => `${p[0]} — ${money(p[2])}`
            ).join("; ")
            +
            ". Ish, o'qish yoki gaming uchun alohida tanlab bera olaman.";

    }

    else if (
        s.includes("audio") ||
        s.includes("airpods") ||
        s.includes("quloq") ||
        s.includes("naushnik")
    ) {

        const g =
            products
                .filter(
                    p => p[1] === "audio"
                )
                .sort(
                    (a, b) => b[3] - a[3]
                )
                .slice(0, 4);

        answer =
            "Audio uchun: "
            +
            g.map(
                p => `${p[0]} — ${money(p[2])}`
            ).join("; ");

    }

    else if (
        s.includes("salom") ||
        s.includes("hello") ||
        s.includes("привет")
    ) {

        answer =
            "Salom! Men NOVA AI. Sizga mahsulot tanlash, solishtirish, narx bo'yicha filtr qilish va sayt funksiyalaridan foydalanishda yordam beraman.";

    }

    else if (
        s.includes("eng yaxshi") ||
        s.includes("best")
    ) {

        const g =
            [...products]
                .sort((a, b) => b[3] - a[3])
                .slice(0, 5);

        answer =
            "Hozirgi katalogdagi eng yuqori reytingli mahsulotlardan: "
            +
            g.map(
                p => `${p[0]} ⭐${p[3]}`
            ).join("; ");

    }

    else {

        answer =
            "Men buni ham tahlil qila olaman. Masalan: “$1200 gacha telefon”, “MacBook va ASUSni solishtir”, “gaming setup tuz”, “savatchamni tekshir” yoki “eng yaxshi AirPodsni top” deb yozing.";

    }

    return answer;

}


function addChat(text, who) {

    const d =
        document.createElement("div");

    d.className =
        "msg " + who;

    d.textContent =
        text;

    $("#chatMessages")
        .appendChild(d);

    $("#chatMessages").scrollTop =
        999999;

}


function sendAI(q) {

    if (!q.trim()) return;

    addChat(q, "user");

    setTimeout(
        () =>
            addChat(
                smartAI(q),
                "ai"
            ),
        350
    );

}


/* FOOTBALL */

function gameInit() {

    let score = 0;

    let bot = 0;

    let time = 30;

    let running = false;

    let timer;


    const ball =
        $("#ball");

    const overlay =
        $("#gameOverlay");

    const keeper =
        $("#keeper");


    $("#startGame").onclick = () => {

        score = 0;
        bot = 0;
        time = 30;
        running = true;

        $("#score").textContent = 0;

        $("#botScore").textContent = 0;

        $("#gameTime").textContent = time;

        overlay.style.display =
            "none";

        clearInterval(timer);

        timer =
            setInterval(() => {

                time--;

                $("#gameTime")
                    .textContent = time;

                if (time <= 0) {

                    clearInterval(timer);

                    running = false;

                    overlay.querySelector("h3")
                        .textContent =
                        `Game Over — ${score}:${bot}`;

                    overlay.querySelector("p")
                        .textContent =
                        "Yana bir marta urinib ko'ring!";

                    $("#startGame")
                        .textContent =
                        "Restart";

                    overlay.style.display =
                        "grid";

                }

            }, 1000);

    };


    $("#kick").onclick = () => {

        if (!running) return;

        const goal =
            Math.random() > .35;

        if (goal) {

            score++;

            $("#score")
                .textContent = score;

            ball.style.transform =
                "translate(170%,-50%) scale(.7)";

            toast(
                "GOOOOL! ⚽"
            );

        } else {

            keeper.style.transform =
                "translateX(-90px)";

            toast(
                "Darvozabon qaytardi 😮"
            );

        }

        setTimeout(() => {

            ball.style.transform =
                "translate(-50%,-50%)";

            keeper.style.transform = "";

        }, 450);

    };


    ball.onclick = () =>
        $("#kick").click();


    $("#leftMove").onclick = () => {

        if (running) {

            ball.style.left =
                Math.max(
                    12,
                    ball.offsetLeft - 45
                ) + "px";

        }

    };


    $("#rightMove").onclick = () => {

        if (running) {

            ball.style.left =
                Math.min(
                    $("#field").clientWidth - 35,
                    ball.offsetLeft + 45
                ) + "px";

        }

    };

}


/* START */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        setTimeout(
            () =>
                $("#loader").style.display =
                "none",
            1100
        );


        snow();

        renderFilters();

        renderProducts();

        updateCounts();

        clock();

        setInterval(
            clock,
            1000
        );

        theme();

        setLang(
            state.lang
        );



        /* THEME */

        $("#themeBtn").onclick = () => {

            localStorage.setItem(
                "novaTheme",
                document.body.classList.contains("light")
                    ? "dark"
                    : "light"
            );

            theme();

        };


        /* CART */

        $("#cartBtn")
            .onclick = openCart;

        $("#cartClose")
            .onclick = closeCart;

        $("#drawerOverlay")
            .onclick = closeCart;


        /* ACCOUNT */

        $("#accountBtn")
            .onclick = openAuth;


        /* SEARCH */

        $("#searchBtn").onclick =
            () =>
                $("#searchModal")
                    .classList.add("show");


        $$("[data-close]")
            .forEach(
                b =>
                    b.onclick =
                    () =>
                        $(
                            "#" + b.dataset.close
                        )
                            .classList.remove("show")
            );


        /* MOBILE */

        $("#mobileBtn").onclick =
            () =>
                $("#mobileNav")
                    .classList.toggle("open");


        /* PRODUCT SEARCH */

        $("#productSearch").oninput =
            e => {

                state.query =
                    e.target.value;

                renderProducts();

            };


        /* SORT */

        $("#sort").onchange =
            e => {

                state.sort =
                    e.target.value;

                renderProducts();

            };


        /* CATEGORY */

        $$("[data-cat]")
            .forEach(
                b =>
                    b.onclick =
                    () => {

                        if (
                            b.classList.contains("cat")
                        ) {

                            state.cat =
                                b.dataset.cat;

                            renderFilters();

                            renderProducts();

                            location.hash =
                                "products";

                        }

                    }
            );


        /* GLOBAL SEARCH */

        $("#globalSearch").oninput =
            e => {

                state.query =
                    e.target.value;

                $("#productSearch")
                    .value =
                    e.target.value;

                renderProducts();

            };


        /* LANGUAGE */

        $$("[data-lang]")
            .forEach(
                b =>
                    b.onclick =
                    () =>
                        setLang(
                            b.dataset.lang
                        )
            );


        /* AUTH TABS */

        $$("[data-auth]")
            .forEach(
                b =>
                    b.onclick =
                    () => {

                        $$("[data-auth]")
                            .forEach(
                                x =>
                                    x.classList
                                        .remove("active")
                            );

                        b.classList
                            .add("active");

                        $("#signinForm").hidden =
                            b.dataset.auth !==
                            "signin";

                        $("#signupForm").hidden =
                            b.dataset.auth !==
                            "signup";

                    }
            );


        /* SIGN IN */

        $("#signinForm").onsubmit =
            e => {

                e.preventDefault();

                const em =
                    $("#loginEmail")
                        .value.trim();

                const pw =
                    $("#loginPass")
                        .value;

                const users =
                    JSON.parse(
                        localStorage.getItem(
                            "novaUsers"
                        ) || "[]"
                    );

                const ok =
                    (
                        em === "demo@nova.uz" &&
                        pw === "123456"
                    )
                    ||
                    users.some(
                        u =>
                            u.email === em &&
                            u.pass === pw
                    );


                if (ok) {

                    state.user = {
                        email: em
                    };

                    localStorage.setItem(
                        "novaUser",
                        JSON.stringify(
                            state.user
                        )
                    );

                    $("#authModal")
                        .classList.remove("show");

                    $("#accountBtn span")
                        .textContent =
                        em.split("@")[0];

                    toast(
                        "Xush kelibsiz ✓"
                    );

                } else {

                    $("#authMsg")
                        .textContent =
                        "Email yoki parol noto'g'ri.";

                }

            };


        /* SIGN UP */

        $("#signupForm").onsubmit =
            e => {

                e.preventDefault();

                const users =
                    JSON.parse(
                        localStorage.getItem(
                            "novaUsers"
                        ) || "[]"
                    );


                const u = {

                    name:
                        $("#regName").value,

                    email:
                        $("#regEmail").value,

                    pass:
                        $("#regPass").value

                };


                if (
                    users.some(
                        x =>
                            x.email ===
                            u.email
                    )
                ) {

                    toast(
                        "Bu email allaqachon mavjud"
                    );

                    return;

                }


                users.push(u);

                localStorage.setItem(
                    "novaUsers",
                    JSON.stringify(users)
                );

                state.user = u;

                localStorage.setItem(
                    "novaUser",
                    JSON.stringify(u)
                );


                $("#authModal")
                    .classList.remove("show");

                $("#accountBtn span")
                    .textContent =
                    u.name;

                toast(
                    "Account yaratildi ✓"
                );

            };


        /* AI */

        $("#chatForm").onsubmit =
            e => {

                e.preventDefault();

                const v =
                    $("#chatInput")
                        .value;

                $("#chatInput")
                    .value = "";

                sendAI(v);

            };


        $$("[data-ai]")
            .forEach(
                b =>
                    b.onclick =
                    () =>
                        sendAI(
                            b.dataset.ai
                        )
            );


        $("#clearChat").onclick =
            () =>
                $("#chatMessages").innerHTML =
                `
            <div class="msg ai">
              Chat tozalandi.
              Savolingizni yozing.
            </div>
          `;


        /* CHECKOUT */

        $("#checkout").onclick =
            () => {

                if (!state.cart.length) {

                    return toast(
                        "Savatcha bo'sh"
                    );

                }

                if (!state.user) {

                    return openAuth();

                }

                state.cart = [];

                save();

                renderCart();

                updateCounts();

                toast(
                    "Buyurtma qabul qilindi ✓"
                );

            };


        /* TOP BUTTON */

        window.addEventListener(
            "scroll",
            () =>
                $("#top")
                    .classList
                    .toggle(
                        "show",
                        scrollY > 600
                    )
        );


        $("#top").onclick =
            () =>
                scrollTo({
                    top: 0,
                    behavior: "smooth"
                });


        /* FOOTBALL */

        gameInit();

    }
);