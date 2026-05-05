function somas() {
    let numeros = [];
    let quantidade = 5;
    let soma = 0

        for (let i = 0; i < quantidade; i++) {
            let valor = Number(window.prompt(`Informe o ${i + 1}° valor`));
            if (isNaN(valor)) {
            window.alert("Valor inválido!");
            } else {
                numeros.push(valor);
        } 
    } for (let i = 0; i < numeros.length; i++) {
            soma += numeros[i];
            } window.alert(`a soma de tudo é: ${soma}`);
} 