/**********************
 * 0) SMALL SAFETY GUARDS
 **********************/
function $(id) { return document.getElementById(id); }

/**********************
 * 1) HELPERS (MUST COME BEFORE CATALOG)
 **********************/
function round2(n) { return Math.round(n * 100) / 100; }
function fmtPower(n) {
  const sign = n > 0 ? "+" : "";
  return `${sign}${n.toFixed(2)}`;
}
function makeSpherePowers(maxPlus, maxMinus, step) {
  const arr = [];
  for (let v = maxPlus; v >= 0; v = round2(v - step)) arr.push(fmtPower(v));
  for (let v = -step; v >= maxMinus; v = round2(v - step)) arr.push(fmtPower(v));
  return arr;
}
function makeAxisList(step) {
  const out = [];
  for (let a = step; a <= 180; a += step) out.push(String(a).padStart(3, "0"));
  return out;
}
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({
    "&":"&amp;",
    "<":"&lt;",
    ">":"&gt;",
    '"':"&quot;",
    "'":"&#39;"
  }[c]));
}
function showClearAfterPrintPrompt() {
  // Prevent duplicates
  if (document.getElementById("tlPrintOverlay")) return;

  const totalQty = (state.cart || []).reduce((sum, i) => sum + (Number(i.qty) || 0), 0);

  const overlay = document.createElement("div");
  overlay.id = "tlPrintOverlay";
  overlay.style.position = "fixed";
  overlay.style.inset = "0";
  overlay.style.background = "rgba(0,0,0,0.45)";
  overlay.style.display = "grid";
  overlay.style.placeItems = "center";
  overlay.style.zIndex = "9999";

  const box = document.createElement("div");
  box.style.background = "white";
  box.style.borderRadius = "14px";
  box.style.padding = "20px";
  box.style.width = "280px";
  box.style.textAlign = "center";
  box.style.fontFamily = "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif";

  const msg = document.createElement("div");
  msg.textContent = `Clear ${totalQty} lens${totalQty === 1 ? "" : "es"}?`;
  msg.style.fontSize = "15px";
  msg.style.marginBottom = "14px";

  const btnRow = document.createElement("div");
  btnRow.style.display = "grid";
  btnRow.style.gap = "8px";

  function makeBtn(label, bg, handler) {
    const b = document.createElement("button");
    b.textContent = label;
    b.style.padding = "10px";
    b.style.borderRadius = "10px";
    b.style.border = "1px solid #cbd5e1";
    b.style.background = bg;
    b.style.cursor = "pointer";
    b.style.fontSize = "13px";
    b.onclick = handler;
    return b;
  }

  // CLEAR
  btnRow.appendChild(
    makeBtn("Clear", "#fee2e2", () => {
      state.cart = [];
      saveCart();
      render();
      overlay.remove();
    })
  );

  // KEEP
  btnRow.appendChild(
    makeBtn("Keep", "#e0f2fe", () => {
      overlay.remove();
    })
  );

  // CANCEL (do NOT close, do nothing)
  btnRow.appendChild(
    makeBtn("Cancel", "#f8fafc", () => {
      // Cancel keeps everything as-is; just remove the prompt
      overlay.remove();
    })
  );

  box.appendChild(msg);
  box.appendChild(btnRow);
  overlay.appendChild(box);
  document.body.appendChild(overlay);
}

/**********************
 * 2) CATALOG (EDIT ME)
 **********************/
