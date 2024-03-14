/*
This file contain all functions related to the options that you choose when you are in player1 vs player2 menu or player vs cpu menu!
CHECKED
*/

/*
IMPORTS
*/
import * as bgMusic from './bgMusic.js';

/*
FUNCTIONS
*/
//the "player 1" in p1 vs p2 or "player" in player vs cpu bg-selected the symbol X that symbol will have orange background thanks to the class 'bg-selected'
export function p1ChooseSymbolX() {
    player1 = 'X';
    player2 = 'O';
    if(p1X.classList.contains('bg-unselected')) {
        p1X.classList.remove('bg-unselected');
        p1X.classList.add('bg-selected');
        p2O.classList.remove('bg-unselected');
        p2O.classList.add('bg-selected');
        if(p1O.classList.contains('bg-selected')) {
            p1O.classList.remove('bg-selected');
            p1O.classList.add('bg-unselected');
            p2X.classList.remove('bg-selected');
            p2X.classList.add('bg-unselected');
        }
    }
    setLocalPlayers(player1, player2);
}

//the "player 1" in p1 vs p2 or "player" in player vs cpu bg-selected the symbol O that symbol will have orange background thanks to the class 'bg-selected'
export function p1ChooseSymbolO() {
    player1 = 'O';
    player2 = 'X';
    if(p1O.classList.contains('bg-unselected')) {
        p1O.classList.remove('bg-unselected');
        p1O.classList.add('bg-selected');
        p2X.classList.remove('bg-unselected');
        p2X.classList.add('bg-selected');
        if(p1X.classList.contains('bg-selected')) {
            p1X.classList.remove('bg-selected');
            p1X.classList.add('bg-unselected');
            p2O.classList.remove('bg-selected');
            p2O.classList.add('bg-unselected');
        }
    }
    setLocalPlayers(player1, player2);
}

//the player bg-selected the boxing open arena will have orange background thanks to the class 'bg-selected'
export function p1ChooseBoxingOpenArena() {
    arena = 'boxingOpen';
    if(boxingOpen.classList.contains('bg-unselected')) {
        boxingOpen.classList.remove('bg-unselected');
        boxingOpen.classList.add('bg-selected');
        if(boxingClose.classList.contains('bg-selected')) {
            boxingClose.classList.remove('bg-selected');
            boxingClose.classList.add('bg-unselected');
        }
        else if(bgIndigo500.classList.contains('bg-selected')) {
            bgIndigo500.classList.remove('bg-selected');
            bgIndigo500.classList.add('bg-unselected');
        }
        else if(bgBlack.classList.contains('bg-selected')) {
            bgBlack.classList.remove('bg-selected');
            bgBlack.classList.add('bg-unselected');
        }
        else if(bgOrange500.classList.contains('bg-selected')) {
            bgOrange500.classList.remove('bg-selected');
            bgOrange500.classList.add('bg-unselected');
        }
    }
    setLocalArena(arena);
}

//the player selected the boxing close arena will have orange background thanks to the class 'bg-selected'
export function p1ChooseBoxingCloseArena() {
    arena = 'boxingClose';
    if(boxingClose.classList.contains('bg-unselected')) {
        boxingClose.classList.remove('bg-unselected');
        boxingClose.classList.add('bg-selected');
        if(boxingOpen.classList.contains('bg-selected')) {
            boxingOpen.classList.remove('bg-selected');
            boxingOpen.classList.add('bg-unselected');
        }
        else if(bgIndigo500.classList.contains('bg-selected')) {
            bgIndigo500.classList.remove('bg-selected');
            bgIndigo500.classList.add('bg-unselected');
        }
        else if(bgBlack.classList.contains('bg-selected')) {
            bgBlack.classList.remove('bg-selected');
            bgBlack.classList.add('bg-unselected');
        }
        else if(bgOrange500.classList.contains('bg-selected')) {
            bgOrange500.classList.remove('bg-selected');
            bgOrange500.classList.add('bg-unselected');
        }
    }
    setLocalArena(arena);
}

