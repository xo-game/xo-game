/* 
This file contains everything related in the menu of player1 vs player2
CHECKED
*/

/*
IMPORTS
*/
import * as bgMusic from './bgMusic.js';
import * as chooseOption from './chooseP1P2CpuOption.js';

/*
EVENTS
*/

chooseOption.p1X.addEventListener('click', chooseOption.p1ChooseSymbolX);

chooseOption.p1O.addEventListener('click',chooseOption.p1ChooseSymbolO);

chooseOption.boxingOpen.addEventListener('click', chooseOption.p1ChooseBoxingOpenArena);

chooseOption.boxingClose.addEventListener('click', chooseOption.p1ChooseBoxingCloseArena);

chooseOption.bgIndigo500.addEventListener('click', chooseOption.p1ChooseBgIndigo500Arena);

chooseOption.bgBlack.addEventListener('click', chooseOption.p1ChooseBgBlackArena);

chooseOption.bgOrange500.addEventListener('click', chooseOption.p1ChooseBgOrange500Arena);

chooseOption.fairyTale.addEventListener('click', chooseOption.p1ChooseFairyTaleMusic);

chooseOption.cinematicAdventure.addEventListener('click', chooseOption.p1ChooseCinematicAdventureMusic);

chooseOption.acousticWedding.addEventListener('click', chooseOption.p1ChooseAcousticWeddingMusic);

document.addEventListener('DOMContentLoaded', chooseOption.defaultOptions);

bgMusic.buttonAudio.addEventListener('click', bgMusic.changeAudioIcon);

window.addEventListener('blur', bgMusic.stopAudio);

window.addEventListener('blur', bgMusic.changeAudioIcon);
