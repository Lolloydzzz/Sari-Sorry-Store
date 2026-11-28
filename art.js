// ===== art.js: every picture in the game is drawn with SVG (no emoji) =====
const ART_VERSION = 13;   // chine-check ng script.js kung bago ang art.js na na-upload

// People: used for the player avatar and the customers
const PEOPLE = [
  { skin: "#f1c9a5", hair: "#2b1d12", shirt: "#3b78c4", style: 0 },
  { skin: "#d9a67a", hair: "#1a1a1a", shirt: "#d6457a", style: 1 },
  { skin: "#c48a5e", hair: "#9a9a9a", shirt: "#7a4a1f", style: 2, glasses: 1 },
  { skin: "#e8b98f", hair: "#6b3f1e", shirt: "#2f9a7a", style: 3 },
  { skin: "#f1c9a5", hair: "#3a2a1a", shirt: "#e08a1e", style: 0 },
  { skin: "#b9784a", hair: "#111111", shirt: "#9b5de5", style: 1 },
  { skin: "#d9a67a", hair: "#b0b0b0", shirt: "#c9302c", style: 2, glasses: 1 },
  { skin: "#e8b98f", hair: "#2b1d12", shirt: "#5a7a8c", style: 3 },
];
const AVATAR_COUNT = 6;

function personBody(o, mood = 0) {
  const h = o.hair;
  const back = o.style === 1
    ? `<rect x="17" y="22" width="8" height="24" rx="4" fill="${h}"/><rect x="39" y="22" width="8" height="24" rx="4" fill="${h}"/>` : "";
  let top = `<path d="M19 26a13 13 0 0 1 26 0c-4-6-9-7-13-7s-9 1-13 7z" fill="${h}"/>`;
  if (o.style === 2) top += `<circle cx="32" cy="11" r="6" fill="${h}"/>`;
  if (o.style === 3) top = `<path d="M18 25a14 14 0 0 1 28 0z" fill="${h}"/><rect x="28" y="22" width="26" height="4" rx="2" fill="${h}"/>`;
  const mouth = ["M27 33q5 4 10 0", "M28 34h8", "M27 36q5-4 10 0"][mood];
  const brows = mood === 2 ? `<path d="M23 21l7 3M41 21l-7 3" stroke="#2b1d12" stroke-width="2" stroke-linecap="round"/>` : "";
  const glass = o.glasses
    ? `<circle cx="27" cy="27" r="4.5" fill="none" stroke="#2b1d12" stroke-width="1.2"/><circle cx="37" cy="27" r="4.5" fill="none" stroke="#2b1d12" stroke-width="1.2"/>` : "";
  return `${back}<path d="M8 64c0-14 10-20 24-20s24 6 24 20z" fill="${o.shirt}"/>` +
    `<rect x="27" y="36" width="10" height="10" rx="3" fill="${o.skin}"/><circle cx="32" cy="26" r="13" fill="${o.skin}"/>${top}` +
    `<circle cx="27" cy="27" r="1.8" fill="#2b1d12"/><circle cx="37" cy="27" r="1.8" fill="#2b1d12"/>${glass}${brows}` +
    `<path d="${mouth}" stroke="#2b1d12" stroke-width="1.8" fill="none" stroke-linecap="round"/>`;
}
const personSvg = (i, mood = 0) =>
  `<svg class="ico" viewBox="0 0 64 64" aria-hidden="true">${personBody(PEOPLE[i % PEOPLE.length], mood)}</svg>`;

const heartSvg = (full) =>
  `<svg class="heart" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-8-5.5-8-11a4.5 4.5 0 0 1 8-2.5A4.5 4.5 0 0 1 20 10c0 5.5-8 11-8 11z" fill="${full ? "#d8352a" : "#6b5a5a"}" stroke="#2b1d12" stroke-width="1.5"/></svg>`;

// Wide decorations are generated
const FLAGS = ["#e63946", "#ffd166", "#2a9d8f", "#457b9d", "#f4a261"];
const BUNTING = `<path d="M0 3H300" stroke="#222" stroke-width="1.5"/>` +
  Array.from({ length: 12 }, (_, i) => `<path d="M${i * 25 + 2} 3l11 20 11-20z" fill="${FLAGS[i % 5]}"/>`).join("");
const LIGHTS = `<path d="M0 6Q75 26 150 6Q225 26 300 6" stroke="#222" fill="none" stroke-width="1.5"/>` +
  Array.from({ length: 9 }, (_, i) =>
    `<circle class="bulb" cx="${i * 37.5}" cy="${[6, 13.5, 16, 13.5][i % 4] + 3}" r="4" fill="${FLAGS[i % 5]}"/>`).join("");

