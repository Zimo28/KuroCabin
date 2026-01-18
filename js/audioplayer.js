const audio = document.getElementById('bg-audio');
const circleBtn = document.getElementById('circle-audio-player');
const icon = document.getElementById('audio-icon');

circleBtn.addEventListener('click', () => {
    if(audio.paused){
        audio.play();
        icon.className = 'ri-pause-line';
    } else {
        audio.pause();
        icon.className = 'ri-play-line';
    }
});

