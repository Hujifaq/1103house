const authorDatabase = {
  "Thanut": {
    photo: "../assets/images/authors/Thanut.png",
    email: "tganat@gmail.com",
    tel: "099-XXX-XXXX",
    ig: "@thanut_tk"
  },
  "Chanon": {
    photo: "../assets/images/authors/Chanon.png",
    email: "chanon.panu@kmutt.ac.th",
    tel: "097-242-7650",
    ig: "@cha__nonnnnuuu"
  },
  "Palise": {
    photo: "../assets/images/authors/Palise.svg",
    email: "palise@example.com",
    tel: "0612279966",
    ig: "@palise"
  },
  "Phurichaya": {
    photo: "../assets/images/authors/Phurichaya.png",
    email: "huteiei@example.com",
    tel: "1615156",
    ig: "@phurichaya"
  },
  "Natapat": {
    photo: "../assets/images/authors/Natapat.png",
    email: "natapat@example.com",
    tel: "1555555",
    ig: "@natapat"
  },
  "Phruek": {
    photo: "../assets/images/authors/Phruek.png",
    email: "phruek@example.com",
    tel: "5652164",
    ig: "@phruek"
  },
  "Kadsan": {
    photo: "../assets/images/authors/Kadsan.png",
    email: "kadsan@example.com",
    tel: "565656",
    ig: "@kadsan"
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
    {
      productName: "Pinball Kub",
      creator: "Thanut and Chanon",
      category: "Motion",
      price: "30",
      image: ["../assets/images/products/motion/Pinball-Kub.png"],
      link : "index.html",
      description: "An exciting interactive pinball game with stunning visual effects and smooth gameplay mechanics.",
    },
    {
      productName: "Pinnball MooDeng",
      creator: "Palise and Phurichaya",
      category: "Motion",
      price: "30",
      image: [
        "../assets/images/products/motion/MooDeng.png",
        "../assets/images/products/motion/Pinball-Kub.png",
        "../assets/images/products/motion/Squid-Game.png"
      ],
      link : "haha.html",
      description: "A creative twist on classic pinball featuring unique character designs and engaging gameplay.",
    },
    {
        productName: "Pinball SquidGame",
        creator: "Natapat and Phruek",
        category: "Motion",
        price: "99",
        image: ["../assets/images/products/motion/Squid-Game.png"],
        link : "index.html",
        description: "Intense pinball action inspired by Squid Game, featuring dramatic sound and visuals.",
    },
    {
        productName: "Commercial Zesto",
        creator: "Palise and Phurichaya",
        category: "Motion",
        price: "29",
        image: ["../assets/images/products/motion/Zesto.png"],
        link : "index.html",
        description: "Professional commercial animation for Zesto brand, showcasing vibrant colors and dynamic motion design.",
    },
    {
        productName: "Commercial TheBoys",
        creator: "Thanut Chanon Natapat and Phruek",
        category: "Motion",
        price: "129",
        image: ["../assets/images/products/motion/The-Boys.png"],
        link : "index.html",
        description: "Bold and edgy commercial animation inspired by The Boys series, featuring cute dolls and energetic visuals.",
    },
    {
        productName: "Lyrics Blindinglights",
        creator: "Thanut Chanon Natapat and Phruek",
        category: "Motion",
        price: "89",
        image: ["../assets/images/products/motion/Lyrics-Video.png"],
        link : "index.html",
        description: "Stunning lyric video for Blinding Lights with synchronized animations and neon-inspired aesthetic.",
    },
    {
        productName: "Lyrics Luther",
        creator: "Palise and Phurichaya",
        category: "Motion",
        price: "189",
        image: ["../assets/images/products/motion/Love.png"],
        link : "index.html",
        description: "Emotional and artistic lyric video featuring beautiful typography and meaningful visual storytelling.",
    },
    {
        productName: "Factory HarryPoter",
        creator: "Thanut Chanon Natapat and Phruek",
        category: "Motion",
        price: "49",
        image: ["../assets/images/products/motion/Factory-Tour.png"],
        link : "index.html",
        description: "Magical factory tour animation inspired by Harry Potter, showcasing how wands is made.",
    },
    {
        productName: "Factory Teletubbies",
        creator: "Palise and Phurichaya",
        category: "Motion",
        price: "49",
        image: ["../assets/images/products/motion/Teletubbies.png"],
        link : "index.html",
        description: "Colorful and playful factory tour animation with Teletubbies-inspired bright visuals and fun narrative.",
    },
    {
        productName: "Museum",
        creator: "1103production",
        category: "Motion",
        price: "49",
        image: ["../assets/images/products/motion/Museum.png"],
        link : "index.html",
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
        creator: "All",
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
        image: ["../assets/images/products/production/Duck_hut.HEIC"],
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
        image: ["../assets/images/products/production/"],
        link : "index.html",
        description: "Simple architecture, defined by light.",
    },
    {
        productName: "Cave",
        creator: "Phurichaya",
        category: "Production",
        price: "49",
        image: ["../assets/images/products/production/Cave_hut.jpg"],
        link : "index.html",
        description: "Mysterious cave photography exploring natural formations, shadows, and underground beauty.",
    },
    {
        productName: "Hua Lum Phong",
        creator: "Kadsan",
        category: "Production",
        price: "49",
        image: ["../assets/images/products/production/HuaLumPhong_Gram.Heic"],
        link : "index.html",
        description: "Architecture photograph focusing on a symmetrical train hall interior.",
    },
    {
        productName: "Meow",
        creator: "Phurichaya",
        category: "Production",
        price: "49",
        image: ["../assets/images/products/production/Meow_hut.jpg"],
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
        image: ["../assets/images/products/graphic/Photomanipulate_TK.png"],
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
            "../assets/images/products/graphic/Korat4_jump.jpg"
        ],
        link : "index.html",
        description: "Stunning digital wallpaper designs with artistic compositions perfect for desktop and mobile backgrounds.",
    },
    {
        productName: "Poster Korat",
        creator: "Phruek",
        category: "GraphicDesign",
        price: "49",
        image: ["../assets/images/products/graphic/Korat4_jump.jpg"],
        link : "index.html",
        description: "Eye-catching poster design representing Korat places with bold graphics and traditional elements.",
    },
    {
        productName: "Poster Kanom",
        creator: "Natapat",
        category: "GraphicDesign",
        price: "49",
        image: ["../assets/images/products/graphic/Commerc_Nat.png"],
        link : "index.html",
        description: "Delicious commercial poster design for branding.",
    },
    {
        productName: "Shirt",
        creator: "Natapat",
        category: "GraphicDesign",
        price: "49",
        image: ["../assets/images/products/graphic/Natshirt.png"],
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
     {
        productName: "Mahito",
        creator: "Phreuk",
        category: "Artwork",
        price: "49",
        image: ["../assets/images/products/artwork/Mahito_jump.png"],
        link : "index.html",
        description: "Original character artwork of Mahito with detailed illustration and expressive anime-style design.",
    },
    {
        productName: "Pixel Pikachu",
        creator: "Phruek",
        category: "Artwork",
        price: "49",
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
        image: ["../assets/images/products/artwork/sherkhut.png"],
        link : "index.html",
        description: "Humorous pixel art of Shrek featuring iconic character design in retro gaming style.",
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
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
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
    
    const authorKeys = getAuthorsFromCreatorString(creatorString);
    listContainer.innerHTML = authorKeys.map(key => {
        const data = authorDatabase[key] || authorDatabase["Unknown"];
        const displayName = key === "Unknown" ? creatorString : key;
        return `
            <div class="author-card">
                <img src="${data.photo}" alt="${displayName}" class="author-img">
                <div class="author-info">
                    <span class="author-name">${displayName}</span>
                    <div class="author-detail"><strong>EMAIL:</strong> ${data.email}</div>
                    <div class="author-detail"><strong>TEL:</strong> ${data.tel}</div>
                    <div class="author-detail"><strong>IG:</strong> ${data.ig}</div>
                </div>
            </div>
        `;
    }).join('');

    modal.classList.add('active');
    gsap.fromTo(container, { opacity: 0, scale: 0.9, y: 20 }, { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "back.out(1.2)" });
    
    gsap.fromTo(".author-card", 
        { 
            opacity: 0, 
            y: 100,    
            scale: 0.8 
        }, 
        { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            duration: 0.8, 
            stagger: 0.15,       
            ease: "elastic.out(1, 0.75)", 
            delay: 0.2            
        }
    );
    
    
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

for (let i of products.data) {
  const product = addDefaults(i);
  let card = document.createElement("div");
  card.classList.add("card", product.category);
  card.dataset.productIndex = products.data.indexOf(i);
  card.dataset.productName = (product.productName || "").toUpperCase();
  card.dataset.creator = (product.creator || "Unknown Creator").toUpperCase();
  card.dataset.category = (product.category || "").toUpperCase();
  
  card.addEventListener("click", () => openModal(product));
  
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  
  const imageArray = Array.isArray(product.image) ? product.image : [product.image];
  let image = document.createElement("img");
  
  // Implement lazy loading with Intersection Observer
  image.setAttribute("data-src", imageArray[0]);
  image.setAttribute("alt", product.productName);
  image.classList.add("card-image", "lazy-load");
  image.setAttribute("loading", "lazy"); // Native lazy loading fallback
  
  // Progressive image loading
  image.addEventListener("load", function() {
    this.classList.add("loaded");
    imgContainer.classList.add("loaded");
  });
  
  // Error handling for failed image loads
  image.addEventListener("error", function() {
    this.classList.add("loaded");
    imgContainer.classList.add("loaded");
    console.warn(`Failed to load image: ${imageArray[0]}`);
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
  
  // Animate price with letter-by-letter fade up effect
  const priceValue = "$" + Math.round(parseFloat(product.price) || 0);
  const priceElement = document.getElementById("modal-price-value");
  priceElement.innerHTML = "";
  
  // Split price into individual characters and wrap in spans
  priceValue.split("").forEach((char, index) => {
    const span = document.createElement("span");
    span.textContent = char;
    span.style.display = "inline-block";
    span.style.opacity = "0";
    span.style.transform = "translateY(20px)";
    priceElement.appendChild(span);
    
    // Animate each character with GSAP
    if (typeof gsap !== 'undefined') {
      gsap.to(span, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: 0.5 + (index * 0.05),
        ease: "back.out(1.7)"
      });
    } else {
      // Fallback without GSAP
      setTimeout(() => {
        span.style.opacity = "1";
        span.style.transform = "translateY(0)";
        span.style.transition = "all 0.5s ease";
      }, 500 + (index * 50));
    }
  });
  
  const mainImg = document.getElementById("modal-main-img");
  gsap.set(mainImg, { opacity: 1 });
  
  // Load main image with progressive loading
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
      
      // Lazy load thumbnails
      img.onload = () => {
        img.classList.add("loaded");
        thumbnail.classList.add("loaded");
      };
      
      img.onerror = () => {
        img.classList.add("loaded");
        thumbnail.classList.add("loaded");
      };
      
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
  
  // Check if GSAP is available
  if (typeof gsap !== 'undefined') {
    gsap.set(backdrop, { opacity: 0 });
    gsap.set(container, { scale: 0.8, opacity: 0, y: 50 });
    gsap.to(backdrop, { opacity: 1, duration: 0.3, ease: "power2.out" });
    gsap.to(container, { 
      scale: 1, 
      opacity: 1, 
      y: 0,
      duration: 0.5, 
      ease: "back.out(1.7)",
      delay: 0.1
    });
  } else {
    // Fallback if GSAP not loaded
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
    gsap.to(container, { 
      scale: 0.8, 
      opacity: 0, 
      y: 50,
      duration: 0.3,
      ease: "power2.in"
    });
    gsap.to(backdrop, { 
      opacity: 0, 
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        modal.style.display = "none";
        document.body.style.overflow = "";
      }
    });
  } else {
    // Fallback without GSAP
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
      // Immediate animation for filtered or visible cards
      gsap.to(wrapper, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.08, 
        ease: "power3.out"
      });
    } else {
      // ScrollTrigger animation for cards below viewport
      gsap.to(wrapper, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: wrapper,
          start: "top 85%", 
          end: "top 20%",
          toggleActions: "play none none none",
          once: true
        }
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
      if (element.classList.contains(value)) {
        wrapper.classList.remove("hide");
      }
    }
  });
  
  setTimeout(() => {
    initCardAnimations(true);
  }, 50);
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
  setTimeout(() => {
    initCardAnimations(true);
  }, 50);
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

// Lazy Loading Implementation with Intersection Observer
function initLazyLoading() {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute('data-src');
        
        if (src) {
          // Create a new image to preload
          const tempImg = new Image();
          tempImg.onload = () => {
            img.src = src;
            img.removeAttribute('data-src');
          };
          tempImg.onerror = () => {
            img.src = src; // Still try to load even if preload fails
            img.removeAttribute('data-src');
          };
          tempImg.src = src;
        }
        
        observer.unobserve(img);
      }
    });
  }, {
    root: null,
    rootMargin: '50px', // Start loading 50px before image enters viewport
    threshold: 0.01
  });

  // Observe all lazy-load images
  document.querySelectorAll('.lazy-load').forEach(img => {
    imageObserver.observe(img);
  });
}

