let envio = 0;

function calcularPreco(produto, preco) {
  if (preco <= 2000) {
    envio = 300;
  } else if (preco > 2000 && preco <= 4000) {
    envio = 450;
  } else {
    envio = 700;
  }

  let total = preco + envio;

  return `O produto ${produto} custa ${preco}. Seu custo de envio é
${envio}. Portanto, o preço final é ${total}`;
}

console.log(calcularPreco('Macbook', 2500));
console.log(calcularPreco('Celular', 500));
console.log(calcularPreco('Playstation', 4500));