// [viewBox, drawing]
const ART = {
  // Products
  candy:    ["0 0 48 48", `<path d="M15 24 6 17v14zM33 24l9-7v14z" fill="#f7a8c4"/><ellipse cx="24" cy="24" rx="10" ry="8" fill="#e0457a"/><path d="M19 19q5 5 0 10" stroke="#fff" stroke-width="2" fill="none"/>`],
  pandesal: ["0 0 48 48", `<ellipse cx="17" cy="29" rx="10" ry="8" fill="#c98a3c"/><ellipse cx="31" cy="29" rx="10" ry="8" fill="#dca04e"/><path d="M12 26q5-3 9 0M26 26q5-3 9 0" stroke="#8a5a1f" stroke-width="1.5" fill="none"/>`],
  biscuit:  ["0 0 48 48", `<rect x="10" y="7" width="28" height="35" rx="3" fill="#3b78c4"/><circle cx="24" cy="25" r="10" fill="#e8c27a"/><circle cx="20" cy="22" r="1.6" fill="#7a4a1f"/><circle cx="27" cy="26" r="1.6" fill="#7a4a1f"/><circle cx="22" cy="30" r="1.6" fill="#7a4a1f"/>`],
  egg:      ["0 0 48 48", `<path d="M24 6c8 0 13 12 13 21a13 13 0 0 1-26 0C11 18 16 6 24 6z" fill="#f3e3c3" stroke="#a8864a" stroke-width="2"/><path d="M18 20q2-6 6-8" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round"/>`],
  soda:     ["0 0 48 48", `<rect x="19" y="4" width="10" height="7" rx="1" fill="#888"/><path d="M19 11h10l4 8v22a3 3 0 0 1-3 3H18a3 3 0 0 1-3-3V19z" fill="#c9302c"/><rect x="15" y="25" width="18" height="10" fill="#fff"/><circle cx="24" cy="30" r="3" fill="#c9302c"/>`],
  noodles:  ["0 0 48 48", `<rect x="7" y="9" width="34" height="30" rx="3" fill="#e08a1e"/><path d="M13 26h22a11 11 0 0 1-22 0z" fill="#fff"/><path d="M16 22q3-5 6 0t6 0t6 0" stroke="#f7d36a" stroke-width="2.2" fill="none"/>`],
  salt:     ["0 0 48 48", `<rect x="14" y="14" width="20" height="29" rx="4" fill="#e8edf0" stroke="#9aa7ae" stroke-width="1.5"/><path d="M14 14q10-11 20 0z" fill="#5a7a8c"/><circle cx="21" cy="9" r="1.2" fill="#fff"/><circle cx="27" cy="9" r="1.2" fill="#fff"/><rect x="18" y="26" width="12" height="8" fill="#5a7a8c"/>`],
  soap:     ["0 0 48 48", `<rect x="6" y="16" width="36" height="22" rx="7" fill="#2f9a7a"/><rect x="11" y="20" width="26" height="14" rx="5" fill="#7fd4b6"/><circle cx="34" cy="11" r="4" fill="#cdeef6"/><circle cx="40" cy="7" r="2.5" fill="#cdeef6"/>`],
  icecandy: ["0 0 48 48", `<rect x="14" y="6" width="20" height="30" rx="9" fill="#9b5de5"/><rect x="20" y="10" width="4" height="14" rx="2" fill="#c9a2f2"/><rect x="21" y="35" width="6" height="9" rx="2" fill="#c9a066"/>`],
  coffee:   ["0 0 48 48", `<rect x="12" y="6" width="24" height="36" rx="2" fill="#6b3f1e"/><path d="M12 6h24v5l-3-2-3 2-3-2-3 2-3-2-3 2-3-2-3 2z" fill="#4a2a12"/><path d="M17 24h14v5a7 7 0 0 1-14 0z" fill="#f3e3c3"/><path d="M22 20q-2-3 0-5M27 20q-2-3 0-5" stroke="#f3e3c3" stroke-width="1.5" fill="none"/>`],
  shampoo:  ["0 0 48 48", `<rect x="12" y="5" width="24" height="38" rx="2" fill="#e0558a"/><path d="M12 5h24v4l-3-2-3 2-3-2-3 2-3-2-3 2-3-2-3 2z" fill="#b03a69"/><circle cx="24" cy="26" r="8" fill="#fff"/><path d="M20 26q4-6 8 0q-4 6-8 0z" fill="#e0558a"/>`],
  water:    ["0 0 48 48", `<rect x="19" y="4" width="10" height="6" rx="1" fill="#fff" stroke="#9aa7ae"/><path d="M19 10h10l4 9v22a3 3 0 0 1-3 3H18a3 3 0 0 1-3-3V19z" fill="#9fd6ee" stroke="#3a9bc7" stroke-width="1.5"/><rect x="15" y="25" width="18" height="9" fill="#3a9bc7"/><path d="M21 29q3-4 6 0" stroke="#fff" stroke-width="1.5" fill="none"/>`],
  chips:    ["0 0 48 48", `<path d="M9 7h30l-3 36H12z" fill="#f2c230"/><path d="M9 7l3 5h24l3-5z" fill="#c9302c"/><circle cx="24" cy="27" r="8" fill="#e07a1e"/><path d="M19 27q5-5 10 0" stroke="#f2c230" stroke-width="2" fill="none"/>`],
  rice:     ["0 0 48 48", `<path d="M11 13h26l5 30H6z" fill="#e0d2a8"/><path d="M13 7h22v7H13z" fill="#b59f6b"/><path d="M16 28q8-6 16 0" stroke="#8a7a4a" stroke-width="2" fill="none"/><rect x="15" y="31" width="18" height="6" fill="#c9302c"/>`],
  load:     ["0 0 48 48", `<rect x="5" y="12" width="38" height="25" rx="3" fill="#2a9d8f"/><rect x="9" y="17" width="14" height="9" rx="1" fill="#e9c46a"/><text x="28" y="33" font-size="14" font-weight="bold" fill="#fff" font-family="sans-serif">₱</text>`],
  sardines: ["0 0 48 48", `<rect x="7" y="16" width="34" height="23" rx="3" fill="#d8352a"/><ellipse cx="24" cy="16" rx="17" ry="5" fill="#c0c7cc"/><path d="M14 29q10-8 20 0q-10 8-20 0z" fill="#9fd0e8"/><circle cx="18" cy="28" r="1.2" fill="#2b1d12"/>`],

  // Upgrades
  up_time:  ["0 0 48 48", `<circle cx="24" cy="26" r="16" fill="#fff" stroke="#2b1d12" stroke-width="3"/><path d="M24 26V15M24 26l8 5" stroke="#2b1d12" stroke-width="3" stroke-linecap="round"/><rect x="20" y="3" width="8" height="5" fill="#c9302c"/>`],
  up_fan:   ["0 0 48 48", `<circle cx="24" cy="24" r="20" fill="#e8f4f8" stroke="#2b1d12" stroke-width="2"/><g fill="#6ec1e4" stroke="#2b1d12" stroke-width="1.5"><ellipse cx="24" cy="13" rx="5" ry="9"/><ellipse cx="24" cy="13" rx="5" ry="9" transform="rotate(120 24 24)"/><ellipse cx="24" cy="13" rx="5" ry="9" transform="rotate(240 24 24)"/></g><circle cx="24" cy="24" r="3" fill="#2b1d12"/>`],
  up_heart: ["0 0 24 24", `<path d="M12 21s-8-5.5-8-11a4.5 4.5 0 0 1 8-2.5A4.5 4.5 0 0 1 20 10c0 5.5-8 11-8 11z" fill="#d8352a" stroke="#2b1d12" stroke-width="1.2"/>`],
  up_tip:   ["0 0 48 48", `<rect x="12" y="10" width="24" height="33" rx="5" fill="#d6eef5" stroke="#6a9aa8" stroke-width="2"/><rect x="10" y="5" width="28" height="7" rx="2" fill="#c9302c"/><circle cx="20" cy="37" r="4.5" fill="#ffc93c" stroke="#a8791a"/><circle cx="29" cy="34" r="4.5" fill="#ffc93c" stroke="#a8791a"/><circle cx="24" cy="28" r="4.5" fill="#ffc93c" stroke="#a8791a"/>`],

  // Decorations
  bunting:  ["0 0 300 24", BUNTING],
  lights:   ["0 0 300 28", LIGHTS],
  parol:    ["0 0 40 66", `<path d="M20 0v4" stroke="#222"/><polygon points="20,4 25,18 38,18 28,27 32,40 20,32 8,40 12,27 2,18 15,18" fill="#e63946"/><polygon points="20,13 23,21 30,21 24,26 26,33 20,29 14,33 16,26 10,21 17,21" fill="#ffd166"/><path d="M20 40v6M13 40l-3 20M27 40l3 20M20 46v14" stroke="#ffd166" stroke-width="2" stroke-linecap="round"/>`],
  plant:    ["0 0 48 48", `<path d="M24 32C24 18 14 14 9 7c11 0 15 9 15 25zM24 32c0-13 8-17 15-21-1 11-7 15-15 21z" fill="#3a9d4f"/><path d="M13 32h22l-3 13H16z" fill="#b5532f"/><rect x="12" y="30" width="24" height="4" rx="1" fill="#c96a3f"/>`],
  cat:      ["0 0 48 48", `<path d="M6 36q-6-10 4-15" stroke="#e0a458" stroke-width="4" fill="none" stroke-linecap="round"/><ellipse cx="24" cy="35" rx="18" ry="10" fill="#e0a458"/><circle cx="35" cy="27" r="9" fill="#e0a458"/><path d="M28 22l1-8 6 5zM38 19l5-6 1 9z" fill="#e0a458"/><path d="M31 28q2 2 4 0M37 28q2 2 4 0" stroke="#2b1d12" stroke-width="1.5" fill="none"/><path d="M12 30q4 3 8 0M18 36q4 3 8 0" stroke="#b97a2a" stroke-width="1.5" fill="none"/>`],
  radio:    ["0 0 48 48", `<path d="M12 17L36 5" stroke="#999" stroke-width="2"/><rect x="5" y="16" width="38" height="26" rx="3" fill="#3d3d45"/><circle cx="17" cy="29" r="7.5" fill="#888"/><circle cx="17" cy="29" r="3" fill="#3d3d45"/><rect x="28" y="22" width="11" height="4" rx="1" fill="#ffc93c"/><circle cx="30" cy="34" r="2" fill="#c9302c"/><circle cx="36" cy="34" r="2" fill="#ccc"/>`],
  paint_rosas: ["0 0 48 48", `<rect x="6" y="6" width="36" height="36" rx="6" fill="#d98ba8" stroke="#2b1d12" stroke-width="2"/>`],
  paint_dilaw: ["0 0 48 48", `<rect x="6" y="6" width="36" height="36" rx="6" fill="#e5b94a" stroke="#2b1d12" stroke-width="2"/>`],

  // Story reasons
  r_family: ["0 0 48 48", `<path d="M4 25L24 8l20 17z" fill="#c9302c"/><rect x="10" y="25" width="28" height="18" fill="#f3e3b0"/><rect x="20" y="31" width="8" height="12" fill="#7a4a1f"/><rect x="13" y="29" width="5" height="5" fill="#6ec1e4"/>`],
  r_dream:  ["0 0 48 48", `<polygon points="24,4 30,18 44,18 33,27 37,42 24,34 11,42 15,27 4,18 18,18" fill="#ffc93c" stroke="#2b1d12" stroke-width="2"/>`],
  r_school: ["0 0 48 48", `<path d="M24 10L3 21l21 11 21-11z" fill="#2b1d12"/><path d="M12 26v9q12 8 24 0v-9l-12 6z" fill="#444"/><path d="M41 22v13" stroke="#ffc93c" stroke-width="2.5"/>`],
  r_lola:   ["0 0 64 64", personBody(PEOPLE[6], 0)],
};

