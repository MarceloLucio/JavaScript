/*
Faça um programa que leia o ano de nascimento de uma pessoa, calcule a idade 
dela e depois mostre se ela pode ou não votar.
*/
var idade = 15
if(idade >= 18){
    console.log(`Você é maior de idade`)
    console.log(`Voto obrigatório`)
}else if(idade >= 16 & idade < 18){
    console.log(`Você é menor de idade`)
    console.log(`Você tem ${idade} anos, voto opcional`)
}else{
    console.log(`Você tem ${idade} anos, menor de idade e não tem direito a voto`)
}