const box = document.querySelectorAll(".box");
const img = document.querySelectorAll("img");

box.forEach(function(val){
    console.log(val.childNodes[1]);
    
    val.addEventListener("mouseenter",function(){
        val.childNodes[1].style.opacity = 1
    });
    val.addEventListener("mouseleave",function(){
        val.childNodes[1].style.opacity = 0
    });
    val.addEventListener("mousemove",function(dets){
        val.childNodes[1].style.top = dets.y + "px"
        val.childNodes[1].style.left = dets.x + "px"
    });
    
})

// const img = document.querySelectorAll("img");
// const main = document.querySelectorAll(".box");


// main[0].addEventListener("mousemove", function(dets){
//     img[0].style.top = dets.y + "px"
//     img[0].style.left = dets.x + "px"
// })
// main[0].addEventListener("mouseenter", function(dets){
//     img[0].style.opacity = "1"
// })
// main[0].addEventListener("mouseleave", function(dets){
//     img[0].style.opacity = "0"
// })

// main[1].addEventListener("mousemove", function(dets){
//     img[1].style.top = dets.y + "px"
//     img[1].style.left = dets.x + "px"
// })
// main[1].addEventListener("mouseenter", function(dets){
//     img[1].style.opacity = "1"
// })
// main[1].addEventListener("mouseleave", function(dets){
//     img[1].style.opacity = "0"
// })

// main[2].addEventListener("mousemove", function(dets){
//     img[2].style.top = dets.y + "px"
//     img[2].style.left = dets.x + "px"
// })
// main[2].addEventListener("mouseenter", function(dets){
//     img[2].style.opacity = "1"
    
// })
// main[2].addEventListener("mouseleave", function(dets){
//     img[2].style.opacity = "0"
// })

// main[3].addEventListener("mousemove", function(dets){
//     img[3].style.top = dets.y + "px"
//     img[3].style.left = dets.x + "px"
// })
// main[3].addEventListener("mouseenter", function(dets){
//     img[3].style.opacity = "1"
// })
// main[3].addEventListener("mouseleave", function(dets){
//     img[3].style.opacity = "0"
// })

// main[4].addEventListener("mousemove", function(dets){
//     img[4].style.top = dets.y + "px"
//     img[4].style.left = dets.x + "px"
// })
// main[4].addEventListener("mouseenter", function(dets){
//     img[4].style.opacity = "1"
// })
// main[4].addEventListener("mouseleave", function(dets){
//     img[4].style.opacity = "0"
// })



