function contar(){
    let inicio = document.querySelector('input#id_inicio')
    let fim = document.querySelector('input#id_fim')
    let passo = document.querySelector('input#id_passo')
    let txtNumero = document.querySelector('div#id_txtNumero')

    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    if(inicio.value.length == 0 || fim.value.legth == 0 || passo.value.length == 0){
        window.alert('[ERRO] Insira os dados corretamente!')
    } else{

        let paragraph = document.querySelector('p#id_txtContando')

        // MÉTODO PARA LIMPAR OS CAMPOS
        txtNumero.innerHTML = ''
        paragraph.innerHTML = 'Contando:'

        // ORDEM CRESCENTE
        if(i < f){
            paragraph.innerHTML += ' em Ordem Crescente'
            for(let contador = i; contador <= f; contador += p){
                txtNumero.innerHTML += `${contador} 👉`
            }
        } 
        // ORDEM DECRESCENTE
        else{
            paragraph.innerHTML += ' em Ordem Decrescente'
            for(let contador = i; contador >= f; contador -= p){
                txtNumero.innerHTML += `${contador} 👉`
            }
        }
        
        txtNumero.innerHTML += '🔰'
    }
}
