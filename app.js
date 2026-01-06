/**********************
 * 1) CATALOG (EDIT ME)
 **********************/
const CATALOG = [

  /* =========================
     ACUVUE (JOHNSON & JOHNSON)
     ========================= */
  {
    manufacturer: "Acuvue (J&J)",
    lenses: [
      { name: "Oasys", type: "sphere", powers: makeSpherePowers(+8.00, -12.00, 0.25) },
      { name: "Vita", type: "sphere", powers: makeSpherePowers(+8.00, -12.00, 0.25) },
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
      { name: "Oasys Max 1-Day", type: "sphere", powers: makeSpherePowers(+6.00, -12.00, 0.25) }
    ]
  },

  /* =================
     COOPERVISION
     ================= */
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

  /* =================
     ALCON
     ================= */
  {
    manufacturer: "Alcon",
    lenses: [
      { name: "Air Optix", type: "sphere", powers: makeSpherePowers(+8.00, -12.00, 0.25) },
      { name: "Total 30", type: "sphere", powers: makeSpherePowers(+8.00, -12.00, 0.25) },
      { name: "Precision 7", type: "sphere", powers: makeSpherePowers(+8.00, -12.00, 0.25) },
      { name: "Air Optix N&D", type: "sphere", powers: makeSpherePowers(+6.00, -10.00, 0.25) },
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
        name: "Total 30 Multifocal",
        type: "multifocal",
        add: ["Low","Med","High"],
        sphere: makeSpherePowers(+6.00, -10.00, 0.25)
      }
    ]
  },

  /* =========================
     BAUSCH & LOMB
     ========================= */
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
 * 2) STATE
 **********************/
const state = {
  view: "manufacturers", // manufacturers | lenses | powers | cart
  manufacturer: null,
  lens: null,
  cart: loadCart(),
};

// Simple view history for Back button
const historyStack = [];

function goTo(view, { manufacturer = state.manufacturer, lens = state.lens } = {}) {
  historyStack.push({
    view: state.view,
    manufacturer: state.manufacturer,
    lens: state.lens
  });
  state.view = view;
  state.manufacturer = manufacturer;
  state.lens = lens;
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

// Hook up header buttons (if present)
const backBtn = document.getElementById("backBtn");
if (backBtn) backBtn.onclick = goBack;

const homeBtn = document.getElementById("homeBtn");
if (homeBtn) homeBtn.onclick = goHome;


/**********************
 * 3) HELPERS
 **********************/
function makeSpherePowers(maxPlus, maxMinus, step) {
  // returns list of strings like "+2.00", "-1.25"
  const arr = [];
  // plus down to 0
  for (let v = maxPlus; v >= 0; v = round2(v - step)) arr.push(fmtPower(v));
  // minus starting at -step to maxMinus
  for (let v = -step; v >= maxMinus; v = round2(v - step)) arr.push(fmtPower(v));
  return arr;
}
function makeAxisList(step) {
  const out = [];
  for (let a = step; a <= 180; a += step) out.push(String(a).padStart(3, "0"));
  return out;
}
function round2(n) { return Math.round(n * 100) / 100; }
function fmtPower(n) {
  const sign = n > 0 ? "+" : "";
  return `${sign}${n.toFixed(2)}`;
}
function saveCart() {
  localStorage.setItem("cl_cart", JSON.stringify(state.cart));
  updateCartCount();
}
function loadCart() {
  try { return JSON.parse(localStorage.getItem("cl_cart")) ?? []; }
  catch { return []; }
}
function cartKey(item) {
  // unique by lens + all params
  return [
    item.manufacturer,
    item.lens,
    item.type,
    item.sphere ?? "",
    item.cylinder ?? "",
    item.axis ?? "",
    item.add ?? ""
  ].join("|");
}
function addToCart(newItem) {
  const key = cartKey(newItem);
  const existing = state.cart.find(x => cartKey(x) === key);
  if (existing) existing.qty += 1;
  else state.cart.push({ ...newItem, qty: 1 });
  saveCart();
}
function removeFromCart(index) {
  state.cart.splice(index, 1);
  saveCart();
}
function updateCartCount() {
  const count = state.cart.reduce((sum, i) => sum + (i.qty || 0), 0);
  document.getElementById("cartCount").textContent = String(count);
}

function breadcrumb(parts) {
  // parts: [{label, onClick}]
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
 * 4) RENDER
 **********************/
const app = document.getElementById("app");
document.getElementById("goCartBtn").onclick = () => goTo("cart");

function render() {
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
    btn.innerHTML = `<strong>${m.manufacturer}</strong><span class="pill">${m.lenses.length} lenses</span>`;
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
    btn.innerHTML = `<strong>${l.name}</strong><span class="pill">${typeLabel}</span>`;
    btn.onclick = () => goTo("powers", { manufacturer: state.manufacturer, lens: l });
    grid.appendChild(btn);
  });

  wrap.appendChild(grid);
  app.appendChild(wrap);
}

