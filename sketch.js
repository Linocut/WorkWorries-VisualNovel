let firstMessage; 
let itemMessage; 
let currentMessage; 
let boxLeft;
let boxRight; 

let tsukiImg; 
let akujiImg; 
let cliffImg; 
let camImg; 
let hiroImg; 
let hiroDuo; 
let tsukiDuo; 
let tsukiCliff; 

let bgFall;
let bgCafe;
let bgOffice; 
let backgroundImg; 


let music; 

let img;
let img2; 
var cnv;
let toggleFullscreenButton; 

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
   if (toggleFullscreenButton) {
    toggleFullscreenButton.position(cnv.x + width - 80, cnv.y + 10);
  }
}


let gameState = {
  gameEnd: false, 
  officeBG: false, 
  cafeBG: false, 
 
};

function preload()
{
 
  boxLeft = loadImage('BoxLeft.png');
  boxRight = loadImage('BoxRight.png');
  tsukiImg = loadImage("TsukiImg.png");
  akujiImg =  loadImage("AkujiImg.png");
  cliffImg = loadImage("CliffImg.png");
  hiroImg = loadImage("HiroImg.png");
  camImg = loadImage("CamImg.png");
  hiroDuo = loadImage("HiroDuo.png");
  tsukiDuo = loadImage("TsukiDuo.png");
  tsukiCliff = loadImage("tsukiCliff.png");
  
  bgFall = loadImage("BGFall.png");
  bgCafe = loadImage("BGCafe.png");
  bgOffice = loadImage("BGOffice.png");
  

  music = loadSound('Gemini.mp3');	
  img = createImg('ButtonImg.png', 'Fullscreen Button');  
  img2 = createImg('ButtonImg2.png', 'Fullscreen Button'); 
  img.hide(); 
  img2.hide(); 
} 
function windowResized() {
  centerCanvas();
  
}
function setup() {
    pixelDensity(1);

  backgroundImg = bgFall; 
      
  
   cnv = createCanvas(855 ,405);   //19:9 scaled 45

  centerCanvas();
  toggleFullscreenButton = createButton('');
   img.show(); 
  toggleFullscreenButton.child(img); 
  toggleFullscreenButton.position(cnv.x + width - 80, cnv.y + 10); // Upper-right corner with a margin
  toggleFullscreenButton.style('background', 'none');
  toggleFullscreenButton.style('border', 'none');
  toggleFullscreenButton.mousePressed(toggleFullscreen);
  background(255, 0, 200);
  
  gameEnd = false; 
 // music.loop();
  
 let endMes = new message("" ,[], null, null, 0);
  
  let restartChoice = new choice("Restart Game. ", endMes);
  let restartArray = [restartChoice]; 
  
   let fQ = new message("It appears the issue was solved. It's a good thing too, they could enjoy their trip better." ,restartArray, null, null);
   let fP = new message("Akuji & Tsuki: 'No problem.' " ,[], fQ, tsukiDuo);
  let fO = new message("Cliff: 'Wha-oh..' He frowns slightly, 'I'm sorry for being rude lately. Thank you for helping me with this.'" ,[], fP, tsukiCliff);
  let fN = new message("Tsuki: 'Well, feel better? Akuji was worried about you when I got here.'" ,[], fO, tsukiCliff);
  let fM = new message("Cliff: He appears to have tension drain from his shoulders. His eyebrows are more relaxed, 'That might be okay..'" ,[], fN, tsukiCliff);
  let fL = new message("Hiro: 'If that's not enough, I'll have them sit out next trip. No one in Higyu is rude enough for them to have an excuse.'" ,[], fM, hiroImg);
  let fK = new message("Hiro: 'I suppose..' He thinks before announcing, 'I'll threaten any student who messes up with doing farm work, they'll hate it.'" ,[], fL, hiroImg);
  let fJ = new message("Tsuki: 'I get you don't want to go somewhere else, but is there anything you could do that would lessen risk?'" ,[], fK, tsukiImg);
  let fI = new message("Tsuki: She notices that Cliff and Akuji both look sheepish. Neither of them seem to be winning this, or anything for that matter." ,[], fJ, tsukiImg);
  let fH = new message("Hiro: 'I've made up my mind, there's no reasonable excuse not to go, it's cheap and close to an important eastern city.' He says sternly." ,[], fI, hiroImg); 
  let fG = new message("Akuji: 'There's so many other places, why not choose somewhere else Hiro?'" ,[], fH, tsukiDuo); 
    let fF = new message("Hiro: 'You worry too much, I'll handle it fine. Have I ever not?'" ,[], fG, hiroImg); 
  let fE = new message("Cliff: 'You can't guarantee that. Even if we go there to solve an issue, it's usually right on the edge of being kicked out.'" ,[], fF, tsukiCliff); 
  let fD= new message("Hiro: 'There's nothing wrong with Higyu. I get you're mad, but nothing bad is going to happen. Get over it.'",[], fE, hiroImg); 
  let fC = new message("Cliff: 'Yes I do. Let's not go to Higyu.'" ,[], fD, tsukiCliff); 
  let fB = new message("Hiro: 'I see you're back, well Cliff got anything to say?'" ,[], fC, hiroImg); 
 let fA = new message("Tsuki: Looking around, she finds Hiro where he was before. Cammon is no where to be seen. She walks over with Akuji and Cliff." ,[], fB, tsukiImg, 2); 
  
  // f for final act 
  
  let oP = new message("Cliff: He leads them out of the office and up the stairs back to the cafeteria." ,[], fA, cliffImg)
  let oO = new message("Akuji & Tsuki: 'Cafeteria.'" ,[], oP, tsukiDuo);
   let oN = new message("Cliff: 'Thank you, do you know where he is?' He turns to his door." ,[], oO, cliffImg);
  let oM = new message("Akuji: 'Tsuki, please don't fight anyone.- But I agree with going there, we might be able to help." ,[],oN, tsukiDuo);
  let oL = new message("Tsuki: 'We'll be there too, if he ignores you I'll fight him.'" ,[], oM, tsukiImg);
  let oK = new message("Cliff: He gives a saddened sigh, 'I've already spoken with him. He just dismissed it.'" ,[], oL, cliffImg);
  let oJ = new message("Tsuki: 'I think Cliff will need to come with us. Your boss did not look like he'd want to listen to an outsider on this.'" ,[], oK, tsukiImg);
   let oI = new message("Akuji: 'We can talk to Hiro then for you and explain how you feel. Right Tsuki?'" ,[], oJ, tsukiDuo);
   let oH = new message("Cliff: 'I don't feel comfortable with my work going to where my family is. The students are insane, last trip I bailed one out of jail.'" ,[], oI, cliffImg);
  let oG = new message("Akuji: 'Is it because it's to Higyu? If you're worried about it, we can talk to Hiro.'" ,[], oH, tsukiDuo);
  let oF = new message("Cliff: He frowns as his eyebrows lower, 'I wish, I'm actually dreading it.'" ,[], oG, cliffImg);
   let oE = new message("Tsuki: 'I talked to your boss earlier and heard there's a trip coming up. Maybe you'll be less bored then?'" ,[], oF, tsukiImg);
  let oD = new message("Cliff: 'I'm not that busy, just stressed. Sorry if I seem bored. It is nice to meet you, genuinely.'" ,[], oE, cliffImg );
   let oC = new message("Tsuki: 'Akuji asked me that same question earlier funnily enough. I imagine you're busy so I won't bore you with details.'" ,[], oD, tsukiImg);
  let oB = new message("Cliff: 'Hello, nice to meet you tsuki. How was the trip getting here?' He asks in a disinterested tone." ,[], oC, cliffImg );
  let oA = new message("Akuji: 'Hello Cliff, this is my friend Tsuki.'" ,[], oB, tsukiDuo, 1);
  
  
  
  
  //o for office
  let iH = new message("Akuji: 'I'll go with you tsuki.' He says before guiding Tsuki down the stairs, into a hallway, and into an office." ,[], oA, akujiImg);
  let iG = new message("Hiro: 'Go ahead, his office is downstairs if you want to waste your breath.'" ,[], iH, hiroImg);
  let iF = new message("Tsuki: '...I'm starting to see the issue. Maybe I can talk to him.'" ,[], iG, tsukiImg);
  let iE = new message("Hiro: 'Well, if that's the case, he should tell me so I can tell him to get over it.'",[], iF, hiroImg);
   let iD = new message("Tsuki: 'Do you think that's why he's been mean lately? He could be worried about seeing is folks if that's an issue for him.'",[], iE, tsukiImg);
  let iC = new message("Hiro: 'Sure is, his folks are the best. It'd make the trip cheaper too.'",[], iD, hiroImg);
  let iB = new message("Akuji: '...Is that not where Cliff's family lives?'",[], iC, tsukiDuo);
  let iA = new message("Hiro: 'To the island of Higyu in the east. It's off the the coast of Veegostan.'",[], iB, hiroImg);
  
  //name change for issue presentation
  let hmF = new message("Tsuki: 'I know your school goes on trips, where is the next one?'",[], iA, tsukiImg);
  let hmE = new message("Hiro: 'He's been mad ever since I announced where we are going for the next trip. Don't take it personally, he'll be fine.'",[], hmF, hiroImg);
  let hmD = new message("Akuji: He frowns, 'Don't brush me off, he never gets mad when I catch him in conversation but lately he's been irritated about everything.'",[], hmE, tsukiDuo);
  let hmC = new message("Cammon: 'He was mad at me earlier as well. Nothing new though.'",[], hmD, hiroDuo);
  let hmB = new message("Hiro: 'Not everything is about you Akuji, he was mad at the trash bin earlier.'",[], hmC, hiroImg);
  let hmA = new message("Akuji: 'I had mentioned to Tsuki that he was meaner than usual. To me, at least.' He frowns in guilt.",[], hmB, tsukiDuo);
  
  
  let hsE = new message("Hiro: 'If I had to pin point when he started being extra extra rude, it'd probably be when I mentioned the next trip location.'",[], hmF, hiroDuo);
  let hsD = new message("Cammon: 'Saying that to you is so rude... ' He says to Akuji before sighing in resignation. 'But he's always like that. I don't know whats different.'",[], hsE, hiroDuo);
  let hsC = new message("Hiro: 'If he was serious about his work load lessening, he'd take up that offer. His work has been consistent regardless.'",[], hsD, hiroImg);
  let hsB = new message("Akuji: 'I do see him work a lot. I offered to take some of it but he said something about how I write is crawling backwards.'",[], hsC, tsukiDuo);
  let hsA = new message("Tsuki: I don't know what his workload is like, but if it's a lot maybe he needs a break.",[], hsB, tsukiImg);
  
   let heMad = new choice(" Do you know why? ", hmA);
  let heStressed= new choice(" Is he stressed?", hsA);
  let feelingChoiceArray = [heMad, heStressed]; 
  
   let plA =  new message("Hiro: His eyebrows tense in annoyance, 'More than I'd like that's for sure. He should knock it off.'",feelingChoiceArray, null, hiroImg);
  
  //naming change from bt to pl for plot - main talk of issue 
  let btZ =  new message("Tsuki: 'Right, I wanted to ask a few questions about Cliff actually. I've never met the guy, but I heard he's ruder than usual- is that true?'",[], plA, tsukiImg);
  let btY =  new message("Hiro: 'He'll notice, he's been especially lame recently.'",[], btZ, hiroDuo);
  let btX =  new message("Cammon: 'What does he care? He'll barely notice unless someone points it out.'",[], btY, hiroDuo);
  let btW =  new message("Hiro: 'Cam, you look stupid enough. At this rate Cliff's going to complain to me all day about your uniform. I'll never hear the end of it.'",[], btX, hiroDuo);
  let btV =  new message("Tsuki: 'It's just a hand me down from home. If you want, I could let you borrow it later.'",[], btW, tsukiImg);
  let btU =  new message("Cammon: 'Miss, that helmet looks super cool! Where did you get it?'",[], btV, hiroDuo);
  let btT =  new message("Tsuki: 'Rough shoulders, not a tense bone in my body. Do you have a minute to talk?' She asks but before Hiro could respond, the other figure speaks up.",[], btU, tsukiImg);
  let btS =  new message("Hiro: 'Is this your guest Akuji? She seems tense.'",[], btT, hiroImg);
  let btR =  new message("Tsuki: 'I don't think I have much of a choice right now..' She glances over to see the two people in the back making their way over.",[], btS, tsukiImg);
  let btQ =  new message("Akuji: 'Yeah, I forgot you haven't met him. I can introduce you now or if you want you could talk to my boss.'",[], btR, akujiImg);
  let btP =  new message("Tsuki: 'Cliff's your coworker right?'",[], btQ, tsukiImg );
  let btO =  new message("Akuji: 'I have my boss, he's sitting in the back. If you want, you can talk to him. Or we can go to Cliff's office.'",[], btP, akujiImg );
  let btN =  new message("Tsuki: 'Are you able to talk to anyone else at work? I'm serious about talking to him if you need it.'",[], btO, tsukiImg );
  let btM =  new message("Akuji: 'I'm worried about him. I don't know if he's mad at something I did.'",[], btN, akujiImg );
  let btL =  new message("Tsuki: 'Need me to talk to him? I could teach him a lesson or two.'",[], btM, tsukiImg );
  let btK =  new message("Akuji: 'What? No he's not violent, just passive agressive.'",[], btL, akujiImg );
  let btJ =  new message("Tsuki: 'Huh, so he's the violent type?'",[], btK, tsukiImg );
 let btI =  new message("Akuji: 'He's been angry more often. I think something is wrong but I'm afraid to ask.'",[], btJ, akujiImg );
   let btH =  new message("Akuji: He looks back with a troubled expression. ' One of my coworkers has been avoiding me.'",[], btI, akujiImg );
  let btG =  new message("Tsuki: 'Something wrong?'",[], btH, tsukiImg );
  let btF =  new message("Akuji: He looks over towards two people sitting away from the stairs. He gives a sigh after scanning the place.",[], btG, akujiImg );
  let btE =  new message("Tsuki: She was led upstairs into the cafeteria. She thought it was strangely dark despite the hour.",[], btF, tsukiImg, 2 );
  let btD =  new message("Tsuki: 'Lead the way.'",[], btE , tsukiImg );
  
  
    let gtF = new message("Akuji: 'pft.. I was only joking. Follow me, we have a great cafeteria.'",[],btD,akujiImg);
  let gtE = new message("Tsuki: 'Yeah yeah, woe is you. So are you going to invite me inside or are we just going to stare at the trees?'",[], gtF,tsukiImg);
  let gtD = new message("Akuji: 'We do, but I haven't been on a trip yet. Instead, I'm locked away from the world.'",[], gtE,akujiImg);
  let gtC = new message("Tsuki: 'I thought your work travels?'",[], gtD,tsukiImg);
  let gtB = new message("Akuji: 'Must be fun, I miss traveling.'",[], gtC,akujiImg);
  let gtA = new message("Tsuki: 'Nothing too crazy to note. Only some interesting sight seeing.'",[], gtB,tsukiImg);
  
  
  
  
  let btC = new message("Akuji: 'That's worrying, I hope everything is alright. If you're not tired, we can head inside.'",[], btD, akujiImg);
  let btB = new message("Tsuki: 'I avoided them but not without delaying my arrival.'",[], btC, tsukiImg );
  let btA = new message("Tsuki: 'There were people in south west border who were way to friendly. It made me uncomfortable, considering they had weapons.'",[], btB, tsukiImg);
  
  //  writing changed, introA through letter will be naming convention for shorter 
  let goodTrip = new choice(" It was a decent travel. ", gtA);
  let badTrip = new choice(" I ran into trouble... ", btA);
  let tripChoiceArray = [goodTrip, badTrip]; 
  
  let introA = new message("Akuji: 'To be honest, it's been hard for me to adjust.' He trails off in thought before changing the subject, 'How was the trip?'",tripChoiceArray, null, akujiImg);
  
  let secondMessage = new message("Tsuki: 'Don't worry about it, I'm glad you did in the end. We miss you back home. Have you been well?'",[], introA, tsukiImg);
  
 
  firstMessage = new message("Akuji: 'It's been a while, I'm sorry for not reaching out earlier. Recently, life's been busy but we should catch up soon.' ", [], secondMessage, akujiImg); 
  currentMessage = firstMessage; 

  // Set text properties
  textSize(24);
  textAlign(LEFT, TOP);
}