// Optimized image loading for modal
function loadModalImage(imgElement, src) {
  return new Promise((resolve, reject) => {
    const container = imgElement.parentElement;
    container.classList.remove('loaded');
    imgElement.classList.remove('loaded');
    
    // Preload image
    const tempImg = new Image();
    
    tempImg.onload = () => {
      imgElement.src = src;
      setTimeout(() => {
        imgElement.classList.add('loaded');
        container.classList.add('loaded');
        resolve();
      }, 50);
    };
    
    tempImg.onerror = () => {
      imgElement.src = src; // Try anyway
      imgElement.classList.add('loaded');
      container.classList.add('loaded');
      reject(new Error(`Failed to load: ${src}`));
    };
    
    tempImg.src = src;
  });
}

window.onload = () => {
  filterProduct("all");
  
  // Initialize lazy loading
  initLazyLoading();
  
  const filterToggle = document.getElementById('filterToggle');
  const filterButtons = document.getElementById('buttons');
  let isDropdownOpen = false;

  if (filterToggle) {
      filterToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        isDropdownOpen = !isDropdownOpen;
        filterToggle.classList.toggle('active', isDropdownOpen);
        filterButtons.classList.toggle('dropdown-open', isDropdownOpen);
        
        if(isDropdownOpen && typeof gsap !== 'undefined') {
            gsap.fromTo(filterButtons, {opacity:0, y:-10}, {opacity:1, y:0, duration:0.3});
        }
      });
      document.addEventListener('click', (e) => {
        if (!e.target.closest('.filter-wrapper') && isDropdownOpen) {
           isDropdownOpen = false;
           filterToggle.classList.remove('active');
           filterButtons.classList.remove('dropdown-open');
        }
      });
  }
};