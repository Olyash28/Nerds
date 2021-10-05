const write = document.querySelector(".write-us-btn");
const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup-btn");

write.addEventListener("click", function () {
    popup.classList.add("popup-show");
});

closePopup.addEventListener("click", function () {
    popup.classList.remove("popup-show");
});