function draw() {
  background(220);
 
  currentMessage.display(); 
   if(gameState[0] == true){
     restart(); 
     currentMessage.display(); 
   }
  

  
}
function restart(){
  currentMessage = firstMessage; 
  gameState[0] = false;
   backgroundImg = bgFall; 
      

  
}
function startMusic() {

  // Play music if it's not already playing
  if (!music.isPlaying()) {
    music.loop();
    console.log('Music started playing.');
  }
}
function mouseClicked() {

    let audioCtx = getAudioContext();
  if (audioCtx.state !== 'running') {
    audioCtx.resume().then(() => {
      console.log('Audio context resumed successfully.');
      startMusic();
    }).catch(err => {
      console.error('Error resuming audio context:', err);
    });
  } else {
    startMusic();
  }
  
  
  
  if(currentMessage.nextMessage != null){
      currentMessage = currentMessage.nextMessage; 

  }
  if(currentMessage.choiceArray != null){
    if(currentMessage.choiceArray.length > 0 ){

      for (let i = 0; i < currentMessage.choiceArray.length; i++) {
      let rectValues = currentMessage.choiceArray[i].getRect(); 
      if ( mouseX >  rectValues[0]  && mouseX <  rectValues[0] + rectValues[2] &&
          mouseY >  rectValues[1] && mouseY < rectValues[1]  + rectValues[3] ) {
   
          currentMessage.choiceArray[i].onClick();
        } 
      }
    }
  }


}
function toggleFullscreen() {
  let fs = fullscreen(); // Check current fullscreen state
  fullscreen(!fs); // Toggle fullscreen state
 
   if (fs) {
     img.show(); 
     img2.hide(); 
    toggleFullscreenButton.child(img);  // Set the image for exiting fullscreen
  } else {
    img2.show(); 
    img.hide(); 
    toggleFullscreenButton.child(img2); // Set the image for entering fullscreen
  }
}
class message{
  
