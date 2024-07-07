function calcularTriangulo() {
    const base = parseFloat(document.getElementById('base').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const lado1 = parseFloat(document.getElementById('lado1').value);
    const lado2 = parseFloat(document.getElementById('lado2').value);
    const lado3 = parseFloat(document.getElementById('lado3').value);

    const area = (base * altura) / 2;
    const perimetro = lado1 + lado2 + lado3;

    document.getElementById('resultados').innerHTML = `
        <h3>Triángulo</h3>
        <p>Área: ${area.toFixed(2)}</p>
        <p>Perímetro: ${perimetro.toFixed(2)}</p>
    `;
}