const CATALOG = [
  {
    manufacturer: "Acuvue (J&J)",
    lenses: [
      { name: "Oasys", type: "sphere", powers: makeSpherePowers(+8.00, -12.00, 0.25) },
      { name: "Vita  8.4 BC", type: "sphere", powers: makeSpherePowers(+8.00, -12.00, 0.25) },
      {
        name: "Oasys for Astigmatism",
        type: "toric",
        cylinder: ["-0.75","-1.25","-1.75","-2.25","-2.75"],
        sphere: makeSpherePowers(+6.00, -9.00, 0.50),
        axis: makeAxisList(10)
      },
      {
        name: "Vita for Astigmatism",
        type: "toric",
        cylinder: ["-0.75","-1.25","-1.75","-2.25"],
        sphere: makeSpherePowers(+4.00, -9.00, 0.50),
        axis: makeAxisList(10)
      },
      {
        name: "Oasys Multifocal",
        type: "multifocal",
        add: ["Low","Med","High"],
        sphere: makeSpherePowers(+6.00, -9.00, 0.25)
      },
      { name: "Oasys Max 1-Day  8.5 BC", type: "sphere", powers: makeSpherePowers(+6.00, -12.00, 0.25) }
    ]
  },
  {
    manufacturer: "CooperVision",
    lenses: [
      { name: "Biofinity", type: "sphere", powers: makeSpherePowers(+8.00, -12.00, 0.25) },
      { name: "Biofinity Energys", type: "sphere", powers: makeSpherePowers(+8.00, -12.00, 0.25) },
      { name: "MiSight", type: "sphere", powers: makeSpherePowers(-0.25, -6.00, 0.25) },
      { name: "Kirkland Signature (MyDay)", type: "sphere", powers: makeSpherePowers(+8.00, -12.00, 0.25) },
      {
        name: "Biofinity Toric",
        type: "toric",
        cylinder: ["-0.75","-1.25","-1.75","-2.25"],
        sphere: makeSpherePowers(+6.00, -10.00, 0.50),
        axis: makeAxisList(10)
      },
      {
        name: "Biofinity Multifocal",
        type: "multifocal",
        add: ["+1.00 D","+1.50 D","+2.00 D","+2.50 D","+1.00 N","+1.50 N","+2.00 N","+2.50 N"],
        sphere: makeSpherePowers(+4.00, -8.00, 0.25)
      },
      {
        name: "MyDay Toric",
        type: "toric",
        cylinder: ["-0.75","-1.25","-1.75","-2.25"],
        sphere: makeSpherePowers(+6.00, -10.00, 0.50),
        axis: makeAxisList(10)
      },
      {
        name: "MyDay Multifocal",
        type: "multifocal",
        add: ["Low","Med","High"],
        sphere: makeSpherePowers(+6.00, -9.00, 0.25)
      }
    ]
  },
  {
    manufacturer: "Alcon",
    lenses: [
      { name: "Air Optix HydraGlyde", type: "sphere", powers: makeSpherePowers(+8.00, -12.00, 0.25) },
      { name: "Total 30", type: "sphere", powers: makeSpherePowers(+8.00, -12.00, 0.25) },
      { name: "Precision 7", type: "sphere", powers: makeSpherePowers(+8.00, -12.00, 0.25) },
      { name: "Air Optix N&D  8.4 BC", type: "sphere", powers: makeSpherePowers(+6.00, -10.00, 0.25) },
      { name: "Air Optix N&D  8.6 BC", type: "sphere", powers: makeSpherePowers(+6.00, -10.00, 0.25) },
      { name: "Dailies Total 1", type: "sphere", powers: makeSpherePowers(+6.00, -12.00, 0.25) },
      { name: "Precision 1-Day", type: "sphere", powers: makeSpherePowers(+8.00, -12.00, 0.25) },
      {
        name: "Total 30 Toric",
        type: "toric",
        cylinder: ["-0.75","-1.25","-1.75","-2.25","-2.75"],
        sphere: makeSpherePowers(+6.00, -10.00, 0.50),
        axis: makeAxisList(10)
      },
      {
        name: "Precision 7 Toric",
        type: "toric",
        cylinder: ["-0.75","-1.25","-1.75","-2.25"],
        sphere: makeSpherePowers(+6.00, -10.00, 0.50),
        axis: makeAxisList(10)
      },
      {
        name: "Precision 1-Day Toric",
        type: "toric",
        cylinder: ["-0.75","-1.25","-1.75"],
        sphere: makeSpherePowers(+4.00, -8.00, 0.50),
        axis: makeAxisList(10)
      },
      {
        name: "Total 30 Multifocal",
        type: "multifocal",
        add: ["Low","Med","High"],
        sphere: makeSpherePowers(+6.00, -10.00, 0.25)
      }
      {
        name: "Air Optix Colors",
        type: "multifocal",
        add: [
          "Blue",
          "Brilliant Blue",
          "Green",
          "Gemstone Green",
          "True Sapphire",
          "Turquoise",
          "Brown",
          "Pure Hazel",
          "Amethyst",
          "Gray",
          "Sterling Gray",
          "Honey"
        ],
        sphere: ["Plano"]
      },
    ]
  },
  {
    manufacturer: "Bausch & Lomb",
    lenses: [
      { name: "Ultra", type: "sphere", powers: makeSpherePowers(+6.00, -12.00, 0.25) },
      { name: "Infuse 1-Day", type: "sphere", powers: makeSpherePowers(+6.00, -12.00, 0.25) },
      { name: "Biotrue 1-Day", type: "sphere", powers: makeSpherePowers(+6.00, -12.00, 0.25) },
      {
        name: "Ultra Toric",
        type: "toric",
        cylinder: ["-0.75","-1.25","-1.75","-2.25","-2.75"],
        sphere: makeSpherePowers(+6.00, -9.00, 0.50),
        axis: makeAxisList(10)
      },
      {
        name: "Ultra Multifocal",
        type: "multifocal",
        add: ["Low","High"],
        sphere: makeSpherePowers(+6.00, -10.00, 0.25)
      },
      {
        name: "Infuse 1-Day Toric",
        type: "toric",
        cylinder: ["-0.75","-1.25","-1.75","-2.25","-2.75"],
        sphere: makeSpherePowers(+4.00, -8.00, 0.50),
        axis: makeAxisList(10)
      },
      {
        name: "Infuse 1-Day Multifocal",
        type: "multifocal",
        add: ["Low","High"],
        sphere: makeSpherePowers(+6.00, -10.00, 0.25)
      }
    ]
  }
];

