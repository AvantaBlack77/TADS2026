let n = Number(prompt("Informe um número!"));

        if (isNaN(n)) {
            window.alert("Valor inválido!");
        } else {
            let n1 = (n + 1);
            let n2 = (n - 1);
            window.alert(`O número sucessor é: ${n1} e o número antecessor é ${n2}`)
        }