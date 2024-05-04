import { fetchAllProducts, deleteProduct } from "./modules/productsApi.js";

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

const editModal = new bootstrap.Modal(document.getElementById('edit-product-modal'));


const createProductCard = (productObject) => {
  let { name, description, price, key, picture } = productObject;

  let card = document.createElement("div");
  card.classList.add("col");
  let cardInside = document.createElement("div");
  cardInside.classList.add("card", "shadow", "h-100", "mx-1");
  let cardImage = document.createElement("img");
  cardImage.src = picture;
  cardImage.classList.add("card-img-top");
  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body", "d-flex", "flex-column");
  let cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title", "text-center", "card-header");
  cardTitle.innerText = name;
  let cardDescription = document.createElement("p");
  cardDescription.classList.add("card-text", "text-start");
  cardDescription.innerText = description;
  let cardFooter = document.createElement("div");
  cardFooter.classList.add("card-footer", "mt-auto");
  let cardPrice = document.createElement("p");
  cardPrice.classList.add("text-muted", "text-end");
  cardPrice.innerText = `$${price}`;
  let cardButton = document.createElement("div");
  cardButton.classList.add("d-flex", "justify-content-end", "gap-2");
  let button = document.createElement("a");
  button.href = `../views/details.html?productKey=${key}`;
  button.classList.add("btn", "btn-primary");
  button.innerText = "Ver detalle";

  //botón de editar producto
  let editBtn = document.createElement("button");
  editBtn.classList.add("btn", "btn-primary", "text-center");
  editBtn.innerHTML = "&#x270E;";

  editBtn.addEventListener("click", () => {
    document.getElementById("edit-name").value = name;
    document.getElementById("edit-description").value = description;
    document.getElementById("edit-price").value = price;
    document.getElementById("edit-picture").value = picture;
    document.getElementById("save-changes-btn").dataset.productKey = key;
    editModal.show();
  });

  //botón de eliminar producto
  let deleteBtn = document.createElement("button");
  deleteBtn.classList.add("btn", "btn-danger", "text-center");

  deleteBtn.innerHTML = "&#x1F5D1;";
  deleteBtn.addEventListener("click", async () => {
    let response = await deleteProduct(key);
    document.getElementById("product-wrapper").innerHTML = "";
    printAllProducts();
  });

  cardButton.append(button, editBtn, deleteBtn);
  cardFooter.append(cardPrice, cardButton);
  cardBody.append(cardTitle, cardDescription, cardFooter);
  cardInside.append(cardImage, cardBody);
  card.append(cardInside);
  console.log(card);

  return card;
};
/* 
const printProducts = (productsArray, wrapperId) => {
    let wrapper = document.getElementById(wrapperId);
    // la siguiente línea debe ser reemplazada por el ciclo while que borra todos los childs de un elemento 
    wrapper.innerHTML = "";

    productsArray.forEach((product) => {
        let currentContent = wrapper.innerHTML;
        wrapper.innerHTML = currentContent + createProductCard(product);
    });
};
 */

const printProducts = (productsArray, wrapperId) => {
  let wrapper = document.getElementById(wrapperId);
  //wrapper.innerHTML = "";
  productsArray.forEach((product) => {
    wrapper.append(createProductCard(product));
  });
};
//https://stackoverflow.com/questions/56461743/getting-object-htmldivelement-instead-of-its-content

const printAllProducts = async () => {
  let productsArray = await fetchAllProducts();
  printProducts(productsArray, "product-wrapper");
};

printAllProducts();