var listaDeGastos = [];
// 2. Seleção de Elementos com Tipagem Estrita
var inputItem = document.getElementById('item');
var inputValor = document.getElementById('amount');
var btnAdicionar = document.querySelector('.add-expense');
var btnCalcular = document.querySelector('.calculate-expenses');
var btnLimpar = document.getElementById('clear-list');
var listaUl = document.getElementById('expense-list');
// 3. Função para Atualizar a Interface 
function renderizarInterface() {
    listaUl.innerHTML = "";
    listaDeGastos.forEach(function (gasto) {
        var li = document.createElement('li');
        li.style.display = "flex";
        li.style.justifyContent = "space-between";
        li.style.marginBottom = "10px";
        li.innerHTML = "<span>".concat(gasto.item, "</span> <strong>R$ ").concat(gasto.valor.toFixed(2), "</strong>");
        listaUl.appendChild(li);
    });
    // Lógica do botão "X": Só aparece se houver itens
    btnLimpar.style.display = listaDeGastos.length > 0 ? 'block' : 'none';
}
// 4. Adicionar novo gasto
btnAdicionar.addEventListener('click', function () {
    var nome = inputItem.value;
    var valor = parseFloat(inputValor.value);
    if (nome.trim() === "" || isNaN(valor) || valor <= 0) {
        alert("Preencha os campos corretamente!");
        return;
    }
    var novoGasto = {
        id: Date.now(),
        item: nome,
        valor: valor
    };
    listaDeGastos.push(novoGasto);
    // Limpar campos
    inputItem.value = "";
    inputValor.value = "";
    renderizarInterface();
});
// 5. Calcular Total
btnCalcular.addEventListener('click', function () {
    var total = listaDeGastos.reduce(function (acc, atual) { return acc + atual.valor; }, 0);
    alert("O total dos seus gastos \u00E9: R$ ".concat(total.toFixed(2)));
});
// 6. Limpar Lista Completa
btnLimpar.addEventListener('click', function () {
    if (confirm("Deseja realmente limpar toda a lista?")) {
        listaDeGastos = [];
        renderizarInterface();
    }
});
// Inicialização
renderizarInterface();
