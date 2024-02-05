function contar(){
    let inicio = document.getElementsByName('id_inicio')
    let fim = document.getElementById('id_fim')
    let passo = document.getElementById('id_passo')
    let txtNumero = document.getElementById('id_txtNumero')

    if(inicio.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0){
        window.alert('[ERRO] Preencha corretamente os dados.')
    } else{

        let i = Number(inicio)
        let f = Number(fim)
        let p = Number(passo)

        for(var contador = i; contador <= f ; contador += p){
            txtNumero.innerHTML += `${contador} 👉`
        }

    }
}