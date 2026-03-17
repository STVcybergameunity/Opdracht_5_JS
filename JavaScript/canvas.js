function loadScript(url)
{

    let head = document.getElementsByTagName('head')[0];
    let script = document.createElement('script');

    script.type = 'text/javascript';
    script.src = url;
    
    head.appendChild(script);
}

loadScript('JavaScript/background.js');
loadScript('JavaScript/animations.js');
loadScript('JavaScript/enemy.js');

/**************************
 * Asigning let variables *
 **************************/

let playerState = 'run';
let returnedValueFromKeydown;
let keyDownValue;
let gameFrame = 0;
let frameX = 0;
let frameY = 0;
let errorValue = false;
let timeKeyHeld;
let keyUp;
let startTimer;
let endTimer;

/****************************
 * Asigning const variables *
 ****************************/

const _STATEGETHIT = 0;
const _STATEIDLE = 1;
const _STATEJUMP = 2;
const _STATEFALL = 3;
const _STATERUN = 4
const _STATEDIZZY = 5;
const _STATESIT = 6;
const _STATEROLL = 7;
const _STATEBITE = 8;
const _STATEKO = 9;

/********************************************* 
**********************************************/

const _SPACEKEY = 32;
const _SPRITEWIDTH = 575;
const _SPRITEHEIGHT = 523;
const _STAGGERFRAMES = 5;
const _CANVAS = document.querySelector('#player');
const _CTX = _CANVAS.getContext('2d');
const _CANVAS_WIDTH = _CANVAS.width = 600;
const _CANVAS_HEIGHT = _CANVAS.height = 600;
const _PLAYERIMAGE = new Image()
const _ARRAYSTATE = ['getHit', 'idle', 'jump', 'fall', 'run', 'dizzy', 'sit', 'roll', 'bite', 'ko'];
const _SPRITEANIMATION = [];
const _ANIMATIONSTATE = [
    {
        name: 'idle',
        frames: 7,
    },
    {
        name: 'jump',
        frames: 7,
    },
    {
        name: 'fall',
        frames: 7,
    },
    {
        name: 'run',
        frames: 9,
    },
    {
        name: 'dizzy',
        frames: 11,
    },
    {
        name: 'sit',
        frames: 5,
    },
    {
        name: 'roll',
        frames: 7,
    },
    {
        name: 'bite',
        frames: 7,
    },
    {
        name: 'ko',
        frames: 12,
    },
    {
        name: 'getHit',
        frames: 4,
    },
];

/******************************************************
 * Sets the playerstate to the value that was pressed *
 ******************************************************/

window.addEventListener('keydown', function(e){

    startTimer = new Date();

    keyDownValue = e.key;
    
    setPlayerState(keyDownValue);

});

window.addEventListener('keyup', function(e){

    endTimer = new Date();
    timeKeyHeld = endTimer - startTimer;

})

function setPlayerState(keyDownValue){

    if (keyDownValue === undefined){

        errorValue = true;

    }

    if (!isNaN(keyDownValue)){

        playerState = _ARRAYSTATE[keyDownValue];
        console.log(playerState)

    }

    else if (!errorValue) switch(keyDownValue) {

        case 'w':
            playerState = _ARRAYSTATE[_STATEJUMP];
            jumpingAnimation();
            break;

        case 'a':
            playerState = _ARRAYSTATE[_STATESIT];
            break;

        case 'd':
            playerState = _ARRAYSTATE[_STATERUN];
            break

        case 's':
            playerState = _ARRAYSTATE[_STATEROLL];
            break;

        case 'spaceKey':
            playerState = _ARRAYSTATE[_STATEJUMP];
            break;

        default:
            break;
    } 

    else {
        console.log('Please use W instead of space.')

    }
}


function jumpingAnimation(){
    
    gameFrame = 0;

    if ((gameFrame / timeKeyHeld) === 1){

        console.log("hi");

    }

}

_PLAYERIMAGE.src = 'Img/shadow_dog.png';

_ANIMATIONSTATE.forEach((state, index) => {

    let frames = {
        loc: [],
    }

    for (let j = 0; j < state.frames; j++){

        let positionX = j * _SPRITEWIDTH;
        let positionY = index * _SPRITEHEIGHT;

        frames.loc.push({x: positionX, y: positionY});

    }

    _SPRITEANIMATION[state.name] = frames;

});


function animate(){

    _CTX.clearRect(0, 0, _CANVAS_WIDTH, _CANVAS_HEIGHT);

    let position = Math.floor(gameFrame/_STAGGERFRAMES) % _SPRITEANIMATION[playerState].loc.length;
    let frameX = _SPRITEWIDTH * position;
    let frameY = _SPRITEANIMATION[playerState].loc[position].y;

    _CTX.drawImage(_PLAYERIMAGE, frameX, frameY,
    _SPRITEWIDTH, _SPRITEHEIGHT, 0, 0, _SPRITEWIDTH, _SPRITEHEIGHT);

    gameFrame++;
    requestAnimationFrame(animate);
    
}
animate();