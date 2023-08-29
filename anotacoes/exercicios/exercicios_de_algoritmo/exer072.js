var num = []
for(let i = 0; i <= 9; i++ ){
    num.push(5)
    num[i + 1] = num[i] + 5
    console.log(`Aposição ${i} recebe o valor ${num[i]}`)
}