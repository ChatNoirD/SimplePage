const $burger = document.querySelector('#burger');
const $mobileMenu = document.querySelector('#burgerMenu');
const $mainBlock = document.querySelector('main');

$burger.addEventListener('click', function() {
    if (this) {
        $mobileMenu.classList.add('activeMenu');
    }
});
$burger.removeEventListener('click', function() {
    if (this) {
        $mobileMenu.classList.add('activeMenu');
    }
});
document.addEventListener('scroll', function(event) {
    if (event.type) {
        $mobileMenu.classList.remove('activeMenu');
    }
});
document.removeEventListener('scroll', function(event) {
    if (event.type) {
        $mobileMenu.classList.remove('activeMenu');
    }
});

// Выпадающее меню закрывается при скролле

const $arrLeft = document.querySelector("#arrowLeft");
const $arrRight = document.querySelector("#arrowRight");
const $slides = document.querySelectorAll(".sliderItem");

let i = 0;
$arrLeft.style.display = "none";
$arrRight.addEventListener('click', moveNext);
function moveNext(){
    $arrLeft.style.display = 'inline-block';
    $slides[i].style.display = 'none';
    $slides[++i].style.display = 'block';
    if (i === $slides.length - 1) {
      $arrRight.style.display = 'none';
    }
}

$arrLeft.addEventListener('click', movePrev);
function movePrev(){
    $arrRight.style.display = 'inline-block';
    $slides[i].style.display = 'none';
    $slides[--i].style.display = 'block';
    if (i === 0) {
        $arrLeft.style.display = 'none';
    }
}