/* ---- CONFIG ---------------------------------------------------------- */
const CONFIG = {
  freeShippingOver: 75,
  shippingFee: 9,
  coupons: {
    JONES10: { 
      code: 'JONES10', 
      percent: 10, 
      label: '10% off your order' },
    
    FIRST10: { 
      code: 'FIRST10', 
      percent: 10, 
      label: '10% off your first purchase' }
  },

  contact: {
    email: 'hello@jonesandco.com.au',
    phone: '+61 2 9699 1234',
    address: 'Surry Hills, Sydney NSW 2010, Australia',
    hours: 'Mon–Fri 9am–5pm AEST'
  }
};

document.getElementById('announcement').innerHTML =
  `Free shipping over $${CONFIG.freeShippingOver} · Use ` +
  `<strong>${CONFIG.coupons.JONES10.code}</strong> or ` +
  `<strong>${CONFIG.coupons.FIRST10.code}</strong> for 10% off`;


/* ----PRODUCTS -------------------------------------------------------- */
/* Real Jones & Co product names and categories from jonesandco.com.au.
   `cat` values map to the task-oriented navigation:
     wallart     — art prints, Capiz shell wall pieces
     decorating  — vases, mugs, ornaments for display
     tableware   — bowls, platters, jugs

   `isNew` flags show the NEW ARRIVALS scroller content. */
   const PRODUCTS = [
  { id:'sweetheart',
    name:'Chino Mug Sweetheart',
    image:'assets/products/sweet-heart.webp',
    imageAlt:'Chino Mug Sweetheart by Jones & Co',
    cat:'tableware',
    catLabel:'Tableware',
    price:33, 
    comparePrice:null, 
    rating:4.9, 
    reviews:8, 
    stock:'low', 
    isNew:true,
    desc:'L: 10cm W: 10cm H: 7cm',
    swatches:[{c:'#E26963',n:'Sweetheart'},{c:'#F5CAC3',n:'Blush'}],
    accordion:{
      details:'A hidden "Sweet Heart" message awaits at the bottom of the indigo-striped interior of this Chino mug, offering a moment of unexpected joy with your final sip. The exterior is dotted with hand painted red love hearts, creating a sweet pattern. Each piece is shaped from durable earthenware by skilled Vietnamese craftspeople working from our Sydney designs, the deep blue stripes and hearts applied by hand with practiced precision.',
      care:'For tabletop items these are microwave and dishwasher safe. For decorative items, clean with a soft cloth to remove dust or spot clean with mild detergent.',
      shipping:'Free tracked shipping over $75. Ships from our Surry Hills warehouse in 1–2 business days.'
    }
  },
  { id:'fresco', 
    name:'Fresco Check Vase', 
    image:'assets/products/vase1.webp',
    imageAlt:'Fresco Check Vase by Jones & Co',
    cat:'decorating', 
    catLabel:'Decorating',
    price:55, 
    comparePrice:110, 
    rating:4.8, 
    reviews:18, 
    stock:'in', 
    isNew:false,
    desc:'A decorative ceramic vase with a softly nostalgic check finish, generous statement scale, and the warm hand-painted character Jones & Co is known for.',
    swatches:[{c:'#F5CAC3',n:'Blush Check'},{c:'#F7F1E8',n:'Natural'}],
    accordion:{
      details:'Hand-painted earthenware, approx. 28cm H × 20cm W. Decorative use only.',
      care:'Wipe gently with a dry cloth. Avoid water. Pair with dried stems.',
      shipping:'Free tracked shipping over $75. Ships in 1–2 business days.'
    }
  },
  { id:'love', 
    name:'Love Notes Mug My Person', 
    image:'assets/products/mug1.webp',
    imageAlt:'Love Notes Mug My Person',
    cat:'tableware', 
    catLabel:'Tableware',
    price:44, 
    comparePrice:null, 
    rating:4.9, 
    reviews:36, 
    stock:'in', 
    isNew:false,
    desc:'A cheerful everyday mug with expressive hand-painted lettering. Microwave and dishwasher safe.',
    swatches:[{c:'#E26963',n:'Terracotta'},{c:'#84A59D',n:'Sage'}],
    accordion:{
      details:'Earthenware mug, approx. 350ml capacity. Blue striped handle.',
      care:'Top-rack dishwasher safe. Microwave safe.',
      shipping:'Free tracked shipping over $75.'
    }
  },
  { id:'chino', 
    name:'Chino Mug Navy Lines', 
    image:'assets/products/cup1.webp',
    imageAlt:'Chino Mug Navy Lines',
    cat:'tableware', 
    catLabel:'Tableware',
    price:33, 
    comparePrice:null, 
    rating:4.7, 
    reviews:24, 
    stock:'in', 
    isNew:false,
    desc:'The Chino Mug is the everyday hero — the right weight, the right size, beautiful enough to feel like a treat every morning.',
    swatches:[{c:'#84A59D',n:'Navy Lines'},{c:'#F5CAC3',n:'Blush Spot'}],
    accordion:{
      details:'Striped earthenware mug, approx. 320ml.',
      care:'Dishwasher and microwave safe.',
      shipping:'Free tracked shipping over $75.'
    }
  },
  { id:'inked', 
    name:'Inked Mug — No Worries', 
    image:'assets/products/gift-mug-1.webp',
    imageAlt:'Inked Mug — No Worries',
    cat:'tableware', 
    catLabel:'Tableware',
    price:33, 
    comparePrice:null, 
    rating:4.8, 
    reviews:14, 
    stock:'in', 
    isNew:true,
    desc:'Illustrated in bold graphic style, this mug carries a message that lands with warmth and humour.',
    swatches:[{c:'#84A59D',n:'Blue White'},{c:'#F7F1E8',n:'Cream'}],
    accordion:{
      details:'Illustrated earthenware mug, approx. 320ml.',
      care:'Top-rack dishwasher safe.',
      shipping:'Free tracked shipping over $75.'
    }
  },
  { id:'sage', 
    name:'ATLANTIC TURTLE BOX', 
    image:'assets/products/ATLANTIC TURTLE BOX.webp',
    imageAlt:'ATLANTIC TURTLE BOX',
    cat:'decorating', 
    catLabel:'Decorating',
    price:68, 
    comparePrice:null, 
    rating:4.9, 
    reviews:41, 
    stock:'in', 
    isNew:true,
    desc:'Slender bone china vase in a matte sage finish. Designed to hold a single stem or a small bunch.',
    swatches:[{c:'#84A59D',n:'Sage'},{c:'#F7F1E8',n:'Cream'}],
    accordion:{
      details:'Bone china, approx. 22cm H. Hand wash. Limited edition.',
      care:'Hand wash gently.',
      shipping:'Free tracked shipping over $75.'
    }
  },
  { id:'sunset', 
    name:'Tavola Bowl', 
    image:'assets/products/plate2.webp',
    imageAlt:'Tavola Bowl',
    cat:'tableware', 
    catLabel:'Tableware',
    price:45, 
    comparePrice:null, 
    rating:4.6, 
    reviews:29, 
    stock:'in', 
    isNew:false,
    desc:'Deep stoneware bowl glazed in a sunset gradient. Perfect for pasta, ramen or salad.',
    swatches:[{c:'#F6B060',n:'Sunset'},{c:'#E26963',n:'Coral'}],
    accordion:{
      details:'Stoneware, approx. 800ml capacity. Food safe.',
      care:'Dishwasher safe.',
      shipping:'Free tracked shipping over $75.'
    }
  },
  { id:'desert', 
    name:'Desert Jug', 
    image:'assets/products/jug.webp',
    imageAlt:'Desert Jug',
    cat:'decorating', 
    catLabel:'Decorating',
    price:78, 
    comparePrice:null, 
    rating:4.8, 
    reviews:12, 
    stock:'low', 
    isNew:true,
    desc:'Statement jug in a warm sand glaze. Functional as a water pitcher or sculptural on its own.',
    swatches:[{c:'#F6B060',n:'Sand'},{c:'#F5CAC3',n:'Blush'}],
    accordion:{
      details:'Stoneware, 1.2L capacity.',
      care:'Hand wash.',
      shipping:'Free tracked shipping over $75.'
    }
  },
  { id:'coral', 
    name:'Tovala Lemon Cup', 
    image:'assets/products/lemon-cup.webp',
    imageAlt:'Tovala Lemon Cup',
    cat:'tableware', 
    catLabel:'Tableware',
    price:24, 
    comparePrice:null, 
    rating:4.5, 
    reviews:47, 
    stock:'in', 
    isNew:false,
    ceramic:'mug blush',
    desc:'Everyday tumbler in a soft coral glaze. Stackable and easy to hold.',
    swatches:[{c:'#F5CAC3',n:'Coral'},{c:'#F6B060',n:'Honey'}],
    accordion:{
      details:'Stoneware, 280ml. Stackable.',
      care:'Dishwasher safe.',
      shipping:'Free tracked shipping over $75.'
    }
  },
  { id:'capiz', 
    name:'FABLE SUN PINK HEART', 
    image:'assets/products/FABLE SUN PINK HEART.webp',
    imageAlt:'FABLE SUN PINK HEART',
    cat:'wallart', 
    catLabel:'Wall Art',
    price:129, 
    comparePrice:null, 
    rating:4.9, 
    reviews:22, 
    stock:'in', 
    isNew:true,
    desc:'Handmade Capiz shell flower — a signature Jones & Co wall piece. A bold and creative focal point for any room.',
    swatches:[{c:'#F5CAC3',n:'Blush'},{c:'#84A59D',n:'Sage'}],
    accordion:{
      details:'Handmade Capiz shell and bamboo, approx. 40cm diameter. Handmade in the Philippines.',
      care:'Dust with a soft cloth. Avoid direct sunlight.',
      shipping:'Free tracked shipping over $75.'
    }
  },
  { id:'zebra', 
    name:'BEACH CLUB ORANGE CRAB', 
    image:'assets/products/BEACH CLUB ORANGE CRAB.webp',
    imageAlt:'BEACH CLUB ORANGE CRAB',
    cat:'wallart', 
    catLabel:'Wall Art',
    price:89, 
    comparePrice:null, 
    rating:4.7, 
    reviews:16, 
    stock:'in', 
    isNew:false,
    desc:'Vibrant illustration print — instantly lifts a living room, kid\'s room or gallery wall.',
    swatches:[{c:'#84A59D',n:'Sage'},{c:'#F6B060',n:'Honey'}],
    accordion:{
      details:'Giclée print on archival paper, A3 size. Unframed.',
      care:'Keep out of direct sunlight.',
      shipping:'Free tracked shipping over $75.'
    }
  },
  { id:'bloom', 
    name:'BEACH CLUB MINNOW', 
    image:'assets/products/BEACH CLUB MINNOW.webp',
    imageAlt:'BEACH CLUB MINNOW',
    cat:'wallart', 
    catLabel:'Wall Art',
    price:95, 
    comparePrice:null, 
    rating:4.8, 
    reviews:11, 
    tock:'in', 
    isNew:false,
    desc:'Warm honey-toned Capiz shell wall disc. Catches light beautifully.',
    swatches:[{c:'#F6B060',n:'Honey'},{c:'#E26963',n:'Coral'}],
    accordion:{
      details:'Capiz shell and bamboo, approx. 35cm diameter.',
      care:'Dust with a soft cloth.',
      shipping:'Free tracked shipping over $75.'
    }
  }

];




