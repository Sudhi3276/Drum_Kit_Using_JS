// step-1
// addEventListener it is called whenever evenet is delivered to the target
// 2 parameter :-> 1st parameter is string the event type to listener for
// 2nd paramter is the javascript function(it will call handleclick)
// call back function -> 2nd parameter is filled with entire function.
var nodrumbutton = document.querySelectorAll(".drum").length;

// to play sound
// synatx ->  var audio=new Audio('song.mp3');
// audio.play()

for (var i = 0; i < nodrumbutton; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // this will trigger the current button
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
  });
}
// for the keyboard k=listener
document.addEventListener("keypress", function (event) {
  makeSound(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("kick-bass.mp3");
      kick.play();
      break;
    default:
      console.log(buttonInnerHTML);
  }
}
