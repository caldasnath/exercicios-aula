// Vamos criar uma função que calcule o IMC de uma pessoa, 
// dado a altura em mea massa em kg.

function calculadoraIMC(peso, altura) {
    const alturaAoQuadrado = Math.pow(altura, 2)
    const valorIMC = peso / alturaAoQuadrado
    return `O resultado é ${valorIMC.toFixed(2)}`
}

console.log(calculadoraIMC(80, 1.7))