/**********************
 * 3) STATE + NAV
 **********************/
function loadCart() {
  try { return JSON.parse(localStorage.getItem("cl_cart")) ?? []; }
  catch { return []; }
}
const state = {
  view: "manufacturers",
  manufacturer: null,
  lens: null,
  cart: loadCart(),
  powersAutoOpened: false,
  powersAutoOpenKey: ""
};

const historyStack = [];

function goTo(view, { manufacturer = state.manufacturer, lens = state.lens } = {}) {
  historyStack.push({ view: state.view, manufacturer: state.manufacturer, lens: state.lens });

  state.view = view;
  state.manufacturer = manufacturer;
  state.lens = lens;

  if (view === "powers" && manufacturer && lens) {
    state.powersAutoOpened = false;
    state.powersAutoOpenKey = `${manufacturer.manufacturer}|||${lens.name}|||${lens.type}`;
  }
  render();
}
function goBack() {
  const prev = historyStack.pop();
  if (!prev) return;
  state.view = prev.view;
  state.manufacturer = prev.manufacturer;
  state.lens = prev.lens;
  render();
}
function goHome() {
  historyStack.length = 0;
  state.view = "manufacturers";
  state.manufacturer = null;
  state.lens = null;
  render();
}

/**********************
 * 4) CART HELPERS
 **********************/
