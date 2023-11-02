const openButton = document.getElementById("menu-opn-btn");
const closeButton = document.getElementById("menu-cls-btn");
const mobMenu = document.getElementById("menu-navigation");
const mobMenuItems = mobMenu.querySelectorAll("li");
const targetDiv = document.getElementById("mob-menu");


openButton.addEventListener("click", function() {
    targetDiv.classList.add("is-open");
});

closeButton.addEventListener("click", function() {
    targetDiv.classList.remove("is-open");
});


mobMenuItems.forEach(item => {
item.addEventListener('click', function() {
targetDiv.classList.remove("is-open");
});
});
