



const mediaPlayer = document.getElementsByClassName('mediaplayer')[0];
const player = mediaPlayer.getElementsByTagName('audio')[0];
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

function playListChangeBack() {
    if(counter === 0){
        counter = audioPlayList.length - 1;
    }else{
        counter--;
    }
    player.src = 'mp3/'+audioPlayList[counter];
    playerTitle.title = audioPlayList[counter];
    if(mediaPlayer.classList.contains('play')){
        player.play();
    }
}

function playListChangeNext() {
    if(counter === audioPlayList.length -1){
        counter = 0;
    }else{
        counter++;
    }
    player.src = 'mp3/'+audioPlayList[counter];
    playerTitle.title = audioPlayList[counter];
    if(mediaPlayer.classList.contains('play')){
        player.play();
    }
}

function doButtonAction() {
    console.log(this.className);
    if(this.className === 'playstate'){
        if(mediaPlayer.classList.contains('play')){
            mediaPlayer.classList.toggle('play');
            player.pause();
        }else{
            mediaPlayer.classList.toggle('play');
            player.play();
        }
    }else if(this.className === 'stop'){
        player.pause();
        player.currentTime = 0;
        if(mediaPlayer.classList.contains('play')){
            mediaPlayer.classList.toggle('play');
        }
    }else if(this.className === 'back'){
        playListChangeBack();
    }else if(this.className === 'next'){
        playListChangeNext();
    }
}



for (let i = 0; i < button.length; i++){
    button[i].onclick = doButtonAction;
}