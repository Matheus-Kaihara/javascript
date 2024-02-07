// CASO NÃO HAJA A CHAMADA DA FUNÇÃO COM OS 2 PARÂMETROS NECESSÁRIOS
// ESSA DECLARAÇÃO DE PARÂMETRO FAZ COM QUE CONSIDERE O VALOR ENTREGUE
// NO CASO n1 = 0 e n2 = 0
function soma(n1 = 0, n2 = 0){
    return n1 + n2
}

console.log(soma(2, 5))