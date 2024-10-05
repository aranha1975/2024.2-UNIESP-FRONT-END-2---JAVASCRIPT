var produtos = [
    {
        nome: "teclado",
        preco: 60,
        quantidade_estoque: 20
    }, 
    {
        nome: "mouse",
        preco: 40,
        quantidade_estoque: 15
    },
    {
        nome: "monitor",
        preco: 600,
        quantidade_estoque: 10
    }
]

function valor_estoque (prod) {
    var total_estoque = 0;
    for (var i in prod) {
        
        let parcial_estoque = (prod[i].quantidade_estoque * prod[i].preco);
        total_estoque += parcial_estoque;
        console.log((prod[i].nome)+": R$ "+parcial_estoque.toFixed(2)+" em estoque.");
    }
    return total_estoque;
    
}

console.log("-------------------------------\nTOTAL: R$ "+valor_estoque(produtos)+" em produtos.");
    
