/*********************
 * Set the variables *
 *********************/
let enemyHitbox = [];
let horizontalDiffrence = [];
let verticalDiffrence = [];
let playerHitbox = {};
let distanceBetween = [];
let sumOfRadius = [];
let i = 0


/************
 * dank Ids *
 ************/

function initializeHitbox() {

    playerHitbox = {x: _SPRITEWIDTH, y: _SPRITEHEIGHT, radius: _SPRITEWIDTH/2}

    for (i = 0; i < _ARRAY_OF_ENEMIES.length; i++) {
    
        enemyHitbox.push({x: _ARRAY_OF_ENEMIES[i].sizeEnemyX(), y: _ARRAY_OF_ENEMIES[i].sizeEnemyY(), radius: _ARRAY_OF_ENEMIES[0].sizeEnemyY()/2});
        horizontalDiffrence[i] = Math.floor(enemyHitbox[i].x - playerHitbox.x);
        verticalDiffrence[i] = Math.floor(enemyHitbox[i].y - playerHitbox.y);

        /**
         * zet alles met [i] hier
         */

    }

}

 console.log(i)

function checkHitDetection() {

    distanceBetween[i] = Math.sqrt(

    horizontalDiffrence[i] * horizontalDiffrence[i] +
    verticalDiffrence[i] * verticalDiffrence[i]
    
    )

    sumOfRadius[i] = playerHitbox.radius + enemyHitbox[0].radius;

    if (distanceBetween[i] < sumOfRadius){

        console.log("hi")
        _CTX_ENEMY.fillStyle = 'white';
        _CTX_ENEMY.fillRect(enemyHitbox[i].x, enemyHitbox[i].y);

    } else if (distanceBetween[i] === sumOfRadius){

        console.log("hi")
        _CTX_ENEMY.fillStyle = 'white';
        _CTX_ENEMY.fillRect(enemyHitbox[i].x, enemyHitbox[i].y);

    } else if (distanceBetween[i] > sumOfRadius){

        if (gameFrame % 50 === 0){

            console.log("No hit")

        }

    }
    
}

