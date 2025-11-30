const authorDatabase = {
  "Thanut": {
    photo: "../assets/images/authors/Thanut.png",
    email: "tganat@gmail.com",
    tel: "099-XXX-XXXX",
    ig: "@t3k_k3t"
  },
  "Chanon": {
    photo: "../assets/images/authors/Chanon.png",
    email: "chanon.panu@kmutt.ac.th",
    tel: "097-242-7650",
    ig: "@cha__nonnnnuuu"
  },
  "Palise": {
    photo: "../assets/images/authors/Palise.png",
    email: "palise@example.com",
    tel: "0612279966",
    ig: "@anda.ey"
  },
  "Phurichaya": {
    photo: "../assets/images/authors/Phurichaya.png",
    email: "huteiei@example.com",
    tel: "1615156",
    ig: "@imgroothut"
  },
  "Natapat": {
    photo: "../assets/images/authors/Natapat.png",
    email: "natapat@example.com",
    tel: "1555555",
    ig: "@nat._.natapattt"
  },
  "Phruek": {
    photo: "../assets/images/authors/Phruek.png",
    email: "phruek@example.com",
    tel: "5652164",
    ig: "@lukjumpandalukjiab"
  },
  "Kadsan": {
    photo: "../assets/images/authors/Kadsan.png",
    email: "kadsan.com",
    tel: "0825617627",
    ig: "@_.grxmm"
  },
  "Unknown": {
    photo: "https://ui-avatars.com/api/?name=Unknown&background=333&color=fff",
    email: "contact@1103.com",
    tel: "-",
    ig: "-"
  }
};

