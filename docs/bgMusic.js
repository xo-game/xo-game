/*
This file contain all functions related to the background music of this game!
CHECKED
*/

/*
FUNCTIONS
*/

//to mute the music
export function playMusic() {
    setVolume();
    mainAudio.play();
}

//to quit the music
export function mutedMusic() {
    mainAudio.muted = true;
}
export function noMutedMusic() {
    mainAudio.muted = false;
}

export function stopAudio() {
    mainAudio.pause();
}

//to change the volume of the music
export function setVolume() {
    mainAudio.volume = 0.1;
}

//to change the icon when you press in it and to reproduce its selected music
export function changeAudioIcon() {
    const iconAudio = document.getElementById('iconAudio');

    //verify is the icon is muted or not
    if (iconAudio.classList.contains('fa-volume-xmark')) {
        iconAudio.classList.remove('fa-volume-xmark');
        iconAudio.classList.add('fa-volume-high');
        playMusic();
        noMutedMusic();
    } else {
        iconAudio.classList.remove('fa-volume-high');
        iconAudio.classList.add('fa-volume-xmark');
        mutedMusic();
    }
}


/*
ELEMENTS
*/

//this is the audio tag that is in the html doc
export const mainAudio = document.getElementById('mainAudio');

//this is the icon of audio
export const buttonAudio = document.getElementById('buttonAudio');

