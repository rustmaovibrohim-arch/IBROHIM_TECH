'use strict';
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const store = { get: (k, d) => { try { return JSON.parse(localStorage.getItem('tm_' + k)) ?? d } catch { return d } }, set: (k, v) => localStorage.setItem('tm_' + k, JSON.stringify(v)) };
const CATS = { phone: ['📱', 'Telefonlar'], laptop: ['💻', 'Noutbuklar'], tablet: ['📲', 'Planshetlar'], console: ['🎮', 'PlayStation'], audio: ['🎧', 'Quloqchinlar'], watch: ['⌚', 'Soatlar'] };
const G = { phone: ['#dfe4ff', '#b9c3ff'], laptop: ['#e3f4ff', '#b5dcf5'], tablet: ['#fde7f3', '#f6bddb'], console: ['#e5e0ff', '#bdb2f7'], audio: ['#e6f9ec', '#b4e8c6'], watch: ['#fff0dc', '#fbd29c'] };
const P = [
    [1, 'iPhone 16 Pro Max', 'phone', '📱', 1199, 'Titan korpus, A18 Pro chip, 48 Mp kamera', { Ekran: '6.9" OLED 120 Hz', Xotira: '256 GB', Batareya: '33 soat video', Kafolat: '12 oy' }],
    [2, 'Galaxy S25 Ultra', 'phone', '📱', 1099, 'S Pen, 200 Mp kamera, Galaxy AI', { Ekran: '6.9" AMOLED 120 Hz', Xotira: '256 GB', Batareya: '5000 mAh', Kafolat: '12 oy' }],
    [3, 'MacBook Pro 14"', 'laptop', '💻', 1999, 'M4 Pro chip, Liquid Retina XDR ekran', { Chip: 'Apple M4 Pro', RAM: '24 GB', SSD: '512 GB', Batareya: '24 soatgacha' }],
    [4, 'ASUS ROG Zephyrus G16', 'laptop', '💻', 1799, 'Geymerlar uchun: RTX 5070, 240 Hz OLED', { Protsessor: 'Core Ultra 9', RAM: '32 GB', SSD: '1 TB', Videokarta: 'RTX 5070' }],
    [5, 'PlayStation 5 Pro', 'console', '🎮', 699, '8K gacha, tezkor SSD, ray tracing', { Xotira: '2 TB SSD', Ruxsat: '4K 120 fps', Komplekt: 'DualSense', Kafolat: '12 oy' }],
    [6, 'DualSense Edge', 'console', '🕹️', 199, 'Sozlanadigan professional kontroller', { Ulanish: 'Bluetooth / USB-C', Tugmalar: 'Almashtiriladigan', Batareya: '~6 soat', Kafolat: '6 oy' }],
    [7, 'AirPods Pro 2', 'audio', '🎧', 249, 'Faol shovqin bekor qilish, USB-C', { Shovqin: 'ANC + Transparency', Batareya: '6 soat (30 kejs bilan)', Himoya: 'IP54', Kafolat: '12 oy' }],
    [8, 'Sony WH-1000XM5', 'audio', '🎧', 399, 'Sinfdagi eng yaxshi shovqin bekor qilish', { Tur: 'Usti quloqchin', Batareya: '30 soat', Ulanish: 'Bluetooth 5.2', Kafolat: '12 oy' }],
    [9, 'iPad Pro 13"', 'tablet', '📲', 1299, 'M4 chip, Ultra Retina XDR, Apple Pencil Pro', { Chip: 'Apple M4', Ekran: '13" OLED', Xotira: '256 GB', Kafolat: '12 oy' }],
    [10, 'iPad Air 11"', 'tablet', '📲', 599, 'M2 chip, yengil va tezkor', { Chip: 'Apple M2', Ekran: '11" Liquid Retina', Xotira: '128 GB', Kafolat: '12 oy' }],
    [11, 'Apple Watch Ultra 2', 'watch', '⌚', 799, 'Titan korpus, GPS, 36 soat batareya', { Korpus: '49 mm titan', Suvga: '100 m', Batareya: '36 soat', Kafolat: '12 oy' }],
    [12, 'MacBook Air M3', 'laptop', '💻', 1099, 'Sokin, yengil, kun bo\'yi ishlaydi', { Chip: 'Apple M3', RAM: '16 GB', SSD: '512 GB', Batareya: '18 soat' }]
].map(([id, name, cat, e, price, desc, spec]) => ({ id, name, cat, e, price, desc, spec }));
const byId = id => P.find(p => p.id == id), usd = n => '$' + n.toLocaleString('en-US');
let cart = store.get('cart', []), wish = store.get('wish', []), users = store.get('users', []), me = store.get('me', null), promo = 0;
const toast = m => { const t = document.createElement('div'); t.className = 'toast'; t.textContent = m; $('#toasts').append(t); setTimeout(() => t.remove(), 2800) };
const hash = s => { let h = 5381; for (const c of s + 'tm-salt') h = (h * 33) ^ c.charCodeAt(0); return (h >>> 0).toString(36) };
const esc = s => s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
function sync() {
    store.set('cart', cart); store.set('wish', wish); const n = cart.reduce((a, c) => a + c.q, 0), b = $('#cc'); b.textContent = n; b.classList.remove('pop'); void b.offsetWidth; b.classList.add('pop');
    const u = $('#userBtn'); u.textContent = me ? me.name.split(' ')[0] : 'Kirish'
}
const addCart = (id, q = 1) => { const c = cart.find(x => x.id == id); c ? c.q += q : cart.push({ id: +id, q }); sync(); toast(byId(id).name + ' savatga qo\'shildi') };
const toggleWish = id => { wish = wish.includes(+id) ? wish.filter(x => x != id) : [...wish, +id]; sync() };
const card = p => `<article class="pc"><button class="heart ${wish.includes(p.id) ? 'on' : ''}" data-w="${p.id}" aria-label="Sevimli">${wish.includes(p.id) ? '❤️' : '🤍'}</button>
<a href="#/product/${p.id}"><div class="pic" style="--g1:${G[p.cat][0]};--g2:${G[p.cat][1]}">${p.e}</div></a>
<div class="b"><small>${CATS[p.cat][1]}</small><h3><a href="#/product/${p.id}">${p.name}</a></h3><div class="f"><b>${usd(p.price)}</b><button class="add" data-a="${p.id}" aria-label="Savatga">+</button></div></div></article>`;

