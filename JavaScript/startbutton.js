const element_borders = document.querySelector("main");
const element_button = document.querySelector(".start");

element_button.addEventListener('click', startClick);

function startClick(){
    if (element_borders){
        element_borders.style.display = "grid";
        element_button.style.display = 'none'
    }
}