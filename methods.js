const reader = require('./reader.js');

const romanNumber = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
const romanLettersToNumber = { 'I': 1, 'II': 2, 'III': 3, 'IV': 4, 'V': 5, 'VI': 6, 'VII': 7, 'VIII': 8, 'IX': 9, 'X': 10, 'XI': 11, 'XII': 12, 'XIII': 13, 'XIV': 14, 'XV': 15, 'XVI': 16, 'XVII': 17, 'XVIII': 18, 'XIX': 19, 'XX': 20 };

//Функция для конвертации римских чисел
function convertToRoman(number) {
    return [
        { value: 1000, char: 'M' },
        { value: 900, char: 'CM' },
        { value: 500, char: 'D' },
        { value: 400, char: 'CD' },
        { value: 100, char: 'C' },
        { value: 90, char: 'XC' },
        { value: 50, char: 'L' },
        { value: 40, char: 'XL' },
        { value: 10, char: 'X' },
        { value: 9, char: 'IX' },
        { value: 5, char: 'V' },
        { value: 4, char: 'IV' },
        { value: 1, char: 'I' }
    ].reduce((result, currentValue) => {
        while (number >= currentValue.value) {
            result += currentValue.char;
            number -= currentValue.value;
        }
        return result;
    }, '');
}

// Определяем формат числа для последующей работы с ними.
async function formatOfNumbers() {
    console.log('Выберете формат ввода:\nR-римские цифры\nA-арабские цифры');
    const command = await reader.getLine();
    if (command == 'R') {
        console.log("Введите первое число");
        a = await reader.getLine();
        console.log("Введите второе число");
        b = await reader.getLine();

    } else if (command == 'A') {
        console.log("Введите первое число");
        a = Number(await reader.getLine());
        console.log("Введите второе число");
        b = Number(await reader.getLine());
    } else {
        console.error('Введите команду из предложенных');
    }
}

//Функция умножения
async function sumOfTwoNumbers() {
    await formatOfNumbers();
    //Проверка на диапазон чисел от 1 до 10
    if (romanNumber.includes(a) && romanNumber.includes(b)) {
        romanA = Number(romanLettersToNumber[a]);
        romanB = Number(romanLettersToNumber[b]);
        const sum = romanA + romanB;
        for (let key in romanLettersToNumber) {
            if (sum == romanLettersToNumber[key]) {
                return console.log(key);
            }
        }
    } else if ((a >= 1 && a <= 10) && (b >= 1 && b <= 10) && ((Number.isInteger(a)) && (Number.isInteger(b)))) {
        return console.log(a + b);
    } else {
        console.error('Неправильный формат числа. Число в диапазоне от 1 до 10.');
    }
};

//Функция вычитания
async function subtractionOfTwoNumbers() {
    await formatOfNumbers();
    if (romanNumber.includes(a) && romanNumber.includes(b)) {
        romanA = Number(romanLettersToNumber[a]);
        romanB = Number(romanLettersToNumber[b]);
        const minus = romanA - romanB;
        for (let key in romanLettersToNumber) {
            if (minus == romanLettersToNumber[key]) {
                return console.log(key);
            }
        }
    } else if ((a >= 1 && a <= 10) && (b >= 1 && b <= 10) && ((Number.isInteger(a)) && (Number.isInteger(b)))) {
        return console.log(a - b);
    } else {
        console.error('Неправильный формат числа. Число в диапазоне от 1 до 10.');
    }
};

//Функция умножения
async function multiplicationOfTwoNumbers() {
    await formatOfNumbers();
    if (romanNumber.includes(a) && romanNumber.includes(b)) {
        romanA = Number(romanLettersToNumber[a]);
        romanB = Number(romanLettersToNumber[b]);
        const multi = romanA * romanB;
        return console.log(convertToRoman(multi));

    } else if ((a >= 1 && a <= 10) && (b >= 1 && b <= 10) && ((Number.isInteger(a)) && (Number.isInteger(b)))) {
        return console.log(a * b);
    } else {
        console.error('Неправильный формат числа. Число в диапазоне от 1 до 10.');
    }
};

//Функция деления
async function divisionOfTwoNumbers() {
    await formatOfNumbers();
    if (romanNumber.includes(a) && romanNumber.includes(b)) {
        romanA = Number(romanLettersToNumber[a]);
        romanB = Number(romanLettersToNumber[b]);
        const del = Math.trunc(romanA / romanB);
        return console.log(convertToRoman(del));

    } else if ((a >= 1 && a <= 10) && (b >= 1 && b <= 10) && ((Number.isInteger(a)) && (Number.isInteger(b)))) {
        return console.log(Math.trunc(a / b));
    } else {
        console.error('Неправильный формат числа. Число в диапазоне от 1 до 10.');
    }
};


module.exports.sumOfTwoNumbers = sumOfTwoNumbers;
module.exports.subtractionOfTwoNumbers = subtractionOfTwoNumbers;
module.exports.multiplicationOfTwoNumbers = multiplicationOfTwoNumbers;
module.exports.divisionOfTwoNumbers = divisionOfTwoNumbers;
