// EXERCÍCIO DE TRATAMENTO DE VARIÁVEIS


/* 
    Caso não declarar o tipo da variável, ela sempre será um STRING.

    Por isso, é necessário realizar o tratamento da variável, por exemplo:
    - Caso queira declarar uma varíavel numérica:

    var numero1 = Number(parseInt(n))
    var numero2 = Number(parseFloat(n))
    var numero3 = Number(n)

    * Todas esses tratamentos de variáveis estão corretos.
*/
var number1 =  Number(parseInt(window.prompt('Digite um número: ')))
var number2 = Number(parseInt(window.prompt('Digite outro número: '))) 

var soma = number1 + number2

/* 
    LEMBRAR: O '+' é somente um operador para CONCATENAR

    Ou seja, ele apenas 'junta' a string com a variável

    (number + number) para adição
    (string + string) para concatenação
    (number + string) para concatenação
*/

// -> Faz a conversão de tipo de variável
// 
// soma.toString()
// String(soma)


// PRINT COM CONCATENAÇÃO 
soma = window.alert('Soma: ' + soma)

// PRINT COM TEMPLATE STRING - MAIS ORGANIZADO
// soma = window.alert(`Soma: ${soma}`)