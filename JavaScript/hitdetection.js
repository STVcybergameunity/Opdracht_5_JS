/*********************
 * Set the variables *
 *********************/

const circle1 = {x: 10, y:10, radius:300};

function checkHitDetection() {

    for (let i = 0; i < _ARRAY_OF_ENEMIES.length; i++) {
    
    let enemyHitbox = {x: _ARRAY_OF_ENEMIES[i].sizeEnemyX(), y: _ARRAY_OF_ENEMIES[i].sizeEnemyY(), radius: _ARRAY_OF_EXPLOSIONS[0].sizeExplosion()/2};

    return enemyHitbox;

    }

    for (let i = 0; i < _SPRITEWIDTH){

    }

    let horizontalDiffrence = enemyHitbox.x - circle1.x;
    let verticalDiffrence = enemyHitbox.y - circle1.y;
    let sumOfRadius = circle1.radius + enemyHitbox.radius;
    let distanceBetween = Math.sqrt(

        horizontalDiffrence * horizontalDiffrence
        + verticalDiffrence * verticalDiffrence

    )


    if (distanceBetween < sumOfRadius){

        _CTX_ENEMY.fillStyle = 'white';
        _CTX_ENEMY.fillRect(enemyHitbox.x, enemyHitbox.y);

    } else if (distanceBetween === sumOfRadius){

        /***************
         * If touching *
         ***************/

    } else if (distanceBetween > sumOfRadius){

        /****************
         * No collision *
         ****************/

    }
}