const art = (key, cls = "ico") =>
  `<svg class="${cls}" viewBox="${ART[key][0]}" aria-hidden="true">${ART[key][1]}</svg>`;

// ===== v4: hanging products, payment, shelf/wifi upgrades, bench =====
const QR = (() => {
  let s = 7, out = "";
  for (let y = 0; y < 9; y++) for (let x = 0; x < 9; x++) {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    const finder = (x < 3 && y < 3) || (x > 5 && y < 3) || (x < 3 && y > 5);
    if (finder || (s >> 8) % 2) out += `<rect x="${x * 5 + 2}" y="${y * 5 + 2}" width="5" height="5"/>`;
  }
  return `<rect width="49" height="49" fill="#fff"/><g fill="#111">${out}</g>`;
})();

Object.assign(ART, {
  milk:    ["0 0 48 48", `<rect x="12" y="5" width="24" height="39" rx="2" fill="#4a7fd1"/><path d="M12 5h24v4l-3-2-3 2-3-2-3 2-3-2-3 2-3-2-3 2z" fill="#2f5aa0"/><circle cx="24" cy="24" r="9" fill="#fff"/><path d="M21 19h6l1 11h-8z" fill="#4a7fd1"/><rect x="21" y="17" width="6" height="3" fill="#2f5aa0"/>`],
  choco:   ["0 0 48 48", `<rect x="12" y="5" width="24" height="39" rx="2" fill="#7b4a26"/><path d="M12 5h24v4l-3-2-3 2-3-2-3 2-3-2-3 2-3-2-3 2z" fill="#4e2e16"/><ellipse cx="24" cy="26" rx="7" ry="10" fill="#c68b59"/><path d="M24 16q-4 10 0 20" stroke="#7b4a26" stroke-width="2" fill="none"/>`],
  bar:     ["0 0 48 48", `<rect x="8" y="10" width="32" height="28" rx="3" fill="#5b3a29"/><path d="M16 10v28M24 10v28M32 10v28M8 19h32M8 28h32" stroke="#3a2418" stroke-width="1.5"/><path d="M8 27h32v8a3 3 0 0 1-3 3H11a3 3 0 0 1-3-3z" fill="#c9302c"/><path d="M8 27l5-3 5 3 5-3 5 3 5-3 5 3 4-2v-2H8z" fill="#e8c27a" opacity=".0"/>`],
  milkbig: ["0 0 48 48", `<rect x="10" y="12" width="28" height="32" rx="4" fill="#e8f0fa" stroke="#2f6fb0" stroke-width="2"/><rect x="10" y="5" width="28" height="9" rx="2" fill="#2f6fb0"/><circle cx="24" cy="29" r="8" fill="#2f6fb0"/><path d="M21 25h6l1 9h-8z" fill="#fff"/>`],
  pay_phone: ["0 0 48 48", `<rect x="13" y="3" width="22" height="42" rx="4" fill="#2b1d12"/><rect x="16" y="8" width="16" height="28" rx="1" fill="#6ec1e4"/><circle cx="24" cy="40.5" r="2" fill="#888"/><text x="24" y="28" text-anchor="middle" font-size="12" font-weight="bold" fill="#fff" font-family="sans-serif">₱</text>`],
  pay_cash:  ["0 0 48 48", `<rect x="4" y="13" width="40" height="23" rx="2" fill="#7fc47a" stroke="#2d6a3a" stroke-width="2"/><circle cx="24" cy="24.5" r="6.5" fill="#bfe8b8" stroke="#2d6a3a"/><text x="24" y="29" text-anchor="middle" font-size="10" font-weight="bold" fill="#2d6a3a" font-family="sans-serif">₱</text>`],
  qr:        ["0 0 49 49", QR],
  up_shelf:  ["0 0 48 48", `<rect x="5" y="9" width="38" height="4" fill="#a8692f"/><rect x="5" y="23" width="38" height="4" fill="#a8692f"/><rect x="5" y="37" width="38" height="4" fill="#a8692f"/><rect x="9" y="2" width="9" height="7" fill="#3b78c4"/><rect x="21" y="3" width="8" height="6" fill="#c9302c"/><rect x="31" y="1" width="8" height="8" fill="#e08a1e"/><rect x="8" y="16" width="10" height="7" fill="#2f9a7a"/><rect x="24" y="14" width="9" height="9" fill="#d6457a"/><rect x="10" y="30" width="12" height="7" fill="#9b5de5"/><rect x="28" y="29" width="9" height="8" fill="#d1a21a"/>`],
  up_wifi:   ["0 0 48 48", `<path d="M5 18a27 27 0 0 1 38 0M11 25a18 18 0 0 1 26 0M17 32a9 9 0 0 1 14 0" stroke="#2b1d12" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="24" cy="39" r="3.5" fill="#2b1d12"/>`],
  bench:     ["0 0 48 48", `<rect x="4" y="14" width="40" height="5" rx="2" fill="#8b5424"/><rect x="9" y="19" width="3" height="6" fill="#6e4118"/><rect x="36" y="19" width="3" height="6" fill="#6e4118"/><rect x="4" y="25" width="40" height="6" rx="2" fill="#a8692f"/><rect x="8" y="31" width="4" height="13" fill="#6e4118"/><rect x="36" y="31" width="4" height="13" fill="#6e4118"/>`],
});


