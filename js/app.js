const searchBtn = document.getElementById("search_btn");
const searchBar = document.querySelector(".search_bar_container");

window.onscroll = () => {
    searchBtn.classList.remove("fa-times");
    searchBar.classList.remove("active");
};

searchBtn.addEventListener("click", () => {
    searchBtn.classList.toggle("fa-times");
    searchBar.classList.toggle("active");
});
