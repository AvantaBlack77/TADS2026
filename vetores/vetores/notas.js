function notas() {
    let notas = [];
    let notas2 = [];
    for (let i = 0; i < 5; i++) {
        let n = Number(window.prompt(`Digite a nota do ${i + 1} ° aluno`));
        if (isNaN(n)) {
            alert(`informe apenas números`);
        } else {
            notas.push(n);
        }
    }

    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }

    let media = soma / notas.length;

    let acima = 0;
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] < media) {
            acima++
        }
    }

     alert(`Média da turma: ${media}`);
    alert(`Alunos acima da média: ${acima}`);


}