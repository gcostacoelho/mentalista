var numSec = parseInt(Math.random() * 10);
var saida = document.getElementById('resultado');
var tentativa = 3;

function chutar(){
    var numDigitado = document.getElementById('valor').value;
    if (numDigitado == numSec){
        saida.innerHTML = 'Parabéns, você acertou o número secreto';
    }
    else if (numDigitado < numSec){
        tentativa = tentativa -1;
        dica1 = 'O número digitado é menor que o número secreto... Você tem ' + tentativa + ' tentativas';
        saida.innerHTML = dica1;
    }
    else if (numDigitado > numSec){
        tentativa = tentativa -1;
        dica2 = 'O número digitado é maior que o número secreto... Você tem ' + tentativa + ' tentativas';
        saida.innerHTML = dica2;
    }
    if (tentativa == 0){
        document.getElementById('btnChute').disabled = true;
        revelaNum = 'Que pena você zerou suas tentativas... O número secreto era o ' + numSec
        saida.innerHTML = revelaNum; 
    }
}