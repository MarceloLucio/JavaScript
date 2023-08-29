var n = []
var i = 0
do{
    n[i]= 5
    i++
    n[i]= 3
    i++
}while(i <= 9)
for( let pos in n){
    console.log(`A posição ${pos} recebeu o valor ${n[pos]}`)
}