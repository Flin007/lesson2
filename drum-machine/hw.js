const keyRide = document.getElementsByClassName('drum-kit__drum');
function playSound() {
    const player = this.getElementsByTagName('audio');
    player[0].currentTime = 0;
    player[0].play();

}
for(let i = 0; i < keyRide.length; i++){
    keyRide[i].onclick = playSound;
}