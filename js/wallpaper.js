let wallpaper = document.querySelector('.page-header');
let count = 0;
setInterval(function(){
    wallpaper.style.backgroundPositionX = `${count-=1}px`;
}, 90);