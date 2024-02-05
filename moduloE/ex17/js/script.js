var buttonCal = window.document.querySelector('input#id_button')
buttonCal.addEventListener('click', calcular())

function calcular(){
    let tabuada = window.document.querySelectorw('input#id_tabuada')
    let textoTabuada = window.document.querySelector('div#txtTabuada')

    let t = Number(tabuada.value)

    for(let contador = 1; contador <= 10; contador++){

        let calculo = contador * t

        textoTabuada.innerHTML += `${contador} x ${t} = ${calculo}\n`
    }
}