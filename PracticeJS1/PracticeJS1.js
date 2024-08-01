let frd = document.querySelector("#frd");
let str = document.querySelector("#str");
let rem  = document.querySelector("#rem");

let flag = 0

frd.addEventListener("click",function(){
        frd.textContent = "Message";
        console.log("frnd added");
        str.textContent = "New Friend";
        str.style.color = "green"
        flag == 1;

})
rem.addEventListener("click",function(){

        frd.textContent = "Add Friend";
        console.log("frnd remove");
        str.textContent = "stranger";
        str.style.color = "red"
        flag == 0;
})
