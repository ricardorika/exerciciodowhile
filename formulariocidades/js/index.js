var errors = [];
function send (event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var endereco = document.getElementById("endereco").value;
  var estado = document.getElementById("states").value;
  var cidade = document.getElementById("cities").value;
  var result = document.getElementById("result");
  
  if (name === "" || name.split(" ").length < 2) {
    errors.push("Preencha seu nome completo." + "<br/>");
  }if (email === "") {
    errors.push("Preencha seu e-mail." + "<br/>");    
  }if (endereco === "") {
    errors.push("Preencha seu endereço." + "<br/>");
  }

  if (errors.length > 0) {
    result.innerHTML = errors;
    result = 0;
    errors = [];
  }else {
    if (document.getElementById("male").checked === true) {
      result.innerHTML = ("Bem vindo ao site Sr. " + name + "<br/>" + "Seu endereço: " + endereco)
    }else if (document.getElementById("female").checked === true) {
      result.innerHTML = ("Bem vindo ao site Sra. " + name + "<br/>" + "Seu endereço: " + endereco)
    }
  }
}
function updateCities(event) {
  var CitiesSP = ["Ribeirão Preto", "São Paulo", "Sorocaba", "Varginha"];
  var CitiesRS = ["Erechim", "Barão de Cotegipe", "Porto Alegre", "Áurea", "Canoas"];
  var CitiesPR = ["Curitiba", "Pinhais", "São José dos Pinhais", "Toledo"];
  var CitiesSC = ["Blumenau", "Florianópolis", "Balneário Camburiu", "Itapema","Joinville"];

  var estado = document.getElementById("states").value;
  var cities = document.getElementById("cities");

  if (estado == "SP") {
    var result = "";
    for (var i = 0; i < CitiesSP.length; i++) {
    result+= "<option>" + CitiesSP[i] + "</option>";
    }
    cities.innerHTML = result;
    
  }else if (estado == "RS") {
    var result = "";
    for (var i = 0; i < CitiesRS.length; i++) {
    result+= "<option>" + CitiesRS[i] + "</option>";
    }
    cities.innerHTML = result;
    
  }else if (estado == "PR") {
    var result = "";
    for (var i = 0; i < CitiesPR.length; i++) {
    result+= "<option>" + CitiesPR[i] + "</option>";
  }
    cities.innerHTML = result;
  
  }else if (estado == "SC") {
    var result = "";
    for (var i = 0; i < CitiesSC.length; i++) {
    result+= "<option>" + CitiesSC[i] + "</option>";
  }
    cities.innerHTML = result;
  
  }

  }

