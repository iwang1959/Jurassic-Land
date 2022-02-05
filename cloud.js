//let rnd = (l,u) => Math.random() * (u-l) + 1;
function random(l, u){
  return Math.floor(Math.random() * (u-l) + l);

}

class Cloud{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.dx = 0.25;

    this.obj = document.createElement("a-entity");
    this.obj.setAttribute("position",{x:x, y:y, z:z});

    for(let i = 0;i <3; i++){
      let cloud1 = document.createElement("a-box");
      cloud1.setAttribute("color", "grey");
      cloud1.setAttribute("position", {x:random(50,60), y:random(60,70), z:16});
      cloud1.setAttribute("width", "50");
      cloud1.setAttribute("height", "50");
      //cloud1.setAttribute("depth", "1");
      cloud1.setAttribute("rotation",{x:90, y:0, z:0});
      this.obj.append(cloud1);
    }

    /*for(let a = 0;a <3; a++){
      let cloud2 = document.createElement("a-box");
      cloud2.setAttribute("color", "grey");
      cloud2.setAttribute("position", {x:random(30,60), y:random(51,70), z:random(-30, -55)});
      cloud2.setAttribute("width", "50");
      cloud2.setAttribute("height", "20");
      //cloud1.setAttribute("depth", "1");
      cloud2.setAttribute("rotation",{x:90, y:0, z:0});
      this.obj.append(cloud2);
    }*/
    /*let cloud1 = document.createElement("a-box");
    cloud1.setAttribute("color", "white");
    cloud1.setAttribute("position", {x:42, y:65, z:-55});
    cloud1.setAttribute("width", "70");
    cloud1.setAttribute("height", "50");
    //cloud1.setAttribute("depth", "1");
    cloud1.setAttribute("rotation",{x:90, y:0, z:0});
    this.obj.append(cloud1);

    let cloud2 = document.createElement("a-box");
    cloud2.setAttribute("color", "white");
    cloud2.setAttribute("position", {x:43, y:62, z:-62});
    cloud2.setAttribute("width", "50");
    cloud2.setAttribute("height", "30");
    //cloud1.setAttribute("depth", "1");
    cloud2.setAttribute("rotation",{x:90, y:0, z:0});
    this.obj.append(cloud2);*/

    scene.append(this.obj);

  }
  move(){
    this.x += this.dx;
    if(this.x < -170 || this.x >170){
      this.dx = -this.dx;

    }
    this.obj.setAttribute("position",{x:this.x, y:this.y , z:this.z});
  }
}
