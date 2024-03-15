/*
This file contains everything related to the player vs cpu game!
*/

/*
IMPORTS
*/

import * as bgMusic from './bgMusic.js';
import * as timer from './timer.js';
import { selectedArena, selectedMusic} from './chooseP1P2CpuOption.js';
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
            cell.classList.add('bg-gray-700');
        }
        else if(cell.classList.contains('bg-red-500')) {
            cell.classList.remove('bg-red-500');
            cell.classList.add('bg-gray-700');
        }
    });
    gameActive = true;
    timer.restartTime(gameActive);

    if(textAfterPlay.classList.contains('animate-bounce')) {
        textAfterPlay.classList.remove('animate-bounce');
    }

    if(winnerModal.classList.contains('bg-red-600')) {
        winnerModal.classList.remove('bg-red-600');
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

//This will check if there is a winner or a draw
function checkResult(){
    let playerWon = false;
    let cpuWon = false;
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
            playerWon = true;
            break;
        }

        else if((cellA !== '' && cellA === cellB && cellA === cellC) && (cellA == game.player2)) {
            game.cells[a].classList.remove('bg-gray-700');
            game.cells[a].classList.add('bg-red-500');
            game.cells[b].classList.remove('bg-gray-700');
            game.cells[b].classList.add('bg-red-500');
            game.cells[c].classList.remove('bg-gray-700');
            game.cells[c].classList.add('bg-red-500');
            cpuWon = true;
            break;
        }
        
    }

    if(playerWon) {
        gameActive = false;
        timer.startStopTimer(gameActive);
        textAfterPlay.textContent = 'You are the winner!';
        textAfterPlay.classList.add('animate-bounce');
        winnerModal.classList.add('bg-green-600');
        openModalWinner();
        return;
    }
    else if(cpuWon) {
        gameActive = false;
        timer.startStopTimer(gameActive);
        textAfterPlay.textContent = 'CPU is the winner!';
        winnerModal.classList.add('bg-red-600');
        openModalWinner();
        return;
    }

    let roundDraw = !Array.from(game.cells).some(cell => cell.innerText === '');

    if(roundDraw && !playerWon && !cpuWon) {
        gameActive = false;
        timer.startStopTimer(gameActive);
        textAfterPlay.textContent = 'Draw';
        winnerModal.classList.add('bg-yellow-600');
        openModalWinner();
        return;
    }
};

//this handle each click in the board
function handleCellClick(e){
    const cell = e.target;

    if(cell.innerText !== '' || !gameActive || currentPlayer != game.player1) return;

    cell.innerText = currentPlayer;
    checkResult();
    if(gameActive) {
        if(currentPlayer == game.player1) {
            currentPlayer = game.player2;
        } else {
            currentPlayer = game.player1;
        }
        turn.innerText = currentPlayer;
    }


    if(currentPlayer == game.player2) {
        setTimeout(()=> {
            cpuMove();
            turn.innerText = currentPlayer;
        }, 1000);
    }
}

//this determines the movements of the CPU according to the difficulty selected
function cpuMove() {
    if(difficulty === 'newBie') {
        makeNewBieMove();
    } else if(difficulty === 'sensei') {
        makeSenseiMove();
    }
    checkResult();
    currentPlayer = game.player1;
};

//this the easiest difficulty
function makeNewBieMove(){
    let emptyCells = Array.from(game.cells).filter(cell => cell.innerText === '');
    let randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    randomCell.innerText = currentPlayer;
};

//this is the hardest difficulty
function makeSenseiMove(){
    // Busca si hay movimientos para bloquear al jugador
    let moveMade = false;
    for(let i = 0; i < game.winCombos.length; i++) {
        const [a, b, c] = game.winCombos[i];
        const cellA = game.cells[a].innerText;
        const cellB = game.cells[b].innerText;
        const cellC = game.cells[c].innerText;

        // Si hay dos celdas del jugador y una celda vacía, la game.player2 bloquea al jugador
        if((cellA === game.player1 && cellB === game.player1 && cellC === '') ||
           (cellA === game.player1 && cellB === '' && cellC === game.player1) ||
           (cellA === '' && cellB === game.player1 && cellC === game.player1)) {
            if(cellA === '') game.cells[a].innerText = currentPlayer;
            else if(cellB === '') game.cells[b].innerText = currentPlayer;
            else if(cellC === '') game.cells[c].innerText = currentPlayer;
            moveMade = true;
            break;
        }
    }
        // Si no hay movimientos para bloquear al jugador, realiza un movimiento aleatorio
        if(!moveMade) makeNewBieMove();
};

//Close all modals in the game
function closeModal() {
    modal.forEach(box => {
        if(box.classList.contains('flex')) {
            box.classList.remove('flex');
            box.classList.add('hidden');
        }
    })
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

//difficulty selected
let difficulty = localStorage.getItem('difficulty');

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
