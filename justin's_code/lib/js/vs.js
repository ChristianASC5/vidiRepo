var myVideo = document.getElementById("video_player"); 

var video = document.getElementById("video_screen")

var play_button = document.getElementById("play");
var pause_button = document.getElementById("pause");

play_button.addEventListener("click", play)
pause_button.addEventListener("click", pause)
myVideo.addEventListener("click", playPause)

function playPause() { 
    if (video.paused) 
        video.play(); 
    else 
        video.pause(); 
} 

function pause(){
	 video.pause();
}

function play(){
	 video.play();
}

function makeBig() { 
    myVideo.width = 560; 
} 

function makeSmall() { 
    myVideo.width = 320; 
} 

function makeNormal() { 
    myVideo.width = 420; 
} 


var elem = document.getElementById("video_screen"); 
var fullscreen_button = document.getElementById("fullscreen"); 
fullscreen_button.addEventListener("click", openFullscreen)

/* When the openFullscreen() function is executed, open the video in fullscreen.
Note that we must include prefixes for different browsers, as they don't support the requestFullscreen method yet */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}