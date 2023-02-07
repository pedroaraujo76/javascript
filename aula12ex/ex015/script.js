function clicar () { //iniciando função
    var data = new Date(); // criando uma data
    var ano = data.getFullYear(); // Pegando os 4 digitos do ano
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');

    if (fano.value == 0 || fano.value > ano) { // verificando se o ano digitado está correto, sempre colocar o VALUE.
        alert('erro')
    } else {
        var fsex = document.getElementsByName('radsex') ;
        var idade = ano - Number(fano.value); // calculando idade
        var genero = '' // iniciando variavel genero sem nenhum valor
        var img = document.createElement('img'); // criando uma imagem para o site com o javascript
        img.setAttribute('id', 'foto'); // criando uma id para o img com o javascript

        if (fsex[0].checked) { // verificando se o fsex está no masculino[0] e se está marcado (checked)
            genero = 'Homem' // se sim, homem
            if (idade >= 0 && idade < 10) { // Se idade for maior ou igual a 0 e menor que 10
                img.setAttribute('src', 'foto-bebe-m.png') // Atribuindo uma foto caso seja masculino e entre idade 0 e 10
            } else if (idade < 21) { // idade for menor que 21 e maior que 10(colocado anteriormente)
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50) { 
                img.setAttribute('src', 'foto-adulto-m.png')
            } else { // Se idade for maior que 50
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher' 
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        } 
        res.style.textAlign = 'center' // mundando o estilo do res
        res.innerHTML = `Detectamos ${genero} com idade ${idade} anos.`
        res.appendChild(img) // appendChild (adicionando um elemento), no caso, imagem
    }
}