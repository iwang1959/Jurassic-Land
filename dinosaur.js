class Egg{
  constructor(x,y,z){
    this.x = x;
    this.y = y; 
    this.z = z;
    //<a-gltf-model src="#man" position="0 0 -3" animation-mixer></a-gltf-model>
    this.obj = document.createElement("a-gltf-model");
    this.obj.setAttribute("src","#egg");
    this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
    this.obj.setAttribute("animation-mixer","");

    let count = 0;
    this.obj.addEventListener("mouseenter",()=>{
      this.obj.setAttribute("visible", false);
      count ++;
    })

    scene.append(this.obj);

  }  
}

class Pterosaur{
  constructor(x,y,z){
    this.x = x;
    this.y = y; 
    this.z = z;

    this.obj = document.createElement("a-gltf-model");
    this.obj.setAttribute("src","#ptero");
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    this.obj.setAttribute("animation-mixer","");
    this.obj.setAttribute("scale","0.08 0.08 0.08");
    scene.append(this.obj);
  }
  fly(){
    this.z += 0.1;

    if(this.z > 6){
      this.z -= 80;
    }
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});

  }
}
