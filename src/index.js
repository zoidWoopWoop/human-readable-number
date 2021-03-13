let ones = {
    0: '',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
}
let tens = {
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety',
}

module.exports = function toReadable(number) {
    if (number == 0 || number == '') {
        number = 'zero';
    } else if (number < 20) {
        number = ones[number]
    } else if (number > 19 && number < 100) {
        number = `${tens[Math.floor(number / 10)]} ${ones[number % 10]}`;
    } else if (number > 99) {
        if (number % 100 > 19) {
            number = `${ones[Math.floor(number / 100)]} hundred ${tens[Math.floor((number % 100)/10)]} ${ones[(number % 100)% 10]}`
        } else if (number % 100 < 20) {
            number = `${ones[Math.floor(number / 100)]} hundred ${ones[number % 100]}`
        }

    }

    return number.trim();
}
