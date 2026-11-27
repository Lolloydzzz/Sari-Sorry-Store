// ===== Paninda (products) =====
// base = libre na sa simula | cost = bibilhin sa Palengke | hang = nakasabit sa tindahan
const PRODUCTS = [
  { id: "candy",    name: "Candy",     price: 2,  color: "#d6457a", base: true },
  { id: "pandesal", name: "Pandesal",  price: 3,  color: "#b9782e", base: true, spoil: 0.4 },
  { id: "salt",     name: "Asin",      price: 5,  color: "#5a7a8c", base: true },
  { id: "biscuit",  name: "Biskwit",   price: 8,  color: "#3b78c4", base: true },
  { id: "egg",      name: "Itlog",     price: 10, color: "#c29a52", base: true, spoil: 0.15 },
  { id: "soda",     name: "Soft drink",price: 12, color: "#c9302c", base: true },
  { id: "noodles",  name: "Pancit canton", price: 15, color: "#e08a1e", base: true },
  { id: "soap",     name: "Sabon",     price: 20, color: "#2f9a7a", base: true },
  { id: "milk",     name: "Gatas",     price: 9,  color: "#4a7fd1", base: true, hang: true },
  { id: "choco",    name: "Choco drink", price: 8, color: "#7b4a26", base: true, hang: true },
  { id: "bar",      name: "Chocolate", price: 12, color: "#8a3b2c", base: true, hang: true },
  { id: "milkbig",  name: "Gatas (big)", price: 22, color: "#2f6fb0", cost: 120, hang: true },
  { id: "icecandy", name: "Ice candy", price: 5,  color: "#9b5de5", cost: 40, spoil: 0.3 },
  { id: "coffee",   name: "Kape",      price: 6,  color: "#6b3f1e", cost: 50 },
  { id: "shampoo",  name: "Shampoo",   price: 7,  color: "#e0558a", cost: 60 },
  { id: "water",    name: "Tubig",     price: 15, color: "#3a9bc7", cost: 80 },
  { id: "chips",    name: "Chichirya", price: 14, color: "#d1a21a", cost: 120 },
  { id: "rice",     name: "Bigas",     price: 18, color: "#a8946a", cost: 150 },
  { id: "load",     name: "Load",      price: 30, color: "#2a9d8f", cost: 200, special: "load" },
  { id: "sardines", name: "Sardinas",  price: 25, color: "#b02a2a", cost: 250 },
];

