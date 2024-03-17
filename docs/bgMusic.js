/*
This file contains everything related to the background music of this game!
*/

/*
FUNCTIONS
*/

//to play the music
export function playMusic() {
    setVolume();
    mainAudio.play();
}

//to mute the music
export function mutedMusic() {
    mainAudio.muted = true;
}

//to remove the muted status of the music
export function noMutedMusic() {
    mainAudio.muted = false;
}

//to pause the music
export function stopAudio() {
    mainAudio.pause();
    if(iconAudio.classList.contains('fa-volume-high')) {
        changeAudioIcon();
    }
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

