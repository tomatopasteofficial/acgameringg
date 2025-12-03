let scene = 1; 
let startScreen = false;

let fontA;
let backButton; 

let title; 

let pBase; 
let vaniY; 
let straY; 
let mangY; 
let peacY; 

let vaniVani; 
let vaniStra; 
let vaniChoc; 
let vaniMatch;

let straVani; 
let straStra; 
let straChoc; 
let straMatch; 

let mangVani; 
let mangStra; 
let mangChoc; 
let mangMatch; 

let peacVani; 
let peacStra;
let peacChoc; 
let peacMatch; 

let topList = [];
let activeToppings = [];
let waf; 
let stra;
let redb; 
let cho; 
let gra; 
let spr;
let man; 
let coo; 
let clapSound; 

let tidePool; 
let seastar; 
let topsnail; 
let surfgrass; 
let mussels; 
let seaSound; 
let specSound; 

let dressList = []; 
let activeDress = []; 
let duBase; 
let sno;
let sno2;
let rei;
let rei2; 
let dra; 
let dra2; 
let mob; 
let mob2; 
let har; 
let har2;
let lucia = false; 

function preload(){
  
  fontA = loadFont('fontA.ttf');
  backButton = loadImage('backButton.png'); 
  
  title = loadImage('Title.png')
  pBase = loadImage('pbase.png'); 
  
  vaniY = loadImage('vaniY.png'); 
  vaniVani = loadImage('vaniVani.png'); 
  vaniStra = loadImage('vaniStra.png');
  vaniChoc = loadImage('vaniChoc.png');
  vaniMatch = loadImage('vaniMatch.png');
  
  straY = loadImage('strawY.png');
  straVani = loadImage('straVani.png');
  straStra = loadImage('straStra.png');
  straChoc = loadImage('straChoc.png');
  straMatch = loadImage('straMatch.png');
  
  mangY = loadImage('mangY.png');
  mangVani = loadImage('mangVani.png');
  mangStra = loadImage('mangStra.png');
  mangChoc = loadImage('mangChoc.png');
  mangMatch = loadImage('mangMatch.png');
  
  peacY = loadImage('peacY.png');
  peacVani = loadImage('peacVani.png');
  peacStra = loadImage('peacStra.png');
  peacChoc = loadImage('peacChoc.png');
  peacMatch = loadImage('peacMatch.png');
  
  cho = loadImage('toppings/cho.png');
  coo = loadImage('toppings/coo.png');
  gra = loadImage('toppings/gra.png');
  man = loadImage('toppings/man.png');
  redb = loadImage('toppings/red.png');
  waf = loadImage('toppings/waf.png');
  spr = loadImage('toppings/spr.png');
  stra = loadImage('toppings/str.png');
  
  tidePool = loadImage('tidepool/tidePool.png');
  seastar = loadImage('tidepool/seastar.png');
  topsnail = loadImage('tidepool/topsnail.png');
  surfgrass = loadImage('tidepool/surfgrass.png');
  mussels = loadImage('tidepool/mussel.png');
  
  seaSound = loadSound('tidepool/ocean.mp3');
  
  duBase = loadImage('dressup/Base.png');
  dra = loadImage('dressup/Dra.png');
  dra2 = loadImage('dressup/Dra2.png');
  har = loadImage('dressup/Har.png');
  har2 = loadImage('dressup/Har2.png');
  mob = loadImage('dressup/Mob.png');
  mob2 = loadImage('dressup/Mob2.png');
  sno = loadImage('dressup/Sno.png');
  sno2 = loadImage('dressup/Sno2.png');
  rei = loadImage('dressup/rei.png');
  rei2 = loadImage('dressup/rei2.png');
  lucia = loadImage('01.png'); 
  
}

function setup() {
  createCanvas(600, 600);
  
  topList.push(new Top (cho)); 
  topList.push(new Top (coo)); 
  topList.push(new Top (gra)); 
  topList.push(new Top (man)); 
  topList.push(new Top (redb)); 
  topList.push(new Top (spr)); 
  topList.push(new Top (stra)); 
  topList.push(new Top (waf));
  
  seaSound.stop(); 

  dressList.push(new Dress (dra)); 
  dressList.push(new Dress (dra2)); 
  dressList.push(new Dress (har));
  dressList.push(new Dress (har2)); 
  dressList.push(new Dress (mob)); 
  dressList.push(new Dress (mob2));
  dressList.push(new Dress (sno)); 
  dressList.push(new Dress (sno2)); 
  dressList.push(new Dress (rei));
  dressList.push(new Dress (rei2));
  dressList.push(new Top (lucia)); 
}


