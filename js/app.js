const full_nav = document.querySelector(".fullpageNav");
var root = document.querySelector(":root")
function closeNav()  {
    full_nav.style.right = "-100%";
}
function openNav()  {
    full_nav.style.right = "0px";
    full_nav.style.opacity = "1";
  
}

