
function Carregar() {
    var img = document.getElementById('imagem')
    var msg = document.getElementById('msg')
    var data = new Date()
    /*var hora = data.getHours()*/
    var hora = 20
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        document.body.style.background = '#e2cd9f'
        img.src = 'manha.jpg'
    } else if (hora >= 12 && hora <= 18) {
        document.body.style.background = '#b9846f'
        img.src = 'tarde.jpg'
    } else { //Também posso usar imagens direto da internet
        document.body.style.background = '#33445e'
        img.src = 'https://img.freepik.com/fotos-gratis/lua-cheia-com-nuvens-escuras-a-noite-conceito-de-halloween_9083-8075.jpg'
    }
}