const UPGRADES = [
  { id: "shelf", name: "Malaking Estante",  desc: "+10 sa limit ng stock ng bawat paninda", costs: [80, 150, 250] },
  { id: "time",  name: "Mas Mahabang Araw", desc: "+30 seconds ang haba ng araw (mas maraming customer)", costs: [60, 120, 200] },
  { id: "fan",   name: "Electric Fan",      desc: "Mas matiyaga ang customer (+15%)",       costs: [50, 100, 180] },
  { id: "wifi",  name: "Mas Malakas na Signal", desc: "Mas mabilis at hindi madalas pumalya ang e-wallet", costs: [60, 120] },
  { id: "tip",   name: "Tip Jar",           desc: "Mas malaki ang tip (+50%)",              costs: [60, 120, 200] },
  { id: "heart", name: "Dagdag Buhay",      desc: "+1 buhay sa bawat shift",                costs: [100, 200] },
  { id: "freezer", name: "Freezer",          desc: "Mas konti ang nasisirang pandesal, itlog at natutunaw na ice candy", costs: [150, 300] },
  { id: "helper",  name: "Kapatid na Katulong", desc: "Siya ang magse-serve ng simpleng order (20% ang sahod niya)", costs: [200, 400] },
  { id: "lamp",    name: "Rechargeable na Lampara", desc: "Hindi ka masyadong maaapektuhan ng brownout", costs: [120] },
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
const LOAD_AMOUNTS = [10, 15, 20, 30, 50, 100];   // puwedeng ipa-load ng suki
const LOAD_FEE = (a) => (a >= 50 ? 5 : 3);        // dagdag na bayad bukod sa halaga ng load
const LOAD_CHANCE = 0.2;                           // gaano kadalas magpa-load ang customer
const LOAD_CAP = 300;                              // limit ng load wallet (pesos)
const LOAD_RATE = 0.92;                            // ₱92 ang bili mo sa bawat ₱100 na load
const START_STOCK = 15;       // stock ng bawat libreng paninda sa simula
const BASE_CAP = 20;          // limit ng stock bawat paninda
const EWALLET_CHANCE = 0.4;   // gaano karaming customer ang mag-e-e-wallet
const PATIENCE_SCALE = 1.8;   // mas malaki = mas matagal bago mainip ang customer
const GAP_MIN = 2500;         // pahinga bago dumating ang next na customer (ms)
const GAP_MAX = 4500;
const SACHET_COLORS = ["#e63946", "#f4a261", "#2a9d8f", "#e9c46a", "#457b9d", "#d65db1"];

const $ = (id) => document.getElementById(id);
const byId = (id) => PRODUCTS.find((i) => i.id === id);
const newStats = () => ({ games: 0, best: 0, total: 0, served: 0, changeOk: 0, changeBad: 0, ewallet: 0, hang: 0, loads: 0, paidBack: 0 });

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
  p.ach = p.ach || {};
  p.day = p.day || 1;                // anong araw na ng laro
  p.utang = p.utang || [];
  p.suki = p.suki || {};
  p.prices = p.prices || {};         // dagdag/bawas sa presyo ng bawat paninda
  PRODUCTS.forEach((x) => {
    if (p.stock[x.id] === undefined && (x.base || p.owned.includes(x.id))) p.stock[x.id] = x.special ? 100 : x.base ? START_STOCK : 5;
  });
  if (p.owned.includes("load") && !p.loadV2) { p.loadV2 = true; p.stock.load = 100; }   // load wallet na ang stock ng Load
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
const capOf = (p) => (p.special ? LOAD_CAP + 150 * lvl("shelf") : cap());
const stepOf = (p) => (p.special ? 100 : 5);
const costFor = (p, q) => (p.special ? Math.round(q * LOAD_RATE) : q * unitCost(p));
const unitCost = (p) => Math.max(1, Math.round(p.price * 0.6));   // puhunan bawat piraso
const available = () => PRODUCTS.filter((p) => p.base || profile.owned.includes(p.id));

// ===== v10: suki, utang, events, presyo, spoilage, katulong, tunog, save code =====
const NICKS = ["Totoy", "Beng", "Aling Rosa", "Mang Kardo", "Ate Lyn", "Kuya Mark", "Ineng", "Boy"];
const SUKI = [                 // may sariling mukha at paboritong item
  { name: "Aling Nena",   avatar: 6, fav: "egg" },
  { name: "Mang Tonyo",   avatar: 2, fav: "soda" },
  { name: "Kuya Jun",     avatar: 3, fav: "noodles" },
  { name: "Ate Joy",      avatar: 1, fav: "shampoo" },
  { name: "Bunso Miko",   avatar: 4, fav: "candy" },
  { name: "Mareng Bing",  avatar: 5, fav: "coffee" },
  { name: "Tropa Dodong", avatar: 7, fav: "chips" },
];
const SUKI_CHANCE = 0.3;
const HOT = ["coffee", "choco", "milk", "milkbig", "noodles"];
const FEAST = ["chips", "soda", "icecandy", "candy"];
const EVENTS = {
  ulan:     { name: "Maulan ngayon", short: "baka umulan", tip: "Konti ang customer, pero mas gusto nila ang mainit: kape, choco, gatas, pancit." },
  sahod:    { name: "Sahod day!", short: "Sahod day!", tip: "Dagsa ang suki at mas malalaki ang order." },
  pista:    { name: "Fiesta sa barangay!", short: "Fiesta!", tip: "Bentang-benta ang chichirya, soft drink, ice candy at candy. Mas malaki ang tip kung may banderitas." },
  brownout: { name: "May brownout mamayang gabi", short: "baka mawalan ng kuryente", tip: "6 PM hanggang 8 PM: walang kuryente. Cash lang, at mas mainipin ang customer (maliban kung may lampara)." },
};
function eventForDay(day) {      // pareho palagi sa isang araw, kaya may forecast para bukas
  const date = ((day - 1) % 30) + 1;
  if (date === 15 || date === 30) return "sahod";
  if (date === 10 || date === 25) return "pista";
  const r = ((day * 9301 + 49297) % 233280) / 233280;
  return r < 0.2 ? "ulan" : r < 0.32 ? "brownout" : null;
}
const sukiLevel = (name) => Math.min(3, Math.floor(((profile.suki[name] || {}).visits || 0) / 3));
const sukiTag = () => (state.suki ? `<span class="sukiTag">★ ${state.suki.name} · Lv${sukiLevel(state.suki.name)}</span>` : "");
const priceOf = (id) => Math.max(1, byId(id).price + (profile.prices[id] || 0));
const costOf = (id) => (id === "load" && state.load ? Math.round(state.load.amount * LOAD_RATE) : unitCost(byId(id)));
const utangTotal = () => profile.utang.reduce((sum, u) => sum + u.amount, 0);
const blackout = () => !!state && open && state.event === "brownout" && hourNow() >= 18 && hourNow() < 20;
const eventGap = () => (state.event === "ulan" ? 1.35 : state.event === "sahod" ? 0.65 : state.event === "pista" ? 0.8 : 1);
function priceFactor() {         // mahal = mas mainipin, mura = mas matiyaga
  let up = 0, down = 0;
  state.order.forEach((id) => { const a = profile.prices[id] || 0; if (a > 0) up += a; else down -= a; });
  return Math.min(1.2, Math.max(0.6, 1 - 0.05 * up + 0.03 * down));
}
function pickItem(opts) {
  const w = (p) => ((state.event === "ulan" && HOT.includes(p.id)) || (state.event === "pista" && FEAST.includes(p.id)) ? 2.5 : 1);
  let r = Math.random() * opts.reduce((sum, p) => sum + w(p), 0);
  for (const p of opts) { r -= w(p); if (r <= 0) return p; }
  return opts[0];
}
function renderEventBar() {
  const bar = $("eventBar");
  if (!profile) { bar.hidden = true; return; }
  let html = "";
  if (open && state) {
    if (state.event) html = `<b>${EVENTS[state.event].name}</b> · ${EVENTS[state.event].tip}`;
  } else {
    const t = eventForDay(profile.day), n = eventForDay(profile.day + 1);
    html = `Araw ${profile.day}` + (t ? ` · <b>${EVENTS[t].name}</b>` : "") + (n ? ` · Bukas: ${EVENTS[n].short}` : "");
  }
  if (bar._h !== html) { bar._h = html; bar.innerHTML = html; }
  bar.hidden = !html;
  const st = $("store").classList;
  st.toggle("rainy", !!(open && state && state.event === "ulan"));
  st.toggle("blackout", blackout());
  st.toggle("lamp", !!lvl("lamp"));
}

// ----- Tunog -----
let audioCtx = null, muted = false, radioTimer = null, radioStep = 0;
try { muted = localStorage.getItem("sariSariMute") === "1"; } catch (e) {}
function audio() {
  if (!audioCtx) { try { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { return null; } }
  if (audioCtx.state === "suspended") audioCtx.resume();
  return audioCtx;
}
function tone(f, at, dur, type = "sine", vol = 0.12) {
  const o = audioCtx.createOscillator(), g = audioCtx.createGain();
  o.type = type; o.frequency.value = f;
  g.gain.setValueAtTime(vol, at); g.gain.exponentialRampToValueAtTime(0.0001, at + dur);
  o.connect(g); g.connect(audioCtx.destination); o.start(at); o.stop(at + dur + 0.02);
}
const SFX = {
  coin:   [[988, 0, 0.09], [1319, 0.09, 0.28]],
  bell:   [[880, 0, 0.18], [1318, 0.1, 0.35]],
  buzz:   [[150, 0, 0.22, "sawtooth"]],
  jingle: [[660, 0, 0.12], [880, 0.12, 0.12], [1175, 0.24, 0.3]],
};
function sfx(name) {
  if (muted || !SFX[name] || !audio()) return;
  const t = audioCtx.currentTime;
  SFX[name].forEach(([f, d0, d, type]) => tone(f, t + d0, d, type || "sine"));
}
const TUNE = [392, 440, 523, 440, 392, 330, 392, 0, 440, 523, 587, 523, 440, 392, 330, 0];
function startRadio() {          // may tugtog lang kung may Radyo sa decor
  stopRadio();
  if (muted || !profile || profile.decor.radio !== "on") return;
  radioTimer = setInterval(() => {
    if (muted || !audio()) return;
    const f = TUNE[radioStep++ % TUNE.length];
    if (f) tone(f, audioCtx.currentTime, 0.4, "triangle", 0.05);
  }, 450);
}
function stopRadio() { clearInterval(radioTimer); radioTimer = null; }
function updateSoundBtn() {
  $("soundBtn").innerHTML = art(muted ? "snd_off" : "snd_on");
  $("soundBtn").setAttribute("aria-label", muted ? "I-on ang tunog" : "I-off ang tunog");
}
function toggleMute() {
  muted = !muted;
  try { localStorage.setItem("sariSariMute", muted ? "1" : "0"); } catch (e) {}
  if (muted) stopRadio(); else { if (open) startRadio(); sfx("coin"); }
  updateSoundBtn();
}

// ----- Utang, tawad, kulang -----
function addUtang(amount) {
  const lv = state.suki ? sukiLevel(state.suki.name) : 0;
  profile.nextUtang = (profile.nextUtang || 0) + 1;
  profile.utang.push({ id: profile.nextUtang, name: state.nick, amount, day: profile.day,
    due: profile.day + 1 + Math.floor(Math.random() * 3), reliable: Math.random() < (lv > 0 ? 0.9 : 0.6), tried: 0 });
  if (profile.utang.length > 30) profile.utang.shift();
  state.credited += amount;
}
function proceedPayment() {
  if (state.ask && !state.asked) { state.asked = true; return askDecision(state.ask); }
  state.method === "ewallet" ? startPay() : startChange();
}
function askDecision(kind) {
  const base = baseTotal(), name = state.nick;
  let text, yes, no;
  if (kind === "utang") {
    text = `Si ${name} po ito. Paki-lista muna po, bayaran ko sa sahod!`; yes = "I-lista sa Utang"; no = "Hindi po";
  } else if (kind === "tawad") {
    state.askOff = Math.max(1, Math.min(5, Math.round(base * 0.1)));
    text = `Pwede po bang tawad? ₱${Math.max(1, base - state.askOff)} na lang po sana.`; yes = `Pumayag (−₱${state.askOff})`; no = "Hindi po";
  } else {
    state.askOff = Math.min(base - 1, 1 + Math.floor(Math.random() * 3));
    text = `Kulang po ng ₱${state.askOff} ang pera ko. Bukas ko na lang po dagdagan?`; yes = "Okay lang"; no = "Bayaran mo ng buo";
  }
  state.pay = { phase: "decide", kind };
  say(`<span class="sayline">${art(kind === "utang" ? "book" : "pay_cash")}<span>${text}</span></span>`);
  $("giveBtn").textContent = yes; $("giveBtn").disabled = false;
  $("clearBtn").textContent = no; $("clearBtn").disabled = false;
}
function decisionYes() {
  const k = state.pay.kind;
  state.pay = null; resetPayUI();
  if (k === "utang") { state.credit = true; return finishSale(); }
  state.discount = state.askOff;
  if (k === "kulang") state.owe = state.askOff;       // ang kulang ay mapupunta sa utang
  proceedPayment();
}
function decisionNo() {
  const k = state.pay.kind;
  state.pay = null; resetPayUI();
  if (k === "kulang") { state.patience = Math.max(500, state.patience - state.patienceMax * 0.1); return proceedPayment(); }
  if (k === "tawad" && Math.random() < 0.6) { setMsg("Sige po, full price na nga. Salamat!"); return proceedPayment(); }
  setMsg(k === "utang" ? "Sige po, babalik na lang ako." : "Ay ayaw po? Sa iba na lang ako.", true);
  sfx("buzz");
  customerGone();
}
function nextPayback(u) {        // customer na magbabayad ng utang
  Object.assign(state, { order: [], tray: [], hasCustomer: true, change: null, load: null, ask: null, asked: false,
    discount: 0, owe: 0, credit: false, helper: false, method: "cash", mood: 0, payback: u, nick: u.name });
  state.suki = SUKI.find((x) => x.name === u.name) || null;
  state.cust = state.suki ? state.suki.avatar : u.id % PEOPLE.length;
  state.patienceMax = 20000; state.patience = 20000;
  const c = $("customer"); c.innerHTML = personSvg(state.cust, 0); c.className = "customer arrive";
  resetPayUI(); resetChangeUI(); renderTray(); updatePatience();
  state.pay = { phase: "payback" };
  say(`<span class="sayline">${art("book")}<span>Si ${u.name} po ito. Magbabayad na ako ng utang ko: ₱${u.amount}!</span></span>`);
  $("giveBtn").textContent = "Tanggapin ang Bayad"; $("clearBtn").disabled = true;
  sfx("bell");
}
function finishPayback() {
  const u = state.payback;
  profile.utang = profile.utang.filter((x) => x.id !== u.id);
  profile.stats.paidBack++;
  state.money += u.amount; state.collected += u.amount;
  setMsg(`Bayad na ang utang ni ${u.name}! +₱${u.amount}`);
  sfx("coin");
  customerGone();
  saveProfile(); updateHud(); checkAchievements();
}
function openUtang() { renderUtang(); show("utang"); }
function renderUtang(msg) {
  $("utTotal").textContent = `Kabuuang utang: ₱${utangTotal()}`;
  $("utMsg").textContent = msg || "";
  $("utList").innerHTML = profile.utang.length
    ? profile.utang.map((u) => `<div class="ut"><div class="uInfo"><b>${u.name}</b><span>₱${u.amount} · mula Araw ${u.day}</span></div>` +
        `<div class="btns"><button data-act="singil" data-id="${u.id}" ${u.tried === profile.day ? "disabled" : ""}>Singilin</button>` +
        `<button class="ghost" data-act="burahin" data-id="${u.id}">Burahin</button></div></div>`).join("")
    : "<p>Walang utang ngayon. Ayos!</p>";
}
function utangAction(act, id) {
  const u = profile.utang.find((x) => x.id === Number(id));
  if (!u) return;
  if (act === "burahin") { profile.utang = profile.utang.filter((x) => x !== u); saveProfile(); return renderUtang(`Binura ang utang ni ${u.name}.`); }
  if (u.tried === profile.day) return;
  u.tried = profile.day;                                  // isang singil lang bawat araw
  if (Math.random() < (u.reliable ? 0.8 : 0.2)) {
    profile.wallet += u.amount; profile.stats.paidBack++;
    profile.utang = profile.utang.filter((x) => x !== u);
    saveProfile(); checkAchievements();
    return renderUtang(`Nagbayad si ${u.name}! +₱${u.amount}`);
  }
  saveProfile();
  renderUtang(`${u.name}: "Bukas na lang po, wala pa kasi eh."`);
}

// ----- Katulong -----
function helperTick(dt) {
  const h = lvl("helper");
  const ok = h && state.hasCustomer && !state.pay && !state.change && !state.load && !state.ask && !state.payback &&
    state.method === "cash" && !state.tray.length && state.order.length <= (h > 1 ? 2 : 1);
  if (!ok) { state.helperT = 0; return; }
  state.helperT += dt;
  if (state.helperT >= (h > 1 ? 3000 : 4500)) { state.helperT = 0; state.helper = true; finishSale(); }
}

// ----- Spoilage at report ng araw -----
function doSpoilage() {
  const f = Math.max(0.2, 1 - 0.4 * lvl("freezer")), out = [];
  available().forEach((p) => {
    if (!p.spoil) return;
    const n = stockOf(p.id), lost = Math.min(n, Math.round(n * p.spoil * f));
    if (lost > 0) { profile.stock[p.id] = n - lost; out.push({ name: p.name, n: lost, cost: lost * unitCost(p) }); }
  });
  return out;
}
function reportHtml(isBest) {
  const st = state, s = profile.stats;
  const best = Object.entries(st.sold).sort((a, b) => b[1] - a[1])[0];
  const lostN = Object.values(st.lost).reduce((a, b) => a + b, 0);
  const spoilN = st.spoil.reduce((a, x) => a + x.n, 0), spoilCost = st.spoil.reduce((a, x) => a + x.cost, 0);
  const rows = [
    ["Benta (kasama ang tip)", `₱${st.money}`],
    ["Puhunan ng nabenta", `−₱${st.cogs}`],
    ["Tubo", `<b>₱${st.money - st.cogs}</b>`],
    ["Napagbilhan", `${st.served} customer`],
    ["Pinakamabenta", best ? `${byId(best[0]).name} (${best[1]})` : "wala pa"],
  ];
  if (lostN) rows.push(["Nawalang benta (ubos ang stock)", `${lostN} customer · mga ₱${st.lostMoney}`]);
  if (st.credited) rows.push(["Nailista sa utang", `₱${st.credited}`]);
  if (st.collected) rows.push(["Nasingil na utang", `+₱${st.collected}`]);
  if (spoilN) rows.push(["Nasira o natunaw", `${st.spoil.map((x) => `${x.n} ${x.name}`).join(", ")} (−₱${spoilCost})`]);
  if (st.event) rows.push(["Event ngayon", EVENTS[st.event].name]);
  return `<div class="report">${rows.map(([a, b]) => `<div><span>${a}</span><span>${b}</span></div>`).join("")}</div>` +
    `<p>Idinagdag sa pera mo ang ₱${st.money}.${isBest ? " <b>Bagong record!</b>" : ` Pinakamataas: ₱${s.best}.`}</p>`;
}

// ----- Save Code (ilipat ang progress sa ibang device) -----
const SAVE_PREFIX = "SSS1:";
function makeSaveCode() {
  let bin = "";
  new TextEncoder().encode(JSON.stringify(profile)).forEach((b) => (bin += String.fromCharCode(b)));
  return SAVE_PREFIX + btoa(bin);
}
function readSaveCode(txt) {
  txt = txt.trim();
  if (!txt.startsWith(SAVE_PREFIX)) throw new Error("format");
  const bin = atob(txt.slice(SAVE_PREFIX.length));
  const o = JSON.parse(new TextDecoder().decode(Uint8Array.from(bin, (c) => c.charCodeAt(0))));
  if (!o || typeof o !== "object" || !o.name || !o.store) throw new Error("data");
  return o;
}
function openCode() { $("codeText").value = makeSaveCode(); $("codeMsg").textContent = ""; show("code"); }
function copyCode() {
  const t = $("codeText");
  t.value = makeSaveCode();
  if (t.select) t.select();
  const done = () => { $("codeMsg").textContent = "Na-copy na! I-paste mo ito sa ibang device."; };
  if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(t.value).then(done, done);
  else { if (document.execCommand) document.execCommand("copy"); done(); }
}
function loadCode() {
  let o;
  try { o = readSaveCode($("codeText").value); } catch (e) { $("codeMsg").textContent = "Hindi valid ang code. I-paste ulit ang buong code."; return; }
  if (!confirm("Papalitan nito ang kasalukuyang profile mo. Sigurado ka ba?")) return;
  profile = normalize(o);
  saveProfile();
  $("signName").textContent = profile.store;
  renderDecor(); renderShelf(); updateHud();
  openMenu();
}

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
  $("mDay").textContent = `Araw ${profile.day} · Utang na hindi pa bayad: ₱${utangTotal()}`;
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
      const n = stockOf(p.id), c = capOf(p), space = c - n, step = stepOf(p);
      const q5 = Math.min(step, space);
      const sign = p.special ? "+₱" : "+";
      const b5 = `<button data-act="stock" data-id="${p.id}" data-qty="${step}" ${q5 <= 0 || profile.wallet < costFor(p, q5) ? "disabled" : ""}>${sign}${q5 || step} · ₱${costFor(p, q5)}</button>`;
      const bf = `<button class="ghost" data-act="stock" data-id="${p.id}" data-qty="${space}" ${space <= 0 || profile.wallet < costFor(p, space) ? "disabled" : ""}>${space <= 0 ? "Puno na" : `Puno · ₱${costFor(p, space)}`}</button>`;
      const desc = p.special ? `Load wallet: ₱${n}/₱${c} · ₱${Math.round(100 * LOAD_RATE)} ang bili sa bawat ₱100`
                             : `Stock: ${n}/${c} · Puhunan ₱${unitCost(p)} bawat isa`;
      html += row(p.id, p.name, desc, `<div class="btns">${b5}${bf}</div>`);
    });
  } else if (tab === "price") {
    available().filter((p) => !p.special).forEach((p) => {
      const adj = profile.prices[p.id] || 0, pr = priceOf(p.id), uc = unitCost(p);
      html += row(p.id, p.name, `Presyo ₱${pr} · puhunan ₱${uc} · tubo ₱${pr - uc}`,
        `<div class="btns"><button class="ghost" data-act="price" data-id="${p.id}" data-qty="-1" ${adj <= -2 ? "disabled" : ""}>−₱1</button>` +
        `<button class="ghost" data-act="price" data-id="${p.id}" data-qty="1" ${adj >= 5 ? "disabled" : ""}>+₱1</button></div>`);
    });
  } else if (tab === "up") {
    UPGRADES.forEach((u) => {
      const lv = lvl(u.id), max = u.costs.length;
      html += row("up_" + u.id, `${u.name} (${lv}/${max})`, u.desc,
        lv >= max ? `<button disabled>Max na</button>` : buy("up", u.id, u.costs[lv]));
    });
  } else if (tab === "prod") {
    PRODUCTS.filter((p) => !p.base).forEach((p) => {
      html += row(p.id, p.name, p.special ? "Pa-load ng suki: i-type ang number at halaga. May kita sa bawat load." : `Benta ₱${p.price} bawat isa${p.hang ? " · nakasabit" : ""}`,
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
    profile.wallet -= p.cost; profile.owned.push(id); profile.stock[id] = p.special ? 100 : 5;   // may libreng panimulang stock
    if (p.special) profile.loadV2 = true;
  } else if (act === "stock") {
    const p = byId(id), q = Math.min(qty, capOf(p) - stockOf(id)), cost = costFor(p, q);
    if (q <= 0 || profile.wallet < cost) return;
    profile.wallet -= cost; profile.stock[id] = stockOf(id) + q;
  } else if (act === "dec") {
    const d = DECOR.find((x) => x.id === id);
    if (id in profile.decor || profile.wallet < d.cost) return;
    profile.wallet -= d.cost; setDecor(id, "on");
  } else if (act === "price") {
    profile.prices[id] = Math.max(-2, Math.min(5, (profile.prices[id] || 0) + qty));   // mahal = mainipin, mura = matiyaga
  } else if (act === "tog") {
    setDecor(id, profile.decor[id] === "on" ? "off" : "on");
  }
  saveProfile();
  renderShop();
  renderDecor();
  renderShelf();
  checkAchievements();
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
    const empty = it.special ? n < LOAD_AMOUNTS[0] : n <= 0;
    b.className = "item" + (it.hang ? " hang" : "") + (empty ? " out" : "");
    b.style.setProperty("--c", it.color);
    b.innerHTML = `<span class="stk">${empty ? "Ubos" : (it.special ? "₱" : "x") + n}</span><span class="e">${art(it.id)}</span><span class="n">${it.name}</span><span class="p">${it.special ? "Pa-load" : "₱" + priceOf(it.id)}</span>`;
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
    event: eventForDay(profile.day), sold: {}, cogs: 0, lost: {}, lostMoney: 0, collected: 0, credited: 0,
    helperT: 0, ask: null, asked: false, discount: 0, owe: 0, credit: false, helper: false, payback: null, suki: null, nick: "",
  };
  $("signName").textContent = profile.store;
  $("overlay").classList.add("hidden");
  setOpenUI(true);
  renderShelf();
  renderDecor();
  resetPayUI();
  resetChangeUI();
  waiting();
  setMsg(state.event ? `Open na ang store! ${EVENTS[state.event].name}` : "Open na ang store! Antay lang sa unang suki.");
  updateHud();
  renderTray();
  clearInterval(loop);
  loop = setInterval(tick, 100);
  startRadio();
  sfx("bell");
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
      state.patience -= dt * (state.change ? 0 : 1) * (blackout() && !lvl("lamp") ? 1.25 : 1);   // walang timer habang nagsusukli
      updatePatience();
      if (state.patience <= 0) customerLeaves();
    }
  } else if (state.gap > 0) {
    state.gap -= dt;
    if (state.gap <= 0) nextCustomer();
  }
  if (open) helperTick(dt);
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
  const pool = available().filter((p) => !p.special && stockOf(p.id) > 0);
  const loadOk = profile.owned.includes("load") && stockOf("load") >= LOAD_AMOUNTS[0];
  if (!pool.length && !loadOk) return endGame("Ubos na ang paninda mo! Mag-restock sa Palengke.");
  const outs = available().filter((p) => !p.special && stockOf(p.id) <= 0);
  if (outs.length && Math.random() < 0.2) {                     // may hinahanap na ubos na
    const p = outs[Math.floor(Math.random() * outs.length)];
    state.lost[p.id] = (state.lost[p.id] || 0) + 1;
    state.lostMoney += priceOf(p.id);
    state.gap = 1800;
    sfx("buzz");
    return setMsg(`May umalis na customer: ubos na ang ${p.name}!`, true);
  }
  const dueList = profile.utang.filter((u) => u.reliable && u.due <= profile.day);
  if (dueList.length && Math.random() < 0.3) return nextPayback(dueList[0]);
  if (loadOk && (!pool.length || Math.random() < LOAD_CHANCE)) return nextLoadCustomer();

  const left = {};
  pool.forEach((p) => (left[p.id] = stockOf(p.id)));
  const prog = progress();
  const level = prog < 0.34 ? 0 : prog < 0.67 ? 1 : 2;      // dumadami ang order habang tumatagal ang araw
  const want = 1 + Math.floor(Math.random() * (2 + level)) + (state.event === "sahod" ? 1 : 0);
  state.order = [];
  for (let k = 0; k < want; k++) {
    const opts = pool.filter((p) => left[p.id] > 0);
    if (!opts.length) break;
    const p = pickItem(opts);
    state.order.push(p.id);
    left[p.id]--;
  }

  state.tray = [];
  state.patienceMax = (9000 + state.order.length * 3500 - level * 1000) * state.patMult * PATIENCE_SCALE;
  state.patience = state.patienceMax;
  state.hasCustomer = true;
  state.pay = null;
  state.change = null;
  state.load = null;
  state.method = blackout() || Math.random() >= EWALLET_CHANCE ? "cash" : "ewallet";   // walang e-wallet pag brownout
  state.cust = Math.floor(Math.random() * PEOPLE.length);
  state.mood = 0;
  state.helper = false; state.discount = 0; state.owe = 0; state.credit = false; state.payback = null;
  state.ask = null; state.asked = false; state.suki = null;
  state.nick = NICKS[Math.floor(Math.random() * NICKS.length)];
  if (Math.random() < SUKI_CHANCE) {                           // suki ng tindahan
    const sk = SUKI[Math.floor(Math.random() * SUKI.length)], fav = byId(sk.fav);
    state.suki = sk; state.nick = sk.name; state.cust = sk.avatar;
    if (available().includes(fav) && !state.order.includes(sk.fav) && stockOf(sk.fav) >= 1) state.order[0] = sk.fav;
  }
  state.patienceMax *= priceFactor();
  state.patience = state.patienceMax;
  if (state.method === "cash" && baseTotal() >= 4) {             // utang, tawad o kulang
    const r = Math.random();
    state.ask = r < 0.08 && utangTotal() < 300 ? "utang" : r < 0.18 ? "tawad" : r < 0.25 ? "kulang" : null;
  }

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
  say(`${sukiTag()}<span>Pabili po ng</span>${items}${tag}`);
  sfx("bell");
  resetPayUI();
  resetChangeUI();
  renderTray();
  updatePatience();
}

