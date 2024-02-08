let number = document.querySelector('input#id_number')
let display = document.querySelector('select#id_display')
let txtResultado = document.querySelector('div#id_txtResultado')
let array = []

function inRange(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true;
    } else{

        return false;
    }
}

function inArray(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true;
    } else{
        return false;
    }
}

function addNumber(){
    if(inRange(number.value) && !inArray(number.value, array)){
        array.push(Number(number.value))
        let item = document.createElement('option')
        item.text = `Valor ${number.value} adicionado`
        display.appendChild(item)
        txtResultado.innerHTML = ''
    }else{
        alert('[ALERTA] Valor inválido ou já está na lista')
    }

    number.value = ''
    number.focus() 
}

function endNumber(){
    if(array.length == 0){
        window.alert('[ALERTA] Insira valores antes de finalizar')
    } else{
        let elementos = array.length
        let maior = array[0]
        let menor = array[0]
        let soma = 0

        for(let i in array){
            soma += array[i]
            if(array[i] > maior){
                maior = array[i]
            }
            else if(array[i] < menor){
                menor = array[i]
            }
        }


        txtResultado.innerHTML = ''
        txtResultado.innerHTML += `<p>Ao todo, temos ${elementos} números cadastrados.</p>`
        txtResultado.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        txtResultado.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        txtResultado.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        txtResultado.innerHTML += `<p>A média dos valores digitados é ${(soma/elementos).toFixed(2)}</p>`
    }
}