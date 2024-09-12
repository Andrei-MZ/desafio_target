// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
  };
  
  function calcularPercentuais(faturamento) {
    const total = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);
    
    for (const [estado, valor] of Object.entries(faturamento)) {
      const percentual = (valor / total) * 100;
      console.log(`O percentual de faturamento de ${estado} é ${percentual.toFixed(2)}%`);
    }
  }
  
  calcularPercentuais(faturamento);

// O percentual de faturamento de SP é 37.53%
// O percentual de faturamento de RJ é 20.29%
// O percentual de faturamento de MG é 16.17%
// O percentual de faturamento de ES é 15.03%
// O percentual de faturamento de Outros é 10.98%
  