function customerGone() {
  state.hasCustomer = false;
  state.pay = null;
  state.change = null;
  state.payback = null;
  state.tray = [];            // linisin ang tray pag-alis ng customer (dati naiiwan ang item sa e-wallet)
  renderTray();
  resetPayUI();
  resetChangeUI();
  const rush = isRush(hourNow());                              // mas mabilis dumating ang suki pag rush hour
  state.gap = (GAP_MIN + Math.random() * (GAP_MAX - GAP_MIN)) * (rush ? 0.6 : 1) * eventGap();
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
  if (byId(id).special) {                              // Load: hindi ilalagay sa tray
    if (open && state.hasCustomer && state.load && !state.pay) $("ldNum").focus();
    else setMsg("Pang-load ito. Hintayin ang customer na magpapa-load.", true);
    return;
  }
  if (open && state.load) return setMsg("Pa-load po ito, i-type ang number at halaga.", true);
  if (!open || !state.hasCustomer || state.pay || state.change || state.tray.length >= 6) return;
  const inTray = state.tray.filter((x) => x === id).length;
  if (inTray + 1 > stockOf(id)) return setMsg("Ubos na ang stock niyan!", true);
  state.tray.push(id);
  renderTray();
}

// ===== Pa-load: i-type ang number (5 digits) at halaga =====
function nextLoadCustomer() {
  const amounts = LOAD_AMOUNTS.filter((a) => a <= stockOf("load"));
  const amount = amounts[Math.floor(Math.random() * amounts.length)];
  const number = String(10000 + Math.floor(Math.random() * 90000));
  state.order = ["load"];
  state.load = { number, amount, fee: LOAD_FEE(amount) };
  state.ask = null; state.asked = false; state.payback = null; state.credit = false; state.discount = 0; state.owe = 0;
  state.suki = null; state.helper = false; state.nick = "Customer";
  state.tray = [];
  state.patienceMax = 15000 * state.patMult * PATIENCE_SCALE;
  state.patience = state.patienceMax;
  state.hasCustomer = true;
  state.pay = null;
  state.change = null;
  state.method = blackout() || Math.random() >= EWALLET_CHANCE ? "cash" : "ewallet";
  state.cust = Math.floor(Math.random() * PEOPLE.length);
  state.mood = 0;

  const c = $("customer");
  c.innerHTML = personSvg(state.cust, 0);
  c.className = "customer arrive";
  const tag = state.method === "ewallet"
    ? `<span class="payTag">${art("pay_phone")}E-wallet po</span>`
    : `<span class="payTag">${art("pay_cash")}Cash lang</span>`;
  say(`<span>Pa-load po!</span><span class="want">${art("load")}₱${amount}</span>` +
      `<span class="payTag">Number: <b class="ldNumTxt">${number}</b></span>${tag}`);
  resetPayUI();
  resetChangeUI();
  sfx("bell");
  $("counter").hidden = true;                        // form ang lalabas sa halip na tray
  $("loadForm").hidden = false;
  $("ldNum").value = "";
  $("ldAmt").value = "";
  if (!window.matchMedia?.("(pointer: coarse)").matches) $("ldNum").focus();   // sa phone, ikaw ang pipindot para di biglang lumabas ang keyboard
  renderTray();
  updatePatience();
}
function sendLoad() {
  const L = state && state.load;
  if (!open || !state.hasCustomer || !L || state.pay || state.change) return;
  const num = $("ldNum").value.trim(), amtTxt = $("ldAmt").value.trim();
  if (num.length !== 5) return setMsg("5 digits lang po ang number.", true);
  if (!amtTxt) return setMsg("Ilagay mo kung magkano ang ilo-load.", true);
  if (num !== L.number || Number(amtTxt) !== L.amount) {
    state.patience = Math.max(500, state.patience - state.patienceMax * 0.15);
    setMsg(num !== L.number ? "Ay mali po yung number!" : "Mali po yung halaga ng load!", true);
    $("bubble").classList.add("shake");
    setTimeout(() => $("bubble").classList.remove("shake"), 300);
    window.navigator?.vibrate?.(80);
    sfx("buzz");
    return;
  }
  resetChangeUI();                                   // balik ang counter at nakatago ang form
  setMsg(`Na-send na ang ₱${L.amount} na load!`);
  proceedPayment();
}

