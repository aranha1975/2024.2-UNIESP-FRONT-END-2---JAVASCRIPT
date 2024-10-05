dados = [];

for (let i = 1; i < 6; i++) {
    let nome = prompt("Digite o Nome da " + i + "ª pessoa: ");
    let idade;

    do {
        idade = prompt("Digite a idade da " + i + "ª pessoa: ");
        idade = Number(idade);
        
        if (isNaN(idade) || idade < 0) {
            console.log("Por favor, digite uma idade válida (número positivo).");
        }
    } while (isNaN(idade) || idade < 0);

    dados.push({
        nome: nome,
        idade: idade
    });
}

for (let i in dados) {
    if (dados[i].idade > 18) {
        console.log(dados[i].nome + " tem " + dados[i].idade + " anos, portanto tem mais de 18 anos.");
    }
}
