import utils from './utils';

function fatorial(n) {
    if (n < 0) {
        return 0;
    } else if (n === 0) {
        return 1;
    } else if (n === 1) {
        return n;
    } else {
        return n * fatorial(n - 1);
    }
}

function permutacaoSimples(n) {
    return fatorial(n);
}

function permutacaoRepeticao(n, p) {
    let s = 0;
    for (let i = 0; i < p.length; i++) {
        s += p[i];
    }
    if (n < s) {
        return 0;
    }
    let pp = 1;
    for (let i = 0; i < p.length; i++) {
        pp *= fatorial(p[i]);
    }
    let resultado = fatorial(n) / pp;
    if (resultado < 0) {
        resultado = 0;
    }
    return resultado;
}

function arranjoSimples(n, p) {
    if (n < p) {
        return 0;
    }
    let resultado = fatorial(n) / fatorial(n - p);
    if (resultado < 0) {
        resultado = 0;
    }
    return resultado;
}

function arranjoRepeticao(n, p) {
    if (p < 0) {
        return 0;
    } else if (p === 0) {
        return 1;
    } else if (p === 1) {
        return n;
    } else {
        return n * arranjoRepeticao(n, p - 1);
    }
}

function combinacaoSimples(n, p) {
    if (n < p) {
        return 0;
    }
    let resultado = fatorial(n) / (fatorial(n - p) * fatorial(p));
    if (resultado < 0) {
        resultado = 0;
    }
    return resultado;
}

function combinacaoRepeticao(n, p) {
    let resultado = fatorial(n + p - 1) / (fatorial(n - 1) * fatorial(p));
    if (resultado < 0) {
        resultado = 0;
    }
    return resultado;
}
    
function analiseCombinatoria(tipo, n, p) {
    let resultado;
    let _n, _p = 0;
    const MIN_NUMBER = 1, MAX_NUMBER = 100;
    switch (tipo) {
        case 0:
            if (n === '') {
                throw new Error('O campo \'n\' está vazio.');
            }
            if (!utils.isPositiveInteger(n)) {
                throw new Error('O valor do campo \'n\' não é um inteiro positivo.');
            } else {
                _n = parseInt(n);
            }
            if (_n < MIN_NUMBER || _n > MAX_NUMBER) {
                throw new Error(`O valor do campo 'n' deve ser um número inteiro positivo de ${MIN_NUMBER} a ${MAX_NUMBER}.`);
            }
            break;
        case 1:
            if (n === '') {
                throw new Error('O campo \'n\' está vazio.');
            }
            if (p === '') {
                throw new Error('O campo \'p\' está vazio.');
            }
            if (!utils.isPositiveInteger(n)) {
                throw new Error('O valor do campo \'n\' não é um inteiro positivo.');
            } else {
                _n = parseInt(n);
            }
            if (_n < MIN_NUMBER || _n > MAX_NUMBER) {
                throw new Error(`O valor do campo 'n' deve ser um número inteiro positivo de ${MIN_NUMBER} a ${MAX_NUMBER}.`);
            }
            break;
        default:
            if (n === '') {
                throw new Error('O campo \'n\' está vazio.');
            }
            if (p === '') {
                throw new Error('O campo \'p\' está vazio.');
            }
            if (!utils.isPositiveInteger(n)) {
                throw new Error('O valor do campo \'n\' não é um inteiro positivo.');
            } else {
                _n = parseInt(n);
            }
            if (_n < MIN_NUMBER || _n > MAX_NUMBER) {
                throw new Error(`O valor do campo 'n' deve ser um número inteiro positivo de ${MIN_NUMBER} a ${MAX_NUMBER}.`);
            }
            if (!utils.isPositiveInteger(p)) {
                throw new Error('O valor do campo \'p\' não é um inteiro positivo.');
            } else {
                _p = parseInt(p);
            }
            if (_p < MIN_NUMBER || _p > MAX_NUMBER) {
                throw new Error(`O valor do campo 'p' deve ser um número inteiro positivo de ${MIN_NUMBER} a ${MAX_NUMBER}.`);
            }
            if ((tipo !== 3 && tipo !== 5) && _n < _p) {
                throw new Error('O valor do campo \'p\' deve ser menor ou igual ao valor do campo \'n\'.');
            }
            break;
    }
    switch (tipo) {
        case 0:
            resultado = `P(n) > P(${_n}) = ${permutacaoSimples(_n)}`;
            break;
        case 1:
            let exibir = `P(n,(p,p,...)) > P(${_n},(`;
            let sPP = p.replace(' ', '').split(',');
            let pp = [];
            for (let i = 0; i < sPP.length; i++) {
                if (!utils.isPositiveInteger(sPP[i])) {
                    throw new Error('Um valor do campo \'p,p,...\' não é um inteiro positivo.');
                } else {
                    _p = parseInt(sPP[i]);
                }
                if (_p < MIN_NUMBER || _p > MAX_NUMBER) {
                    throw new Error(`Os valores do campo 'p,p,...' devem ser números inteiros positivos de ${MIN_NUMBER} a ${MAX_NUMBER}.`);
                }
                if (i === 0) {
                    exibir += _p;
                } else {
                    exibir += `,` + _p;
                }
                pp[i] = _p;
            }
            let s = 0;
            for (let i = 0; i < pp.length; i++) {
                s += pp[i];
            }
            if (_n < s) {
                throw new Error('O valor total do campo \'p\' deve ser menor ou igual ao valor do campo \'n\'.');
            }
            resultado = `${exibir})) = ${permutacaoRepeticao(_n, pp)}`;
            break;
        case 2:
            resultado = `A(n,p) > A(${_n},${_p}) = ${arranjoSimples(_n, _p)}`;
            break;
        case 3:
            resultado = `AR(n,p) > AR(${_n},${_p}) = ${arranjoRepeticao(_n, _p)}`;
            break;
        case 4:
            resultado = `C(n,p) > C(${_n},${_p}) = ${combinacaoSimples(_n, _p)}`;
            break;
        case 5:
            resultado = `CR(n,p) > CR(${_n},${_p}) = ${combinacaoRepeticao(_n, _p)}`;
            break;
        default:
            resultado = 'Tipo incorreto.';
            break;
    }
    return resultado;
}

export default analiseCombinatoria;