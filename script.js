// radio
const music = document.getElementById('background-music');
const speakerIcon = document.getElementById('speaker-icon');

let isPlaying = false;

speakerIcon.addEventListener('click', () => {
    if (isPlaying) {
        music.pause();
        speakerIcon.src = './media/speaker-off.png';
    } else {
        music.play();
        speakerIcon.src = './media/speaker-on.png';
    }
    isPlaying = !isPlaying;
});

// clock
function updateClock() {
    const clock = document.getElementById("clock");
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    clock.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock();
