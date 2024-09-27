function verificar() {
    var data = new Date ()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert(' [ERROR] Verifique os dados inseridos e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex [0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'homembb.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'homemjv.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'homemad.png')
            } else {
                //idoso
                img.setAttribute('src', 'homemid.png')
            }
        } else if (fsex [1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'mulherbb.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'mulherjv.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'mulherad.png')
            } else {
                //idoso
                img.setAttribute('src', 'mulherid.png')
            }
        } 
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}