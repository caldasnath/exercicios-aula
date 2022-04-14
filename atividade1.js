// Usando os conceitos que estudamos, vamos criar 
// um programa que funcionará como um sinal de trânsito.


function informaTransito(corFarol) {
    switch(corFarol) {
        case 'vermelha':
            return 'Pare'
        case 'amarela':
            return 'Atenção'
        case 'verde':
            return 'Siga'
         default: 
            return 'Não tem essa cor'
    }
}
console.log(informaTransito('verde'))