
var account = localStorage.getItem('_account');
if(account == null){
  document.location.href = "../../login.html"
}
account = atob(account);
account = JSON.parse(account);
localStorage.removeItem('_account')

document.getElementById("username").innerHTML = account.id
var make_video_btn = document.getElementById("make_vid")

var database = firebase.database().ref()


function updateDB(event){

  

   event.preventDefault();
  
   var username = document.getElementById("username").innerHTML

  

    //Update database here

   var profile_data = {

  USERNAME: account.id,


  }

  storageRef.child(upload_data.VID_REF).put(upload_data.VID_DATA).then(function(snapshot) {

  console.log('Uploaded a blob or file!');

  });

    database.push(upload_data)
    console.log("video uploaded")
    alert("your video is now uploaded")

  
}

function homePage(){

window.location.href = "file:///C:/Users/ASC%20Student/Documents/vidi/html/homepage.html"

}