function giveOrder() {
  if (!open || !state.hasCustomer || state.change) return;
  if (state.pay) {                                    // e-wallet steps
    const ph = state.pay.phase;
    if (ph === "fail") startPay();
    else if (ph === "ok") finishSale();
    else if (ph === "decide") decisionYes();
    else if (ph === "payback") finishPayback();
    return;
  }
  const a = [...state.tray].sort().join(",");
  const b = [...state.order].sort().join(",");
  if (a === b) {
    proceedPayment();
  } else {
    state.patience = Math.max(500, state.patience - state.patienceMax * 0.15);
    state.tray = [];
    renderTray();
    setMsg("Ay mali po! Hindi po yan yung order ko.", true);
    sfx("buzz");
    $("bubble").classList.add("shake");
    setTimeout(() => $("bubble").classList.remove("shake"), 300);
  }
}

// ===== E-wallet payment =====
function startPay() {
  const ms = 2200 - 500 * lvl("wifi");
  state.pay = { phase: "processing", ms, ms0: ms };
  say(`<span class="sayline">${art("pay_phone")}<span>Sige po, i-scan ko na yung QR ninyo...</span></span><span class="payBar"><i id="payBar"></i></span>`);
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
    say(`<span class="sayline">${art("pay_phone")}<span>Ay, ayaw pumasok! Mahina ang signal. Ulitin natin.</span></span>`);
    $("giveBtn").textContent = "Ulitin ang Scan";
  } else {
    p.phase = "ok";
    say(`<span class="sayline">${art("pay_phone")}<span>Ayan po, nakapag-send na ako! Paki-check po.</span></span>`);
    $("giveBtn").textContent = "I-check E-wallet";
  }
}
function resetPayUI() {
  $("giveBtn").textContent = "Ibigay";
  $("giveBtn").disabled = false;
  $("clearBtn").textContent = "Linisin";
  $("clearBtn").disabled = false;
  $("qr").classList.remove("scan");
}

