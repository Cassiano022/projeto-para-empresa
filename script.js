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

// Problem 3: Faturamento Diário com JSON

document.getElementById('solve-problem-3').addEventListener('click', function () {
    
    
     // Dados no formato XML
        
        co
    
       
     const xmlData = `
            <root>
                <row><dia>1</dia><valor>31490.7866</valor></row>
                <row><dia>2</dia><valor>37277.9400</valor></row>
                <row><dia>3</dia><valor>37708.4303</valor></row>
                <row><dia>4</dia><valor>0.0000</valor></row>
                <row><dia>5</dia><valor>0.0000</valor></row>
                <row><dia>6</dia><valor>17934.2269</valor></row>
                <row><dia>7</dia><valor>0.0000</valor></row>
                <row><dia>8</dia><valor>6965.1262</valor></row>
                <row><dia>9</dia><valor>24390.9374</valor></row>
                <row><dia>10</dia><valor>14279.6481</valor></row>
                <row><dia>11</dia><valor>0.0000</valor></row>
                <row><dia>12</dia><valor>0.0000</valor></row>
                <row><dia>13</dia><valor>39807.6622</valor></row>
                <row><dia>14</dia><valor>27261.6304</valor></row>
                <row><dia>15</dia><valor>39775.6434</valor></row>
                <row><dia>16</dia><valor>29797.6232</valor></row>
                <row><dia>17</dia><valor>17216.5017</valor></row>
                <row><dia>18</dia><valor>0.0000</valor></row>
                <row><dia>19</dia><valor>0.0000</valor></row>
                <row><dia>20</dia><valor>12974.2000</valor></row>
                <row><dia>21</dia><valor>28490.9861</valor></row>
                <row><dia>22</dia><valor>8748.0937</valor></row>
                <row><dia>23</dia><valor>8889.0023</valor></row>
                <row><dia>24</dia><valor>17767.5583</valor></row>
                <row><dia>25</dia><valor>0.0000</valor></row>
                <row><dia>26</dia><valor>0.0000</valor></row>
                <row><dia>27</dia><valor>3071.3283</valor></row>
                <row><dia>28</dia><valor>48275.2994</valor></row>
                <row><dia>29</dia><valor>10299.6761</valor></row>
                <row><dia>30</dia><valor>39874.1073</valor></row>
            </root>
        `;
    
        // Dados no formato JSON
        
        c
    
       
     const jsonData = [
            
            
    
         
     { "dia": 1, "valor": 22174.1664 },
             
          
    
       
     { "dia": 2, "valor": 24537.6698 },
            
            
    
           
    
       
     { "dia": 3, "valor": 26139.6134 },
            { "dia": 4, "valor": 0.0 },
            { "dia": 5, "valor": 0.0 },
            { "dia": 6, "valor": 26742.6612 },
            { "dia": 7, "valor": 0.0 },
             
           
     { "dia": 8, "valor": 42889.2258 },
            { "dia": 9, "valor": 46251.174 },
            { "dia": 10, "valor": 11191.4722 },
            { "dia": 11, "valor": 0.0 },
            { "dia": 12, "valor": 0.0 },
            { "dia": 13, "valor": 3847.4823 },
             
           
     { "dia": 14, "valor": 373.7838 },
            { "dia": 15, "valor": 2659.7563 },
             
           
     { "dia": 16, "valor": 48924.2448 },
            { "dia": 17, "valor": 18419.2614 },
            
           
     { "dia": 18, "valor": 0.0 },
            
            
     { "dia": 19, "valor": 0.0 },
            
           
     { "dia": 20, "valor": 35240.1826 },
            { "dia": 21, "valor": 43829.1667 },
            { "dia": 22, "valor": 18235.6852 },
            { "dia": 23, "valor": 4355.0662 },
            
           
     { "dia": 24, "valor": 13327.1025 },
             
           
     { "dia": 25, "valor": 0.0 },
            { "dia": 26, "valor": 0.0 },
            { "dia": 27, "valor": 25681.8318 },
            { "dia": 28, "valor": 1718.1221 },
             
            
     { "dia": 29, "valor": 13220.495 },
            { "dia": 30, "valor": 8414.61 }
        ];
    
        
        
    
     // Parse o XML para converter em objetos JavaScript
        
        c
    
     
     const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlData, "application/xml");
        
        cons
    
      
     const xmlArray = Array.from(xmlDoc.getElementsByTagName('row')).map(row => ({
            
          
         dia: parseInt(row.getElementsByTagName('dia')[0].textContent, 10),
            
            
         valor: parseFloat(row.getElementsByTagName('valor')[0].textContent)
        }));
    
        
        
    
       
    
        
    
     
     // Combine os dois conjuntos de dados
        const combinedData = [...xmlArray, ...jsonData];
    
        
    
        
     // Filtrar os dias com faturamento > 0
        
        cons
     const validData = combinedData.filter(entry => entry.valor > 0);
    
        
    
        
     // Encontrar menor e maior faturamento
        const min = Math.min(...validData.map(entry => entry.valor));
        const max = Math.max(...validData.map(entry => entry.valor));
    
        // Calcular a média mensal ignorando dias com valor 0
        const total = validData.reduce((sum, entry) => sum + entry.valor, 0);
        const avg = total / validData.length;
    
        // Contar os dias com faturamento acima da média
        
        co
     const aboveAvg = validData.filter(entry => entry.valor > avg).length;
    
        // Exibir os resultados
        
        docum
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
