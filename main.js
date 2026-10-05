/* =========================================================
   NOVA X — PREMIUM ENGINE
   550+ PRODUCTS
   3 LANGUAGES
   DAY / NIGHT
   SNOW / CLOUDS
   LIVE CLOCK
   LIVE WEATHER
   PRODUCT IMAGES
   CART
   AUTH
   FOOTBALL
========================================================= */

const LANGS = {

    uz: {
        home: "Bosh sahifa",
        store: "Do‘kon",
        football: "Futbol",
        about: "Biz haqimizda",

        search: "Qidirish",
        account: "Hisob",
        bag: "Savat",

        discover: "KEYINGI QURILMANGIZNI TOPING",
        everything: "Hammasi.",
        onePlace: "Bitta joyda.",

        searchPlaceholder: "Mahsulot qidiring...",

        filters: "Filtrlar",
        products: "mahsulot",

        featured: "Tavsiya etilgan",
        low: "Narx: arzon → qimmat",
        high: "Narx: qimmat → arzon",
        name: "Nomi A → Z",

        catalog: "Katalogni ko‘rish",
        arena: "Football Arena",

        footballTitle: "Football",
        footballSub: "Penalty Arena.",

        direction: "Yo‘nalishni tanlang va zarba bering.",
        shoot: "ZARBA",

        left: "CHAP",
        center: "MARKAZ",
        right: "O‘NG",

        how: "QANDAY O‘YNALADI",
        five: "5 ta penalti.",
        who: "Kim kuchli?",

        goal: "GOOOAL! ⚡ Darvozabon aldandi.",
        save: "SAVE! 🧤 Darvozabon zarbani qaytardi.",

        restart: "O‘yinni qayta boshlash",

        best: "ENG YAXSHI NATIJA",

        weather: "Ob-havo",
        live: "JONLI",

        signin: "Kirish",
        signup: "Ro‘yxatdan o‘tish",

        nameLabel: "Ism",
        password: "Parol",

        login: "Kirish",
        create: "Account yaratish",

        demo: "Demo kirish",

        logout: "Chiqish",

        day: "Kunduz",
        night: "Tun"
    },

    ru: {
        home: "Главная",
        store: "Магазин",
        football: "Футбол",
        about: "О нас",

        search: "Поиск",
        account: "Аккаунт",
        bag: "Корзина",

        discover: "НАЙДИТЕ СВОЁ УСТРОЙСТВО",
        everything: "Всё.",
        onePlace: "В одном месте.",

        searchPlaceholder: "Поиск товара...",

        filters: "Фильтры",
        products: "товаров",

        featured: "Рекомендуемые",
        low: "Цена: по возрастанию",
        high: "Цена: по убыванию",
        name: "Название А → Я",

        catalog: "Смотреть каталог",
        arena: "Football Arena",

        footballTitle: "Football",
        footballSub: "Penalty Arena.",

        direction: "Выберите направление и бейте.",
        shoot: "УДАР",

        left: "ЛЕВО",
        center: "ЦЕНТР",
        right: "ПРАВО",

        how: "КАК ИГРАТЬ",
        five: "5 пенальти.",
        who: "Кто сильнее?",

        goal: "ГООООЛ! ⚡ Вратарь обманут.",
        save: "SAVE! 🧤 Вратарь отбил удар.",

        restart: "Начать заново",

        best: "ЛУЧШИЙ РЕЗУЛЬТАТ",

        weather: "Погода",
        live: "LIVE",

        signin: "Войти",
        signup: "Регистрация",

        nameLabel: "Имя",
        password: "Пароль",

        login: "Войти",
        create: "Создать аккаунт",

        demo: "Демо вход",

        logout: "Выйти",

        day: "День",
        night: "Ночь"
    },

    en: {
        home: "Home",
        store: "Store",
        football: "Football",
        about: "About",

        search: "Search",
        account: "Account",
        bag: "Bag",

        discover: "DISCOVER YOUR NEXT DEVICE",
        everything: "Everything.",
        onePlace: "In one place.",

        searchPlaceholder: "Search products...",

        filters: "Filters",
        products: "products",

        featured: "Featured",
        low: "Price: Low → High",
        high: "Price: High → Low",
        name: "Name A → Z",

        catalog: "Explore catalog",
        arena: "Football Arena",

        footballTitle: "Football",
        footballSub: "Penalty Arena.",

        direction: "Choose a direction and shoot.",
        shoot: "SHOOT",

        left: "LEFT",
        center: "CENTER",
        right: "RIGHT",

        how: "HOW TO PLAY",
        five: "5 penalties.",
        who: "Who is stronger?",

        goal: "GOOOAL! ⚡ The keeper was fooled.",
        save: "SAVE! 🧤 The keeper stopped it.",

        restart: "Restart Match",

        best: "PERSONAL BEST",

        weather: "Weather",
        live: "LIVE",

        signin: "Sign In",
        signup: "Sign Up",

        nameLabel: "Name",
        password: "Password",

        login: "Sign In",
        create: "Create account",

        demo: "Demo access",

        logout: "Log out",

        day: "Day",
        night: "Night"
    }

};


/* =========================================================
   CATEGORIES
========================================================= */

const CATEGORIES = [
    "Telefonlar",
    "Noutbuklar",
    "Dronlar",
    "iPadlar",
    "Televizorlar",
    "Xolodilniklar",
    "Kir moshinalar",
    "Gaz plitalar",
    "Mikroto‘lqinli pechlar",
    "Aqlli Uy",
    "O‘yinlar"
];