function saveCart() {
  localStorage.setItem("cl_cart", JSON.stringify(state.cart));
  updateCartCount();
}
function cartKey(item) {
  return [
    item.lens,
    item.type,
    item.sphere ?? "",
    item.cylinder ?? "",
    item.axis ?? "",
    item.add ?? ""
  ].join("|");
}
function feedback() {
  try { if (navigator.vibrate) navigator.vibrate(15); } catch {}
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = "square";
    o.frequency.value = 650;
    g.gain.value = 0.03;
    o.connect(g);
    g.connect(ctx.destination);
    o.start();
    setTimeout(() => { o.stop(); ctx.close(); }, 18);
  } catch {}
}
function addToCart(newItem) {
  const key = cartKey(newItem);
  const existing = state.cart.find(x => cartKey(x) === key);
  if (existing) existing.qty = (existing.qty || 1) + 1;
  else state.cart.push({ ...newItem, qty: 1 });
  saveCart();
  feedback();
}
function removeFromCart(index) {
  state.cart.splice(index, 1);
  saveCart();
}
function updateCartCount() {
  const count = state.cart.reduce((sum, i) => sum + (Number(i.qty) || 0), 0);
  const el = $("cartCount");
  if (el) el.textContent = String(count);
}
function breadcrumb(parts) {
  const el = document.createElement("div");
  el.className = "breadcrumb";
  parts.forEach((p, idx) => {
    if (idx > 0) el.append(" › ");
    if (p.onClick) {
      const a = document.createElement("a");
      a.textContent = p.label;
      a.onclick = p.onClick;
      el.appendChild(a);
    } else {
      const span = document.createElement("span");
      span.textContent = p.label;
      el.appendChild(span);
    }
  });
  return el;
}

/**********************
 * 5) UI ROOT + HEADER BUTTONS
 **********************/
const app = $("app");

const backBtn = $("backBtn");
if (backBtn) backBtn.onclick = goBack;

const homeBtn = $("homeBtn");
if (homeBtn) homeBtn.onclick = goHome;

const goCartBtn = $("goCartBtn");
if (goCartBtn) goCartBtn.onclick = () => goTo("cart");

/**********************
 * 6) RENDER
 **********************/
function render() {
  if (!app) {
    console.error('Missing #app element. Check index.html for <div id="app"></div>');
    return;
  }

  app.innerHTML = "";
  updateCartCount();

  if (state.view === "manufacturers") renderManufacturers();
  else if (state.view === "lenses") renderLenses();
  else if (state.view === "powers") renderPowers();
  else if (state.view === "cart") renderCart();
}

function renderManufacturers() {
  const wrap = document.createElement("div");
  wrap.className = "card";
  wrap.appendChild(document.createElement("h2")).textContent = "Manufacturers";

  const grid = document.createElement("div");
  grid.className = "grid";

  CATALOG.forEach(m => {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.innerHTML = `<strong>${escapeHtml(m.manufacturer)}</strong><span class="pill">${m.lenses.length} lenses</span>`;
    btn.onclick = () => goTo("lenses", { manufacturer: m, lens: null });
    grid.appendChild(btn);
  });

  wrap.appendChild(grid);
  app.appendChild(wrap);
}

function renderLenses() {
  app.appendChild(
    breadcrumb([
      { label: "Manufacturers", onClick: () => goHome() },
      { label: state.manufacturer.manufacturer }
    ])
  );

  const wrap = document.createElement("div");
  wrap.className = "card";
  wrap.appendChild(document.createElement("h2")).textContent = state.manufacturer.manufacturer;

  const grid = document.createElement("div");
  grid.className = "grid";

  state.manufacturer.lenses.forEach(l => {
    const btn = document.createElement("button");
    btn.className = "btn";
    const typeLabel = l.type === "sphere" ? "Sphere" : l.type === "toric" ? "Toric" : "Multifocal";
    btn.innerHTML = `<strong>${escapeHtml(l.name)}</strong><span class="pill">${typeLabel}</span>`;
    btn.onclick = () => goTo("powers", { manufacturer: state.manufacturer, lens: l });
    grid.appendChild(btn);
  });

  wrap.appendChild(grid);
  app.appendChild(wrap);
}

function powerGrid(options, onPick) {
  const grid = document.createElement("div");
  grid.className = "power-grid";
  options.forEach(val => {
    const b = document.createElement("button");
    b.className = "power";
    b.textContent = val;
    b.onclick = () => onPick(val);
    grid.appendChild(b);
  });
  return grid;
}

