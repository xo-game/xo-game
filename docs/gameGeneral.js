/*
This file contains everything related to the "player1 vs cpu" and "player1 vs player2" game!
*/

//to restart the game this will erase the content inside the board and reset the timer


//To exit the game
export function exitGame() {
    exit.classList.remove('hidden');
    exit.classList.add('flex');
}

//this is the exit modal
export const exit = document.getElementById('exit');

//this all grid-item of the grid container that is used to the board of the game
export const cells = document.querySelectorAll('.cell');

//the is the text that contain the current turn (player1, player2 and on the other hand CPU)
export const turn = document.getElementById('turn');

//This is the restart icon
export const restart = document.getElementById('restart');

//This is the quit game icon
export const logOut = document.getElementById('logOut');

//All combo to become the winner
export const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

/*
VARIABLES
*/

//These variables are that we got in the './chooseP1P2CpuOption.js' thanks to localStorage
export let player1 = localStorage.getItem('player1');
export let player2 = localStorage.getItem('player2');
export let arena = localStorage.getItem('arena');
export let music = localStorage.getItem('music');

