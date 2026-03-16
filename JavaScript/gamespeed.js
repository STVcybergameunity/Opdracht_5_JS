element_speed_button_fast.addEventListener('click', speedClick);
element_speed_button_medium.addEventListener('click', speedClick);
element_speed_button_slow.addEventListener('click', speedClick);

function amountOfEnemies(){

    for (let i = 0; i < numberOfEnemies; i++){

    _ARRAY_OF_ENEMIES.push(new Enemy())

    }

}

function speedClick(event){

    console.log(event.target.innerText);

    switch(event.target.innerText) {
        case 'Medium':
            curveAmount = 8;
            numberOfEnemies = 10;
            amountOfEnemies();
            break;
        case 'Fast':
            curveAmount = 12;
            numberOfEnemies = 10;
            amountOfEnemies();
            break;
        case 'Slow':
        default:
            curveAmount = 4;
            numberOfEnemies = 5;
            amountOfEnemies();
            break;
    }

}