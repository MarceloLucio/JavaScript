/*Escreva um programa para calcular a redução do tempo de vida de um fumante. 
Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou. 
Considere que um fumante perde 10 min de vida a cada cigarro. 
Calcule quantos dias de vida um fumante perderá e exiba o total em dias.  
*/
var dias = 6, anos = 40 * 360, vida = 11, tempo
console.log(`considerando que você perca 10 minutos de vida a cada cigarro fumado durante ${anos/360} anos`)
tempo = (dias * vida) * anos
tempo = tempo / 1440
console.log(`Você perdeu ${tempo} dias de sua vida ao ter fumado ${dias} cigarros por dia durante ${anos/360} anos `)