const CATEGORY_NAMES = {

    uz: {
        "Telefonlar": "Telefonlar",
        "Noutbuklar": "Noutbuklar",
        "Dronlar": "Dronlar",
        "iPadlar": "iPadlar",
        "Televizorlar": "Televizorlar",
        "Xolodilniklar": "Xolodilniklar",
        "Kir moshinalar": "Kir moshinalar",
        "Gaz plitalar": "Gaz plitalar",
        "Mikroto‘lqinli pechlar": "Mikroto‘lqinli pechlar",
        "Aqlli Uy": "Aqlli Uy",
        "O‘yinlar": "O‘yinlar"
    },

    ru: {
        "Telefonlar": "Телефоны",
        "Noutbuklar": "Ноутбуки",
        "Dronlar": "Дроны",
        "iPadlar": "iPad",
        "Televizorlar": "Телевизоры",
        "Xolodilniklar": "Холодильники",
        "Kir moshinalar": "Стиральные машины",
        "Gaz plitalar": "Газовые плиты",
        "Mikroto‘lqinli pechlar": "Микроволновки",
        "Aqlli Uy": "Умный дом",
        "O‘yinlar": "Игры"
    },

    en: {
        "Telefonlar": "Phones",
        "Noutbuklar": "Laptops",
        "Dronlar": "Drones",
        "iPadlar": "iPads",
        "Televizorlar": "TVs",
        "Xolodilniklar": "Refrigerators",
        "Kir moshinalar": "Washing Machines",
        "Gaz plitalar": "Gas Stoves",
        "Mikroto‘lqinli pechlar": "Microwaves",
        "Aqlli Uy": "Smart Home",
        "O‘yinlar": "Gaming"
    }

};


/* =========================================================
   PRODUCT DATA
========================================================= */

const META = {

    "Telefonlar": {
        icon: "📱",
        query: "smartphone",
        brands: [
            "Apple",
            "Samsung",
            "Google",
            "Xiaomi",
            "OnePlus"
        ],
        models: [
            "Pro Max",
            "Ultra",
            "Air",
            "Plus",
            "Edge",
            "Max"
        ],
        base: 499
    },

    "Noutbuklar": {
        icon: "💻",
        query: "laptop",
        brands: [
            "Apple",
            "ASUS",
            "Lenovo",
            "Dell",
            "HP"
        ],
        models: [
            "Pro",
            "Air",
            "X",
            "G16",
            "Carbon",
            "Studio"
        ],
        base: 799
    },

    "Dronlar": {
        icon: "🚁",
        query: "drone",
        brands: [
            "DJI",
            "Autel",
            "HoverAir",
            "Skydio",
            "Potensic"
        ],
        models: [
            "Fly",
            "Pro",
            "Air",
            "Vision",
            "Explorer",
            "Mini"
        ],
        base: 399
    },

    "iPadlar": {
        icon: "▣",
        query: "ipad tablet",
        brands: ["Apple"],
        models: [
            "Pro",
            "Air",
            "Mini",
            "Studio",
            "Max",
            "Creator"
        ],
        base: 599
    },

    "Televizorlar": {
        icon: "📺",
        query: "smart tv television",
        brands: [
            "Sony",
            "Samsung",
            "LG",
            "TCL",
            "Hisense"
        ],
        models: [
            "OLED",
            "Neo QLED",
            "Mini LED",
            "Bravia",
            "Cinema",
            "Ultra"
        ],
        base: 599
    },

    "Xolodilniklar": {
        icon: "🧊",
        query: "refrigerator",
        brands: [
            "Samsung",
            "LG",
            "Bosch",
            "Haier",
            "Artel"
        ],
        models: [
            "Family Hub",
            "Fresh",
            "Inverter",
            "French Door",
            "Smart",
            "Prime"
        ],
        base: 699
    },

    "Kir moshinalar": {
        icon: "🫧",
        query: "washing machine",
        brands: [
            "LG",
            "Samsung",
            "Bosch",
            "Beko",
            "Haier"
        ],
        models: [
            "AI Wash",
            "Steam",
            "Pro",
            "Eco",
            "Turbo",
            "Smart"
        ],
        base: 449
    },

    "Gaz plitalar": {
        icon: "🔥",
        query: "gas stove kitchen",
        brands: [
            "Artel",
            "Bosch",
            "Gorenje",
            "Beko",
            "Hansa"
        ],
        models: [
            "Chef",
            "Flame",
            "Pro",
            "Steel",
            "Smart",
            "Master"
        ],
        base: 299
    },

    "Mikroto‘lqinli pechlar": {
        icon: "◉",
        query: "microwave oven",
        brands: [
            "Samsung",
            "LG",
            "Panasonic",
            "Bosch",
            "Artel"
        ],
        models: [
            "Grill",
            "Chef",
            "Smart",
            "Quick",
            "Pro",
            "Heat"
        ],
        base: 149
    },

    "Aqlli Uy": {
        icon: "⌂",
        query: "smart home",
        brands: [
            "Google",
            "Apple",
            "Xiaomi",
            "Philips",
            "Aqara"
        ],
        models: [
            "Hub",
            "Sense",
            "Home",
            "Cam",
            "Light",
            "Secure"
        ],
        base: 79
    },

    "O‘yinlar": {
        icon: "🎮",
        query: "gaming console",
        brands: [
            "PlayStation",
            "Xbox",
            "Nintendo",
            "Meta",
            "Razer"
        ],
        models: [
            "Pro",
            "Elite",
            "Next",
            "Series",
            "VR",
            "Ultimate"
        ],
        base: 199
    }

};


