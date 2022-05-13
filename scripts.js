// Exercício de verificador de palíndromos!
// Palíndromos são palavras ou frases que podem ser lidas da esquerda para a direita ou da direita para a esquerda. exemplo: ana, arara, aba.
// Crie um verificador de palíndromos.


let palavra = "danilo"

let palavraArray = palavra.split("");

let palavraInverso = palavraArray.reverse().join("")

if (palavraInverso === palavra) {
    console.log ("A palavra é um polindromo") 
    }
else {
    console.log ("A palavra não é um polindromo")
    }
