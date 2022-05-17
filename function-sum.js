const functionSum = async(...arrayDeNumeros) => {
    return arrayDeNumeros.reduce((valorTotal, valores) => valorTotal + valores);
}

module.exports = functionSum;