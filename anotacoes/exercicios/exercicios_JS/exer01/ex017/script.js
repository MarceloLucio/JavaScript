function Calcular() {
    var n = document.getElementById('num')
    var r = document.getElementById('res')
    if (n.value.length == 0) {
        window.alert('[ERRO!!]Digite um número')
    } else {
        var n1 = Number(n.value)
        r.innerHTML = ` `
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n1} x ${c} = ${n1 * c}`
            item.value = `tab${c}`
            r.appendChild(item) //appendchild, adicionar um elemento filho que no caso foi item
        }
    }

}