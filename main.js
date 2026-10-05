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

const CAT_META = {
    "Telefonlar": {
        icon: "📱",
        color: "#6f66ff",
        brands: ["Apple", "Samsung", "Google", "Xiaomi", "OnePlus"],
        base: 499,
        models: ["Pro Max", "Ultra", "Air", "Plus", "Edge", "Max"]
    },

    "Noutbuklar": {
        icon: "💻",
        color: "#3f9cff",
        brands: ["Apple", "ASUS", "Lenovo", "Dell", "HP"],
        base: 799,
        models: ["Pro", "Air", "X", "G16", "Carbon", "Studio"]
    },

    "Dronlar": {
        icon: "🚁",
        color: "#49d7b0",
        brands: ["DJI", "Autel", "HoverAir", "Skydio", "Potensic"],
        base: 399,
        models: ["Fly", "Pro", "Air", "Vision", "Explorer", "Mini"]
    },

    "iPadlar": {
        icon: "▣",
        color: "#a26cff",
        brands: ["Apple"],
        base: 599,
        models: ["Pro", "Air", "Mini", "Studio", "Max", "Creator"]
    },

    "Televizorlar": {
        icon: "📺",
        color: "#ff6b91",
        brands: ["Sony", "Samsung", "LG", "TCL", "Hisense"],
        base: 599,
        models: ["OLED", "Neo QLED", "Mini LED", "Bravia", "Cinema", "Ultra"]
    },

    "Xolodilniklar": {
        icon: "🧊",
        color: "#52c7ff",
        brands: ["Samsung", "LG", "Bosch", "Haier", "Artel"],
        base: 699,
        models: ["Family Hub", "Fresh", "Inverter", "French Door", "Smart", "Prime"]
    },

    "Kir moshinalar": {
        icon: "🫧",
        color: "#4ee0d0",
        brands: ["LG", "Samsung", "Bosch", "Beko", "Haier"],
        base: 449,
        models: ["AI Wash", "Steam", "Pro", "Eco", "Turbo", "Smart"]
    },

    "Gaz plitalar": {
        icon: "🔥",
        color: "#ff9b55",
        brands: ["Artel", "Bosch", "Gorenje", "Beko", "Hansa"],
        base: 299,
        models: ["Chef", "Flame", "Pro", "Steel", "Smart", "Master"]
    },

    "Mikroto‘lqinli pechlar": {
        icon: "◉",
        color: "#ffce58",
        brands: ["Samsung", "LG", "Panasonic", "Bosch", "Artel"],
        base: 149,
        models: ["Grill", "Chef", "Smart", "Quick", "Pro", "Heat"]
    },

    "Aqlli Uy": {
        icon: "⌂",
        color: "#9c88ff",
        brands: ["Google", "Apple", "Xiaomi", "Philips", "Aqara"],
        base: 79,
        models: ["Hub", "Sense", "Home", "Cam", "Light", "Secure"]
    },

    "O‘yinlar": {
        icon: "🎮",
        color: "#ff6c7d",
        brands: ["PlayStation", "Xbox", "Nintendo", "Meta", "Razer"],
        base: 199,
        models: ["Pro", "Elite", "Next", "Series", "VR", "Ultimate"]
    }
};


/* =========================================
   550 PRODUCTS
========================================= */

const products = [];

let id = 1;

CATEGORIES.forEach((cat) => {

    const m = CAT_META[cat];

    for (let i = 0; i < 50; i++) {

        const brand =
            m.brands[i % m.brands.length];

        const model =
            m.models[i % m.models.length];

        const tier =
            (i % 6) + 1;

        const price =
            Math.round(
                (
                    m.base +
                    tier * 83 +
                    (i * 37) % 170
                ) * 1.0
            );

        products.push({
            id: id++,
            cat,
            brand,

            name:
                `${brand} ${model} ${2026 + (i % 2)} ${String(i + 1).padStart(2, "0")}`,

            price,

            icon: m.icon,
            color: m.color,

            desc:
                `Premium ${cat.toLowerCase()} • Nova Edition • Smart technology`,

            tag:
                i % 7 === 0
                    ? "NOVA PICK"
                    : i % 5 === 0
                        ? "NEW"
                        : "PREMIUM"
        });
    }
});


