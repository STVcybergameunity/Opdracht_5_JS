/*********************
 * Set the variables *
 *********************/

const circle1 = {x: 10, y:10, radius:300};

function checkHitDetection() {
    if (_ARRAY_OF_ENEMIES.length === 0) return;
    
    const circle2 = {x: _ARRAY_OF_ENEMIES[0].sizeEnemy()[0], y: _ARRAY_OF_ENEMIES[0].sizeEnemy()[1], radius: Explosion.explosionSize[0]/2};

    let horizontalDiffrence = circle2.x - circle1.x;
    let verticalDiffrence = circle2.y - circle1.y;
    let sumOfRadius = circle1.radius + circle2.radius;
    let distanceBetween = Math.sqrt(

        horizontalDiffrence * horizontalDiffrence
        + verticalDiffrence * verticalDiffrence

    );


    if (distanceBetween < sumOfRadius){

        _CTX_ENEMY.fillStyle = 'white';
        _CTX_ENEMY.fillRect(circle2.x, circle2.y);

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