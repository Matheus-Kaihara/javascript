function verificarIdade(){

    var data = new Date()
    var anoAtual = data.getFullYear()
    var anoNascimento = window.document.getElementById('id_anoNascimento')
    var text = window.document.querySelector('p#id_text')

    if(anoNascimento.value < 0 || anoNascimento.value > anoAtual){
        window.alert('[ERRO] O ano inserido é inválido!')
    } else{
        var sexo = document.getElementsByName('sexo')
        var idade = anoAtual - Number(anoNascimento.value)
        var genero = ''
        var image = window.document.querySelector('img#id_image')
        
        if(sexo[0].checked){
            var genero = 'Homem'
            
            // CRIANÇA
            if(idade >= 0 && idade < 10){
                image.src = 'img/crianca_masc.jpg'
            }
            // JOVEM
            else if(idade < 21){
                image.src = 'img/jovem_masc.jpg'
            }
            // ADULTO
            else if(idade < 60){
                image.src = 'img/adulto_masc.jpg'
            }
            // IDOSO
            else{
                image.src = 'img/idoso_masc.jpg'
            }

        }
        else if(sexo[1].checked){
            var genero = 'Mulher'

            // CRIANÇA
            if(idade >= 0 && idade < 10){
                image.src = 'img/crianca_fem.jpg'
            }
            // JOVEM
            else if(idade < 21){
                image.src = 'img/jovem_fem.jpg'
            }
            // ADULTA
            else if(idade < 60){
                image.src = 'img/adulto_fem.jpg'
            }
            // IDOSA
            else{
                image.src = 'img/idoso_fem.jpg'
            }
        }

        text.innerHTML = `${genero} com ${idade} anos de idade.`

    }


}