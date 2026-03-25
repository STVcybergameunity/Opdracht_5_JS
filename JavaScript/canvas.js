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
let gameStarted = false;

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

const _SPRITE_WIDTH = 575;
const _SPRITE_HEIGHT = 523;
const _STAGGERFRAMES = 5;
const _CANVAS = document.querySelector('#player');
const _CTX = _CANVAS.getContext('2d');
const _CANVAS_WIDTH = _CANVAS.width = 600;
const _CANVAS_HEIGHT = _CANVAS.height = 600;
const _CANVAS_POSITION = _CANVAS.getBoundingClientRect();
const _PLAYERIMAGE = new Image()
const _ARRAY_STATE = ['getHit', 'idle', 'jump', 'fall', 'run', 'dizzy', 'sit', 'roll', 'bite', 'ko'];
const _SPRITE_ANIMATION = [];
const _ANIMATION_STATE = [
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

    keyDownValue = e.key;

    setPlayerState(keyDownValue);

});

function setPlayerState(keyDownValue){

    switch(keyDownValue) {

        case 'w':
            playerState = _ARRAY_STATE[_STATEJUMP];
            break;

        case 'a':
            playerState = _ARRAY_STATE[_STATESIT];
            break;

        case 'd':
            playerState = _ARRAY_STATE[_STATERUN];
            break

        case 's':
            playerState = _ARRAY_STATE[_STATEROLL];
            break;

        case ' ':
            playerState = _ARRAY_STATE[_STATEJUMP];
            break;

        default:
            break;
    } 

}

_PLAYERIMAGE.src = 'Img/shadow_dog.png';

_ANIMATION_STATE.forEach((state, index) => {

    let frames = {
        loc: [],
    }

    for (let j = 0; j < state.frames; j++){

        let positionX = j * _SPRITE_WIDTH;
        let positionY = index * _SPRITE_HEIGHT;

        frames.loc.push({x: positionX, y: positionY});

    }

    _SPRITE_ANIMATION[state.name] = frames;

});

function animate(){

    _CTX.clearRect(0, 0, _CANVAS_WIDTH, _CANVAS_HEIGHT);

    let position = Math.floor(gameFrame/_STAGGERFRAMES) % _SPRITE_ANIMATION[playerState].loc.length;
    let frameX = _SPRITE_WIDTH * position;
    let frameY = _SPRITE_ANIMATION[playerState].loc[position].y;

    _CTX.drawImage(_PLAYERIMAGE, frameX, frameY,
    _SPRITE_WIDTH, _SPRITE_HEIGHT, 0, 0, _SPRITE_WIDTH, _SPRITE_HEIGHT);

    checkHitDetection();

    gameFrame++;    

    requestAnimationFrame(animate);
    
}

animate();
