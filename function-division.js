const functionDivision = async(...variableNumber) => {
    return variableNumber.reduce((totalCalculation, currentValue) => (totalCalculation / currentValue).toFixed(4));
}

module.exports = functionDivision;