var frase = prompt("Digite uma frase ou palavra: ").trim().toUpperCase();

function detector_palindromo(frase) {

    let junto = frase.replace(/[^A-Z]/g, "");

    let inverso = "";

    for (let i = junto.length - 1; i >= 0; i--) {
        inverso += junto[i];
    }
    console.log ("O que você digitou sem espaços foi: " + junto);
    console.log ("O que você digitou, de trás pra frente, sem espaços foi: " + inverso);
    
    if (junto === inverso) {
        return `Como podemos ver acima, "${frase}" é um PALÍNDROMO!`;
    } else {
        return `Como podemos ver acima, "${frase}" NÃO É um palíndromo.`;
    }

}
console.log(detector_palindromo(frase))




