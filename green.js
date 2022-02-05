class Tree1{
  constructor(x,y,z){
    let _this = this;
    this.flag = false;
    this.obj = document.createElement("a-entity");
    this.obj.setAttribute("position",{x:x, y:y, z:z});

    let cylinder = document.createElement("a-cylinder");
    cylinder.setAttribute("src", "images/tree.jpg");
    cylinder.setAttribute("width", "2");
    cylinder.setAttribute("height", "30");
    cylinder.setAttribute("radius-bottom", "2");
    cylinder.setAttribute("radius-top", "1.5");
    cylinder.setAttribute("position", {x:0, y:14, z:0});
    this.obj.append(cylinder);

    let sphere = document.createElement("a-sphere");
    sphere.setAttribute("src", "images/leaves.jpg");
    sphere.setAttribute("position", {x:0, y:28, z:0});
    sphere.setAttribute("radius", "4");
    sphere.setAttribute("height", "3");
    sphere.setAttribute("width", "3");
    this.obj.append(sphere);

    cylinder.addEventListener("mouseenter", function(){
    cylinder.setAttribute("height", "80");
    sphere.setAttribute("position", {x:0, y:55, z:0});
  })
  /*cylinder.addEventListener("click", function(){
    cylinder.setAttribute("height", "80");
    sphere.setAttribute("position", {x:0, y:55, z:0});
  })
    cylinder.addEventListener("mouseleave", function(){
    cylinder.setAttribute("height", "30");
    sphere.setAttribute("position", {x:0, y:28, z:0});
  })*/
  sphere.addEventListener("mouseenter", function(){
    cylinder.setAttribute("height", "80");
    sphere.setAttribute("position", {x:0, y:55, z:0});
  })
  /*sphere.addEventListener("click", function(){
    cylinder.setAttribute("height", "80");
    sphere.setAttribute("position", {x:0, y:55, z:0});
  })
    sphere.addEventListener("mouseleave", function(){
    cylinder.setAttribute("height", "30");
    sphere.setAttribute("position", {x:0, y:28, z:0});
  })*/
    scene.append(this.obj);
  }
}

class Tree2{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
    this.obj.setAttribute("position",{x:x, y:y, z:z});

    let cylinder = document.createElement("a-cylinder");
    cylinder.setAttribute("src", "images/tree2.jpg");
    cylinder.setAttribute("width", "2");
    cylinder.setAttribute("height", "15");
    cylinder.setAttribute("radius-bottom", "2");
    cylinder.setAttribute("radius-top", "1.5");
    cylinder.setAttribute("position", {x:0, y:7, z:0});
    this.obj.append(cylinder);

    let cone1 = document.createElement("a-cone");
    cone1.setAttribute("src", "images/leaves2.jpg");
    cone1.setAttribute("position", {x:0, y:15, z:0});
    cone1.setAttribute("radius-bottom", "5");
    cone1.setAttribute("radius-top", "1");
    cone1.setAttribute("height", "7");
    cone1.setAttribute("width", "12");
    this.obj.append(cone1);

    let cone2 = document.createElement("a-cone");
    cone2.setAttribute("src", "images/leaves2.jpg");
    cone2.setAttribute("position", {x:0, y:20, z:0});
    cone2.setAttribute("radius-bottom", "3");
    cone2.setAttribute("radius-top", "0.2");
    cone2.setAttribute("height", "3.5");
    cone2.setAttribute("width", "7");
    this.obj.append(cone2);

    let cone3 = document.createElement("a-cone");
    cone3.setAttribute("src", "images/leaves2.jpg");
    cone3.setAttribute("position", {x:0, y:22, z:0});
    cone3.setAttribute("radius-bottom", "2");
    cone3.setAttribute("radius-top", "0.01");
    cone3.setAttribute("height", "2");
    cone3.setAttribute("width", "4");
    this.obj.append(cone3);

