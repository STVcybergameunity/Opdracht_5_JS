/***********************
 * Set const variables *
 ***********************/

const element_borders = document.querySelector("main");
const element_button = document.querySelector("#start");
const element_speed_button_slow = document.querySelector("#speed_slow");
const element_speed_button_medium = document.querySelector("#speed_medium");
const element_speed_button_fast = document.querySelector("#speed_fast");

function startClick(){

    if (element_borders){
        element_borders.style.display = "flex";
        element_button.style.display = 'none';
    }

    if (element_speed_button_fast, element_speed_button_medium, element_speed_button_slow){

        element_speed_button_fast.style.visibility = "visible";
        element_speed_button_medium.style.visibility = "visible";
        element_speed_button_slow.style.visibility = "visible";

    }

}