function renderPowers() {
  const m = state.manufacturer.manufacturer;
  const l = state.lens;

// Auto-open parameter picker for toric/multifocal lenses when entering this screen
if ((l.type === "toric" || l.type === "multifocal") && !l.__autoOpened) {
  l.__autoOpened = true; // session-only flag to avoid reopening on every render
  setTimeout(() => {
    if (l.type === "toric") runToricWizard(m, l);
    if (l.type === "multifocal") runMultifocalWizard(m, l);
  }, 0);
}

  app.appendChild(
    breadcrumb([
      { label: "Manufacturers", onClick: () => goHome() },
{ label: m, onClick: () => goTo("lenses", { manufacturer: state.manufacturer, lens: null }) },
      { label: l.name }
    ])
  );

  const wrap = document.createElement("div");
  wrap.className = "card";

  const title = document.createElement("div");
  title.className = "row";
  const h2 = document.createElement("h2");
  h2.style.margin = "0";
  h2.textContent = l.name;
  title.appendChild(h2);

  const typeLabel = l.type === "sphere" ? "Sphere" : l.type === "toric" ? "Toric" : "Multifocal";
  const pill = document.createElement("span");
  pill.className = "pill";
  pill.textContent = typeLabel;
  title.appendChild(pill);
  wrap.appendChild(title);

  const hint = document.createElement("p");
  hint.className = "muted";
  hint.textContent = l.type === "sphere"
    ? "Tap a sphere power to add to the order."
    : l.type === "toric"
      ? "Toric flow: Cylinder → Sphere → Axis."
      : "Multifocal flow: Sphere → Add.";
  wrap.appendChild(hint);

  if (l.type === "sphere") {
    wrap.appendChild(powerGrid(l.powers, (sph) => {
      addToCart({ manufacturer: m, lens: l.name, type: l.type, sphere: sph });
      toast(`Added ${l.name} ${sph}`);
    }));
  }
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

/**********************
 * 5) PARAMETER WIZARDS
 **********************/
const dialog = document.getElementById("paramDialog");
const paramBody = document.getElementById("paramBody");
const paramTitle = document.getElementById("paramTitle");
const paramHint = document.getElementById("paramHint");
const paramNextBtn = document.getElementById("paramNextBtn");

function runToricWizard(manufacturerName, lens) {
  const picked = { cylinder: null, sphere: null, axis: null };
  let step = 0;

  const steps = [
    { title: "Select Cylinder", hint: "Tap a cylinder value.", options: lens.cylinder, key: "cylinder" },
    { title: "Select Sphere", hint: "Tap a sphere value.", options: lens.sphere, key: "sphere" },
    { title: "Select Axis", hint: "Tap an axis (°). Tap again to increase quantity.", options: lens.axis, key: "axis" }
  ];

  // Render a step where tapping auto-advances;
  // On final step (axis), tapping adds to order immediately (re-tapping increments).
  function renderStep() {
    const s = steps[step];
    paramTitle.textContent = s.title;
    paramHint.textContent = s.hint;
    paramBody.innerHTML = "";
    paramNextBtn.style.display = "none"; // hide Next for toric

    const grid = document.createElement("div");
    grid.className = "select-grid";

    s.options.forEach(opt => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "power";
      b.textContent = opt;

      b.onclick = () => {
        picked[s.key] = opt;

        // Auto-advance for cyl and sphere
        if (step < steps.length - 1) {
          step++;
          renderStep();
          return;
        }

        // Final step (axis): add to order immediately.
        addToCart({
          manufacturer: manufacturerName,
          lens: lens.name,
          type: "toric",
          sphere: picked.sphere,
          cylinder: picked.cylinder,
          axis: picked.axis
        });

        toast(`Added ${lens.name} ${picked.sphere} ${picked.cylinder} x ${picked.axis}`);
        // Keep dialog open for rapid repeats; user can tap axis multiple times.
      };

      grid.appendChild(b);
    });

    // Add a Back button inside dialog for the wizard steps
    const row = document.createElement("div");
    row.className = "row";
    row.style.justifyContent = "space-between";
    row.style.marginTop = "10px";

    const back = document.createElement("button");
    back.type = "button";
    back.className = "small";
    back.textContent = "← Back";
    back.onclick = () => {
      if (step > 0) {
        step--;
        renderStep();
      } else {
        dialog.close();
      }
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

  // restore Next visibility when dialog closes (so multifocal can still use it if you want)
  dialog.addEventListener("close", () => {
    paramNextBtn.style.display = "";
  }, { once: true });
}

function runMultifocalWizard(manufacturerName, lens) {
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
    paramNextBtn.style.display = "none"; // hide Next for multifocal too

    const grid = document.createElement("div");
    grid.className = "select-grid";

    s.options.forEach(opt => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "power";
      b.textContent = opt;

      b.onclick = () => {
        picked[s.key] = opt;

        // Auto-advance from sphere -> add
        if (step === 0) {
          step = 1;
          renderStep();
          return;
        }

        // Final step (add): add to order immediately.
        addToCart({
          manufacturer: manufacturerName,
          lens: lens.name,
          type: "multifocal",
          sphere: picked.sphere,
          add: picked.add
        });

        toast(`Added ${lens.name} ${picked.sphere} ${picked.add}`);
        // Keep dialog open so repeated taps add quantity fast.
      };

      grid.appendChild(b);
    });

    // Back/Done row (same behavior as toric)
    const row = document.createElement("div");
    row.className = "row";
    row.style.justifyContent = "space-between";
    row.style.marginTop = "10px";

    const back = document.createElement("button");
    back.type = "button";
    back.className = "small";
    back.textContent = "← Back";
    back.onclick = () => {
      if (step > 0) {
        step--;
        renderStep();
      } else {
        dialog.close();
      }
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
    paramNextBtn.style.display = "";
  }, { once: true });
}