// ===== v5: pera (bills and coins) para sa sukli =====
(() => {
  const bills = { 500: "#e8c93a", 200: "#6fbf73", 100: "#9b7bd1", 50: "#e0627a", 20: "#f0963a" };
  Object.entries(bills).forEach(([d, c]) => {
    ART["m" + d] = ["0 0 48 48", `<rect x="2" y="10" width="44" height="28" rx="3" fill="${c}" stroke="#2b1d12" stroke-width="2"/><rect x="6" y="14" width="36" height="20" rx="2" fill="none" stroke="#fff" stroke-opacity=".6" stroke-width="1.5"/><text x="24" y="30" text-anchor="middle" font-size="${d.length > 2 ? 14 : 16}" font-weight="800" fill="#2b1d12" font-family="sans-serif">${d}</text>`];
  });
  const coin = (d, r, ring, mid) => ["0 0 48 48", `<circle cx="24" cy="24" r="${r}" fill="${ring}" stroke="#2b1d12" stroke-width="2"/><circle cx="24" cy="24" r="${r - 5}" fill="${mid}"/><text x="24" y="${d === 10 ? 29 : 28.5}" text-anchor="middle" font-size="${d === 10 ? 13 : 12}" font-weight="800" fill="#2b1d12" font-family="sans-serif">${d}</text>`];
  ART.m10 = coin(10, 19, "#cfd3d6", "#d9b44a");
  ART.m5 = coin(5, 16, "#cfd3d6", "#e3e6e8");
  ART.m1 = coin(1, 13, "#cfd3d6", "#e3e6e8");
})();

