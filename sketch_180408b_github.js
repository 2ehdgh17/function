
function drawSSU(sizescale)
{
  scale(sizescale);
  //1
  noStroke();
  fill(7,81,128);
  rect(27,26,53,199);
  triangle(99, 26, 43, 27, 67, 89);
  curve(-384, 43, 51, 224, 70, 103, -384, -414);
  curve(140, 844, 85, 145, 62, 26, -332, 118);
  
  //2
  fill(60,169,200);
  rect(135,82,53,200);
  curve(74, 305, 176, 158, 188, 281, -12, 396);
  curve(270, 86, 136, 82, 135, 158, 292, 320);
  fill(23,221,228);
  curve(60, 305, 133, 159, 134, 282, -87, 351);
  curve(288, 137, 191, 82, 189, 168, 338, 262);

  //3
  fill(55,203,208);
  rect(225,25,139,195);
  curve(254, 97, 225, 26, 227, 112, 516, 470);
  fill(23,221,228);
  curve(24, -12, 223, 105, 225, 227, -110, 192);
  
  //4
  fill(63,84,124);
  rect(386,78,64,171);
  ellipse(418,250,64,63);
  
  //5
  fill(54,159,185);
  rect(474,23,108,203);
  fill(23,221,228);
  rect(473,13,10,203);
  curve(575, 23, 472, 139, 469, 227, 240, 184);
}

