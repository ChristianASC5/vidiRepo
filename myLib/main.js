



function hex2a(hexx) {
  var hex = hexx.toString('hex'); //force conversion
  var str = '';
  for (var i = 0;
    (i < hex.length && hex.substr(i, 2) !== '00'); i += 2) {
    str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  }

  return str;
}

let password = ""
while(password.length < 5){
  getRandomChar()
}
console.log(password)


function getRandomChar(){
  let buf = crypto.randomBytes(1)
  console.log(`${buf.length} bytes of random data: ${buf.toString('hex')}`);

  let hex = buf.toString("hex");
  console.log(hex);

  let dec = parseInt("0x"+hex, 16);
  console.log(dec);
  
  let char;

  if (dec >= 33 && dec <= 126) {
    char = hex2a(buf.toString('hex'));
    console.log("Adding: " + char);
    password += char
  }
}