let products = {
  data: [
    // --- MOTION ---
    {
      productName: "Pinball Kub",
      creator: "Thanut and Chanon",
      category: "Motion",
      price: "30",
      image: ["../assets/images/products/motion/Pinball-Kub.png"],
      link : "https://youtube.com/shorts/V3p1sLiSMY4?si=D2FqSnmT6DG6BDGR",
      description: "An exciting interactive pinball game with stunning visual effects and smooth gameplay mechanics.",
    },
    {
      productName: "Pinnball MooDeng",
      creator: "Palise and Phurichaya",
      category: "Motion",
      price: "30",
      image: ["../assets/images/products/motion/MooDeng.png"],
      link : "https://youtube.com/shorts/vsakwlxoLiE?si=lcwoLrjsv5Akaenh",
      description: "A creative twist on classic pinball featuring unique character designs and engaging gameplay.",
    },
    {
        productName: "Pinball SquidGame",
        creator: "Natapat and Phruek",
        category: "Motion",
        price: "99",
        image: ["../assets/images/products/motion/Squid-Game.png"],
        link : "https://youtube.com/shorts/jEXJYCXXauI?si=G2eAd28_JGBHWBXm",
        description: "Intense pinball action inspired by Squid Game, featuring dramatic sound and visuals.",
    },
    {
        productName: "Commercial Zesto",
        creator: "Palise and Phurichaya",
        category: "Motion",
        price: "29",
        image: ["../assets/images/products/motion/Zesto.png"],
        link : "https://youtu.be/6jnCxsetZOU?si=JocWj8Y4YUOm_GLN",
        description: "Professional commercial animation for Zesto brand, showcasing vibrant colors and dynamic motion design.",
    },
    {
        productName: "Commercial TheBoys",
        creator: "Thanut Chanon Natapat and Phruek",
        category: "Motion",
        price: "129",
        image: ["../assets/images/products/motion/The-Boys.png"],
        link : "https://youtu.be/Fic2XogwN_Q?si=PbyVuBab1319J22_",
        description: "Bold and edgy commercial animation inspired by The Boys series, featuring cute dolls and energetic visuals.",
    },
    {
        productName: "Lyrics Blindinglights",
        creator: "Thanut Chanon Natapat and Phruek",
        category: "Motion",
        price: "89",
        image: ["../assets/images/products/motion/Lyrics-Video.png"],
        link : "https://youtu.be/7o6vTnkpaH8?si=LECNkkEaVNiaSb05",
        description: "Stunning lyric video for Blinding Lights with synchronized animations and neon-inspired aesthetic.",
    },
    {
        productName: "Lyrics Luther",
        creator: "Palise and Phurichaya",
        category: "Motion",
        price: "189",
        image: ["../assets/images/products/motion/Love.png"],
        link : "https://youtu.be/McRPNVZ5KH4?si=4JaReRfKUKTVCajt",
        description: "Emotional and artistic lyric video featuring beautiful typography and meaningful visual storytelling.",
    },
    {
        productName: "Factory HarryPoter",
        creator: "Thanut Chanon Natapat and Phruek",
        category: "Motion",
        price: "49",
        image: ["../assets/images/products/motion/Factory-Tour.png"],
        link : "https://youtu.be/eRJAgB-QTr4?si=kgykhWqU0FMrTHeK",
        description: "Magical factory tour animation inspired by Harry Potter, showcasing how wands is made.",
    },
    {
        productName: "Factory Teletubbies",
        creator: "Palise and Phurichaya",
        category: "Motion",
        price: "49",
        image: ["../assets/images/products/motion/Teletubbies.png"],
        link : "https://youtu.be/DX67pN5OTYc?si=JPaNfGqUg5uL950-",
        description: "Colorful and playful factory tour animation with Teletubbies-inspired bright visuals and fun narrative.",
    },
    {
        productName: "Museum",
        creator: "1103production",
        category: "Motion",
        price: "49",
        image: ["../assets/images/products/motion/Meseum.png"],
        link : "https://youtu.be/tOT6WYASXvo?si=gD2u-D6shZwOB1Jr",
        description: "Museum walkthrough animation showcasing artistic exhibits and immersive visual experience.",
    },
     {
        productName: "Fossil",
        creator: "1103production",
        category: "Motion",
        price: "49",
        image: ["../assets/images/products/motion/Fossil.png"],
        link : "index.html",
        description: "Educational motion graphics exploring story of someone who have to study twice.",
    },
    {
        productName: "Loop",
        creator: "Natapat",
        category: "Motion",
        price: "49",
        image: ["../assets/images/products/motion/Loop.png"],
        link : "index.html",
        description: "Seamless loop animation using simple shape patterns and smooth transitions.",
    },
    {
        productName: "Lowlight",
        creator: "1103production",
        category: "Production",
        price: "49",
        image: ["../assets/images/products/production/Lowlight.jpg"],
        link : "index.html",
        description: "Capturing atmospheric low-light photography with dramatic shadows and ambient lighting of street at night.",
    },
    {
        productName: "Street",
        creator: "Phruek",
        category: "Production",
        price: "49",
        image: [
          "../assets/images/products/production/Street_jump.jpg",
          "../assets/images/products/production/Street_jump.webp",
          "../assets/images/products/production/Street_jump2.webp",
          "../assets/images/products/production/Street_jump3.webp"
        ],
        link : "index.html",
        description: "Dynamic street and abstract photography.",
    },
    {
        productName: "Food Dining",
        creator: "Palise Phurichaya Natapat and Thanut",
        category: "Production",
        price: "49",
        image: ["../assets/images/products/production/Food-Dining.jpg"],
        link : "index.html",
        description: "A photo shoot that's describe social inequality through the food lights and appearance.",
    },
    {
        productName: "Different",
        creator: "Phruek and Chanon",
        category: "Production",
        price: "49",
        image: ["../assets/images/products/production/Different.jpg"],
        link : "index.html",
        description: "Creative conceptual photography exploring unique perspectives and artistic visual storytelling.",
    },
    {
        productName: "Stock photo",
        creator: "Phruek",
        category: "Production",
        price: "49",
        image: ["../assets/images/products/production/Stock_jump.webp"],
        link : "index.html",
        description: "High-quality stock photography of oranges.",
    },
    {
        productName: "City",
        creator: "Phurichaya",
        category: "Production",
        price: "49",
        image: ["../assets/images/products/production/City.jpg"],
        link : "index.html",
        description: "Stunning cityscape photography capturing urban architecture, skylines, and metropolitan landscapes.",
    },
    {
        productName: "Leaf",
        creator: "Phruek and Chanon",
        category: "Production",
        price: "49",
        image: ["../assets/images/products/production/Leaf_jumpchanon.jpg"],
        link : "index.html",
        description: "Beautiful nature photography focusing on leaf that has a raindrop on it.",
    },
    {
        productName: "Goose",
        creator: "Phurichaya",
        category: "Production",
        price: "49",
        image: ["../assets/images/products/production/Duck_hut.webp"],
        link : "index.html",
        description: "Charming wildlife photography featuring geese in their natural habitat with candid moments.",
    },
    {
        productName: "BTS",
        creator: "Chanon",
        category: "Production",
        price: "49",
        image: ["../assets/images/products/production/BTS_chanon.jpg"],
        link : "index.html",
        description: "Behind-the-scenes production photography documenting creative processes and authentic moments.",
    },
    {
        productName: "Barn",
        creator: "Thanut",
        category: "Production",
        price: "49",
        image: ["../assets/images/products/production/Barn_TK.jpg"],
        link : "index.html",
        description: "Rustic barn photography capturing rural charm, weathered textures, and countryside aesthetics.",
    },
    {
        productName: "Military",
        creator: "Phruek",
        category: "Production",
        price: "49",
        image: ["../assets/images/products/production/Military.jpg"],
        link : "index.html",
        description: "Powerful military-themed photography showcasing strength, discipline, and tactical environments.",
    },
    {
        productName: "Building",
        creator: "Kadsan",
        category: "Production",
        price: "49",
        image: ["../assets/images/products/production/Building_Gram.webp"],
        link : "index.html",
        description: "Simple architecture, defined by light.",
    },
    {
        productName: "Cave",
        creator: "Phurichaya",
        category: "Production",
        price: "49",
        image: ["../assets/images/products/production/Cave_hut.webp"],
        link : "index.html",
        description: "Mysterious cave photography exploring natural formations, shadows, and underground beauty.",
    },
    {
        productName: "Hua Lum Phong",
        creator: "Kadsan",
        category: "Production",
        price: "49",
        image: ["../assets/images/products/production/HuaLumPhong_Gram.webp"],
        link : "index.html",
        description: "Architecture photograph focusing on a symmetrical train hall interior.",
    },
    {
        productName: "Meow",
        creator: "Phurichaya",
        category: "Production",
        price: "49",
        image: ["../assets/images/products/production/Meow_hut.webp"],
        link : "index.html",
        description: "Adorable cat photography featuring playful moments, expressions, and feline charm.",
    },
    {
        productName: "Silent Wills",
        creator: "All",
        category: "Production",
        price: "499",
        image: ["../assets/images/products/production/Silent-Wills.png"],
        link : "index.html",
        description: "Short horror film featuring intense suspense and scary moments in found footage style.",
    },
    {
        productName: "Photo Manipulation",
        creator: "Natapat",
        category: "GraphicDesign",
        price: "49",
        image: ["../assets/images/products/graphic/Photomanipulate_TK.png",
        "../assets/images/products/graphic/Photomanipulate_Nat1.png",
        "../assets/images/products/graphic/Photomanipulate_Nat (1).png",
        "../assets/images/products/graphic/Photomanipulate_Nat.png",
        


        ],
        link : "index.html",
        description: "Creative photo manipulation combining multiple elements into surreal and imaginative compositions.",
    },
    {
        productName: "Fujii",
        creator: "Phruek",
        category: "GraphicDesign",
        price: "49",
        image: ["../assets/images/products/graphic/Fujii_jump.png"],
        link : "index.html",
        description: "Modern graphic design featuring bold typography and vibrant colors for the Fujii brand identity.",
    },
     {
        productName: "Wallpaper",
        creator: "Natapat",
        category: "GraphicDesign",
        price: "49",
        image: [
            "../assets/images/products/graphic/Wallpaper_Nat2.png",
            "../assets/images/products/graphic/Wallpaper_Nat3.png",
            "../assets/images/products/graphic/Wallpaper_Nat4.png",
            "../assets/images/products/graphic/Wallpaper_Nat5.png",
            "../assets/images/products/graphic/Wallpaper_Nat6.png",
            "../assets/images/products/graphic/Wallpaper_Nat.png"
        ],
        link : "index.html",
        description: "Stunning digital wallpaper designs with artistic compositions perfect for desktop and mobile backgrounds.",
    },
    {
        productName: "Poster Korat",
        creator: "Phruek",
        category: "GraphicDesign",
        price: "49",
        image: [
          "../assets/images/products/graphic/Korat4_jump.jpg",
          "../assets/images/products/graphic/Korat3_jump.jpg",
          "../assets/images/products/graphic/Korat2_jump.jpg",
          "../assets/images/products/graphic/Korat1_jump.jpg",
        ],
        link : "index.html",
        description: "Eye-catching poster design representing Korat places with bold graphics and traditional elements.",
    },
    {
        productName: "Poster Kanom",
        creator: "Natapat",
        category: "GraphicDesign",
        price: "49",
        image: [
          "../assets/images/products/graphic/Commerc_Original.png",
          "../assets/images/products/graphic/Commerc_Chocolate.png",
          "../assets/images/products/graphic/Commerc_White.png",
          "../assets/images/products/graphic/Commerc_Cheese.png",
          "../assets/images/products/graphic/Commerc_Papika.png"
        ],
        link : "index.html",
        description: "Delicious commercial poster design for branding.",
    },
    {
        productName: "Shirt",
        creator: "Natapat",
        category: "GraphicDesign",
        price: "49",
        image: [
          "../assets/images/products/graphic/Natshirt.png",
          "../assets/images/products/graphic/Shirt_Nat. (4).png",
          "../assets/images/products/graphic/Shirt_Nat..png",
          "../assets/images/products/graphic/Shirt_Nat. (3).png",
          "../assets/images/products/graphic/Shirt.png",
          "../assets/images/products/graphic/Shirt_Nat. (2).png",
          "../assets/images/products/graphic/Shirt_Nat.png"
        ],
        link : "index.html",
        description: "Creative t-shirt design with unique graphics and streetwear-inspired aesthetic.",
    },
    {
        productName: "Poster Eminem",
        creator: "Phruek",
        category: "GraphicDesign",
        price: "49",
        image: ["../assets/images/products/graphic/Eminem_jump.png"],
        link : "index.html",
        description: "Bold hip-hop inspired poster design featuring Eminem with edgy typography and urban style.",
    },

    // --- ARTWORK ---
     {
        productName: "Mahito",
        creator: "Phreuk",
        category: "Artwork",
        price: "149",
        image: ["../assets/images/products/artwork/Mahito_jump.png"],
        link : "index.html",
        description: "Original character artwork of Mahito with detailed illustration and expressive anime-style design.",
    },
    {
        productName: "Pixel Pikachu",
        creator: "Phruek",
        category: "Artwork",
        price: "89",
        image: ["../assets/images/products/artwork/Pixel_jump.png"],
        link : "index.html",
        description: "Charming pixel art rendition of Pikachu with retro 8-bit gaming aesthetics and nostalgic appeal.",
    },
    {
        productName: "Pixel TK",
        creator: "Thanut",
        category: "Artwork",
        price: "49",
        image: ["../assets/images/products/artwork/TK-Pixel.png"],
        link : "index.html",
        description: "Custom pixel art portrait with detailed sprite work and personalized character design.",
    },
    {
        productName: "Pixel Shrek",
        creator: "Phurikchaya",
        category: "Artwork",
        price: "49",
        image: [
          "../assets/images/products/artwork/sherkhut.png",
           "../assets/images/products/artwork/ShrekBG_hut.jpg"
        ],
        link : "index.html",
        description: "Humorous pixel art of Shrek featuring iconic character design in retro gaming style.",
    },
     {
        productName: "Pixel Gram",
        creator: "Kadsan",
        category: "Artwork",
        price: "9",
        image: ["../assets/images/products/artwork/Pixel_gram.png"],
        link : "index.html",
        description: "Humorous pixel art of Shrek featuring iconic character design in retro gaming style.",
    },

    // --- WEB SERVICE ---
    {
      productName: "E-Commerce Platform",
      creator: "1103 Team",
      category: "WebService",
      price: "159",
      image: ["https://placehold.co/600x400/111/FFF?text=E-Commerce+System"],
      link: "#",
      description: "Complete e-commerce solution with inventory management, payment gateway integration, and responsive design for all devices.",
    },
    {
      productName: "Corporate Dashboard",
      creator: "Natapat and Phruek",
      category: "WebService",
      price: "299",
      image: ["https://placehold.co/600x400/000/0f0?text=Analytics+Dashboard"],
      link: "#",
      description: "Interactive data visualization dashboard for corporate analytics. Features real-time data updates and customizable widget layouts.",
    },
    {
      productName: "Portfolio V.1",
      creator: "Thanut",
      category: "WebService",
      price: "89",
      image: ["https://placehold.co/600x400/222/FFF?text=Minimal+Portfolio"],
      link: "#",
      description: "A clean, minimalist portfolio template designed for creatives. Includes smooth page transitions and gallery layouts.",
    },
    {
      productName: "Booking System",
      creator: "Chanon",
      category: "WebService",
      price: "199",
      image: ["https://placehold.co/600x400/333/FFF?text=Booking+App"],
      link: "#",
      description: "Web-based booking and reservation system. Users can schedule appointments, manage calendars, and receive automated notifications.",
    },
  ],
};

