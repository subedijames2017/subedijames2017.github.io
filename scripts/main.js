// Animations
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});
var ageInMilliseconds = new Date() - new Date("1998-07-24");
let myAge =  Math.floor(ageInMilliseconds/1000/60/60/24/365); 
document.getElementById("age").innerHTML = myAge;

