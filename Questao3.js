tarefas = [];
for (var i=1; i<6; i++) {

    let tarefa = prompt("Digite a "+i+"ª tarefa a ser realizada: ");
    tarefas.push(tarefa.toLowerCase());

}
console.log(`A lista de tarefas na ordem que foram incluídas é: `+tarefas.join(", "));

let concluida = prompt("Qual dessas tarefas deseja marcar como concluída? ");

let indice = tarefas.indexOf(concluida.toLowerCase());

if (indice !== -1) {
    tarefas.splice(indice, 1);
    console.log("A tarefa "+concluida.toLowerCase()+" foi realizada com sucessso!\nApagando "+concluida.toLowerCase()+" da lista de tarefas...");
}
else {
    console.log("A tarefa "+concluida.toLowerCase()+" não foi encontrada na lista.");

}

console.log("A lista de tarefas atualizada é: "+tarefas.join(", "));


    
