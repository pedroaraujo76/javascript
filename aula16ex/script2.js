// Criar variáveis e um vetor
// Function para verificar se o número é maior que 0 e menor que 101
// Function para verificar se o número está na lista
// Function para adicionar o número

let n = document.getElementById('fnum');
let lista = document.getElementById('flista');
let res = document.getElementById('res');
let valores = [];

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) { // Verificando se o número é maior ou igual a 1 e menor ou igual a 100
        return true
    }
    }