function finishSale() {
  const base = baseTotal();
  let total = orderTotal();
  const clean = !state.change || state.change.mistakes === 0;     // walang tip kapag nagkamali sa sukli
  const lv = state.suki ? sukiLevel(state.suki.name) : 0;         // mas malaki ang tip ng mas matagal nang suki
  const feast = state.event === "pista" && profile.decor.bunting === "on" ? 1.5 : 1;
  let tip = clean ? Math.ceil((state.patience / state.patienceMax) * 5 * state.tipMult * (1 + 0.3 * lv) * feast) : 0;
  if (state.helper) { tip = 0; total = Math.round(total * 0.8); } // 20% ang sahod ng katulong
  if (state.credit) { addUtang(base); total = 0; tip = 0; }       // nailista sa utang: walang pera ngayon
  else if (state.owe) addUtang(state.owe);                        // yung kulang
  state.order.forEach((id) => {
    profile.stock[id] = Math.max(0, stockOf(id) - (state.load && id === "load" ? state.load.amount : 1));
    state.cogs += costOf(id);
    state.sold[id] = (state.sold[id] || 0) + 1;
  });
  if (state.load) profile.stats.loads++;
  state.money += total + tip;
  state.served++;
  if (state.method === "ewallet") profile.stats.ewallet++;
  state.order.forEach((id) => { if (byId(id).hang) profile.stats.hang++; });
  if (isRush(hourNow())) state.rushServed = (state.rushServed || 0) + 1;
  let up = "";
  if (state.suki) {
    const rec = (profile.suki[state.suki.name] = profile.suki[state.suki.name] || { visits: 0 });
    rec.visits++;
    if (rec.visits % 3 === 0 && rec.visits <= 9) up = ` Level up na si ${state.suki.name}!`;
  }
  const how = state.credit ? `Nailista sa utang ni ${state.nick}.` : state.helper ? "Si Bunso ang nag-serve!"
    : state.method === "ewallet" ? "Natanggap na ang e-wallet!" : "Salamat po!";
  customerGone();
  setMsg(state.credit ? `${how} (₱${base})` : `${how} +₱${total} (tip ₱${tip})${up}`);
  if (!state.credit) sfx("coin");
  saveProfile();
  renderShelf();
  updateHud();
  checkAchievements();
}

