function send (event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var idade = document.getElementById("idade").value;
  var phone = document.getElementById("phone").value;
  var address = document.getElementById("address").value;

  var result = document.getElementById("result");

  if (name.split(" ").length >= 2) {

    result.innerHTML = name + "<br/>" + email + "<br/>" + idade + "<br/>" + phone + "<br/>" + address;
  } else {
    result.innerHTML = "<div class='alert alert-danger'>Voce nao digitou o seu nome completo</div>";
  }
 if (idade < 18) {
 	result.innerHTML = "<div class='alert alert-danger'>Você é menor de idade.</div>"
 } else {
 	alert ('CADASTRO CONCLUIDO!');
 }
}