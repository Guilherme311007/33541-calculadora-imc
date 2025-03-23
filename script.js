// script.js
document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert('Por favor, insira valores válidos para peso e altura.');
        return;
    }
    
    const imc = peso / (altura * altura);
    const categoria = getCategoriaIMC(imc);
    
    document.getElementById('imcResultado').textContent = `Seu IMC é: ${imc.toFixed(2)}`;
    document.getElementById('categoriaIMC').textContent = `Categoria: ${categoria}`;
    document.getElementById('resultado').style.display = 'block';
});

function getCategoriaIMC(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        return 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
        return 'Sobrepeso';
    } else if (imc >= 30 && imc < 34.9) {
        return 'Obesidade grau 1';
    } else if (imc >= 35 && imc < 39.9) {
        return 'Obesidade grau 2';
    } else {
        return 'Obesidade grau 3';
    }
}
