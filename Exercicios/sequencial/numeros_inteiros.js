let n1 = Number(prompt("Informe o primeiro valor"));
    if (isNaN(n1)) {
      window.alert("Valor inválido!")
    } else {
    let n2 = Number(prompt("Informe o segundo valor"));

    if (isNaN(n2)) {
      window.alert("Valor inválido!");
    } else {
    let soma = (n1 + n2);
    window.alert("O resultado é: " + soma);
    }
  }