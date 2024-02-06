function calcular(){


    let tabuada = window.document.querySelector('input#id_tabuada')
    let txtTabuada = window.document.querySelector('div#id_txtTabuada')

    txtTabuada.innerHTML = ''

    let t = Number(tabuada.value)

    for(let contador = 1; contador <= 10; contador++){

        let calculo = contador * t

        txtTabuada.innerHTML += `${contador} x ${t} = ${calculo} <br>`
    }
}

