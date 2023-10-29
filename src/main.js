var openButton = document.getElementById("menu-opn-btn");
var closeButton = document.getElementById("menu-cls-btn");
var targetDiv = document.getElementById("mob-menu");


openButton.addEventListener("click", function() {
    targetDiv.classList.add("is-open");
});

closeButton.addEventListener("click", function() {
    targetDiv.classList.remove("is-open");
});
