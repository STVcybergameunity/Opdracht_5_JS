const toggle = document.querySelector('button');
toggle.addEventListener('click', () => {
    if (!document.fullscreenElement){
    document.documentElement.requestFullscreen();
    }
    else if (document.exitFullscreen) {
        document.exitFullscreen();
    }
})