/* ---------- sahifalar ---------- */
const V = {
    home() {
        return `<section class="hero"><div><h1><span>Yangi texnika.</span><span>Original narxda.</span></h1>
<p>iPhone, MacBook, PlayStation, AirPods va iPad — rasmiy kafolat bilan, Toshkent bo'ylab shu kunning o'zida yetkazamiz.</p>
<div class="row"><a class="btn" href="#/catalog">Katalogni ochish</a><a class="btn ghost" href="#/catalog?cat=console">PlayStation 5</a></div></div>
<div class="stage"><em id="hm">📱</em><span class="tag" id="ht">iPhone 16 Pro Max</span></div></section>
<section><div class="sh"><h2>Toifalar</h2></div><div class="cats">${Object.entries(CATS).map(([k, [i, n]]) => `<a class="cat" href="#/catalog?cat=${k}"><i>${i}</i>${n}</a>`).join('')}</div></section>
<section><div class="sh"><h2>Eng ko'p sotilganlar</h2><a href="#/catalog">Hammasi</a></div><div class="grid">${[1, 3, 5, 7, 9, 11].map(i => card(byId(i))).join('')}</div></section>
<div class="deal"><div><h2>Haftalik chegirma: kod bilan −10%</h2><p>Savatda <b>YANGI10</b> promokodini kiriting.</p><a class="btn" href="#/catalog">Xarid qilish</a></div><div class="cd" id="cd"></div></div>
<section><div class="feat"><div><i>🚚</i><h3>Shu kuni yetkazish</h3><p>Toshkent bo'ylab buyurtma kuni yetkazamiz.</p></div><div><i>🛡️</i><h3>Rasmiy kafolat</h3><p>Barcha mahsulotlar original va kafolatli.</p></div><div><i>💳</i><h3>Bo'lib to'lash</h3><p>12 oygacha foizsiz muddatli to'lov.</p></div><div><i>🔄</i><h3>14 kunda qaytarish</h3><p>Yoqmasa, savolsiz qaytaring.</p></div></div></section>
<section class="news"><h2>Yangi mahsulotlar haqida birinchi bo'lib biling</h2><form id="nf"><input type="email" required placeholder="Email manzilingiz"><button class="btn">Obuna bo'lish</button></form></section>`},
    catalog(q) {
        const st = V._f = V._f || { cat: 'all', sort: 'pop', max: 2000, q: '' }; if (q.cat) st.cat = q.cat; if ('q' in q) st.q = q.q;
        return `<div class="page"><div class="sh"><h2>Katalog</h2></div><div class="tools" id="chips"><button class="chip" data-c="all">Hammasi</button>${Object.entries(CATS).map(([k, [i, n]]) => `<button class="chip" data-c="${k}">${i} ${n}</button>`).join('')}
<div class="sp"><input type="text" id="fq" placeholder="Nom bo'yicha" value="${esc(st.q)}"><label>Narx: <b id="mv"></b> gacha <input type="range" id="fm" min="100" max="2000" step="50" value="${st.max}"></label>
<select id="fs"><option value="pop">Ommabop</option><option value="lo">Arzonroq</option><option value="hi">Qimmatroq</option></select></div></div><div class="grid" id="cg"></div></div>`},
    product(id) {
        const p = byId(id); if (!p) return V.nf(); return `<div class="page"><p class="crumb"><a href="#/">Bosh sahifa</a> / <a href="#/catalog?cat=${p.cat}">${CATS[p.cat][1]}</a> / ${p.name}</p>
<div class="pd"><div class="pic" style="background:linear-gradient(135deg,${G[p.cat][0]},${G[p.cat][1]})">${p.e}</div><div><h1>${p.name}</h1><p style="color:var(--mut);margin-top:10px">${p.desc}</p><div class="price">${usd(p.price)}</div>
<ul>${Object.entries(p.spec).map(([k, v]) => `<li><span>${k}</span><b>${v}</b></li>`).join('')}</ul>
<div style="display:flex;gap:12px;flex-wrap:wrap;align-items:center"><div class="qty"><button data-q="-1">−</button><b id="qv">1</b><button data-q="1">+</button></div><button class="btn" data-add="${p.id}">Savatga qo'shish</button><button class="btn ghost" data-w="${p.id}">${wish.includes(p.id) ? '❤️ Sevimlida' : '🤍 Sevimlilarga'}</button></div></div></div>
<div class="sh" style="margin-top:60px"><h2>Shunga o'xshash</h2></div><div class="grid">${P.filter(x => x.cat == p.cat && x.id != p.id).concat(P.filter(x => x.cat != p.cat)).slice(0, 4).map(card).join('')}</div></div>`
    },
    cart() {
        if (!cart.length) return `<div class="page empty"><i>🛒</i><h2>Savat bo'sh</h2><p style="margin:12px 0 24px">Katalogdan mahsulot tanlang.</p><a class="btn" href="#/catalog">Katalogga o'tish</a></div>`;
        const sub = cart.reduce((a, c) => a + byId(c.id).price * c.q, 0), d = Math.round(sub * promo / 100);
        return `<div class="page"><div class="sh"><h2>Savat</h2></div><div class="cart"><div>${cart.map(c => { const p = byId(c.id); return `<div class="ci"><div class="pic" style="background:linear-gradient(135deg,${G[p.cat][0]},${G[p.cat][1]})">${p.e}</div><div><h3>${p.name}</h3><small>${usd(p.price)}</small><div class="qty" style="margin-top:8px"><button data-cq="${p.id}:-1">−</button><b>${c.q}</b><button data-cq="${p.id}:1">+</button></div></div><div style="text-align:right"><b>${usd(p.price * c.q)}</b><br><button class="chip" data-rm="${p.id}" style="margin-top:8px">O'chirish</button></div></div>` }).join('')}</div>
<aside class="sum"><h3 style="font:800 20px Manrope">Buyurtma</h3><div><span>Mahsulotlar</span><span>${usd(sub)}</span></div>${d ? `<div><span>Chegirma ${promo}%</span><span>−${usd(d)}</span></div>` : ''}<div><span>Yetkazish</span><span>Bepul</span></div>
<input id="pi" placeholder="Promokod (YANGI10)"><button class="btn ghost full sm" id="pa">Qo'llash</button><div class="t"><span>Jami</span><span>${usd(sub - d)}</span></div><button class="btn full" id="co">Buyurtma berish</button></aside></div></div>`
    },
    account() {
        if (!me) return `<div class="page empty"><i>🔐</i><h2>Avval tizimga kiring</h2><p style="margin:12px 0 24px">Profil va buyurtmalar faqat ro'yxatdan o'tganlar uchun.</p><button class="btn" data-auth>Kirish</button></div>`;
        const o = store.get('orders_' + me.email, []); return `<div class="page"><div class="acc"><aside class="card"><div class="av">${esc(me.name[0].toUpperCase())}</div><h3 style="font:800 20px Manrope">${esc(me.name)}</h3><p style="color:var(--mut);margin-bottom:16px">${esc(me.email)}</p><button class="btn ghost full sm" id="lo">Chiqish</button></aside>
<div><div class="card"><h3 style="font:800 20px Manrope;margin-bottom:6px">Buyurtmalarim</h3>${o.length ? o.map(x => `<div class="ord"><div><b>#${x.id}</b><br><small>${x.date} · ${x.items} dona</small></div><b>${usd(x.total)}</b><span class="st">Qabul qilindi</span></div>`).join('') : '<p style="color:var(--mut)">Hali buyurtma yo\'q.</p>'}</div>
<div class="sh"><h2 style="font-size:28px">Sevimlilar</h2></div>${wish.length ? `<div class="grid">${wish.map(i => card(byId(i))).join('')}</div>` : '<p style="color:var(--mut)">Yurakcha bosib mahsulotni saqlang.</p>'}</div></div></div>`
    },
    about() {
        return `<div class="page"><h1 style="font-size:clamp(36px,6vw,72px);max-width:16ch">Texnikani sevadiganlar uchun do'kon</h1><p style="color:var(--mut);max-width:60ch;margin-top:18px;font-size:18px">Biz 2018-yildan beri original elektronikani halol narxda sotamiz. Har bir mahsulot tekshiriladi, kafolat esa rasmiy.</p>
<div class="stats"><div><b data-n="50000">0</b>mamnun mijoz</div><div><b data-n="1200">0</b>mahsulot turi</div><div><b data-n="8">0</b>yillik tajriba</div><div><b data-n="14">0</b>kunlik qaytarish</div></div>
<h2 style="margin:40px 0 18px">Savol yuboring</h2><form class="fld" id="mf"><input name="n" required placeholder="Ismingiz"><input name="e" type="email" required placeholder="Email"><textarea name="m" required rows="4" placeholder="Xabaringiz"></textarea><button class="btn">Yuborish</button></form></div>`},
    nf() { return `<div class="page empty"><i>🔍</i><h2>Sahifa topilmadi</h2><p style="margin:12px 0 24px">Manzil noto'g'ri yoki mahsulot olib tashlangan.</p><a class="btn" href="#/">Bosh sahifaga</a></div>` }
};

/* ---------- router ---------- */
let timers = [];
function route() {
    timers.forEach(clearInterval); timers = []; const [path, qs = ''] = (location.hash.slice(2) || '').split('?'), [r, arg] = path.split('/'), q = Object.fromEntries(new URLSearchParams(qs));
    const app = $('#app'); app.innerHTML = r === '' ? V.home() : r === 'catalog' ? V.catalog(q) : r === 'product' ? V.product(arg) : V[r] ? V[r](q) : V.nf(); window.scrollTo(0, 0);
    $$('.top nav a').forEach(a => a.classList.toggle('on', a.dataset.r === r));
    if (r === '') homeFx(); if (r === 'catalog') catFx(); if (r === 'about') countFx(); document.title = 'Texnomarket' + (r && V[r] ? ' — ' + ({ catalog: 'Katalog', cart: 'Savat', account: 'Profil', about: 'Biz haqimizda', product: (byId(arg) || {}).name }[r] || '') : '')
}
function homeFx() {
    const L = [[1, '📱'], [3, '💻'], [5, '🎮'], [7, '🎧'], [9, '📲'], [11, '⌚']]; let i = 0; const m = $('#hm'), t = $('#ht');
    timers.push(setInterval(() => { m.classList.add('out'); setTimeout(() => { i = (i + 1) % L.length; m.textContent = L[i][1]; t.textContent = byId(L[i][0]).name; m.classList.remove('out') }, 400) }, 2600));
    const end = store.get('deal', 0) > Date.now() ? store.get('deal', 0) : (store.set('deal', Date.now() + 6048e5), Date.now() + 6048e5), cd = $('#cd'), tick = () => { let s = Math.max(0, (end - Date.now()) / 1e3 | 0); const u = [['Kun', 86400], ['Soat', 3600], ['Daq', 60], ['Son', 1]]; cd.innerHTML = u.map(([n, v]) => { const x = s / v | 0; s %= v; return `<div>${String(x).padStart(2, '0')}<small>${n}</small></div>` }).join('') }; tick(); timers.push(setInterval(tick, 1000));
    $('#nf').onsubmit = e => { e.preventDefault(); toast('Obuna tasdiqlandi. Rahmat!'); e.target.reset() }
}
function catFx() {
    const st = V._f, g = $('#cg'); const draw = () => {
        let l = P.filter(p => (st.cat === 'all' || p.cat === st.cat) && p.price <= st.max && p.name.toLowerCase().includes(st.q.toLowerCase()));
        if (st.sort === 'lo') l.sort((a, b) => a.price - b.price); if (st.sort === 'hi') l.sort((a, b) => b.price - a.price);
        g.innerHTML = l.length ? l.map(card).join('') : '<div class="empty" style="grid-column:1/-1"><i>🔍</i>Hech narsa topilmadi. Filtrlarni o\'zgartiring.</div>';
        $$('#chips .chip').forEach(c => c.classList.toggle('on', c.dataset.c === st.cat)); $('#mv').textContent = usd(st.max); $('#fs').value = st.sort
    }; draw();
    $('#chips').onclick = e => { if (e.target.dataset.c) { st.cat = e.target.dataset.c; draw() } }; $('#fq').oninput = e => { st.q = e.target.value; draw() }; $('#fm').oninput = e => { st.max = +e.target.value; draw() }; $('#fs').onchange = e => { st.sort = e.target.value; draw() }
}
function countFx() {
    $$('[data-n]').forEach(el => { const n = +el.dataset.n, t0 = performance.now(), f = t => { const k = Math.min(1, (t - t0) / 1400); el.textContent = Math.round(n * (1 - Math.pow(1 - k, 3))).toLocaleString('en-US') + (n > 1000 ? '+' : ''); k < 1 && requestAnimationFrame(f) }; requestAnimationFrame(f) });
    $('#mf').onsubmit = e => { e.preventDefault(); const f = Object.fromEntries(new FormData(e.target)); store.set('msgs', [...store.get('msgs', []), f]); toast('Xabaringiz yuborildi. Tez orada javob beramiz.'); e.target.reset() }
}

/* ---------- global hodisalar ---------- */
document.addEventListener('click', e => {
    const t = e.target.closest('button,a'); if (!t) return; const d = t.dataset;
    if (d.a) return addCart(d.a); if (d.w) { toggleWish(d.w); return route() }
    if (d.add) { addCart(d.add, +$('#qv').textContent); return }
    if (d.q) { const v = $('#qv'); v.textContent = Math.max(1, +v.textContent + +d.q); return }
    if (d.cq) { const [i, s] = d.cq.split(':'), c = cart.find(x => x.id == i); c.q += +s; if (c.q < 1) cart = cart.filter(x => x !== c); sync(); return route() }
    if (d.rm) { cart = cart.filter(x => x.id != d.rm); sync(); return route() }
    if (d.auth !== undefined) return openAuth('in');
    if (d.close !== undefined) return $('#auth').hidden = true;
    if (t.id === 'pa') { const c = $('#pi').value.trim().toUpperCase(); if (c === 'YANGI10') { promo = 10; toast('Promokod qo\'llandi: −10%') } else toast('Promokod noto\'g\'ri'); return route() }
    if (t.id === 'co') {
        if (!me) { toast('Buyurtma berish uchun tizimga kiring'); return openAuth('in') }
        const sub = cart.reduce((a, c) => a + byId(c.id).price * c.q, 0), o = store.get('orders_' + me.email, []); o.unshift({ id: Date.now().toString().slice(-6), date: new Date().toLocaleDateString('uz-UZ'), items: cart.reduce((a, c) => a + c.q, 0), total: sub - Math.round(sub * promo / 100) });
        store.set('orders_' + me.email, o); cart = []; promo = 0; sync(); toast('Buyurtma qabul qilindi!'); location.hash = '#/account'; return
    }
    if (t.id === 'lo') { me = null; store.set('me', null); sync(); toast('Tizimdan chiqdingiz'); location.hash = '#/' }
});
$('#cartBtn').onclick = () => location.hash = '#/cart';
$('#userBtn').onclick = () => me ? location.hash = '#/account' : openAuth('in');
$('#sf').onsubmit = e => { e.preventDefault(); V._f = V._f || { cat: 'all', sort: 'pop', max: 2000, q: '' }; location.hash = '#/catalog?cat=all&q=' + encodeURIComponent($('#q').value); $('#q').value = '' };
$('#auth').onclick = e => { if (e.target.id === 'auth') e.target.hidden = true };
document.addEventListener('keydown', e => { if (e.key === 'Escape') $('#auth').hidden = true });

/* ---------- sign in / sign up ---------- */
let mode = 'in'; const box = $('#auth .box'), af = $('#af');
function openAuth(m) { setMode(m); $('#auth').hidden = false; setTimeout(() => af.elements[m === 'up' ? 0 : 1].focus(), 50) }
function setMode(m) { mode = m; box.classList.toggle('in', m === 'in'); $$('.tabs button').forEach(b => b.classList.toggle('on', b.dataset.t === m)); $('#asub').textContent = m === 'in' ? 'Kirish' : 'Hisob yaratish'; $('#aerr').textContent = ''; af.elements.pass.autocomplete = m === 'in' ? 'current-password' : 'new-password' }
$$('.tabs button').forEach(b => b.onclick = () => setMode(b.dataset.t));
$('#eye').onclick = () => { const p = af.elements.pass; p.type = p.type === 'password' ? 'text' : 'password' };
af.elements.pass.oninput = e => { const v = e.target.value; const s = [v.length >= 6, v.length >= 10, /[A-Z]/.test(v) && /[a-z]/.test(v), /\d/.test(v) && /[^\w]/.test(v)].filter(Boolean).length, m = $('.meter i'); m.style.width = s * 25 + '%'; m.style.background = ['#e5484d', '#e5484d', '#f59e0b', '#84cc16', '#16a34a'][s] };
af.onsubmit = e => {
    e.preventDefault(); const f = af.elements, name = f.name.value.trim(), email = f.email.value.trim().toLowerCase(), pass = f.pass.value, err = m => ($('#aerr').textContent = m, box.animate([{ transform: 'translateX(-8px)' }, { transform: 'translateX(8px)' }, { transform: 'none' }], { duration: 260 }));
    if (!/^\S+@\S+\.\S+$/.test(email)) return err('Email manzilini to\'g\'ri kiriting.'); if (pass.length < 6) return err('Parol kamida 6 belgidan iborat bo\'lsin.');
    if (mode === 'up') {
        if (name.length < 2) return err('Ismingizni kiriting.'); if (users.some(u => u.email === email)) return err('Bu email allaqachon ro\'yxatdan o\'tgan. Kirish bo\'limiga o\'ting.');
        users.push({ name, email, pass: hash(pass) }); store.set('users', users); me = { name, email }; toast('Xush kelibsiz, ' + name.split(' ')[0] + '!')
    }
    else { const u = users.find(u => u.email === email); if (!u) return err('Bunday email topilmadi. Avval ro\'yxatdan o\'ting.'); if (u.pass !== hash(pass)) return err('Parol noto\'g\'ri.'); me = { name: u.name, email }; toast('Qaytganingiz bilan, ' + u.name.split(' ')[0] + '!') }
    store.set('me', me); af.reset(); $('.meter i').style.width = 0; $('#auth').hidden = true; sync(); if (location.hash === '#/account') route()
};
addEventListener('hashchange', route); sync(); route();