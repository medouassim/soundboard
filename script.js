const music = ['ac_dc', 'pink_floyd', 'khaled', 'elbadman', 'michael_jackson', 'eminem', 'the_beatles', 'zedk'];
music.forEach(song => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerHTML = song;

    const buttons = document.getElementById('buttons');
    buttons.appendChild(btn);
    btn.addEventListener('click', () => {
        stopSongs();
        document.getElementById(song).play();
    })
})
function stopSongs() {
    music.forEach(song => {
        const sound = document.getElementById(song);
        sound.pause();
        sound.currentTime = 0;
    })
}