function trasFrente() {
    let vetor = []

    for (let i = 0; i < 5; i++) {
        let n = Number(window.prompt(`Digite o ${i + 1}° número`));
        if (isNaN(n)) {
            alert(`Digite apenas números!`)
        } else {
            vetor.push(n);
        } 
    } let texto = "Ordem reversa:\n";

for (let i = vetor.length - 1; i >= 0; i--) {
    texto += vetor[i] + "\n";
}

alert(texto);
} 