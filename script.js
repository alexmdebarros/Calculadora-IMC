//associando açoes com o click do botão
document.querySelector('#botao').addEventListener('click', function () {
    event.preventDefault();
    //lê os valores que o usuario insere
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;
    //calculo do imc peso dividido pela altura ao quadrado ou altura x altura
    var imc = peso / (altura * altura);
    //escreve o resultado do imc com duas casas decimais
    document.getElementById('imc').innerHTML = imc.toFixed(2);

    //verifica a categoria do usuario e escreve na tela
    var categoria;
    if (imc < 18.5) {
        categoria = 'Você está abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        categoria = 'Você está na faixa de peso normal';
    } else if (imc >= 25 && imc < 30) {
        categoria = 'Você está com sobrepeso';
    } else if (imc >= 30 && imc < 35) {
        categoria = 'Você está com obesidade grau I';
    } else if (imc >= 35 && imc < 40) {
        categoria = 'Você está com obesidade grau II';
    } else  {
        categoria = 'Você está com obesidade grau III ou mórbida';
    }
    document.getElementById('categoriaimc').innerHTML = categoria;

    //exibe a div de resultado
    document.querySelector('.divresultado').style.display = 'block';
    document.querySelector('.categoriaimc').style.display = 'block';

});