let token = localStorage.getItem("token");

console.log(token);

token
  ? window.open("../views/productos.html", "_self")
  : window.open("../views/loginForm.html", "_self");