    cylinder.addEventListener("mouseenter", function(){
    cylinder.setAttribute("height", "80");
    cone1.setAttribute("position", {x:0, y:35, z:0});
    cone1.setAttribute("radius-bottom", "10");
    cone1.setAttribute("radius-top", "2");
    cone1.setAttribute("height", "9");
    cone1.setAttribute("width", "17");

    cone2.setAttribute("position", {x:0, y:43, z:0});
    cone2.setAttribute("radius-bottom", "6");
    cone2.setAttribute("radius-top", "0.3");
    cone2.setAttribute("height", "9");
    cone2.setAttribute("width", "14");

    cone3.setAttribute("position", {x:0, y:47, z:0});
    cone3.setAttribute("radius-bottom", "4");
    cone3.setAttribute("radius-top", "0.2");
    cone3.setAttribute("height", "5");
    cone3.setAttribute("width", "4");
  })
  cone1.addEventListener("mouseenter", function(){
    cylinder.setAttribute("height", "80");
    cone1.setAttribute("position", {x:0, y:35, z:0});
    cone1.setAttribute("radius-bottom", "10");
    cone1.setAttribute("radius-top", "2");
    cone1.setAttribute("height", "9");
    cone1.setAttribute("width", "17");

    cone2.setAttribute("position", {x:0, y:43, z:0});
    cone2.setAttribute("radius-bottom", "6");
    cone2.setAttribute("radius-top", "0.3");
    cone2.setAttribute("height", "9");
    cone2.setAttribute("width", "14");

    cone3.setAttribute("position", {x:0, y:47, z:0});
    cone3.setAttribute("radius-bottom", "4");
    cone3.setAttribute("radius-top", "0.2");
    cone3.setAttribute("height", "5");
    cone3.setAttribute("width", "4");
  })
  cone2.addEventListener("mouseenter", function(){
    cylinder.setAttribute("height", "80");
    cone1.setAttribute("position", {x:0, y:35, z:0});
    cone1.setAttribute("radius-bottom", "10");
    cone1.setAttribute("radius-top", "2");
    cone1.setAttribute("height", "9");
    cone1.setAttribute("width", "17");

    cone2.setAttribute("position", {x:0, y:43, z:0});
    cone2.setAttribute("radius-bottom", "6");
    cone2.setAttribute("radius-top", "0.3");
    cone2.setAttribute("height", "9");
    cone2.setAttribute("width", "14");

    cone3.setAttribute("position", {x:0, y:47, z:0});
    cone3.setAttribute("radius-bottom", "4");
    cone3.setAttribute("radius-top", "0.2");
    cone3.setAttribute("height", "5");
    cone3.setAttribute("width", "4");
  })
  cone3.addEventListener("mouseenter", function(){
    cylinder.setAttribute("height", "80");
    cone1.setAttribute("position", {x:0, y:35, z:0});
    cone1.setAttribute("radius-bottom", "10");
    cone1.setAttribute("radius-top", "2");
    cone1.setAttribute("height", "9");
    cone1.setAttribute("width", "17");

    cone2.setAttribute("position", {x:0, y:43, z:0});
    cone2.setAttribute("radius-bottom", "6");
    cone2.setAttribute("radius-top", "0.3");
    cone2.setAttribute("height", "9");
    cone2.setAttribute("width", "14");

    cone3.setAttribute("position", {x:0, y:47, z:0});
    cone3.setAttribute("radius-bottom", "4");
    cone3.setAttribute("radius-top", "0.2");
    cone3.setAttribute("height", "5");
    cone3.setAttribute("width", "4");
  })
  
   /* cylinder.addEventListener("mouseleave", function(){
    cylinder.setAttribute("height", "15");
    cone1.setAttribute("position", {x:0, y:15, z:0});
    cone2.setAttribute("position", {x:0, y:20, z:0});
    cone3.setAttribute("position", {x:0, y:22, z:0});
  })*/

    scene.append(this.obj);
  }
}

class Bush{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.obj = document.createElement("a-entity");
    this.obj.setAttribute("position",{x:x,y:y,z:z});

    let bush1 = document.createElement("a-sphere");
    bush1.setAttribute("src", "images/bush.jpg");
    bush1.setAttribute("position",{x:45, y:0.8, z:-55});
    bush1.setAttribute("width", "10");
    bush1.setAttribute("height", "8");
    bush1.setAttribute("radius", "5");
    this.obj.append(bush1);
    scene.append(this.obj);

  }
}


