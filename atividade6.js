// 6 - Crie uma função que recebe uma temperatura em graus
// celsius retorna o valor convertido em Fahrenheit

function converteTemperatura(temperaturaCelsius) {
const temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32
return `A temperatura convertida é ${temperaturaFahrenheit}F`
}

const resultado = converteTemperatura(38)
console.log(resultado)