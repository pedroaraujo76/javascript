var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são exatamente ${hora} horas.`);

if (hora >= 00 && hora <= 6) {
    console.log('Estamos no periodo da madrugada');
} else if (hora <= 12) {
    console.log('Estamos no periodo da manhã'); 
} else if (hora <= 18) {
    console.log('Estamos no periodo da tarde');
}  else {
    console.log('Estamos no periodo da noite');
}