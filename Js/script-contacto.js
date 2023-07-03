const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".icon-close");

function activarPopup() {
  wrapper.classList.add("active-popup");
}

function desactivarPopup() {
  wrapper.classList.remove("active-popup");
}

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
  localStorage.setItem("formActive", "true");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
  localStorage.removeItem("formActive");
});

btnPopup.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});

iconClose.addEventListener("click", () => {
  desactivarPopup();
});

const formActive = localStorage.getItem("formActive");
if (formActive === "true") {
  activarPopup();
}
