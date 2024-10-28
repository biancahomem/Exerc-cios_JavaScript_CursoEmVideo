let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []
let fmed = document.getElementById('fmed')

function Fornumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(Fornumero(num.value)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Nota ${num.value} adicionada`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('O valor inserido é inválido') 
    }
    num.value = ''
    num.focus()
}

function inserirMedia() {
    if (!fmed.value) {
        window.alert("Por favor, insira um valor de média.")
    } else {
        window.alert("Média necessária registrada com sucesso!")
    }
}

function vmedia(soma, tot) {
    let media = soma / tot;
    let mediaRequerida = Number(fmed.value);

    if (isNaN(mediaRequerida)) {
        window.alert('Por favor, insira uma média válida para aprovação.');
        return;
    }

    if (media >= mediaRequerida) {
        res.innerHTML += `<p>Parabéns! A sua média foi de ${media} e você foi aprovado :D</p>`
    } else {
        res.innerHTML += `<p>Que pena, sua média foi de ${media} e você foi reprovado :(</p>`
    }
}

function finalizar() {
    if (valores.length == 0 || vmedia.length == 0) {
        window.alert('Adicione as notas e a média antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores [0]
        let soma = 0
        
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos] 
            if (valores[pos] < menor)
                menor = valores[pos]
        }

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, você possui ${tot} notas cadastradas na listagem;</p>`
        res.innerHTML += `<p>A maior nota informada foi ${maior}</p>`
        res.innerHTML += `<p>A menor nota informmada foi ${menor}</p>`
        res.innerHTML += `<p>Somando todas as notas, temos ${soma}</p>`
        
        vmedia(soma, tot)
    }
}