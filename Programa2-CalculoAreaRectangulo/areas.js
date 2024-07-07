function calcularRectangulo() {
    const base = parseFloat(document.getElementById('rectBase').value);
    const altura = parseFloat(document.getElementById('rectAltura').value);

    const area = base * altura;
    const perimetro = 2 * (base + altura);

    document.getElementById('resultados').innerHTML += `
        <h3>Rectángulo</h3>
        <p>Área: ${area.toFixed(2)}</p>
        <p>Perímetro: ${perimetro.toFixed(2)}</p>
    `;
}