/*
  Har bir productga alohida lock beriladi.
  Shu sababli 550 ta mahsulotning image URL'i
  bir-biridan farq qiladi.
*/

const products = [];

let productId = 1;

CATEGORIES.forEach(category => {

    const m = META[category];

    for (let i = 0; i < 50; i++) {

        const brand =
            m.brands[
            i % m.brands.length
            ];

        const model =
            m.models[
            i % m.models.length
            ];

        const price =
            Math.round(
                m.base +
                ((i + 1) * 47) % 900
            );


        const image =
            `https://loremflickr.com/900/900/${encodeURIComponent(m.query)}?lock=${productId}`;


        products.push({

            id: productId,

            category,

            brand,

            name:
                `${brand} ${model} ${2026 + (i % 2)} ${String(i + 1).padStart(2, "0")}`,

            price,

            image,

            icon: m.icon,

            tag:
                i % 9 === 0
                    ? "NOVA PICK"
                    : i % 5 === 0
                        ? "NEW"
                        : "PREMIUM"

        });


        productId++;
    }

});


/* =========================================================
   STATE
========================================================= */

let state = {

    language:
        localStorage.getItem("novaLanguage") ||
        "uz",

    theme:
        localStorage.getItem("novaTheme") ||
        "night",

    category: "Barchasi",

    query: "",

    sort: "featured",

    min: 0,

    max: 99999,

    page: 1,

    perPage: 20,

    cart:
        JSON.parse(
            localStorage.getItem("novaCart") ||
            "[]"
        ),

    favorites:
        JSON.parse(
            localStorage.getItem("novaFavorites") ||
            "[]"
        ),

    selectedDir: "center",

    score: 0,

    opponent: 0,

    shot: 1,

    best:
        Number(
            localStorage.getItem(
                "novaBest"
            ) || 0
        )

};


/* =========================================================
   HELPERS
========================================================= */

const $ =
    s =>
        document.querySelector(s);

const $$ =
    s =>
        document.querySelectorAll(s);


function money(n) {

    return "$" +
        n.toLocaleString(
            "en-US"
        );

}


function t(key) {

    return (
        LANGS[state.language] ||
        LANGS.uz
    )[key] || key;

}


function categoryName(cat) {

    return (
        CATEGORY_NAMES[state.language] ||
        CATEGORY_NAMES.uz
    )[cat] || cat;

}


/* =========================================================
   TOAST
========================================================= */

function toast(message) {

    const box =
        $("#toast");

    if (!box) return;

    box.textContent =
        message;

    box.classList.add("show");

    clearTimeout(
        window.__novaToast
    );

    window.__novaToast =
        setTimeout(
            () =>
                box.classList.remove("show"),
            2200
        );

}


/* =========================================================
   WEATHER UI
========================================================= */

function createWeatherUI() {

    if (!$("#weatherLayer")) {

        const layer =
            document.createElement("div");

        layer.id =
            "weatherLayer";

        document.body
            .prepend(layer);

    }


    if (!$("#liveBar")) {

        const bar =
            document.createElement("div");

        bar.id =
            "liveBar";

        bar.className =
            "live-bar";

        bar.innerHTML = `

      <span class="live-dot"></span>

      <span
        id="liveTime"
        class="live-time"
      >
        --:--:--
      </span>

      <span
        id="liveWeather"
        class="live-weather"
      >
        --
      </span>

      <span
        id="liveCity"
        class="live-city"
      >
        TASHKENT
      </span>

    `;

        document.body
            .append(bar);

    }


    if (!$("#weatherPanel")) {

        const panel =
            document.createElement("div");

        panel.id =
            "weatherPanel";

        panel.className =
            "weather-panel";

        panel.innerHTML = `

      <span
        id="weatherIcon"
        class="weather-icon"
      >
        ☁️
      </span>

      <div>

        <div
          id="weatherTemp"
          class="weather-temp"
        >
          --°C
        </div>

        <div
          id="weatherText"
          class="weather-text"
        >
          ${t("weather")}
        </div>

        <div
          id="weatherUpdate"
          class="weather-update"
        >
          LIVE
        </div>

      </div>

    `;

        document.body
            .append(panel);

    }


    if (!$("#modeBtn")) {

        const button =
            document.createElement("button");

        button.id =
            "modeBtn";

        button.className =
            "mode-btn";

        button.title =
            "Theme";

        button.textContent =
            state.theme === "night"
                ? "☀"
                : "🌙";


        button.onclick =
            toggleTheme;


        const header =
            $(".header-actions");

        if (header) {

            header.prepend(
                button
            );

        }

    }


    if (!$("#languageSelect")) {

        const select =
            document.createElement("select");

        select.id =
            "languageSelect";

        select.className =
            "language-select";

        select.innerHTML = `

      <option value="uz">
        UZ
      </option>

      <option value="ru">
        RU
      </option>

      <option value="en">
        EN
      </option>

    `;

        select.value =
            state.language;

        select.onchange =
            () => {

                state.language =
                    select.value;

                localStorage.setItem(
                    "novaLanguage",
                    state.language
                );

                applyLanguage();

                renderCategories();

                renderProducts();

            };


        const header =
            $(".header-actions");

        if (header) {

            header.prepend(
                select
            );

        }

    }

}


/* =========================================================
   DAY / NIGHT
========================================================= */

