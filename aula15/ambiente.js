let num = [5, 8, 9, 2, 3]

num.push(1) // A ordem do push influência, por exemplo, se o código for colocado após o num.sort, o valor incluído no push será inserido no final, mesmo alterando para a ordem crescente anteriormente.
num.sort()
console.log(num)
console.log(`O vetor atualmente tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(12)
if (pos == -1){
    console.log('O valor não está inserido no Vetor.')
} else { 
    console.log(`O valor 8 está na posição ${pos}`)
}