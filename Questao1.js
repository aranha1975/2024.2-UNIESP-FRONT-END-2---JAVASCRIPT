let num1 = Number(prompt("Digite o primeiro número: "));
let num2 = Number(prompt("Digite o segundo número: "));
let operacao = prompt("[1] - Soma\n[2] - Subtração\n[3] - Multiplicação\n[4] - Divisão\nEscolha uma opção de operação: ");

function calculadora(num1, num2, operacao) {
    operacao = operacao.toUpperCase(); 
    
    if (operacao === "SOMA" || operacao === "1") {
        return "A SOMA dos números " + num1 + " e " + num2 + " dá " + (num1 + num2);
    }
    else if (operacao === "SUBTRACAO" || operacao === "2") {
        return "A SUBTRAÇÃO dos números " + num1 + " e " + num2 + " dá " + (num1 - num2);
    }
    else if (operacao === "MULTIPLICACAO" || operacao === "3") {
        return "A MULTIPLICAÇÃO de " + num1 + " por " + num2 + " dá " + (num1 * num2);
    }
    else if (operacao === "DIVISAO" || operacao === "4") {
        if (num2 === 0) {
            return "Erro: A divisão por zero não é permitida!"};
        return "A DIVISÃO de " + num1 + " por " + num2 + " dá " + (num1 / num2);
    }
    else {
        return "Opção Inválida";
    }
}

console.log(calculadora(num1, num2, operacao));