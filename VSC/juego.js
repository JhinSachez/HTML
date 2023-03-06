const grid = document.querySelector(".grid");
const coins = document.querySelector(".coins")
const ancho = 18;
let playerIndex = 296;
let direccion = 1;

for (let i = 0; i < 324; i++) {
    const cuadro = document.createElement('div');
    grid.appendChild(cuadro)
    
}

const cuadricula = Array.from(document.querySelectorAll('.grid div'));

cuadricula[playerIndex].classList.add('player');


function movePlayer(e){
    cuadricula[playerIndex].classList.remove('player');
    switch(e.key){
        case 'ArrowLeft':
            if(playerIndex % ancho !== 0) playerIndex -=1;
            break;
        case 'ArrowRight':
            if(playerIndex % ancho < ancho-1) playerIndex +=1;
            break
    }
    cuadricula[playerIndex].classList.add('player');
}

document.addEventListener('keydown',movePlayer);

function generateCoins(){
    var coinsBottom = 730;
    var coinleft = Math.floor(Math.random()*800);
    var coin = document.createElement('div');
    coin.setAttribute("class", "coin");
    coins.appendChild(coin)
    function FallDown(){
        coinsBottom -= 5;
        coin.style.bottom = coinsBottom + 'px';
        coin.style.left = coinleft + 'px';

    }
    
    setInterval(FallDown,20)
    setTimeout(generateCoins,2000)
}
generateCoins();