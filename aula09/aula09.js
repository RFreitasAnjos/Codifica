let nome = "ajax"

function invertString(nome){
    let reversed = ''
    for(let i = nome.length -1; i >= 0; i--){
        reversed+=nome[i]
    }
    return reversed.toUpperCase()
}

console.log(invertString(nome))

// --------------------------------- //

let palavra = "Ai sim"

function countVowels(palavra){
    let vowels = palavra.match(/[aeiou]/gi);
    return vowels ? vowels.length : 0;
}

console.log(countVowels(palavra))

let date = new Date()
let time = date.getTime();
let dia = date.getDate();
let mes = date.getMonth();
let ano = date.getFullYear();
function convertYearsForBrazil(dia,mes,ano){
    return `${dia}/${mes+1}/${ano}`
}

function formatDate(date){
    let day = date.getDate().toString().padStart(2,'0');
    let month = (date.getMonth()+1).toString().padStart(2, '0');
    let year = date.getFullYear().toString();

    return `${day}/${month}/${year}`;
}
let date1 = convertYearsForBrazil(dia,mes,ano)
console.log(date1)
let date2 = formatDate(date)
console.log(date2)