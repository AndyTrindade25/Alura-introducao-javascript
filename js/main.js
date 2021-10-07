var titulo = document.querySelector(".titulo");
titulo.textContent = "Anderson Trindade";

var pacientes = document.querySelectorAll(".paciente");


for(var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i]

    console.log(pacientes[i]);

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    console.log(peso);

    var tdAltura = paciente.querySelector(".info-altura");
    altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValida = true;


    if (peso <= 0 || peso >= 250) {
        console.log("Peso inválido");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválida";
        paciente.classList.add("paciente-invalido");

    }

    if (altura <= 0 || altura >= 3){
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add(".paciente-invalido");
    }

    if (alturaEhValida &&  pesoEhValido){
        var imc = peso / (altura*altura);
        tdImc.textContent = imc.toFixed(2);
    }
}


var botaoAdcionar = document.querySelector("#adicionar-paciente");
botaoAdcionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    console.log(nome);
    console.log(peso);
    console.log(altura);
    console.log(gordura);
});
