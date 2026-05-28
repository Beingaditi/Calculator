let display=document.getElementById("display");

document.querySelectorAll(".btn").forEach(function(button){

button.addEventListener("click",function(e){

display.value+=button.innerText;


});
});

document.getElementById("clear").addEventListener("click",function(){

    display.value=" ";
})


document.getElementById("eq").addEventListener("click",function(){


try{ display.value=eval(display.value);}

catch{

    display.value="ERROR!";
}


})

document.getElementById("erase").addEventListener("click", function(){

    display.value = display.value.slice(0,-1);

});
