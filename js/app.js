const searchBtn = document.getElementById("search_btn");
const searchBar = document.querySelector(".search_bar_container");

const formBtn = document.getElementById("user_btn");
const loginForm = document.querySelector(".login_form_container");
const formClose = document.getElementById("form_close");

window.onscroll = () => {
    searchBtn.classList.remove("fa-times");
    searchBar.classList.remove("active");
};

const btnToggle = (btnName, containerName) => {
    btnName.classList.toggle("fa-times");
    containerName.classList.toggle("active");
};

searchBtn.addEventListener("click", () => {
    // searchBtn.classList.toggle("fa-times");
    // searchBar.classList.toggle("active");
    btnToggle(searchBtn, searchBar);
});

formBtn.addEventListener("click", () => {
    loginForm.classList.add("active");
});

formClose.addEventListener("click", () => {
    loginForm.classList.remove("active");
});
