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

function vmedia() {

}

function finalizar() {
    if (valores.length == 0 || vmedia.legth == 0) {
        window.alert('Adicione as notas e a média antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, você possui ${tot} notas cadastradas na listagem;</p>`

    }
}