let playerState = 'idle';
let returnedValueFromKeydown
let keyDownValue
const arrayState = ['getHit', 'idle', 'jump', 'fall', 'run', 'dizzy', 'sit', 'roll', 'bite', 'ko']
const dropdown = document.getElementById('animations');

document.onkeydown = function(e){
    keyDownValue = e.key;
    setPlayerState(keyDownValue);
}

function setPlayerState(keyDownValue){
    if (!isNaN(keyDownValue)){
        returnedValueFromKeydown = Number(keyDownValue);
        playerState = arrayState[returnedValueFromKeydown];
        console.log(playerState)
    }
    else switch(keyDownValue) {
        case 'w':
            break;
    }
    
}


const canvas = document.getElementById('player');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image()
playerImage.src = 'Img/shadow_dog.png';
const spriteWidth = 575;
const spriteHeight = 523;

let frameX = 0;
let frameY = 0;
let gameFrame = 0;
const staggerFrames = 5;
const spriteAnimations = [];
const animationStates = [
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
animationStates.forEach((state, index) => {
    let frames = {
        loc: [],
    }
    for (let j = 0; j < state.frames; j++){
        let positionX = j * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({x: positionX, y: positionY});
    }
    console.log(index)
    spriteAnimations[state.name] = frames;
});
console.log(spriteAnimations);


function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[playerState].loc.length;
    let frameX = spriteWidth * position;
    let frameY = spriteAnimations[playerState].loc[position].y;

    ctx.drawImage(playerImage, frameX, frameY,
    spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight)

    gameFrame ++
    requestAnimationFrame(animate);
}
animate();