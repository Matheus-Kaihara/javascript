function loadHour( ){

    var txtHour = window.document.getElementById('id_txtHour')
    var imgHour = window.document.getElementById('id_imgHour')

    var data = new Date()
    var hour = data.getHours()
    var minutes = data.getMinutes()

    txtHour.innerHTML = `Agora são ${hour} horase ${minutes} minutos.`

    if(hour >= 0 && hour < 12){
        imgHour.src = 'img/foto_manha.jpg'
        document.body.style.backgroundColor = '#219AC9'
    }
    else if(hour >= 12 && hour <= 18){
        imgHour.src = 'img/foto_tarde.jpg'
        document.body.style.backgroundColor = '#FDCF33'
    }
    else{
        imgHour.src = 'img/foto_noite.jpg'
        document.body.style.backgroundColor = '#051419'
    }
}


