let rnd = (l,u) => Math.random() * (u-l) + 1;
function random(l, u){
  return Math.floor(Math.random() * (u-l) + l);
}
let scene;
let clouds = [];
let ball;
function init(){

  scene = document.getElementById("scene");
  new Light(0, 0, 0);
  new Volcano(0, 0, 0);
  //new Cloud(0,0,0);
  new Tree1(-25, 0, 10);
  new Tree1(105, 0, 10);
  new Tree1(-25, 0, -120);
  new Tree1(105, 0, -120);
  //new Tree2(90, 0, -120);
  for(let i = 0; i <4; i++){
    let x = random(-26,104);
    let z = random(-120, -90);
    new Tree2(x,0,z);
  }
  for(let i = 0; i <4; i++){
    let x = random(-26,104);
    let z = random(-10, 10);
    new Tree2(x,0,z);
  }
  for(let i = 0; i <4; i++){
    let x = random(-26,0);
    let z = random(-119, 9);
    new Tree2(x,0,z);
  }
  for(let i = 0; i <4; i++){
    let x = random(70,104);
    let z = random(-119, 9);
    new Tree2(x,0,z);
  }
  for(let i = 0; i <20; i++){
    let x = random(-70,70);
    let z = random(-70, 70);
    new Bush(x,1,z);
  }
  
  for(let i = 0; i < 20; i++){
    let x = random(-70,70);
    let z = random(-70, 70);
    new Ground1(x,0,z);
  }
  for(let i = 0; i < 25; i++){
    let x = random(-70,70);
    let z = random(-70, 70);
    new Ground2(x,0,z);
  }
  for(let i = 0; i < 15; i++){
    let x = random(-70,70);
    let z = random(-70, 70);
    new Rock(x,0,z);
  }
  for(let i = 0; i < 5; i++){
    let x = random(20,40);
    let z = -55;
    clouds.push(new Cloud(x,1,z));
    
  }
  for(let i = 0; i < 5; i++){
    let x = random(20,40);
    let z = -100;
    clouds.push(new Cloud(x,1,z));
    
  }
  for(let i = 0; i < 5; i++){
    let x = random(20,40);
    let z = -100;
    clouds.push(new Cloud(x,1,z));
    
  }
  for(let i = 0; i < 5; i++){
    let x = random(20,40);
    let z = -100;
    ball = new Box(42,10,-55);
  }
  loop();

  /*let sun = document.getElementById("light");
  sun.addEventListener("click", function(){
    sun.setAttribute("src", "moon.jpg");
    sun.setAttribute("color", "black");
  }*/
}
function loop(){
  ball.move();
  setTimeout(loop,10);
  for(let cloud of clouds){
    cloud.move();
  }
  //setTimeout(loop,10);
}