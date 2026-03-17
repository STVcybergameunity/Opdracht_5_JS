/*********************
 * Set the variables *
 *********************/

const circle1 = {x: 10, y:10, radius:300};
const circle2 = {x: 500, y: 500, radius: 150};

let horizontalDiffrence = circle2.x - circle1.x;
let verticalDiffrence = circle2.y - circle1.y;
let distanceBetween = Math.sqrt(

    horizontalDiffrence * horizontalDiffrence
    + verticalDiffrence * verticalDiffrence

);
let sumOfRadius = circle1.radius + circle2.radius;

if (distanceBetween < sumOfRadius){

    /***************
     * If collided *
     ***************/

} else if (distanceBetween === sumOfRadius){

    /***************
     * If touching *
     ***************/


} else if (distanceBetween > sumOfRadius){

    /****************
     * No collision *
     ****************/


}