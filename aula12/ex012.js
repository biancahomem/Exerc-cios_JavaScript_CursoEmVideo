var agora = new Date ()
var hora = agora.getHours()
if (hora <=1) {
    console.log(`Agora é exatamente ${hora} hora.`)
} else {
    console.log(`Agora são exatamente ${hora} horas.`)
}
if (hora <=12 ) {
    console.log('Bom dia!')
} else{
    if (hora <= 18) {
        console.log('Boa tarde!')
    } else {
        console.log ('Boa noite!')
    }
}