// ===== v6: sun/moon icons at medal para sa achievements =====
Object.assign(ART, {
  sun:  ["0 0 48 48", `<g stroke="#e8a317" stroke-width="3" stroke-linecap="round"><path d="M24 3v7M24 38v7M3 24h7M38 24h7M9 9l5 5M34 34l5 5M39 9l-5 5M14 34l-5 5"/></g><circle cx="24" cy="24" r="10" fill="#ffc93c" stroke="#e8a317" stroke-width="2"/>`],
  moon: ["0 0 48 48", `<path d="M30 6a18 18 0 1 0 12 28A14 14 0 0 1 30 6z" fill="#f4e9a8" stroke="#bfae4a" stroke-width="2"/><circle cx="12" cy="10" r="1.5" fill="#fff"/><circle cx="40" cy="14" r="1.2" fill="#fff"/><circle cx="8" cy="30" r="1.2" fill="#fff"/>`],
});
function badgeSvg(key, color) {
  const a = ART[key] || ART.candy;
  return `<svg class="ico" viewBox="0 0 56 56" aria-hidden="true"><path d="M16 38l-6 16 10-4 4 6 6-16zM40 38l6 16-10-4-4 6-6-16z" fill="#c9302c"/>` +
    `<circle cx="28" cy="26" r="22" fill="${color}" stroke="#2b1d12" stroke-width="2.5"/>` +
    `<circle cx="28" cy="26" r="17" fill="#fff4d6" stroke="#2b1d12" stroke-opacity=".35" stroke-width="1.5"/>` +
    `<svg x="14" y="12" width="28" height="28" viewBox="${a[0]}">${a[1]}</svg></svg>`;
}

