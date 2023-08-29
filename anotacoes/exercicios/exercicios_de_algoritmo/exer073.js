var n = []
for(let i = 0; i <= 9; i++){
    n.push(9)
    n[i + 1] = n[i] - 1
    console.log(`A posição ${i} recebeu o valor ${n[i]}`)
}