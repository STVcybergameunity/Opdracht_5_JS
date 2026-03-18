/******************************************
 * Elements are taken from startbutton.js *
 ******************************************/

element_speed_button_fast.addEventListener('click', speedClick);
element_speed_button_medium.addEventListener('click', speedClick);
element_speed_button_slow.addEventListener('click', speedClick);

function amountOfEnemies(){

    for (let i = 0; i < numberOfEnemies; i++){

        _ARRAY_OF_ENEMIES.push(new Enemy())

    }

}

function hideElements(){

    element_speed_button_fast.style.visibility = "hidden";
    element_speed_button_medium.style.visibility = "hidden";
    element_speed_button_slow.style.visibility = "hidden";

}

next
function speedClick(event){

    switch(event.target.innerText) {

        case 'Medium':

            hideElements();
            curveAmount = 8;
            numberOfEnemies = 10;
            amountOfEnemies();

            break;

        case 'Fast':

            hideElements();
            curveAmount = 12;
            numberOfEnemies = 10;
            amountOfEnemies();

            break;

        case 'Slow':
        default:

            hideElements();
            curveAmount = 4;
            numberOfEnemies = 5;
            amountOfEnemies();

            break;

    }

}