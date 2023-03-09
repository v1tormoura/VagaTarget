function faturamentoMensal(){
  const sp = 67.83643;
  const rj = 36.67866;
  const mg = 29.22988;
  const es = 27.16548;
  const outros = 19.849530;

  total = (sp + rj + mg + es + outros);

  console.log((total).toFixed(3));
  
  console.log(`O valor total mensal da distribuidora SP =` + " " + ((sp*total)/100).toFixed(2));
  console.log(`O valor total mensal da distribuidora RJ =` + " " + ((rj*total)/100).toFixed(2))
  console.log(`O valor total mensal da distribuidora MG =` + " " + ((mg*total)/100).toFixed(2))
  console.log(`O valor total mensal da distribuidora ES =` + " " + ((es*total)/100).toFixed(2))
  console.log(`O valor total mensal da distribuidora OUTROS =` + " " + ((outros*total)/100).toFixed(2))
}

faturamentoMensal();