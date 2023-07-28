var a = document.querySelector(".right a")
var h1 = document.querySelector(".management h1")
var h = document.querySelector(".management h5")
var b = document.querySelector(".text h4")
isblue = false;
iscyan = false;

setInterval(function(){
    if(iscyan) {
        a.style.fontSize="15px";
    } else {
        a.style.fontSize="20px";
    }
    iscyan = !iscyan

}, 1000)

setInterval(function(){
    if (isblue) {
        h1.style.color="white";
    } else {
        h1.style.color="black";
    }
    isblue = !isblue;

}, 500);

setInterval(function(){
    if(iscyan) {
        h.style.visibility = "visible";
    } else {
        h.style.visibility = "hidden";
    }

    iscyan = !iscyan
}, 250);





man.addEventListener("mouseover", function(){
    man.fadeout(1000);
})






$(".cost").on("mouseover", function(){
    $(".cost").fadeout(1000);
});

$("button").on("mouseover",function(){
    $("button").slideout(1000);
});

$(".datasecurity").on("mouseover", function(){
    $(".datasecurity").fadeout(1000);
});






$ ("h1").css("background", "yellow");