//the player selected the bg-indigo-500 arena will have orange background thanks to the class 'bg-selected'
export function p1ChooseBgIndigo500Arena() {
    arena = 'bgIndigo500';
    if(bgIndigo500.classList.contains('bg-unselected')) {
        bgIndigo500.classList.remove('bg-unselected');
        bgIndigo500.classList.add('bg-selected');
        if(boxingOpen.classList.contains('bg-selected')) {
            boxingOpen.classList.remove('bg-selected');
            boxingOpen.classList.add('bg-unselected');
        }
        else if(boxingClose.classList.contains('bg-selected')) {
            boxingClose.classList.remove('bg-selected');
            boxingClose.classList.add('bg-unselected');
        }
        else if(bgBlack.classList.contains('bg-selected')) {
            bgBlack.classList.remove('bg-selected');
            bgBlack.classList.add('bg-unselected');
        }
        else if(bgOrange500.classList.contains('bg-selected')) {
            bgOrange500.classList.remove('bg-selected');
            bgOrange500.classList.add('bg-unselected');
        }
    }
    setLocalArena(arena);
}

//the player selected the bg-black arena will have orange background thanks to the class 'bg-selected'
export function p1ChooseBgBlackArena() {
    arena = 'bgBlack';
    if(bgBlack.classList.contains('bg-unselected')) {
        bgBlack.classList.remove('bg-unselected');
        bgBlack.classList.add('bg-selected');
        if(boxingOpen.classList.contains('bg-selected')) {
            boxingOpen.classList.remove('bg-selected');
            boxingOpen.classList.add('bg-unselected');
        }
        else if(boxingClose.classList.contains('bg-selected')) {
            boxingClose.classList.remove('bg-selected');
            boxingClose.classList.add('bg-unselected');
        }
        else if(bgIndigo500.classList.contains('bg-selected')) {
            bgIndigo500.classList.remove('bg-selected');
            bgIndigo500.classList.add('bg-unselected');
        }
        else if(bgOrange500.classList.contains('bg-selected')) {
            bgOrange500.classList.remove('bg-selected');
            bgOrange500.classList.add('bg-unselected');
        }
    }
    setLocalArena(arena);
}

//the player selected the bg-orange-500 arena will have orange background thanks to the class 'bg-selected'
export function p1ChooseBgOrange500Arena() {
    arena = 'bgOrange500';
    if(bgOrange500.classList.contains('bg-unselected')) {
        bgOrange500.classList.remove('bg-unselected');
        bgOrange500.classList.add('bg-selected');
        if(boxingOpen.classList.contains('bg-selected')) {
            boxingOpen.classList.remove('bg-selected');
            boxingOpen.classList.add('bg-unselected');
        }
        else if(boxingClose.classList.contains('bg-selected')) {
            boxingClose.classList.remove('bg-selected');
            boxingClose.classList.add('bg-unselected');
        }
        else if(bgIndigo500.classList.contains('bg-selected')) {
            bgIndigo500.classList.remove('bg-selected');
            bgIndigo500.classList.add('bg-unselected');
        }
        else if(bgBlack.classList.contains('bg-selected')) {
            bgBlack.classList.remove('bg-selected');
            bgBlack.classList.add('bg-unselected');
        }
    }
    setLocalArena(arena);
}


//the player bg-selected the fairy tale music will have orange background thanks to the class 'bg-selected'
export function p1ChooseFairyTaleMusic() {
    music = 'fairyTale';
    if(fairyTale.classList.contains('bg-unselected')) {
        fairyTale.classList.remove('bg-unselected');
        fairyTale.classList.add('bg-selected');
        if(cinematicAdventure.classList.contains('bg-selected')) {
            cinematicAdventure.classList.remove('bg-selected');
            cinematicAdventure.classList.add('bg-unselected');
        }
        if(acousticWedding.classList.contains('bg-selected')) {
            acousticWedding.classList.remove('bg-selected');
            acousticWedding.classList.add('bg-unselected');
        }
    }
    selectedMusic(music);
    setLocalMusic(music);
    bgMusic.mainAudio.addEventListener('canplaythrough', () => {
        bgMusic.playMusic();
    });
}