function addDefaults(product) {
  let imageArray;
  if (Array.isArray(product.image)) {
    imageArray = product.image;
  } else if (product.images && Array.isArray(product.images)) {
    imageArray = product.images;
  } else {
    imageArray = [product.image];
  }
  
  return {
    ...product,
    description: product.description || `${product.productName} - A creative ${product.category} project by ${product.creator}.`,
    images: imageArray,
    image: imageArray[0], 
    contactEmail: product.contactEmail || "contact@1103.com"
  };
}

function getAuthorsFromCreatorString(creatorString) {
    if (!creatorString || creatorString === "All" || creatorString === "1103production") {
        return ["Unknown"];
    }
    const potentialNames = creatorString.split(/ and | |,/);
    const foundAuthors = [];
    
    potentialNames.forEach(name => {
        const cleanName = name.trim();
        const dbKey = Object.keys(authorDatabase).find(key => 
            key.toLowerCase() === cleanName.toLowerCase() || 
            (cleanName.length > 3 && key.toLowerCase().includes(cleanName.toLowerCase()))
        );
        if (dbKey && !foundAuthors.includes(dbKey)) {
            foundAuthors.push(dbKey);
        }
    });

    return foundAuthors.length > 0 ? foundAuthors : ["Unknown"];
}

function createContactModalHTML() {
    if (document.getElementById('contact-author-modal')) return;

    const contactModal = document.createElement("div");
    contactModal.id = "contact-author-modal";
    contactModal.classList.add("contact-modal");
    contactModal.innerHTML = `
        <div class="contact-backdrop"></div>
        <div class="contact-container">
            <button class="contact-close" aria-label="Close">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                 </svg>
            </button>
            <div class="contact-header">
                <h2>Contact Author</h2>
            </div>
            <div id="contact-author-list" class="author-list"></div>
        </div>
    `;
    document.body.appendChild(contactModal);

    const closeBtn = contactModal.querySelector('.contact-close');
    const backdrop = contactModal.querySelector('.contact-backdrop');
    const closeFunc = () => {
        const container = contactModal.querySelector('.contact-container');
        gsap.to(container, {
            opacity: 0, scale: 0.9, duration: 0.3,
            onComplete: () => contactModal.classList.remove('active')
        });
    };
    closeBtn.addEventListener('click', closeFunc);
    backdrop.addEventListener('click', closeFunc);
}

