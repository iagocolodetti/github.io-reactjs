const utils = {
    isPositiveInteger(text) {
        return (/^\+?\d+$/).test(text);
    },

    reverseString(text) {
        let aux = '';
        for (let i = text.length-1; i >= 0; i--) {
            aux += text[i];
        }
        return aux;
    },

    padLeft(text, length, char) {
        let textpad = '';
        for (let i = 0; i < length; i++) {
            textpad = textpad + char;
        }
        return textpad.substring(text.length) + text;   
    },

    isBinaryString(text) {
        for (let i = 0; i < text.length; i++) {
            if (text.charAt(i) !== '0' && text.charAt(i) !== '1') {
                return false;
            }
        }
        return true;
    },

    isInvalidChar(char, min, max) {
        return (char.charCodeAt(0) < min || char.charCodeAt(0) > max);
    },

    invalidCharsInString(text, min, max) {
        let invalidchars = '';
        for (let i = 0; i < text.length; i++) {
            if (this.isInvalidChar(text[i], min, max)) {
                invalidchars = invalidchars + text[i] + ' (' + text.charCodeAt(i) + ')   ';
            }
        }
        return invalidchars;
    }
}

export default utils;
