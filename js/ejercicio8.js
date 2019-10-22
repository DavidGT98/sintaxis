function hora() {
  var d = new Date();
  var hr = d.getHours();
  var min = d.getMinutes();
  var sec = d.getSeconds();

  min = comprobar(min);
  sec = comprobar(sec);
  document.getElementById("reloj").innerHTML = hr + " : " + min + " : " + sec;
}

function comprobar(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

setInterval(hora, 1000);


