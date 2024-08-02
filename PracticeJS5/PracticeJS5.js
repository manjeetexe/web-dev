let img = document.querySelectorAll(".img");
let box = document.querySelector("#full-screen");

console.log()

img[0].addEventListener("click", function(){
    console.log("hello")
    box.style.zIndex = "10"

    setTimeout(() => {
        box.style.zIndex = "-20"
    },3000);
})
img[1].addEventListener("click", function(){
    console.log("hello1")
    box.id = "full-screen1"
    box.style.zIndex = "10"

    setTimeout(() => {
        box.style.zIndex = "-20"
    },3000);
})
img[2].addEventListener("click", function(){
    console.log("hello2")
    box.id = "full-screen2"
    box.style.zIndex = "10"

    setTimeout(() => {
        box.style.zIndex = "-20"
    },3000);
})
img[3].addEventListener("click", function(){
    console.log("hello3")
    box.id = "full-screen3"
    box.style.zIndex = "10"

    setTimeout(() => {
        box.style.zIndex = "-20"
    },3000);
})


