var burgerButton = document.getElementById('navigation__icon');
//var menuListItem = document.getElementsByClassName('navigation__link')[1];
/* 
menuListItem.addEventListener('click',() => {
    burgerButton.click();
}, false) */

document.querySelectorAll('.navigation__link').forEach(function(button) {
    button.addEventListener('click',() => {
        burgerButton.click();
    }, false)
});