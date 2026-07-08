// Ethiopia Drinks Price Guide — compiled data
// Sources: deliveraddis.com, helloomarket, hellooomarket Telegram,
// thereporterethiopia.com, mohasoftdrinks.com, dashenbreweries.com,
// habeshabreweries.com, heinekenethiopia.com, addisfortune.news,
// brauwelt.com, wine-searcher.com, numbeo.com, expatistan.com
// All prices in Ethiopian Birr (ETB). Indicative retail, late 2025.

const BEERS = [
  {
    name: "St. George Beer",
    amh: "ቅዱስ ጊዮርጊስ",
    desc: "The highest-selling, iconic historical pale lager. Patron-saint of Ethiopia branding since the 1920s.",
    brewery: "BGI Ethiopia (Kombolcha)",
    parent: "BGI",
    abv: "4.7%",
    amount: "330 ml",
    cost: { bottle: 30, sixpack: 199, crate24: 500 },
    count: "Crate = 24 × 330ml · 6-pack also standard",
    availability: "broad",
    availText: "<strong>Nationwide.</strong> Bottles, cans on request, and draft at the BGI Hall in Addis. ~85% of all Ethiopian beer consumed is St. George family.",
    extra: "Draft \"jambo\" (≈400ml) ≈ 20 ETB in neighbourhood bars; 1,360 ETB per barrel wholesale."
  },
  {
    name: "Habesha Beer",
    amh: "ሐበሻ",
    desc: "Highly popular malty lager known everywhere as \"Cold Gold\". Brewed with highland spring water from Debre Birhan.",
    brewery: "Habesha Breweries (Debre Birhan)",
    parent: "Habesha",
    abv: "5.0%",
    amount: "330 ml",
    cost: { bottle: 41, sixpack: 179, crate24: 480 },
    count: "Crate = 24 × 330ml · also 24-can case",
    availability: "broad",
    availText: "<strong>Nationwide.</strong> Sold in bottles and cans; even served on Ethiopian Airlines in cans. Strong cultural-pride marketing."
  },
  {
    name: "Walia Beer",
    amh: "ዋልያ",
    desc: "A wildly successful smooth pale lager named after the endemic Walia ibex (and Ethiopia's national football team).",
    brewery: "Heineken Ethiopia — Kilinto",
    parent: "Heineken",
    abv: "5.0%",
    amount: "330 ml",
    cost: { bottle: 28, crate24: 480 },
    count: "Crate = 24 × 330ml",
    availability: "broad",
    availText: "<strong>Nationwide + draft.</strong> Heineken's flagship local brand; widely on draught in bars. Walia Radler (lemon, 2.5%) also available."
  },
  {
    name: "Dashen Beer",
    amh: "ዳሽን",
    desc: "A crisp premium highland lager originally brewed in Gondar; now produced at the giant Debre Birhan plant.",
    brewery: "Dashen Brewery (Gondar + Debre Birhan)",
    parent: "Dashen / Vasari-Duet",
    abv: "5.0%",
    amount: "330 ml",
    cost: { bottle: 31, crate24: 480 },
    count: "Crate = 24 × 330ml",
    availability: "broad",
    availText: "<strong>Nationwide.</strong> Largest single plant capacity in country. Sponsorship of Arsenal FC pushed it into premium positioning."
  },
  {
    name: "Bedele Beer",
    amh: "በደሌ",
    desc: "A smooth western-Ethiopian legacy lager from the town of Bedele, one of the country's oldest breweries.",
    brewery: "Heineken Ethiopia — Bedele",
    parent: "Heineken",
    abv: "5.0%",
    amount: "330 ml",
    cost: { bottle: 28, crate24: 480 },
    count: "Crate = 24 × 330ml",
    availability: "broad",
    availText: "<strong>Western Ethiopia + nationwide.</strong> Acquired from government by Heineken in 2011; now brewed at Kilinto with the same recipe."
  },
  {
    name: "Bedele Special",
    amh: "በደሌ ስፔሻል",
    desc: "A higher-alcohol, richer flavour variation of standard Bedele. Distinctive 500ml size alongside the standard bottle.",
    brewery: "Heineken Ethiopia — Bedele",
    parent: "Heineken",
    abv: "5.5%",
    amount: "330 ml or 500 ml",
    cost: { bottle330: 28, bottle500: 30, crate24: 520 },
    count: "Crate of 24 × 330ml or loose 500ml",
    availability: "broad",
    availText: "<strong>Nationwide.</strong> Often the beer of choice when you want a bigger pour — the 500ml bottle remains a unique Ethiopian format."
  },
  {
    name: "Harar Beer",
    amh: "ሐረር",
    desc: "A classic eastern lager popular in the historic walled-city region. Brewed in the eastern highland town of the same name.",
    brewery: "Heineken Ethiopia — Harar",
    parent: "Heineken",
    abv: "5.0%",
    amount: "330 ml",
    cost: { bottle: 28, crate24: 480 },
    count: "Crate = 24 × 330ml",
    availability: "broad",
    availText: "<strong>Eastern Ethiopia + nationwide.</strong> Strongest in Harar, Dire Dawa, and Somali-region trade. Brewed at Harar + Kilinto."
  },
  {
    name: "Meta Beer",
    amh: "ሜታ",
    desc: "One of the nation's earliest robust pilsner-style legacy brands. Meta Premium targets the German-pilsner drinker.",
    brewery: "Meta Abo Brewery",
    parent: "Diageo",
    abv: "4.5% – 5.0%",
    amount: "330 ml",
    cost: { bottle: 30, crate24: 480 },
    count: "Crate = 24 × 330ml",
    availability: "broad",
    availText: "<strong>Nationwide.</strong> Two SKUs — Meta Beer (regular) and Meta Premium (pilsner-style). 1 million hl annual capacity."
  },
  {
    name: "Raya Beer",
    amh: "ራያ",
    desc: "A prominent lager brand originating from the northern Tigray territory. Locally cherished, distribution thinner post-2020.",
    brewery: "Raya Brewery (Mekelle area)",
    parent: "Local / Tigray",
    abv: "5.0%",
    amount: "330 ml",
    cost: { bottle: 28 },
    count: "Crate = 24 × 330ml (where available)",
    availability: "limited",
    availText: "<strong>Predominantly Tigray & northern routes.</strong> Distribution was disrupted during the 2020–22 conflict; has been returning to shelves in 2024–25."
  },
  {
    name: "Balageru Beer",
    amh: "ባላገሩ",
    desc: "A popular affordable lager produced by Dashen Brewery — Dashen's mainstream value play.",
    brewery: "Dashen Brewery",
    parent: "Dashen",
    abv: "5.2%",
    amount: "330 ml",
    cost: { bottle: 26, sixpack: 152.8 },
    count: "Crate = 24 × 330ml · 6-pack common",
    availability: "broad",
    availText: "<strong>Nationwide.</strong> Marketed as the 100%-barley everyday lager. The strongest ABV in Dashen's standard range."
  },
  {
    name: "Jano Beer",
    amh: "ጃኖ",
    desc: "A strong filtered premium option under the Dashen portfolio — smooth, polished, mid-tier pricing.",
    brewery: "Dashen Brewery",
    parent: "Dashen",
    abv: "4.8%",
    amount: "330 ml",
    cost: { bottle: 32 },
    count: "Crate = 24 × 330ml",
    availability: "broad",
    availText: "<strong>Nationwide.</strong> Premium filtered option; priced just above standard Dashen & Habesha, comparable to Walia."
  },
  {
    name: "Kegna Beer",
    amh: "ቀኛ",
    desc: "The newest mega-brewery lager (\"ours\" in Afaan Oromo). Launched 14 June 2025 from a USD 250m, 3-million-hl plant in Ginchi.",
    brewery: "Kegna Beverages (Ginchi, Oromia)",
    parent: "5,000+ Ethiopian shareholders / Oromia regional",
    abv: "5.0%",
    amount: "330 ml, 500 ml, 30L keg",
    cost: { bottle: 30 },
    count: "Bottle cases; 30-liter keg for draft",
    availability: "partial",
    availText: "<strong>Rolling national rollout from mid-2025.</strong> Brewed with 100% local barley → lower excise. Backed by the Development Bank of Ethiopia."
  },
  {
    name: "Waliin Beer",
    amh: "ወሊን",
    desc: "A premium joint-venture brand launched by United Beverages SC (Kangaroo Industrial Group + United Africa Beverages).",
    brewery: "United Beverages SC (Mojo)",
    parent: "Kangaroo × UAB",
    abv: "~5.0%",
    amount: "330 ml",
    cost: { bottle: 35 },
    count: "Crate = 24 × 330ml (selected outlets)",
    availability: "partial",
    availText: "<strong>Premium-positioned.</strong> Currently distributed in selected cities (Addis Ababa, Mojo, Adama); nationally expanding from a 1.6m hl Mojo plant."
  },
];

