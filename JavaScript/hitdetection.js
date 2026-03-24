/*********************
 * Set the variables *
 *********************/
let enemyHitbox = [];
let horizontalDiffrence = [];
let verticalDiffrence = [];
let playerHitbox = {};
let distanceBetween = [];
let sumOfRadius = [];
let hitTimer = 0



/************
 * dank Ids *
 ************/

function initializeHitbox() {

    playerHitbox = {x: _SPRITE_WIDTH*0.25, y: _SPRITE_HEIGHT*0.25, radius: (_SPRITE_WIDTH*0.25)/2}

    for (let i = 0; i < _ARRAY_OF_ENEMIES.length; i++) {
    
        enemyHitbox.push({x: _ARRAY_OF_ENEMIES[i].locationEnemyX(), y: _ARRAY_OF_ENEMIES[i].locationEnemyY(), radius: _ENEMY_WIDTH/2});

    }

}

function checkHitDetection() {

    for(let i = 0; i < enemyHitbox.length; i++) {

        enemyHitbox[i] = {x: _ARRAY_OF_ENEMIES[i].locationEnemyX()*0.25, y: _ARRAY_OF_ENEMIES[i].locationEnemyY()*0.25, radius: (_ENEMY_WIDTH*0.25)/2}

        enemyHitbox[i].x = _ARRAY_OF_ENEMIES[i].locationEnemyX();
        enemyHitbox[i].y = _ARRAY_OF_ENEMIES[i].locationEnemyY();

        horizontalDiffrence[i] = Math.floor(enemyHitbox[i].x - playerHitbox.x);
        verticalDiffrence[i] = Math.floor(enemyHitbox[i].y - playerHitbox.y);

        distanceBetween[i] = Math.sqrt(

        horizontalDiffrence[i] * horizontalDiffrence[i] +
        verticalDiffrence[i] * verticalDiffrence[i]
        
        )

        sumOfRadius[i] = playerHitbox.radius + enemyHitbox[i].radius;

        if (distanceBetween[i] < sumOfRadius[i]){

            playerState = _ARRAY_STATE[_STATEGETHIT];

        } 
        
        if (distanceBetween[i] === sumOfRadius[i]){

            playerState = _ARRAY_STATE[_STATEGETHIT];

        } 

    }
 
}