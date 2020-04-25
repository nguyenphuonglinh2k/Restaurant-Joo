window.onscroll = function() {scrollFunction();};

function scrollFunction() {
  var changeColor = document.getElementsByClassName("dropdown-center-item");
  var changeColorIcon = document.getElementsByClassName("fas");
  var i;

  if (document.body.scrollTop >= 1 || document.documentElement.scrollTop >= 1) {
    document.getElementById("change-color-logoText").style.color = "#222121";
    document.getElementById("color-home").style.color = "#d8ab74";
    document.getElementById("nav-menu-onscroll").style.backgroundColor = "white";
    document.getElementById("nav-menu-onscroll").style.borderBottom = "1px solid rgba(3, 3, 3, 0.06)";

    for (i = 0; i < changeColor.length; i++) {
      changeColor[i].classList.remove("color-items");
      changeColor[i].classList.add("dropdown-center-item", "change-color-items");
    }

    for (i = 0; i < changeColorIcon.length; i++) {
      changeColorIcon[i].classList.remove("color-icons");
      changeColorIcon[i].classList.add("fas", "change-color-icons");
    }
  } else {
    document.getElementById("change-color-logoText").style.color = "white";
    document.getElementById("color-home").style.color = "white";
    document.getElementById("nav-menu-onscroll").style.backgroundColor = "initial";

    for (i = 0; i < changeColor.length; i++) {
       changeColor[i].classList.add("dropdown-center-item", "color-items");
      changeColor[i].classList.remove("change-color-items");
    }

    for (i = 0; i < changeColorIcon.length; i++) {
      changeColorIcon[i].classList.remove("change-color-icons");
      changeColorIcon[i].classList.add("fas", "color-icons");
    } 
  }
}