const heart = document.querySelector("#heart");
const img = document.querySelector("#photo")
const love = document.querySelector("#love")

let flag = 0

heart.addEventListener(("click"), function(){
    console.log("liked by userr");
    love.style.opacity = "0.8";

    setTimeout(function(){
        love.style.opacity = "0"
        console.log("hello");
    },1000);


})
img.addEventListener(("dblclick"), function(){

        console.log("liked by userr");
        love.style.opacity = "0.8";

        setTimeout(function(){
            love.style.opacity = "0"
            console.log("hello");
        },1000);
})