function createSnow() {

    const layer =
        $("#weatherLayer");

    if (!layer) return;

    layer
        .querySelectorAll(".snowflake")
        .forEach(
            x => x.remove()
        );


    if (state.theme !== "night")
        return;


    for (
        let i = 0;
        i < 65;
        i++
    ) {

        const snow =
            document.createElement("span");

        snow.className =
            "snowflake";

        snow.style.left =
            Math.random() * 100 + "%";

        snow.style.width =
            (Math.random() * 3 + 2) + "px";

        snow.style.height =
            snow.style.width;

        snow.style.opacity =
            .3 + Math.random() * .6;

        snow.style.animationDuration =
            (7 + Math.random() * 10) + "s";

        snow.style.animationDelay =
            (-Math.random() * 15) + "s";


        layer.appendChild(
            snow
        );

    }

}


function createClouds() {

    const layer =
        $("#weatherLayer");

    if (!layer) return;


    layer
        .querySelectorAll(".weather-cloud")
        .forEach(
            x => x.remove()
        );


    if (state.theme !== "day")
        return;


    ["c1", "c2", "c3"]
        .forEach(cls => {

            const cloud =
                document.createElement("span");

            cloud.className =
                "weather-cloud " +
                cls;

            layer.appendChild(
                cloud
            );

        });

}


function toggleTheme() {

    state.theme =
        state.theme === "night"
            ? "day"
            : "night";


    localStorage.setItem(
        "novaTheme",
        state.theme
    );


    applyTheme();

}


function applyTheme() {

    document.body
        .classList
        .toggle(
            "day-mode",
            state.theme === "day"
        );


    const button =
        $("#modeBtn");

    if (button) {

        button.textContent =
            state.theme === "night"
                ? "☀"
                : "🌙";

    }


    createSnow();

    createClouds();

}


/* =========================================================
   REAL TIME
========================================================= */

function updateClock() {

    const now =
        new Date();


    const time =
        now.toLocaleTimeString(
            "en-GB",
            {
                timeZone: "Asia/Tashkent",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            }
        );


    if ($("#liveTime")) {

        $("#liveTime")
            .textContent =
            time;

    }

}


setInterval(
    updateClock,
    1000
);


/* =========================================================
   REAL WEATHER
   Open-Meteo — API KEY KERAK EMAS
========================================================= */

async function loadWeather() {

    try {

        const response =
            await fetch(
                "https://api.open-meteo.com/v1/forecast?latitude=41.2995&longitude=69.2401&current=temperature_2m,weather_code,wind_speed_10m&timezone=Asia%2FTashkent"
            );


        const data =
            await response.json();


        const current =
            data.current;


        const temp =
            Math.round(
                current.temperature_2m
            );


        const code =
            current.weather_code;


        const weather =
            weatherDescription(
                code
            );


        if ($("#weatherTemp"))
            $("#weatherTemp")
                .textContent =
                `${temp}°C`;


        if ($("#weatherText"))
            $("#weatherText")
                .textContent =
                weather.text;


        if ($("#weatherIcon"))
            $("#weatherIcon")
                .textContent =
                weather.icon;


        if ($("#liveWeather"))
            $("#liveWeather")
                .textContent =
                `${weather.icon} ${temp}°C`;


        if ($("#weatherUpdate"))
            $("#weatherUpdate")
                .textContent =
                `${t("live")} • TASHKENT`;

    }
    catch (error) {

        console.log(
            "Weather error:",
            error
        );

    }

}


function weatherDescription(code) {

    if (code === 0)
        return {
            icon: "☀️",
            text:
                state.language === "ru"
                    ? "Ясно"
                    : state.language === "en"
                        ? "Clear"
                        : "Ochiq"
        };


    if (
        [1, 2, 3].includes(code)
    )
        return {
            icon: "⛅",
            text:
                state.language === "ru"
                    ? "Облачно"
                    : state.language === "en"
                        ? "Cloudy"
                        : "Bulutli"
        };


    if (
        [45, 48].includes(code)
    )
        return {
            icon: "🌫️",
            text:
                state.language === "ru"
                    ? "Туман"
                    : state.language === "en"
                        ? "Fog"
                        : "Tuman"
        };


    if (
        [51, 53, 55, 56, 57].includes(code)
    )
        return {
            icon: "🌦️",
            text:
                state.language === "ru"
                    ? "Морось"
                    : state.language === "en"
                        ? "Drizzle"
                        : "Mayda yomg‘ir"
        };


    if (
        [61, 63, 65, 80, 81, 82].includes(code)
    )
        return {
            icon: "🌧️",
            text:
                state.language === "ru"
                    ? "Дождь"
                    : state.language === "en"
                        ? "Rain"
                        : "Yomg‘ir"
        };


    if (
        [71, 73, 75, 77, 85, 86].includes(code)
    )
        return {
            icon: "❄️",
            text:
                state.language === "ru"
                    ? "Снег"
                    : state.language === "en"
                        ? "Snow"
                        : "Qor"
        };


    if (
        [95, 96, 99].includes(code)
    )
        return {
            icon: "⛈️",
            text:
                state.language === "ru"
                    ? "Гроза"
                    : state.language === "en"
                        ? "Thunderstorm"
                        : "Momaqaldiroq"
        };


    return {
        icon: "🌤️",
        text: "Weather"
    };

}


/* =========================================================
   LANGUAGE
========================================================= */

