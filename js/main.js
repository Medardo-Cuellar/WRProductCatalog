let token = localStorage.getItem("token");

console.log(token);

token
  ? window.open("../views/products.html", "_self")
  : window.open("../views/loginForm.html", "_self");
