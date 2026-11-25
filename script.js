// ===== Paninda (products) =====
// base = libre na sa simula | cost = bibilhin sa Palengke | hang = nakasabit sa tindahan
const PRODUCTS = [
  { id: "candy",    name: "Candy",     price: 2,  color: "#d6457a", base: true },
  { id: "pandesal", name: "Pandesal",  price: 3,  color: "#b9782e", base: true },
  { id: "salt",     name: "Asin",      price: 5,  color: "#5a7a8c", base: true },
  { id: "biscuit",  name: "Biskwit",   price: 8,  color: "#3b78c4", base: true },
  { id: "egg",      name: "Itlog",     price: 10, color: "#c29a52", base: true },
  { id: "soda",     name: "Soft drink",price: 12, color: "#c9302c", base: true },
  { id: "noodles",  name: "Pancit canton", price: 15, color: "#e08a1e", base: true },
  { id: "soap",     name: "Sabon",     price: 20, color: "#2f9a7a", base: true },
  { id: "milk",     name: "Gatas",     price: 9,  color: "#4a7fd1", base: true, hang: true },
  { id: "choco",    name: "Choco drink", price: 8, color: "#7b4a26", base: true, hang: true },
  { id: "bar",      name: "Chocolate", price: 12, color: "#8a3b2c", base: true, hang: true },
  { id: "milkbig",  name: "Gatas (big)", price: 22, color: "#2f6fb0", cost: 120, hang: true },
  { id: "icecandy", name: "Ice candy", price: 5,  color: "#9b5de5", cost: 40 },
  { id: "coffee",   name: "Kape",      price: 6,  color: "#6b3f1e", cost: 50 },
  { id: "shampoo",  name: "Shampoo",   price: 7,  color: "#e0558a", cost: 60 },
  { id: "water",    name: "Tubig",     price: 15, color: "#3a9bc7", cost: 80 },
  { id: "chips",    name: "Chichirya", price: 14, color: "#d1a21a", cost: 120 },
  { id: "rice",     name: "Bigas",     price: 18, color: "#a8946a", cost: 150 },
  { id: "load",     name: "Load",      price: 30, color: "#2a9d8f", cost: 200 },
  { id: "sardines", name: "Sardinas",  price: 25, color: "#b02a2a", cost: 250 },
];

const UPGRADES = [
  { id: "shelf", name: "Malaking Estante",  desc: "+10 sa limit ng stock ng bawat paninda", costs: [80, 150, 250] },
  { id: "time",  name: "Mas Mahabang Araw", desc: "+30 seconds ang haba ng araw (mas maraming customer)", costs: [60, 120, 200] },
  { id: "fan",   name: "Electric Fan",      desc: "Mas matiyaga ang customer (+15%)",       costs: [50, 100, 180] },
  { id: "wifi",  name: "Mas Malakas na Signal", desc: "Mas mabilis at hindi madalas pumalya ang e-wallet", costs: [60, 120] },
  { id: "tip",   name: "Tip Jar",           desc: "Mas malaki ang tip (+50%)",              costs: [60, 120, 200] },
  { id: "heart", name: "Dagdag Buhay",      desc: "+1 buhay sa bawat shift",                costs: [100, 200] },
];

const DECOR = [
  { id: "bunting",     name: "Banderitas",      desc: "Makulay na bandera sa harap ng store", cost: 40,  where: "wall" },
  { id: "plant",       name: "Halaman",         desc: "Pampa-fresh sa estante",               cost: 50,  where: "ledge" },
  { id: "bench",       name: "Bangko",          desc: "Upuan ng mga tambay at suki",          cost: 60,  where: "ledge" },
  { id: "paint_rosas", name: "Pinturang Rosas", desc: "Gawing pink ang dingding",             cost: 80,  paint: "#d98ba8" },
  { id: "paint_dilaw", name: "Pinturang Dilaw", desc: "Gawing dilaw ang dingding",            cost: 80,  paint: "#e5b94a" },
  { id: "lights",      name: "Christmas Lights",desc: "Kumukutitap na ilaw, Pasko vibes",     cost: 90,  where: "wall" },
  { id: "radio",       name: "Radyo",           desc: "Lumang radyo na may tugtugan",         cost: 100, where: "ledge" },
  { id: "cat",         name: "Pusa",            desc: "Si Muning, natutulog sa estante",      cost: 120, where: "ledge" },
  { id: "parol",       name: "Parol",           desc: "Nakasabit na parol",                   cost: 150, where: "wall" },
];

