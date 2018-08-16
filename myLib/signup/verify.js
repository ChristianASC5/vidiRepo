let repeat = document.getElementById("psw-repeat");
let button = document.getElementsByClassName("signupbtn")[0];
let cancel = document.getElementsByClassName("cancelbtn")[0];


button.addEventListener("click", save);
cancel.addEventListener("click", home);

async function sha512(str) {
    const buf = await window.crypto.subtle.digest("SHA-512", new TextEncoder("utf-8").encode(str));
    return Array.prototype.map.call(new Uint8Array(buf), x => (('00' + x.toString(16)).slice(-2))).join('');
}



function save(event) {
    event.preventDefault()
    let user = document.getElementById("user").value;
    let email = document.getElementById("email").value;
    let psw = document.getElementById("psw").value;
    if (repeat.value == psw){
        sha512(psw).then(function (result) {
            SHApsw = result;
            let profile = {
                id: user,
                mail: email,
                password: SHApsw
            }
            let data = firebase.database().ref("profiles/" + profile.id)
            data.once("value", function (result) {
                if (result.val() == undefined) {
                    data.update(profile);
                    window.location.href = "../login.html";
                } else {
                    console.log("User already exists")
                    alert("Username already exists")
                }
            })
        });
    }else{
        alert("Password and repeat password are not the same")
    }

}

function home(event){
    event.preventDefault()
    console.log("confirm")
    document.location.href = "justin's_code/html/homepage.html"

}