function applyLanguage() {

    const lang =
        state.language;


    const nav =
        $$(".nav-link");


    if (nav[0])
        nav[0].textContent =
            t("home");


    if (nav[1])
        nav[1].textContent =
            t("store");


    if (nav[2])
        nav[2].textContent =
            t("football");


    if (nav[3])
        nav[3].textContent =
            t("about");


    if ($("#userLabel"))
        $("#userLabel")
            .textContent =
            t("account");


    if ($("#cartBtn")) {

        const b =
            $("#cartCount")
                ?.outerHTML || "";

        $("#cartBtn")
            .innerHTML =
            `${t("bag")} ${b}`;

    }


    if ($("#productSearch"))
        $("#productSearch")
            .placeholder =
            t("searchPlaceholder");


    if ($("#globalSearch"))
        $("#globalSearch")
            .placeholder =
            t("searchPlaceholder");


    const select =
        $("#sortSelect");

    if (select) {

        select.options[0]
            .textContent =
            t("featured");

        select.options[1]
            .textContent =
            t("low");

        select.options[2]
            .textContent =
            t("high");

        select.options[3]
            .textContent =
            t("name");

    }


    if ($("#openFilters"))
        $("#openFilters").innerHTML =
            `${t("filters")} <span>☷</span>`;


    if ($(".hero-copy .eyebrow"))
        $(".hero-copy .eyebrow")
            .textContent =
            "NOVA X EXPERIENCE";


    if ($(".hero-copy h2"))
        $(".hero-copy h2").innerHTML =
            `${t("everything")}<br><em>${t("onePlace")}</em>`;


    if ($(".hero-actions .primary-btn"))
        $(".hero-actions .primary-btn")
            .innerHTML =
            `${t("catalog")} <span>↗</span>`;


    if ($(".hero-actions .ghost-btn"))
        $(".hero-actions .ghost-btn")
            .textContent =
            "⚽ " + t("arena");


    if ($(".football-head h3"))
        $(".football-head h3").innerHTML =
            `${t("footballTitle")}<br><em>${t("footballSub")}</em>`;


    if ($("#gameMessage"))
        $("#gameMessage")
            .textContent =
            t("direction");


    if ($("#shootBtn"))
        $("#shootBtn").innerHTML =
            `${t("shoot")} <span>⚡</span>`;


    const buttons =
        $$(".shot-btn");


    if (buttons[0])
        buttons[0].innerHTML =
            `↙<small>${t("left")}</small>`;


    if (buttons[1])
        buttons[1].innerHTML =
            `↑<small>${t("center")}</small>`;


    if (buttons[2])
        buttons[2].innerHTML =
            `↘<small>${t("right")}</small>`;


    if ($(".info-card .mini-label"))
        $(".info-card .mini-label")
            .textContent =
            t("how");


    if ($(".info-card h4"))
        $(".info-card h4").innerHTML =
            `${t("five")}<br>${t("who")}`;


    if ($("#restartGame"))
        $("#restartGame")
            .textContent =
            t("restart");


    if ($(".leader-card span"))
        $(".leader-card span")
            .textContent =
            t("best");


    if ($("#logoutBtn"))
        $("#logoutBtn")
            .textContent =
            t("logout");


    if ($("#weatherText"))
        $("#weatherText")
            .textContent =
            t("weather");


    loadWeather();

}


/* =========================================================
   CART
========================================================= */

function saveCart() {

    localStorage.setItem(
        "novaCart",
        JSON.stringify(
            state.cart
        )
    );

    updateCart();

}


function updateCart() {

    const count =
        state.cart.reduce(
            (sum, item) =>
                sum + item.qty,
            0
        );


    if ($("#cartCount"))
        $("#cartCount")
            .textContent =
            count;


    if ($("#drawerBag"))
        $("#drawerBag")
            .textContent =
            count;

}


function addToCart(id) {

    const item =
        state.cart.find(
            x => x.id === id
        );


    if (item) {

        item.qty++;

    } else {

        state.cart.push({
            id,
            qty: 1
        });

    }


    saveCart();

    toast(
        state.language === "ru"
            ? "Товар добавлен в корзину ✦"
            : state.language === "en"
                ? "Product added to bag ✦"
                : "Mahsulot savatga qo‘shildi ✦"
    );

}


/* =========================================================
   FAVORITES
========================================================= */

function toggleFavorite(id, button) {

    const index =
        state.favorites
            .indexOf(id);


    if (index >= 0) {

        state.favorites
            .splice(index, 1);

        button.textContent =
            "♡";

    } else {

        state.favorites
            .push(id);

        button.textContent =
            "♥";

        button.style.color =
            "#ff6680";

    }


    localStorage.setItem(
        "novaFavorites",
        JSON.stringify(
            state.favorites
        )
    );

}


/* =========================================================
   PRODUCTS
========================================================= */

function filteredProducts() {

    let list =
        products.filter(p => {

            const categoryMatch =
                state.category === "Barchasi" ||
                p.category === state.category;


            const query =
                state.query
                    .toLowerCase();


            const queryMatch =
                !query ||
                p.name
                    .toLowerCase()
                    .includes(query) ||
                p.brand
                    .toLowerCase()
                    .includes(query) ||
                p.category
                    .toLowerCase()
                    .includes(query);


            return (
                categoryMatch &&
                queryMatch &&
                p.price >= state.min &&
                p.price <= state.max
            );

        });


    if (state.sort === "low") {

        list.sort(
            (a, b) =>
                a.price - b.price
        );

    }


    if (state.sort === "high") {

        list.sort(
            (a, b) =>
                b.price - a.price
        );

    }


    if (state.sort === "name") {

        list.sort(
            (a, b) =>
                a.name.localeCompare(
                    b.name
                )
        );

    }


    return list;

}