/* ---- STATE ----------------------------------------------------------- */
const state = {
  route: 'home',
  currentId: null,
  cart: [],
  wishlist: new Set(),
  filter: 'all',
  sort: 'featured',
  appliedCoupon: null
};


/* ----  UTILITIES ------------------------------------------------------- */
function esc(s) {
  return String(s).replace(/[&<>"']/g, c => (
    { '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]
  ));
}
function dollars(n) { return '$' + Math.round(n); }
function stars(r) { return '★'.repeat(Math.round(r)) + '☆'.repeat(5 - Math.round(r)); }

let toastTimer;
function toast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
}


// shopping cart， add to cart
function addToCart(id, qty = 1) {
    const line = state.cart.find(l => l.id === id);
    if (line) {
      line.qty += qty;
    } else {
      state.cart.push({ id, qty });
    }
    updateBadge();
    toast('Added to cart ✓');
    openMiniCart();
  }
  
  function updateBadge() {
    const count = state.cart.reduce((n, l) => n + l.qty, 0);
    const el = document.getElementById('cartBadge');
    if (!el) return;
    el.textContent = count;
  }
  
  function computeTotals() {
    let subtotal = 0;
  
    state.cart.forEach(line => {
      const p = PRODUCTS.find(x => x.id === line.id);
      if (p) subtotal += p.price * line.qty;
    });
  
    const shipping =
      subtotal === 0 || subtotal >= CONFIG.freeShippingOver
        ? 0
        : CONFIG.shippingFee;
  
    const discount = state.appliedCoupon
      ? subtotal * (state.appliedCoupon.percent / 100)
      : 0;
  
    return {
      subtotal,
      shipping,
      discount,
      total: subtotal + shipping - discount
    };
  }
  
  function applyCoupon(code) {
    const upper = code.trim().toUpperCase();
    const found = CONFIG.coupons[upper];
  
    if (found) {
      state.appliedCoupon = found;
      toast(`Applied ${found.code} — ${found.label}`);
    } else {
      toast('Invalid code — try JONES10 or FIRST10');
    }
  }
  
  function validateField(fieldEl) {
    const input = fieldEl.querySelector('input');
    if (!input) return true;
  
    const ok = input.checkValidity();
    fieldEl.classList.toggle('invalid', !ok);
    return ok;
  }

