let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let cipher = prompt('Введите слово для зашифровки: ');
let cipherSplit = cipher.split('');
let alphabetSplit = alphabet.split('');
let sum = 0;
let result = '';

function encryption() {
    for (let i = 0; i < cipherSplit.length; i++) {
        for (let j = 0; j < alphabetSplit.length; j++) {

            if (cipherSplit[i] == alphabetSplit[j]) {

                sum = j + 1; //индекс элемента массива
                result += sum + ' '; //закидывает в строку индексы
            }
        }

    }
    return alert(result.split(' ').filter(Boolean));
    console.log(result.split(' ').filter(Boolean))
}



function decipherment() {
    let decrypt = prompt('Введите шифр: ');
    decrypt = decrypt.split(' ');
    for (let i = 0; i < decrypt.length; i++) {
        for (let j = 0; j < alphabetSplit.length; j++) {

            if (decrypt[i] == alphabetSplit[j]) {
                sum = alphabetSplit[j + 1]; //индекс элемента массива
                result += sum + ''; //закидывает в строку индексы
            }
        }

    }
    console.log(decrypt);
    return alert(result);
    console.log(result);
}