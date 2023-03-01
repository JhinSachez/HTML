const grid = document.querySelector(".grid");
const ancho = 18;
let playerIndex = 296;
let direccion = 1;
let alienRoutine;
let aliensMuertos = [];


for (let i = 0; i < 324; i++) {
    const cuadro = document.createElement('div');
    grid.appendChild(cuadro)
    
}

const cuadricula = Array.from(document.querySelectorAll('.grid div'));

const aliens = [
    0,1,2,3,4,5,6,7,8,9,
    18,19,20,21,22,23,24,25,26,27,
    36,37,38,39,40,41,42,43,44,45
]

function drawAliens(){
    for (let i = 0; i < aliens.length; i++) {
        if(!aliensMuertos.includes(i)){
            cuadricula[aliens[i]].classList.add('invader');
        }
    }
}

drawAliens();

function remove(){
    for (let i = 0; i < aliens.length; i++) {
        cuadricula[aliens[i]].classList.remove('invader');
        
    }
}

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

function moveInvaders(){
    const bordeIzq = aliens[0] % ancho === 0;
    const bordeDer = aliens[aliens.length - 1] % ancho === ancho-1;
    remove();

    if(bordeDer && direccion==1){
        for (let i = 0; i < aliens.length; i++) {
            aliens[i] += ancho + 1;
        }
        direccion = -1;
    }

    if(bordeIzq && direccion==-1){
        for (let i = 0; i < aliens.length; i++) {
            aliens[i] += ancho - 1;
        }
        direccion = +1;;
    }

    for (let i = 0; i < aliens.length; i++) {
        aliens[i] += direccion;
    }
    drawAliens();

    //los aliens chocan con el jugador
    if(cuadricula[playerIndex].classList.contains('invader','player')){
        console.log("GameOver, player killed");
        clearInterval(alienRoutine)
    }

    for (let i = 0; i < aliens.length; i++) {
        if(aliens[i] > cuadricula.length){
            console.log("Game Over, alien reached earth");
            clearInterval(alienRoutine)
        }
    }

    if(aliensMuertos.length == aliens.length){
        console.log("You win");
        clearInterval(alienRoutine)
    }
}

alienRoutine = setInterval(moveInvaders,200);

function shoot(e){
    let lasermoveRoutine;
    let laserIndex = playerIndex;

    function moveLaser(){
        if(laserIndex <= 0 || laserIndex - ancho <=0){
            cuadricula[laserIndex].classList.remove('laser');
            clearInterval(lasermoveRoutine);
            return;
        }

        cuadricula[laserIndex].classList.remove('laser');
        laserIndex -= ancho;
        cuadricula[laserIndex].classList.add('laser');

        if(cuadricula[laserIndex].classList.contains('invader')){
            cuadricula[laserIndex].classList.remove('laser');
            cuadricula[laserIndex].classList.remove('invader');
            const aliensAsesinado = aliens.indexOf(laserIndex);
            aliensMuertos.push(aliensAsesinado);
            clearInterval(lasermoveRoutine);

        }
    }

    switch(e.key){
        case 'ArrowUp':
            lasermoveRoutine = setInterval(moveLaser, 80);
    }
}

document.addEventListener('keydown',shoot);