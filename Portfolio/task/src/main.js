function closeWindow(){
    document.querySelectorAll(".close-window").forEach(function (elem) {
        elem.addEventListener("click", function () {
            elem.closest("li").children[2].style.display = "none";
        });
    });
}
document.querySelectorAll(".open-window").forEach(function (elem) {
        elem.addEventListener("click", function () {
            elem.closest("li").children[2].style.display = "block";
            closeWindow();
        });
    });
let menu = document.querySelector(".menu");
document.querySelector(".hamburger").addEventListener("click", function (){
    if (menu.style.display === "none"){
        menu.style.display = "block";
    } else{
        menu.style.display = "none";
    }
});