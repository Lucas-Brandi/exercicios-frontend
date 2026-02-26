// function calcularIMC() {
//   const peso = parseFloat(document.querySelector('.peso').value);
//   const altura = parseFloat(document.querySelector('.altura').value);
//   const resultado = document.querySelector('#resultado');

//   if (!peso || !altura) {
//     resultado.innerHTML = '<strong>Preencha todos os campos!</strong>';
//     return;
//   }

//   const imc = peso / (altura * altura);
//   let classificacao = '';

//   if (imc < 18.5) classificacao = 'Abaixo do peso';
//   else if (imc < 25) classificacao = 'Peso normal';
//   else if (imc < 30) classificacao = 'Sobrepeso';
//   else classificacao = 'Obesidade';

//   resultado.innerHTML = `<strong>Seu IMC:</strong> ${imc.toFixed(2)}<br><strong>Classificação:</strong> ${classificacao}`;

function calcularCotacaoDolar() {
    const valorReal = parseFloat(document.getElementById('amount').value);
    const resultado = document.getElementById('dollar-result');

    if(!valorReal) {
        alert('Por favor, insira um valor.');
        return;
    }

    const converterPraDolar = valorReal / 5.13;
    resultado.innerHTML = `<strong>Valor em Dólar:</strong> $${converterPraDolar.toFixed(2)}`;
}

function calcularCotacaoEuro() {
    const valorReal = parseFloat(document.getElementById('amount').value);
    const resultado = document.getElementById('euro-result');

    if(!valorReal) {
        alert('Por favor, insira um valor.');
        return;
    }

    const converterPraEuro = valorReal / 6.06;
    resultado.innerHTML = `<strong>Valor em Euros:</strong> €${converterPraEuro.toFixed(2)}`;
}