// ===== v10: kuwaderno, freezer, katulong, lampara, tunog =====
Object.assign(ART, {
  book:       ["0 0 48 48", `<rect x="9" y="5" width="30" height="38" rx="3" fill="#b5532f" stroke="#2b1d12" stroke-width="2"/><rect x="14" y="5" width="2.5" height="38" fill="#7a2f12"/><path d="M21 15h13M21 22h13M21 29h9" stroke="#fff4d6" stroke-width="2.5" stroke-linecap="round"/>`],
  up_freezer: ["0 0 48 48", `<rect x="9" y="4" width="30" height="40" rx="4" fill="#e8f4f8" stroke="#2b1d12" stroke-width="2"/><path d="M9 19h30" stroke="#2b1d12" stroke-width="2"/><rect x="32" y="9" width="3" height="6" rx="1" fill="#2b1d12"/><rect x="32" y="24" width="3" height="10" rx="1" fill="#2b1d12"/><g stroke="#4aa8ee" stroke-width="2" stroke-linecap="round"><path d="M21 25v14M14 32h14M16 27l10 10M26 27L16 37"/></g>`],
  up_helper:  ["0 0 64 64", personBody(PEOPLE[4], 0)],
  up_lamp:    ["0 0 48 48", `<path d="M24 3v5M9 9l4 4M39 9l-4 4" stroke="#ffd36a" stroke-width="3" stroke-linecap="round"/><rect x="19" y="12" width="10" height="6" rx="1" fill="#555"/><path d="M15 18h18l4 22H11z" fill="#ffe08a" stroke="#2b1d12" stroke-width="2"/><rect x="13" y="40" width="22" height="5" rx="2" fill="#555"/>`],
  snd_on:     ["0 0 48 48", `<path d="M5 18h8l11-9v30l-11-9H5z" fill="#2b1d12"/><path d="M30 17q6 7 0 14M35 12q10 12 0 24" stroke="#2b1d12" stroke-width="3" fill="none" stroke-linecap="round"/>`],
  snd_off:    ["0 0 48 48", `<path d="M5 18h8l11-9v30l-11-9H5z" fill="#2b1d12"/><path d="M30 18l12 12M42 18L30 30" stroke="#c9302c" stroke-width="3.5" stroke-linecap="round"/>`],
});

// ===== v11: mas magandang decor (may outline, shading at detalye) =====
const starPts = (cx, cy, R, r, n) => Array.from({ length: n * 2 }, (_, k) => {
  const a = -Math.PI / 2 + (k * Math.PI) / n, rr = k % 2 ? r : R;
  return (cx + rr * Math.cos(a)).toFixed(1) + "," + (cy + rr * Math.sin(a)).toFixed(1);
}).join(" ");
const FLAG2 = ["#e63946", "#ffd166", "#2a9d8f", "#457b9d", "#f4a261", "#d65db1"];
const BUNT2 = `<path d="M0 3Q150 17 300 3" fill="none" stroke="#2b1d12" stroke-width="1.8"/>` +
  Array.from({ length: 12 }, (_, i) => {
    const x0 = i * 24.5 + 3, x1 = x0 + 19, t = (x0 + 9.5) / 300, y = 3 + 28 * t * (1 - t);
    return `<path d="M${x0} ${y - 1}L${x1} ${y - 1}L${(x0 + x1) / 2} ${y + 14}z" fill="${FLAG2[i % 6]}" stroke="#2b1d12" stroke-width="1.2" stroke-linejoin="round"/>` +
      `<path d="M${x0 + 1.5} ${y + 0.5}L${x1 - 1.5} ${y + 0.5}" stroke="#fff" stroke-opacity=".5" stroke-width="1.6" stroke-linecap="round"/>`;
  }).join("");
const LIGHTS2 = `<path d="M0 4Q150 28 300 4" fill="none" stroke="#2b1d12" stroke-width="1.8"/>` +
  Array.from({ length: 9 }, (_, i) => {
    const x = i * 37.5, t = i / 8, y = 4 + 48 * t * (1 - t) * 1;
    return `<rect x="${x - 2.5}" y="${y - 1}" width="5" height="5" rx="1" fill="#2b1d12"/>` +
      `<ellipse class="bulb" cx="${x}" cy="${y + 10}" rx="4.5" ry="6" fill="${FLAG2[i % 6]}" stroke="#2b1d12" stroke-width="1.2"/>` +
      `<ellipse cx="${x - 1.5}" cy="${y + 8}" rx="1.2" ry="2" fill="#fff" opacity=".7"/>`;
  }).join("");
const paintCan = (c) => ["0 0 48 48",
  `<path d="M8 12q16-14 32 0" fill="none" stroke="#2b1d12" stroke-width="2"/>` +
  `<path d="M10 15h28l-2.5 27a3 3 0 0 1-3 3H15.5a3 3 0 0 1-3-3z" fill="#cfd4d8" stroke="#2b1d12" stroke-width="2"/>` +
  `<rect x="11" y="24" width="26" height="14" fill="${c}" stroke="#2b1d12" stroke-width="1.5"/>` +
  `<ellipse cx="24" cy="14" rx="15" ry="5" fill="${c}" stroke="#2b1d12" stroke-width="2"/>` +
  `<path d="M13 15v8q0 3 3 3t3-3v-8z" fill="${c}" stroke="#2b1d12" stroke-width="1.5"/>` +
  `<path d="M16 30h16" stroke="#fff" stroke-opacity=".55" stroke-width="2" stroke-linecap="round"/>`];

