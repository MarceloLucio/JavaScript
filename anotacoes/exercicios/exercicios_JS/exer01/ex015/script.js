
var imagem = document.getElementById('foto')
imagem.style.display = 'none'


function Verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = document.getElementById('nasc')
    var res = document.getElementById('res')
    var imagem = document.getElementById('foto')
    imagem.style.display = 'block'
    if (nasc.value.length == 0 || nasc.value > ano) {
        window.alert('[ERRO!]Verifique os dados e tente novamente')
    } else {
        var sexo = document.getElementsByName('radsex')
        var idade = ano - Number(nasc.value)
        var genero = ''
        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                imagem.src = 'https://images.pexels.com/photos/4473405/pexels-photo-4473405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            } else if (idade < 21) {
                //jovem
                imagem.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS-qdilTocm5sUmlIGdfcuq-tjWXbyrvmC7g&usqp=CAU'
            } else if (idade < 40) {
                //adulto
                imagem.src = 'https://media.istockphoto.com/id/503175223/pt/foto/homem-a-segurar-luz-cerveja-tankard-com-a-m%C3%A3o-esquerda.jpg?s=612x612&w=is&k=20&c=8heemcB-vaJmsXNIrzMUZ6ncG9k5eILxSHANZ93ZxGE='
            } else {
                //idoso
                imagem.src = 'https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=400'
            }

        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                imagem.src = 'https://images.pexels.com/photos/7139732/pexels-photo-7139732.jpeg?auto=compress&cs=tinysrgb&w=600'
            } else if (idade < 21) {
                imagem.src = 'https://images.pexels.com/photos/17236255/pexels-photo-17236255/free-photo-of-floresta-selva-mata-retrato.jpeg?auto=compress&cs=tinysrgb&w=600'
            } else if (idade < 40) {
                imagem.src = 'https://images.pexels.com/photos/17244149/pexels-photo-17244149/free-photo-of-afro-praia-litoral-lindo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            } else[
                imagem.src = 'https://images.pexels.com/photos/5704405/pexels-photo-5704405.jpeg?auto=compress&cs=tinysrgb&w=600'
            ]
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Identificamos ${genero} de ${idade} anos.`
        res.appendChild(imagem)


    }
}