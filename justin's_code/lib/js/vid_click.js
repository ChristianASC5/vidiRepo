var main = document.getElementById("main_container")
var storageRef = firebase.storage().ref();
var database = firebase.database().ref()


database.on("child_added", make_icon)

function make_icon(rowData) {

	var row = rowData.val()
	const title = row.TITLE
	var vid_name = storageRef.child(row.VID_REF)


	var video_icon = document.createElement("div")
	video_icon.className = "video"
	video_icon.addEventListener("click", open)

	var thumb_holder = document.createElement("div")
	thumb_holder.id = "thumb_holder"
	var video_thumb = document.createElement("video")

	thumb_holder.appendChild(video_thumb)

	vid_name.getDownloadURL().then(function (url) {
		video_thumb.src = url
	})

	var video_title = document.createElement("p")
	video_title.innerHTML = title

	video_icon.appendChild(thumb_holder)
	video_icon.appendChild(video_title)


	main.appendChild(video_icon)

	// opens new video player 

	function open() {

		opened = window.open("");
		opened.document.write(`
	<!DOCTYPE html>
<html>
	<head>
		<title>vidi video player</title>
		
		<script defer>
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
var title = document.getElementById("title")
var video = document.getElementById("video_screen")
var description = document.getElementById("description")
var database = firebase.database().ref()
var storageRef = firebase.storage().ref();
var database = firebase.database().ref()
		
		</script>
		<link href="https://fonts.googleapis.com/css?family=Comfortaa" rel="stylesheet">
	
	</head>
	<body>
		<style>
body{
	margin: 0px;
	background-color: rgb(203, 223, 231);
}
p{
	font-family: 'Comfortaa', cursive;
	margin-left: 10px;
}
#title p{
	margin-top: 10px;
}
/*head elements*/
	#header{
	display: flex;
	
	height:11vh;
	margin-top: 5vh;
	}
	#title{
		border-style: solid;
		height:5vh;
		width:70vh;
		margin-left: 3vh;
		margin-top: 7.5vh;	
		border-radius: 90px;
		background-color: #FFFFFF;
		border-color: #d0dfe7ff;
		z-index: 10;
		border-width: 4px;
	}
/*head elements*/
/*Main page elements*/
	#main_container{
	display: flex;
	flex-direction: row;
	}
	#content_container{
	display: flex;
	
	height:150vh;
	width: 75vw;
	flex-direction: column;
	margin-left: 20px;
	margin-right: 20px;
	}
	#reccommended{
	display: flex;
	border-style: solid;
	width:19vw;
	margin-top: 2.7vh;
	border-color: #ffffff;
	background-color: #ffffff;
	overflow-y: scroll;
	
	}
	#video_container{
		flex-direction: column;
		border-style: solid;
		border-radius: 10px;
		background-color: #FFFFFF;
		border-color: #d0dfe7ff;
	}
	#video{
	color: #ffffff;
	border-style: solid;
	margin-top: 20px;
	height:72vh;
	border-color: #d0dfe7ff;
	background-color: #000000;
	
	}
	#video_player{
		display: flex;
		height:60vh;
		justify-content: center;
		
	}
	#video_player video{
		display: flex;
		height:60vh;
		border-radius: 10px;
		
	}
	#video_bar{
		display: flex;
		margin-top: 10px;
		width:40vw;
		height: 25px;
		background-color: rgba(255,255,255,.9);
		
		margin-left: auto;
		margin-right:auto;
		justify-content: center;
	}
	
	#video_footer{
	display: flex;
	flex-direction: row;
	height: 20vh;
	padding-top: 10px;
	}
	#description{
	border-style: solid;
	width:50vw;
	margin-left: 10px;
	border-radius: 10px 10px 0px 0px;
	border-color: #d0dfe7ff;
	border-width: 4px;
	overflow-y: scroll;
	}
	#tutorial{
	border-style: solid;
	width:22vw;
	margin-left: 8px;
	border-radius: 10px 10px 0px 0px;
	border-color: #d0dfe7ff;
	border-width: 4px;
	overflow-y: scroll;
	}
	#comments{
	margin-top: 20px;
	border-style: solid;
	height: 100%;
	border-radius:10px;
	background-color: #ffffff;
	border-color: #ffffff;
	margin-bottom: 10px;
	overflow-y: scroll;
	}
/*Main page elements*/
/*media 1*/
@media all and (max-width: 1300px){
/*head elements*/
	#header{
	display: flex;
	
	height:11vh;
	margin-top: 5vh;
	}
	#logo{
		background-image: url("C:/Users/ASC Student/Documents/vidi/assets/vidi_logo.png");
		
		width: 12vh;
		height: 12vh;
		margin-left: 4vw;
		margin-top: 15px;
		z-index: 10;
		background-repeat: no-repeat;
		background-size: 100%;
	}
	#title{
		border-style: solid;
		height:5vh;
		width:50vh;
		margin-left: 3vh;
		margin-top: 7.5vh;	
		border-radius: 90px;
		background-color: #FFFFFF;
		border-color: #d0dfe7ff;
		z-index: 10;
		border-width: 4px;
	}
/*head elements*/
/*Main page elements*/
	#main_container{
	display: flex;
	flex-direction: row;
	}
	#content_container{
	display: flex;
	
	height:150vh;
	width: 70vw;
	flex-direction: column;
	margin-left: 20px;
	margin-right: 20px;
	}
	#reccommended{
	display: flex;
	border-style: solid;
	width:20vw;
	margin-top: 2.7vh;
	border-color: #ffffff;
	background-color: #ffffff;
	margin-left: -5px
	}
	#video_container{
		flex-direction: column;
		border-style: solid;
		border-radius: 10px;
		background-color: #FFFFFF;
		border-color: #d0dfe7ff;
	}
	#video{
	color: #ffffff;
	border-style: solid;
	margin-top: 20px;
	height:72vh;
	border-color: #d0dfe7ff;
	background-color: #000000;
	
	}
	#video_player{
		display: flex;
		height:60vh;
		justify-content: center;
		
	}
	#video_player video{
		display: flex;
		height:60vh;
		border-radius: 10px;
		
	}
	#video_bar{
		display: flex;
		margin-top: 10px;
		width:40vw;
		height: 25px;
		background-color: rgba(255,255,255,.9);
		
		margin-left: auto;
		margin-right:auto;
		justify-content: center;
	}
	
	#video_footer{
	display: flex;
	flex-direction: row;
	height: 20vh;
	padding-top: 10px;
	}
	#description{
	border-style: solid;
	width:40vw;
	margin-left: 10px;
	border-radius: 10px 10px 0px 0px;
	border-color: #d0dfe7ff;
	border-width: 4px;
	}
	#tutorial{
	border-style: solid;
	width:22vw;
	margin-left: 8px;
	border-radius: 10px 10px 0px 0px;
	border-color: #d0dfe7ff;
	border-width: 4px;
	}
	#comments{
	margin-top: 20px;
	border-style: solid;
	height: 100%;
	border-radius:10px;
	background-color: #ffffff;
	border-color: #ffffff;
	margin-bottom: 10px;
	}
/*Main page elements*/
}
/*media 1*/
/*media 2*/
@media all and (max-width: 900px){
/*head elements*/
	#header{
	display: flex;
	
	height:9vh;
	margin-top: 1vh;
	}
	#logo{
		background-image: url("assets/vidi_logo.png");
		
		width: 10vh;
		height: 10vh;
		margin-left: 5vw;
		margin-top: 10px;
		z-index: 10;
		background-repeat: no-repeat;
		background-size: 100%;
	}
	#title{
		border-style: solid;
		height:5vh;
		width:40vh;
		margin-left: 3vh;
		margin-top: 5vh;	
		border-radius: 90px;
		background-color: #FFFFFF;
		border-color: #d0dfe7ff;
		z-index: 10;
		border-width: 4px;
	}
/*head elements*/
/*Main page elements*/
	#main_container{
	display: flex;
	flex-direction: column;
	}
	#content_container{
	display: flex;
	
	height:150vh;
	width: 90%;
	flex-direction: column;
	margin-left: auto;
	margin-right: auto;;
	}
	#reccommended{
	display: flex;
	border-style: solid;
	width:90%;
	margin-top: 2.7vh;
	border-color: #ffffff;
	border-radius: 10px;
	background-color: #ffffff;
	margin-left: auto;
	margin-right: auto;
	}
	#video_container{
		flex-direction: column;
		border-style: solid;
		border-radius: 10px;
		background-color: #FFFFFF;
		border-color: #d0dfe7ff;
	}
	#video{
	color: #ffffff;
	border-style: solid;
	margin-top: 20px;
	height:72vh;
	border-color: #d0dfe7ff;
	background-color: #000000;
	
	}
	#video_player{
		display: flex;
		height:60vh;
		justify-content: center;
		
	}
	#video_player video{
		display: flex;
		height:60vh;
		border-radius: 10px;
		
	}
	#video_bar{
		display: flex;
		margin-top: 10px;
		width:40vw;
		height: 25px;
		background-color: rgba(255,255,255,.9);
		
		margin-left: auto;
		margin-right:auto;
		justify-content: center;
	}
	
	#video_footer{
	display: flex;
	flex-direction: row;
	height: 20vh;
	padding-top: 10px;
	}
	#description{
	border-style: solid;
	width:58vw;
	margin-left: 10px;
	border-radius: 10px 10px 0px 0px;
	border-color: #d0dfe7ff;
	border-width: 4px;
	}
	#tutorial{
	border-style: solid;
	width:20vw;
	margin-left: 8px;
	border-radius: 10px 10px 0px 0px;
	border-color: #d0dfe7ff;
	border-width: 4px;
	}
	#comments{
	margin-top: 20px;
	border-style: solid;
	height: 100%;
	border-radius:10px;
	background-color: #ffffff;
	border-color: #ffffff;
	margin-bottom: 10px;
	}
/*Main page elements*/
}
/*media 2*/
/*media 3 "mobile phones" */
@media all and (max-width: 530px){
/*head elements*/
	#header{
	display: flex;
	
	height:9vh;
	margin-top: 1vh;
	}
	#logo{
		background-image: url("C:/Users/ASC Student/Documents/vidi/assets/vidi_logo.png");
		
		width: 10vh;
		height: 10vh;
		margin-left: 5vw;
		margin-top: 10px;
		z-index: 10;
		background-repeat: no-repeat;
		background-size: 100%;
	}
	#title{
		border-style: solid;
		height:5vh;
		width:25vh;
		margin-left: 3vh;
		margin-top: 5vh;	
		border-radius: 90px;
		background-color: #FFFFFF;
		border-color: #d0dfe7ff;
		z-index: 10;
		border-width: 4px;
	}
	
/*head elements*/
/*Main page elements*/
	#main_container{
	display: flex;
	flex-direction: column;
	}
	#content_container{
	display: flex;
	
	height:150vh;
	width: 90%;
	flex-direction: column;
	margin-left: auto;
	margin-right: auto;;
	}
	#reccommended{
	display: flex;
	border-style: solid;
	width:90%;
	margin-top: 2.7vh;
	border-color: #ffffff;
	border-radius: 10px;
	background-color: #ffffff;
	margin-left: auto;
	margin-right: auto;
	}
	#video_container{
		flex-direction: column;
		border-style: solid;
		border-radius: 10px;
		background-color: #FFFFFF;
		border-color: #d0dfe7ff;
	}
	#video{
	color: #ffffff;
	border-style: solid;
	margin-top: 20px;
	height:72vh;
	border-color: #d0dfe7ff;
	background-color: #000000;
	
	}
	#video_player{
		display: flex;
		height:60vh;
		justify-content: center;
		
	}
	#video_player video{
		display: flex;
		height:60vh;
		border-radius: 10px;
		
	}
	#video_bar{
		display: flex;
		margin-top: 10px;
		width:40vw;
		height: 25px;
		background-color: rgba(255,255,255,.9);
		
		margin-left: auto;
		margin-right:auto;
		justify-content: center;
	}
	
	#video_footer{
	display: flex;
	flex-direction: row;
	height: 20vh;
	padding-top: 10px;
	}
	#description{
	border-style: solid;
	width:51vw;
	margin-left: 10px;
	border-radius: 10px 10px 0px 0px;
	border-color: #d0dfe7ff;
	border-width: 4px;
	}
	#tutorial{
	border-style: solid;
	width:22vw;
	margin-left: 8px;
	border-radius: 10px 10px 0px 0px;
	border-color: #d0dfe7ff;
	border-width: 4px;
	}
	#comments{
	margin-top: 20px;
	border-style: solid;
	height: 100%;
	border-radius:10px;
	background-color: #ffffff;
	border-color: #ffffff;
	margin-bottom: 10px;
	}
/*Main page elements*/
}
/*media 3*/
		</style>
		<div id="header">
				<div id="logo">
					
				</div>
				<div id="title">
					<p>${row.TITLE}</p>
				</div>
		</div>
		<div id="main_container">
			<div id="content_container">
				<div id="video_container">
					
					<div id="video">
						<p>${row.TITLE}</p>
						<div id="video_player">
							<video src="${video_thumb.src}" controls></video>
						</div>
					</div>
					<div id="video_footer">
						<div id="description">
							<div id="creator">
								
								<p>creator</p>
							</div>
							
							<p>Description:</p>
							
							<p>${row.DESCRIPTION}</p>
						</div>
						<div id="tutorial">
							<p>tutorial</p>
						</div>
					</div>
				</div>
				<div id="comments">
					
					<p>comments</p>
				</div>
			</div>
			<div id="reccommended">
				<p>reccommended</p>
			</div>
		</div>
	</body>
</html>
`)

	}

}