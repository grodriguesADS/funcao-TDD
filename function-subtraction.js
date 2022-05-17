const functionSubtraction = async(...arrayDeNumeros) => {
    return arrayDeNumeros.reduce((valorTotal, valores) => valorTotal - valores);
}

module.exports = functionSubtraction;