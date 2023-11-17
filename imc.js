function calculateIMC() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
  
    if (weight && height) {
      var bmi = weight / (height * height);
      displayResult(bmi);
      displayWeightStatus(bmi);
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }
  
  function displayResult(bmi) {
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = 'Seu IMC é: ' + bmi.toFixed(2);
  }
  
  function displayWeightStatus(bmi) {
    var statusElement = document.getElementById('weightStatus');
    var weightStatus;
  
    if (bmi < 18.5) {
      weightStatus = 'Abaixo do peso';
    } else if (bmi >= 18.5 && bmi < 25) {
      weightStatus = 'Peso normal';
    } else if (bmi >= 25 && bmi < 30) {
      weightStatus = 'Sobrepeso';
    } else {
      weightStatus = 'Obesidade';
    }
  
    statusElement.innerHTML = 'voce esta com o : ' + weightStatus;
  }
  