  constructor(messageText, choiceArray, nextMessage, imageVar, varIndex ){
    this.messageText = messageText; 
    this.choiceArray = choiceArray; 
    this.nextMessage = nextMessage; 
    this.imageVar = imageVar; 
    this.varIndex = varIndex; 
    
  }
  display(){
    //set Var 
   
    
    if(gameState != null){

      gameState[this.varIndex] = !gameState[this.varIndex] ; 
      if(this.varIndex == 1){
         backgroundImg = bgOffice; 
      }
      if(this.varIndex ==2){
         backgroundImg = bgCafe; 
      }
      
    }

    
    image(backgroundImg, 0, 0);

    //draw tsuki ( shes always there)
    image(tsukiImg, 0, 0);
    if(this.imageVar != null){
       image(this.imageVar,0,0);
    }
   
    
    //draw message box 
    if(this.imageVar == tsukiImg || this.imageVar == tsukiDuo){
       image(boxRight, 0, 0);
    }
    else{
      image(boxLeft, 0, 0);
    }
    
    
    
    //display the choices
    if(this.choiceArray != null){
      if (this.choiceArray.length > 0) {
          for (let i = 0; i < this.choiceArray.length; i++) {
             this.choiceArray[i].setYPosition(300 + i * 40); 
            this.choiceArray[i].display(); 
          }
        }
    }
    
    //display the message 
    fill(255);
    stroke(0);
    strokeWeight(4);
    if(this.imageVar != tsukiImg &&  this.imageVar != tsukiDuo){
      text(this.messageText,40,270, 440, 130);
    }
    else{
      text(this.messageText,390,270, 440, 130);
    }
    
    
    
  }
 
}
class choice{
  constructor(choiceText, nextMessage){
    this.choiceText = choiceText; 
    this.nextMessage = nextMessage; 
    this.yPosition = 0; 
    this.xPosition = 600; 
  }
  setYPosition(inputYPosition){
    this.yPosition = inputYPosition; 
  }
  display(){
    //cant define the height and width in the construction as it changes 
    let foundTextWidth = textWidth(this.choiceText);
    let textHeight = textAscent() + textDescent();
    
    fill(110,120,122);
    stroke(34,33,41);
    rect(this.xPosition, this.yPosition, foundTextWidth, textHeight);
    stroke(0);
    fill(255);
    text(this.choiceText,this.xPosition , this.yPosition); 
    
  }
  onClick(){
    //check if the user clicks on the rect 
    currentMessage = this.nextMessage; 
    
  }
  getRect(){
    //this should return the rectangle of the text 
    let foundTextWidth = textWidth(this.choiceText);
    let textHeight = textAscent() + textDescent();
    let rectInfo = [this.xPosition, this.yPosition, foundTextWidth, textHeight]; 
    return rectInfo; 
    
  }

}