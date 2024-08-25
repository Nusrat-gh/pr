let searchForm = document.querySelector(".search-form");
document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
};
let shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#cart-btn").onclick = () => {
  shoppingCart.classList.toggle("active");
};
const formOpenBtn = document.querySelector("#form_open"),
  home = document.querySelector(".home"),
  formContainer = document.querySelector(".form_container"),
  formCloseBtn = document.querySelector(".form_close"),
  signupBtn = document.querySelector("#signup"),
  loginBtn = document.querySelector("#signup"),
  pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formOpenBtn.addEventListener("click", () => home.classList.remove("show"));
