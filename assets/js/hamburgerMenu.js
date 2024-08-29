let btn = document.getElementById("menu");
let menuBtn1 = document.getElementById("menuBtn1")

btn.addEventListener("click", () => {
    menuBtn1.classList.toggle("active");
})