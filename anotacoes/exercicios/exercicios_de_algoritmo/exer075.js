/* Crie um programa que preencha automaticamente (usando lógica, não apenas atribuindo diretamente) 
um vetor numérico com 15 posições com os primeiros elementos da sequência de Fibonacci */
var n = [1, 1]; t1 = 1; t2 = 1
for(let i = 2; i <= 15; i++){
    n[i]= t1 + t2
    t1 = t2
    t2 = n[i]
}
for(let pos in n){
    console.log(`A posição ${pos} recebe o valor ${n[pos]}`)
}