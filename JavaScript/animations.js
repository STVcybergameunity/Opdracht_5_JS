/*****************************************
 * Allows you to input the location of   *
 * the correct image of the sprite sheet *
 *****************************************/


function getSpriteLoc(amountOfFrames,sprite_size,spritesheet_row){
    let returnarr = [];
    for (let i = 0;i<=amountOfFrames;i++){
        returnarr[i]={
            x: sprite_size*i,
            y: sprite_size*spritesheet_row
        };
    }
    return returnarr;
}

/*********************************************
 * Set locations of the sprites and how wide *
 *********************************************/

spriteAnimations = {
    "idle": {
        loc: getSpriteLoc(7,575,0)
    },
    "jump": {
        loc: getSpriteLoc(7,575,1)
    },
    "run": {
        loc: getSpriteLoc(7,575,2)
    },
    "fall": {
        loc: getSpriteLoc(7,575,3)
    },
    "dizzy": {
        loc: getSpriteLoc(11,575,4)
    },
    "sit": {
        loc: getSpriteLoc(5,575,5)
    }, 
    "roll": {
        loc: getSpriteLoc(7,575,6)
    },
    "bite": {
        loc: getSpriteLoc(7,575,7)
    },
    "ko": {
        loc: getSpriteLoc(12,575,8)
    },
    "getHit": {
        loc: getSpriteLoc(4,575,9)
    },
}