var timer = 30;
var score = 0;
var hitrn = 0;

// bubble

function increaseScore(){
    score += 10;
    document.querySelector("#Scoreval").textContent = score;

}

function getNewHit(){
    hitrn = Math.floor(Math.random() *10);
    document.querySelector("#htival").textContent = hitrn;
}

function makeBubble(){
    var clutter ="";


for (var i = 1 ; i<= 176; i++){
   var rn = Math.floor(Math.random()*10)
    clutter += ` <div id="bubble">${rn}</div>`;
   

}
document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer(){
  var timerint =  setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector('#timerval').textContent = timer
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over!</h1>`;
        }
    },1000);

    
}
 
document.querySelector('#pbtm')
.addEventListener("click", function(dets){
    // alert('chal raha hai')
    // console.log(Number(dets.target.textContent));
    var clickednum = Number(dets.target.textContent);
    if(clickednum === hitrn){
        increaseScore();
        makeBubble();
        getNewHit();

    }
 })

runTimer();
makeBubble();
getNewHit();
getNewHit();
