
let valortxt = window.document.getElementById('num') // variável com o valor do input num
let lista = window.document.getElementById('seltab') // variável para o select, que vai receber os numeros do input num
let r = window.document.getElementById('res') // variável que vai receber os resultados da analise
let valores = [] // vetor para receber todos os números
function vNumero(n) { // validação dos numeros de 1 a 100
    if (Number(n) >= 1 && Number(n) <= 100) { // se a variável valortxt for maior ou igual a 1 e valortxt for menor ou igual a 100 
        return true // verdadeiro
    } else {
        return false // falso
    }
}
function vLista(n, l) { // validação de numeros dentro da lista
    if (l.indexOf(Number(n)) != -1) { /* se o valor da variável valortxt não estiver no vetor valores ele ira gerar
                                        -1(significa que ele pesquisou dentro do vetor e não achou o valor)*/
        return true // veradadeiro se o valor encontrado for diferente de -1
    } else {
        return false // falso se o valor gerado for -1
    } /* nesta função de validação vai ser válido o retorno falso, pois se não existir o número dentro da lista, 
        ele pode ser adicionado, caso contrário ele ja está na lista e não pode ser adicionado novamente*/
}
function Adicionar() {
    if (vNumero(valortxt.value) && !vLista(valortxt.value, valores)) { // so será executado se vNumero retornar verdadeiro e vLista retornar falso
        /*A função vNumber() recebe o valor de valortxt; se for verdadeiro
        e a função vLista() recebe valor de valortxt e o vetor, se o resultado der falso, será executada o código abaixo.*/
        valores.push(Number(valortxt.value)) // Adiciona ao vetor o valor da vareavel valortxt
        let item = document.createElement('option') // cria um elemento HTML
        item.text = `o valor ${valortxt.value} foi adicionado` // texto HTML a ser adicionado
        lista.appendChild(item) //Variável lista que irá recebe o elemento em HTML
        r.innerHTML = `` // reseta o texto todas a vezes que chama a função, para não repetir o processo em tela
    } else { //caso a função vNumero() for falsa ou a função vLista() for verdadeira, ira mostrar na tela um alerta de erro
        window.alert('[ERRO!!] Número invalido ou ja incluso na lista')
    }
    valortxt.value = ''
    valortxt.focus()
}
function Analisar() { //Analise dos números adicionado no vetor valores
    /*Ao chamar está função, ela vai identificar quantos números foramm cadastrados, 
    o maior número, o menor número, a soma de todos os números adicionados e a média entre eles*/
    var maior = valores[0] // variáel que irá receber o maior número
    var menor = valores[0] // variável que irá receber o menor número, recebe o primeiro valor do vetor valores
    var soma = 0
    var media
    for (let pos in valores) { // para cada posição dentro de vetores, pos++
        if (valores[pos] > maior) { //Se o valor do vetor for maior que a variável maior
            maior = valores[pos] // maior recebe vetor
        }
        if (valores[pos] < menor) { // se as outras posições do vetor valores for menor que menor
            menor = valores[pos] // menor recebe vetor valores
        }
        soma += valores[pos]
    }
    media = soma / valores.length
    //o codigo abaixo será escrito em HTML na tela, com os resultados da função Analisar()
    r.innerHTML += `<p class="pjs">Ao todo, temos ${valores.length} números cadastrados.</p>`
    r.innerHTML += `<p class="pjs">O maior valor informado ${maior}.</p>`
    r.innerHTML += `<p class="pjs">O menor valor informado foi ${menor}.</p>`
    r.innerHTML += `<p class="pjs">Somando todos os valores, temos ${soma}.</p>`
    r.innerHTML += `<p class="pjs">A média dos valores digitados é ${media}</p>`
}