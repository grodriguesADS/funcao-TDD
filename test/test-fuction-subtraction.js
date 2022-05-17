const { assert } = require("chai");
const functionSubtraction = require("../function-subtraction");

describe('Teste da função subtração:', function () {
    describe('1° teste: Somente um parametro', function () {
        it('Recebendo somente um parametro', async function () {
            const retornaResultadoUmParametro = await functionSubtraction(2);
            assert.equal(retornaResultadoUmParametro, 2)
        })
    }),
        describe('2° teste: Dois parametros', function () {
            it('Recebendo dois parametros', async function () {
                const retornarResultadoDoisParametros = await functionSubtraction(2, 2);
                assert.equal(retornarResultadoDoisParametros, 0);
            })
        }),
        describe('3° teste: Tres parametro', function () {
            it('Recebendo tres parametros', async function () {
                const retornarResultadoTresParametros = await functionSubtraction(2, 2, 1);
                assert.equal(retornarResultadoTresParametros, -1);
            })
        })
    describe('4° teste: Numero negativo parametro', function () {
        it('Recebendo numero negativo', async function () {
            const retornarResultadoNumeroNegativoParametros = await functionSubtraction(-1);
            assert.equal(retornarResultadoNumeroNegativoParametros, -1);
        })
    })
    describe('5° teste: Dois numeros negativo parametro', function () {
        it('Recebendo dois numero negativo', async function () {
            const retornarResultadoDoisNumerosNegativosParametros = await functionSubtraction(-2, -2);
            assert.equal(retornarResultadoDoisNumerosNegativosParametros, 0);
        })
    })
    describe('6° teste: Dois parametros (um negativo e um positivo)', function () {
        it('Recebendo dois parametro com sinais opostos', async function () {
            const retornarResultadoPositivoComNegativoParametros = await functionSubtraction(-2, 1);
            assert.equal(retornarResultadoPositivoComNegativoParametros, -3);
        })
    })
    describe('7° teste: Dois parametros com valores flutuantes', function () {
        it('Recebendo dois parametros flutuantes', async function () {
            const retornarResultadoDoisParametrosFlutuantes = await functionSubtraction(2.0, 0.5);
            assert.equal(retornarResultadoDoisParametrosFlutuantes, 1.5);
        })
    })
})