//The player bg-selected the cinematic adventure music will have orange background thanks to the class 'bg-selected'
export function p1ChooseCinematicAdventureMusic() {
    music = 'cinematicAdventure';
    if(cinematicAdventure.classList.contains('bg-unselected')) {
        cinematicAdventure.classList.remove('bg-unselected');
        cinematicAdventure.classList.add('bg-selected');
        if(fairyTale.classList.contains('bg-selected')) {
            fairyTale.classList.remove('bg-selected');
            fairyTale.classList.add('bg-unselected');
        }
        if(acousticWedding.classList.contains('bg-selected')) {
            acousticWedding.classList.remove('bg-selected');
            acousticWedding.classList.add('bg-unselected');
        }
    }
    selectedMusic(music);
    setLocalMusic(music);
    bgMusic.mainAudio.addEventListener('canplaythrough', () => {
        bgMusic.playMusic();
    });
}

//the player bg-selected the acoustic wedding music will have orange background thanks to the class 'bg-selected'
export function p1ChooseAcousticWeddingMusic() {
    music = 'acousticWedding';
    if(acousticWedding.classList.contains('bg-unselected')) {
        acousticWedding.classList.remove('bg-unselected');
        acousticWedding.classList.add('bg-selected');
        if(fairyTale.classList.contains('bg-selected')) {
            fairyTale.classList.remove('bg-selected');
            fairyTale.classList.add('bg-unselected');
        }
        if(cinematicAdventure.classList.contains('bg-selected')) {
            cinematicAdventure.classList.remove('bg-selected');
            cinematicAdventure.classList.add('bg-unselected');
        }
    }
    selectedMusic(music);
    setLocalMusic(music);
    bgMusic.mainAudio.addEventListener('canplaythrough', () => {
        bgMusic.playMusic();
    });
}

//the player selected new bie difficulty and that option will have orange background thanks to the class 'bg-selected'
export function p1ChooseNewBieDifficulty() {
    difficulty = 'newBie';
    if(newBie.classList.contains('bg-unselected')) {
        newBie.classList.remove('bg-unselected');
        newBie.classList.add('bg-selected');
        newBie.classList.remove('border-indigo-500');
        newBie.classList.add('border-[orange]');
        if(sensei.classList.contains('bg-selected')) {
            sensei.classList.remove('bg-selected');
            sensei.classList.add('bg-unselected');
            sensei.classList.remove('border-[orange]')
            sensei.classList.add('border-indigo-500');
        }
    }
    setLocalDifficulty(difficulty);
}

//the player selected sensei difficulty and that option will have orange background thanks to the class 'bg-selected'
export function p1ChooseSenseiDifficulty() {
    difficulty = 'sensei';
    if(sensei.classList.contains('bg-unselected')) {
        sensei.classList.remove('bg-unselected');
        sensei.classList.add('bg-selected');
        sensei.classList.remove('border-indigo-500');
        sensei.classList.add('border-[orange]');
        if(newBie.classList.contains('bg-selected')) {
            newBie.classList.remove('bg-selected');
            newBie.classList.add('bg-unselected');
            newBie.classList.remove('border-[orange]')
            newBie.classList.add('border-indigo-500');
        }
    }
    setLocalDifficulty(difficulty);
}




//the selection of the symbol is save to use in the other html pages
function setLocalPlayers(player1 , player2) {
    localStorage.setItem('player1', player1);
    localStorage.setItem('player2', player2);
}

