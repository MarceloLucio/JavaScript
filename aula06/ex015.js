var num = [8, 7, 8, 6, 5, 2, 7]
num.sort()
num.push(1, 3)
for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`) // Para cada posição dentro da variavel composta
}
console.log(`A variavel num tem ${num.length} posições`)
console.log(num.indexOf(8))
