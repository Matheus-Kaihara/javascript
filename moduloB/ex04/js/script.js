var nome = window.prompt('Qual o seu nome?')
var peso = Number(parseFloat(window.prompt('Qual o seu peso?')))

// APLICAR O TEXTO NO HTML
document.write(`Olá, ${nome}. Seu nome tem ${nome.length} letras. <br>`)

// .ToFixed - Limita a quantidade de casas decimais
// .replace('x', 'y') - Troca o x pelo y
document.write(`Peso: ${peso.toFixed(2).replace('.', ',')} kg.`)