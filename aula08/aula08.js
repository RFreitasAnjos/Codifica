let nome = "ajax"

function invertString(nome){
    let reversed = ''
    for(let i = nome.length -1; i >= 0; i--){
        reversed+=nome[i]
    }
    return reversed.toUpperCase()
}

console.log(invertString(nome))