// ===== Story ({n} = name mo, {s} = pangalan ng store) =====
const REASONS = {
  family: { icon: "r_family", label: "Para sa family", pages: [
    "Napapansin ni {n} na laging kapos si Mama pag malapit na ang sweldo. Kulang pa rin pambili ng bigas at ulam.",
    "Isang gabi, naisip ni {n}: \"Paano kung magtayo kami ng maliit na tindahan sa harap ng bahay? At least may kita araw-araw.\"",
    "Kaya naitayo ang {s}. Maliit lang, pero para sa family ang bawat benta. Game na ba, {n}?" ] },
  dream: { icon: "r_dream", label: "Pangarap kong magnegosyo", pages: [
    "Bata pa lang si {n}, favorite na niyang maglaro ng tindahan gamit ang tansan at lata.",
    "Ngayong malaki na siya, ipon at lakas ng loob na lang ang kulang. Bumili si {n} ng unang paninda at nagpinta ng sariling karatula.",
    "Ito na ang simula ng {s}. Isang kanto, isang pangarap. Open na tayo, {n}!" ] },
  school: { icon: "r_school", label: "Pambayad sa tuition", pages: [
    "Malapit na ang enrollment, pero kulang pa ang pera ni {n} pang-tuition at baon.",
    "Hindi sumuko si {n}. Nag-ipon, umutang ng puhunan, at nag-ayos ng maliit na bintana sa harap ng bahay.",
    "Bawat ₱2 na candy, isang hakbang papunta sa diploma. Open na ang {s}, {n}!" ] },
  lola: { icon: "r_lola", label: "Mana kay Lola", pages: [
    "Mahigit thirty years na may tindahan si Lola sa kanto. Kilala siya ng buong barangay, mula bata hanggang lolo.",
    "Nang tumanda na siya, ipinasa niya kay {n} ang susi at ang lumang kuwaderno ng mga utang ng suki.",
    "Hindi puwedeng magsara ang tindahan. Itutuloy ni {n} ang {s}. Para kay Lola!" ] },
};

const OPEN_HOUR = 8, CLOSE_HOUR = 22;   // 8 AM hanggang 10 PM
const DAY_SECONDS = 300;                // 5 minutes sa totoong oras = isang buong araw
const START_LIVES = 5;
const DENOMS = [500, 200, 100, 50, 20, 10, 5, 1];   // pera para sa sukli
const COST_SCALE = 3;                   // palakihin/paliitin ang presyo sa Palengke
UPGRADES.forEach((u) => (u.costs = u.costs.map((c) => c * COST_SCALE)));
PRODUCTS.forEach((p) => { if (p.cost) p.cost *= COST_SCALE; });
DECOR.forEach((d) => (d.cost *= COST_SCALE));
const START_STOCK = 15;       // stock ng bawat libreng paninda sa simula
const BASE_CAP = 20;          // limit ng stock bawat paninda
const EWALLET_CHANCE = 0.4;   // gaano karaming customer ang mag-e-e-wallet
const GAP_MIN = 2500;         // pahinga bago dumating ang next na customer (ms)
const GAP_MAX = 4500;
const SACHET_COLORS = ["#e63946", "#f4a261", "#2a9d8f", "#e9c46a", "#457b9d", "#d65db1"];

const $ = (id) => document.getElementById(id);
const byId = (id) => PRODUCTS.find((i) => i.id === id);
const newStats = () => ({ games: 0, best: 0, total: 0, served: 0, changeOk: 0, changeBad: 0 });

let profile = normalize(loadProfile());
let state = null;
let loop = null;
let open = false;
let selAvatar = 0;
let selReason = "family";
let story = { pages: [], i: 0 };
let tab = "stock";

// ===== Profile (beta: sa browser lang naka-save) =====
function loadProfile() {
  try { return JSON.parse(localStorage.getItem("sariSariProfile")); } catch (e) { return null; }
}
function saveProfile() {
  try { localStorage.setItem("sariSariProfile", JSON.stringify(profile)); } catch (e) {}
}
function normalize(p) {
  if (!p) return null;
  p.avatar = Number.isInteger(p.avatar) ? p.avatar : 0;
  p.stats = { ...newStats(), ...p.stats };
  p.wallet = p.wallet || 0;
  p.up = p.up || {};
  p.owned = p.owned || [];
  p.decor = p.decor || {};
  p.stock = p.stock || {};
  PRODUCTS.forEach((x) => {
    if (p.stock[x.id] === undefined && (x.base || p.owned.includes(x.id))) p.stock[x.id] = x.base ? START_STOCK : 5;
  });
  return p;
}
function rankFor(best) {
  if (best >= 1500) return "Tindahan Legend";
  if (best >= 800) return "Kilala sa Kanto";
  if (best >= 300) return "Suki ng Barangay";
  return "Baguhang Tindero";
}
const lvl = (id) => profile.up[id] || 0;
const cap = () => BASE_CAP + 10 * lvl("shelf");
const stockOf = (id) => profile.stock[id] || 0;
const unitCost = (p) => Math.max(1, Math.round(p.price * 0.6));   // puhunan bawat piraso
const available = () => PRODUCTS.filter((p) => p.base || profile.owned.includes(p.id));

