/* 
This file contains all js mandatory in index.html
*/

/*
IMPORTS
*/
import * as bgMusic from './bgMusic.js';

/*
FUNCTIONS
*/

//when you hover these functions (changeImOp1, changeImgPCpu, changeImgHowTPlay) the image in the square will change
function changeImgP1P2() {
    pmImage.src = '/img/p1VsP2Image.jpg';
}

function changeImgPCpu() {
    pmImage.src = '/img/pVsCpuImage.jpg';}

function changeImgHowTPlay() {
    pmImage.src = '/img/howToPlay.jpg';
}

export function setP1VsP2() {
    localStorage.setItem('option', p1VsP2);
}

export function setPVsCpu() {
    localStorage.setItem('option', pVsCpu);
}

/*
ELEMENTS
*/

//p1 vs p2 option
const p1VsP2 = document.getElementById('p1VsP2');

//p1 vs cpu option
const pVsCpu = document.getElementById('pVsCpu');

//how to play option
const howToPlay = document.getElementById('howToPlay');

//image that is changing while hover the options
const pmImage = document.getElementById('pmImage');

/*
EVENTS
*/

//pointerover is used for the user that use the cellphone that see the image changed it is the same that mouseover

bgMusic.buttonAudio.addEventListener('click', bgMusic.changeAudioIcon);

p1VsP2.addEventListener('click', setP1VsP2);

pVsCpu.addEventListener('click', setPVsCpu);

p1VsP2.addEventListener('pointerover', changeImgP1P2);

pVsCpu.addEventListener('pointerover', changeImgPCpu);

howToPlay.addEventListener('pointerover', changeImgHowTPlay);

window.addEventListener('blur', bgMusic.stopAudio);

window.addEventListener('blur', bgMusic.changeAudioIcon);

//WELCOME MESSAGE (only in the main menu is visible)
console.log('Welcome to TIC TAC TOE, this game was created by Allan Vega');