function renderPowers() {
  const mName = state.manufacturer.manufacturer;
  const lens = state.lens;

  app.appendChild(
    breadcrumb([
      { label: "Manufacturers", onClick: () => goHome() },
      { label: mName, onClick: () => goTo("lenses", { manufacturer: state.manufacturer, lens: null }) },
      { label: lens.name }
    ])
  );

  const wrap = document.createElement("div");
  wrap.className = "card";

  const title = document.createElement("div");
  title.className = "row";

  const h2 = document.createElement("h2");
  h2.style.margin = "0";
  h2.textContent = lens.name;
  title.appendChild(h2);

  const typeLabel = lens.type === "sphere" ? "Sphere" : lens.type === "toric" ? "Toric" : "Multifocal";
  const pill = document.createElement("span");
  pill.className = "pill";
  pill.textContent = typeLabel;
  title.appendChild(pill);

  wrap.appendChild(title);

  const hint = document.createElement("p");
  hint.className = "muted";
  hint.textContent = lens.type === "sphere"
    ? "Tap a sphere power to add to the order."
    : lens.type === "toric"
      ? "Toric flow: Cylinder → Sphere → Axis."
      : "Multifocal flow: Sphere → Add.";
  wrap.appendChild(hint);

  if (lens.type === "toric") {
    const startBtn = document.createElement("button");
    startBtn.className = "small primary";
    startBtn.textContent = "Select Toric Parameters";
    startBtn.onclick = () => runToricWizard(mName, lens);
    wrap.appendChild(startBtn);
  }

  if (lens.type === "multifocal") {
    const startBtn = document.createElement("button");
    startBtn.className = "small primary";
    startBtn.textContent = "Select Multifocal Parameters";
    startBtn.onclick = () => runMultifocalWizard(mName, lens);
    wrap.appendChild(startBtn);
  }

  if (lens.type === "sphere") {
    wrap.appendChild(powerGrid(lens.powers, (sph) => {
      addToCart({ manufacturer: mName, lens: lens.name, type: lens.type, sphere: sph });
      toast(`Added ${lens.name} ${sph}`);
    }));
  }

  app.appendChild(wrap);

  // Auto-open once each time we enter this lens powers screen
  const key = `${state.manufacturer.manufacturer}|||${lens.name}|||${lens.type}`;
  if ((lens.type === "toric" || lens.type === "multifocal") &&
      !state.powersAutoOpened &&
      state.powersAutoOpenKey === key) {
    state.powersAutoOpened = true;
    setTimeout(() => {
      if (lens.type === "toric") runToricWizard(mName, lens);
      if (lens.type === "multifocal") runMultifocalWizard(mName, lens);
    }, 0);
  }
}

/**********************
 * 7) PARAMETER WIZARDS
 **********************/
const dialog = $("paramDialog");
const paramBody = $("paramBody");
const paramTitle = $("paramTitle");
const paramHint = $("paramHint");
const paramNextBtn = $("paramNextBtn"); // not used (hidden), but we keep reference safe

function ensureDialog() {
  if (!dialog || !paramBody || !paramTitle || !paramHint) {
    alert("Parameter dialog elements are missing from index.html.");
    return false;
  }
  return true;
}