function button(bx, by, bd){
  if (dist(mouseX, mouseY, bx, by) < bd/2){
    return true; 
  }else{
    return false; 
  }
}

function draw() {
  background(200);
  
  drawScene(scene);

//pick game
  if (scene == 1){
    push(); 
    fill('black'); 
    textAlign(CENTER, CENTER); 
    textFont(fontA); 
    textSize(35); 
    text('Im so bored...What should I do?', 300, 90);
    text('> Cook', 230, 195);
    text('> See Tide Pools', 279, 295);
    text('> Dress Up', 255, 395);
    pop();
    
    push(); 
    noStroke(); 
    fill(255, 255, 255, 50); 
    circle(210, 199, 30);
    circle(210, 300, 30);
    circle(210, 403, 30); 
    pop(); 
  }

//return
  if (scene == 2 || scene == 3 || scene == 4 || scene == 5 || scene == 6 || scene == 7 || scene == 8 || scene == 9 || scene == 10 || scene == 11 || scene == 12 || scene == 13 || scene == 14 || scene == 15 || scene == 16 || scene == 17 || scene == 18 || scene == 19 || scene == 20 || scene == 21 || scene == 22 || scene == 23 || scene == 28){
    image(backButton, 5, 5, 30, 30); 
  }
  
//yogurt select
  if (scene == 2){
    push(); 
    fill('pink'); 
    textAlign(CENTER, CENTER); 
    textFont(fontA); 
    textSize(35); 
    text('Were making parfaits! Pick a yogurt!', 300, 15); 
    pop();
    
    push();
    fill('white'); 
    textAlign(CENTER, CENTER); 
    textFont(fontA); 
    textSize(25); 
    text('>vanilla >strawberry >mango >peach', 300, 55); 
    pop(); 
    
    push(); 
    noStroke();
    fill(255, 255, 255, 50);
    circle(195, 60, 20);
    circle(270, 60, 20);
    circle(350, 60, 20);
    circle(410, 60, 20);
    pop(); 
  }

//icecream select
  if (scene == 3 || scene == 8 || scene == 13 || scene == 18){
    push(); 
    fill('pink'); 
    textAlign(CENTER, CENTER); 
    textFont(fontA); 
    textSize(35); 
    text('Pick an ice cream!', 300, 15); 
    pop();
    
    push();
    fill('white'); 
    textAlign(CENTER, CENTER); 
    textFont(fontA); 
    textSize(25); 
    text('>vanilla >strawberry >choco >matcha', 300, 55); 
    pop();
    
    push(); 
    noStroke();
    fill(255, 255, 255, 50);
    circle(195, 60, 20);
    circle(270, 60, 20);
    circle(350, 60, 20);
    circle(410, 60, 20);
    pop(); 
  }

//pick toppings
  if (scene == 4 || scene == 5 || scene == 6 || scene == 7 || scene == 9 || scene == 10 || scene == 11 || scene == 12 || scene == 14 || scene == 15 || scene == 16 || scene == 17 || scene == 19 || scene == 20 || scene == 21 || scene == 22){
    push(); 
    fill('pink'); 
    textAlign(CENTER, CENTER); 
    textFont(fontA); 
    textSize(35); 
    text('Pick toppings!', 300, 15); 
    pop();
    
    push();
    fill('white'); 
    textAlign(CENTER, CENTER); 
    textFont(fontA); 
    textSize(25); 
    text('>waf-w >stra-s >redb-r >choc-c >gran-g >spri-p >coo-o >mang-m', 300, 55);
    pop();
    
    for (let i = 0; i < activeToppings.length; i++) {
      activeToppings[i].update();
    }
  }


//back to tidepool
    if (scene == 24 || scene == 25 || scene == 26 || scene == 27){
    image(backButton, 5, 5, 30, 30); 
  }
  
//creature info 
  if (scene == 24){
    fill('#FFF5D5'); 
    textAlign(CENTER, CENTER); 
    textFont(fontA); 
    textSize(25); 
    textWrap(WORD); 
    text('Mussels can filter ocean water to eat plankton. They are sensitive to chemicals, so theyre good indicators of environment health.', 0, 150, 600); 
  }
  
  if (scene == 25){
    fill('#FFF7E1'); 
    textAlign(CENTER, CENTER); 
    textFont(fontA); 
    textSize(25); 
    textWrap(WORD); 
    text('Ochre sea stars are a keystone species because they prey on mussels, which gives the pool more biodiversity.', 0, 150, 600);
  }
  
  if (scene == 26){
    fill('#FFFBF0'); 
    textAlign(CENTER, CENTER); 
    textFont(fontA); 
    textSize(25); 
    textWrap(WORD); 
    text('Norris top snail empty shells are often used by hermit crabs.', 0, 150, 600);
  }
  
  if (scene == 27){
    fill('#FFF8E3'); 
    textAlign(CENTER, CENTER); 
    textFont(fontA); 
    textSize(25); 
    textWrap(WORD); 
    text('Surfgrass cleans the water and traps sediments, so its especially important during natural disasters. It houses and nurses many different types of marine life. It also stores a lot of carbon.', 0, 150, 600);
  }
  
//dressup 
  if (scene == 28){
    for (let i = 0; i < activeDress.length; i++) {
      activeDress[i].update();
    }
  }
}

