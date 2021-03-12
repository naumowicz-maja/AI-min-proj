var k={
init: ()=>{
console.log('Im working');
},
play: ()=> {
  new Audio('dz/Dogs.mp3').play();
},
play2: ()=> {
  new Audio('dz/Cat.mp3').play();
},
play3: ()=> {
  new Audio('dz/Sus.mp3').play();
},
play4: ()=> {
  new Audio('dz/Car.mp3').play();
},
play5: ()=> {
  new Audio('dz/Cow.mp3').play();
},
play6: ()=> {
  new Audio('dz/Birds.mp3').play();
},
play7: ()=> {
  new Audio('dz/Bell.mp3').play();
},
play8: ()=> {
  new Audio('dz/Train.mp3').play();
},
play9: ()=> {
  new Audio('dz/Alert.mp3').play();
}
}
window.addEventListener('load',k.init);
document.getElementById(1).addEventListener("click", k.play);
document.getElementById(2).addEventListener("click", k.play2);
document.getElementById(3).addEventListener("click", k.play3);
document.getElementById(4).addEventListener("click", k.play4);
document.getElementById(5).addEventListener("click", k.play5);
document.getElementById(6).addEventListener("click", k.play6);
document.getElementById(7).addEventListener("click", k.play7);
document.getElementById(8).addEventListener("click", k.play8);
document.getElementById(9).addEventListener("click", k.play9);	