/* =========================================
   STATE
========================================= */

let state = {

    category: "Barchasi",

    query: "",

    sort: "featured",

    min: 0,

    max: 99999,

    page: 1,

    perPage: 20,

    cart:
        JSON.parse(
            localStorage.getItem("novaXCart") || "[]"
        ),

    selectedDir: "center",

    shot: 1,

    score: 0,

    opp: 0,

    best:
        Number(
            localStorage.getItem("novaXBest") || 0
        )
};


/* =========================================
   HELPERS
========================================= */

const $ =
    selector =>
        document.querySelector(selector);

const $$ =
    selector =>
        document.querySelectorAll(selector);

const money =
    n =>
        "$" +
        n.toLocaleString("en-US");


/* =========================================
   TOAST
========================================= */

function toast(msg) {

    const t = $("#toast");

    t.textContent = msg;

    t.classList.add("show");

    clearTimeout(window.__toast);

    window.__toast =
        setTimeout(
            () => t.classList.remove("show"),
            2200
        );
}


/* =========================================
   CART
========================================= */

function saveCart() {

    localStorage.setItem(
        "novaXCart",
        JSON.stringify(state.cart)
    );

    updateCartUI();
}


function updateCartUI() {

    const count =
        state.cart.reduce(
            (a, x) => a + x.qty,
            0
        );

    $("#cartCount").textContent =
        count;

    if ($("#drawerBag")) {
        $("#drawerBag").textContent =
            count;
    }
}


function addToCart(productId) {

    const found =
        state.cart.find(
            x => x.id === productId
        );

    if (found) {

        found.qty++;

    } else {

        state.cart.push({
            id: productId,
            qty: 1
        });
    }

    saveCart();

    toast(
        "Mahsulot bag’ga qo‘shildi ✦"
    );
}


/* =========================================
   FILTER
========================================= */

function filtered() {

    let arr =
        products.filter(
            p =>

                (
                    state.category === "Barchasi" ||
                    p.cat === state.category
                )

                &&

                p.name
                    .toLowerCase()
                    .includes(
                        state.query.toLowerCase()
                    )

                &&

                p.price >= state.min

                &&

                p.price <= state.max
        );


    if (state.sort === "low") {

        arr.sort(
            (a, b) =>
                a.price - b.price
        );

    }

    if (state.sort === "high") {

        arr.sort(
            (a, b) =>
                b.price - a.price
        );

    }

    if (state.sort === "name") {

        arr.sort(
            (a, b) =>
                a.name.localeCompare(b.name)
        );

    }


    return arr;
}


/* =========================================
   CATEGORIES
========================================= */

function renderCategories() {

    const wrap =
        $("#categoryStrip");

    wrap.innerHTML = "";


    [
        "Barchasi",
        ...CATEGORIES
    ].forEach(c => {

        const b =
            document.createElement("button");

        b.className =
            "category-pill" +
            (
                state.category === c
                    ? " active"
                    : ""
            );

        b.textContent = c;


        b.onclick = () => {

            state.category = c;

            state.page = 1;

            renderCategories();

            renderProducts();
        };


        wrap.appendChild(b);

    });
}


/* =========================================
   PRODUCTS RENDER
========================================= */

