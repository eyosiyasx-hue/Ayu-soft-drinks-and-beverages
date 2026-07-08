// Render cards + tabs

function fmtPrice(cost) {
  // cost is an object of { format: ETBvalue } — render as a compact line.
  const parts = [];
  const labels = {
    bottle: "bottle",
    bottle330: "330ml",
    bottle500: "500ml",
    glass300: "300ml glass",
    pet330: "330ml PET",
    pet500: "500ml PET",
    pet1L: "1L PET",
    pet1_5L: "1.5L PET",
    pet2L: "2L PET",
    sixpack: "6-pack",
    crate24: "24-crate",
  };
  for (const [k, v] of Object.entries(cost)) {
    if (typeof v !== "number") continue;
    parts.push(`<span><strong>${v}</strong> <span class="ccy">ETB</span> <span class="small">/ ${labels[k] || k}</span></span>`);
  }
  return parts.join(`<span class="sep">·</span>`);
}

function beerCard(b) {
  return `
    <article class="card" data-cat="beer" data-avail="${b.availability}">
      <div class="card-head">
        <h3>${b.name}<span class="amh">${b.amh}</span></h3>
        <span class="tag beer">${b.abv} ABV</span>
      </div>
      <p class="card-desc">${b.desc}</p>
      <div class="brewery">
        <span>${b.brewery}</span>
        <span>Parent: ${b.parent}</span>
      </div>
      <div class="facts">
        <div class="fact">
          <div class="fact-label">Amount</div>
          <div class="fact-value">${b.amount}</div>
        </div>
        <div class="fact">
          <div class="fact-label">Count</div>
          <div class="fact-value" style="font-size:12.5px; line-height:1.3;">${b.count}</div>
        </div>
      </div>
      <div>
        <div class="fact-label" style="margin-bottom:6px;">Cost</div>
        <div class="price">${fmtPrice(b.cost)}</div>
        ${b.extra ? `<div class="card-desc" style="margin-top:8px; font-size:12.5px; color:#8a8f97;">${b.extra}</div>` : ""}
      </div>
      <div class="avail ${b.availability}">
        <strong>Availability:</strong> ${b.availText}
      </div>
    </article>
  `;
}

function softCard(s, family) {
  return `
    <article class="card" data-cat="${family}" data-avail="${s.availability}">
      <div class="card-head">
        <h3>${s.name}<span class="amh">${s.amh}</span></h3>
        <span class="tag ${family === 'coke' ? 'coke' : 'pepsi'}">${family === 'coke' ? 'Coca-Cola Family' : 'PepsiCo · Moha'}</span>
      </div>
      <p class="card-desc">${s.desc}</p>
      <div class="facts">
        <div class="fact">
          <div class="fact-label">Amount</div>
          <div class="fact-value" style="font-size:12.5px;">300ml glass · 330/500ml PET · 1L · 1.5L · 2L</div>
        </div>
        <div class="fact">
          <div class="fact-label">Count</div>
          <div class="fact-value" style="font-size:12.5px; line-height:1.3;">${s.count}</div>
        </div>
      </div>
      <div>
        <div class="fact-label" style="margin-bottom:6px;">Cost (ETB)</div>
        <div class="price">${fmtPrice(s.cost)}</div>
      </div>
      <div class="avail ${s.availability}">
        <strong>Availability:</strong> ${s.availText}
      </div>
    </article>
  `;
}

function render() {
  const { BEERS, COKE_FAMILY, PEPSI_FAMILY } = window.DRINKS_DATA;

  const beerGrid = document.getElementById("beerGrid");
  beerGrid.innerHTML = BEERS.map(beerCard).join("");

  const cokeGrid = document.getElementById("cokeGrid");
  cokeGrid.innerHTML = COKE_FAMILY.map((s) => softCard(s, "coke")).join("");

  const pepsiGrid = document.getElementById("pepsiGrid");
  pepsiGrid.innerHTML = PEPSI_FAMILY.map((s) => softCard(s, "pepsi")).join("");

  bindTabs();
}

function bindTabs() {
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((t) => {
    t.addEventListener("click", () => {
      tabs.forEach((x) => x.classList.remove("active"));
      t.classList.add("active");
      const f = t.dataset.filter;
      // Show/hide section blocks and cards
      const beerSection = document.getElementById("beers");
      const softSection = document.getElementById("soft");
      if (f === "all") {
        beerSection.style.display = "";
        softSection.style.display = "";
      } else if (f === "beer") {
        beerSection.style.display = "";
        softSection.style.display = "none";
      } else if (f === "coke" || f === "pepsi") {
        beerSection.style.display = "none";
        softSection.style.display = "";
        // Within soft, filter which sub-grid is highlighted
        document.querySelectorAll("#soft .sub").forEach((sub, i) => {
          const isCoke = i === 0; // first .sub is "Coca-Cola Family"
          const want = f === "coke" ? isCoke : !isCoke;
          sub.style.opacity = want ? "1" : "0.35";
        });
        // Hide non-matching cards
        document.querySelectorAll("#soft .card").forEach((card) => {
          const cat = card.dataset.cat;
          card.style.display = cat === f ? "" : "none";
        });
      }
      // Reset card hiding inside beer section if visible
      if (f === "all" || f === "beer") {
        document.querySelectorAll("#soft .card").forEach((card) => (card.style.display = ""));
        document.querySelectorAll("#soft .sub").forEach((sub) => (sub.style.opacity = "1"));
      }
      // Smooth scroll to top of content
      window.scrollTo({ top: document.querySelector("main").offsetTop - 60, behavior: "smooth" });
    });
  });
}

document.addEventListener("DOMContentLoaded", render);