// ===== Screens =====
function show(name) {
  document.querySelectorAll(".panel").forEach((p) => p.classList.remove("show"));
  $("p-" + name).classList.add("show");
  $("overlay").classList.remove("hidden");
}
function backToStore() {
  $("overlay").classList.add("hidden");
  renderShelf();
  renderDecor();
  updateHud();
}

function buildSetup() {
  for (let i = 0; i < AVATAR_COUNT; i++) {
    const b = document.createElement("button");
    b.type = "button"; b.innerHTML = personSvg(i);
    b.addEventListener("click", () => { selAvatar = i; markSetup(); });
    $("avatars").appendChild(b);
  }
  Object.entries(REASONS).forEach(([key, r]) => {
    const b = document.createElement("button");
    b.type = "button"; b.textContent = r.label;
    b.addEventListener("click", () => { selReason = key; markSetup(); });
    $("reasons").appendChild(b);
  });
}
function markSetup() {
  [...$("avatars").children].forEach((b, i) => b.classList.toggle("on", i === selAvatar));
  [...$("reasons").children].forEach((b, i) => b.classList.toggle("on", Object.keys(REASONS)[i] === selReason));
}
function openSetup() {
  $("inName").value = profile ? profile.name : "";
  $("inStore").value = profile ? profile.store : "";
  selAvatar = profile ? profile.avatar : 0;
  selReason = profile ? profile.reason : "family";
  $("setupErr").textContent = "";
  markSetup();
  show("setup");
}
function submitSetup() {
  const name = $("inName").value.trim();
  const store = $("inStore").value.trim();
  if (!name || !store) { $("setupErr").textContent = "Lagyan mo ng name mo at pangalan ng store."; return; }
  const first = !profile;
  profile = normalize({ ...(profile || {}), name, store, avatar: selAvatar, reason: selReason });
  saveProfile();
  $("signName").textContent = store;
  first ? openStory() : openMenu();
}

function openStory() {
  const r = REASONS[profile.reason];
  story = { i: 0, pages: r.pages.map((t) => t.replaceAll("{n}", profile.name).replaceAll("{s}", profile.store)) };
  $("storyIcon").innerHTML = art(r.icon);
  renderStory();
  show("story");
}
function renderStory() {
  $("storyText").textContent = story.pages[story.i];
  $("dots").innerHTML = story.pages.map((_, k) => `<i class="${k === story.i ? "on" : ""}"></i>`).join("");
  $("nextBtn").textContent = story.i === story.pages.length - 1 ? "Tara, tingnan ang store!" : "Next";
}
function nextStory() {
  if (story.i < story.pages.length - 1) { story.i++; renderStory(); }
  else { backToStore(); setMsg("Sarado pa ang store. Pindutin ang Open Store para magsimula!"); }
}

function openMenu() {
  const s = profile.stats;
  $("mAvatar").innerHTML = personSvg(profile.avatar);
  $("mName").textContent = profile.name;
  $("mStore").textContent = profile.store;
  $("mRank").textContent = rankFor(s.best);
  $("mWallet").textContent = profile.wallet;
  const cell = (v, t) => `<div><b>${v}</b>${t}</div>`;
  $("mStats").innerHTML = cell("₱" + s.best, "Pinakamataas na benta") + cell("₱" + s.total, "Total na kita") +
    cell(s.games, "Araw na nag-open") + cell(s.served, "Napagbilhan") +
    cell(s.changeOk, "Tamang sukli") + cell(s.changeBad, "Maling sukli");
  show("menu");
}
function resetProfile() {
  if (!confirm("Buburahin ang profile, score, upgrade, stock at decor. Sigurado ka ba?")) return;
  try { localStorage.removeItem("sariSariProfile"); } catch (e) {}
  profile = null;
  renderDecor();
  openSetup();
}

// ===== Palengke =====
function openShop() { renderShop(); show("shop"); }

