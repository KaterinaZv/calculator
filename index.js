const reader = require('./reader.js');
const { sumOfTwoNumbers, subtractionOfTwoNumbers, multiplicationOfTwoNumbers, divisionOfTwoNumbers } = require('./methods.js');

//Главное меню
const main = async function () {
    console.log("Выберите операцию:\nsum-сумма\nminus-вычитание\nmulti-умножение\ndel-деление");
    const command = await reader.getLine();
    if (command == 'sum') {
        await sumOfTwoNumbers();
    } else if (command == 'minus') {
        await subtractionOfTwoNumbers();
    } else if (command == 'multi') {
        await multiplicationOfTwoNumbers();
    } else if (command == 'del') {
        await divisionOfTwoNumbers();
    } else {
        console.error("Введена неверная команда");
    }
    main();
}

main();