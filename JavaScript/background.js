const _BACKGROUND_CANVAS = document.querySelector('#background');
const _BACKGROUND_CTX = _BACKGROUND_CANVAS.getContext('2d');
const _BACKGROUND_CANVAS_WIDTH = _BACKGROUND_CANVAS.width = 800;
const _BACKGROUND_CANVAS_HEIGHT = _BACKGROUND_CANVAS.height = 700;

const _BACKGROUNDLAYER1 = new Image();
const _BACKGROUNDLAYER2 = new Image();
const _BACKGROUNDLAYER3 = new Image();
const _BACKGROUNDLAYER4 = new Image();
const _BACKGROUNDLAYER5 = new Image();

let gameSpeed = 5;
let backgroundFrame = 0;


_BACKGROUNDLAYER1.src = 'Img/layer-1.png';
_BACKGROUNDLAYER2.src = 'Img/layer-2.png';
_BACKGROUNDLAYER3.src = 'Img/layer-3.png';
_BACKGROUNDLAYER4.src = 'Img/layer-4.png';
_BACKGROUNDLAYER5.src = 'Img/layer-5.png';

class Background_Layer {

    constructor(image, speedModifier){

        this.horizontal_Scroll = 0;
        this.y = 0;
        this.width = 2400;
        this.height = 700;
        this.image = image
        this.speedModifier = speedModifier;
        this.speed = gameSpeed * this.speedModifier;

    }

    update(){

        this.speed = gameSpeed * this.speedModifier;

        this.horizontal_Scroll = backgroundFrame * this.speed % this.width

    }

    draw(){

        _BACKGROUND_CTX.drawImage(this.image, this.horizontal_Scroll, this.y, this.width, this.height);
        _BACKGROUND_CTX.drawImage(this.image, this.horizontal_Scroll + this.width, this.y, this.width, this.height);

    }

}

const _LAYER1 = new Background_Layer(_BACKGROUNDLAYER1, 0.2);
const _LAYER2 = new Background_Layer(_BACKGROUNDLAYER2, 0.4);
const _LAYER3 = new Background_Layer(_BACKGROUNDLAYER3, 0.6);
const _LAYER4 = new Background_Layer(_BACKGROUNDLAYER4, 0.8);
const _LAYER5 = new Background_Layer(_BACKGROUNDLAYER5, 1);

const _BACKGROUND_LAYERS_IMAGES = [_LAYER1, _LAYER2, _LAYER3, _LAYER4, _LAYER5];

function animateBackground(){

    _BACKGROUND_CTX.clearRect(0, 0, _BACKGROUND_CANVAS_WIDTH, _BACKGROUND_CANVAS_HEIGHT)

    _BACKGROUND_LAYERS_IMAGES.forEach(object => {
        object.update();
        object.draw();
    })

    backgroundFrame --

    requestAnimationFrame(animateBackground);

};
animateBackground();