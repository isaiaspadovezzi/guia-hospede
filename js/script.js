console.log("Guia Digital carregado.");
function copiar(id){

const texto=document.getElementById(id).innerText;

navigator.clipboard.writeText(texto);

alert("Copiado!");
}
const slides=document.querySelectorAll(".slide");

let atual=0;

mostrar();

function mostrar(){

slides.forEach(s=>s.classList.remove("active"));

slides[atual].classList.add("active");

}

proximo.onclick=()=>{

if(atual<slides.length-1){

atual++;

mostrar();

}

}

voltar.onclick=()=>{

if(atual>0){

atual--;

mostrar();

}

function abrirImagem(src){

document.getElementById("lightbox").style.display="flex";

document.getElementById("imagemGrande").src=src;

}

function fecharImagem(){

document.getElementById("lightbox").style.display="none";

}
