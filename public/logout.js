var i = document.querySelector("h1");
isblue = false;
iscyan = false;

setInterval(function(){
    if(isblue) {
        i.style.color = "white";
    } else {
        i.style.color = "chartreuse";
    }
    isblue = !isblue;
    iscyan = !iscyan;
}, 1000);