function openWizard(steps, onComplete, picked, startStep=0) {
  let step = startStep;

  function renderStep() {
    const s = steps[step];
    paramTitle.textContent = s.title;
    paramHint.textContent = s.hint;
    paramBody.innerHTML = "";
    paramNextBtn.textContent = step === steps.length - 1 ? "Add to Order" : "Next";

    const grid = document.createElement("div");
    grid.className = "select-grid";

    let selected = null;

    s.options.forEach(opt => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "power";
      b.textContent = opt;
      b.onclick = () => {
        selected = opt;
        s.set(opt);
        // visual cue
        [...grid.children].forEach(x => x.style.borderColor = "#e6e8f0");
        b.style.borderColor = "#0b3d91";
      };
      grid.appendChild(b);
    });

    paramBody.appendChild(grid);

    // Keep "Next" from advancing if nothing selected
    paramNextBtn.onclick = (e) => {
      e.preventDefault();
      const s2 = steps[step];
      // crude "did we pick something" check
      const ok = Object.values(picked).every(v => v !== null || steps.length < 3); // not perfect; we'll validate stepwise below
      // Better: validate this step
      if (!selected && step === 0 && !picked.cylinder && !picked.sphere) {
        toast("Pick a value first.");
        return;
      }
      if (!selected && step === 1 && (picked.axis === null) && steps.length >= 2) {
        // In 2-step wizard, step 1 is add; in 3-step wizard, step 1 is sphere
        // We'll just check whether any value was set by this step
        // If not, block.
      }
      // Validate by ensuring something changed for current step:
      // We'll allow progress if any button was clicked (selected set) OR if previously set.
      if (!selected) {
        // try to infer from picked object
        const keys = Object.keys(picked);
        const key = keys[step];
        if (picked[key] == null) {
          toast("Pick a value first.");
          return;
        }
      }

      if (step < steps.length - 1) {
        step++;
        renderStep();
      } else {
        dialog.close();
        onComplete(picked);
      }
    };
  }

  renderStep();
  dialog.showModal();
}

