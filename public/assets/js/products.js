let products = {
  data: [
    {
      productName: "Regular White T-Shirt",
      creator: "Fashion Co.",
      category: "Topwear",
      price: "30",
      image: "https://images.unsplash.com/photo-1762438473679-0a6a4de908b3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500",
      link : "index.html",
    },
    {
      productName: "Beige Short Skirt",
      creator: "Palise",
      category: "Bottomwear",
      price: "49",
      image: "https://images.unsplash.com/photo-1756982477634-7a2b356d57b5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500",
      link : "haha.html",
    },
    {
      productName: "Sporty SmartWatch",
      creator: "TechWear",
      category: "Watch",
      price: "99",
      image: "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
      link : "index.html",
    },
    {
      productName: "Basic Knitted Top",
      creator: "StyleHub",
      category: "Topwear",
      price: "29",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
      link : "index.html",
    },
    {
      productName: "Black Leather Jacket",
      creator: "LeatherCraft",
      category: "Jacket",
      price: "129",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
      link : "index.html",
    },
    {
      productName: "Stylish Pink Trousers",
      creator: "UrbanStyle",
      category: "Bottomwear",
      price: "89",
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
      link : "index.html",
    },
    {
      productName: "Brown Men's Jacket",
      creator: "ClassicWear",
      category: "Jacket",
      price: "189",
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
      link : "index.html",
    },
    {
      productName: "Comfy Gray Pants",
      creator: "ComfortZone",
      category: "Bottomwear",
      price: "49",
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
      link : "index.html",
    },
    {
      productName: "kuy big",
      creator: "ComfortZone",
      category: "Watch",
      price: "49",
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
      link : "index.html",
    },
  ],
};

let animationDelay = 0;
for (let i of products.data) {
  //Create link wrapper
  let link = document.createElement("a");
  link.href = i.link || `product-detail.html?id=${i.productName.toLowerCase().replace(/\s+/g, '-')}`;
  link.classList.add("card-link");
  // Set the animation delay for the staggered effect
  link.style.animationDelay = `${animationDelay}ms`;
  animationDelay += 150; 
  
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category);
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //creator name
  let creator = document.createElement("p");
  creator.classList.add("creator-name");
  creator.innerText = i.creator || "Unknown Creator";
  container.appendChild(creator);
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  //price
  let price = document.createElement("h6");
  price.innerText = "$" + i.price;
  container.appendChild(price);

  card.appendChild(container);
  link.appendChild(card);
  document.getElementById("products").appendChild(link);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  // Clear search input when a category is clicked
  document.getElementById("search-input").value = "";

  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards and their parent links
  let elements = document.querySelectorAll(".card");
  let links = document.querySelectorAll(".card-link");
  //loop through all cards
  elements.forEach((element, index) => {
    const link = links[index];
    //display all cards on 'all' button click
    if (value == "all") {
      link.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        link.classList.remove("hide");
      } else {
        //hide other elements
        link.classList.add("hide");
      }
    }
  });
}

//Search function
function searchProducts() {
  //initializations
  let searchInput = document.getElementById("search-input").value.trim().toUpperCase();
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");
  let links = document.querySelectorAll(".card-link");

  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value (case-insensitive)
    const link = links[index];
    const isSearchMatch = element.innerText.toUpperCase().includes(searchInput);

    if (isSearchMatch) {
      //display matching card
      link.classList.remove("hide");
    } else {
      //hide others
      link.classList.add("hide");
    }
  });
}

// Reset category to "All" when user starts searching
document.getElementById("search-input").addEventListener("input", () => {
  // When user types in search, deactivate category buttons
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    if (!button.innerText.includes("All")) {
      button.classList.remove("active");
    } else {
      button.classList.add("active");
    }
  });
  searchProducts();
});


//Search button click
document.querySelector("button#search").addEventListener("click", searchProducts);

//Initially display all products
window.onload = () => {
  filterProduct("all");
};