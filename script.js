function OpenNav() {
   if ((document.getElementById("nav").style.width = "0px")) {
    document.getElementById("nav").style.width = "250px";
    document.getElementById("nav").style.height = "330px";
        
  }
  
}

function CloseNav() {
  if ((document.getElementById("nav").style.width = "250px")) {
    document.getElementById("nav").style.width = "0px";
    document.getElementById("nav").style.height = "0px";
        
  }
  
}