/* ---- ROUTER ---------------------------------------------------------- */
function go(route, productId) {
  state.route = route;
  if (productId) state.currentId = productId;
  closeMenu(); closeSearch();
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


/* ---- RENDERERS ------------------------------------------------------- */

/* Single card template used in every grid and every scroller. */
function card(p, opts = {}) {
    const stockClass = p.stock === 'low' ? 'low' : '';
    const stockText  = p.stock === 'low' ? 'Low stock' : 'In stock';
    const isSaved    = state.wishlist.has(p.id);
    const newPill    = p.isNew && opts.showNew !== false ? '<span class="new-pill">New</span>' : '';
  
    return `
      <article class="card" data-product="${p.id}">
        <div class="card-media">
          <img
            class="card-img"
            src="${esc(p.image || 'assets/products/placeholder.jpg')}"
            alt="${esc(p.imageAlt || p.name)}"
            loading="lazy"
          >
          ${newPill}
          <span class="stock-pill ${stockClass}">${stockText}</span>
  
          <button class="wish-btn ${isSaved ? 'saved' : ''}" data-wish="${p.id}" aria-label="Save to wishlist">
            <i class="fa-regular fa-heart"></i>
          </button>
  
          <button class="quick-add" data-add="${p.id}" aria-label="Quick add ${esc(p.name)} to cart" title="Quick add">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 2l1.5 3h9L18 2"/>
              <path d="M3 6h18l-2 14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L3 6z"/>
              <line x1="12" y1="11" x2="12" y2="17"/>
              <line x1="9" y1="14" x2="15" y2="14"/>
            </svg>
          </button>
        </div>
  
        <div class="card-body">
          <div class="card-cat">${esc(p.catLabel)}</div>
          <div class="card-head">
            <h3 class="card-title">${esc(p.name)}</h3>
            <div class="card-price">${dollars(p.price)}</div>
          </div>
          <div class="card-meta">
            <span class="stars">${stars(p.rating)}</span>
            <span>${p.reviews} reviews</span>
          </div>
        </div>
      </article>
    `;
  }

function filtered() {
  let list = PRODUCTS.slice();
  if (state.filter !== 'all' && state.filter !== 'sale') {
    list = list.filter(p => p.cat === state.filter);
  }
  if (state.filter === 'sale') {
    list = list.filter(p => p.comparePrice);
  }
  if (state.sort === 'priceAsc')  list.sort((a, b) => a.price - b.price);
  if (state.sort === 'priceDesc') list.sort((a, b) => b.price - a.price);
  if (state.sort === 'rating')    list.sort((a, b) => b.rating - a.rating);
  return list;
}


/* ----- HOME ----- */
function homePage() {
    const newArrivals = PRODUCTS.filter(p => p.isNew);
    const bestSellers = PRODUCTS.filter(p => !p.isNew).slice(0, 4);
    return `
      <!-- Hero with floating text + Shop All button -->
      <section class="hero">
        <div class="hero-stage">
        <picture class="hero-picture">
            <source media="(min-width: 768px)" srcset="assets/HERO.png">
            <img class="hero-img" src="assets/Hero-mobile.webp" alt="Colourful Jones & Co ceramics styled in a home setting">
        </picture>

        <div class="hero-float">
            <span class="eyebrow">Handmade in Vietnam &amp; the Philippines</span>
            <h1 class="hero-title serif">Decorative <em>joy</em><br>for the home.</h1>
            <p class="hero-sub">Designed in Australia, Jones &amp; Co makes hand-painted ceramics, Capiz shell wall art, tableware and gifts. Every piece is full of colour, pattern, life and energy.</p>
            <div class="hero-ctas">
            <button class="btn btn-primary" data-route="shop">Shop All</button>
            </div>
        </div>

        <div class="hero-badge">
            <strong>4.9★</strong>
            <span>1,200+ reviews<br>Trusted worldwide</span>
        </div>
        </div>
  
        <!-- Static trust strip replaces the removed marquee -->
        <div class="trust-strip">
          <span>Hand-painted</span>
          <span>Free shipping over $${CONFIG.freeShippingOver}</span>
          <span>21-day returns</span>
          <span>Designed in Sydney</span>
        </div>
      </section>
  
      <!-- NEW ARRIVALS — horizontal scroller with arrow controls -->
      <section class="section">
        <div class="section-head">
          <div class="lhs">
            <span class="eyebrow">Just landed</span>
            <h2 class="section-title">New arrivals</h2>
          </div>
          <div style="display: flex; align-items: center; gap: var(--sp-4);">
            <div class="scroller-arrows" id="newArrivalsArrows">
              <button class="scroller-arrow" data-scroll="new" data-dir="-1" aria-label="Scroll left">‹</button>
              <button class="scroller-arrow" data-scroll="new" data-dir="1" aria-label="Scroll right">›</button>
            </div>
            <a href="#shop" class="section-link" data-route="shop">View all →</a>
          </div>
        </div>
        <div class="scroller-wrap">
          <div class="scroller" id="newArrivalsScroller">
            ${newArrivals.map(p => card(p)).join('')}
          </div>
        </div>
      </section>
  
      <!-- FEATURED NEW COLLECTION editorial block (Chino Sweetheart) -->
      <section class="section">
        <div class="section-head">
          <div class="lhs">
            <span class="eyebrow">New collection</span>
            <h2 class="section-title">Chino Mug — Sweetheart edition</h2>
          </div>
        </div>
        <div class="collection-card">
            <div class="collection-media">
            <img
                class="collection-img"
                src="assets/collection.jpg"
                alt="Chino Mug Sweetheart edition"
                loading="lazy"
            >
            </div>
          <div class="collection-copy">
            <div class="collection-title">Small moments of joy, every day.</div>
            <p class="collection-desc">That's exactly what our hand-painted Chino Mugs were made for, small unspoken moments of joy that repeat every single day. Our newest Sweetheart colourway is released in a limited run from our Vietnam factory — once it's gone, it's gone.</p>
            <div style="display: flex; gap: var(--sp-3); flex-wrap: wrap;">
              <button class="btn btn-primary" data-route="product" data-pid="sweetheart">Shop the collection</button>
              <button class="btn btn-ghost" data-route="shop" data-filter="decorating">Explore all Chino Mugs</button>
            </div>
          </div>
        </div>
      </section>
  
      <!-- SHOP BY CATEGORY — task-oriented labels -->
      <section class="section">
        <div class="section-head">
          <div class="lhs">
            <span class="eyebrow">How do you want to shop?</span>
            <h2 class="section-title">Shop by category</h2>
          </div>
        </div>
        <div class="cat-grid">
          <button class="cat-card" data-route="shop" data-filter="wallart">
            <div class="cat-icon wallart"><div class="ceramic wall coral" style="width:36px;height:36px;"></div></div>
            <div class="cat-name">Wall Art</div>
            <div class="cat-sub">Capiz shell discs, prints and statement pieces to lift a room.</div>
          </button>
          <button class="cat-card" data-route="shop" data-filter="decorating">
            <div class="cat-icon decorating"><div class="ceramic vase blush" style="width:22px;height:34px;"></div></div>
            <div class="cat-name">Decorating</div>
            <div class="cat-sub">Vases, mugs and ornaments for display and everyday style.</div>
          </button>
          <button class="cat-card" data-route="shop" data-filter="tableware">
            <div class="cat-icon tableware"><div class="ceramic bowl honey" style="width:36px;height:18px;"></div></div>
            <div class="cat-name">Tableware</div>
            <div class="cat-sub">Bowls, jugs and platters, hand-finished for the dinner table.</div>
          </button>
          <button class="cat-card" data-route="shop" data-filter="sale">
            <div class="cat-icon sale"><span style="color:white;font-family:'Fraunces',serif;font-weight:700;font-size:18px;">%</span></div>
            <div class="cat-name">Sale</div>
            <div class="cat-sub">Limited pieces at reduced prices — while stock lasts.</div>
          </button>
        </div>
      </section>
  
      <!-- BEST SELLERS grid -->
      <section class="section">
        <div class="section-head">
          <div class="lhs">
            <span class="eyebrow">Best sellers</span>
            <h2 class="section-title">Loved by Australian homes</h2>
          </div>
          <a href="#shop" class="section-link" data-route="shop">Shop all →</a>
        </div>
        <div class="product-grid">${bestSellers.map(p => card(p)).join('')}</div>
      </section>
  
      <!-- CONTACT & FAQ block -->
      <section class="section" id="contact">
        <div class="contact-block">
          <div class="contact-lhs">
            <span class="eyebrow">Get in touch</span>
            <h2>We'd love to hear from you.</h2>
            <p>Our Customer Care team is based in Surry Hills, Sydney. If you have a question about a product, an order, or you'd like us to track something down from our stockists — please get in touch.</p>
            <div class="contact-list">
              <div class="contact-item">
                <div class="icon">✉</div>
                <div>
                  <strong>${esc(CONFIG.contact.email)}</strong>
                  <span>We reply within one business day.</span>
                </div>
              </div>
              <div class="contact-item">
                <div class="icon">☎</div>
                <div>
                  <strong>${esc(CONFIG.contact.phone)}</strong>
                  <span>${esc(CONFIG.contact.hours)}</span>
                </div>
              </div>
              <div class="contact-item">
                <div class="icon">◉</div>
                <div>
                  <strong>${esc(CONFIG.contact.address)}</strong>
                  <span>Warehouse &amp; showroom by appointment.</span>
                </div>
              </div>
            </div>
            <div class="contact-cta">
              <a href="mailto:${esc(CONFIG.contact.email)}" class="btn btn-primary">Email us</a>
              <a href="tel:${esc(CONFIG.contact.phone.replace(/\\s/g,''))}" class="btn btn-ghost">Call us</a>
            </div>
          </div>
  
          <div class="contact-rhs">
            <span class="eyebrow" style="margin-bottom:var(--sp-3);display:inline-block;">Frequently asked</span>
            <div class="faq-list">
              <details>
                <summary>How long does shipping take?</summary>
                <p>Orders ship from our Sydney warehouse within 1–2 business days. Standard tracked shipping takes 3–7 business days within Australia. Free over $${CONFIG.freeShippingOver}.</p>
              </details>
              <details>
                <summary>What's your returns policy?</summary>
                <p>We want you to be completely happy with your purchase. You have 21 days from receiving the item to let us know you wish to return it. The item must be in saleable condition and unused. You cover the return postage unless the item is damaged or faulty.</p>
              </details>
              <details>
                <summary>Where are your products made?</summary>
                <p>Every piece is designed in Australia and handmade at our partner factories in Vietnam, the Philippines and Thailand. Because each item is hand-painted, lead times can be 90–180 days, with 4 weeks transport to Sydney.</p>
              </details>
              <details>
                <summary>An item I wanted is sold out — what can I do?</summary>
                <p>With all of our best-selling lines, another order is usually on its way. However, some items are only produced for a limited run and once they're gone, they're gone. If you're chasing something specific, contact our Customer Care team and we'll try to locate it for you among our stockists.</p>
              </details>
              <details>
                <summary>Do you have a physical store?</summary>
                <p>Our warehouse and showroom are in Surry Hills, Sydney — visits are by appointment. We also supply stockists across Australia; contact us and we'll point you to the one closest to you.</p>
              </details>
            </div>
          </div>
        </div>
      </section>
    `;
  }



/* ----- SHOP ----- */
function shopPage() {
    const items = filtered();
    const filterChip = (key, label) => `
      <button class="chip ${state.filter === key ? 'is-active' : ''}" data-filter="${key}">${esc(label)}</button>
    `;
    const titleMap = {
      all: 'All collections',
      wallart: 'Wall Art',
      decorating: 'Decorating',
      tableware: 'Tableware',
      sale: 'Sale'
    };
    return `
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <button class="back-btn" data-route="home">Back</button>
        <div class="crumbs">
          <a href="#home" data-route="home">Home</a>
          <span class="sep">›</span>
          <span class="current">${titleMap[state.filter] || 'Shop'}</span>
        </div>
      </nav>
  
      <div class="shop-layout">
        <aside class="filter-sidebar">
          <div class="filter-group">
            <div class="filter-label">Collection</div>
            <div class="chip-stack">
              ${filterChip('all', 'All collections')}
              ${filterChip('wallart', 'Wall Art')}
              ${filterChip('decorating', 'Decorating')}
              ${filterChip('tableware', 'Tableware')}
            </div>
          </div>
          <div class="filter-group">
            <div class="filter-label">Offers</div>
            <div class="chip-row">
              ${filterChip('sale', 'On sale')}
            </div>
          </div>
        </aside>
  
        <div class="shop-results">
          <h1 class="serif">${esc(titleMap[state.filter] || 'Shop')}</h1>
          <div class="shop-toolbar">
            <span class="results-count">${items.length} product${items.length !== 1 ? 's' : ''} found</span>
            <select class="sort-select" id="sortSel">
              <option value="featured" ${state.sort === 'featured' ? 'selected' : ''}>Sort: Featured</option>
              <option value="priceAsc" ${state.sort === 'priceAsc' ? 'selected' : ''}>Price: Low to High</option>
              <option value="priceDesc" ${state.sort === 'priceDesc' ? 'selected' : ''}>Price: High to Low</option>
              <option value="rating" ${state.sort === 'rating' ? 'selected' : ''}>Top Rated</option>
            </select>
          </div>
          ${items.length
            ? `<div class="product-grid">${items.map(p => card(p)).join('')}</div>`
            : `<div class="empty"><h3 class="serif">No products found</h3><p>Try a different collection.</p></div>`}
        </div>
      </div>
    `;
  }

document.body.addEventListener('click', (e) => {
  /* Mini-cart close */
  if (e.target.id === 'miniCartClose' || e.target.id === 'miniCartScrim') {
    closeMiniCart();
    return;
  }

  /* Scroller arrows */
  const sa = e.target.closest('[data-scroll]');
  if (sa) {
    const scroller = document.getElementById('newArrivalsScroller');
    if (scroller) {
      const dir = parseInt(sa.dataset.dir, 10);
      const cardW = scroller.querySelector('.card')?.offsetWidth || 220;
      scroller.scrollBy({ left: dir * (cardW + 16), behavior: 'smooth' });
    }
    return;
  }

  /* Routing */
  const rl = e.target.closest('[data-route]');
  if (rl) {
    e.preventDefault();
    if (rl.dataset.filter) state.filter = rl.dataset.filter;
    go(rl.dataset.route, rl.dataset.pid);
    closeMiniCart();
    return;
  }

  /* Quick add */
  const qa = e.target.closest('[data-add]');
  if (qa) {
    e.stopPropagation();
    addToCart(qa.dataset.add);
    return;
  }

  /* Product card click */
  const cd = e.target.closest('[data-product]');
  if (cd && !e.target.closest('button')) {
    go('product', cd.dataset.product);
    return;
  }

  /* Wishlist */
  const ws = e.target.closest('[data-wish]');
  if (ws) {
    e.stopPropagation();
    const id = ws.dataset.wish;

    if (state.wishlist.has(id)) {
      state.wishlist.delete(id);
      toast('Removed from wishlist');
    } else {
      state.wishlist.add(id);
      toast('Saved to wishlist ♥');
    }

    render();
    return;
  }

  /* Filter chip */
  const fc = e.target.closest('[data-filter]');
  if (fc && state.route === 'shop') {
    state.filter = fc.dataset.filter;
    render();
    return;
  }

  /* PDP quantity */
  if (e.target.matches('[data-qty-delta]')) {
    const delta = parseInt(e.target.dataset.qtyDelta, 10);
    const v = document.getElementById('pdpQtyVal');
    v.textContent = Math.max(1, parseInt(v.textContent, 10) + delta);
    return;
  }

  /* PDP add */
  if (e.target.id === 'pdpAdd') {
    const qty = parseInt(document.getElementById('pdpQtyVal').textContent, 10);
    addToCart(state.currentId, qty);
    return;
  }

  /* Cart line actions */
  const lineRow = e.target.closest('[data-line]');
  if (lineRow) {
    const id = lineRow.dataset.line;
    const line = state.cart.find(l => l.id === id);

    if (e.target.matches('[data-line-delta="1"]')) {
      line.qty += 1;
      render();
      updateBadge();
      return;
    }

    if (e.target.matches('[data-line-delta="-1"]')) {
      line.qty = Math.max(1, line.qty - 1);
      render();
      updateBadge();
      return;
    }

    if (e.target.matches('[data-remove]')) {
      state.cart = state.cart.filter(l => l.id !== id);
      render();
      updateBadge();
      return;
    }
  }

  /* Promo */
  if (e.target.id === 'promoApply') {
    applyCoupon(document.getElementById('promoInput').value);
    render();
    return;
  }

  /* Search chip */
  const sc = e.target.closest('[data-search]');
  if (sc) {
    document.getElementById('searchInput').value = sc.dataset.search;
    return;
  }
});

document.body.addEventListener('submit', (e) => {
  if (e.target.id !== 'checkoutForm') return;
  e.preventDefault();
  const fields = e.target.querySelectorAll('.field');
  let allOk = true;
  fields.forEach(f => { if (!validateField(f)) allOk = false; });
  if (!allOk) { toast('Please fix the highlighted fields'); return; }
  go('confirmation');
  state.cart = [];
  state.appliedCoupon = null;
  updateBadge();
});
document.body.addEventListener('blur', (e) => {
  if (e.target.matches('#checkoutForm input')) validateField(e.target.closest('.field'));
}, true);

/* Drawer + search overlay */
function openMenu()  { document.getElementById('drawer').classList.add('open');  document.getElementById('drawerScrim').classList.add('open');  document.body.classList.add('locked'); }
function closeMenu() { document.getElementById('drawer').classList.remove('open'); document.getElementById('drawerScrim').classList.remove('open'); document.body.classList.remove('locked'); }
function openSearch()  { document.getElementById('searchOverlay').classList.add('open'); }
function closeSearch() { document.getElementById('searchOverlay').classList.remove('open'); }
document.getElementById('menuOpen').addEventListener('click', openMenu);
document.getElementById('menuClose').addEventListener('click', closeMenu);
document.getElementById('drawerScrim').addEventListener('click', closeMenu);
document.getElementById('searchOpen').addEventListener('click', openSearch);
document.getElementById('searchClose').addEventListener('click', closeSearch);
document.getElementById('searchOverlay').addEventListener('click', (e) => {
  if (e.target.id === 'searchOverlay') closeSearch();
}); 

// mini cart 
let miniCartTimer = null;

function renderMiniCart() {
  const body = document.getElementById('miniCartBody');
  const foot = document.getElementById('miniCartFoot');
  if (!body || !foot) return;

  if (state.cart.length === 0) {
    body.innerHTML = '<div class="mini-cart-empty">Your bag is empty.</div>';
    foot.hidden = true;
    return;
  }

  foot.hidden = false;

  body.innerHTML = state.cart.map(line => {
    const p = PRODUCTS.find(x => x.id === line.id);
    if (!p) return '';

    return `
      <div class="mini-line">
        <div class="mini-line-img">
          <img src="${esc(p.image)}" alt="${esc(p.imageAlt || p.name)}">
        </div>
        <div class="mini-line-info">
          <div class="mini-line-name">${esc(p.name)}</div>
          <div class="mini-line-qty">Qty ${line.qty}</div>
        </div>
        <div class="mini-line-price">${dollars(p.price * line.qty)}</div>
      </div>
    `;
  }).join('');

  const totals = computeTotals();
  document.getElementById('miniCartSubtotal').textContent = dollars(totals.subtotal);

  const shippingEl = document.getElementById('miniCartShipping');
  if (totals.subtotal >= CONFIG.freeShippingOver) {
    shippingEl.textContent = 'Free shipping unlocked ✓';
  } else {
    const left = CONFIG.freeShippingOver - totals.subtotal;
    shippingEl.textContent = `Add ${dollars(left)} more for free shipping.`;
  }
}

function openMiniCart() {
  renderMiniCart();

  const panel = document.getElementById('miniCart');
  const scrim = document.getElementById('miniCartScrim');
  if (!panel || !scrim) return;

  panel.classList.add('open');
  panel.setAttribute('aria-hidden', 'false');
  scrim.classList.add('open');

  clearTimeout(miniCartTimer);
  miniCartTimer = setTimeout(closeMiniCart, 4000);
}

function closeMiniCart() {
  const panel = document.getElementById('miniCart');
  const scrim = document.getElementById('miniCartScrim');
  if (!panel || !scrim) return;

  panel.classList.remove('open');
  panel.setAttribute('aria-hidden', 'true');
  scrim.classList.remove('open');

  clearTimeout(miniCartTimer);
}


  /* ---- put in last page RENDER + INIT --------------------------------------------------- */
function render() {
    const app = document.getElementById('app');
    let html;
    switch (state.route) {
      case 'home':         html = homePage(); break;
      case 'shop':         html = shopPage(); break;
      case 'product':      html = productPage(); break;
      case 'cart':         html = cartPage(); break;
      case 'checkout':     html = checkoutPage(); break;
      case 'confirmation': html = confirmationPage(); break;
      default:             html = homePage();
    }
    app.innerHTML = `<div class="page-content">${html}</div>`;
  }
  
  render();
  updateBadge();