// ==========Search=========>
let search = document.querySelector(".search-form");
let searchicon = document.querySelector("#search");

searchicon.onclick = () => {
  search.classList.toggle("active");
  navbar.classList.remove("active");
  loginform.classList.remove("active");
};

// ==========Menubar=========>

let menuicon = document.querySelector("#menu");
let navbar = document.querySelector(".navbar");

menuicon.onclick = () => {
  navbar.classList.toggle("active");
  search.classList.remove("active");
  loginform.classList.remove("active");
};

// ==========DarkMode=========>
let mode = document.querySelector("#mode");
let body = document.body;
let darkMode = localStorage.getItem("darkmode");

const darkenable = () => {
  mode.classList.replace("fa-moon", "fa-sun");
  body.classList.add("active");
  localStorage.setItem("darkmode", "enable");
};
const darkdisable = () => {
  mode.classList.replace("fa-sun", "fa-moon");
  body.classList.remove("active");
  localStorage.setItem("darkmode", "disable");
};

if (darkMode === "enable") {
  darkenable();
}
mode.onclick = (e) => {
  let darkMode = localStorage.getItem("darkmode");
  if (darkMode == "disable") {
    darkenable();
  } else {
    darkdisable();
  }
};

// ========Login===========>
let loginicon = document.querySelector("#login");
let loginform = document.querySelector(".login-form");

loginicon.onclick = () => {
  loginform.classList.toggle("active");
  navbar.classList.remove("active");
  search.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  navbar.classList.remove("active");
  search.classList.remove("active");
};