function endGame(reason) {
  clearInterval(loop);
  state.hasCustomer = false;
  state.pay = null;
  state.change = null;
  resetPayUI();
  resetChangeUI();
  stopRadio();
  const s = profile.stats;
  const isBest = state.money > s.best;
  s.games++; s.total += state.money; s.served += state.served;
  if (isBest) s.best = state.money;
  profile.wallet += state.money;
  state.spoil = doSpoilage();                   // nasisira ang hindi nabentang pandesal, itlog at ice candy
  state.spoilN = state.spoil.reduce((a, x) => a + x.n, 0);
  state.profit = state.money - state.cogs;
  profile.day += 1;
  saveProfile();
  setOpenUI(false);
  state.fullDay = state.timeMs <= 0;
  waiting();
  renderShelf();
  updateHud();
  checkAchievements();
  $("oTitle").textContent = reason;
  $("oText").innerHTML = reportHtml(isBest);
  show("over");
}

// ===== Display helpers =====
function updateHud() {
  updateScene();
  renderEventBar();
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
    put("timeStat", "Sarado · Araw " + profile.day);
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
const baseTotal = () => (state.load ? state.load.amount + state.load.fee : state.order.reduce((sum, id) => sum + priceOf(id), 0));
const orderTotal = () => Math.max(1, baseTotal() - (state.discount || 0));   // may bawas pag pumayag sa tawad o kulang

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
  $("patienceBar").parentElement.style.visibility = "hidden";   // tago ang timer habang nagsusukli
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
    state.chStreak = (state.chStreak || 0) + 1;
    state.chBest = Math.max(state.chBest || 0, state.chStreak);
    return finishSale();
  }
  c.mistakes++;
  profile.stats.changeBad++;
  state.chStreak = 0;
  state.patience = Math.max(500, state.patience - state.patienceMax * 0.2);
  setMsg(sum < c.need ? "Kulang po yung sukli ko!" : "Sobra po yung sukli, ibabalik ko po.", true);
  sfx("buzz");
  c.given = [];
  renderChange();
  $("bubble").classList.add("shake");
  setTimeout(() => $("bubble").classList.remove("shake"), 300);
  window.navigator?.vibrate?.(80);
}
function resetChangeUI() {
  $("loadForm").hidden = true;
  $("patienceBar").parentElement.style.visibility = "";
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

// ===== Langit sa labas: umaga, tanghali, hapon, gabi (base sa oras ng laro) =====
// [oras, taas ng langit, baba ng langit, bahay/puno, malayong bahay, kalsada, ilaw, bituin, ulap]
const SKY = [
  [8,    "#79c3f0", "#fde7b4", "#33473a", "#5d7a66", "#8d8576", 0,   0,   "#ffffff"],
  [11.5, "#3f9ae8", "#bfe5fb", "#2f4a35", "#4f7a5a", "#9a9588", 0,   0,   "#ffffff"],
  [15.5, "#5aa6e6", "#f8e0a8", "#2f4a35", "#4f7a5a", "#9a9588", 0,   0,   "#fff6e0"],
  [17.5, "#7b6fc0", "#f9a65a", "#2b2f3a", "#4a4560", "#7a6e66", 0.2, 0,   "#ffd7b0"],
  [18.7, "#2d3270", "#e7805f", "#1b1f33", "#2f3050", "#4e4850", 0.8, 0.2, "#b9a2c0"],
  [19.8, "#0f1a40", "#2b3b72", "#10142a", "#1d2140", "#3a3a46", 1,   0.9, "#6b7499"],
  [22,   "#070d28", "#1a2650", "#0b0e20", "#161a33", "#2e2e3a", 1,   1,   "#4a5278"],
];
let sceneKey = -1;
const hex = (c) => [1, 3, 5].map((i) => parseInt(c.slice(i, i + 2), 16));
const mixColor = (a, b, t) => "#" + hex(a).map((v, i) => Math.round(v + (hex(b)[i] - v) * t).toString(16).padStart(2, "0")).join("");

function skyAt(h) {
  let i = 0;
  while (i < SKY.length - 2 && h >= SKY[i + 1][0]) i++;
  const a = SKY[i], b = SKY[i + 1];
  const t = Math.min(1, Math.max(0, (h - a[0]) / (b[0] - a[0])));
  return a.map((v, k) => (k === 0 ? h : typeof v === "string" ? mixColor(v, b[k], t) : v + (b[k] - v) * t));
}
function updateScene() {
  const h = state ? hourNow() : OPEN_HOUR;
  const key = Math.floor(h * 12);                      // nagbabago kada 5 minuto sa laro
  if (key === sceneKey) return;
  sceneKey = key;
  const [, top, bottom, sil, sil2, ground, lights, stars, cloud] = skyAt(h);
  const arc = (t) => ({ x: 5 + 90 * t, y: 66 - 54 * Math.sin(Math.PI * t) });
  const fade = (t) => (t < 0 || t > 1 ? 0 : Math.min(1, t * 8, (1 - t) * 8));
  const st = (h - 6) / 12, mt = (h - 17.5) / 9;
  const sun = arc(st), moon = arc(Math.min(1, Math.max(0, mt)));
  const r = document.documentElement.style;
  const set = (k, v) => r.setProperty(k, v);
  set("--sky1", top); set("--sky2", bottom); set("--sil", sil); set("--sil2", sil2); set("--ground", ground);
  set("--lights", lights.toFixed(2)); set("--stars", stars.toFixed(2)); set("--cloud", cloud);
  set("--sx", sun.x.toFixed(1) + "%"); set("--sy", sun.y.toFixed(1) + "%"); set("--sunO", fade(st).toFixed(2));
  set("--mx", moon.x.toFixed(1) + "%"); set("--my", moon.y.toFixed(1) + "%"); set("--moonO", fade(mt).toFixed(2));
}

// ===== Achievements =====
// goal/prog = may progress bar | test = oo/hindi lang | tier = kulay ng medalya
const ACHIEVEMENTS = [
  { id: "first_sale",  name: "Unang Benta",        desc: "Makabenta ng unang customer",              icon: "candy",     tier: "bronze", reward: 10,  prog: (c) => [c.served, 1] },
  { id: "serve_10",    name: "Suki-suki",          desc: "Mapagbilhan ang 10 customers",             icon: "egg",       tier: "bronze", reward: 30,  prog: (c) => [c.served, 10] },
  { id: "serve_50",    name: "Kilala sa Kanto",    desc: "Mapagbilhan ang 50 customers",             icon: "soda",      tier: "silver", reward: 100, prog: (c) => [c.served, 50] },
  { id: "serve_200",   name: "Tindahan ng Barangay", desc: "Mapagbilhan ang 200 customers",          icon: "noodles",   tier: "gold",   reward: 300, prog: (c) => [c.served, 200] },
  { id: "change_10",   name: "Sukli Master",       desc: "10 tamang sukli",                          icon: "m50",       tier: "bronze", reward: 40,  prog: (c) => [c.changeOk, 10] },
  { id: "change_50",   name: "Mabilis sa Kuwenta", desc: "50 tamang sukli",                          icon: "m500",      tier: "silver", reward: 150, prog: (c) => [c.changeOk, 50] },
  { id: "streak_8",    name: "Walang Maling Sukli", desc: "8 tamang sukli nang sunod-sunod",         icon: "m100",      tier: "silver", reward: 80,  test: (c) => c.shift.chBest >= 8 },
  { id: "ewallet_10",  name: "Cashless Na!",       desc: "10 customer ang nag-e-wallet",             icon: "pay_phone", tier: "bronze", reward: 40,  prog: (c) => [c.ewallet, 10] },
  { id: "rush_8",      name: "Rush Hour Hero",     desc: "8 customer sa isang rush hour",            icon: "up_time",   tier: "silver", reward: 80,  test: (c) => c.shift.rushServed >= 8 },
  { id: "full_day",    name: "Hanggang 10 PM",     desc: "Tapusin ang buong araw hanggang closing",  icon: "moon",      tier: "silver", reward: 100, test: (c) => c.shift.fullDay },
  { id: "no_leave",    name: "Walang Umaalis",     desc: "Buong araw, walang nawalang buhay (20+ customer)", icon: "up_heart", tier: "gold", reward: 150, test: (c) => c.shift.fullDay && c.shift.lives === c.shift.maxLives && c.shift.served >= 20 },
  { id: "sales_500",   name: "Malakas ang Benta",  desc: "₱500 na benta sa isang araw",              icon: "up_tip",    tier: "silver", reward: 100, test: (c) => c.shift.money >= 500 },
  { id: "sales_1500",  name: "Jackpot na Araw",    desc: "₱1,500 na benta sa isang araw",            icon: "r_dream",   tier: "gold",   reward: 300, test: (c) => c.shift.money >= 1500 },
  { id: "load_10",    name: "Load Master",        desc: "Mag-load para sa 10 customers",            icon: "load",      tier: "silver", reward: 60,  prog: (c) => [c.loads, 10] },
  { id: "suki_lv3",   name: "Paboritong Tindahan", desc: "May suki na umabot sa Lv 3",                icon: "r_lola",    tier: "silver", reward: 120, prog: (c) => [c.sukiMax, 3] },
  { id: "utang_5",    name: "Maaasahang Suki",    desc: "5 utang ang nabayaran",                    icon: "book",      tier: "bronze", reward: 60,  prog: (c) => [c.paidBack, 5] },
  { id: "helper_1",   name: "May Katulong Na",    desc: "Kumuha ng kapatid na katulong",            icon: "up_helper", tier: "bronze", reward: 50,  prog: (c) => [c.helper, 1] },
  { id: "rain_day",   name: "Kahit Maulan",       desc: "Tapusin ang buong araw na maulan",         icon: "up_fan",    tier: "silver", reward: 80,  test: (c) => c.shift.fullDay && c.shift.event === "ulan" },
  { id: "profit_300", name: "Tubong Tunay",       desc: "₱300 na tubo sa isang araw",               icon: "up_tip",    tier: "silver", reward: 100, test: (c) => c.shift.profit >= 300 },
  { id: "no_spoil",   name: "Walang Sayang",      desc: "Walang nasira o natunaw sa isang buong araw (15+ customer)", icon: "up_freezer", tier: "bronze", reward: 60, test: (c) => c.shift.fullDay && c.shift.spoilN === 0 && c.shift.served >= 15 },
  { id: "hang_20",     name: "Gatas at Tsokolate", desc: "Makabenta ng 20 nakasabit na paninda",     icon: "milk",      tier: "bronze", reward: 50,  prog: (c) => [c.hang, 20] },
  { id: "decor_3",     name: "Pa-Ganda ng Tindahan", desc: "Bumili ng 3 decor",                      icon: "plant",     tier: "bronze", reward: 60,  prog: (c) => [c.decor, 3] },
  { id: "upgrade_5",   name: "Level Up!",          desc: "5 levels ng upgrade sa Palengke",          icon: "up_fan",    tier: "silver", reward: 80,  prog: (c) => [c.ups, 5] },
  { id: "games_5",     name: "Araw-araw Open",     desc: "Mag-open ng store ng 5 beses",             icon: "r_family",  tier: "bronze", reward: 60,  prog: (c) => [c.games, 5] },
];
const TIERS = { bronze: "#cd7f32", silver: "#b8c0c8", gold: "#f2c230" };
let toastQ = [], toastBusy = false;

function achCtx() {
  const s = profile.stats, live = open && state;
  const sh = state || {};
  return {
    served: s.served + (live ? state.served : 0), loads: s.loads, changeOk: s.changeOk, ewallet: s.ewallet, hang: s.hang, games: s.games, paidBack: s.paidBack, helper: lvl("helper"),
    sukiMax: Math.max(0, ...Object.keys(profile.suki).map(sukiLevel)),
    decor: Object.keys(profile.decor).length, ups: Object.values(profile.up).reduce((a, b) => a + b, 0),
    shift: { money: sh.money || 0, served: sh.served || 0, rushServed: sh.rushServed || 0, chBest: sh.chBest || 0,
             fullDay: !!sh.fullDay, lives: sh.lives, maxLives: sh.maxLives,
             event: sh.event, profit: sh.profit || 0, spoilN: sh.spoilN },
  };
}
const achDone = (a, c) => (a.prog ? a.prog(c)[0] >= a.prog(c)[1] : a.test(c));

function checkAchievements() {
  if (!profile) return;
  const c = achCtx();
  ACHIEVEMENTS.forEach((a) => {
    if (profile.ach[a.id] || !achDone(a, c)) return;
    profile.ach[a.id] = Date.now();
    profile.wallet += a.reward;
    toastQ.push(a);
  });
  if (toastQ.length) { saveProfile(); nextToast(); }
}
function nextToast() {
  if (toastBusy || !toastQ.length) return;
  toastBusy = true;
  const a = toastQ.shift(), t = $("toast");
  t.innerHTML = `<span class="tIcon">${badgeSvg(a.icon, TIERS[a.tier])}</span><span><small>Achievement unlocked!</small><b>${a.name}</b>+₱${a.reward}</span>`;
  t.hidden = false;
  t.classList.remove("show"); void t.offsetWidth; t.classList.add("show");
  window.navigator?.vibrate?.(40);
  sfx("jingle");
  setTimeout(() => { t.hidden = true; toastBusy = false; nextToast(); }, 3200);
}
function openAch() {
  const c = achCtx();
  const done = ACHIEVEMENTS.filter((a) => profile.ach[a.id]).length;
  $("achCount").textContent = `Nakuha mo na: ${done} / ${ACHIEVEMENTS.length}`;
  $("achList").innerHTML = ACHIEVEMENTS.map((a) => {
    const got = !!profile.ach[a.id];
    const p = a.prog ? a.prog(c) : null;
    const note = got ? `Nakuha na! +₱${a.reward}` : p ? `${Math.min(p[0], p[1])} / ${p[1]} · Reward ₱${a.reward}` : `Reward ₱${a.reward}`;
    return `<div class="ach ${got ? "done" : ""}"><div class="aIcon">${badgeSvg(a.icon, TIERS[a.tier])}</div>` +
      `<div class="aInfo"><b>${a.name}</b><span>${a.desc}</span><em>${note}</em></div></div>`;
  }).join("");
  show("ach");
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
$("soundBtn").addEventListener("click", toggleMute);
$("utangBtn").addEventListener("click", openUtang);
$("utBack").addEventListener("click", openMenu);
$("utList").addEventListener("click", (e) => {
  const b = e.target.closest("button[data-act]");
  if (b && !b.disabled) utangAction(b.dataset.act, b.dataset.id);
});
$("codeBtn").addEventListener("click", openCode);
$("codeCopy").addEventListener("click", copyCode);
$("codeLoad").addEventListener("click", loadCode);
$("codeBack").addEventListener("click", openMenu);
document.addEventListener("pointerdown", () => { if (!muted) audio(); }, { once: true });   // para gumana ang tunog sa phone
updateSoundBtn();
$("ldSend").addEventListener("click", sendLoad);
["ldNum", "ldAmt"].forEach((id) => {
  $(id).addEventListener("input", (e) => { e.target.value = e.target.value.replace(/\D/g, ""); });   // numbers lang
  $(id).addEventListener("keydown", (e) => { if (e.key === "Enter") sendLoad(); });
});
$("achBtn").addEventListener("click", openAch);
$("achBack").addEventListener("click", openMenu);
$("giveBtn").addEventListener("click", giveOrder);
$("clearBtn").addEventListener("click", () => {
  if (!state || !open) return;
  if (state.pay && state.pay.phase === "decide") return decisionNo();      // "Hindi po"
  if (!state.pay && !state.change) { state.tray = []; renderTray(); }
});
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
updateScene();
if (profile) {
  $("signName").textContent = profile.store;
  updateHud();
  setMsg("Sarado pa ang store. Pindutin ang Open Store para magsimula!");
} else {
  openSetup();
}