function runToricWizard(manufacturerName, lens) {
  if (!ensureDialog()) return;

  const picked = { cylinder: null, sphere: null, axis: null };
  let step = 0;

  const steps = [
    { title: "Select Cylinder", hint: "Tap a cylinder value.", options: lens.cylinder, key: "cylinder" },
    { title: "Select Sphere", hint: "Tap a sphere value.", options: lens.sphere, key: "sphere" },
    { title: "Select Axis", hint: "Tap an axis (°). Tap again to increase quantity.", options: lens.axis, key: "axis" }
  ];

  function renderStep() {
    const s = steps[step];
    paramTitle.textContent = s.title;
    paramHint.textContent = s.hint;
    paramBody.innerHTML = "";
    if (paramNextBtn) paramNextBtn.style.display = "none";

    const grid = document.createElement("div");
    grid.className = "select-grid";

    s.options.forEach(opt => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "power";
      b.textContent = opt;

      b.onclick = () => {
        picked[s.key] = opt;

        if (step < steps.length - 1) {
          step++;
          renderStep();
          return;
        }

        addToCart({
          manufacturer: manufacturerName,
          lens: lens.name,
          type: "toric",
          sphere: picked.sphere,
          cylinder: picked.cylinder,
          axis: picked.axis
        });
        toast(`Added ${lens.name} ${picked.sphere} ${picked.cylinder} x ${picked.axis}`);
      };

      grid.appendChild(b);
    });

    const row = document.createElement("div");
    row.className = "row";
    row.style.justifyContent = "space-between";
    row.style.marginTop = "10px";

    const back = document.createElement("button");
    back.type = "button";
    back.className = "small";
    back.textContent = "← Back";
    back.onclick = () => {
      if (step > 0) { step--; renderStep(); }
      else dialog.close();
    };

    const done = document.createElement("button");
    done.type = "button";
    done.className = "small primary";
    done.textContent = "Done";
    done.onclick = () => dialog.close();

    row.appendChild(back);
    row.appendChild(done);

    paramBody.appendChild(grid);
    paramBody.appendChild(row);
  }

  renderStep();
  dialog.showModal();

  dialog.addEventListener("close", () => {
    if (paramNextBtn) paramNextBtn.style.display = "";
  }, { once: true });
}

function runMultifocalWizard(manufacturerName, lens) {
  if (!ensureDialog()) return;

  const picked = { sphere: null, add: null };
  let step = 0;

  const steps = [
    { title: "Select Sphere", hint: "Tap a sphere value.", options: lens.sphere, key: "sphere" },
    { title: "Select Add", hint: "Tap an add. Tap again to increase quantity.", options: lens.add, key: "add" }
  ];

  function renderStep() {
    const s = steps[step];
    paramTitle.textContent = s.title;
    paramHint.textContent = s.hint;
    paramBody.innerHTML = "";
    if (paramNextBtn) paramNextBtn.style.display = "none";

    const grid = document.createElement("div");
    grid.className = "select-grid";

    s.options.forEach(opt => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "power";
      b.textContent = opt;

      b.onclick = () => {
        picked[s.key] = opt;

        if (step === 0) {
          step = 1;
          renderStep();
          return;
        }

        addToCart({
          manufacturer: manufacturerName,
          lens: lens.name,
          type: "multifocal",
          sphere: picked.sphere,
          add: picked.add
        });
        toast(`Added ${lens.name} ${picked.sphere} ${picked.add}`);
      };

      grid.appendChild(b);
    });

    const row = document.createElement("div");
    row.className = "row";
    row.style.justifyContent = "space-between";
    row.style.marginTop = "10px";

    const back = document.createElement("button");
    back.type = "button";
    back.className = "small";
    back.textContent = "← Back";
    back.onclick = () => {
      if (step > 0) { step--; renderStep(); }
      else dialog.close();
    };

    const done = document.createElement("button");
    done.type = "button";
    done.className = "small primary";
    done.textContent = "Done";
    done.onclick = () => dialog.close();

    row.appendChild(back);
    row.appendChild(done);

    paramBody.appendChild(grid);
    paramBody.appendChild(row);
  }

  renderStep();
  dialog.showModal();

  dialog.addEventListener("close", () => {
    if (paramNextBtn) paramNextBtn.style.display = "";
  }, { once: true });
}

/**********************
 * 8) CART + EXPORT
 **********************/
function formatParams(item) {
  if (item.type === "sphere") return `Sphere ${item.sphere}`;
  if (item.type === "toric") return `Sph ${item.sphere} / Cyl ${item.cylinder} × ${item.axis}`;
  if (item.type === "multifocal") return `Sphere ${item.sphere} Add ${item.add}`;
  return "";
}
function formatPrintLine(item) {
  if (item.type === "sphere") return `${item.lens} ${item.sphere}`;
  if (item.type === "toric") return `${item.lens} ${item.sphere} ${item.cylinder} x ${item.axis}`;
  if (item.type === "multifocal") return `${item.lens} ${item.sphere} ${item.add}`;
  return `${item.lens}`;
}
function getSortedCartForExport() {
  return [...state.cart].sort((a, b) => {
    const m = (a.manufacturer || "").localeCompare(b.manufacturer || "", undefined, { sensitivity: "base" });
    if (m !== 0) return m;
    const l = (a.lens || "").localeCompare(b.lens || "", undefined, { sensitivity: "base" });
    if (l !== 0) return l;
    const s = (a.sphere || "").localeCompare(b.sphere || "");
    if (s !== 0) return s;
    const c = (a.cylinder || "").localeCompare(b.cylinder || "");
    if (c !== 0) return c;
    const ax = (a.axis || "").localeCompare(b.axis || "");
    if (ax !== 0) return ax;
    return (a.add || "").localeCompare(b.add || "");
  });
}

