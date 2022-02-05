function random(l, u){
  return Math.floor(Math.random() * (u-l) + l);
}
class Box{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.dy = 1.3;
    this.z = z;
    //this.dz = 0.02;
    let r = random(1,2);
    this.obj = document.createElement("a-box");
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    this.obj.setAttribute("width", "2");
    this.obj.setAttribute("height", "2");
    this.obj.setAttribute("color", "#444f53");
    scene.append(this.obj)
  }
  move(){
    this.y += this.dy;
    if(this.y >50){
      this.dy = this.dy;
      this.y = 20;
      console.log(this.y);
    }
    this.obj.setAttribute("position",{x:this.x, y:this.y , z:this.z});
  }
}


