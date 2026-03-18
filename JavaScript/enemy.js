/** @type {HTMLCanvasElement} */
const _ENEMY_CANVAS = document.querySelector('#enemy');
const _CTX_ENEMY = _ENEMY_CANVAS.getContext('2d');

const _ARRAY_OF_ENEMIES = [];
const _ENEMY_IMAGE = new Image();
const _ENEMY_WIDTH = 266;
const _ENEMY_HEIGHT = 188;

let curveAmount = 0;

_ENEMY_CANVAS_WIDTH = _ENEMY_CANVAS.width = 500;
_ENEMY_CANVAS_HEIGHT = _ENEMY_CANVAS.height = 1000;

class Enemy {

    constructor(){

        this.image = new Image();
        this.image.src = 'Img/enemy2.png'

        this.speed = Math.random() * 3 + 1;

        this.width = _ENEMY_WIDTH / 4;
        this.height = _ENEMY_HEIGHT / 1.5;

        this.x = -_ENEMY_WIDTH;
        this.y = Math.random() * (_ENEMY_CANVAS.height - _ENEMY_HEIGHT);

        this.frame = 0;
        this.angle = 0;
        this.curve = Math.random() * 20;

        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
        this.angleSpeed = Math.random() * 0.2;

    }

    enemy_Update(){

        this.x -= this.speed;
        this.y += curveAmount * Math.sin(this.angle);
        this.angle += this.angleSpeed;

        if (this.x + this.width < 0){
            
            this.x = _ENEMY_CANVAS_WIDTH;

        }

        if (this.y + this.height < 0){

            this.y = _ENEMY_CANVAS_HEIGHT;

        }

        if (this.y - this.height > _ENEMY_CANVAS_HEIGHT){

            this.y = 0;

        }

        if (gameFrame % this.flapSpeed === 0){

            this.frame > 4 ? this.frame = 0 : this.frame++;

        }

    }

    enemy_Draw(){

        _CTX_ENEMY.drawImage(this.image, this.frame * _ENEMY_WIDTH, 0, _ENEMY_WIDTH, _ENEMY_HEIGHT, this.x, this.y, this.width, this.height);

    }

    sizeEnemy() {

        return [this.x, this.y];

    }

}

class Explosion {
    constructor(x, y){

        this.x = x;
        this.y = y;

        this.spriteWidth = 200;
        this.spriteHeight = 179;

        this.width = this.spriteWidth/2;
        this.height = this.spriteHeight/2

        this.image = new Image();
        this.image.src = 'boom.png';

        this.frame = 0;

    }

    update(){

        this.frame++

    }

    draw(){

        _CTX_ENEMY.drawImage(this.image, this.spriteWidth * this.frame,
        0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width,
        this.height);

    }

    get sizeExplosion(){

        return [this.x, this.y];

    }
}

function animate_Enemy(){

    _CTX_ENEMY.clearRect(0, 0, _ENEMY_CANVAS_WIDTH, _ENEMY_CANVAS_HEIGHT);

    _ARRAY_OF_ENEMIES.forEach(enemy => {

        enemy.enemy_Update();
        enemy.enemy_Draw();

    })

    requestAnimationFrame(animate_Enemy);

}
animate_Enemy();