function renderShop() {
  $("wallet").textContent = profile.wallet;
  document.querySelectorAll("#p-shop .tabs button").forEach((b) => b.classList.toggle("on", b.dataset.tab === tab));
  const row = (icon, name, desc, btn) =>
    `<div class="sitem"><div class="sicon">${art(icon)}</div><div class="sinfo"><b>${name}</b><span>${desc}</span></div>${btn}</div>`;
  const buy = (act, id, cost) =>
    `<button data-act="${act}" data-id="${id}" ${profile.wallet < cost ? "disabled" : ""}>₱${cost}</button>`;
  let html = "";

  if (tab === "stock") {
    available().forEach((p) => {
      const n = stockOf(p.id), space = cap() - n, uc = unitCost(p);
      const q5 = Math.min(5, space);
      const b5 = `<button data-act="stock" data-id="${p.id}" data-qty="5" ${q5 <= 0 || profile.wallet < q5 * uc ? "disabled" : ""}>+${q5 || 5} · ₱${q5 * uc}</button>`;
      const bf = `<button class="ghost" data-act="stock" data-id="${p.id}" data-qty="${space}" ${space <= 0 || profile.wallet < space * uc ? "disabled" : ""}>${space <= 0 ? "Puno na" : `Puno · ₱${space * uc}`}</button>`;
      html += row(p.id, p.name, `Stock: ${n}/${cap()} · Puhunan ₱${uc} bawat isa`, `<div class="btns">${b5}${bf}</div>`);
    });
  } else if (tab === "up") {
    UPGRADES.forEach((u) => {
      const lv = lvl(u.id), max = u.costs.length;
      html += row("up_" + u.id, `${u.name} (${lv}/${max})`, u.desc,
        lv >= max ? `<button disabled>Max na</button>` : buy("up", u.id, u.costs[lv]));
    });
  } else if (tab === "prod") {
    PRODUCTS.filter((p) => !p.base).forEach((p) => {
      html += row(p.id, p.name, `Benta ₱${p.price} bawat isa${p.hang ? " · nakasabit" : ""}`,
        profile.owned.includes(p.id) ? `<button disabled>Meron na</button>` : buy("prod", p.id, p.cost));
    });
  } else {
    DECOR.forEach((d) => {
      const own = d.id in profile.decor;
      html += row(d.id, d.name, d.desc,
        own ? `<button class="ghost" data-act="tog" data-id="${d.id}">${profile.decor[d.id] === "on" ? "Alisin" : "Ilagay"}</button>`
            : buy("dec", d.id, d.cost));
    });
  }
  $("shopList").innerHTML = html;
}

function setDecor(id, value) {
  const d = DECOR.find((x) => x.id === id);
  if (value === "on" && d.paint) {
    DECOR.filter((x) => x.paint && x.id in profile.decor).forEach((x) => (profile.decor[x.id] = "off"));
  }
  profile.decor[id] = value;
}

function shopAction(act, id, qty) {
  if (act === "up") {
    const u = UPGRADES.find((x) => x.id === id), cost = u.costs[lvl(id)];
    if (cost == null || profile.wallet < cost) return;
    profile.wallet -= cost; profile.up[id] = lvl(id) + 1;
  } else if (act === "prod") {
    const p = byId(id);
    if (profile.owned.includes(id) || profile.wallet < p.cost) return;
    profile.wallet -= p.cost; profile.owned.push(id); profile.stock[id] = 5;   // may free na 5 stock
  } else if (act === "stock") {
    const p = byId(id), q = Math.min(qty, cap() - stockOf(id)), cost = q * unitCost(p);
    if (q <= 0 || profile.wallet < cost) return;
    profile.wallet -= cost; profile.stock[id] = stockOf(id) + q;
  } else if (act === "dec") {
    const d = DECOR.find((x) => x.id === id);
    if (id in profile.decor || profile.wallet < d.cost) return;
    profile.wallet -= d.cost; setDecor(id, "on");
  } else if (act === "tog") {
    setDecor(id, profile.decor[id] === "on" ? "off" : "on");
  }
  saveProfile();
  renderShop();
  renderDecor();
  renderShelf();
}

// ===== Store scene =====
function buildSachets() {
  for (let i = 0; i < 14; i++) {
    const s = document.createElement("span");
    s.style.background = SACHET_COLORS[i % SACHET_COLORS.length];
    s.style.height = 26 + ((i * 7) % 5) * 3 + "px";
    $("sachets").appendChild(s);
  }
}
function renderShelf() {
  $("shelf").innerHTML = "";
  $("hanging").innerHTML = "";
  if (!profile) return;
  available().forEach((it) => {
    const n = stockOf(it.id);
    const b = document.createElement("button");
    b.className = "item" + (it.hang ? " hang" : "") + (n <= 0 ? " out" : "");
    b.style.setProperty("--c", it.color);
    b.innerHTML = `<span class="stk">${n > 0 ? "x" + n : "Ubos"}</span><span class="e">${art(it.id)}</span><span class="n">${it.name}</span><span class="p">₱${it.price}</span>`;
    b.addEventListener("click", () => addToTray(it.id));
    ($(it.hang ? "hanging" : "shelf")).appendChild(b);
  });
  $("hanging").hidden = !$("hanging").children.length;
}
function renderDecor() {
  const on = (id) => profile && profile.decor[id] === "on";
  const list = (where) => DECOR.filter((d) => d.where === where && on(d.id))
    .map((d) => `<div class="d-${d.id}">${art(d.id)}</div>`).join("");
  $("decorWall").innerHTML = list("wall");
  $("ledge").innerHTML = list("ledge");
  const paint = DECOR.find((d) => d.paint && on(d.id));
  document.querySelector(".wall").style.setProperty("--wall", paint ? paint.paint : "#4f9a94");
}

