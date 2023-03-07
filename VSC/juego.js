var grid = document.querySelector(".grid");
var player = document.querySelector(".player");
var coins = document.querySelector(".coins");
var playerLeft = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
var playerbottom = parseInt(window.getComputedStyle(player).getPropertyValue("bottom"));

function playerMoveLeft(){
playerLeft -= 15;
player.style.left = playerLeft + 'px';
}

function playerMoveRight(){
    playerLeft += 15;
    player.style.left = playerLeft + 'px';
    }


function control(e){
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

document.addEventListener("keydown", control);



function generateCoins(){
    var coinsBottom = 730;
    var coinsleft = Math.floor(Math.random()* 550)+690;
    var coin = document.createElement('div');
    coin.setAttribute("class", "coin");
    coins.appendChild(coin)
    function FallDown(){
        if (coinsBottom < playerbottom+ 50 && coinsBottom>playerbottom && coinsleft > playerLeft - 30 && coinsleft < playerLeft + 50){
            coins.removeChild(coin);
            clearInterval(fallInterval);
        }
        if(coinsBottom < playerbottom){
            console.log("Game Over");
            clearInterval(fallInterval);
            clearTimeout(coinsTimeout);
            coins.removeChild(coin)
        }
        coinsBottom -= 5;
        coin.style.bottom = coinsBottom + 'px';
        coin.style.left = coinsleft+'px';
    }
    
    var fallInterval = setInterval(FallDown,20)
    var coinsTimeout = setTimeout(generateCoins,2000)
}
generateCoins();