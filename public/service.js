var a = document.querySelector(".one");
var c = document.querySelector(".three");
var d = document.querySelector(".img")

isblue = false;
iscyan = false;


setInterval(function(){
    if(iscyan) {
        a.style.visibility = "visible";
        a.style.backgroundColor = "lightskyblue"
        a.style.height = "40px"
        a.style.paddingTop = "16px"
      
    
    } else {
        a.style.visibility = "hidden";
       
    }
    iscyan = !iscyan;
}, 500);


setInterval(function(){
    if(isblue) {
        c.style.visibility = "visible";
        c.style.backgroundColor = "orange"
        c.style.height = "40px"
        c.style.paddingTop = "16px"
      
    
    } else {
        c.style.visibility = "hidden";
       
    }
    isblue = !isblue;
}, 1500);


