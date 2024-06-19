let entrada;

console.log("Digite dois numeros:");
process.stdin.on("data", function (data) {
  let input = data.toString().trim().toLowerCase();
  if (resposta) {
    for (let i = maximo; i <= mmc * mmc; i++) {
      if (i % num1 === 0 && i % num2 === 0) {
        mmc = i;
        break;
      }
    }
  }
});