function renderProducts() {

    const arr =
        filtered();

    const total =
        arr.length;

    const pages =
        Math.max(
            1,
            Math.ceil(
                total / state.perPage
            )
        );


    state.page =
        Math.min(
            state.page,
            pages
        );


    const slice =
        arr.slice(
            (state.page - 1) *
            state.perPage,

            state.page *
            state.perPage
        );


    $("#productCount").textContent =
        `${total} products`;


    $("#productGrid").innerHTML =
        slice.map(
            p => `

      <article class="product-card">

        <div
          class="product-art"
          style="--pcolor:${p.color}"
        >

          <span class="badge">
            ${p.tag}
          </span>

          <button
            class="heart"
            onclick="toggleHeart(this)"
          >
            ♡
          </button>

          <div class="product-icon">
            ${p.icon}
          </div>

        </div>


        <div class="product-info">

          <span class="product-category">
            ${p.cat.toUpperCase()}
          </span>

          <div class="product-name">
            ${p.name}
          </div>

          <div class="product-desc">
            ${p.desc}
          </div>


          <div class="product-bottom">

            <span class="price">
              ${money(p.price)}
            </span>

            <button
              class="add-btn"
              onclick="addToCart(${p.id})"
            >
              +
            </button>

          </div>

        </div>

      </article>

      `
        ).join("");


    $("#pagination").innerHTML =
        Array
            .from(
                {
                    length: Math.min(pages, 9)
                },
                (_, i) => i + 1
            )
            .map(
                n => `

        <button
          class="page-btn ${n === state.page
                        ? "active"
                        : ""
                    }"
          onclick="goPage(${n})"
        >
          ${n}
        </button>

        `
            )
            .join("");
}


/* =========================================
   PAGINATION
========================================= */

function goPage(n) {

    state.page = n;

    renderProducts();

    $("#store").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


/* =========================================
   FAVORITE
========================================= */

function toggleHeart(el) {

    el.textContent =
        el.textContent === "♡"
            ? "♥"
            : "♡";

    el.style.color =
        el.textContent === "♥"
            ? "#ff6b91"
            : "";
}


/* =========================================
   MODALS
========================================= */

function openModal(id) {

    $("#" + id)
        .classList
        .remove("hidden");
}


function closeModal(id) {

    $("#" + id)
        .classList
        .add("hidden");
}


/* =========================================
   PROFILE
========================================= */

function openProfile() {

    const u =
        JSON.parse(
            localStorage.getItem(
                "novaXUser"
            ) || "{}"
        );


    $("#drawerName").textContent =
        u.name || "Account";

    $("#drawerEmail").textContent =
        u.email || "Guest";


    const letter =
        (
            u.name || "N"
        )
            .slice(0, 1)
            .toUpperCase();


    $("#drawerAvatar").textContent =
        letter;

    $("#avatar").textContent =
        letter;

    $("#userLabel").textContent =
        u.name || "Account";


    $("#drawerOrders").textContent =
        JSON.parse(
            localStorage.getItem(
                "novaXOrders"
            ) || "[]"
        ).length;


    openModal(
        "profileDrawer"
    );
}


/* =========================================
   ENTER APP
========================================= */

function enterApp(user) {

    localStorage.setItem(
        "novaXUser",
        JSON.stringify(user)
    );


    $("#authGate")
        .classList
        .add("hidden");

    $("#app")
        .classList
        .remove("hidden");


    openProfile();

    closeModal(
        "profileDrawer"
    );


    updateCartUI();

    renderCategories();

    renderProducts();

    window.scrollTo(
        0,
        0
    );
}


/* =========================================
   AUTH
========================================= */

function initAuth() {

    const users =
        JSON.parse(
            localStorage.getItem(
                "novaXUsers"
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
            "novaXUsers",
            JSON.stringify(users)
        );
    }


    const saved =
        JSON.parse(
            localStorage.getItem(
                "novaXUser"
            ) || "null"
        );


    if (saved) {

        enterApp(saved);
    }


    /* TABS */

    $$(".auth-tab")
        .forEach(btn => {

            btn.onclick = () => {

                $$(".auth-tab")
                    .forEach(
                        x =>
                            x.classList
                                .remove("active")
                    );


                btn.classList.add(
                    "active"
                );


                const type =
                    btn.dataset.auth;


                $("#signinForm")
                    .classList
                    .toggle(
                        "active",
                        type === "signin"
                    );


                $("#signupForm")
                    .classList
                    .toggle(
                        "active",
                        type === "signup"
                    );
            };

        });


    /* PASSWORD */

    $$(".eye")
        .forEach(b => {

            b.onclick = () => {

                const x =
                    $("#" + b.dataset.target);

                x.type =
                    x.type === "password"
                        ? "text"
                        : "password";
            };

        });


    /* DEMO LOGIN */

    $("#demoLogin").onclick =
        () => {

            $("#loginEmail").value =
                "demo@nova.uz";

            $("#loginPassword").value =
                "123456";

            $("#signinForm")
                .requestSubmit();
        };


    /* LOGIN */

    $("#signinForm").onsubmit =
        e => {

            e.preventDefault();


            const email =
                $("#loginEmail")
                    .value
                    .trim()
                    .toLowerCase();


            const pass =
                $("#loginPassword")
                    .value;


            const us =
                JSON.parse(
                    localStorage.getItem(
                        "novaXUsers"
                    ) || "[]"
                );


            const u =
                us.find(
                    x =>
                        x.email === email &&
                        x.password === pass
                );


            if (!u) {

                return toast(
                    "Email yoki password noto‘g‘ri"
                );
            }


            enterApp(u);
        };


    /* REGISTER */

    $("#signupForm").onsubmit =
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


            if (password.length < 6) {

                return toast(
                    "Password kamida 6 belgi bo‘lsin"
                );
            }


            let us =
                JSON.parse(
                    localStorage.getItem(
                        "novaXUsers"
                    ) || "[]"
                );


            if (
                us.some(
                    x => x.email === email
                )
            ) {

                return toast(
                    "Bu email allaqachon mavjud"
                );
            }


            const u = {
                name,
                email,
                password
            };


            us.push(u);


            localStorage.setItem(
                "novaXUsers",
                JSON.stringify(us)
            );


            enterApp(u);

            toast(
                "Account yaratildi ✦"
            );
        };
}