function openContactModal(creatorString) {
    createContactModalHTML();
    const modal = document.getElementById('contact-author-modal');
    const listContainer = document.getElementById('contact-author-list');
    const container = modal.querySelector('.contact-container');
    
    // Member mapping for redirection to About page
    const memberMapping = {
        "Kadsan": 0, "Phruek": 1, "Phurichaya": 2, "Palise": 3,
        "Natapat": 4, "Thanut": 5, "Chanon": 6
    };

    const authorKeys = getAuthorsFromCreatorString(creatorString);
  // Map display author name to about page member section id
  const authorToMemberId = {
    Palise: 'member-0',
    Phruek: 'member-1',
    Phurichaya: 'member-2',
    Kadsan: 'member-3',
    Natapat: 'member-4',
    Thanut: 'member-5',
    Chanon: 'member-6'
  };

  listContainer.innerHTML = authorKeys.map(key => {
    const data = authorDatabase[key] || authorDatabase["Unknown"];
    const displayName = key === "Unknown" ? creatorString : key;
    const memberTarget = authorToMemberId[displayName] || 'member-0';
    return `
      <div class="author-card" data-member-target="${memberTarget}" tabindex="0" role="button" aria-label="View ${displayName} profile">
        <img src="${data.photo}" alt="${displayName}" class="author-img">
        <div class="author-info">
          <span class="author-name">${displayName}</span>
          <div class="author-detail"><strong>EMAIL:</strong> ${data.email}</div>
          <div class="author-detail"><strong>TEL:</strong> ${data.tel}</div>
          <div class="author-detail"><strong>IG:</strong> ${data.ig}</div>
        </div>
        <button class="author-go-btn" aria-hidden="false" aria-label="Go to ${displayName} section">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </button>
      </div>
    `;
  }).join('');

    modal.classList.add('active');
    gsap.fromTo(container, { opacity: 0, scale: 0.9, y: 20 }, { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "back.out(1.2)" });
    
    gsap.fromTo(".author-card", 
        { opacity: 0, y: 100, scale: 0.8 }, 
        { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.15, ease: "elastic.out(1, 0.75)", delay: 0.2 }
    );
    // Attach navigation click (and Enter key) handlers
    listContainer.querySelectorAll('.author-card').forEach(card => {
      const memberTarget = card.getAttribute('data-member-target');
      const navigate = () => {
        if (window.PageTransition && typeof PageTransition.navigateTo === 'function') {
          PageTransition.navigateTo(`../pages/about.html#${memberTarget}`);
        } else {
          window.location.href = `../pages/about.html#${memberTarget}`;
        }
      };
      card.addEventListener('click', navigate);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          navigate();
        }
      });
    });
}