// Coca-Cola family — CCBA Ethiopia / Coca-Cola Beverages Africa
const COKE_FAMILY = [
  {
    name: "Coca-Cola",
    amh: "ኮካ-ኮላ",
    desc: "The original. Same global recipe bottled locally — Addis plant under CCBA Ethiopia.",
    cost: { glass300: 25, pet330: 28, pet500: 50, pet1L: 65, pet2L: 90 },
    count: "300ml glass returns in 24-bottle crates; PET in 6 / 12 / 24 packs",
    availability: "broad",
    availText: "<strong>Nationwide.</strong> Sold in 300ml glass (returnable), 330/500ml PET, 1L and 2L PET. 2L ≈ 90 ETB per Expatistan; crate ≈ 480 ETB wholesale."
  },
  {
    name: "Sprite",
    amh: "ስፓይት",
    desc: "Lemon-lime clear soda. Local 300ml glass + PET formats; Sprite Zero on PET.",
    cost: { glass300: 25, pet330: 28, pet500: 50, pet1L: 65 },
    count: "Glass 300ml × 24 crate; PET in 6 / 12 packs",
    availability: "broad",
    availText: "<strong>Nationwide.</strong> Bottled by CCBA Ethiopia at the same lines as Coca-Cola; widely available in kiosks and restaurants."
  },
  {
    name: "Fanta Orange",
    amh: "ፋንታ ኦራንጅ",
    desc: "The orange soda. Ethio relaunch of the Fanta Orange flavour was a notable 2024 market moment.",
    cost: { glass300: 25, pet330: 28, pet500: 50, pet1L: 65, pet2L: 90 },
    count: "Glass 300ml × 24 crate; PET 6 / 12 packs",
    availability: "broad",
    availText: "<strong>Nationwide.</strong> Fanta Orange relaunch was a major Ethiopia push (per thereporterethiopia.com). Also Fanta Apple / Fruit Twist variants."
  },
  {
    name: "Coca-Cola Zero / Sprite Zero",
    amh: "ዜሮ",
    desc: "Sugar-free alternatives — Coca-Cola Zero and Sprite Zero on 330ml PET and 500ml PET.",
    cost: { pet330: 30, pet500: 55 },
    count: "PET in 6 / 12 packs",
    availability: "broad",
    availText: "<strong>Nationwide.</strong> Stocked at supermarkets and modern-trade; less common in kiosk channels."
  },
];

