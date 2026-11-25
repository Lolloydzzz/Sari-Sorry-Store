// ===== art.js: every picture in the game is drawn with SVG (no emoji) =====

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