function createModal() {
  const modal = document.createElement("div");
  modal.id = "product-modal";
  modal.classList.add("product-modal");
  modal.innerHTML = `
    <div class="modal-backdrop"></div>
    <div class="modal-container">
      <button class="modal-close" aria-label="Close modal">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      <div class="modal-content">
        <div class="modal-gallery">
          <div class="modal-main-image"><img id="modal-main-img" src="" alt="Product image"></div>
          <div class="modal-thumbnails" id="modal-thumbnails"></div>
        </div>
        <div class="modal-info">
          <button class="modal-category" id="modal-category" type="button"></button>
          <h1 class="modal-title" id="modal-title"></h1>
          <div class="modal-creator" id="modal-creator"></div>
          <div class="modal-price"><span class="modal-price-label">Price:</span><span class="modal-price-value" id="modal-price-value">$0</span></div>
          <p class="modal-description" id="modal-description"></p>
          <div class="modal-actions">
            <a href="#" class="modal-btn modal-btn-primary" id="modal-demo-btn" target="_blank">
              <span>Live Demo</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
            </a>
            <button class="modal-btn modal-btn-secondary" id="modal-contact-btn" type="button">
              <span>Contact Author</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 4L8 8L14 4M2 4H14M2 4V12H14V4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  return modal;
}

let modal = null;
let currentProduct = null;

// Loop with error handling to prevent crash
for (let i of products.data) {
  try {
      const product = addDefaults(i);
      let card = document.createElement("div");
      
      const categoryClass = product.category ? product.category.trim() : "Other";
      
      card.classList.add("card", categoryClass);
      card.dataset.productIndex = products.data.indexOf(i);
      card.dataset.productName = (product.productName || "").toUpperCase();
      card.dataset.creator = (product.creator || "Unknown Creator").toUpperCase();
      card.dataset.category = (product.category || "").toUpperCase();
      
      card.addEventListener("click", () => openModal(product));
      
      let imgContainer = document.createElement("div");
      imgContainer.classList.add("image-container");
      
      const imageArray = Array.isArray(product.image) ? product.image : [product.image];
      let image = document.createElement("img");
      
      image.setAttribute("data-src", imageArray[0]);
      image.setAttribute("alt", product.productName);
      image.classList.add("card-image", "lazy-load");
      image.setAttribute("loading", "lazy");
      
      image.addEventListener("load", function() {
        this.classList.add("loaded");
        imgContainer.classList.add("loaded");
      });
      
      image.addEventListener("error", function() {
        this.classList.add("loaded");
        imgContainer.classList.add("loaded");
      });
      
      imgContainer.appendChild(image);
      card.appendChild(imgContainer);
      
      let container = document.createElement("div");
      container.classList.add("container");
      let creator = document.createElement("p");
      creator.classList.add("creator-name");
      creator.innerText = product.creator || "Unknown Creator";
      container.appendChild(creator);
      let name = document.createElement("h5");
      name.classList.add("product-name");
      name.innerText = product.productName.toUpperCase();
      container.appendChild(name);
      let price = document.createElement("h6");
      price.innerText = "$" + product.price;
      container.appendChild(price);
      card.appendChild(container);
      
      let cardWrapper = document.createElement("div");
      cardWrapper.classList.add("card-link");
      cardWrapper.appendChild(card);
      document.getElementById("products").appendChild(cardWrapper);
  } catch (err) {
      console.warn("Skipping malformed product:", i.productName);
  }
}

function openModal(product) {
  if (!modal) modal = createModal();
  currentProduct = product;
  document.getElementById("modal-title").textContent = product.productName || "Untitled";
  
  const categoryBtn = document.getElementById("modal-category");
  const category = product.category || "Project";
  categoryBtn.textContent = category;
  categoryBtn.onclick = (e) => {
    e.stopPropagation();
    gsap.to(categoryBtn, { scale: 0.95, duration: 0.1, yoyo: true, repeat: 1 });
    closeModal();
    setTimeout(() => {
      const productsSection = document.getElementById("products");
      if (productsSection) productsSection.scrollIntoView({ behavior: "smooth", block: "start" });
      filterProduct(category);
    }, 300);
  };
  
  document.getElementById("modal-creator").innerHTML = `<span>By:</span> ${product.creator || "Unknown Creator"}`;
  document.getElementById("modal-description").textContent = product.description || "No description available.";
  
  const priceValue = "$" + Math.round(parseFloat(product.price) || 0);
  const priceElement = document.getElementById("modal-price-value");
  priceElement.innerHTML = "";
  
  priceValue.split("").forEach((char, index) => {
    const span = document.createElement("span");
    span.textContent = char;
    span.style.display = "inline-block";
    span.style.opacity = "0";
    span.style.transform = "translateY(20px)";
    priceElement.appendChild(span);
    
    if (typeof gsap !== 'undefined') {
      gsap.to(span, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: 0.5 + (index * 0.05),
        ease: "back.out(1.7)"
      });
    } else {
      setTimeout(() => {
        span.style.opacity = "1";
        span.style.transform = "translateY(0)";
        span.style.transition = "all 0.5s ease";
      }, 500 + (index * 50));
    }
  });
  
  const mainImg = document.getElementById("modal-main-img");
  gsap.set(mainImg, { opacity: 1 });
  
  loadModalImage(mainImg, product.images[0] || product.image).catch(err => console.warn(err));
  
  const thumbnailsContainer = document.getElementById("modal-thumbnails");
  thumbnailsContainer.innerHTML = "";
  if (product.images && product.images.length > 1) {
    product.images.forEach((imgSrc, index) => {
      const thumbnail = document.createElement("div");
      thumbnail.classList.add("modal-thumbnail");
      if (index === 0) thumbnail.classList.add("active");
      
      const img = document.createElement("img");
      img.setAttribute("loading", "lazy");
      
      img.onload = () => { img.classList.add("loaded"); thumbnail.classList.add("loaded"); };
      img.onerror = () => { img.classList.add("loaded"); thumbnail.classList.add("loaded"); };
      
      img.src = imgSrc;
      thumbnail.appendChild(img);
      
      thumbnail.addEventListener("click", () => {
        thumbnailsContainer.querySelectorAll(".modal-thumbnail").forEach(t => t.classList.remove("active"));
        thumbnail.classList.add("active");
        loadModalImage(mainImg, imgSrc).catch(err => console.warn(err));
      });
      
      thumbnailsContainer.appendChild(thumbnail);
    });
  }
  
  const demoBtn = document.getElementById("modal-demo-btn");
  const newDemoBtn = demoBtn.cloneNode(true);
  demoBtn.parentNode.replaceChild(newDemoBtn, demoBtn);
  
  newDemoBtn.innerHTML = `<span class="live-dot"></span><span>Live Demo</span> <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`;
  
  if (product.video) {
      newDemoBtn.href = "#";
      newDemoBtn.onclick = (e) => {
          e.preventDefault();
          if(typeof openVideo === 'function') openVideo(product.video);
      };
  } else {
      newDemoBtn.href = product.link || "#";
      newDemoBtn.onclick = null;
  }

  const contactBtn = document.getElementById("modal-contact-btn");
  const newContactBtn = contactBtn.cloneNode(true);
  contactBtn.parentNode.replaceChild(newContactBtn, contactBtn);
  newContactBtn.addEventListener("click", (e) => {
      e.preventDefault();
      openContactModal(product.creator); 
  });
  
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
  
  const backdrop = modal.querySelector(".modal-backdrop");
  const container = modal.querySelector(".modal-container");
  
  if (typeof gsap !== 'undefined') {
    gsap.set(backdrop, { opacity: 0 });
    gsap.set(container, { scale: 0.8, opacity: 0, y: 50 });
    gsap.to(backdrop, { opacity: 1, duration: 0.3, ease: "power2.out" });
    gsap.to(container, { 
      scale: 1, opacity: 1, y: 0,
      duration: 0.5, ease: "back.out(1.7)", delay: 0.1
    });
  } else {
    backdrop.style.opacity = "1";
    container.style.opacity = "1";
    container.style.transform = "scale(1)";
  }

  const closeBtn = modal.querySelector(".modal-close");
  const closeFunc = closeModal;
  closeBtn.onclick = closeFunc;
  backdrop.onclick = closeFunc;
}

function closeModal() {
  if (!modal) return;
  const backdrop = modal.querySelector(".modal-backdrop");
  const container = modal.querySelector(".modal-container");
  
  if (typeof gsap !== 'undefined') {
    gsap.to(container, { scale: 0.8, opacity: 0, y: 50, duration: 0.3, ease: "power2.in" });
    gsap.to(backdrop, { 
      opacity: 0, duration: 0.3, ease: "power2.in",
      onComplete: () => { modal.style.display = "none"; document.body.style.overflow = ""; }
    });
  } else {
    modal.style.display = "none";
    document.body.style.overflow = "";
  }
}

function initCardAnimations(isFiltering = false) {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.refresh();
  
  const cardWrappers = document.querySelectorAll('.card-link:not(.hide)');
  cardWrappers.forEach((wrapper, index) => {
    wrapper.style.display = 'block'; 
    gsap.set(wrapper, { opacity: 0, y: 80 });
    const rect = wrapper.getBoundingClientRect();
    const isInViewport = rect.top < window.innerHeight;
    
    if (isFiltering || isInViewport) {
      gsap.to(wrapper, { opacity: 1, y: 0, duration: 0.8, delay: index * 0.08, ease: "power3.out" });
    } else {
      gsap.to(wrapper, {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: wrapper, start: "top 85%", end: "top 20%", toggleActions: "play none none none", once: true }
      });
    }
  });
}

function filterProduct(value) {
  document.getElementById("search-input").value = "";
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  let elements = document.querySelectorAll(".card");
  let wrappers = document.querySelectorAll(".card-link");
  
  wrappers.forEach(w => w.classList.add("hide")); 

  elements.forEach((element, index) => {
    const wrapper = wrappers[index];
    if (value == "all") {
      wrapper.classList.remove("hide");
    } else {
      // Trim check
      if (element.classList.contains(value.trim())) {
        wrapper.classList.remove("hide");
      }
    }
  });
  
  setTimeout(() => { initCardAnimations(true); }, 50);
}

function searchProducts() {
  let searchInput = document.getElementById("search-input").value.trim().toUpperCase();
  let cards = document.querySelectorAll(".card");
  let links = document.querySelectorAll(".card-link");

  if (searchInput === "") {
    links.forEach((wrapper) => wrapper.classList.remove("hide"));
  } else {
    cards.forEach((card, index) => {
      const wrapper = links[index];
      const productMatch = (card.dataset.productName || "").includes(searchInput);
      const creatorMatch = (card.dataset.creator || "").includes(searchInput);
      const categoryMatch = (card.dataset.category || "").includes(searchInput);
      if (productMatch || creatorMatch || categoryMatch) {
        wrapper.classList.remove("hide");
      } else {
        wrapper.classList.add("hide");
      }
    });
  }
  setTimeout(() => { initCardAnimations(true); }, 50);
}

document.getElementById("search-input").addEventListener("input", () => {
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    button.classList.remove("active");
    if(button.innerText === "All") button.classList.add("active");
  });
  searchProducts();
});

document.querySelector("button#search").addEventListener("click", searchProducts);

function initLazyLoading() {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute('data-src');
        if (src) {
          const tempImg = new Image();
          tempImg.onload = () => { img.src = src; img.removeAttribute('data-src'); };
          tempImg.onerror = () => { img.src = src; img.removeAttribute('data-src'); };
          tempImg.src = src;
        }
        observer.unobserve(img);
      }
    });
  }, { root: null, rootMargin: '50px', threshold: 0.01 });

  document.querySelectorAll('.lazy-load').forEach(img => { imageObserver.observe(img); });
}

function loadModalImage(imgElement, src) {
  return new Promise((resolve, reject) => {
    const container = imgElement.parentElement;
    container.classList.remove('loaded');
    imgElement.classList.remove('loaded');
    
    const tempImg = new Image();
    tempImg.onload = () => {
      imgElement.src = src;
      setTimeout(() => { imgElement.classList.add('loaded'); container.classList.add('loaded'); resolve(); }, 50);
    };
    tempImg.onerror = () => {
      imgElement.src = src; 
      imgElement.classList.add('loaded'); container.classList.add('loaded');
      reject(new Error(`Failed to load: ${src}`));
    };
    tempImg.src = src;
  });
}

window.onload = () => {
  filterProduct("all");
  initLazyLoading();
  
  const filterToggle = document.getElementById('filterToggle');
  const filterButtons = document.getElementById('buttons');
  let isDropdownOpen = false;
  let dropdownTl = null;

  if (filterToggle && filterButtons) {
      const items = Array.from(filterButtons.querySelectorAll('.button-value'));

      function openDropdown() {
        if (typeof gsap !== 'undefined') {
          if (dropdownTl) dropdownTl.kill();
          dropdownTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
          dropdownTl
            .set(filterButtons, { opacity: 0, y: -6 })
            .add(() => { filterButtons.style.visibility = 'visible'; filterButtons.style.pointerEvents = 'all'; })
            .to(filterButtons, { opacity: 1, y: 0, duration: 0.24 })
            .from(items, { y: -8, opacity: 0 }, { y: 0, opacity: 1, duration: 0.2, stagger: 0.05 }, '<0.02')
            .add(() => {
              gsap.set(filterButtons, { clearProps: 'all' });
              items.forEach(i => gsap.set(i, { clearProps: 'all' }));
            });
        }
      }

      function closeDropdown() {
        if (typeof gsap !== 'undefined') {
          if (dropdownTl) dropdownTl.kill();
          dropdownTl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });
          dropdownTl
            .to(items.slice().reverse(), { y: -6, opacity: 0, duration: 0.16, stagger: 0.04 })
            .to(filterButtons, { opacity: 0, y: -6, duration: 0.16 }, '<')
            .add(() => {
              filterButtons.style.visibility = 'hidden';
              filterButtons.style.pointerEvents = 'none';
              // Clear any inline styles so CSS class controls state next open
              gsap.set(filterButtons, { clearProps: 'all' });
              items.forEach(i => gsap.set(i, { clearProps: 'all' }));
            });
        }
      }

      filterToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        isDropdownOpen = !isDropdownOpen;
        
        if (isDropdownOpen) {
            filterToggle.classList.add('active');
            filterButtons.classList.add('dropdown-open');
            openDropdown();
        } else {
            filterToggle.classList.remove('active');
            filterButtons.classList.remove('dropdown-open');
            closeDropdown();
        }
      });
      
      document.addEventListener('click', (e) => {
        if (!e.target.closest('.filter-wrapper') && isDropdownOpen) {
           isDropdownOpen = false;
           filterToggle.classList.remove('active');
           filterButtons.classList.remove('dropdown-open');
           closeDropdown();
        }
      });
      
      // Close dropdown when filter button is clicked and update display
      filterButtons.querySelectorAll('.button-value').forEach(btn => {
          btn.addEventListener('click', () => {
              isDropdownOpen = false;
              filterToggle.classList.remove('active');
              filterButtons.classList.remove('dropdown-open');
              closeDropdown();
              
              // Update current filter display
              const filterText = btn.textContent.trim();
              const currentFilterEl = filterToggle.querySelector('.current-filter');
              if (currentFilterEl) {
                  if (typeof gsap !== 'undefined') {
                    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
                    tl.to(currentFilterEl, { y: 8, opacity: 0, duration: 0.15 })
                      .add(() => { currentFilterEl.textContent = filterText; })
                      .fromTo(currentFilterEl, { y: -8, opacity: 0 }, { y: 0, opacity: 1, duration: 0.22 });
                  } else {
                    currentFilterEl.textContent = filterText;
                  }
              }
          });
      });
  }
  
  (function handleDeepLinkOpen(){
    try {
      const params = new URLSearchParams(window.location.search);
      const raw = params.get('product') || params.get('open');
      if (!raw) return;
      const decode = decodeURIComponent(raw);
      const normalize = (s) => (s || "").toString().toLowerCase().replace(/[^a-z0-9]+/g, "");
      const key = normalize(decode);
      if (!key) return;
      const find = (arr) => arr.find(p => {
        const n = normalize(p.productName);
        return n === key || n.includes(key) || key.includes(n);
      });
      const rawProduct = find(products.data);
      if (!rawProduct) return;
      const product = addDefaults(rawProduct);
      setTimeout(() => openModal(product), 150);
    } catch (e) { }
  })();
};