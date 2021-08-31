export * from './modal';

// Get the modal

var modals1 = document.getElementById("modals");
var modals2 = document.getElementById("modals1");
var modals3 = document.getElementById("modals2");

// Get the button that opens the modal
var btn = document.getElementById("projet1");
var btn2 = document.getElementById("projet2");
//var btn3 = document.getElementById("projet3");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
//var span3 = document.getElementsByClassName("close")[2];

// When the user clicks on the button, open the modal
btn.onclick= function() {
  modals1.style.display = "block";
}

btn2.onclick= function() {

  modals2.style.display = "block";
}

/*btn3.onclick= function() {
  modals.style.display = "block";
}*/

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modals1.style.display = "none";
}

span2.onclick = function() {  
  modals2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modals1) {
    modals1.style.display = "none";
  } else if (event.target == modals2){
    modals2.style.display = "none";
  } else if (event.target == modals3){
    modals3.style.dispaly = "none";
  }
}
