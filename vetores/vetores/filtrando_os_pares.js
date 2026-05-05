function filtro() {

let vetor = [];
let vetorpares = [];

for (let i = 0; i < 10; i++) {
let n = Number(window.prompt(`Digite o ${i + 1}º número`));
vetor.push(n)
if (n %2 == 0) {
        vetorpares.push(n);
        
    }
    } alert(
    "Vetor original: " + vetor +
    "\nNúmeros pares: " + vetorpares
);
}