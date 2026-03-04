function getSpriteLoc(amountOfLocs,pixel,row){
    let returnarr = [];
    for (let i = 0;i<=amountOfLocs;i++){
        returnarr[i]={x:pixel*i,y:pixel*row};
    }
    return returnarr;
}

spriteAnimations = [
    "idle" = {
        loc: [
            getSpriteLoc(7,575,0)
        ]
    },
    "jump" = {
        loc: [
            getSpriteLoc(7,575,1)
        ]
    },
    "run" = {
        loc: [
            getSpriteLoc(7,575,2)
        ]
    },
    "fall" = {
        loc: [
            getSpriteLoc(7,575,3)
        ]
    },
    "dizzy" = {
        loc: [
            getSpriteLoc(11,575,4)
        ]
    },
    "sit" = {
        loc: [
            getSpriteLoc(5,575,5)
        ]
    }, 
    "roll" = {
        loc: [
            getSpriteLoc(7,575,6)
        ]
    },
    "bite" = {
        loc: [
            getSpriteLoc(7,575,7)
        ]
    },
    "ko" = {
        loc: [
            getSpriteLoc(12,575,8)
        ]
    },
    "getHit" = {
        loc: [
            getSpriteLoc(4,575,9)
        ]
    },
]