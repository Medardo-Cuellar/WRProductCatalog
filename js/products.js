import { fetchAllProducts } from "./modules/productsApi.js";

/* 

<div class="col">
  <div class="card">
    <img
      src="${picture}"
      class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title text-start">${name}</h5>
      <p class="card-text text-center">${description}</p>
      <p class="text-muted text-end">$${price}</p>
      <div class="text-center">
        <a href="../views/detail.html?productKey=${key}" class="btn btn-primary">Ver detalle</a>
      </div>
    </div>
  </div>
</div>

*/
const createProductCard = (productObject) => {
    let { name, description, price, key, picture } = productObject;

    let card = document.createElement("div");
    card.classList.add("col");
    let cardInside = document.createElement("div");
    cardInside.classList.add("card", "shadow");
    let cardImage = document.createElement("img");
    cardImage.src = picture;
    cardImage.classList.add("card-img-top");
    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    let cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title", "text-start");
    cardTitle.innerText = name;
    let cardDescription = document.createElement("p");
    cardDescription.classList.add("card-text", "text-center");
    cardDescription.innerText = description;
    let cardPrice = document.createElement("p");
    cardPrice.classList.add("text-muted", "text-end");
    cardPrice.innerText = `$${price}`;
    let cardButton = document.createElement("div");
    cardButton.classList.add("text-center");
    let button = document.createElement("a");
    button.href = `../views/detail.html?productKey=${key}`;
    button.classList.add("btn", "btn-primary");
    button.innerText = "Ver detalle";

    cardButton.append(button);
    cardBody.append(cardTitle, cardDescription, cardPrice, cardButton);
    cardInside.append(cardImage, cardBody);
    card.append(cardInside);

    return card;
};

const printProducts = (productsArray, wrapperId) => {
    let wrapper = document.getElementById(wrapperId);
    /* la siguiente línea debe ser reemplazada por el ciclo while que borra todos los childs de un elemento */
    wrapper.innerHTML = "";

    productsArray.forEach((product) => {
        let currentContent = wrapper.innerHTML;
        wrapper.innerHTML = currentContent + createProductCard(product);
    });
};

const printAllProducts = async () => {
    let productsArray = await fetchAllProducts();
    printProducts(productsArray, "products-wrapper");
};

printAllProducts();
