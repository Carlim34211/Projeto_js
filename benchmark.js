// Função para calcular 2 elevado a 10
function calcularpotencia() {
    return Math.sqrt(2**10);
}

// Número de repetições
const repetir = 100000000;

// Registrar o tempo inicial
const inicio = new Date();

// Loop para calcular a potência de 2 elevado a 10 várias vezes
for (let i = 0; i < repetir; i++) {
    calcularpotencia(); 
}

// Registrar o tempo final
const fim = new Date();3

// Calcular o tempo de execucao em milissegundos
const tempo_execucao = fim - inicio;

// Calcular o tempo médio de execução
const media_de_execucao = tempo_execucao / repetir;

console.log(`Tempo: ${tempo_execucao.toFixed(2)} ms`);
console.log(`Tempo médio de execução: ${media_de_execucao.toFixed(8)} ms`);

