let curs = document.querySelector(".cursor");
let main = document.querySelector(".box");

main.addEventListener("mousemove", function(dets){
    curs.style.top = dets.y + "px"
    curs.style.left = dets.x + "px"
})