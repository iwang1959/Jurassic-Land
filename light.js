
class Light{
	constructor(x,y,z){
		this.obj = document.createElement("a-entity");
		this.obj.setAttribute("position",{x:x,y:y,z:z});

    let circle = document.createElement("a-sphere")
    circle.setAttribute("radius", "100")
    circle.setAttribute("material", "src:images/sun.jpg; repeat: 10 10;")
		circle.setAttribute("position",{x:200,y:250,z:-250});
		this.obj.append(circle);  

    let light = document.createElement("a-light");
    light.setAttribute("type","ambient");
    light.setAttribute("color","yellow");
    light.setAttribute("position",{x:200,y:250,z:-250});
    this.obj.append(light);


    let sky = document.getElementById("ski");

    //Event listener
    this.obj.addEventListener("click",()=>{
      //light.setAttribute("visible", false);
      circle.setAttribute("src", "images/moon.jpg");
      light.setAttribute("color", "black");
      sky.setAttribute("src", "images/night.jpg");
      
    })
    this.obj.addEventListener("mouseleave",()=>{
      //light.setAttribute("visible", true);
      circle.setAttribute("src", "images/sun.jpg");
      light.setAttribute("color","yellow");
      sky.setAttribute("src", "images/sky.jpg");
      
    })

		


		scene.append(this.obj);
  }
	
}
