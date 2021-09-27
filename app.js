//! FOR DISPLAYING NAV BAR AS SIDE MENU
let menuBar = document.getElementById('nav-links');
let crossIcon = document.getElementById('crossIcon');
document.getElementById('burger').addEventListener('click',function(){
  menuBar.style.display = "initial";  
  crossIcon.style.display = "initial";
})
//! FOR HIDING SIDE MENU
crossIcon.addEventListener('click',function(){
    menuBar.style.display = "none";
})