function calcularCirculo() {
    const radio = parseFloat(document.getElementById('radio').value);

    const area = Math.PI * radio * radio;
    const perimetro = 2 * Math.PI * radio;

    document.getElementById('resultados').innerHTML += `
        <h3>Círculo</h3>
        <p>Área: ${area.toFixed(2)}</p>
        <p>Perímetro: ${perimetro.toFixed(2)}</p>
    `;
}