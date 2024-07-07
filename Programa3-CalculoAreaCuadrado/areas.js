function calcularCuadrado() {
    const lado = parseFloat(document.getElementById('ladoCuadrado').value);

    const area = lado * lado;
    const perimetro = 4 * lado;

    document.getElementById('resultados').innerHTML += `
        <h3>Cuadrado</h3>
        <p>Área: ${area.toFixed(2)}</p>
        <p>Perímetro: ${perimetro.toFixed(2)}</p>
    `;
}