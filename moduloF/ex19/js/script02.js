// ----- FATORIAL 
//  
// Fatorial se resume em 
// f(x!) = n * n -1


// Portanto, essa função abaixo é um exemplo de Fatorial 
// Utilizando uma função Recursiva (função que faz auto chamada)

// ----- RECURSIVIDADE
function fatorial(n){
    if(n == 1 ){
        return 1
    } else{
        return n * fatorial(n - 1)
    }
}