function renderCategories() {

    const box =
        $("#categoryStrip");

    if (!box) return;


    box.innerHTML = "";


    const all =
        document.createElement("button");


    all.className =
        "category-pill" +
        (
            state.category === "Barchasi"
                ? " active"
                : ""
        );


    all.textContent =
        state.language === "ru"
            ? "Все"
            : state.language === "en"
                ? "All"
                : "Barchasi";


    all.onclick =
        () => {

            state.category =
                "Barchasi";

            state.page = 1;

            renderCategories();

            renderProducts();

        };


    box.appendChild(all);


    CATEGORIES.forEach(category => {

        const button =
            document.createElement("button");


        button.className =
            "category-pill" +
            (
                state.category === category
                    ? " active"
                    : ""
            );


        button.textContent =
            categoryName(
                category
            );


        button.onclick =
            () => {

                state.category =
                    category;

                state.page = 1;

                renderCategories();

                renderProducts();

            };


        box.appendChild(
            button
        );

    });

}


function renderProducts() {

    const box =
        $("#productGrid");

    if (!box) return;


    const list =
        filteredProducts();


    if ($("#productCount")) {

        $("#productCount")
            .textContent =
            `${list.length} ${t("products")}`;

    }


    const pages =
        Math.max(
            1,
            Math.ceil(
                list.length /
                state.perPage
            )
        );


    state.page =
        Math.min(
            state.page,
            pages
        );


    const start =
        (
            state.page - 1
        ) *
        state.perPage;


    const visible =
        list.slice(
            start,
            start + state.perPage
        );


    box.innerHTML =
        visible
            .map(product => {

                const fav =
                    state.favorites
                        .includes(
                            product.id
                        );


                return `

          <article
            class="product-card"
          >

            <div
              class="product-art"
            >

              <span class="badge">
                ${product.tag}
              </span>

              <button
                class="heart"
                onclick="
                  toggleFavorite(
                    ${product.id},
                    this
                  )
                "
                style="
                  color:
                  ${fav
                        ? "#ff6680"
                        : ""
                    }
                "
              >
                ${fav ? "♥" : "♡"}
              </button>

              <img
                src="${product.image}"
                alt="${product.name}"
                loading="lazy"
                onerror="
                  this.src=
                  'https://loremflickr.com/900/900/technology?lock=${product.id}'
                "
              >

            </div>


            <div class="product-info">

              <span class="product-category">
                ${categoryName(
                        product.category
                    ).toUpperCase()}
              </span>

              <div class="product-name">
                ${product.name}
              </div>

              <div class="product-desc">
                ${product.brand}
                • NOVA Premium Edition
              </div>


              <div class="product-bottom">

                <span class="price">
                  ${money(
                        product.price
                    )}
                </span>

                <button
                  class="add-btn"
                  onclick="
                    addToCart(
                      ${product.id}
                    )
                  "
                >
                  +
                </button>

              </div>

            </div>

          </article>

        `;

            })
            .join("");


    renderPagination(
        pages
    );

}


function renderPagination(pages) {

    const box =
        $("#pagination");

    if (!box) return;


    box.innerHTML =
        Array
            .from(
                {
                    length:
                        Math.min(
                            pages,
                            9
                        )
                },
                (_, i) =>
                    i + 1
            )
            .map(
                page => `

          <button
            class="
              page-btn
              ${page === state.page
                        ? "active"
                        : ""
                    }
            "
            onclick="
              changePage(
                ${page}
              )
            "
          >
            ${page}
          </button>

        `
            )
            .join("");

}


