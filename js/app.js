var burger = document.getElementById('burger');
var aside = document.getElementById('aside');
var main = document.getElementById('main');
var background = document.getElementById('background'); //opening background

burger.addEventListener("click", function(e) {

  if(aside.style.transform == "translateX(-200px)") {

    aside.style.transform = "translateX(0px)";
    main.style.transform = "translateX(200px)";
    //burger.style.transform = "translateX(-200px)"
    background.style.transform = "translateX(200px)";

  }
  else {
    
    aside.style.transform = "translateX(-200px)";
    main.style.transform = "translateX(0px)";
    //burger.style.transform = "translateX(0px)";
    background.style.transform = "translateX(0px)";

  }
  
});