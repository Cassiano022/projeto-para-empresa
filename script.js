// Problem 1: Soma de Índices
document.getElementById('solve-problem-1').addEventListener('click', function () {
    let INDICE = 13, SOMA = 0, K = 0;
    while (K < INDICE) {
        K = K + 1;
        SOMA = SOMA + K;
    }
    document.getElementById('result-problem-1').innerText = `Soma final: ${SOMA}`;
});

// Problem 2: Sequência de Fibonacci
document.getElementById('solve-problem-2').addEventListener('click', function () {
    const input = parseInt(document.getElementById('fibonacci-input').value);
    let a = 0, b = 1, fib = [0];
    while (b <= input) {
        fib.push(b);
        [a, b] = [b, a + b];
    }
    const result = fib.includes(input)
        ? `O número ${input} pertence à sequência de Fibonacci.`
        : `O número ${input} NÃO pertence à sequência de Fibonacci.`;
    document.getElementById('result-problem-2').innerText = result;
});

// Problem 3: Faturamento Diário
document.getElementById('solve-problem-3').addEventListener('click', function () {
    const data = [1200, 0, 800, 1500, 0, 1000, 3000]; // Exemplo de dados
    const validData = data.filter(value => value > 0);
    const min = Math.min(...validData);
    const max = Math.max(...validData);
    const avg = validData.reduce((sum, value) => sum + value, 0) / validData.length;
    const aboveAvg = validData.filter(value => value > avg).length;
    document.getElementById('result-problem-3').innerText = `
        Menor faturamento: R$${min.toFixed(2)}
        Maior faturamento: R$${max.toFixed(2)}
        Dias acima da média: ${aboveAvg}
    `;
});

// Problem 4: Percentual de Faturamento por Estado
document.getElementById('solve-problem-4').addEventListener('click', function () {
    const estados = {
        SP: 67836.43,
        RJ: 36678.66,
        MG: 29229.88,
        ES: 27165.48,
        Outros: 19849.53
    };
    const total = Object.values(estados).reduce((sum, value) => sum + value, 0);
    let result = '';
    for (const [estado, valor] of Object.entries(estados)) {
        const percentual = (valor / total) * 100;
        result += `${estado}: ${percentual.toFixed(2)}%\n`;
    }
    document.getElementById('result-problem-4').innerText = result;
});

// Problem 5: Inversão de String (sem usar reverse())
document.getElementById('solve-problem-5').addEventListener('click', function () {
    const input = document.getElementById('string-input').value;
    let reversed = '';
    for (let i = input.length - 1; i >= 0; i--) {
        reversed += input[i];
    }
    document.getElementById('result-problem-5').innerText = `String invertida: ${reversed}`;
});