function changePage(page) {

    state.page =
        page;

    renderProducts();

    $("#store")
        ?.scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================================================
   AUTH
========================================================= */

function initAuth() {

    let users =
        JSON.parse(
            localStorage.getItem(
                "novaUsers"
            ) || "[]"
        );


    if (
        !users.some(
            u =>
                u.email ===
                "demo@nova.uz"
        )
    ) {

        users.push({
            name: "NOVA Demo",
            email: "demo@nova.uz",
            password: "123456"
        });


        localStorage.setItem(
            "novaUsers",
            JSON.stringify(users)
        );

    }


    const saved =
        JSON.parse(
            localStorage.getItem(
                "novaUser"
            ) || "null"
        );


    if (saved) {

        enterApp(
            saved
        );

    }


    $$(".auth-tab")
        .forEach(tab => {

            tab.onclick =
                () => {

                    $$(".auth-tab")
                        .forEach(
                            x =>
                                x.classList
                                    .remove(
                                        "active"
                                    )
                        );


                    tab.classList.add(
                        "active"
                    );


                    const signin =
                        tab.dataset.auth ===
                        "signin";


                    $("#signinForm")
                        ?.classList
                        .toggle(
                            "active",
                            signin
                        );


                    $("#signupForm")
                        ?.classList
                        .toggle(
                            "active",
                            !signin
                        );

                };

        });


    $$(".eye")
        .forEach(button => {

            button.onclick =
                () => {

                    const input =
                        $("#" +
                            button.dataset.target
                        );


                    if (!input)
                        return;


                    input.type =
                        input.type ===
                            "password"
                            ? "text"
                            : "password";

                };

        });


    $("#demoLogin")
        ?.addEventListener(
            "click",
            () => {

                $("#loginEmail").value =
                    "demo@nova.uz";

                $("#loginPassword").value =
                    "123456";

                $("#signinForm")
                    .requestSubmit();

            }
        );


    $("#signinForm")
        ?.addEventListener(
            "submit",
            e => {

                e.preventDefault();


                const email =
                    $("#loginEmail")
                        .value
                        .trim()
                        .toLowerCase();


                const password =
                    $("#loginPassword")
                        .value;


                const users =
                    JSON.parse(
                        localStorage.getItem(
                            "novaUsers"
                        ) || "[]"
                    );


                const user =
                    users.find(
                        u =>
                            u.email ===
                            email &&
                            u.password ===
                            password
                    );


                if (!user) {

                    toast(
                        state.language === "ru"
                            ? "Неверный email или пароль"
                            : state.language === "en"
                                ? "Wrong email or password"
                                : "Email yoki parol noto‘g‘ri"
                    );

                    return;

                }


                enterApp(
                    user
                );

            }
        );


    $("#signupForm")
        ?.addEventListener(
            "submit",
            e => {

                e.preventDefault();


                const name =
                    $("#signupName")
                        .value
                        .trim();


                const email =
                    $("#signupEmail")
                        .value
                        .trim()
                        .toLowerCase();


                const password =
                    $("#signupPassword")
                        .value;


                if (
                    password.length < 6
                ) {

                    toast(
                        "Password kamida 6 belgi"
                    );

                    return;

                }


                let users =
                    JSON.parse(
                        localStorage.getItem(
                            "novaUsers"
                        ) || "[]"
                    );


                if (
                    users.some(
                        u =>
                            u.email ===
                            email
                    )
                ) {

                    toast(
                        "Bu email mavjud"
                    );

                    return;

                }


                const user = {
                    name,
                    email,
                    password
                };


                users.push(
                    user
                );


                localStorage.setItem(
                    "novaUsers",
                    JSON.stringify(users)
                );


                enterApp(
                    user
                );


                toast(
                    "Account yaratildi ✦"
                );

            }
        );

}


/* =========================================================
   ENTER APP
========================================================= */

function enterApp(user) {

    localStorage.setItem(
        "novaUser",
        JSON.stringify(user)
    );


    $("#authGate")
        ?.classList
        .add("hidden");


    $("#app")
        ?.classList
        .remove("hidden");


    updateUserUI(
        user
    );


    updateCart();

    renderCategories();

    renderProducts();

}


/* =========================================================
   PROFILE
========================================================= */

function updateUserUI(user) {

    const name =
        user?.name ||
        "Account";


    const letter =
        name
            .slice(0, 1)
            .toUpperCase();


    if ($("#avatar"))
        $("#avatar")
            .textContent =
            letter;


    if ($("#userLabel"))
        $("#userLabel")
            .textContent =
            name;


    if ($("#drawerName"))
        $("#drawerName")
            .textContent =
            name;


    if ($("#drawerEmail"))
        $("#drawerEmail")
            .textContent =
            user?.email ||
            "";

    if ($("#drawerAvatar"))
        $("#drawerAvatar")
            .textContent =
            letter;

}


function openProfile() {

    const user =
        JSON.parse(
            localStorage.getItem(
                "novaUser"
            ) || "null"
        );


    if (!user)
        return;


    updateUserUI(
        user
    );


    const orders =
        JSON.parse(
            localStorage.getItem(
                "novaOrders"
            ) || "[]"
        );


    if ($("#drawerOrders"))
        $("#drawerOrders")
            .textContent =
            orders.length;


    if ($("#drawerBag"))
        $("#drawerBag")
            .textContent =
            state.cart.reduce(
                (a, b) =>
                    a + b.qty,
                0
            );


    $("#profileDrawer")
        ?.classList
        .remove("hidden");

}


function initProfile() {

    $("#profileBtn")
        ?.addEventListener(
            "click",
            openProfile
        );


    $("#closeProfile")
        ?.addEventListener(
            "click",
            () =>
                $("#profileDrawer")
                    ?.classList
                    .add("hidden")
        );


    $(".drawer-backdrop")
        ?.addEventListener(
            "click",
            () =>
                $("#profileDrawer")
                    ?.classList
                    .add("hidden")
        );


    $("#logoutBtn")
        ?.addEventListener(
            "click",
            () => {

                localStorage.removeItem(
                    "novaUser"
                );


                $("#profileDrawer")
                    ?.classList
                    .add("hidden");


                $("#app")
                    ?.classList
                    .add("hidden");


                $("#authGate")
                    ?.classList
                    .remove("hidden");


                toast(
                    t("logout")
                );

            }
        );

}


/* =========================================================
   SEARCH
========================================================= */

function initSearch() {

    $("#openSearch")
        ?.addEventListener(
            "click",
            () => {

                $("#searchModal")
                    ?.classList
                    .remove("hidden");


                setTimeout(
                    () =>
                        $("#globalSearch")
                            ?.focus(),
                    100
                );

            }
        );


    $("#globalSearch")
        ?.addEventListener(
            "input",
            e => {

                state.query =
                    e.target.value;

                state.page = 1;

                if ($("#productSearch"))
                    $("#productSearch")
                        .value =
                        state.query;

                renderProducts();

            }
        );


    $("#productSearch")
        ?.addEventListener(
            "input",
            e => {

                state.query =
                    e.target.value;

                state.page = 1;

                renderProducts();

            }
        );


    $("#sortSelect")
        ?.addEventListener(
            "change",
            e => {

                state.sort =
                    e.target.value;

                state.page = 1;

                renderProducts();

            }
        );


    $("#openFilters")
        ?.addEventListener(
            "click",
            () =>
                $("#filterModal")
                    ?.classList
                    .remove("hidden")
        );


    $("#applyFilters")
        ?.addEventListener(
            "click",
            () => {

                state.min =
                    Number(
                        $("#minPrice")
                            ?.value || 0
                    );


                state.max =
                    Number(
                        $("#maxPrice")
                            ?.value || 99999
                    );


                state.page = 1;

                renderProducts();


                $("#filterModal")
                    ?.classList
                    .add("hidden");

            }
        );


    $$("[data-close]")
        .forEach(button => {

            button.onclick =
                () => {

                    const id =
                        button.dataset.close;


                    $("#" + id)
                        ?.classList
                        .add("hidden");

                };

        });


    $$(".modal-backdrop")
        .forEach(backdrop => {

            backdrop.onclick =
                () => {

                    backdrop.parentElement
                        ?.classList
                        .add("hidden");

                };

        });

}


/* =========================================================
   FOOTBALL
========================================================= */

function initFootball() {

    let selected =
        "center";


    let score =
        0;


    let opponent =
        0;


    let shot =
        1;


    let locked =
        false;


    const keeper =
        $("#keeper");


    const ball =
        $("#ball");


    function reset() {

        score = 0;

        opponent = 0;

        shot = 1;

        locked = false;


        if ($("#score"))
            $("#score")
                .textContent =
                "0";


        if ($("#oppScore"))
            $("#oppScore")
                .textContent =
                "0";


        if ($("#roundText"))
            $("#roundText")
                .textContent =
                "SHOT 1 / 5";


        if ($("#gameMessage"))
            $("#gameMessage")
                .textContent =
                t("direction");


        if (ball)
            ball.style.transform =
                "translateX(-50%)";


        if (keeper)
            keeper.style.transform =
                "translateX(-50%)";

    }


    $$(".shot-btn")
        .forEach(button => {

            button.onclick =
                () => {

                    if (locked)
                        return;


                    selected =
                        button.dataset.dir;


                    $$(".shot-btn")
                        .forEach(
                            x =>
                                x.classList
                                    .remove(
                                        "selected"
                                    )
                        );


                    button.classList.add(
                        "selected"
                    );

                };

        });


    $("#shootBtn")
        ?.addEventListener(
            "click",
            () => {

                if (locked)
                    return;


                locked = true;


                const keeperDir =
                    [
                        "left",
                        "center",
                        "right"
                    ][
                    Math.floor(
                        Math.random() * 3
                    )
                    ];


                const goal =
                    keeperDir !==
                    selected;


                const ballX =
                    selected === "left"
                        ? -130
                        : selected === "right"
                            ? 130
                            : 0;


                const keeperX =
                    keeperDir === "left"
                        ? -130
                        : keeperDir === "right"
                            ? 130
                            : 0;


                if (ball) {

                    ball.style.transform =
                        `
              translate(
                calc(
                  -50% +
                  ${ballX}px
                ),
                -235px
              )
              scale(.55)
            `;

                }


                if (keeper) {

                    keeper.style.transform =
                        `
              translate(
                calc(
                  -50% +
                  ${keeperX}px
                ),
                0
              )
            `;

                }


                setTimeout(
                    () => {

                        if (goal) {

                            score++;

                            $("#gameMessage")
                                .textContent =
                                t("goal");

                        } else {

                            opponent++;

                            $("#gameMessage")
                                .textContent =
                                t("save");

                        }


                        if ($("#score"))
                            $("#score")
                                .textContent =
                                score;


                        if ($("#oppScore"))
                            $("#oppScore")
                                .textContent =
                                opponent;


                        shot++;


                        if (shot <= 5) {

                            setTimeout(
                                () => {

                                    ball.style.transform =
                                        "translateX(-50%)";

                                    keeper.style.transform =
                                        "translateX(-50%)";


                                    $("#roundText")
                                        .textContent =
                                        `SHOT ${shot} / 5`;


                                    locked = false;

                                },
                                850
                            );

                        } else {

                            setTimeout(
                                () => {

                                    let result;


                                    if (score > opponent) {

                                        result =
                                            state.language === "ru"
                                                ? "ПОБЕДА 🏆"
                                                : state.language === "en"
                                                    ? "YOU WIN 🏆"
                                                    : "SIZ YUTDINGIZ 🏆";

                                    } else if (
                                        score < opponent
                                    ) {

                                        result =
                                            state.language === "ru"
                                                ? "CPU ПОБЕДИЛ"
                                                : state.language === "en"
                                                    ? "CPU WINS"
                                                    : "CPU YUTDI";

                                    } else {

                                        result =
                                            state.language === "ru"
                                                ? "НИЧЬЯ 🤝"
                                                : state.language === "en"
                                                    ? "DRAW 🤝"
                                                    : "DURRANG 🤝";

                                    }


                                    $("#gameMessage")
                                        .textContent =
                                        `${result} — ${score}:${opponent}`;


                                    if (
                                        score >
                                        state.best
                                    ) {

                                        state.best =
                                            score;


                                        localStorage.setItem(
                                            "novaBest",
                                            score
                                        );


                                        $("#bestScore")
                                            .textContent =
                                            score;

                                    }


                                },
                                500
                            );

                        }

                    },
                    650
                );

            }
        );


    $("#restartGame")
        ?.addEventListener(
            "click",
            reset
        );


    if ($("#bestScore"))
        $("#bestScore")
            .textContent =
            state.best;


    reset();

}


/* =========================================================
   INITIALIZE
========================================================= */

function init() {

    createWeatherUI();

    applyTheme();

    applyLanguage();

    updateClock();

    loadWeather();

    initAuth();

    initProfile();

    initSearch();

    initFootball();

    updateCart();

    renderCategories();

    renderProducts();

}


document.addEventListener(
    "DOMContentLoaded",
    init
);