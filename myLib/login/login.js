let button= document.getElementById("submit");

button.addEventListener("click", Login);


async function sha512(str) {
    const buf = await window.crypto.subtle.digest("SHA-512", new TextEncoder("utf-8").encode(str));
    return Array.prototype.map.call(new Uint8Array(buf), x => (('00' + x.toString(16)).slice(-2))).join('');
}

function Login(event) {
    event.preventDefault();
    let user = document.getElementById("uname").value;
    let password = document.getElementById("psw").value;
    
    sha512(password).then(function (result) {
        hash = result;
        
        let data = firebase.database().ref("profiles");
        data.once("value", function (result) {
            let checksout = true
            for (i in result.val()) {
                if (result.val()[i].id == user) {
                    console.log("profile found")
                    if (result.val()[i].password == hash) {
                        checksout = false
                        let account = result.val()[i]
                        account = JSON.stringify(account);
                        account = btoa(account);
                        localStorage.setItem('_account', account);
                        document.location.href = "justin's_code/html/profile.html";
                    }
                }
            }
            if(checksout){
                console.log("The username or password you entered is incorrect")
                alert("The username or password you entered is incorrect.")
            }
        })
    });


}

function home(event){
    event.preventDefault()
    document.location.href = "justin's_code/html/homepage.html"

}