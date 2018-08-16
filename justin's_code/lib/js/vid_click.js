var main = document.getElementById("main_container")
var database = firebase.database().ref()
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

vid_name.getDownloadURL().then(function(url) {
  video_thumb.src = url
})

var video_title = document.createElement("p")
video_title.innerHTML = title

video_icon.appendChild(thumb_holder)
video_icon.appendChild(video_title)


main.appendChild(video_icon)

// opens new video player 

function open(){

opened = window.open("");
opened.document.write(`

	<!DOCTYPE html>

<html>

	<head>

		<title>vidi video player</title>
		
		<script src="C:/Users/ASC Student/Documents/vidi/lib/js/vs.js" defer></script>

		<link rel="stylesheet" type="text/css" href="/Users/ASC Student/Documents/vidi/lib/css/vid.css">

		<link href="https://fonts.googleapis.com/css?family=Comfortaa" rel="stylesheet">
	
	</head>

	<body>

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

						<div id="video_bar">
	
							<button id="play">Play</button>

							<button id="pause">Pause</button>

							<button id="fullscreen">Fullscreen</button>

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