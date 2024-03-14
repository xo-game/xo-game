/*
This file contain all functions related to the timer in the game!
CHECKED
*/

/*
FUNCTIONS
*/

//This stop and starts the timer
export function startStopTimer(gameActive) {
    if(gameActive) {
        timerInterval = setInterval(updateTimer, 1000);
    }
    else {
        clearInterval(timerInterval);
    }
}

//This update each second the timer
export function updateTimer() {
    totalSeconds++;
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;
    timeSpace.textContent = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
}

//This add 0 before a numbers that have one digit
export function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

//This restart the timer. This is use when you restart the game
export function restartTime(gameActive) {
    clearInterval(timerInterval);
    totalSeconds = 0;
    startStopTimer(gameActive);
}

/*
ELEMENTS
*/

//the is the text that contain the current time of the game
export const timeSpace = document.getElementById('time');

/*
VARIABLES
*/

//the time starts in 0, "totalSeconds" is the reference
export let totalSeconds = 0;

//the time will change each seconds this will be like a "live timer"
export let timerInterval;


