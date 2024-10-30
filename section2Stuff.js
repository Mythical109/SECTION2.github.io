//Clever... Alright, we'll let that slide LEARN HOW TO USE GOOGLE SITES!!!

//ABOUT
var a = new Image();
a.src = 'researchersAbout.png';

//DANGER LVLS
var b = new Image();
b.src = 'Mal.png';

//ENTITY 1
var c = new Image();
c.src = 'displacement.png';

//ENTITY 2
var d = new Image();
d.src = 'DLE.png';
d.alt  = 'testing Alt in canvas';

var k = new Image();
k.src = 'Dorms.png';


//CROSSWORD
var cross = new Image();
cross.src = 'crossword.png';

var LOGO = new Image();
LOGO.src = 'HUB.png';


var i = 0;
var e = 0;
var o = 0;
var speed  = 65;
var welcomeMessage = 'You have been delegated to the branch Researchers. Please look through the provided information and resources, and work through the challenges presented.';
var goodLuck = 'Godspeed, and good luck.';

var interludeMessage = 'Congratulations for making it this far, Section 2. You have made it to the half-way point of this exercise. Please indicate that you are ready for the second half by requesting a copy of \"The Outsiders\".'+
' Once you have acuired the book, you may continue.';

var ans2 = false;
var ans3 = false;
var ans4 = false;
var ans5 = false;


var aboutCanvas;
var aboutCtx;

var resourceCanvas;
var resourceCtx;

var crossCanvas;
var crossCtx;



function typeWelcome(){

    if (i<welcomeMessage.length){
        document.getElementById('welcomeP').innerHTML += welcomeMessage.charAt(i);
        i++;
        setTimeout(typeWelcome, speed);
    }

    if(i == welcomeMessage.length){
        document.getElementById('welcomeP').innerHTML += '<br><br>';
        setTimeout(typeGoodLuck, speed);
    }//End of if

}//End of function

function typeGoodLuck(){

    if (e<goodLuck.length){
        document.getElementById('welcomeP').innerHTML += goodLuck.charAt(e);
        e++;
        setTimeout(typeGoodLuck, speed);
    }
}//End of typeGoodLuck



function readyReasourceCanvas(){
    resourceCanvas = document.getElementById('resourceCanvas');
    resourceCtx = resourceCanvas.getContext('2d');
}//End of readyResourceCanvas


function readyAboutCanvas(){
    aboutCanvas = document.getElementById('aboutCanvas');
    aboutCtx = aboutCanvas.getContext('2d');

    aboutLoadImg();
}//End of readyAboutCanvas()


function aboutLoadImg(){
    aboutCtx.drawImage(a, 0, 0, a.width/4.5, a.height/4);
    aboutCtx.fillStyle = '#251f18';
    aboutCtx.font = '10px vcr';
    aboutCtx.fillText('7  3', 300, 295);
}//End of aboutLoadImg()

function DLELoadImg(){
    resourceCtx.clearRect(0,0, resourceCanvas.width,resourceCanvas.height);
    resourceCtx.drawImage(d, 0, 10, d.width/4.5, d.height/4.5);

    resourceCtx.fillStyle = '#251f18';
    resourceCtx.font = '10px vcr';
    resourceCtx.fillText('2  8', 10, 295);
}//End of cAndtLoadImg()

function displaceLoadImg(){
    resourceCtx.clearRect(0,0, resourceCanvas.width,resourceCanvas.height);
    resourceCtx.drawImage(c, 0, 0, c.width/4.5, c.height/4.5);


    resourceCtx.fillStyle = '#251f18';
    resourceCtx.font = '10px vcr';
    resourceCtx.fillText('1  5', 0, 700);
}//End of caesarLoadImg()

function malLoadImg(){
    resourceCtx.clearRect(0,0, resourceCanvas.width,resourceCanvas.height);
    resourceCtx.drawImage(b, 0, 0, b.width/4.5, b.height/4.5);


    resourceCtx.fillStyle = '#251f18';
    resourceCtx.font = '10px vcr';
    resourceCtx.fillText('6  4', 470, 10);
}//End of binaryLoadImg()


