
//acquired HTML elements
var character = document.getElementById("character");
var block = document.getElementById("block");
var score = document.getElementById("score");
var gamescore = document.getElementById("gameScore");
var player =document.getElementById("name"); 
var counter = 0;
var game = document.getElementById("game");
var lose = document.getElementById("loss");


 //   var userInfo = document.getElementById("userInfo")
//    var screenName = document.getElementById("player")
   // screenName.textContent = player.value;
    //alert(player.value)


function start(){
   var i;
i = "0.9s"; userInfo.style.display="none";
    lose.style.display="none";
    game.style.opacity= "1";
    game.style.display="block";
    block.style.animation="slides "+i+" linear infinite";
    score.textContent=0;
    counter = 0
}



//movement function
function moveLeft(){
    var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));

    left -= 117;
    if(left >= 0){
        character.style.left = left + "px";
    }
}

function moveRight(){
    var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));

    left += 117;
    if(left < 351){
        character.style.left = left +"px";
    }
}

//this funcrion is called after each animation iteration

document.addEventListener('animationiteration',()=>{

    counter++
    score.textContent = counter;  
    console.log(player)
    var random = Math.floor(Math.random()*3);
    random *= 117;
    block.style.left = random + "px";
})

//this chexk the code block at every 1millisecond interval


setInterval(function(){
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    var blockTop = parseInt(window.getComputedStyle(block).getPropertyValue("top"));
    
    //conditions for win or loss
    if(blockLeft === characterLeft && blockTop >= 300 && blockTop < 600){
       block.style.top = "299px";
       block.style.animation="false"
        //alert("GAME OVER SCORE: " + counter);
        game.style.opacity=0.3;
        lose.style.display = "block"
        gamescore.textContent = counter;


    }
},1)

