//Faça um algoritmo que leia um determinado ano e mostre se ele é ou não BISSEXTO.

var ano = 2022

if(ano % 4 == 0){ //Qualquer ano que seja uniformemente divisível por 4 é um ano bissexto
    console.log(`o ano ${ano} é bissexto`)
}else{
    console.log(`o ano ${ano}. Não é um ano bissexto`)
}