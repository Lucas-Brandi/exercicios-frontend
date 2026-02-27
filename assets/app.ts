// 1. Definição do Molde (Interface)
interface Gasto {
    id: number;
    item: string;
    valor: number;
}

let listaDeGastos: Gasto[] = [];

// 2. Seleção de Elementos com Tipagem Estrita
const inputItem = document.getElementById('item') as HTMLInputElement;
const inputValor = document.getElementById('amount') as HTMLInputElement;
const btnAdicionar = document.querySelector('.add-expense') as HTMLButtonElement;
const btnCalcular = document.querySelector('.calculate-expenses') as HTMLButtonElement;
const btnLimpar = document.getElementById('clear-list') as HTMLButtonElement;
const listaUl = document.getElementById('expense-list') as HTMLUListElement;

// 3. Função para Atualizar a Interface 
function renderizarInterface(): void {
    
    listaUl.innerHTML = "";

    listaDeGastos.forEach((gasto) => {
        const li = document.createElement('li');
        li.style.display = "flex";
        li.style.justifyContent = "space-between";
        li.style.marginBottom = "10px";
        li.innerHTML = `<span>${gasto.item}</span> <strong>R$ ${gasto.valor.toFixed(2)}</strong>`;
        listaUl.appendChild(li);
    });

    // Lógica do botão "X": Só aparece se houver itens
    btnLimpar.style.display = listaDeGastos.length > 0 ? 'block' : 'none';
}

// 4. Adicionar novo gasto
btnAdicionar.addEventListener('click', () => {
    const nome = inputItem.value;
    const valor = parseFloat(inputValor.value);

    if (nome.trim() === "" || isNaN(valor) || valor <= 0) {
        alert("Preencha os campos corretamente!");
        return;
    }

    const novoGasto: Gasto = {
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
btnCalcular.addEventListener('click', () => {
    const total = listaDeGastos.reduce((acc, atual) => acc + atual.valor, 0);
    alert(`O total dos seus gastos é: R$ ${total.toFixed(2)}`);
});

// 6. Limpar Lista Completa
btnLimpar.addEventListener('click', () => {
    if (confirm("Deseja realmente limpar toda a lista?")) {
        listaDeGastos = [];
        renderizarInterface();
    }
});

// Inicialização
renderizarInterface();