Object.assign(ART, {
  bunting: ["0 0 300 26", BUNT2],
  lights:  ["0 0 300 34", LIGHTS2],
  bunting_icon: ["0 0 48 48", `<path d="M3 9Q24 24 45 9" fill="none" stroke="#2b1d12" stroke-width="2"/><path d="M6 11.5L16 14.5L11 28z" fill="#e63946" stroke="#2b1d12" stroke-width="1.5" stroke-linejoin="round"/><path d="M18 15L28 16L23 30z" fill="#ffd166" stroke="#2b1d12" stroke-width="1.5" stroke-linejoin="round"/><path d="M30 16L40 14L35 29z" fill="#2a9d8f" stroke="#2b1d12" stroke-width="1.5" stroke-linejoin="round"/>`],
  lights_icon: ["0 0 48 48", `<path d="M3 10Q24 30 45 10" fill="none" stroke="#2b1d12" stroke-width="2"/>` + [[11.4, 15.8, "#e63946"], [19.8, 18.6, "#ffd166"], [28.2, 18.6, "#2a9d8f"], [36.6, 15.8, "#d65db1"]].map(([x, y, c]) => `<rect x="${x - 2}" y="${y - 1}" width="4" height="4" fill="#2b1d12"/><ellipse cx="${x}" cy="${y + 8}" rx="4" ry="5.5" fill="${c}" stroke="#2b1d12" stroke-width="1.3"/><ellipse cx="${x - 1.3}" cy="${y + 6}" rx="1" ry="1.8" fill="#fff" opacity=".7"/>`).join("")],
  parol: ["0 0 48 78",
    `<path d="M24 0v8" stroke="#2b1d12" stroke-width="1.6"/><rect x="21" y="5" width="6" height="5" rx="1.5" fill="#c9a227" stroke="#2b1d12" stroke-width="1.2"/>` +
    `<path d="M16 44L5 72l12-7z" fill="#e63946" stroke="#2b1d12" stroke-width="1.5" stroke-linejoin="round"/>` +
    `<path d="M32 44l11 28-12-7z" fill="#e63946" stroke="#2b1d12" stroke-width="1.5" stroke-linejoin="round"/>` +
    `<path d="M24 46l-8 31 8-8 8 8z" fill="#ffd166" stroke="#2b1d12" stroke-width="1.5" stroke-linejoin="round"/>` +
    `<polygon points="${starPts(24, 28, 22, 11, 8)}" fill="#e63946" stroke="#2b1d12" stroke-width="2" stroke-linejoin="round"/>` +
    `<polygon points="${starPts(24, 28, 14, 7, 8)}" fill="#ffd166" stroke="#2b1d12" stroke-width="1.2" stroke-linejoin="round"/>` +
    `<circle cx="24" cy="28" r="4.2" fill="#fff6c8" stroke="#2b1d12" stroke-width="1.2"/>`],
  plant: ["0 0 56 64",
    `<path d="M28 40C16 36 8 24 12 8c12 4 18 16 16 32z" fill="#3fa34d" stroke="#2b1d12" stroke-width="2" stroke-linejoin="round"/>` +
    `<path d="M28 40C40 36 48 24 44 8c-12 4-18 16-16 32z" fill="#3fa34d" stroke="#2b1d12" stroke-width="2" stroke-linejoin="round"/>` +
    `<path d="M28 42C21 29 22 13 28 2c6 11 7 27 0 40z" fill="#58c066" stroke="#2b1d12" stroke-width="2" stroke-linejoin="round"/>` +
    `<path d="M28 40V9M27 32L17 18M29 32l10-14" stroke="#2f7a3a" stroke-width="1.4" fill="none" stroke-linecap="round" opacity=".75"/>` +
    `<path d="M13 38h30l-3.5 22a3 3 0 0 1-3 2.5H19.5a3 3 0 0 1-3-2.5z" fill="#c8643a" stroke="#2b1d12" stroke-width="2" stroke-linejoin="round"/>` +
    `<rect x="10" y="34" width="36" height="8" rx="3" fill="#dc7b4c" stroke="#2b1d12" stroke-width="2"/>` +
    `<path d="M17 47v9" stroke="#e8996c" stroke-width="2.5" stroke-linecap="round" opacity=".7"/>`],
  cat: ["0 0 64 64",
    `<path d="M46 53q17-2 14-21" fill="none" stroke="#2b1d12" stroke-width="9" stroke-linecap="round"/>` +
    `<path d="M46 53q17-2 14-21" fill="none" stroke="#e8a24a" stroke-width="5.2" stroke-linecap="round"/>` +
    `<path d="M57 38q3 4 2 8" fill="none" stroke="#b9772a" stroke-width="2" stroke-linecap="round"/>` +
    `<ellipse cx="30" cy="46" rx="17" ry="16" fill="#e8a24a" stroke="#2b1d12" stroke-width="2.5"/>` +
    `<ellipse cx="30" cy="50" rx="9" ry="11" fill="#f6d9a8"/>` +
    `<path d="M18 40q3 3 0 8M42 40q-3 3 0 8" stroke="#b9772a" stroke-width="2" fill="none" stroke-linecap="round"/>` +
    `<ellipse cx="22" cy="60" rx="6.5" ry="3.5" fill="#fff1d6" stroke="#2b1d12" stroke-width="2"/><ellipse cx="38" cy="60" rx="6.5" ry="3.5" fill="#fff1d6" stroke="#2b1d12" stroke-width="2"/>` +
    `<path d="M21 18L19 3l13 8zM43 18l2-15-13 8z" fill="#e8a24a" stroke="#2b1d12" stroke-width="2.5" stroke-linejoin="round"/>` +
    `<path d="M23 15l-1-7 6 4zM41 15l1-7-6 4z" fill="#f4a8b0"/>` +
    `<circle cx="32" cy="24" r="14" fill="#e8a24a" stroke="#2b1d12" stroke-width="2.5"/>` +
    `<path d="M32 11v5M27 12l1 4M37 12l-1 4" stroke="#b9772a" stroke-width="2" stroke-linecap="round"/>` +
    `<path d="M24 25q2.5-3 5 0M35 25q2.5-3 5 0" stroke="#2b1d12" stroke-width="2" fill="none" stroke-linecap="round"/>` +
    `<path d="M30 29h4l-2 2.5z" fill="#e0707c" stroke="#2b1d12" stroke-width="1" stroke-linejoin="round"/>` +
    `<path d="M32 31.5v1.5M28.5 33.5q3.5 2.5 7 0" stroke="#2b1d12" stroke-width="1.4" fill="none" stroke-linecap="round"/>` +
    `<path d="M20 29l-9-2M20 32l-9 2M44 29l9-2M44 32l9 2" stroke="#2b1d12" stroke-width="1.2" opacity=".55" stroke-linecap="round"/>`],
  radio: ["0 0 64 56",
    `<path d="M46 15L58 3" stroke="#2b1d12" stroke-width="3.6" stroke-linecap="round"/><path d="M46 15L58 3" stroke="#c9c9d1" stroke-width="1.8" stroke-linecap="round"/><circle cx="58" cy="3" r="2.3" fill="#c9302c" stroke="#2b1d12"/>` +
    `<path d="M16 17q16-15 32 0" fill="none" stroke="#2b1d12" stroke-width="5.2" stroke-linecap="round"/><path d="M16 17q16-15 32 0" fill="none" stroke="#8a8a94" stroke-width="2.4" stroke-linecap="round"/>` +
    `<rect x="5" y="15" width="54" height="38" rx="7" fill="#d9503a" stroke="#2b1d12" stroke-width="2.5"/>` +
    `<path d="M9 21q0-4 5-4h36q5 0 5 4" fill="none" stroke="#f08a74" stroke-width="2" stroke-linecap="round"/>` +
    `<rect x="9" y="21" width="46" height="28" rx="4" fill="#f6e8c8" stroke="#2b1d12" stroke-width="1.5"/>` +
    `<circle cx="24" cy="35" r="12" fill="#6b4a30" stroke="#2b1d12" stroke-width="1.5"/><g fill="none" stroke="#c9a47a" stroke-width="1.5"><circle cx="24" cy="35" r="8.5"/><circle cx="24" cy="35" r="5"/></g><circle cx="24" cy="35" r="1.8" fill="#c9a47a"/>` +
    `<rect x="38" y="24" width="15" height="9" rx="1.5" fill="#ffd77a" stroke="#2b1d12" stroke-width="1.3"/><path d="M40.5 31.5v1.5M43.5 30v3M46.5 31.5v1.5M49.5 30v3" stroke="#7a4a1f" stroke-width="1"/><path d="M45 24.8v7.4" stroke="#c9302c" stroke-width="1.5" stroke-linecap="round"/>` +
    `<circle cx="43" cy="41.5" r="4.4" fill="#3a3a42" stroke="#2b1d12" stroke-width="1.2"/><path d="M43 38.6v2.4" stroke="#ddd" stroke-width="1.2" stroke-linecap="round"/>` +
    `<circle cx="52" cy="41.5" r="3.2" fill="#3a3a42" stroke="#2b1d12" stroke-width="1.2"/><path d="M52 39.4v1.8" stroke="#ddd" stroke-width="1" stroke-linecap="round"/>`],
  bench: ["0 0 80 56",
    `<rect x="12" y="6" width="5" height="26" rx="1.5" fill="#8b5424" stroke="#2b1d12" stroke-width="2"/><rect x="63" y="6" width="5" height="26" rx="1.5" fill="#8b5424" stroke="#2b1d12" stroke-width="2"/>` +
    `<rect x="8" y="6" width="64" height="8" rx="2.5" fill="#c98a47" stroke="#2b1d12" stroke-width="2"/><rect x="8" y="16" width="64" height="8" rx="2.5" fill="#b9783a" stroke="#2b1d12" stroke-width="2"/>` +
    `<path d="M13 9.5h54M13 19.5h54" stroke="#e8c08a" stroke-width="1.5" stroke-linecap="round"/>` +
    `<rect x="9" y="40" width="7" height="14" rx="1.5" fill="#7a4a1f" stroke="#2b1d12" stroke-width="2"/><rect x="64" y="40" width="7" height="14" rx="1.5" fill="#7a4a1f" stroke="#2b1d12" stroke-width="2"/>` +
    `<rect x="16" y="45" width="48" height="4" fill="#8b5424" stroke="#2b1d12" stroke-width="1.5"/>` +
    `<rect x="4" y="30" width="72" height="10" rx="3" fill="#d39a55" stroke="#2b1d12" stroke-width="2"/><path d="M9 34h62" stroke="#efcd98" stroke-width="1.5" stroke-linecap="round"/>`],
  paint_rosas: paintCan("#d98ba8"),
  paint_dilaw: paintCan("#e5b94a"),
});
