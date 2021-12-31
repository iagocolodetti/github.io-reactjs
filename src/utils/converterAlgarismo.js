import utils from './utils';

function checarBaseAlgarismo(algarismo, base) {
    let numero;
    for (let i = 0; i < algarismo.length; i++) {
        let charCode = algarismo.charCodeAt(i);
        if (charCode >= 48 && charCode <= 57) {
            numero = parseInt(algarismo.charAt(i));
        } else if (charCode >= 65 && charCode <= 86) {
            numero = charCode - 55;
        } else if (charCode >= 97 && charCode <= 118) {
            numero = charCode - 87;
        } else {
            return false;
        }
        if (numero >= base) {
            return false;
        }
    }
    return true;
}

function algarismoParaNumero(algarismo) {
    let numero;
    let charCode = algarismo.charCodeAt(0);
    if (charCode >= 65 && charCode <= 86) {
        numero = charCode - 55;
    } else if (charCode >= 97 && charCode <= 118) {
        numero = charCode - 87;
    } else {
        numero = parseInt(algarismo.charAt(0));
    }
    return numero;
}

function numeroParaAlgarismo(numero) {
    let algarismo;
    if (numero >= 10 && numero <= 31) {
        algarismo = String.fromCharCode(numero + 55);
    } else {
        algarismo = String.fromCharCode(numero + 48);
    }
    return algarismo;
}

function converterAlgarismoParaDecimal(algarismo, base) {
    if (algarismo.length <= 0) {
        throw new Error('Digite algum algarismo para ser convertido.');
    }
    if (algarismo.includes('.') || algarismo.includes(',')) {
        throw new Error('Use apenas algarismos inteiros.');
    }
    if (!checarBaseAlgarismo(algarismo, base)) {
        throw new Error('Esse algarismo não pertecem a essa base.');
    }
    let numero = 0;
    for (let i = 0; i < algarismo.length; i++) {
        let exp = (algarismo.length - (1 + i));
        let tmpN = algarismoParaNumero(algarismo.charAt(i));
        tmpN *= base ** exp;
        numero += tmpN;
    }
    if (!utils.isPositiveInteger(numero.toString())) {
        throw new Error('O valor a ser convertido é muito alto.');
    }
    return numero.toString();
}

function converterDecimalParaAlgarismo(algarismo, base) {
    if (algarismo.length <= 0) {
        throw new Error('Digite algum algarismo para ser convertido.');
    }
    if (algarismo.includes('.') || algarismo.includes(',')) {
        throw new Error('Use apenas algarismos inteiros.');
    }
    if (!checarBaseAlgarismo(algarismo, 10)) {
        throw new Error('Esse algarismo não pertecem a essa base.');
    }
    let numero = algarismo;
    algarismo = '';
    while (numero > 0) {
        let tmpB = base;
        let resto = numero % tmpB;
        algarismo += numeroParaAlgarismo(parseInt(resto.toString()));
        numero = parseInt(numero / tmpB);
    }
    return utils.reverseString(algarismo);
}

function converterAlgarismo(algarismo, daBase, paraBase) {
    try {
        return converterDecimalParaAlgarismo(converterAlgarismoParaDecimal(algarismo, daBase), paraBase);
    } catch (error) {
        throw error;
    }
}

export default converterAlgarismo;
