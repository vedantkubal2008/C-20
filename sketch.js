var f_obj,m_obj;



function setup() {
  createCanvas(800,400);

  f_obj=createSprite(400, 200, 50, 50);
  m_obj=createSprite(100, 100, 80, 20);
  f_obj.shapeColor="green";
  m_obj.shapeColor="green";

  
}

function draw() {
  background(255,255,255);  

 m_obj.x=World.mouseX;
 m_obj.y=World.mouseY;

 if((m_obj.x - f_obj.x)<(m_obj.width/2 + f_obj.width/2) && (f_obj.x - m_obj.x) <(m_obj.width/2 + f_obj.width/2)
     && (m_obj.y-f_obj.y)<(m_obj.height/2 + f_obj.height/2) && (f_obj.y - m_obj.y) <(m_obj.height/2 + f_obj.height/2) ){
     f_obj.shapeColor = "red";
     m_obj.shapeColor = "red";
     } 
     else{
        f_obj.shapeColor = "green"; 
        m_obj.shapeColor = "green"; 
      }
     console.log(m_obj.y-f_obj.y);


  drawSprites();
}