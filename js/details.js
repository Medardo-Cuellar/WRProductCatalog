import { fetchProductByKey } from "./modules/productsApi.js";

/*Para extraer parámetros de la url:*/

/*1: Guardamos la url en una variable*/
const url = window.location.href;

/*2: Creamos una instancia del objeto URLSearch params*/
const params = new URLSearchParams(new URL(url).search);

/*3: Extraemos el parámetro que deseamos*/
let productKey = params.get("productKey");
console.log(productKey);

const printProductData = async (productKey) => {
  let productData = await fetchProductByKey(productKey);
  console.log(productData);
  let {
    name, description, price, picture
  } = productData;

  document.getElementById("product-image").setAttribute("src", picture);
  document.getElementById("product-name").innerText = name;
  document.getElementById("product-description").innerText = description;
  document.getElementById("product-price").innerText = `$${price}.00`;
};

printProductData(productKey);