//different scenes 
function drawScene(sceneNum) {
  switch (sceneNum) {
    case 1:
      background(title);  
      startScreen = true;  
      break;
    case 2:
      background(pBase);
      startScreen = false;
      break;
    case 3:
      background(vaniY);
      startScreen = false; 
      break;
    case 4:
      background(vaniVani);
      startScreen = false;
      break;
    case 5:
      background(vaniStra);
      startScreen = false;
      break;
    case 6:
      background(vaniChoc);
      startScreen = false;
      break;
    case 7:
      background(vaniMatch);
      startScreen = false;
      break;
    case 8:
      background(straY);
      startScreen = false;
      break;
    case 9:
      background(straVani);
      startScreen = false;
      break;
    case 10:
      background(straStra);
      startScreen = false;
      break;
    case 11:
      background(straChoc);
      startScreen = false;
      break;
    case 12:
      background(straMatch);  
      startScreen = true;  
      break;
    case 13:
      background(mangY);
      startScreen = false;
      break;
    case 14:
      background(mangVani);
      startScreen = false; 
      break;
    case 15:
      background(mangStra);
      startScreen = false;
      break;
    case 16:
      background(mangChoc);
      startScreen = false;
      break;
    case 17:
      background(mangMatch);
      startScreen = false;
      break;
    case 18:
      background(peacY);
      startScreen = false;
      break;
    case 19:
      background(peacVani);
      startScreen = false;
      break;
    case 20:
      background(peacStra);
      startScreen = false;
      break;
    case 21:
      background(peacChoc);
      startScreen = false;
      break;
    case 22:
      background(peacMatch);
      startScreen = false;
      break;
    case 23:
      background(tidePool);
      startScreen = false;
      break;
    case 24:
      background(mussels);
      startScreen = false;
      break;
    case 25:
      background(seastar);
      startScreen = false;
      break;
    case 26:
      background(topsnail);
      startScreen = false;
      break;
    case 27:
      background(surfgrass);
      startScreen = false;
      break;
    case 28:
      background(duBase);
      startScreen = false;
      break;
  }
}

