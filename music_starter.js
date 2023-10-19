

let firstRun = true;
let pearl = [];


// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(113, 106, 189);
 
  fill(79, 69, 99); // ground 
  ellipse(700,1100, 3000,1000);
 
if(firstRun){

  rectMode(CENTER);
  pearl.push (loadImage( 'pearl0.png'));
  pearl.push(loadImage( 'pearl1.png'));

 firstRun = false

}

let pFrame = map(drum, 0, 100, 0, 3);

if (drum <= 40){

  pFrame = 0;
}
else {
  pFrame = 1;
}

console.log(pFrame);
push();
scale(0.3);
image(pearl[pFrame], width, height/2.5);

fill(174, 179, 242); 

let ballSize  = map(bass, 0, 100, 0, 50);

strokeWeight(0);
 ellipse(600, 300 ,ballSize*1.2); // stars mapped to the vocals | brighter stars
 ellipse(900, 400 ,ballSize*1);
 ellipse(450, 200 ,ballSize);
 ellipse(250, 400 ,ballSize*1.2);
 ellipse(3000, 1200 ,ballSize);
 ellipse(2000, 100 ,ballSize*1);
 ellipse(1500, 300 ,ballSize*1.1);
 ellipse(3500, 150 ,ballSize*1.2);
 ellipse(3200, 50 ,ballSize*1.3);
 ellipse(3900, 800 ,ballSize*1.1);
 ellipse(2000, 400 ,ballSize*1);
 ellipse(100, 800 ,ballSize*1);

 fill(136, 139, 191);  // darker stars 
 ellipse(1200, 700 ,ballSize*0.4);
 ellipse(2500, 500 ,ballSize*1.3);
 ellipse(3400, 750 ,ballSize*1.3);
 ellipse(3800, 100 ,ballSize*1.35);
 ellipse(2200, 500 ,ballSize);
 ellipse(1500, 800 ,ballSize*1.3);
 ellipse(600, 1000 ,ballSize*0.4);
 ellipse(500, 1500 ,ballSize*1.3);
 ellipse(800, 1300 ,ballSize*1.3);
 ellipse(250, 1100 ,ballSize*1.3);
 ellipse(1800, 1500 ,ballSize*1);
 ellipse(1400, 1200 ,ballSize*1);
 ellipse(2100, 1200 ,ballSize*1.3);
 ellipse(3800, 900 ,ballSize*1.38);

 fill(227, 217, 250); // moon 
 ellipse(820, 400, 600, 600);
 fill(247, 245, 252);
 ellipse(800, 400, 600, 600);

 fill(126, 116, 207);        // lighter clouds 
 ellipse(3000, 100, 600,300);
 ellipse(3400, 100, 600,400);
 ellipse(3200, 30, 400,500);

 ellipse(30, 1200, 600,400);
 ellipse(40, 1200, 600,400);
 ellipse(20, 1000, 600,500);
 
 fill(144, 135, 214);        // darker clouds 
 ellipse(1000, 500, 400,300);
 ellipse(1400, 500, 500,400);
 ellipse(1200, 400, 500,500);

 ellipse(4000, 1000, 600,400);
 ellipse(4400, 1000, 600,400);
 ellipse(4300, 800, 600,500);

}