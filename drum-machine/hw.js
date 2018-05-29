const keyRide = document.getElementsByClassName('drum-kit__drum');
function playSound() {
    const player = this.getElementsByTagName('audio')[0];
    player.currentTime = 0;
    player.play();

}
for(let i = 0; i < keyRide.length; i++){
    keyRide[i].onclick = playSound;
}