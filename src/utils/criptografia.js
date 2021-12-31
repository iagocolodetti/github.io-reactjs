import utils from './utils';

export class CifraXOR {
    static cifrar(text, key) {
        if (text === '') {
            throw new Error('Digite algum(a) texto/palavra para ser cifrado(a).');
        }
        if (key === '') {
            throw new Error('Digite uma chave (em binário).');
        }
        if (!utils.isBinaryString(key)) {
            throw new Error('A chave deve ser em binário (0 ou 1).');
        }
        if (key.length > 8) {
            throw new Error('A chave deve ter no máximo 8 dígitos.');
        }
        let invalidchars = utils.invalidCharsInString(text, 0, 255);
        if (invalidchars !== '') {
            throw new Error(`Existe(m) caractere(s) inválido(s) no(a) texto/palavra.\nCaracteres inválidos: ${invalidchars}`);
        }
        let textCifrado = '';
        key = utils.padLeft(key, 8, '0');
        for (let i = 0; i < text.length; i++) {
            let charBinary = utils.padLeft(text.charCodeAt(i).toString(2), 8, '0');
            let charCifrado = '';
            for (let j = 0; j < 8; j++) {
                if (charBinary.charAt(j) === key.charAt(j)) {
                    charCifrado = charCifrado + '0';
                } else {
                    charCifrado = charCifrado + '1';
                }
            }
            textCifrado += String.fromCharCode(parseInt(charCifrado, 2));
        }
        return textCifrado;
    }
}

export class CifraDeCesar {
    static cifrar(text, deslocamento, min = 12, max = 255) {
        let MAX_DESLOCAMENTO = ((max + 1) - min);
        if (text === '') {
            throw new Error('Digite algum(a) texto/palavra para ser cifrado(a).');
        }
        if (deslocamento < 0 || deslocamento > MAX_DESLOCAMENTO) {
            throw new Error(`O deslocamento não pode ser menor que 0 e não pode ser maior que ${MAX_DESLOCAMENTO}.`);
        }
        let invalidchars = utils.invalidCharsInString(text, min, max);
        if (invalidchars !== '') {
            throw new Error(`Existe(m) caractere(s) inválido(s) no(a) texto/palavra.\nCaracteres inválidos: ${invalidchars}`);
        }
        let textCifrado = '';
        for (let i = 0; i < text.length; i++) {
            if ((text.charCodeAt(i) - deslocamento) < min) {
                textCifrado += String.fromCharCode((max + 1) - (min - (text.charCodeAt(i) - deslocamento)));
            } else {
                textCifrado += String.fromCharCode(text.charCodeAt(i) - deslocamento);
            }
        }
        return textCifrado;
    }

    static decifrar(text, deslocamento, min = 12, max = 255) {
        let MAX_DESLOCAMENTO = ((max + 1) - min);
        if (text === '') {
            throw new Error('Digite algum(a) texto/palavra para ser decifrado(a).');
        }
        if (deslocamento < 0 || deslocamento > MAX_DESLOCAMENTO) {
            throw new Error(`O deslocamento não pode ser menor que 0 e não pode ser maior que ${MAX_DESLOCAMENTO}`);
        }
        let invalidchars = utils.invalidCharsInString(text, min, max);
        if (invalidchars !== '') {
            throw new Error(`Existe(m) caractere(s) inválido(s) no(a) texto/palavra.\nCaracteres inválidos: ${invalidchars}`);
        }
        let textDecifrado = '';
        for (let i = 0; i < text.length; i++) {
            if ((text.charCodeAt(i) + deslocamento) > max) {
                textDecifrado += String.fromCharCode((text.charCodeAt(i) + deslocamento) - MAX_DESLOCAMENTO);
            } else {
                textDecifrado += String.fromCharCode(text.charCodeAt(i) + deslocamento);
            }
        }
        return textDecifrado;
    }
}

export class CifraRailFence {
    static cifrar(text) {
        if (text === '') {
            throw new Error('Digite algum(a) texto/palavra para ser cifrado(a).');
        }
        let linha1 = '';
        let linha2 = '';
        for (let i = 0; i < text.length; i++) {
            if (i === 0 || (i % 2) === 0) {
                linha1 += text.charAt(i);
            } else {
                linha2 += text.charAt(i);
            }
        }
        return (linha1 + linha2);
    }