/**********************
 * 6) CART + EXPORT
 **********************/
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

  const exportBtn = document.createElement("button");
  exportBtn.className = "small primary";
  exportBtn.textContent = "Export / Print";
  exportBtn.onclick = exportPrintView;
  top.appendChild(exportBtn);

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
        <th>Manufacturer</th>
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
      <td>${escapeHtml(item.manufacturer)}</td>
      <td>${escapeHtml(item.lens)}</td>
      <td>${escapeHtml(params)}</td>
      <td></td>
      <td></td>
    `;

    const qtyTd = tr.children[3];
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

    const delTd = tr.children[4];
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

function formatParams(item) {
  if (item.type === "sphere") return `Sphere ${item.sphere}`;
  if (item.type === "toric") return `Sph ${item.sphere} / Cyl ${item.cylinder} × ${item.axis}`;
  if (item.type === "multifocal") return `Sphere ${item.sphere} Add ${item.add}`;
  return "";
}

function formatPrintLine(item) {
  // Requirement: no manufacturer, no "Sphere/Cyl" labels
  // Example: "Oasys for Astigmatism -2.00 -1.25 x 070"

  if (item.type === "sphere") {
    return `${item.lens} ${item.sphere}`;
  }

  if (item.type === "toric") {
    return `${item.lens} ${item.sphere} ${item.cylinder} x ${item.axis}`;
  }

  if (item.type === "multifocal") {
    return `${item.lens} ${item.sphere} ${item.add}`;
  }

  return `${item.lens}`;
}

function getSortedCartForExport() {
  return [...state.cart].sort((a, b) => {
    const m = (a.manufacturer || "").localeCompare(b.manufacturer || "", undefined, { sensitivity: "base" });
    if (m !== 0) return m;

    const l = (a.lens || "").localeCompare(b.lens || "", undefined, { sensitivity: "base" });
    if (l !== 0) return l;

    // Tie-breakers for predictable grouping
    const s = (a.sphere || "").localeCompare(b.sphere || "");
    if (s !== 0) return s;

    const c = (a.cylinder || "").localeCompare(b.cylinder || "");
    if (c !== 0) return c;

    const ax = (a.axis || "").localeCompare(b.axis || "");
    if (ax !== 0) return ax;

    return (a.add || "").localeCompare(b.add || "");
  });
}

function exportPrintView() {
  const now = new Date();
  const dateStr = now.toLocaleString();

  // One line per item, include Qty
const lines = getSortedCartForExport().map(i => {
  return {
    label: formatPrintLine(i),
    qty: i.qty || 1
  };
});

const itemsHtml = lines.map(x => `
  <div class="item">
    <span class="itemText">${escapeHtml(x.label)}    (Qty: ${x.qty})</span>
    <span class="checkBox"></span>
  </div>
`).join("");

  const html = `
<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Trial Lens Order</title>
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
  <style>
    :root { font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; }
    body { margin: 18px; }
    .top { display:flex; justify-content:space-between; align-items:flex-start; gap: 16px; }
    h1 { margin: 0; font-size: 23px; }
    .metaRight { font-size: 12px; color:#111; text-align:right; }
    .metaRight .label { color:#334155; }
    .subtle { color:#475569; font-size: 11px; margin-top: 2px; }
    .actions { margin: 10px 0 12px; display:flex; gap: 10px; }
    button { padding: 8px 10px; border-radius: 10px; border: 1px solid #cbd5e1; background: white; cursor:pointer; font-size: 12px; }
    @media print {
      .actions { display:none !important; }
      body { margin: 10mm; }
    }

    /* Make text readable on phones */
    h1 { font-size: clamp(18px, 4.8vw, 22px); }
    .metaRight, .subtle { font-size: clamp(12px, 3.4vw, 14px); }

    /* Two columns on larger screens, one column on phones */
    .items {
      column-count: 2;
      column-gap: 18px;
      margin-top: 10px;
    }

    .item {
      break-inside: avoid;
      border-bottom: 1px solid #e2e8f0;
      padding: 8px 0;
      font-size: clamp(14px, 3.8vw, 16px);
      line-height: 1.25;
      white-space: normal; /* allow wrapping on phones */
    }

    /* Phone: switch to 1 column so it doesn't shrink */
    @media (max-width: 600px) {
      body { margin: 12px; }
      .items { column-count: 1; }
    }

    .itemText {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .checkBox {
      width: 14px;
      height: 14px;
      border: 1.5px solid #64748b;
      border-radius: 3px;
      flex-shrink: 0;
    }
  </style>
</head>
<body>
  <div class="top">
    <div>
      <h1>Trial Lens Order <span style="font-size:12px; color:#64748b;">(vTEST)</span></h1>
      <div class="subtle">Generated: ${escapeHtml(dateStr)}</div>
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
    ${itemsHtml || '<div class="item">No items</div>'}
  </div>
</body>
</html>`;

  const w = window.open("", "_blank");
  w.document.open();
  w.document.write(html);
  w.document.close();
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));
}

/**********************
 * 7) TINY TOAST
 **********************/
let toastTimer = null;
function toast(msg) {
  clearTimeout(toastTimer);
  let t = document.getElementById("toast");
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

/**********************
 * 8) START
 **********************/
render();