function renderCart() {
  app.appendChild(
    breadcrumb([
      { label: "Manufacturers", onClick: () => goHome() },
      { label: "Order" }
    ])
  );

  const wrap = document.createElement("div");
  wrap.className = "card";

  const top = document.createElement("div");
  top.className = "row";

  const h2 = document.createElement("h2");
  h2.style.margin = "0";
  h2.textContent = "Order";
  top.appendChild(h2);

  // PRINT button (auto print + prompt after print)
  const printBtn = document.createElement("button");
  printBtn.className = "small primary";
  printBtn.textContent = "Print / Save PDF";
  printBtn.onclick = () => exportPrintView({ autoPrint: true, promptClear: true });
  top.appendChild(printBtn);

  const clearBtn = document.createElement("button");
  clearBtn.className = "small danger";
  clearBtn.textContent = "Clear";
  clearBtn.onclick = () => {
    state.cart = [];
    saveCart();
    render();
  };
  top.appendChild(clearBtn);

  wrap.appendChild(top);

  if (!state.cart.length) {
    const p = document.createElement("p");
    p.className = "muted";
    p.textContent = "No items yet. Go pick lenses and powers.";
    wrap.appendChild(p);
    app.appendChild(wrap);
    return;
  }

  const table = document.createElement("table");
  table.innerHTML = `
    <thead>
      <tr>
        <th>Lens</th>
        <th>Parameters</th>
        <th class="qty">Qty</th>
        <th></th>
      </tr>
    </thead>
    <tbody></tbody>
  `;

  const tbody = table.querySelector("tbody");

  state.cart.forEach((item, idx) => {
    const tr = document.createElement("tr");
    const params = formatParams(item);

    tr.innerHTML = `
      <td>${escapeHtml(item.lens)}</td>
      <td>${escapeHtml(params)}</td>
      <td></td>
      <td></td>
    `;

    const qtyTd = tr.children[2];
    const qtyInput = document.createElement("input");
    qtyInput.type = "number";
    qtyInput.min = "1";
    qtyInput.value = String(item.qty || 1);
    qtyInput.onchange = () => {
      const v = Math.max(1, Number(qtyInput.value || 1));
      item.qty = v;
      saveCart();
    };
    qtyTd.appendChild(qtyInput);

    const delTd = tr.children[3];
    const delBtn = document.createElement("button");
    delBtn.className = "small danger";
    delBtn.textContent = "Delete";
    delBtn.onclick = () => { removeFromCart(idx); render(); };
    delTd.appendChild(delBtn);

    tbody.appendChild(tr);
  });

  wrap.appendChild(table);
  app.appendChild(wrap);
}

