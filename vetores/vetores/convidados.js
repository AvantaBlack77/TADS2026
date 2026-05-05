function convidados() {

let amigos = [];

for (let i = 0; i < 5; i++) {
    let nome = window.prompt(`Informe o nome do ${i + 1}° amigo`);
    amigos.push(nome);
    } let lista = "Lista de convidados:\n";
    for (let i = 0; i < amigos.length; i++) {
        lista += `${i + 1} - ${amigos[i]}\n`;
    } alert(lista);
}