function readyCross(){
    crossCanvas = document.getElementById('crossCanvas');
    crossCtx = crossCanvas.getContext('2d');

    crossLoadImg();
}//End of readyCross


function crossLoadImg(){
    crossCtx.drawImage(cross, 0,0, cross.width/4.5, cross.height/4.5);
}//End of crossLoadIm

//PASSWORD

function answer(){
    var res = document.getElementById('pass1').value;

    if(res.toUpperCase() == 'INFORMED'){
        window.open('interlude2.html', '_self') ;
    }//End of if

    else {
        window.alert('Incorrect');

        

    }//End of else


}//End of function answer


function merp(){
    console.log('welcome1.html');
    typeInterlude();
}//End of merp

function typeInterlude(){
    document.getElementById('interludeP').innerHTML += interludeMessage.charAt(o);

    if(o<interludeMessage.length){
        o++;
        setTimeout(typeInterlude, speed);
    }

}//End of typeInterlude()


function readyFile(){
    fileCanvas = document.getElementById('fileCanvas');
    fileCtx = fileCanvas.getContext('2d');


    fileCtx.drawImage(k, 0,0, k.width/4.5, k.height/4.5);

}//End of readyFile()


function finalAnswer(){

    var wrong = 'Questions ';
    var numOfWrong = 0;

    var w = document.getElementById('pass2').value;

    var x = document.getElementById('pass3').value;

    var y = document.getElementById('pass4').value;

    var z = document.getElementById('pass5').value;



    if(w.toUpperCase() == 'SMELL'){
        ans2 = true;
    }//End of if
    else{
        ans2 = false;
        wrong += '1, ';
    }// End of else

    if(x.toUpperCase() == 'KNOW'){
        ans3 = true;
        numOfWrong++;
    }//End of if
    else{
        ans3 = false;
        wrong += '2, ';
        numOfWrong++;
    }//End of else


    if(y.toUpperCase() == 'ALTERED'){
        ans4 = true;

    }//Edn of if
    else{
        ans4 = false;
        wrong += '3, ';
        numOfWrong++;
    }//End of else

    if(z.toUpperCase() == 'SEE'){
        ans5 = true;
    }//End of if
    else{
        ans5 = false;
        wrong += '4, ';
        numOfWrong++;
    }//End of else



    if(ans2 && ans3 && ans4 && ans5){
        window.open('congrats2.html', '_self');
    }//End of if
    else {
        if(numOfWrong>1){
            wrong+= 'are wrong';
        }//End of inner if
    
        else{
            wrong+= 'is wrong';
        }//End of inner else
    
        window.alert(wrong);
    }//End of else

}//End of finalAnswer



var congrats = 'Congradulations, Researchers. You have successfully made it to the end of the exercise. You have done well on both learning the ropes and collaborating with your team. Please let your instructor know that you are finished by returning your section\’s book.'

var thanks = 'Thank you again. We\’ll be in touch soon.';

var hub = 'H.U.B. Recuitment';

var num = 0;
var num2 = 0;
var num3 = 0;


function typeCongrats(){
    document.getElementById('congratsP').innerHTML += congrats.charAt(num);

    if(num<congrats.length){
        num++;
        setTimeout(typeCongrats, speed);
    }

    if(num == congrats.length){
        document.getElementById('congratsP').innerHTML += '<br>';
        speed +=40;
        setTimeout(typeThanks, speed);
    }//End of if

}//End of typeInterlude()

function typeThanks(){
    document.getElementById('congratsP').innerHTML += thanks.charAt(num2);

    if(num2<thanks.length){
        num2++;
        setTimeout(typeThanks, speed);
    }

    if(num2 == thanks.length){
        document.getElementById('congratsP').innerHTML += '<br>';
        setTimeout(typeHUB, speed);
    }//End of if

}//End of typeThanks


function typeHUB(){

    if(num3<hub.length){
        if(num3 == 0){
            document.getElementById('congratsP').appendChild(LOGO);
            document.getElementById('congratsP').innerHTML += '<br><br>';
        }//End of if
        document.getElementById('congratsP').innerHTML += hub.charAt(num3);
        num3++;
        setTimeout(typeHUB, speed);
    }//End of if
    
}//End of typeThanks

