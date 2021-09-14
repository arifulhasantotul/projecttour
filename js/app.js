// access search btn
const searchBtn = document.getElementById("search_btn");
// access search  form
const searchBar = document.querySelector(".search_bar_container");

// access btn form user
const formBtn = document.getElementById("user_btn");
// access btn form login
const loginForm = document.querySelector(".login_form_container");
// access btn form cross
const formClose = document.getElementById("form_close");

// access menu bar
const menu = document.getElementById("menu_bar");
// access navbar
const navbar = document.querySelector(".navbar");

// onscroll remove button and container
const scrollRmv = (btnName, containerName) => {
    btnName.classList.remove("fa-times");
    containerName.classList.remove("active");
};

// onscroll triggered func
window.onscroll = () => {
    // search remove
    scrollRmv(searchBtn, searchBar);

    // user form remove
    scrollRmv(formClose, loginForm);
};

// onclick remove button and container
const btnToggle = (btnName, containerName) => {
    btnName.classList.toggle("fa-times");
    containerName.classList.toggle("active");
};

//onclick search button triggered func
searchBtn.addEventListener("click", () => {
    btnToggle(searchBtn, searchBar);
});

//onclick menu bar button triggered func
menu.addEventListener("click", () => {
    btnToggle(menu, navbar);
});

//onclick from open button triggered func
formBtn.addEventListener("click", () => {
    loginForm.classList.add("active");
});

//onclick from close button triggered func
formClose.addEventListener("click", () => {
    loginForm.classList.remove("active");
});