//the selection of the arena is save to use in the other html pages
function setLocalArena(arena) {
    localStorage.setItem('arena', arena);
}

//the selection of the music is save to use in the other html pages
function setLocalMusic(music) {
    localStorage.setItem('music', music);
}

//the selection of the difficult is save to use in other html pages
function setLocalDifficulty(difficult) {
    localStorage.setItem('difficulty', difficult);
}


//Next to select the arena you want when you are playing, the bakcground-color will have the arena bg-selected
export function selectedArena(arena) {
    if(arena == 'boxingOpen') {
        bgImage.src = '/img/boxingOpen.jpg';
    }
    else if(arena == 'boxingClose') {
        bgImage.src = '/img/boxingClose.jpg';
    }
    else if(arena == 'bgIndigo500') {
        bgImage.classList.remove('block');
        bgImage.classList.add('hidden');
        body.classList.add('bg-indigo-500');
    }
    else if(arena == 'bgBlack') {
        bgImage.classList.remove('block');
        bgImage.classList.add('hidden');
        body.classList.add('bg-black');
    }
    else if(arena == 'bgOrange500') {
        bgImage.classList.remove('block');
        bgImage.classList.add('hidden');
        body.classList.add('bg-orange-500');
    }
} 

//Next to select the music you want when you are playing, the bakcground-color will have the music bg-selected
export function selectedMusic(music) {
    if(music == 'fairyTale') {
        bgMusic.mainAudio.src = '/audio/fairyTaleMagicalChristmas.mp3';
    }
    else if(music == 'cinematicAdventure') {
        bgMusic.mainAudio.src = '/audio/cinematicAdventure.mp3';
    }
    else if(music == 'acousticWedding') {
        bgMusic.mainAudio.src = '/audio/acousticWedding.mp3';
    }
}

//default options if the user go directly to the game without select any option in the "p1 vs p2" menu or "p vs cpu" menu
export function defaultOptions() {
    setLocalPlayers(player1, player2);
    setLocalArena(arena);
    setLocalMusic(music);
    setLocalDifficulty(difficulty);
}

/*
ELEMENTS
*/

//the next options are parts of the menu. To not repeat the code, player2 do the same work that CPU in the menu about selecting user

//get the body tag
export const body = document.getElementsByTagName('body')[0];

//option "X" of the player1
export const p1X = document.getElementById('p1X');

//option "O" of the player1
export const p1O = document.getElementById('p1O');

//option "X" of the player2
export const p2X = document.getElementById('p2X');

//option "O" of the player2
export const p2O = document.getElementById('p2O');

//option boxing open arena
export const boxingOpen = document.getElementById('boxingOpen');

//option boxing close arena
export const boxingClose = document.getElementById('boxingClose');

//option bg-indigo-500 arena
export const bgIndigo500 = document.getElementById('bgIndigo500');

//option bg-black arena
export const bgBlack = document.getElementById('bgBlack');

//export bg-orange-500 arena
export const bgOrange500 = document.getElementById('bgOrange500');

//option fairy tale (music)
export const fairyTale = document.getElementById('fairyTale');

//option cinematic adventure (music)
export const cinematicAdventure = document.getElementById('cinematicAdventure');

//option acoustic wedding (music)
export const acousticWedding = document.getElementById('acousticWedding');

//new bie difficulty option
export const newBie = document.getElementById('newBie');

//sensei difficulty option
export const sensei = document.getElementById('sensei');

//this is the bgImage that will have the match
export const bgImage = document.getElementById('bgImage');

//this is the text above the button to play the game in options menu
export const optionToSelect = document.getElementById('optionToSelect');


/*
VARIABLES 
*/

//these variables are the default options, if the user choose other options values, the variables will change
export let player1 = 'X';
export let player2 = 'O'; 
export let arena = 'boxingOpen';
export let music = 'fairyTale';
export let difficulty = 'newBie';
