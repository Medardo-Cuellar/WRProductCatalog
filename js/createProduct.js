import { createProduct } from "../js/modules/productsApi.js";

let saveProductBtn = document.getElementById("save-product-btn");

saveProductBtn.addEventListener("click", async () => {
  let fields = document.querySelectorAll("#create-product-form input");

  let productObject = {};

  fields.forEach((field) => {
    let type = field.type;
    console.log(type);
    let property = field.name;
    let value = field.value;

    switch (type) {
      case "text":
        productObject[property] = value;
        break;
      case "number":
        productObject[property] = Number(value);
        break;
    }
  });
  
  console.log(productObject);
  let savedProduct = await createProduct(productObject);
  console.log(savedProduct);
});