// ===== Open / Close ng store =====
function setOpenUI(v) {
  open = v;
  $("store").classList.toggle("closed", !v);
  $("ocText").textContent = v ? "OPEN" : "SARADO";
  $("openBtn").hidden = v;
  $("closeBtn").hidden = !v;
  $("marketBtn").disabled = v;
  $("profileBtn").disabled = v;
}

function openStore() {
  if (!profile) return openSetup();
  if (!available().some((p) => stockOf(p.id) > 0)) {
    setMsg("Wala kang paninda! Mag-restock ka muna sa Palengke.", true);
    return openShop();
  }
  const dayMs = (DAY_SECONDS + 30 * lvl("time")) * 1000;
  state = {
    money: 0, dayMs, timeMs: dayMs, lives: START_LIVES + lvl("heart"),
    order: [], tray: [], patience: 0, patienceMax: 1, hasCustomer: false,
    gap: 1500, elapsed: 0, served: 0, cust: 0, mood: 0, method: "cash", pay: null, change: null,
    last: performance.now(),
    patMult: 1 + 0.15 * lvl("fan"), tipMult: 1 + 0.5 * lvl("tip"),
  };
  $("signName").textContent = profile.store;
  $("overlay").classList.add("hidden");
  setOpenUI(true);
  renderShelf();
  renderDecor();
  resetPayUI();
  resetChangeUI();
  waiting();
  setMsg("Open na ang store! 8:00 AM na, antay lang sa unang suki.");
  updateHud();
  renderTray();
  clearInterval(loop);
  loop = setInterval(tick, 100);
}

function closeStoreEarly() {
  if (open) endGame("Nag-close ka na ng store nang " + clockText(hourNow()) + ".");
}

// ===== Game loop =====
function tick() {
  const now = performance.now();
  const dt = Math.min(now - state.last, 250);   // hindi tatalon ang oras kapag naka-background ang tab
  state.last = now;
  state.timeMs -= dt;
  state.elapsed += dt;
  if (state.hasCustomer) {
    if (state.pay) tickPay(dt);
    else {
      state.patience -= dt * (state.change ? 0.4 : 1);   // mas mabagal mainip habang nagsusukli
      updatePatience();
      if (state.patience <= 0) customerLeaves();
    }
  } else if (state.gap > 0) {
    state.gap -= dt;
    if (state.gap <= 0) nextCustomer();
  }
  if (!open) return;
  updateHud();
  if (state.timeMs <= 0) endGame("Closing time na! 10:00 PM na.");
}

function waiting() {
  $("customer").className = "customer";
  $("customer").innerHTML = "";
  $("bubble").textContent = open ? "Wala pang bumibili... antay lang." : "Sarado pa ang store.";
  $("patienceBar").style.width = "0";
}
const say = (html) => ($("bubble").innerHTML = html);

function nextCustomer() {
  const pool = available().filter((p) => stockOf(p.id) > 0);
  if (!pool.length) return endGame("Ubos na ang paninda mo! Mag-restock sa Palengke.");

  const left = {};
  pool.forEach((p) => (left[p.id] = stockOf(p.id)));
  const prog = progress();
  const level = prog < 0.34 ? 0 : prog < 0.67 ? 1 : 2;      // dumadami ang order habang tumatagal ang araw
  const want = 1 + Math.floor(Math.random() * (2 + level));
  state.order = [];
  for (let k = 0; k < want; k++) {
    const opts = pool.filter((p) => left[p.id] > 0);
    if (!opts.length) break;
    const p = opts[Math.floor(Math.random() * opts.length)];
    state.order.push(p.id);
    left[p.id]--;
  }

  state.tray = [];
  state.patienceMax = (9000 + state.order.length * 3500 - level * 1000) * state.patMult;
  state.patience = state.patienceMax;
  state.hasCustomer = true;
  state.pay = null;
  state.change = null;
  state.method = Math.random() < EWALLET_CHANCE ? "ewallet" : "cash";
  state.cust = Math.floor(Math.random() * PEOPLE.length);
  state.mood = 0;

  const c = $("customer");
  c.innerHTML = personSvg(state.cust, 0);
  c.className = "customer arrive";

  const counts = {};
  state.order.forEach((id) => (counts[id] = (counts[id] || 0) + 1));
  const items = Object.entries(counts)
    .map(([id, n]) => `<span class="want">${n > 1 ? n + "× " : ""}${art(id)}${byId(id).name}</span>`).join("");
  const tag = state.method === "ewallet"
    ? `<span class="payTag">${art("pay_phone")}E-wallet po</span>`
    : `<span class="payTag">${art("pay_cash")}Cash lang</span>`;
  say(`<span>Pabili po ng</span>${items}${tag}`);
  resetPayUI();
  resetChangeUI();
  renderTray();
  updatePatience();
}

