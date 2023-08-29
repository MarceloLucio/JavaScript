
function Contar() {
    var ini = document.getElementById('inc')
    var fi = document.getElementById('fim')
    var pass = document.getElementById('passo')
    var r = document.getElementById('res')
    if (ini.value.length == 0 || fi.value.length == 0) {
        window.alert('[ERRO!]Verifique os dados e tente novamente')
    } else {

        var i = Number(ini.value)
        var f = Number(fi.value)
        var p = Number(pass.value)
        r.innerHTML = 'Contando: '
        if (p == 0) {
            p = 1
            window.alert('Passo = 0, iremos considerar como 1')
        }
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                r.innerHTML += `[${c}] `
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                r.innerHTML += `[${c}]`
            }
        }
    }
} 