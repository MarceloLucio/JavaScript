/*
Escreva um programa que pergunte a velocidade de um carro.
Caso ultrapasse 80Km / h, exiba uma mensagem dizendo que o usuário foi multado.
Nesse caso, exiba o valor da multa, cobrando R$5 por cada Km acima da velocidade permitida.
*/ 
var  vel = 90, permitida = 80
if(vel > permitida){
    var multa = 5 * (vel - permitida)
    console.log(`Velocidade permitida ${permitida}Km/h`)
    console.log(`[${vel}]Km/h`)
    console.log (`Multado! Você Foi multado ao ultrapassar a velocidade permitida.`)
    console.log(`Valor da multa ---> R$${multa}`)
    console.log(`Dirija com atenção e use o cinto de segurança`)
}else{
    console.log(`Velocidade permitida ${permitida}Km/h`)
    console.log(`[${vel}]Km/h`)
    console.log(`Dirija com atenção e use o cinto de segurança`)
}