// Pepsi family — Moha Soft Drinks Industry S.C.
// ⚠️ As of Dec 2024, all 8 Moha plants are shut due to forex shortage (per The Reporter).
const PEPSI_FAMILY = [
  {
    name: "Pepsi Cola",
    amh: "ፔፕሲ",
    desc: "The original Pepsi, bottled by Moha Soft Drinks Industry S.C. under PepsiCo franchise.",
    cost: { glass300: 20, pet330: 26, pet500: 35, pet1L: 45, pet2L: 72 },
    count: "Glass 300ml × 24 crate (RRP 480 ETB incl. VAT); PET 6 / 12 packs",
    availability: "scarce",
    availText: "<strong>⚠️ Severely disrupted.</strong> All eight Moha plants halted since 2024 (forex). Last published wholesale RRP per Sept-2022 price list."
  },
  {
    name: "7-Up",
    amh: "ሰቨን አፕ",
    desc: "Clear lemon-lime soda. PepsiCo franchise bottled locally by Moha.",
    cost: { glass300: 20, pet330: 26, pet500: 35, pet1L: 45, pet2L: 72 },
    count: "Glass 300ml × 24 crate; PET 6 / 12 packs",
    availability: "scarce",
    availText: "<strong>⚠️ Severely disrupted.</strong> Same Moha production halt as the rest of the Pepsi range. Last published RRP still referenced."
  },
  {
    name: "Mirinda Orange",
    amh: "ሚሪንዳ ኦራንጅ",
    desc: "The flagship Mirinda flavour. Bottled in 300ml glass, 330/500/1L/1.5L PET.",
    cost: { glass300: 20, pet330: 26, pet500: 35, pet1L: 45, pet1_5L: 63 },
    count: "Glass 300ml × 24 crate; PET 6 / 12 packs",
    availability: "scarce",
    availText: "<strong>⚠️ Severely disrupted.</strong> Mirinda Orange, Apple, Tonic and Raspberry variants all share the same halted production line."
  },
  {
    name: "Mirinda Apple",
    amh: "ሚሪንዳ አፕል",
    desc: "Green-apple flavour variant. Same Moha line as Mirinda Orange.",
    cost: { glass300: 20, pet330: 26, pet500: 35 },
    count: "Glass 300ml × 24 crate; PET 12 packs",
    availability: "scarce",
    availText: "<strong>⚠️ Severely disrupted.</strong> Apple, Orange, Tonic and Raspberry all produced on the same Hawassa / Summit / Bure lines."
  },
  {
    name: "Mirinda Tonic",
    amh: "ሚሪንዳ ቶኒክ",
    desc: "Bitter-citrus \"tonic\" style variant of Mirinda.",
    cost: { glass300: 20, pet330: 26, pet500: 35 },
    count: "Glass 300ml × 24 crate; PET 12 packs",
    availability: "scarce",
    availText: "<strong>⚠️ Severely disrupted.</strong> Bottled at Moha's Tekle Haimanot and Gondar plants alongside the rest of the portfolio."
  },
];

// Expose for app.js
window.DRINKS_DATA = { BEERS, COKE_FAMILY, PEPSI_FAMILY };