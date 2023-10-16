
function adicionarAoCarrinho(produto) {
 let quantidade = parseInt(document.querySelector('input[type="number"]').value);
 let preco = parseFloat(produto.querySelector('td:nth-child(3)').textContent);
 let total = quantidade * preco;

 produto.querySelector('td:nth-child(4)').textContent = total.toFixed(2);
 alert("Produto adicionado ao carrinho!");
}