let m1 = Number(window.prompt("Informe a largura do terreno (m)"));
            if (isNaN(m1)) {
                alert("Valor inválido");
            } else {
            let m2 = Number(window.prompt("Informe o comprimento do terreno (m)"));
            if (isNaN(m2)) {
                alert("Valor inválido");
            } else {
            let at = (m1 * m2)
            window.alert(`A área total do terreno será de: ${at}(m²)`)
            }
        }