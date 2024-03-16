/*
This file contains everything related to the "player1 vs player2" game!
*/

/*
IMPORTS
*/

import * as bgMusic from './bgMusic.js';
import * as timer from './timer.js';
import { selectedArena, selectedMusic } from './chooseP1P2CpuOption.js';
import * as game from './gameGeneral.js';

/*
FUNCTIONS
*/

//this is use to restart the game. The timer and the cell content will be reset
function restartGame() {
    game.cells.forEach(cell => {
        cell.textContent = '';
        if(cell.classList.contains('bg-green-500')) {
            cell.classList.remove('bg-green-500');
        }
        else if(cell.classList.contains('bg-blue-500')) {
            cell.classList.remove('bg-blue-500');
        }
        cell.classList.add('bg-gray-700');
    });
    gameActive = true;
    timer.restartTime(gameActive);

    if(textAfterPlay.classList.contains('animate-bounce')) {
        textAfterPlay.classList.remove('animate-bounce');
    }

    if(winnerModal.classList.contains('bg-blue-600')) {
        winnerModal.classList.remove('bg-blue-600');
    }

    else if(winnerModal.classList.contains('bg-green-600')) {
        winnerModal.classList.remove('bg-green-600');
    }
    else if(winnerModal.classList.contains('bg-yellow-600')) {
        winnerModal.classList.remove('bg-yellow-600');
    }
    if(winnerModal.classList.contains('flex')) {
        winnerModal.classList.remove('flex');
        winnerModal.classList.add('hidden');
    }
}

//this handle each click in the board
function handleCellClick(e){

    const cell = e.target;

    if(cell.innerText !== '' || !gameActive) return;

    cell.innerText = currentPlayer;
    if(gameActive) {
        if(currentPlayer == game.player1) {
            currentPlayer = game.player2;
        } else {
            currentPlayer = game.player1;
        }
        turn.innerText = currentPlayer;
    }
    checkResult();
}

//This will check if there is a winner or a draw
function checkResult(){
    let p1Won = false;
    let p2Won = false;
    for(let i = 0; i < game.winCombos.length; i++) {
        const [a, b, c] = game.winCombos[i];
        const cellA = game.cells[a].innerText;
        const cellB = game.cells[b].innerText;
        const cellC = game.cells[c].innerText;
        if((cellA !== '' && cellA === cellB && cellA === cellC) && (cellA == game.player1)) {
            game.cells[a].classList.remove('bg-gray-700');
            game.cells[a].classList.add('bg-green-500');
            game.cells[b].classList.remove('bg-gray-700');
            game.cells[b].classList.add('bg-green-500');
            game.cells[c].classList.remove('bg-gray-700');
            game.cells[c].classList.add('bg-green-500');
            p1Won = true;
            break;
        }

        else if((cellA !== '' && cellA === cellB && cellA === cellC) && (cellA == game.player2)) {
            game.cells[a].classList.remove('bg-gray-700');
            game.cells[a].classList.add('bg-blue-500');
            game.cells[b].classList.remove('bg-gray-700');
            game.cells[b].classList.add('bg-blue-500');
            game.cells[c].classList.remove('bg-gray-700');
            game.cells[c].classList.add('bg-blue-500');
            p2Won = true;
            break;
        }
        
    }

    if(p1Won) {
        gameActive = false;
        timer.startStopTimer(gameActive);
        textAfterPlay.textContent = 'Player 1 is the winner!';
        textAfterPlay.classList.add('animate-bounce');
        winnerModal.classList.add('bg-green-600');
        openModalWinner();
    }
    else if(p2Won) {
        gameActive = false;
        timer.startStopTimer(gameActive);
        textAfterPlay.textContent = 'Player 2 is the winner!';
        textAfterPlay.classList.add('animate-bounce');
        winnerModal.classList.add('bg-blue-600');
        openModalWinner();
    }

    let roundDraw = !Array.from(game.cells).some(cell => cell.innerText === '');

    if(roundDraw && !p1Won && !p2Won) {
        gameActive = false;
        timer.startStopTimer(gameActive);
        textAfterPlay.textContent = 'Draw!';
        winnerModal.classList.add('bg-yellow-600');
        openModalWinner();
        return;
    }
};

//Close all modals in the game
function closeModal() {
    modal.forEach(box => {
        if(box.classList.contains('flex')) {
            box.classList.remove('flex');
            box.classList.add('hidden');
        }
    });
}

//open the modal winner
function openModalWinner() {
    winnerModal.classList.remove('hidden');
    winnerModal.classList.add('flex');
}

/*
VARIABLES
*/


//if gameActive is true the board will accept more symbol (X or O)
let gameActive = true;

//currentPlayer is the symbol that player1 selected
let currentPlayer = game.player1;

//text inside the modal that say winner or draw
const textAfterPlay = document.getElementById('textAfterPlay');

//all buttons that close the modal when is pressed
const backGame = document.querySelectorAll('.backGame');

//all modals in the game
const modal = document.querySelectorAll('.modal');

//modal that appear when the game has a winner or a draw
const winnerModal = document.getElementById('winnerModal');

/*
EVENTS
*/


document.addEventListener('DOMContentLoaded', () => { 
    game.turn.textContent = currentPlayer;
});

backGame.forEach(button => {
        button.addEventListener('click', closeModal);
});

game.cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick)
});

bgMusic.buttonAudio.addEventListener('click', bgMusic.changeAudioIcon);

game.restart.addEventListener('click', restartGame);

game.logOut.addEventListener('click', game.exitGame); 

window.addEventListener('load', timer.startStopTimer);

window.addEventListener('blur', bgMusic.stopAudio);

window.addEventListener('blur', bgMusic.changeAudioIcon);

selectedArena(game.arena);

selectedMusic(game.music);