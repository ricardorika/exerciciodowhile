var saldo = 50000;
var deposito = 0;
var saque = 0;



do {
	var option = (prompt("Digite (a) para consultar saldo, (b) saque (c) depósito e (d) sair: " ));

	if (option === 'a') {
		alert("Seu saldo é: "+saldo);
	} else if (option === 'b' || option === 'c') {
		var value = parseFloat(prompt("Digite o valor: "));

		if (option === 'b') {
			saldo = saldo - value;
			alert("Seu saldo agora é: "+saldo)
		} else {
			saldo = saldo + value;
			alert("Seu saldo agora é: "+saldo)
		}
	} 

}
while (option !== 'd'); 











// if (a = saldo);
// 	document.write("Seu saldo é: "+saldo);
// }
// while (option = b) {
// 	var value = parseInt(prompt("Digite aqui o valor desejado: ")); 
// 	if (b = saldo - saque);
// 	document.write("Agora seu saldo é: "+saldo)
// }

// while (option = c) {
// 	var value = parseInt(prompt("Digite aqui o valor desejado: "));
// 	c = deposito + saldo
// }
// while (option = d) {
// 	document.write("Obrigado por utilizar o nosso serviço.")
// }
