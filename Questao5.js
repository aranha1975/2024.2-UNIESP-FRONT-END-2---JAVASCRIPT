function tabuada (num) {
    for (let i = 1; i < 11; i++) {
        console.log(num+ " x " +i+ " = " +(num * i));
    }
}

let numero;
do {
    numero = Number(prompt("Digite um número positivo para ver a tabuada de multiplicação: "));
    if (numero > 0) {
        tabuada(numero);
    }
    else {
        console.log("Entrada inválida. Por favor digite um número positivo.")
    }
}while (numero <= 0)

