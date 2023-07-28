var a= document.querySelector("a");
var h1=document.querySelector("h1");
var i = document.querySelector("input");
var input = document.querySelector(".labels");

iscyan = false

setInterval(function(){
    if(iscyan) {
        a.style.color="white";
    } else{
        a.style.color ="green";
    }
    iscyan = !iscyan;
}, 500);

setInterval(function(){
    if(iscyan) {
        h1.style.color="white";
    } else {
        h1.style.color="green";
    }
    iscyan = !iscyan;

}, 1000);

setInterval(function(){
    if(iscyan) {
        input.style.color = "white";
    } else {
        input.style.color = "green";
    }
    iscyan = !iscyan;
}, 500);



setInterval(function(){
    if(iscyan) {
        i.style.color="white";
    } else {
        i.style.color="green";
    }
    iscyan = !iscyan;

}, 250);
