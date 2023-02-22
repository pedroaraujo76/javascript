let amigo = {
nome: 'José', 
sexo: 'masculino', 
peso: '85.4',
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg e é do sexo ${amigo.sexo}`)