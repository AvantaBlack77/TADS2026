function maiorMenor() {
    let vetor = [];

    for (let i = 0; i < 5; i++) {
        let valor = Number(window.prompt(`Informe o ${i + 1}° valor`));
        vetor.push(valor);
    } 
        let maior = vetor[0];
        let menor = vetor[0];
        
     for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] > maior) {
        maior = vetor[i];
    }

    if (vetor[i] < menor) {
        menor = vetor[i];
    }
} window.alert(`
    o maior número é: ${maior}
    o menor número é: ${menor}
    `);
}