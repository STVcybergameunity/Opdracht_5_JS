/**
 * Asigning let variables
 */
let playerState = 'idle';
let returnedValueFromKeydown;
let keyDownValue;
let frameX = 0;
let frameY = 0;
let gameFrame = 0;

/**
 * Asigning const variables
 */
const _STATEGETHIT = 0;
const _STATEJUMP = 2;
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

/**
 * Sets the playerstate to the value that was pressed
 */
document.onkeydown = function(e){

    keyDownValue = e.key;
    setPlayerState(keyDownValue);

}

function setPlayerState(keyDownValue){

    if (!isNaN(keyDownValue)){

        playerState = _ARRAYSTATE[keyDownValue];
        console.log(playerState)

    }

    else switch(keyDownValue) {

        case 'w':
            playerState = _ARRAYSTATE[_STATEJUMP]
            break;

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

    gameFrame ++
    requestAnimationFrame(animate);
}
animate();