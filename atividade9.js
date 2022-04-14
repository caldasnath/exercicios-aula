// 9 - Crie uma função que irá converter uma quantidade
// de real para dólar usando uma cotação do dia. 4.68

function calcularRealParaDolar(real){
  const cotacaoDoDia = 4.68
  const resultadoEmDolar = real / cotacaoDoDia
  return `Real: ${real} para dolar: ${resultadoEmDolar.toFixed(2)} `  
}

console.log(calcularRealParaDolar(1000))
