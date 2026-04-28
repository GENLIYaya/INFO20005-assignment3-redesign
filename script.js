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
    name:'Sage Stem Vase', 
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
    name:'Sunset Serving Bowl', 
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
    name:'Coral Speckle Tumbler', 
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
    name:'Capiz Shell Flower Wall Art', 
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
    name:'Zebra Finch Wall Print', 
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
    name:'Bloom Capiz Wall Disc', 
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
        ${newPill}
        <span class="stock-pill ${stockClass}">${stockText}</span>
        <button class="wish-btn ${isSaved ? 'saved' : ''}" data-wish="${p.id}" aria-label="Save to wishlist">
         <i class="fa-regular fa-heart"></i>
        </button>
        <button class="quick-add" data-add="${p.id}" aria-label="Quick add ${esc(p.name)} to cart" title="Quick add">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 2l1.5 3h9L18 2"/><path d="M3 6h18l-2 14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L3 6z"/><line x1="12" y1="11" x2="12" y2="17"/><line x1="9" y1="14" x2="15" y2="14"/></svg>
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
