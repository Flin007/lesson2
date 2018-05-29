const mediaPlayer = document.getElementsByClassName('mediaplayer')[0];
const player = mediaPlayer.getElementsByTagName('audio');
const buttonsList = document.getElementsByClassName('buttons')[0];
const button = buttonsList.getElementsByTagName('button');
let counter = 0;
const audioPlayList = [
    'LA Chill Tour.mp3',
    'LA Fusion Jam.mp3',
    'This is it band.mp3'
];
player.src = 'mp3/'+audioPlayList[counter];
const playerTitle = document.getElementsByClassName('title')[0];
playerTitle.title = audioPlayList[counter];

function doButtonAction() {
    console.log(this.className);
    if(this.className === 'playstate'){
        const buttonAction = this.getElementsByTagName('i');
        player[0].play();
    }else if(this.className === 'stop'){
        player[0].pause();
        player[0].currentTime = 0;
    }else if(this.className === 'back'){
        if
            }

}

for (let i = 0; i < button.length; i++){
    button[i].onclick = doButtonAction;
}