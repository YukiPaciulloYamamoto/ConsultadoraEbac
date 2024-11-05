const form = document.getElementById("form-numeros"); // Constante do formulario
const numeroA = document.getElementById("numeroA"); // Constante do numeroA
const numeroB = document.getElementById("numeroB"); // Constante do numeroB

// Removendo ação padrão de atualização de página após dar submit.
form.addEventListener('submit', function(e) {
    e.preventDefault();

    function compararNumeros() {
        const inputA = parseInt(numeroA.value); // Converte para número inteiro. (Sem isso nao funciona)
        const inputB = parseInt(numeroB.value); // Converte para número inteiro. (Sem isso nao funciona)

        if (isNaN(inputA) && isNaN(inputB)) { //Caso não seja um número.
        }
        if (inputA > inputB) { // Caso o númeroA for maior que o númeroB.
            return "resultadoMaior";
        } else if (inputA < inputB) { //Caso o númeroA for menor que o númeroB.
            return "resultadoMenor";
        } else {
            return "resultadoIgual"; // Caso o numero for igual (No caso se ele nao se encaixar em nenhuma das 2 anteriores)
        }
    }

    const resultado = compararNumeros(); // Criando uma mensagem para cada situação.
    const mensagemMaior = `O número <b>${numeroA.value}</b> é maior que o número <b>${numeroB.value}</b>`; //Mensagem caso A > B
    const mensagemMenor = `O número <b>${numeroA.value}</b> é menor que o número <b>${numeroB.value}</b>`; //Mensagem caso A < B
    const mensagemIgual = `O número <b>${numeroA.value}</b> é igual ao número <b>${numeroB.value}</b>`; // Mensagem caso A == B
    const mensagemContainer = document.querySelector('#mensagem'); // selecionando o ID presente no HTML
    
    if (resultado === "resultadoMaior") {  // Caso o númeroA for maior que o númeroB.
        mensagemContainer.innerHTML = mensagemMaior;
        mensagemContainer.style.display = 'block';
        mensagemContainer.classList.add('sucess-message');
        mensagemContainer.classList.remove('error-message');
    } else if (resultado === "resultadoMenor") { //Caso o númeroA for menor que o númeroB.
        mensagemContainer.innerHTML = mensagemMenor;
        mensagemContainer.style.display = 'block';
        mensagemContainer.classList.remove('sucess-message');
        mensagemContainer.classList.add('error-message');
    } else if (resultado === "resultadoIgual") { // Caso o dois números forem iguais. 
        mensagemContainer.innerHTML = mensagemIgual;
        mensagemContainer.style.display = 'block';
        mensagemContainer.classList.add('sucess-message');
        mensagemContainer.classList.remove('error-message');  
    }
});