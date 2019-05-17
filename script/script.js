//Chowanie menu po kliknięciu
const burgerButton = document.getElementById('navigation__icon');

document.querySelectorAll('.navigation__link').forEach(function(button) {
    button.addEventListener('click',() => {
        burgerButton.click();
    }, false)
});
