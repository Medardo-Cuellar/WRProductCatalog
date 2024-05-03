let logInBtn = document.getElementById("log-in-btn");

//Esta es la función que simula mi login
logInBtn.addEventListener("click", () => {
  console.log("click");
  let fields = document.querySelectorAll("#login-form input");

  let userObject = {};

  fields.forEach((field) => {
    let property = field.name;
    let value = field.value;
    userObject[property] = value;
  });

  /*se simula el token*/
  let token =
    "IIYjVc6YHTkJBCCFmGJH3FLqL4SLeIQyjWZFGDR5lWgUr0E1lTIGdjjTlfkvkRBUWYsDyOUP66GpJa8y1C7dST2K4DidLf8u070tqM8pWy8VZJgGpXW1aTrciChk30DykZAfYAStZRcoqZmuh6ifvXi0gM0E93mpR50AxssHt6G7zofoI02ob9evxkTHl7dlADFzcdZVuC8Ajd8rZde89DpTfd4gbwiyvDzj3DWOIhJY7XWyA7CVmte2oidR0KJ";

  localStorage.setItem("token", token);
  window.open("../views/productos.html", "_self");
});