function customerGone() {
  state.hasCustomer = false;
  state.pay = null;
  state.change = null;
  resetPayUI();
  resetChangeUI();
  const rush = isRush(hourNow());                              // mas mabilis dumating ang suki pag rush hour
  state.gap = (GAP_MIN + Math.random() * (GAP_MAX - GAP_MIN)) * (rush ? 0.6 : 1);
  $("customer").className = "customer leave";
  setTimeout(() => { if (state && open && !state.hasCustomer) waiting(); }, 450);
}

function customerLeaves() {
  state.lives--;
  customerGone();
  setMsg("Naiinip na si customer, umalis na!", true);
  updateHud();
  if (state.lives <= 0) endGame("Naubusan ka na ng buhay!");
}

// ===== Tray at pagbibigay ng order =====
function addToTray(id) {
  if (!open || !state.hasCustomer || state.pay || state.change || state.tray.length >= 6) return;
  const inTray = state.tray.filter((x) => x === id).length;
  if (inTray + 1 > stockOf(id)) return setMsg("Ubos na ang stock niyan!", true);
  state.tray.push(id);
  renderTray();
}

function giveOrder() {
  if (!open || !state.hasCustomer || state.change) return;
  if (state.pay) {                                    // e-wallet steps
    if (state.pay.phase === "fail") startPay();
    else if (state.pay.phase === "ok") finishSale();
    return;
  }
  const a = [...state.tray].sort().join(",");
  const b = [...state.order].sort().join(",");
  if (a === b) {
    state.method === "ewallet" ? startPay() : startChange();
  } else {
    state.patience = Math.max(500, state.patience - state.patienceMax * 0.15);
    state.tray = [];
    renderTray();
    setMsg("Ay mali po! Hindi po yan yung order ko.", true);
    $("bubble").classList.add("shake");
    setTimeout(() => $("bubble").classList.remove("shake"), 300);
  }
}

// ===== E-wallet payment =====
function startPay() {
  const ms = 2200 - 500 * lvl("wifi");
  state.pay = { phase: "processing", ms, ms0: ms };
  say(`<span class="want">${art("pay_phone")}Sige po, i-scan ko na yung QR ninyo...</span><span class="payBar"><i id="payBar"></i></span>`);
  $("qr").classList.add("scan");
  $("giveBtn").textContent = "Nag-i-scan...";
  $("giveBtn").disabled = true;
  $("clearBtn").disabled = true;
}
function tickPay(dt) {
  const p = state.pay;
  if (p.phase !== "processing") return;            // tapos na ang scan: hintayin na lang ang pindot ng player
  p.ms -= dt;
  if (p.ms > 0) {
    const bar = $("payBar");
    if (bar) bar.style.width = Math.min(100, 100 * (1 - p.ms / p.ms0)) + "%";   // pasulong lang ang bar
    return;
  }
  $("qr").classList.remove("scan");
  $("giveBtn").disabled = false;
  if (Math.random() < 0.25 - 0.1 * lvl("wifi")) {  // isang beses lang ang roll kung pumasok o hindi
    p.phase = "fail";
    say(`<span class="want">${art("pay_phone")}Ay, ayaw pumasok! Mahina ang signal. Ulitin natin.</span>`);
    $("giveBtn").textContent = "Ulitin ang Scan";
  } else {
    p.phase = "ok";
    say(`<span class="want">${art("pay_phone")}Ayan po, nakapag-send na ako! Paki-check po.</span>`);
    $("giveBtn").textContent = "I-check ang E-wallet";
  }
}
function resetPayUI() {
  $("giveBtn").textContent = "Ibigay";
  $("giveBtn").disabled = false;
  $("clearBtn").disabled = false;
  $("qr").classList.remove("scan");
}

