const { assert } = require("chai");
const functionDivision = require("../function-division");

describe('Teste da função divisão:', function () {
    describe('1° teste: Somente um parametro', function () {
        it('Recebendo somente um parametro', async function () {
            const retornaResultadoUmParametro = await functionDivision(2);
            assert.equal(retornaResultadoUmParametro, 2)
        })
    }),
        describe('2° teste: Dois parametros', function () {
            it('Recebendo dois parametros', async function () {
                const retornarResultadoDoisParametros = await functionDivision(4, 2);
                assert.equal(retornarResultadoDoisParametros, 2);
            })
        }),
        describe('3° teste: Tres parametro', function () {
            it('Recebendo tres parametros', async function () {
                const retornarResultadoTresParametros = await functionDivision(4, 2, 2);
                assert.equal(retornarResultadoTresParametros, 1);
            })
        })
    describe('4° teste: Numero negativo parametro', function () {
        it('Recebendo numero negativo', async function () {
            const retornarResultadoNumeroNegativoParametros = await functionDivision(-1);
            assert.equal(retornarResultadoNumeroNegativoParametros, -1);
        })
    })
    describe('5° teste: Dois numeros negativo parametro', function () {
        it('Recebendo dois numero negativo', async function () {
            const retornarResultadoDoisNumerosNegativosParametros = await functionDivision(-2, -2);
            assert.equal(retornarResultadoDoisNumerosNegativosParametros, 1);
        })
    })
    describe('6° teste: Dois parametros (um negativo e um positivo)', function () {
        it('Recebendo dois parametro com sinais opostos', async function () {
            const retornarResultadoPositivoComNegativoParametros = await functionDivision(-2, 1);
            assert.equal(retornarResultadoPositivoComNegativoParametros, -2);
        })
    })
    describe('7° teste: Dois parametros com valores flutuantes', function () {
        it('Recebendo dois parametros flutuantes', async function () {
            const retornarResultadoDoisParametrosFlutuantes = await functionDivision(2.0, 0.5);
            assert.equal(retornarResultadoDoisParametrosFlutuantes, 4);
        })
    })
    describe('8° teste: Dois parametros retornando uma dizima periodica', function () {
        it('Recebendo dois parametros que retornam dizima', async function () {
            const retornarResultadoDoisParametrosComDizima = await functionDivision(2, 3);
            assert.equal(retornarResultadoDoisParametrosComDizima, 0.6667);
        })
    })
})