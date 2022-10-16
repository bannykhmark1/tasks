let alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';

let cipher = 'лозунг';
let cipherRes = 'привет';
let cipherSplit = cipher.split('');
let alphabetSplit = alphabet.split('');

console.log(cipherSplit);
console.log(alphabetSplit);

function sloganCipher(cipherSplit, alphabetSplit) {
    for (let j = 0; j < alphabetSplit.length; j++) {

        for (let i = 0; i < cipherSplit.length; i++) {
            if (cipherSplit[i] == alphabetSplit[j]) {
                [alphabetSplit[i], alphabetSplit[j]] = [alphabetSplit[j], alphabetSplit[i]];
            }
        }

    }
    alert(alphabetSplit);
}