function exportPrintView(opts = {}) {
  const now = new Date();
  const dateStr = now.toLocaleString();

  const lines = getSortedCartForExport().map(i => ({
    label: formatPrintLine(i),
    qty: i.qty || 1
  }));

  const itemsHtml = lines.map(x => `
    <div class="item">
      <span class="itemText">${escapeHtml(x.label)} (Qty: ${x.qty})</span>
      <span class="checkBox"></span>
    </div>
  `).join("");

  const html = `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Trial Lens Order</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    :root { font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; }
    body { margin: 12px; }

    .top { display:flex; justify-content:space-between; align-items:flex-start; gap: 12px; }

    .leftHeader { display:flex; align-items:center; gap:12px; }
    .logo { height: 48px; width:auto; }
    .titleBlock h1 { margin: 0; font-size: 14px; font-weight: 700; }
    .titleBlock .subtle { color:#475569; font-size: 9px; margin-top: 2px; }

    .metaRight { font-size: 10px; color:#111; text-align:right; line-height: 1.2; }
    .metaRight .label { color:#334155; }

    .actions { margin: 8px 0 10px; display:flex; gap: 8px; }
    button {
      padding: 6px 8px;
      border-radius: 10px;
      border: 1px solid #cbd5e1;
      background: white;
      cursor:pointer;
      font-size: 11px;
    }

    @media print {
      .actions { display:none !important; }
      body { margin: 8mm; }
    }

    .items { column-count: 2; column-gap: 14px; margin-top: 8px; }
    .item {
      break-inside: avoid;
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap: 8px;
      border-bottom: 1px solid #e2e8f0;
      padding: 6px 0;
      font-size: 12px;
      line-height: 1.1;
    }
    .itemText { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .checkBox { width: 12px; height: 12px; border: 1.25px solid #64748b; border-radius: 3px; flex: 0 0 auto; }
  </style>
</head>
<body>
  <div class="top">
    <div class="leftHeader">
      <img src="logo.png" class="logo" alt="Hill Eyecare logo" />
      <div class="titleBlock">
        <h1>Trial Lens Order</h1>
        <div class="subtle">Generated: ${escapeHtml(dateStr)}</div>
      </div>
    </div>
    <div class="metaRight">
      <div><span class="label">Ordered by:</span> __________________</div>
      <div style="margin-top:6px;"><span class="label">Date ordered:</span> __________________</div>
    </div>
  </div>

  <div class="actions">
    <button onclick="window.print()">Print</button>
    <button onclick="window.close()">Close</button>
  </div>

  <div class="items">
    ${itemsHtml || '<div class="item"><span class="itemText">No items</span><span class="checkBox"></span></div>'}
  </div>
</body>
</html>`;

  const w = window.open("", "_blank");
  w.document.open();
  w.document.write(html);
  w.document.close();

  // Auto-open print dialog (tablet-safe) and then ask main window what to do
if (opts.autoPrint) {
  w.onload = () => {
    try { w.focus(); } catch {}

    // Give Android/Chrome time to render before print()
    setTimeout(() => {
      try { w.print(); } catch {}
    }, 250);
  };

  // Some Android builds fire afterprint too early — delay + do NOT draw UI in print window
  w.onafterprint = () => {
    setTimeout(() => {
      try {
        if (opts.promptClear) {
          // Tell the opener to show Clear/Keep/Cancel
          w.opener && w.opener.postMessage(
            { type: "TL_AFTER_PRINT", printWinName: w.name || "", },
            "*"
          );
        } else {
          // If you don't want the prompt, just close (but delayed so it doesn't kill printing)
          w.close();
        }
      } catch {}
    }, 600);
  };
}
}

/**********************
 * 9) TOAST
 **********************/
let toastTimer = null;
function toast(msg) {
  clearTimeout(toastTimer);
  let t = $("toast");
  if (!t) {
    t = document.createElement("div");
    t.id = "toast";
    t.style.position = "fixed";
    t.style.bottom = "14px";
    t.style.left = "50%";
    t.style.transform = "translateX(-50%)";
    t.style.background = "rgba(15,23,42,.92)";
    t.style.color = "white";
    t.style.padding = "10px 14px";
    t.style.borderRadius = "999px";
    t.style.fontSize = "13px";
    t.style.zIndex = "9999";
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.style.display = "block";
  toastTimer = setTimeout(() => { t.style.display = "none"; }, 1400);
}

// Receive "after print" ping from the print window and show Clear/Keep/Cancel in MAIN app
window.addEventListener("message", (ev) => {
  if (!ev || !ev.data || ev.data.type !== "TL_AFTER_PRINT") return;
  showClearAfterPrintPrompt();
});

/**********************
 * 10) START
 **********************/
render();
