function rellenarDias() {
  var opciones = "";
  for (let i = 1; i <= 31; i++) {
    opciones += '<option value=' + i + '>' + i + '</option>';

  }
  document.getElementById("dia").innerHTML = opciones;

}

function rellenarAnios() {
  var opciones = "";
  for (let i = 1970; i <= 2020; i++) {
    opciones += '<option value=' + i + '>' + i + '</option>';

  }
  document.getElementById("anio").innerHTML = opciones;
}

function mostrarFecha() {
  var dia = document.getElementById("dia").value;

  var mes = document.getElementById("mes").value;

  var anio = document.getElementById("anio").value;

  var d = new Date(anio, mes, dia);

  document.getElementById("fecha").innerHTML = d;


}