function finishSale() {
  const total = orderTotal();
  const clean = !state.change || state.change.mistakes === 0;     // walang tip kapag nagkamali sa sukli
  const tip = clean ? Math.ceil((state.patience / state.patienceMax) * 5 * state.tipMult) : 0;
  state.order.forEach((id) => (profile.stock[id] = Math.max(0, stockOf(id) - 1)));
  state.money += total + tip;
  state.served++;
  const how = state.method === "ewallet" ? "Natanggap na ang e-wallet!" : "Salamat po!";
  customerGone();
  setMsg(`${how} +₱${total} (tip ₱${tip})`);
  saveProfile();
  renderShelf();
  updateHud();
}

function endGame(reason) {
  clearInterval(loop);
  state.hasCustomer = false;
  state.pay = null;
  state.change = null;
  resetPayUI();
  resetChangeUI();
  const s = profile.stats;
  const isBest = state.money > s.best;
  s.games++; s.total += state.money; s.served += state.served;
  if (isBest) s.best = state.money;
  profile.wallet += state.money;
  saveProfile();
  setOpenUI(false);
  waiting();
  renderShelf();
  updateHud();
  $("oTitle").textContent = reason;
  $("oText").innerHTML = `Benta mo ngayon: <b>₱${state.money}</b> (idinagdag sa pera mo)<br>Napagbilhan: ${state.served} customer` +
    (isBest ? "<br>Bagong record!" : `<br>Pinakamataas: ₱${s.best}`);
  show("over");
}

// ===== Display helpers =====
function updateHud() {
  if (!profile) return;
  const put = (id, html) => { const el = $(id); if (el._h !== html) { el._h = html; el.innerHTML = html; } };
  const w = $("who"), key = profile.avatar + "|" + profile.name;
  if (w._k !== key) {
    w._k = key;
    w.innerHTML = `<span class="mini">${personSvg(profile.avatar)}</span>`;
    w.append(document.createTextNode(" " + profile.name));
  }
  if (open && state) {
    const h = hourNow();
    put("moneyStat", "Benta ₱" + state.money);
    put("timeStat", clockText(h) + (isRush(h) ? ' <span class="rush">Rush</span>' : ""));
    put("lives", heartSvg(true) + " " + state.lives);
    const dark = Math.round(Math.min(1, Math.max(0, (h - 17) / 4)) * 20) / 20;   // dumidilim pagkatapos ng 5 PM
    $("store").style.filter = dark > 0 ? `brightness(${1 - dark * 0.4})` : "";
  } else {
    put("moneyStat", `Pera <span class="coin">₱</span> ${profile.wallet}`);
    put("timeStat", "Sarado");
    put("lives", "");
    $("store").style.filter = "";
  }
}
function updatePatience() {
  const pct = Math.max(0, (state.patience / state.patienceMax) * 100);
  const bar = $("patienceBar");
  bar.style.width = pct + "%";
  bar.style.background = pct > 50 ? "#3a9d4f" : pct > 25 ? "#ffc93c" : "#d8352a";
  const mood = pct > 50 ? 0 : pct > 25 ? 1 : 2;
  if (mood !== state.mood) { state.mood = mood; $("customer").innerHTML = personSvg(state.cust, mood); }
}
function renderTray() {
  const tray = $("tray");
  tray.innerHTML = "";
  if (!state || !open) return;
  state.tray.forEach((id, i) => {
    const b = document.createElement("button");
    b.innerHTML = art(id);
    b.title = "Alisin";
    b.addEventListener("click", () => { if (state.pay) return; state.tray.splice(i, 1); renderTray(); });
    tray.appendChild(b);
  });
}
function setMsg(text, bad = false) {
  $("msg").textContent = text;
  $("msg").className = "msg" + (bad ? " bad" : "");
}

// ===== Oras (8 AM hanggang 10 PM) =====
const progress = () => 1 - Math.max(0, state.timeMs) / state.dayMs;
const hourNow = () => OPEN_HOUR + progress() * (CLOSE_HOUR - OPEN_HOUR);
const isRush = (h) => (h >= 11.5 && h < 13) || (h >= 17 && h < 19.5);   // tanghalian at uwian
function clockText(h) {
  const m = Math.round((h * 60) / 5) * 5;                                // tumatalon kada 5 minuto
  const hh = Math.floor(m / 60) % 24, mm = m % 60;
  return `${hh % 12 || 12}:${String(mm).padStart(2, "0")} ${hh >= 12 ? "PM" : "AM"}`;
}

// ===== Sukli =====
const orderTotal = () => state.order.reduce((sum, id) => sum + byId(id).price, 0);

