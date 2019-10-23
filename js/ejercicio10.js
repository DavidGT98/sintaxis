function calculateDate(op, numDias) {
  var resultado = document.getElementById("resultado");
  var today = new Date();
  var dayms = 1000 * 60 * 60 * 24;

  if (op == 1) {
    let nextDate = numDias * dayms;
    let suma = today.getTime() + nextDate;
    let finalDate = new Date(suma);
    resultado.innerHTML = new Date(finalDate).toLocaleString();
  }
  else {
    let prevDate = numDias * dayms;
    let resta = today.getTime() - prevDate;
    let finalDate = new Date(resta);
    resultado.innerHTML = new Date(finalDate).toLocaleString();
  }
}


