/* 
This file contains all js mandatory in howToPlay.html
*/

/*
IMPORTS
*/
import * as bgMusic from './bgMusic.js'

/*
FUNCTIONS
*/

//this function open a modal when you press one image in the gallery
function openModalImg(e) {
    const imgSelected = e.target;
    imgModal.src = imgSelected.src;
    modal.classList.remove('hidden');
    modal.classList.add('block');
    body.classList.add('overflow-hidden');
}

//this function close a modal when you press the "x" icon in the modal
function closeModalImg() {
    modal.classList.add('hidden');
    body.classList.remove('overflow-hidden');
}

/*
ELEMENTS
*/

//get the body tag
const body = document.getElementsByTagName('body')[0];

//get the modal related when you press an img in the gallery
const modal = document.getElementById('modal');

//get the img inside the modal
const imgModal = document.getElementById('imgModal');

//get all img inside the gallery
const imgGallery = document.querySelectorAll('.gallery img');

//get the "x" icon to close the modal
const circleXmark = document.getElementsByClassName('fa-circle-xmark')[0];


/*
EVENTS
 */

imgGallery.forEach(img => {
    img.addEventListener('click', openModalImg);
});

circleXmark.addEventListener('click', closeModalImg);

bgMusic.buttonAudio.addEventListener('click', bgMusic.changeAudioIcon);

window.addEventListener('blur', bgMusic.stopAudio);

window.addEventListener('blur', bgMusic.changeAudioIcon);