/* =========================================
   SEARCH + FILTER
========================================= */

function initSearch() {

    $("#openSearch").onclick =
        () => {

            openModal(
                "searchModal"
            );

            setTimeout(
                () =>
                    $("#globalSearch").focus(),
                100
            );
        };


    $("#globalSearch").oninput =
        e => {

            state.query =
                e.target.value;

            state.page = 1;

            $("#productSearch").value =
                state.query;

            renderProducts();
        };


    $$(".search-hints button")
        .forEach(b => {

            b.onclick = () => {

                $("#globalSearch").value =
                    b.dataset.query;

                state.query =
                    b.dataset.query;

                state.page = 1;

                $("#productSearch").value =
                    state.query;

                renderProducts();

                closeModal(
                    "searchModal"
                );

                $("#store")
                    .scrollIntoView({
                        behavior: "smooth"
                    });
            };

        });


    $("#productSearch").oninput =
        e => {

            state.query =
                e.target.value;

            state.page = 1;

            renderProducts();
        };


    $("#sortSelect").onchange =
        e => {

            state.sort =
                e.target.value;

            state.page = 1;

            renderProducts();
        };


    $("#openFilters").onclick =
        () =>
            openModal(
                "filterModal"
            );


    $("#applyFilters").onclick =
        () => {

            state.min =
                Number(
                    $("#minPrice").value || 0
                );


            state.max =
                Number(
                    $("#maxPrice").value ||
                    99999
                );


            state.page = 1;

            renderProducts();

            closeModal(
                "filterModal"
            );

            toast(
                "Filters applied"
            );
        };


    $$("[data-close]")
        .forEach(b => {

            b.onclick =
                () =>
                    closeModal(
                        b.dataset.close
                    );
        });


    $$(".modal-backdrop")
        .forEach(b => {

            b.onclick =
                () =>
                    b.parentElement
                        .classList
                        .add("hidden");
        });
}


/* =========================================
   PROFILE
========================================= */

function initProfile() {

    $("#profileBtn").onclick =
        openProfile;


    $("#closeProfile").onclick =
        () =>
            closeModal(
                "profileDrawer"
            );


    $(".drawer-backdrop").onclick =
        () =>
            closeModal(
                "profileDrawer"
            );


    $("#logoutBtn").onclick =
        () => {

            localStorage.removeItem(
                "novaXUser"
            );


            $("#app")
                .classList
                .add("hidden");


            $("#authGate")
                .classList
                .remove("hidden");


            closeModal(
                "profileDrawer"
            );


            toast(
                "Signed out"
            );
        };


    $("#cartBtn").onclick =
        () => {

            if (!state.cart.length) {

                return toast(
                    "Bag hozircha bo‘sh"
                );
            }


            const lines =
                state.cart
                    .map(x => {

                        const p =
                            products.find(
                                y => y.id === x.id
                            );

                        return `${p.name} ×${x.qty}`;
                    })
                    .join(" • ");


            toast(
                lines.slice(0, 150)
            );
        };
}


