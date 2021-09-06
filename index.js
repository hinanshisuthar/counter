var increaseBtn = document.querySelector("#increase");
var decreaseBtn = document.querySelector("#decrease");
var resetBtn = document.querySelector("#reset");
var counterDiv = document.querySelector("#counter");

var number = 0;
increaseBtn.addEventListener("click", function increaseClickHandler(){
    number++;
    counterDiv.innerHTML = number;
    if(number>0){
    counterDiv.style.color = "green";
    }
})

decreaseBtn.addEventListener("click", function decreaseClickHandler(){
    number--;
    counterDiv.innerHTML = number;
    if(number<0){
    counterDiv.style.color = "red";
    }
})

resetBtn.addEventListener("click", function resetClickHandler(){
    number=0;
    counterDiv.innerHTML = number;
    if(number===0){
    counterDiv.style.color = "black";
}
})