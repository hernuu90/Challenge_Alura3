const curriculumVitae = document.querySelector("#curriculumVitae");
const demoUno = document.querySelector("#demoUno");
const demoDos = document.querySelector("#demoDos");
const gitHub = document.querySelector("#gitHub");
const linkedIn = document.querySelector("#linkedIn");
const repositorioUno = document.querySelector("#repositorioUno");
const repositorioDos = document.querySelector("#repositorioDos");

curriculumVitae.addEventListener("click", function(){
    abrirNuevaPagina("./EjemploCV.pdf");
});

demoUno.addEventListener("click", function(){
    abrirNuevaPagina("https://hernuu90.github.io/Challenge_Alura_1");
});

demoDos.addEventListener("click", function(){
    abrirNuevaPagina("https://hernuu90.github.io/Alura_Challenge_2.1");
});

gitHub.addEventListener("click", function(){
    abrirNuevaPagina("https://github.com/hernuu90");
});

linkedIn.addEventListener("click", function(){
    abrirNuevaPagina("https://www.linkedin.com/in/hernan-urquiza");
});

repositorioUno.addEventListener("click", function(){
   abrirNuevaPagina("https://github.com/hernuu90/Challenge_Alura_1");
});

repositorioDos.addEventListener("click", function(){
    abrirNuevaPagina("https://github.com/hernuu90/Alura_Challenge_2.1");
}); 

function abrirNuevaPagina(url){
    let nuevaPagina = window.open(url, '_blank');
    nuevaPagina.focus();
}

