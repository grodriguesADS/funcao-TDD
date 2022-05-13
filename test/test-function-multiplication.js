const {assert} = require ("chai");
const functionMultiplication = require("../function-multiplication");

describe('Teste da função multiplicação:', function(){
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
    describe('6° teste: Dois parametros (um negativo e um positivo)', function (){
        it('Recebendo dois parametro com sinais opostos', async function(){
            const retornarResultadoPositivoComNegativoParametros = await functionMultiplication(-2, 1);
            assert.equal(retornarResultadoPositivoComNegativoParametros , -2);
        })
    }),
    describe('7° teste: Dois parametros com valores flutuantes', function () {
        it('Recebendo dois parametros flutuantes', async function () {
            const retornarResultadoDoisParametrosFlutuantes = await functionMultiplication(3.0, 2.0);
            assert.equal(retornarResultadoDoisParametrosFlutuantes, 6.0);
        })
    })
})