let p = Number(window.prompt("Informe o valor da conta."));
        if (isNaN(p)) {
            alert("Valor inválido");
        } else {
            let g = (p * 0.10);
            let vt = (p + g);
            window.alert(`Valor: R$${p.toFixed(2)}
            Gorjeta: R$${g.toFixed(2)}
            Valor Total: R$${vt.toFixed(2)}`);
        }