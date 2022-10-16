const fs = require('fs'); // объект с методами для работы с файлами (например, метод writeFile)
let stringFile = '';
let start = 0;
let end = 0;
let diff = 0;
let fileContent = '';


function trassa(state, nameProgram, path) {
    const date = new Date();

    if (state === 'begin') {
        stringFile = `${date.toLocaleDateString()}:${date.toLocaleTimeString()}\r\n`;
        stringFile += `Начало тестирования программы "${nameProgram}"\r\n`;
    }

    if (state === 'point') {
        stringFile += `${nameProgram}:\r\n время: ${end[0] / 1000} sec\r\n`;
    }

    if (state === 'finish') {
        stringFile += `${nameProgram}:\r\n время: ${end[0] / 1000} sec\r\n`;
        stringFile += `Конец тестирования программы. Общее время выполненной программы\r\n время: ${end[1] / 1000} sec \r\n\r\n<===============> \r\n\r\n`;


        fileContent = fs.readFileSync(`trassa.txt`, "utf8");
        fs.writeFileSync(`trassa.txt`, stringFile);
        fs.appendFileSync(`trassa.txt`, fileContent);
        console.log(`Файл сохранён в trassa.txt`);

        stringFile = '';
    }
    try {
        const stat = fs.statSync(`trassa.txt`);
    } catch (err) {
        if (err.code == 'ENOENT') {
            fs.writeFileSync(`trassa.txt`, '');
        } else {
            console.log('Some other error: ', err.code);
        }
    }
}

function createArray() {
    const array = [];

    trassa('begin', 'заполнение массива рандомными числами');

    // 1 часть программы
    start = [Date.now(), 0];

    for (let i = 0; i < 10000000; i++) {
        array.push(Math.random() * 999);
    }

    diff = Date.now() - start[0];
    end = [diff, start[1] + diff];

    trassa('point', 'цикл 1');

    // 2 часть программы
    start = [Date.now(), end[1]];

    const array1 = createRandomArray();
    const newArray = [];

    array1.forEach(element => {
        if (element > 500) {
            newArray.push(newArray);
        }
    });

    diff = Date.now() - start[0];
    end = [diff, start[1] + diff];

    trassa('point', 'цикл 2');

    // 3 часть программы
    start = [Date.now(), end[1]];

    let string = '';

    for (let i = 0; i < 10000000; i++) {
        string += '0';
    }

    diff = Date.now() - start[0];
    end = [diff, start[1] + diff];

    trassa('finish', 'цикл 3', 'logs/trassa.txt');

    return array;
}

createArray();

function createRandomArray() {
    const array = [];

    for (let i = 0; i < 10000000; i++) {
        array.push(Math.random() * 999);
    }

    return array;
}