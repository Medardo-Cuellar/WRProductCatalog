const BASE_URL = "https://kodemia33jsluis-default-rtdb.firebaseio.com/WR";

const createProduct = async (productObject) => {
  let response = await fetch(`${BASE_URL}/.json`, {
    method: "POST",
    body: JSON.stringify(productObject),
  });
  let data = await response.json();
  return data;
};

const fetchProductByKey = async (productKey) => {
  let response = await fetch(`${BASE_URL}/${productKey}/.json`);
  let data = await response.json();
  return data;
};

const fetchAllProducts = async () => {
  let response = await fetch(`${BASE_URL}/.json`);
  let data = await response.json();
  let keys = Object.keys(data);
  let productsArray = keys.map((key) => ({ ...data[key], key }));
  return productsArray;
};

const deleteProduct = async (productKey) => {
  let response = await fetch(`${BASE_URL}/${productKey}/.json`, {
    method: "DELETE",
  });
  let data = await response.json();
  return data;
};

export { createProduct, fetchProductByKey, fetchAllProducts, deleteProduct};