function startChange() {
  const total = orderTotal();
  const cands = [5, 10, 20, 50, 100, 200, 500].filter((d) => d > total);
  const r = Math.random();
  const paid = cands[Math.min(r < 0.6 ? 0 : r < 0.9 ? 1 : 2, cands.length - 1)];
  state.change = { total, paid, need: paid - total, given: [], mistakes: 0 };
  state.tray = [];
  say(`<span>Pa-sukli po!</span><span class="want">${art("m" + paid)}Bayad ₱${paid}</span><span class="payTag">Total ₱${total}</span>`);
  $("counter").hidden = true;
  $("change").hidden = false;
  renderTray();
  renderChange();
  updatePatience();
}
function renderChange() {
  const c = state.change;
  if (!c) return;
  const sum = c.given.reduce((a, b) => a + b, 0);
  $("chInfo").textContent = `Total ₱${c.total} · Bayad ₱${c.paid}`;
  $("chSum").textContent = "Sukli mo: ₱" + sum;
  $("chList").innerHTML = c.given.map((d, i) => `<button data-i="${i}" aria-label="Alisin ang ₱${d}">${art("m" + d)}</button>`).join("");
}
function addChange(d) {
  if (!state || !state.change || state.change.given.length >= 14) return;
  state.change.given.push(d);
  renderChange();
}
function confirmChange() {
  const c = state && state.change;
  if (!c) return;
  const sum = c.given.reduce((a, b) => a + b, 0);
  if (sum === c.need) {
    profile.stats.changeOk++;
    return finishSale();
  }
  c.mistakes++;
  profile.stats.changeBad++;
  state.patience = Math.max(500, state.patience - state.patienceMax * 0.2);
  setMsg(sum < c.need ? "Kulang po yung sukli ko!" : "Sobra po yung sukli, ibabalik ko po.", true);
  c.given = [];
  renderChange();
  $("bubble").classList.add("shake");
  setTimeout(() => $("bubble").classList.remove("shake"), 300);
  window.navigator?.vibrate?.(80);
}
function resetChangeUI() {
  $("change").hidden = true;
  $("counter").hidden = false;
}
function buildBills() {
  DENOMS.forEach((d) => {
    const b = document.createElement("button");
    b.type = "button";
    b.innerHTML = art("m" + d);
    b.setAttribute("aria-label", "₱" + d);
    b.addEventListener("click", () => addChange(d));
    $("bills").appendChild(b);
  });
}

// ===== Simula =====
buildSachets();
buildSetup();
$("qr").innerHTML = art("qr");
$("saveBtn").addEventListener("click", submitSetup);
$("nextBtn").addEventListener("click", nextStory);
$("openBtn").addEventListener("click", openStore);
$("closeBtn").addEventListener("click", closeStoreEarly);
$("marketBtn").addEventListener("click", () => profile && !open && openShop());
$("profileBtn").addEventListener("click", () => profile && !open && openMenu());
$("againBtn").addEventListener("click", openStore);
$("shopBtn2").addEventListener("click", openShop);
$("backStoreBtn").addEventListener("click", backToStore);
$("closeProfileBtn").addEventListener("click", backToStore);
$("shopBack").addEventListener("click", backToStore);
$("editBtn").addEventListener("click", openSetup);
$("storyBtn").addEventListener("click", openStory);
$("resetBtn").addEventListener("click", resetProfile);
$("giveBtn").addEventListener("click", giveOrder);
$("clearBtn").addEventListener("click", () => { if (state && open && !state.pay && !state.change) { state.tray = []; renderTray(); } });
document.querySelectorAll("#p-shop .tabs button").forEach((b) =>
  b.addEventListener("click", () => { tab = b.dataset.tab; renderShop(); }));
$("shopList").addEventListener("click", (e) => {
  const b = e.target.closest("button[data-act]");
  if (b && !b.disabled) shopAction(b.dataset.act, b.dataset.id, Number(b.dataset.qty) || 0);
});

buildBills();
$("chGive").addEventListener("click", confirmChange);
$("chReset").addEventListener("click", () => { if (state && state.change) { state.change.given = []; renderChange(); } });
$("chList").addEventListener("click", (e) => {
  const b = e.target.closest("button[data-i]");
  if (b && state && state.change) { state.change.given.splice(Number(b.dataset.i), 1); renderChange(); }
});

setOpenUI(false);
renderDecor();
renderShelf();
if (profile) {
  $("signName").textContent = profile.store;
  updateHud();
  setMsg("Sarado pa ang store. Pindutin ang Open Store para magsimula!");
} else {
  openSetup();
}
