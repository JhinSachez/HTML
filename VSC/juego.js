var grid = document.querySelector(".grid");
var player = document.querySelector(".player");
var coins = document.querySelector(".coins");
var playerLeft = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
var playerbottom = parseInt(window.getComputedStyle(player).getPropertyValue("bottom"));
const currentHighScore = document.querySelector(".highscore")
const gameover = document.querySelector(".Game_Over");
const timeEl = document.querySelector(".time");
const scoreEl = document.querySelector(".score");
const start = document.getElementById('start-btn')
let highScore = localStorage.getItem("highscore") || 0;
currentHighScore.innerText = `High Score: ${highScore}`;
let score = 0
let seconds = 30


start.addEventListener('click', () => {
    generateCoins()
    gameStart = true
})

function playerMoveLeft(){
playerLeft -= 15;
player.style.left = playerLeft + 'px';
}

function playerMoveRight(){
    playerLeft += 15;
    player.style.left = playerLeft + 'px';
    }


function control(e){
    if (gameStart){
    console.log('control');
    switch(e.key){
        case 'ArrowLeft':
            if(playerLeft > 710) playerMoveLeft();
            break;
        case 'ArrowRight':
            if(playerLeft < 1175) playerMoveRight();
            break;
        }
    }
}

document.addEventListener("keydown", control);



function generateCoins(){
    var coinsBottom = 650;
    var coinsleft = Math.floor(Math.random()* 550)+690;
    var coin = document.createElement('div');
    coin.setAttribute("class", "coin");
    coins.appendChild(coin)
    function FallDown(){
        if (coinsBottom < playerbottom+ 50 && coinsBottom>playerbottom && coinsleft > playerLeft - 30 && coinsleft < playerLeft + 50){
            coins.removeChild(coin);
            clearInterval(fallInterval);
            score++
            scoreEl.innerHTML = `Score: ${score}`

            highScore = score >= highScore ? score : highScore;
            localStorage.setItem("highscore",highScore);
            currentHighScore.innerText = `High Score: ${highScore}`;


        }
        if(seconds < 0){
            console.log("Game Over");
            clearInterval(fallInterval);
            clearTimeout(coinsTimeout);
            clearInterval(Tiempo)
            coins.removeChild(coin)
        }
        if(coinsBottom < playerbottom){
            coins.removeChild(coin)
        }
        coinsBottom -= 5;
        coin.style.bottom = coinsBottom + 'px';
        coin.style.left = coinsleft+'px';
    }
    var fallInterval = setInterval(FallDown,20)
    var coinsTimeout = setTimeout(generateCoins,2000)

}

function increaseTime() {
    if(gameStart){
    let m = Math.floor(seconds / 60)
    let s = seconds % 60
    m = m < 10 ? `0${m}` : m
    s = s < 10 ? `0${s}` : s
    timeEl.innerHTML = `Time: ${m}:${s}`
    seconds--
    }
}

var Tiempo = setInterval(increaseTime,1000)

