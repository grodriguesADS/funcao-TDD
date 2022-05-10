const {assert} = require ("chai");
const functionMultiplication = require("../function-multiplication");

describe('Quantos parametros forem necessarios', function(){
    describe('1° teste: Somente um parametro', function(){
        it('Recebendo somente um parametro', async function(){
            const retornaResultadoUmParametro = await functionMultiplication(2);
            assert.equal(retornaResultadoUmParametro, 2)
        })
    }),
    describe('2° teste: Dois parametros', function (){
        it('Recebendo dois parametros', async function(){
            const retornarResultadoDoisParametros = await functionMultiplication(2 , 2);
            assert.equal(retornarResultadoDoisParametros , 4);
        })
    }),
    describe('3° teste: Tres parametro', function (){
        it('Recebendo tres parametros', async function(){
            const retornarResultadoTresParametros = await functionMultiplication(1, 2, 3);
            assert.equal(retornarResultadoTresParametros , 6);
        })
    })
    describe('4° teste: Numero negativo parametro', function (){
        it('Recebendo numero negativo', async function(){
            const retornarResultadoNumeroNegativoParametros = await functionMultiplication(-1);
            assert.equal(retornarResultadoNumeroNegativoParametros , -1);
        })
    })
    describe('5° teste: Dois numeros negativo parametro', function (){
        it('Recebendo dois numero negativo', async function(){
            const retornarResultadoDoisNumerosNegativosParametros = await functionMultiplication(-2, -2);
            assert.equal(retornarResultadoDoisNumerosNegativosParametros , 4);
        })
    })
    describe('6° teste: Numero positivo com Negativo parametro', function (){
        it('Recebendo um numero positivo com numero negativo', async function(){
            const retornarResultadoPositivoComNegativoParametros = await functionMultiplication(-2, 1);
            assert.equal(retornarResultadoPositivoComNegativoParametros , -2);
        })
    })
})