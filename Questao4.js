var aluno = {
    nome: prompt("Digite o nome do aluno: "),
    notas: [
        Number(prompt("Digite a 1ª nota do aluno: ")),
        Number(prompt("Digite a 2ª nota do aluno: ")),
        Number(prompt("Digite a 3ª nota do aluno: "))
    ],
    media: function() {
        let soma = 0;
        for (let i in this.notas) {
            soma += this.notas[i];
        }
        return soma / this.notas.length;
    }
};

console.log("O(a) aluno(a) "+aluno.nome+" obteve média "+aluno.media().toFixed(2));

