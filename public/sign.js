var popup = document.querySelector("popup");
var h1 = document.querySelector("h3");
var input = document.querySelector(".labels");
var inbox = document.querySelector(".inbox");
var i = document.querySelector("input");
isblue = false;
iscyan = false;

setInterval(function(){
    if(isblue) {
        h1.style.color = "white";
    } else {
        h1.style.color = "chartreuse";
    }
    isblue = !isblue;
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




function openpopup(){
    popup.classList.add("open-popup");
}
function closepopup(){
    popup.classList.remove("open-popup");
}