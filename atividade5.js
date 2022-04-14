// 5 - Crie uma função que determina se um número é par ou impar

function determinaParOuImpar(numero) {
    if (numero % 2 == 0) {
        return `${numero} é par`
    } else {
        return `${numero} é impar`
    }
}
const resultado = determinaParOuImpar(25)
console.log(resultado)