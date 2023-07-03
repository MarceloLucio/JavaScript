/*
 Crie um algoritmo que leia o nome e as duas notas de um aluno, calcule a sua média e mostre na tela.
 No final, analise a média e mostre se o aluno teve ou não um bom aproveitamento (se ficou acima da média 7.0).
*/

var nota, nota2, media
nota = 7
nota2 = 2
media = (nota + nota2) / 2
if(media >= 7){
    console.log(`Média ${media}, Parabéns você passou`)
}else if(media >= 5){
    console.log(`Média ${media}, Você está abaixo da média, Recuperação`)
}else{
    console.log(`Média ${media}, Você esta abaixo da média, Reprovado`)
}