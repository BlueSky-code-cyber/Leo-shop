// get element

const menuIcon = document.querySelector(".burger-menu");
const headerNav = document.querySelector(".nav-box");
const containerItem = document.querySelector(".container");
const errorText = document.querySelector(".error-text");
const loadGif = document.querySelector(".loading-gif");
const headerElement = document.querySelector(".header");

menuIcon.addEventListener("click", () => {
  headerNav.classList.toggle("open-list");
});

// fetching

const getProduces = async () => {
  try {
    const respons = await fetch("https://fakestoreapi.com/products");
    const data = await respons.json();
    useProduces(data);
    hideLoadingGif();
  } catch (error) {
    errorText.innerText = `${error.message}!  please check your internet`;
    hideLoadingGif();
  }
};

getProduces();
// use Produces
const useProduces = (data) => {
  data.map((data) => {
    const { image, title, price } = data;
    const eachItem = `  <div class="box-wrapper">
         <div class="box-item">
          <img src="${image}" alt="produce" class="image">
          <div class="details">
              <h3 class="title">${createShortTitle(title)}</h3>
          
            <span class="price">$${price}</span>

          </div>

         
        
          </div>
           <div class="cart-icon">
            <i class="fa fa-solid fa-cart-plus"></i>
          </div>
       </div>`;

    containerItem.innerHTML += eachItem;
  });
};

// create a Short Title
const createShortTitle = (title) => {
  const shortTitle = title.split(" ");
  const newTitle = `${shortTitle[0]} ${shortTitle[1]}`;
  return newTitle;
};

// hiding loading gif whene load is secssesful

const hideLoadingGif = () => {
  loadGif.style.display = "none";
};

// distance of header to main

const setHeaderHeight = () => {
  document.documentElement.style.setProperty(
    "--header-height",
    `${headerElement.offsetHeight}px`,
  );
};

setHeaderHeight();

const observer = new ResizeObserver(setHeaderHeight);
observer.observe(headerElement);
