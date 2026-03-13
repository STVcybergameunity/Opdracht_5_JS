/** @type {HTMLCanvasElement} */
const _ENEMY_CANVAS = document.querySelector('#enemy');
const _CTX_ENEMY = _ENEMY_CANVAS.getContext('2d');

const _NUMBER_OF_ENEMIES = 10;
const _ARRAY_OF_ENEMIES = [];
const _ENEMY_IMAGE = new Image();

let enemyFrame = 0;

_ENEMY_CANVAS_WIDTH = _ENEMY_CANVAS.width = 500;
_ENEMY_CANVAS_HEIGHT = _ENEMY_CANVAS.height = 1000;

class Enemy {

    constructor(){

        this.image = new Image();
        this.image.src = 'Img/enemy1.png'

        // this.speed = Math.random() * 4 - 2
        this.spriteWidth = 293;
        this.spriteHeight = 155;
        this.width = this.spriteWidth / 4;
        this.height = this.spriteHeight / 1.5;
        this.x = Math.random() * (_ENEMY_CANVAS.width - this.width);
        this.y = Math.random() * (_ENEMY_CANVAS.height - this.height);
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);

    }

    enemy_Update(){

        this.x += Math.random() * 15 - 7.5;
        this.y += Math.random() * 10 - 5;

        if (gameFrame % this.flapSpeed === 0){

            this.frame > 4 ? this.frame = 0 : this.frame++;

        }

    }

    enemy_Draw(){

        _CTX_ENEMY.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);

    }

}

for (let i = 0; i < _NUMBER_OF_ENEMIES; i++){

    _ARRAY_OF_ENEMIES.push(new Enemy())

}

function animate_Enemy(){

    _CTX_ENEMY.clearRect(0, 0, _ENEMY_CANVAS_WIDTH, _ENEMY_CANVAS_HEIGHT);

    _ARRAY_OF_ENEMIES.forEach(enemy => {
        enemy.enemy_Update();
        enemy.enemy_Draw();
    })

    enemyFrame ++;

    requestAnimationFrame(animate_Enemy);

}
animate_Enemy();