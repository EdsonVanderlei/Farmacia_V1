/* Variavéis */
let login = document.getElementById("login");
let modal = document.getElementById("modal");
let close = document.querySelector(".fechar");
let submit = document.getElementById("btn");
let btn = document.querySelector(".hb");

/* Modal Abrir */
login.addEventListener("click", () => {
  modal.classList.add("active");
});
/* Modal Fechar */
close.addEventListener("click", () => {
  modal.classList.remove("active");
});
submit.addEventListener("click", () => {
  modal.classList.remove("active");
});

btn.addEventListener("click", () => {
  let menu = document.querySelector(".nav");
  menu.classList.toggle("active");
});
