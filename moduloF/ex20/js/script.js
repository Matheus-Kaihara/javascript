let number = document.querySelector('input#id_number')
let display = document.querySelector('select#id_display')
let txtResultado = document.querySelector('div#id_txtResultado')
let array = []

function isRange(n){
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
    if(isRange(num.value) && !inArray(num.value, array)){
        array.push(Number(number.value))
        let item = document.createElement('option')
        item.text = `Valor ${number.value} adicionado`
        display.appendChild(item)
    }else{
        alert('[ALERTA] Valor inválido ou já está na lista')
    }

    number.value = ''
    number.focus() 
}