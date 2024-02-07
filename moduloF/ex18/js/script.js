let num = [5,1,6,2]

// console.log(`Nosso vetor é [${num}]`)

// INSERE UM ELEMENTO NO VETOR
// num.push(9) 

// console.log(`Agora nosso vetor é [${num}]`)

// MOSTRA O NÚMERO DE ELEMENTOS NO VETOR
// console.log(`O vetor possui ${num.length} elementos`)

// ORDENA CRESCENTEMENTE O VETOR
// console.log(`Em ordem crescente o vetor, ele fica [${num.sort()}]`)

// UTILIZANDO FOR PADRÃO
for(let posicao = 0; posicao < num.length; posicao++){
    console.log(num[posicao])
}

// UTILIZANDO FOR PARA ARRAYS
// 
// É mais simples, pois ele irá repetir em todos os elementos do vetor
for(let posicao in num){
    console.log(num[posicao])
}


// COMANDO PARA DESCOBRIR O ÍNDICE DO ELEMENTO
// 
// Se não tiver o elemento no vetor, o resultado será -1

console.log(`O elemento 5 está no índice ${num.indexOf(5)}`)