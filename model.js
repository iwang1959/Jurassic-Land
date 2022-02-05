let rnd = (l,u) => Math.floor(Math.random() * (u-l) + l)
let scene, egg = [], pter = [];

/*class SpecialEgg{
  constructor(x,y,z){
    this.x = x;
    this.y = y; 
    this.z = z;
    //<a-gltf-model src="#man" position="0 0 -3" animation-mixer></a-gltf-model>
    this.obj = document.createElement("a-gltf-model");
    this.obj.setAttribute("src","#egg1");
    this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
    this.obj.setAttribute("animation-mixer","");
    scene.append(this.obj);

  }  
}*/

window.onload = function(){
    scene = document.getElementById("scene1");
    // Challenge 6: Create 10 MilkTrucks in random positions
    // Challenge 7: Create 10 Airplanes in random posotions
    for(let i = 0;i <15; i++){
      let z = rnd(-75, 75)
      let x = rnd(-75,75)
      egg.push(new Egg(x, 1, z))
    }
    for(let i = 0;i <6; i++){
      let z = rnd(30, 70)
      let x = rnd(-50,50)
      pter.push(new Pterosaur(x, 30, -z))
    }
    move();
    
}
function move(){
  for(let model of pter){
    model.fly();
  }
    setTimeout(move,1);
}