function mousePressed(){
  //choose what to do
  if(startScreen == true){
    if(scene == 1){
      if (button(210, 199, 30) == true) {
        scene = 2;
        // console.log('cook');
      }
      if (button(210, 300, 30) == true) {
        scene = 23; 
        // console.log('tidepool');
      }
      if (button(210, 403, 30) == true) {
      scene = 28; 
      // console.log('dressup');
      }
    }
  }
   
//return to title
  if (scene == 2 || scene == 3 || scene == 4 || scene == 5 || scene == 6 || scene == 7 || scene == 8 || scene == 9 || scene == 10 || scene == 11 || scene == 12 || scene == 13 || scene == 14 || scene == 15 || scene == 16 || scene == 17 || scene == 18 || scene == 19 || scene == 20 || scene == 21 || scene == 22 || scene == 23 || scene == 28){
    if (button(20, 20, 20) == true){
      scene = 1; 
      // console.log('title'); 
    }
  }
  
  
//pick yogurt flavor
  if (scene == 2){
    if (button(195, 60, 20) == true){
      scene = 3;
      return;
    }
    if (button(270, 60, 20) == true){
      scene = 8;
      return;
    }
    if (button(350, 60, 20) == true){
      scene = 13;
      return;
    }
    if (button(410, 60, 20) == true){
      scene = 18;
      return;
    } 
  }

//pick icecream flavor 
//vaniY
  if (scene == 3){
    if (button(195, 60, 20) == true){
      scene = 4;
      return;
    }
    if (button(270, 60, 20) == true){
      scene = 5;
      return;
    }
    if (button(350, 60, 20) == true){
      scene = 6;
      return;
    }
    if (button(410, 60, 20) == true){
      scene = 7;
      return;
    }
  }

//straY
  if (scene == 8){
    if (button(195, 60, 20) == true){
      scene = 9;
      return;
    }
    if (button(270, 60, 20) == true){
      scene = 10;
      return;
    }
    if (button(350, 60, 20) == true){
      scene = 11;
      return;
    }
    if (button(410, 60, 20) == true){
      scene = 12;
      return;
    }
  }

//mangY
  if (scene == 13){
    if (button(195, 60, 20) == true){
      scene = 14;
      return;
    }
    if (button(270, 60, 20) == true){
      scene = 15;
      return;
    }
    if (button(350, 60, 20) == true){
      scene = 16;
      return;
    }
    if (button(410, 60, 20) == true){
      scene = 17;
      return;
    }
  }

//peacY
  if (scene == 18){
    if (button(195, 60, 20) == true){
      scene = 19;
      return;
    }
    if (button(270, 60, 20) == true){
      scene = 20;
      return;
    }
    if (button(350, 60, 20) == true){
      scene = 21;
      return;
    }
    if (button(410, 60, 20) == true){
      scene = 22;
      return;
    }
  }
  
//tidepool creatures
  if (scene == 23){
    if (button(42, 295, 20) == true){
      scene = 24;
      return;
    }
    if (button(286, 183, 20) == true){
      scene = 25;
      return;
    }
    if (button(358, 455, 20) == true){
      scene = 26;
      return;
    }
    if (button(535, 242, 20) == true){
      scene = 27;
      return;
    }
  }
  
//back to tidepool
  if (scene == 24 || scene == 25 || scene == 26 || scene == 27){
    if (button(20, 20, 20) == true){
      scene = 23; 
      return; 
    }
  }

//sea sound
  if (scene == 23 || scene == 24 || scene == 25 || scene == 26 || scene == 27){ 
      seaSound.play(); 
    } else {
      seaSound.stop(); 
    }
  
  if (scene == 24){
    if (button(30, 540, 30) == true){
      lucia = true; 
      // console.log('luc'); 
    }
  }
}


function keyPressed() {
// only activate toppings in certain scenes 
  if (scene === 4 || scene === 5 || scene === 6 || scene === 7 || scene === 9 || scene === 10 || scene === 11 || scene === 12 || scene === 14 || scene === 15 || scene === 16 || scene === 17 || scene === 19 || scene === 20 || scene === 21 || scene === 22 
  ) {
    if (key === 'c') toggleTopping(topList[0]); 
    if (key === 'o') toggleTopping(topList[1]); 
    if (key === 'g') toggleTopping(topList[2]); 
    if (key === 'm') toggleTopping(topList[3]); 
    if (key === 'r') toggleTopping(topList[4]); 
    if (key === 'p') toggleTopping(topList[5]); 
    if (key === 's') toggleTopping(topList[6]); 
    if (key === 'w') toggleTopping(topList[7]); 
  }
  
// only activate dress in scene 
  if (scene === 28) {
    if (key === 'a') toggleDress(dressList[0]); 
    if (key === 'b') toggleDress(dressList[1]);
    if (key === 'd') toggleDress(dressList[2]);
    if (key === 'e') toggleDress(dressList[3]);
    if (key === 'f') toggleDress(dressList[4]);
    if (key === 'h') toggleDress(dressList[5]);
    if (key === 'i') toggleDress(dressList[6]);
    if (key === 'j') toggleDress(dressList[7]);
    if (key === 'k') toggleDress(dressList[8]);
    if (key === 'l') toggleDress(dressList[9]);
      if (lucia == true){
        if (key === '1') toggleDress(dressList[10]);
      }
  }
}

function toggleTopping(topping) {
  let index = activeToppings.indexOf(topping);
  if (index > -1) {
    // Already selected — remove it
    activeToppings.splice(index, 1);
  } else {
    // Not selected — add it
    activeToppings.push(topping);
  }
} 

function toggleDress(dress) {
  let index = activeDress.indexOf(dress);
  if (index > -1) {
    activeDress.splice(index, 1);
  } else {
    activeDress.push(dress);
  }

}

///////////// CLASSES /////////////
class Top {
  constructor(img){
    this.img = img; 
  }
  update(){ 
    image(this.img, 0, 0); 
  }
}

class Dress {
  constructor(img2){
    this.img2 = img2; 
  }
  update(){ 
    image(this.img2, 0, 0, 600, 600); 
  }
}