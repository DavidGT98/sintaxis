function myFunction() {
  var d = new Date(2014, 0, 1);
  var n;
  var fechas = "";
  do {
    n = d.getDay();
    if (n == 0) {
      fechas += (d + "<br>");
    }
    d.setFullYear(d.getFullYear() + 1);
  } while (d.getFullYear() <= 2050);

  document.getElementById("demo").innerHTML = fechas;

}
