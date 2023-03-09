const faturamentoDiario = [50, 70, 80, 30, 90, 20, 60, 7, 100, 45, 75, 55, 8, 85, 65, 95, 40, 25, 15, 35, 50, 70, 80, 30, 90, 20, 60, 9, 100, 45];

// Função para calcular o menor valor de faturamento diário
function menorFaturamentoDiario(faturamento) {
  return Math.min(...faturamento);
}

// Função para calcular o maior valor de faturamento diário
function maiorFaturamentoDiario(faturamento) {
  return Math.max(...faturamento);
}

// Função para calcular a média mensal de faturamento
function mediaMensalFaturamento(faturamento) {
  const faturamentoSemZeros = faturamento.filter(valor => valor !== 0); // Remove os dias sem faturamento
  const totalFaturamento = faturamentoSemZeros.reduce((total, valor) => total + valor, 0);
  return totalFaturamento / faturamentoSemZeros.length;
}

// Função para calcular o número de dias no mês em que o faturamento diário foi superior à média mensal
function diasAcimaMediaMensal(faturamento) {
  const mediaMensal = mediaMensalFaturamento(faturamento);
  return faturamento.filter(valor => valor > mediaMensal).length;
}

console.log(`Menor valor de faturamento diário: R$${menorFaturamentoDiario(faturamentoDiario)}`);
console.log(`Maior valor de faturamento diário: R$${maiorFaturamentoDiario(faturamentoDiario)}`);
console.log(`Número de dias com faturamento acima da média mensal: ${diasAcimaMediaMensal(faturamentoDiario)}`);