function drawFrog( x,  y,  size) {  
  noStroke();

  /*head*/
  fill(53, 182, 44);
  ellipse(x, y-size/4.8, size/1.25, size/1.5); 
  ellipse(x-size/4.8, y-size/2, size/4, size/4); 
  ellipse(x+size/4.8, y-size/2, size/4, size/4); 

  /*body*/
  ellipse(x, y+size/4, size, size); 
  fill(109, 200, 59);
  ellipse(x, y+size/3.7, size/1.6, size/1.5);

  /*legs*/
 
  fill(53, 182, 44);
  bezier(x+size/2.4, y+size/80, x+size/1.1, y-size/12, x+size/1.85, y+size/1.5, x+size/2.4, y+size/1.5);
  bezier(x-size/2.4, y+size/80, x-size/1.1, y-size/12, x-size/1.85, y+size/1.5, x-size/2.4, y+size/1.5);
  rect(x+size/3, y+size/2, size/3, size/4.8, 100);
  rect(x-size/1.55, y+size/2, size/3, size/4.8, 100);

  /*eyes*/
  fill(255); 
  ellipse(x-size/4.8, y-size/2, size/6, size/6); 
  ellipse(x+size/4.8, y-size/2, size/6, size/6); 

  fill(0); 
  ellipse(x-size/4.8, y-size/2, size/8, size/8); 
  ellipse(x+size/4.8, y-size/2, size/8, size/8);   

  ellipse(x-size/24, y-size/2.7, size/40, size/40); 
  ellipse(x+size/24, y-size/2.7, size/40, size/40); 

  fill(255); 
  ellipse(x-size/5.3, y-size/1.9, size/40, size/40); 
  ellipse(x+size/5.3, y-size/1.9, size/40, size/40); 

  /*cheek*/
  fill(200, 0, 0); 
  ellipse(x-size/4, y-size/3.9, size/4, size/4); 
  ellipse(x+size/4, y-size/3.9, size/4, size/4);

  /*mouth*/
  noFill();
  stroke(0);
  strokeWeight(size/55);
  arc(x, y-size/3.5, size/3, size/4, 0, PI);
} 
function drawCloud( x,y, z, w, k)
{
  noStroke();
  fill(k);
  ellipse(x,y,z,z);
  ellipse(x-w,y,0.8*z,0.8*z);
  ellipse(x+w,y,0.8*z,0.8*z);
}
function drawPig(x, y,  size, tall){
 //tail
 noFill();
 stroke(255,18,120);
 strokeWeight(5);
 arc(x-170,y+100,90,100,radians(0),radians(180),OPEN);
 arc(x-200,y+100,30,40,radians(180),radians(360), OPEN);
arc(x-210,y+100,50,50,radians(0),radians(180),OPEN);
 noStroke();
 
 //leg
 fill(250,190,220);
rect(x-90,y+120,30,70);
rect(x+60,y+120,30,70);
 
fill(0);
rect(x-90,y+170,30,30);
rect(x+60,y+170,30,30);
 
  //body
 fill(250,190,220);
 ellipse(x, y, size, tall);
 ellipse(x,y-130,230,210);
 //eyes
 fill(0);
 ellipse(x-50,y-150,35,35);
 ellipse(x+50,y-150,35,35);
 fill(255);
 ellipse(x-45,y-145,10,10);
 ellipse(x+55,y-145,10,10);
 
//nose
 fill(245,143,190);
 ellipse(x,y-100,100,80);
 
 //nose hole
fill(0);
 ellipse(x-20,y-100,15,30);
 ellipse(x+20,y-100,15,30);
 //ears
 fill(250,190,220);
 triangle(x-100,y-245,x-90,y-195,x-50,y-225);
 triangle(x+100,y-245,x+90,y-195,x+50,y-225);
 
 //in ears
 fill(245,214,240);
 triangle(x-94,y-238,x-85,y-200,x-58,y-221);
 triangle(x+94,y-238,x+85,y-200,x+58,y-221);
 
fill(255,18,129);
ellipse(x-80,y-120,40,20);
ellipse(x+80,y-120,40,20);
}
function drawOveractionbabybear(x,y)
{
   strokeWeight(2);
  
   //body
   fill(255);
   bezier(x-10, y+25, x-30, y+60, x-35, y+80, x-10, y+125);
   bezier(x+36, y+25, x+56, y+60, x+58, y+80, x+36, y+125);
   noStroke();
   rect(x-10, y+25, 46, 80);
   quad(x-10, y+105 ,x-10, y+125, x+8, y+125, x+5, y+105);
   quad(x+18, y+125, x+21, y+105, x+36, y+105, x+36, y+125);
  
   //leg
   stroke(0);
   line(x-10, y+125, x+8, y+125);
   line(x+36, y+125, x+18, y+125);
   line(x+8, y+125, x+5, y+105);
   line(x+18, y+125, x+21, y+105);
   line(x+5, y+105, x+21, y+105);
  
   //arm1
   bezier(x-15, y+35, x-40, y+20, x-70, y+40, x-15, y+70);
  
   //arm2
   bezier(x+41, y+35, x+63, y+20, x+93, y+40, x+41, y+70);
   //head
  
   fill(255);
   ellipse(x+13, y+7, 80, 80);
  
   //flush1
   stroke(247,217,240);
   fill(247,217,240);
   ellipse(x-5, y+8, 14, 12);
  
   //flush2
   stroke(247,217,240);
   fill(247,217,240);
   ellipse(x+31, y+8, 14, 12);
  
   //ear1
   stroke(0);
   fill(255);
   arc(x-13, y-20, 25, 27, PI/2+PI/4, 2*PI-PI/6);
  
   //ear2
   fill(255);
   arc(x+39, y-20, 25, 27, PI+PI/4, 2*PI+PI/4);
  
  
   //eye and mouth
   fill(0);
   ellipse(x, y, 2, 2);
   ellipse(x+26, y, 2, 2);
   triangle(x+4, y+6, x+22, y+6, x+13, y+18);
}
function drawManbo(x,y,size){ 
/* x= x position
   y= y position
   size= size
   */
  strokeWeight(size*0.007);
  stroke(0);
 
  //ear
  fill(0,100,105);
  arc(x-size*0.2,y-size*0.6,size*0.3,size*0.24,radians(274.4),radians(339));
  arc(x+size*0.2,y-size*0.6,size*0.3,size*0.24,radians(201),radians(265.8));
  arc(x,y-size*0.62,size*0.45,size*0.4,radians(172.5),radians(210));
  arc(x,y-size*0.62,size*0.45,size*0.4,radians(330.5),radians(367.5));
 
  //arm
  ellipse(x,y+size*0.04,size*1.16,size*0.4);
  arc(x,y+size*0.2,size*1.22,size*1.15,radians(200),radians(340));
 
  //head
  stroke(0);
 ellipse(x,y-0.48*size,size*0.55,size*0.4);
//face
  noStroke();
  fill(255,245,220);
  ellipse(x, y-0.42*size,size*0.40,size*0.30);
  fill(0,100,105);
  arc(x,y-0.65*size,size*0.2,size*0.2,radians(20),radians(160));
 
  //eye
 strokeWeight(size*0.007);
 stroke(0);
 line(x-size*0.15,y-size*0.495,x-size*0.07,y-size*0.505);
 line(x+size*0.15,y-size*0.495,x+size*0.07,y-size*0.505);
 
 //tooth
 noFill();
 arc(x,y-0.45*size,size*0.12,size*0.1,radians(189),radians(210));
 arc(x-size*0.102,y-0.45*size,size*0.13,size*0.1,radians(330),radians(350));
 arc(x,y-0.45*size,size*0.12,size*0.1,radians(330),radians(351));
 arc(x+size*0.102,y-0.45*size,size*0.13,size*0.1,radians(190),radians(210));
 
 //mouse
 arc(x,y,size,size*0.92,radians(263),radians(277));
 
  //body
  stroke(0);
  fill(0,100,105);
ellipse(x,y-size*0.02, size*0.98,size*0.75);
  //Bae?
  strokeWeight(size*0.007);
  fill(255,245,220);
  arc(x,y, size,size*0.79,radians(224.5), radians(315.8));
  arc(x,y-size*0.353,size,size*0.9,radians(45),radians(138));
  arc(x-size*0.11,y-size*0.105,size*0.9,size*1.2,radians(335),radians(370));
  arc(x+size*0.105,y-size*0.105,size*0.9,size*1.2,radians(169),radians(205.5)); 
  fill(0,100,105);
  arc(x,y+0.15*size,size*0.5,size*0.25,radians(206),radians(338));
  noStroke();
  arc(x,y+0.15*size,size*0.5-size*0.007,size*0.25-size*0.007,radians(180),radians(360));
  ellipse(x,y+0.15*size,size*0.3,size*0.2);
 //foot 
  stroke(0);
  fill(255,245,220);
  ellipse(x-size*0.29,y+size*0.3,size*0.38,size*0.3);
  ellipse(x+size*0.29,y+size*0.3,size*0.38,size*0.3);
  fill(170,117,87);
  ellipse(x-size*0.29,y+size*0.3,size*0.18,size*0.13);
  ellipse(x+size*0.29,y+size*0.3,size*0.18,size*0.13);
  
  //lettering?
  strokeWeight(size*0.013);
  line(x-size*0.45,y-size*0.48,x-size*0.38,y-size*0.48);
  line(x-size*0.45,y-size*0.48,x-size*0.38,y-size*0.55);
  line(x-size*0.45,y-size*0.55,x-size*0.38,y-size*0.55);
  line(x-size*0.44,y-size*0.51,x-size*0.40,y-size*0.51);
  strokeWeight(size*0.01);
  line(x-size*0.4,y-size*0.44,x-size*0.35,y-size*0.46);
  line(x-size*0.35,y-size*0.46,x-size*0.37,y-size*0.4);
  line(x-size*0.37,y-size*0.4,x-size*0.33,y-size*0.42);
  line(x-size*0.38,y-size*0.43,x-size*0.34,y-size*0.44);
}
function setup()
{
  createCanvas(700,500);
}
function draw()
{
  background(255);
  fill(23,221,228);
  rect(0,-5,708,180);
  fill(90,226,24);
  rect(0,170,708,348);
  drawCloud(523,74,98,58,255);
  drawCloud(171,74,98,58,255);
  drawFrog(50, 450, 50);
  drawFrog(150, 396, 50);
  drawFrog(250, 450, 50);
  drawFrog(350, 393, 50);
  drawFrog(646, 450, 50);
  drawFrog(107, 313, 50);
  drawFrog(205, 228, 50);
  drawFrog(250, 281, 50);
  drawFrog(296, 234, 50);
  drawFrog(389, 313, 50);
  drawOveractionbabybear(133,434);
  drawManbo(519,250,160);
  drawManbo(640,250,160);
  drawPig(485, 554, 328, 336);
  drawSSU(0.2);
}