    static decifrar(text) {
        if (text === '') {
            throw new Error('Digite algum(a) texto/palavra para ser decifrado(a).');
        }
        let textDecifrado = '';
        let linha1 = '';
        let linha2 = '';
        if ((text.length % 2) === 0) {
            linha1 = text.substring(0, (text.length / 2));
            linha2 = text.substring((text.length / 2));
        } else {
            linha1 = text.substring(0, ((text.length / 2) + 1));
            linha2 = text.substring(((text.length / 2) + 1));
        }
        let index = 0;
        for (let i = 0; i < text.length; i++) {
            if (i === 0 || (i % 2) === 0) {
                textDecifrado += linha1.charAt(index);
            } else {
                textDecifrado += linha2.charAt(index);
                index++;
            }
        }
        return textDecifrado;
    }
}

export class CifraMatematica {
    static cifrar(text, key) {
        if (text === '') {
            throw new Error('Digite algum(a) texto/palavra para ser cifrado(a).');
        }
        if (key === '') {
            throw new Error('Digite uma chave.');
        }
        if (key.length > 8) {
            throw new Error('A chave deve ter no máximo 8 dígitos.');
        }
        let invalidchars = utils.invalidCharsInString(text, 32, 255);
        if (invalidchars !== '') {
            throw new Error(`Existe(m) caractere(s) inválido(s) no(a) texto/palavra.\nCaracteres inválidos: ${invalidchars}`);
        }
        invalidchars = utils.invalidCharsInString(key, 33, 255);
        if (invalidchars !== '') {
            throw new Error(`Existe(m) caractere(s) inválido(s) na chave.\nCaracteres inválidos: ${invalidchars}`);
        }
        let valorDaChave = 0;
        for (let i = 0; i < key.length; i++) {
            valorDaChave = valorDaChave + (key.charCodeAt(i) * (key.length - i));
        }
        let MAX_BLOCK_LENGTH = (255 + valorDaChave).toString(16).length;
        let textCifrado = String(MAX_BLOCK_LENGTH);
        for (let i = 0; i < text.length; i++) {
            textCifrado = textCifrado + utils.padLeft((text.charCodeAt(i) + valorDaChave).toString(16), MAX_BLOCK_LENGTH, '0');
        }
        return textCifrado.toUpperCase();
    }

    static decifrar(text, key) {
        if (text === '') {
            throw new Error('Digite algum(a) texto/palavra para ser cifrado(a).');
        }
        if (key === '') {
            throw new Error('Digite uma chave.');
        }
        if (key.length > 8) {
            throw new Error('A chave deve ter no máximo 8 dígitos.');
        }
        let invalidchars = utils.invalidCharsInString(text, 32, 255);
        if (invalidchars !== '') {
            throw new Error(`Existe(m) caractere(s) inválido(s) no(a) texto/palavra.\nCaracteres inválidos: ${invalidchars}`);
        }
        invalidchars = utils.invalidCharsInString(key, 33, 255);
        if (invalidchars !== '') {
            throw new Error(`Existe(m) caractere(s) inválido(s) na chave.\nCaracteres inválidos: ${invalidchars}`);
        }
        if (!utils.isPositiveInteger(text.charAt(0))) {
            throw new Error('Não foi possível decifrar, texto cifrado adulterado.');
        }
        let MAX_BLOCK_LENGTH = parseInt(text.charAt(0), 16);
        if ((text.length - 1) % MAX_BLOCK_LENGTH !== 0) {
            throw new Error('Não foi possível decifrar, texto cifrado adulterado ou a chave está incorreta.');
        }
        let valorDaChave = 0;
        for (let i = 0; i < key.length; i++) {
            valorDaChave = valorDaChave + (key.charCodeAt(i) * (key.length - i));
        }
        let textDecifrado = '';
        for (let i = 1; i < text.length; i = i + MAX_BLOCK_LENGTH) {
            textDecifrado = textDecifrado +  String.fromCharCode(parseInt(text.substring(i, i + MAX_BLOCK_LENGTH), 16) - valorDaChave);
        }
        return textDecifrado;
    }
}
