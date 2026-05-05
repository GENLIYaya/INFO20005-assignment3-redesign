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
    swatches:[{c:'#C0282A',n:'Sweetheart Red'},{c:'#F5CAC3',n:'Blush Pink'}],
    swatchImages:[
      'assets/products/sweet-heart.webp',
      'assets/products/sweet-heart-2.webp'
    ],
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
    swatches:[{c:'#2B4580',n:'Navy Lines'},{c:'#4A9460',n:'Forest Green'},{c:'#C94040',n:'Cherry Red'},{c:'#D4A820',n:'Mustard'}],
    swatchImages:[
      'assets/products/cup1.webp',
      'assets/products/cup1-green.webp',
      'assets/products/cup1-red.webp',
      'assets/products/cup1-yellow.webp'
    ],
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
    swatches:[{c:'#4A7DB5',n:'Blue White'},{c:'#F7F1E8',n:'Cream'}],
    swatchImages:[
      'assets/products/gift-mug-1.webp',
      'assets/products/inked-mug.webp'
    ],
    accordion:{
      details:'Illustrated earthenware mug, approx. 320ml.',
      care:'Top-rack dishwasher safe.',
      shipping:'Free tracked shipping over $75.'
    }
  },
  { id:'sage',
    name:'Atlantic Turtle Box',
    image:'assets/products/ATLANTIC TURTLE BOX.webp',
    imageAlt:'Atlantic Turtle Box by Jones & Co',
    cat:'decorating',
    catLabel:'Decorating',
    price:68,
    comparePrice:null,
    rating:4.9,
    reviews:41,
    stock:'in',
    isNew:true,
    desc:'A beautifully crafted decorative box featuring an Atlantic turtle motif. Hand-painted in earthy teal tones — a statement piece for a shelf, coffee table or bedside.',
    swatches:[{c:'#3A8A7C',n:'Teal'},{c:'#F7F1E8',n:'Cream'}],
    accordion:{
      details:'Hand-painted earthenware box with lid, approx. 12cm × 8cm. Decorative use.',
      care:'Wipe with a soft dry cloth.',
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
    comparePrice:98, 
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
    comparePrice:38,
    rating:4.5,
    reviews:47,
    stock:'in',
    isNew:false,
    desc:'Everyday tumbler featuring a cheerful lemon illustration. Stackable and easy to hold.',
    swatches:[{c:'#E8C840',n:'Lemon Yellow'},{c:'#F6B060',n:'Honey'}],
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
    comparePrice:120, 
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
  orders: [],
  currentOrderId: null,
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
                <div class="cat-icon wallart">
                <img class="cat-thumb" src="assets/products/FABLE SUN PINK HEART.webp" alt="Wall Art">
                </div>
                <div class="cat-name">Wall Art</div>
                <div class="cat-sub">Capiz shell discs, prints and statement pieces to lift a room.</div>
            </button>

            <button class="cat-card" data-route="shop" data-filter="decorating">
                <div class="cat-icon decorating">
                <img class="cat-thumb" src="assets/products/vase1.webp" alt="Decorating">
                </div>
                <div class="cat-name">Decorating</div>
                <div class="cat-sub">Vases, mugs and ornaments for display and everyday style.</div>
            </button>

            <button class="cat-card" data-route="shop" data-filter="tableware">
                <div class="cat-icon tableware">
                <img class="cat-thumb" src="assets/products/sweet-heart.webp" alt="Tableware">
                </div>
                <div class="cat-name">Tableware</div>
                <div class="cat-sub">Bowls, jugs and platters, hand-finished for the dinner table.</div>
            </button>

            <button class="cat-card" data-route="shop" data-filter="sale">
                <div class="cat-icon sale">
                <span style="color:white;font-family:'Fraunces',serif;font-weight:700;font-size:18px;">%</span>
                </div>
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


/* ----- PRODUCT DETAIL (with "You May Also Like" rail, non-AI) ----- */
function productPage() {
    const p = PRODUCTS.find(x => x.id === state.currentId) || PRODUCTS[0];
    // Related = same category, exclude self, top 4 by rating
    const related = PRODUCTS
      .filter(x => x.cat === p.cat && x.id !== p.id)
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 4);
    const galleryImgs = (p.swatchImages && p.swatchImages.length > 1) ? p.swatchImages : [p.image];
    return `
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <button class="back-btn" data-route="shop">Back</button>
        <div class="crumbs">
          <a href="#home" data-route="home">Home</a>
          <span class="sep">›</span>
          <a href="#shop" data-route="shop">Shop</a>
          <span class="sep">›</span>
          <span class="current">${esc(p.name)}</span>
        </div>
      </nav>
  
      <div class="pdp-layout">
        <div class="pdp-media">
          <div class="pdp-main-img-wrap">
            <img class="pdp-img" src="${esc(p.image)}" alt="${esc(p.imageAlt || p.name)}" loading="lazy">
          </div>
          ${galleryImgs.length > 1 ? `
            <div class="pdp-thumbs">
              ${galleryImgs.map((src, i) => `
                <button class="pdp-thumb ${i === 0 ? 'is-active' : ''}" data-thumb-src="${esc(src)}" aria-label="View image ${i + 1}">
                  <img src="${esc(src)}" alt="${esc(p.name)} view ${i + 1}" loading="lazy">
                </button>
              `).join('')}
            </div>
          ` : ''}
        </div>
  
        <div class="pdp-info">
          <span class="pdp-cat">${esc(p.catLabel)}</span>
          <h1 class="pdp-title">${esc(p.name)}</h1>
          <div class="pdp-rating">
            <span class="stars">${stars(p.rating)}</span>
            <span>${p.rating} (${p.reviews} reviews)</span>
          </div>
          <div class="pdp-price-row">
            <div class="pdp-price">${dollars(p.price)}</div>
            ${p.comparePrice ? `<div class="pdp-compare">${dollars(p.comparePrice)}</div>` : ''}
          </div>
          <p class="pdp-desc">${esc(p.desc)}</p>
  
          <div class="pdp-options">
            <span class="opt-label" id="pdpColourLabel">Colour: ${esc(p.swatches[0].n)}</span>
            <div class="swatches">
              ${p.swatches.map((s, i) => {
                const imgSrc = p.swatchImages && p.swatchImages[i] ? p.swatchImages[i] : p.image;
                return `<button class="swatch ${i === 0 ? 'is-active' : ''}" style="background:${s.c}" aria-label="${esc(s.n)}" data-swatch-img="${esc(imgSrc)}" data-swatch-name="${esc(s.n)}" title="${esc(s.n)}"></button>`;
              }).join('')}
            </div>
          </div>
  
          <div class="pdp-options">
            <span class="opt-label">Quantity</span>
            <div class="qty-row" id="pdpQty">
              <button data-qty-delta="-1">−</button>
              <span id="pdpQtyVal">1</span>
              <button data-qty-delta="1">+</button>
            </div>
          </div>
  
          <div class="pdp-actions">
            <button class="btn btn-primary" id="pdpAdd">Add to cart</button>
            <button class="btn btn-secondary" data-route="cart">View cart</button>
          </div>
  
          <div class="pdp-accordion">
            <details open>
              <summary>Product details</summary>
              <p>${esc(p.accordion.details)}</p>
            </details>
            <details>
              <summary>Care &amp; use</summary>
              <p>${esc(p.accordion.care)}</p>
            </details>
            <details>
              <summary>Shipping &amp; returns</summary>
              <p>${esc(p.accordion.shipping)}</p>
            </details>
          </div>
        </div>
      </div>
  
      ${related.length ? `
        <section class="related-rail">
          <h2>You may also like</h2>
          <div class="product-grid">
            ${related.map(x => card(x, { showNew: false })).join('')}
          </div>
        </section>
      ` : ''}
    `;
  }
  
  /* ----- CART ----- */
  function cartPage() {
    const totals = computeTotals();
    const empty = state.cart.length === 0;
    return `
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <button class="back-btn" data-route="shop">Back</button>
        <div class="crumbs">
          <a href="#home" data-route="home">Home</a>
          <span class="sep">›</span>
          <span class="current">Shopping cart</span>
        </div>
      </nav>
  
      <h1 class="serif" style="font-size: var(--fs-2xl); margin-bottom: var(--sp-5);">Your cart</h1>
  
      ${empty ? `
        <div class="empty">
          <h3 class="serif">Your cart is empty</h3>
          <p>Browse our collection and add a piece you love.</p>
          <button class="btn btn-primary" style="margin-top: var(--sp-4);" data-route="shop">Shop now</button>
        </div>
      ` : `
        <div class="cart-layout">
          <div class="cart-rows">
            ${state.cart.map(line => {
              const p = PRODUCTS.find(x => x.id === line.id);
              return `
                <div class="cart-row" data-line="${p.id}">
                  <div class="cart-thumb">
                    <img class="cart-thumb-img" src="${esc(p.image)}" alt="${esc(p.imageAlt || p.name)}" loading="lazy">
                  </div>
                  <div class="cart-row-info">
                    <div class="cart-row-name">${esc(p.name)}</div>
                    <div class="cart-row-meta">${esc(p.catLabel)} · ${dollars(p.price)} each</div>
                    <div class="cart-row-bottom">
                      <div class="qty-row">
                        <button data-line-delta="-1">−</button>
                        <span>${line.qty}</span>
                        <button data-line-delta="1">+</button>
                      </div>
                      <div style="display:flex; align-items:center; gap: var(--sp-3);">
                        <button class="remove-link" data-remove>Remove</button>
                        <div class="cart-row-price">${dollars(p.price * line.qty)}</div>
                      </div>
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
  
          <aside class="cart-summary">
            <div class="summary-title">Order summary</div>
            <div class="summary-row"><span>Subtotal</span><span>${dollars(totals.subtotal)}</span></div>
            <div class="summary-row"><span>Shipping</span><span>${totals.shipping === 0 ? 'Free' : dollars(totals.shipping)}</span></div>
            ${state.appliedCoupon ? `
              <div class="summary-row discount">
                <span>Discount (${state.appliedCoupon.code})</span>
                <span>−${dollars(totals.discount)}</span>
              </div>` : ''}
            <div class="summary-row total"><span>Total</span><span>${dollars(totals.total)}</span></div>
  
            <div class="promo-input-row">
              <input class="promo-input" id="promoInput" placeholder="Try ${CONFIG.coupons.JONES10.code} or ${CONFIG.coupons.FIRST10.code}">
              <button class="promo-apply" id="promoApply">Apply</button>
            </div>
            <div class="coupon-hint">
              Use <code>${CONFIG.coupons.JONES10.code}</code> or
              <code>${CONFIG.coupons.FIRST10.code}</code> for 10% off your order.
            </div>
  
            <button class="btn btn-primary full-w" style="margin-top: var(--sp-4);" data-route="checkout">
              Proceed to checkout
            </button>
  
            <div class="trust-cues">
              <div><strong>Secure</strong><span>SSL checkout</span></div>
              <div><strong>21-day</strong><span>Returns</span></div>
              <div><strong>48-hour</strong><span>Dispatch</span></div>
            </div>
          </aside>
        </div>
      `}
    `;
  }

/* ----- CHECKOUT ----- */
function checkoutPage() {
    const totals = computeTotals();
    return `
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <button class="back-btn" data-route="cart">Back</button>
        <div class="crumbs">
          <a href="#home" data-route="home">Home</a>
          <span class="sep">›</span>
          <a href="#cart" data-route="cart">Cart</a>
          <span class="sep">›</span>
          <span class="current">Checkout</span>
        </div>
      </nav>
  
      <div class="stepper">
        <div class="step done">1. Cart</div>
        <div class="step active">2. Details &amp; payment</div>
        <div class="step">3. Confirmation</div>
      </div>
  
      <h1 class="serif" style="font-size: var(--fs-xl); margin-bottom: var(--sp-5);">Delivery &amp; payment</h1>
  
      <div class="cart-layout">
        <form class="form-grid" id="checkoutForm" novalidate>
          <div class="field">
            <label for="fName">Full name</label>
            <input id="fName" name="name" type="text" required minlength="2" autocomplete="name">
            <span class="err">Please enter your full name.</span>
          </div>
          <div class="row-2">
            <div class="field">
              <label for="fEmail">Email</label>
              <input id="fEmail" name="email" type="email" required autocomplete="email">
              <span class="err">Please enter a valid email.</span>
            </div>
            <div class="field">
              <label for="fPhone">Phone</label>
              <input id="fPhone" name="phone" type="tel" required pattern="[0-9 +()-]{8,}" autocomplete="tel">
              <span class="err">Please enter a valid phone number.</span>
            </div>
          </div>
          <div class="field">
            <label for="fAddr">Delivery address</label>
            <input id="fAddr" name="addr" type="text" required minlength="6" autocomplete="street-address">
            <span class="err">Please enter your delivery address.</span>
          </div>
          <div class="row-2">
            <div class="field">
              <label for="fCity">City</label>
              <input id="fCity" name="city" type="text" required autocomplete="address-level2">
              <span class="err">Please enter your city.</span>
            </div>
            <div class="field">
              <label for="fPost">Postcode</label>
              <input id="fPost" name="post" type="text" required pattern="[0-9]{4}" inputmode="numeric">
              <span class="err">Please enter a 4-digit postcode.</span>
            </div>
          </div>
          <div class="field">
            <label for="fCard">Card number</label>
            <input id="fCard" name="card" type="text" required pattern="[0-9 ]{13,19}" inputmode="numeric" placeholder="4242 4242 4242 4242" autocomplete="cc-number">
            <span class="err">Please enter a valid card number.</span>
          </div>
          <div class="row-2">
            <div class="field">
              <label for="fExp">Expiry</label>
              <input id="fExp" name="exp" type="text" required pattern="[0-9]{2}/[0-9]{2}" placeholder="MM/YY" autocomplete="cc-exp">
              <span class="err">Format MM/YY.</span>
            </div>
            <div class="field">
              <label for="fCvc">CVC</label>
              <input id="fCvc" name="cvc" type="text" required pattern="[0-9]{3,4}" inputmode="numeric" autocomplete="cc-csc">
              <span class="err">3–4 digits.</span>
            </div>
          </div>
          <button type="submit" class="btn btn-primary full-w">Place order — ${dollars(totals.total)}</button>
        </form>
  
        <aside class="cart-summary">
          <div class="summary-title">Order summary</div>
          ${state.cart.map(line => {
            const p = PRODUCTS.find(x => x.id === line.id);
            return `<div class="summary-row"><span>${esc(p.name)} × ${line.qty}</span><span>${dollars(p.price * line.qty)}</span></div>`;
          }).join('')}
          <div class="summary-row"><span>Shipping</span><span>${totals.shipping === 0 ? 'Free' : dollars(totals.shipping)}</span></div>
          ${state.appliedCoupon ? `<div class="summary-row discount"><span>Discount (${state.appliedCoupon.code})</span><span>−${dollars(totals.discount)}</span></div>` : ''}
          <div class="summary-row total"><span>Total</span><span>${dollars(totals.total)}</span></div>
          <div class="coupon-hint" style="margin-top:var(--sp-4)">
            Use <code>${CONFIG.coupons.JONES10.code}</code> or
            <code>${CONFIG.coupons.FIRST10.code}</code> at the cart for 10% off.
          </div>
        </aside>
      </div>
    `;
  }
  
  /* ----- CONFIRMATION ----- */
  function confirmationPage() {
    const orderId = state.currentOrderId || ('#JC-' + Math.floor(100000 + Math.random() * 900000));
    return `
      <div class="confirmation">
        <div class="check">✓</div>
        <h1>Thank you, your order is confirmed.</h1>
        <p>We've sent a confirmation to your email. Your hand-painted ceramics will be carefully packed and dispatched within 48 hours.</p>
        <div class="order-id">${orderId}</div>
        <div style="display:flex;gap:var(--sp-3);justify-content:center;flex-wrap:wrap;">
          <button class="btn btn-ghost" data-route="account">View order</button>
          <button class="btn btn-primary" data-route="home">Continue shopping</button>
        </div>
      </div>
    `;
  }

  /* ----- ACCOUNT / ORDER HISTORY ----- */
  function accountPage() {
    return `
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <button class="back-btn" data-route="home">Back</button>
        <div class="crumbs">
          <a href="#home" data-route="home">Home</a>
          <span class="sep">›</span>
          <span class="current">My Account</span>
        </div>
      </nav>

      <div class="account-layout">
        <aside class="account-sidebar">
          <div class="account-avatar"><i class="fa-regular fa-user"></i></div>
          <div class="account-name">My Account</div>
          <div class="account-meta">
            <span>${state.orders.length} order${state.orders.length !== 1 ? 's' : ''}</span>
            <span>·</span>
            <span>${state.wishlist.size} saved</span>
          </div>
          <button class="btn btn-ghost full-w" data-route="shop" style="margin-top:var(--sp-3);">Continue shopping</button>
        </aside>

        <div class="account-main">
          <h2 class="serif account-section-title">Order History</h2>
          ${state.orders.length === 0 ? `
            <div class="empty">
              <h3 class="serif">No orders yet</h3>
              <p>Your completed orders will appear here.</p>
              <button class="btn btn-primary" style="margin-top:var(--sp-4);" data-route="shop">Start shopping</button>
            </div>
          ` : `
            <div class="order-history-list">
              ${state.orders.map(order => `
                <div class="order-history-card">
                  <div class="order-history-head">
                    <div class="order-history-id-wrap">
                      <span class="order-history-label">Order</span>
                      <span class="order-history-ref">${esc(order.id)}</span>
                    </div>
                    <div class="order-history-date">${esc(order.date)}</div>
                    <div class="order-history-total">${dollars(order.total)}</div>
                    <span class="order-history-status">Dispatched</span>
                  </div>
                  <div class="order-history-items">
                    ${order.items.map(item => `
                      <div class="order-history-item">
                        <span class="order-history-item-name">${esc(item.name)}</span>
                        <span class="order-history-item-qty">× ${item.qty}</span>
                        <span class="order-history-item-price">${dollars(item.price * item.qty)}</span>
                      </div>
                    `).join('')}
                  </div>
                </div>
              `).join('')}
            </div>
          `}
        </div>
      </div>
    `;
  }
    










/* ----- JOURNAL ----- */
function journalPage() {
  const articles = [
    {
      img: 'assets/products/cup1.webp',
      cat: 'Home Styling',
      title: 'How to style ceramics on an open shelf',
      excerpt: 'Open shelving is one of the best ways to let handmade pieces breathe. Here\'s how we\'d approach building a shelf that feels layered, warm and genuinely yours.',
      date: '12 Apr 2026'
    },
    {
      img: 'assets/products/FABLE SUN PINK HEART.webp',
      cat: 'Our Makers',
      title: 'Capiz shell: a tradition from the Philippines',
      excerpt: 'The Capiz shell has been gathered, cleaned and crafted into objects of beauty in the Philippines for generations. We visited our making partners to see it first-hand.',
      date: '3 Mar 2026'
    },
    {
      img: 'assets/products/sweet-heart.webp',
      cat: 'New Arrivals',
      title: 'The colour story behind our Sweetheart collection',
      excerpt: 'Every collection begins with a mood board, a conversation, and a question: what does joy look like in 2026? Our design team shares how Sweetheart came to life.',
      date: '18 Feb 2026'
    },
    {
      img: 'assets/products/vase1.webp',
      cat: 'Lifestyle',
      title: 'Small rituals: how ceramics shape your morning',
      excerpt: 'There\'s something about reaching for a favourite mug that signals the start of the day. We asked five customers to share the pieces they use every morning.',
      date: '28 Jan 2026'
    }
  ];
  return `
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <button class="back-btn" data-route="home">Back</button>
      <div class="crumbs">
        <a href="#home" data-route="home">Home</a>
        <span class="sep">›</span>
        <span class="current">Journal</span>
      </div>
    </nav>

    <div class="journal-header">
      <span class="eyebrow">Stories &amp; Ideas</span>
      <h1 class="serif">The Jones &amp; Co Journal</h1>
      <p>Behind the scenes, styling inspiration and the stories that shape our world.</p>
    </div>

    <div class="journal-featured">
      <div class="journal-featured-img">
        <img src="assets/HERO.png" alt="Jones &amp; Co ceramics in a home setting" loading="lazy">
      </div>
      <div class="journal-featured-copy">
        <span class="journal-cat">Behind the Scenes</span>
        <h2 class="serif">The story behind the Chino Mug — twenty years of a morning ritual</h2>
        <p>It started with a sketch on a Sydney dining table and a conviction that a mug should make you feel something every morning. Two decades on, the Chino Mug is still hand-painted the same way it always was — by skilled craftspeople in Vietnam, one stripe at a time.</p>
        <p>We sat down with founder Kate Jones to talk about the origins of the piece that started it all, and why she still reaches for it every single morning.</p>
        <div style="margin-top:var(--sp-2);">
          <span class="journal-card-date">28 Apr 2026</span>
        </div>
      </div>
    </div>

    <div class="section-head" style="margin-top:var(--sp-7); margin-bottom:var(--sp-5);">
      <div class="lhs">
        <span class="eyebrow">More stories</span>
        <h2 class="section-title">Latest from the journal</h2>
      </div>
    </div>
    <div class="journal-grid">
      ${articles.map(a => `
        <article class="journal-card">
          <div class="journal-card-img">
            <img src="${esc(a.img)}" alt="${esc(a.title)}" loading="lazy">
          </div>
          <div class="journal-card-body">
            <span class="journal-card-cat">${esc(a.cat)}</span>
            <h3 class="journal-card-title">${esc(a.title)}</h3>
            <p class="journal-card-excerpt">${esc(a.excerpt)}</p>
            <div class="journal-card-date">${esc(a.date)}</div>
          </div>
        </article>
      `).join('')}
    </div>
  `;
}

/* ----- ABOUT ----- */
function aboutPage() {
  const timeline = [
    { year: '2004', text: "Jones & Co is founded by Kate Jones in Surry Hills, Sydney, with a belief that everyday objects should bring genuine joy." },
    { year: '2006', text: "The brand's first stockists come on board across New South Wales and Victoria. Word spreads quickly about the quality and character of the pieces." },
    { year: '2010', text: "The Capiz shell wall art range launches, bringing a new material and a new craft tradition — handmade in the Philippines — into the Jones & Co family." },
    { year: '2015', text: "Jones & Co launches its online store, taking handmade Australian-designed ceramics to homes across the country and internationally." },
    { year: '2020', text: "The Chino Mug series expands with new colourways, cementing it as one of Australia's most recognised ceramic pieces." },
    { year: '2024', text: "Twenty years of Jones & Co. The brand is still designing from Surry Hills, still handmade, and still bringing colour to Australian homes." }
  ];
  return `
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <button class="back-btn" data-route="home">Back</button>
      <div class="crumbs">
        <a href="#home" data-route="home">Home</a>
        <span class="sep">›</span>
        <span class="current">About</span>
      </div>
    </nav>

    <div class="about-hero">
      <img src="assets/HERO.png" alt="Jones &amp; Co ceramics — handmade joy for the home" loading="lazy">
      <div class="about-hero-overlay">
        <span class="eyebrow" style="color:var(--white);background:rgba(255,255,255,0.18);margin-bottom:var(--sp-3);">Our Story</span>
        <h1 class="serif">Made with love.<br>Designed in Sydney.</h1>
      </div>
    </div>

    <div class="about-story">
      <div class="about-story-text">
        <span class="eyebrow">Who we are</span>
        <h2 class="serif">Bringing colour and character to Australian homes since 2004.</h2>
        <p>Jones &amp; Co was born out of a belief that the objects we surround ourselves with every day should carry character. Founded by Kate Jones in Sydney's Surry Hills, we set out to design hand-painted ceramics that felt genuinely joyful — full of colour, pattern and life.</p>
        <p>Twenty years on, our pieces sit on dining tables, open shelves and walls across Australia and around the world. Every mug, vase, bowl and Capiz shell wall piece is still designed here in Sydney and made by craftspeople we've worked with for years.</p>
        <p>We are not a fast-fashion homewares brand. We do not design for trends. We design for the long haul — for the mug you reach for every morning, the vase that makes the corner of a room feel alive, the wall piece your guests always ask about.</p>
      </div>
      <div class="about-story-img">
        <img src="assets/collection.jpg" alt="Jones &amp; Co ceramics collection" loading="lazy">
      </div>
    </div>

    <div class="about-mission">
      <p class="about-mission-quote">"We make things that make people happy. That sounds simple, but it's genuinely hard to do — and it requires good design, honest colour, quality materials, and the skill of the people who paint each piece by hand."</p>
      <p class="about-mission-attr">— Kate Jones, Founder</p>
    </div>

    <div class="about-values">
      <h2 class="serif">What we stand for</h2>
      <div class="about-values-grid">
        <div class="about-value-card">
          <div class="about-value-icon">✦</div>
          <h3 class="serif">Handmade character</h3>
          <p>Every item is painted by hand. That means no two pieces are exactly alike — each one carries the mark of the person who made it.</p>
        </div>
        <div class="about-value-card">
          <div class="about-value-icon">◉</div>
          <h3 class="serif">Designed in Australia</h3>
          <p>All our designs originate in our Surry Hills studio. Our team works from colour studies, pattern research and a love of objects that make everyday life better.</p>
        </div>
        <div class="about-value-card">
          <div class="about-value-icon">♡</div>
          <h3 class="serif">Made with care</h3>
          <p>We work with long-term factory partners in Vietnam and the Philippines — skilled family workshops we've collaborated with for years, who bring our designs to life.</p>
        </div>
        <div class="about-value-card">
          <div class="about-value-icon">⊛</div>
          <h3 class="serif">Built to last</h3>
          <p>Our ceramics aren't trend pieces. They're made from quality earthenware and stoneware, designed to be used every day, season after season.</p>
        </div>
      </div>
    </div>

    <div class="about-makers">
      <div class="section-head">
        <div class="lhs">
          <span class="eyebrow">Where it's made</span>
          <h2 class="section-title serif">Skilled hands, two countries.</h2>
        </div>
      </div>
      <div class="makers-grid">
        <div class="maker-card">
          <div class="maker-card-img">
            <img src="assets/products/sweet-heart.webp" alt="Ceramic workshop — Vietnam" loading="lazy">
          </div>
          <div class="maker-card-copy">
            <span class="eyebrow">Vietnam</span>
            <h3 class="serif">Ceramic tableware &amp; decorating</h3>
            <p>Our ceramic tableware and decorative pieces are handmade at our partner workshops in Vietnam's ceramic heartland. Each piece is shaped and painted by craftspeople who have worked in this industry for generations.</p>
            <p>The deep industry knowledge, the confident brushstrokes, the consistency across every run — these are the things that simply cannot be replicated by machine. It's why we've worked with the same factories since the beginning.</p>
          </div>
        </div>
        <div class="maker-card">
          <div class="maker-card-img">
            <img src="assets/products/FABLE SUN PINK HEART.webp" alt="Capiz shell craft — Philippines" loading="lazy">
          </div>
          <div class="maker-card-copy">
            <span class="eyebrow">Philippines</span>
            <h3 class="serif">Capiz shell wall art</h3>
            <p>Our Capiz shell wall art is handmade in the Philippines, where traditional shell crafting has been practiced for generations. Each panel and disc is assembled by hand from individually cleaned and prepared Capiz shells.</p>
            <p>The natural variation in each shell — its translucency, the way it catches light — makes every piece genuinely unique. No two wall pieces will ever be exactly the same.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="about-timeline">
      <h2 class="serif">Twenty years in the making</h2>
      <div class="timeline-list">
        ${timeline.map(t => `
          <div class="timeline-item">
            <div class="timeline-year">${esc(t.year)}</div>
            <p class="timeline-text">${esc(t.text)}</p>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="about-cta">
      <span class="eyebrow" style="color:var(--honey)">Ready to explore?</span>
      <h2 class="serif">Find your next favourite piece.</h2>
      <p>Browse our latest collections — from hand-painted Chino Mugs to Capiz shell wall art. Designed in Sydney, made with love.</p>
      <div style="display:flex;gap:var(--sp-3);flex-wrap:wrap;justify-content:center;">
        <button class="btn btn-primary" data-route="shop">Shop all collections</button>
        <button class="btn btn-ghost" data-route="journal">Read the journal</button>
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

  /* PDP thumbnail click → swap main image */
  const th = e.target.closest('.pdp-thumb');
  if (th) {
    document.querySelectorAll('.pdp-thumb').forEach(t => t.classList.remove('is-active'));
    th.classList.add('is-active');
    const pdpImg = document.querySelector('.pdp-img');
    if (pdpImg && th.dataset.thumbSrc) pdpImg.src = th.dataset.thumbSrc;
    return;
  }

  /* PDP swatch click → swap image + update colour label */
  if (e.target.matches('.swatch')) {
    document.querySelectorAll('.swatch').forEach(s => s.classList.remove('is-active'));
    e.target.classList.add('is-active');
    const pdpImg = document.querySelector('.pdp-img');
    if (pdpImg && e.target.dataset.swatchImg) {
      pdpImg.src = e.target.dataset.swatchImg;
    }
    const colLabel = document.getElementById('pdpColourLabel');
    if (colLabel && e.target.dataset.swatchName) {
      colLabel.textContent = `Colour: ${e.target.dataset.swatchName}`;
    }
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

  /* Search result item → go to product */
  const sr = e.target.closest('.search-result-item');
  if (sr) {
    closeSearch();
    go('product', sr.dataset.pid);
    return;
  }

  /* Search chip */
  const sc = e.target.closest('[data-search]');
  if (sc) {
    const val = sc.dataset.search;
    document.getElementById('searchInput').value = val;
    renderSearchResults(val);
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
  const _totals = computeTotals();
  const _oid = '#JC-' + Math.floor(100000 + Math.random() * 900000);
  state.currentOrderId = _oid;
  state.orders.unshift({
    id: _oid,
    date: new Date().toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' }),
    items: state.cart.map(l => {
      const p = PRODUCTS.find(x => x.id === l.id);
      return { name: p.name, qty: l.qty, price: p.price };
    }),
    total: _totals.total
  });
  go('confirmation');
  state.cart = [];
  state.appliedCoupon = null;
  updateBadge();
});
document.body.addEventListener('blur', (e) => {
  if (e.target.matches('#checkoutForm input')) validateField(e.target.closest('.field'));
}, true);
document.body.addEventListener('change', (e) => {
  if (e.target.id === 'sortSel') { state.sort = e.target.value; render(); }
});

/* Drawer + search overlay */
function openMenu()  { document.getElementById('drawer').classList.add('open');  document.getElementById('drawerScrim').classList.add('open');  document.body.classList.add('locked'); }
function closeMenu() { document.getElementById('drawer').classList.remove('open'); document.getElementById('drawerScrim').classList.remove('open'); document.body.classList.remove('locked'); }
function openSearch()  { document.getElementById('searchOverlay').classList.add('open'); }
function closeSearch() {
  document.getElementById('searchOverlay').classList.remove('open');
  const inp = document.getElementById('searchInput');
  if (inp) inp.value = '';
  const res = document.getElementById('searchResults');
  if (res) { res.hidden = true; res.innerHTML = ''; }
}

function renderSearchResults(query) {
  const el = document.getElementById('searchResults');
  if (!el) return;
  const q = query.trim().toLowerCase();
  if (!q) { el.hidden = true; el.innerHTML = ''; return; }
  const matches = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.catLabel.toLowerCase().includes(q) ||
    (p.desc && p.desc.toLowerCase().includes(q))
  ).slice(0, 6);
  el.hidden = false;
  if (matches.length === 0) {
    el.innerHTML = '<p class="search-no-results">No products found for "' + esc(query) + '"</p>';
    return;
  }
  el.innerHTML = matches.map(p => `
    <button class="search-result-item" data-pid="${esc(p.id)}">
      <div class="search-result-img">
        <img src="${esc(p.image)}" alt="${esc(p.imageAlt || p.name)}" loading="lazy">
      </div>
      <div class="search-result-info">
        <div class="search-result-name">${esc(p.name)}</div>
        <div class="search-result-cat">${esc(p.catLabel)}</div>
      </div>
      <div class="search-result-price">${dollars(p.price)}</div>
    </button>
  `).join('');
}

document.getElementById('menuOpen').addEventListener('click', openMenu);
document.getElementById('menuClose').addEventListener('click', closeMenu);
document.getElementById('drawerScrim').addEventListener('click', closeMenu);
document.getElementById('searchOpen').addEventListener('click', openSearch);
document.getElementById('searchClose').addEventListener('click', closeSearch);
document.getElementById('searchOverlay').addEventListener('click', (e) => {
  if (e.target.id === 'searchOverlay') closeSearch();
});
document.getElementById('searchInput').addEventListener('input', (e) => {
  renderSearchResults(e.target.value);
});
document.getElementById('searchInput').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const q = e.target.value.trim().toLowerCase();
    const first = PRODUCTS.find(p => p.name.toLowerCase().includes(q) || p.catLabel.toLowerCase().includes(q));
    if (first) { closeSearch(); go('product', first.id); }
  }
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
//   看 state.route 是什么如果是 home → 调用 homePage()，如果是 shop → 调用 shopPage()。如果是 product → 调用 productPage()...最后把得到的 HTML 放进 #app
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
      case 'account':      html = accountPage(); break;
      case 'journal':      html = journalPage(); break;
      case 'about':        html = aboutPage(); break;
      default:             html = homePage();
    }
    app.innerHTML = `<div class="page-content">${html}</div>`;
  }
  
  render();
  updateBadge();

//   render pages first, then update numbers on shopping icon