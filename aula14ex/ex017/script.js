function tabuada () {

    let num = document.getElementById('txtn');
    let tab = document.getElementById('seltab');

    if (num.value.length == 0 ){
        window.alert('Digite um numero')
    } else {
        let n = Number(num.value) // Convertendo para número
        let c = 1
        tab.innerHTML = '' // Tabela iniciando sem valor 

        while (c <= 10) {
            let item = document.createElement('option') // Criando elemento
            item.text = `${n} x ${c} = ${n*c}` // Fazendo a multiplicação
            item.value = `tab${c}` // Para outras linguagens
            tab.appendChild(item) // Criando um elemento filho
            c++ // Recebendo +1
        }
    }
}