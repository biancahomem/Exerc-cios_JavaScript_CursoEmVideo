let valores = [8, 1, 7, 4, 2, 9]

for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

//forma otimizada para vetores

for(let pos in num) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} //se lê: para cada posição em num(na variável composta) eu vou mostrar o num[pos]s