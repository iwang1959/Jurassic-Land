class Ground1{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
    this.obj.setAttribute("position",{x:x,y:y,z:z});

    let dirt2 = document.createElement("a-cylinder");
    dirt2.setAttribute("src", "images/dirt2.jpg");
    dirt2.setAttribute("width", "120");
    dirt2.setAttribute("height", "0.01");
    dirt2.setAttribute("position", {x:45 , y:0.58 , z:-55});
    dirt2.setAttribute("radius", "6");
    this.obj.append(dirt2);

    scene.append(this.obj);
  }
}
class Ground2{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
    this.obj.setAttribute("position",{x:x,y:y,z:z});

    let dirt1 = document.createElement("a-plane");
    dirt1.setAttribute("src", "images/dirt.jpg");
    dirt1.setAttribute("width", "20");
    dirt1.setAttribute("height", "20");
    dirt1.setAttribute("position", {x:45 , y:0.58 , z:-55});
    dirt1.setAttribute("rotation", {x:-90 , y:0 , z:0});
    this.obj.append(dirt1);

    scene.append(this.obj);
  }
}
class Rock{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
    this.obj.setAttribute("position",{x:x,y:y,z:z});

    let rock = document.createElement("a-dodecahedron");
    rock.setAttribute("src", "images/rock.jpg");
    rock.setAttribute("position", {x:45 , y:0.01 , z:-55});
    rock.setAttribute("radius", "9");
    this.obj.append(rock);


    rock.addEventListener("mouseenter", function(){
    rock.setAttribute("radius", "13");
  })


    scene.append(this.obj);
  }
}
class Volcano{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
    this.obj.setAttribute("position",{x:x, y:y, z:z});

    let cone = document.createElement("a-cone");
    cone.setAttribute("src", "images/lava1.jpg");
    cone.setAttribute("radius-bottom", "35");
    cone.setAttribute("radius-top", "5");
    cone.setAttribute("width", "100");
    cone.setAttribute("height", "20");
    cone.setAttribute("position", {x:42 , y:10 , z:-55});
    this.obj.append(cone);


    let lava = document.createElement("a-cone");
    lava.setAttribute("src", "images/lava.jpg");
    lava.setAttribute("radius-bottom", "11");
    lava.setAttribute("radius-top", "1.8");
    lava.setAttribute("position", {x:42, y:17, z:-55});
    lava.setAttribute("height", "11");
    this.obj.append(lava);


    scene.append(this.obj);

  }
}