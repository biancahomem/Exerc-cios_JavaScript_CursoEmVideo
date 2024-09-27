function tabuada() {
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    if (num.value.length === 0) {
        window.alert('Por favor, insira um número válido');
    } else {
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ""
        while(c <= 10) {
            var item = document.createElement('option')
            item.txt = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
    
}