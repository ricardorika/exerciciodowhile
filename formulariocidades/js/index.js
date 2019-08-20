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
    }else {
      result.innerHTML = ("Preencha seu sexo.")     
    }
  }
}
function updateCities(event) {
  var CitiesSP = ["Ribeirão Preto", "São Paulo", "Sorocaba", "Varginha"];
  var CitiesSP.sort = ["Ribeirão Preto", "São Paulo", "Sorocaba", "Varginha"];
  var CitiesRS = ["Erechim", "Barão de Cotegipe", "Porto Alegre", "Áurea", "Canoas"];
  var CitiesRS.sort = ["Erechim", "Barão de Cotegipe", "Porto Alegre", "Áurea", "Canoas"];
  var CitiesPR = ["Curitiba", "Pinhais", "São José dos Pinhais", "Toledo"];
  var CitiesPR.sort = ["Curitiba", "Pinhais", "São José dos Pinhais", "Toledo"];
  var CitiesSC = ["Blumenau", "Florianópolis", "Balneário Camburiu", "Itapema","Joinville"];
  var CitiesSC.sort = ["Blumenau", "Florianópolis", "Balneário Camburiu", "Itapema","Joinville"];
  var estado = document.getElementById("states").value;

  if (estado == "RS") {
    for (var i = 0; i < CitiesRS.length; i++);
  }else if (estado == "SP") {
    
    for (var i = 0; i < CitiesSP.length; i++);
  }else if (estado == "SC") {
    for (var i = 0; i < CitiesSC.length; i++);
  }else if (estado == "PR") {
    for (var i = 0; i < CitiesPR.length; i++);
  }

  }