/* =========================================
   FOOTBALL GAME
========================================= */

function initFootball() {

    let selected =
        "center";

    let shot = 1;

    let score = 0;

    let opp = 0;

    let locked = false;


    const keeper =
        $("#keeper");

    const ball =
        $("#ball");

    const power =
        $("#powerFill");


    /* DIRECTION */

    $$(".shot-btn")
        .forEach(b => {

            b.onclick = () => {

                if (locked) return;


                selected =
                    b.dataset.dir;


                $$(".shot-btn")
                    .forEach(
                        x =>
                            x.classList
                                .remove("selected")
                    );


                b.classList.add(
                    "selected"
                );
            };

        });


    /* RESET */

    function reset() {

        shot = 1;

        score = 0;

        opp = 0;

        locked = false;


        $("#score")
            .textContent = 0;

        $("#oppScore")
            .textContent = 0;

        $("#roundText")
            .textContent =
            "SHOT 1 / 5";

        $("#gameMessage")
            .textContent =
            "Yo‘nalishni tanlang va zarba bering.";


        ball.style.transform =
            "translateX(-50%)";


        keeper.style.transform =
            "translateX(-50%)";


        power.style.width =
            "70%";
    }


    /* SHOOT */

    $("#shootBtn").onclick =
        () => {

            if (locked) return;


            locked = true;


            const keeperDirs = [
                "left",
                "center",
                "right"
            ];


            const kd =
                keeperDirs[
                Math.floor(
                    Math.random() *
                    3
                )
                ];


            const goal =
                kd !== selected;


            const dx =
                selected === "left"
                    ? -135
                    : selected === "right"
                        ? 135
                        : 0;


            const kx =
                kd === "left"
                    ? -130
                    : kd === "right"
                        ? 130
                        : 0;


            ball.style.transform =
                `translate(
          calc(-50% + ${dx}px),
          -235px
        ) scale(.55)`;


            keeper.style.transform =
                `translate(
          calc(-50% + ${kx}px),
          0
        )`;


            setTimeout(
                () => {

                    if (goal) {

                        score++;

                        $("#gameMessage")
                            .textContent =
                            "GOOOAL! ⚡ Darvozabon aldandi.";

                    } else {

                        opp++;

                        $("#gameMessage")
                            .textContent =
                            "SAVE! 🧤 Darvozabon zarbani qaytardi.";
                    }


                    $("#score")
                        .textContent =
                        score;


                    $("#oppScore")
                        .textContent =
                        opp;


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
                            900
                        );

                    } else {

                        setTimeout(
                            () => {

                                const result =
                                    score > opp
                                        ? "YOU WIN 🏆"
                                        : score < opp
                                            ? "CPU WINS"
                                            : "DRAW 🤝";


                                $("#gameMessage")
                                    .textContent =
                                    `${result} — ${score}:${opp}`;


                                if (
                                    score >
                                    state.best
                                ) {

                                    state.best =
                                        score;


                                    localStorage.setItem(
                                        "novaXBest",
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
        };


    $("#restartGame").onclick =
        reset;


    $("#bestScore")
        .textContent =
        state.best;


    reset();
}


/* =========================================
   INITIALIZE
========================================= */

function init() {

    initAuth();

    initSearch();

    initProfile();

    initFootball();

    updateCartUI();


    $$(".nav-link")
        .forEach(a => {

            a.onclick = () => {

                $$(".nav-link")
                    .forEach(
                        x =>
                            x.classList
                                .remove("active")
                    );


                a.classList.add(
                    "active"
                );
            };

        });
}


init();