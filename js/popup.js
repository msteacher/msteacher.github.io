// ----- PopUp -----
const linkPopUp = document.querySelector('.feedback');
const popUp = document.querySelector('.popup-write-me');
const close = popUp.querySelector('.popup-write-me__close');

linkPopUp.addEventListener('click', function(evt) {
    evt.preventDefault();
    popUp.style.display = 'flex';
    document.addEventListener('keydown', function(e) {
        if (e.keyCode === 27) {
            popUp.style.display = 'none';
        }
    });
});
close.addEventListener('click', function(evt) {
    popUp.style.display = 'none';
});
close.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 13) {
        popUp.style.display = 'none';
    }
});

// -----end PopUp -----