// short sounds
const ow = new Howl({
  src: ['./sounds/ow.mp3'],
  volume: 0.5
});
const synth = new Howl({
  src: ['./sounds/synth.mp3'],
  volume: 0.5
});
const dog = new Howl({
  src: ['./sounds/dog.mp3'],
  volume: 0.5
});
const rooster = new Howl({
  src: ['./sounds/rooster.mp3'],
  volume: 0.5
});

// longer sounds

const jingle = new Howl({
  src: ['./sounds/jingle.mp3'],
  volume: 0.5
});
const violet = new Howl({
  src: ['./sounds/Violet.mp3'],
  volume: 0.5
});
const free = new Howl({
  src: ['./sounds/free.mp3'],
  volume: 0.5
});
const paris = new Howl({
  src: ['./sounds/paris.mp3'],
  volume: 0.5
});

// extra

const titel = new Howl({
  src: ['./sounds/Titel.mp3'],
  volume: 0.5
});

let star = document.getElementById('star');
let polygon = document.getElementById('poly');
let triangle = document.getElementById('triangle');
let hex = document.getElementById('hexo');

window.addEventListener('load', function () {

  //Set all element pages height
 console.log("page loaded")


})

star.onclick = function(){

  console.log("you clicked the star");


};
polygon.onclick = function(){

  console.log("you clicked the polygon");

};
triangle.onclick = function(){

  console.log("you clicked the triangle");

};
hex.onclick = function(){

  console.log("you clicked the hexagon??");

};
star.onmouseenter = function(){

  console.log("you hover on star");
  ow.play();
};
polygon.onmouseenter = function(){

  console.log("you hover on polygon");

};
triangle.onmouseenter = function(){

  console.log("you hover on triangle");

};
hex.onmouseenter = function(){

  console.log("you hover on hexagon??");

};



