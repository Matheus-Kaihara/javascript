var agora = new Date()
var hora = agora.getHours()

// CONDIÇÃO ANINHADA
// 
// Bom para testar intervalos

if(hora >= 0 && hora <= 24){
    if(hora >= 0 && hora < 6){
        console.log(`Boa madrugada!`)
    }
    else if(hora >= 6 && hora < 12){
        console.log('Bom dia!')
    }
    else if(hora >= 12 && hora < 18){
        console.log('Boa tarde!')
    }
    else{
        console.log('Boa noite!')
    }
}





