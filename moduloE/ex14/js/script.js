var contador = 1

console.log('Tabuada do 10')

// --- WHILE ---
// 1. Teste de condição 
// 2. Execução do bloco

while(contador <= 10){
    tabuada = Number(contador) * 10

    console.log(`${contador} x 10 = ${tabuada}`)
    contador++
}  
// CONTADOR = 11
// DEVIDO AO (DO WHILE), HÁ O 110 COMO RESULTADO

// -- DO WHILE ---
//  1. Execução do bloco
//  2. Teste de condição


do{
    tabuada = Number(contador) * 10

    console.log(`${contador} x 10 = ${tabuada}`)
    contador++
}while(contador <= 10)


