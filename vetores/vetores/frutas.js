function frutas() {
    let vetor = ["Banana", "Maçã", "Uva", "Laranja", "Pera"];

    let fruta = prompt("Qual fruta gostaria buscar?");

    let encontrado = false;

    for (let i = 0; i < vetor.length; i++) {
        if (fruta.toLowerCase() === vetor[i].toLowerCase()) {
            encontrado = true;
            alert(`A fruta ${fruta} está na posição ${i + 1}`);
            break;
        }
    }

    if (!encontrado) {
        alert("Fruta não encontrada!");
    }
}