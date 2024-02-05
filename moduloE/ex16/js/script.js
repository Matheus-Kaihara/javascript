function contar(){

    let inicio = window.document.getElementsByName('id_inicio')
    let fim = window.document.getElementById('id_fim')
    let passo = window.document.getElementById('id_passo')
    let txtNumero = window.document.getElementById('id_txtNumero')

    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    for(let contador = i; contador <= f; contador += p){
        txtNumero.innerHTMLr += `${contador} 👉`
        
        console.log('entrou')   
    }
}