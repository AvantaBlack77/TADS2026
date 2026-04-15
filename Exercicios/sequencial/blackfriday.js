let p = Number(window.prompt("Informe o preço do produto"));
        if (isNaN(p)) {
            alert("Valor inváldo");
        } else {
            let d = (p * 0.15);
            let v = (p - d)
           window.alert(
            `Preço: R$${p.toFixed(2)}
            Desconto: R$${d.toFixed(2)}
            Final: R$${v.toFixed(2)}
        `);
        }