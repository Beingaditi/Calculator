let display=document.getElementById("display");

document.querySelectorAll(".btn").forEach(function(button){

button.addEventListener("click",function(e){

display.value+=button.innerText;


});
});

document.getElementById("erase").addEventListener("click",function(){

    display.value=" ";
})


document.getElementById("eq").addEventListener("click",function(){

    display.value=eval(display.value);
})

