const { assert } = require("chai");
const functionSum = require("../function-sum");
describe('Teste da função soma:', function () {
    describe('1° teste: Somente um parametro', function () {
        it('Recebendo somente um parametro', async function () {
            const retornaResultadoUmParametro = await functionSum(2);
            assert.equal(retornaResultadoUmParametro, 2)
        })
    })
    describe('2° teste: Dois parametros', function () {
        it('Recebendo dois parametros', async function () {
            const retornaResultadoDoisParametros = await functionSum(2, 4);
            assert.equal(retornaResultadoDoisParametros, 6)
        })
    })
    describe('3° teste: Três parametros', function () {
        it('Recebendo Três parametro', async function () {
            const retornaResultadoTresParametros = await functionSum(2, 4, 6);
            assert.equal(retornaResultadoTresParametros, 12)
        })

    })
    describe('4° teste: Dois parametros com String', function () {
        it('Recebendo dois parametro com string', async function () {
            const retornaResultadoDoisParametrosComString = await functionSum(2, 'b');
            assert.equal(retornaResultadoDoisParametrosComString, '2b')
        })
    })
    describe('5° teste: Dois parametros negativos', function () {
        it('Recebendo dois parametro negativos', async function () {
            const retornaResultadoDoisParametrosNegativos = await functionSum(-1 , -2);
            assert.equal(retornaResultadoDoisParametrosNegativos, -3)
        })
    })
    describe('6° teste: Dois parametros (um negativo e um positivo)', function () {
        it('Recebendo dois parametro com sinais opostos', async function () {
            const retornaResultadoDoisParametros = await functionSum(-1 , 2);
            assert.equal(retornaResultadoDoisParametros, 1)
        })
    })
    describe('7° teste: Dois parametros com valores flutuantes', function () {
        it('Recebendo dois parametro flutuantes', async function () {
            const retornaResultadoDoisParametrosFlutuantes = await functionSum(1.0 , 0.5);
            assert.equal(retornaResultadoDoisParametrosFlutuantes, 1.5)
        })
    })
})