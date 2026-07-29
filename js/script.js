console.log("Guia Digital carregado.");
function copiar(id){

const texto=document.getElementById(id).innerText;

navigator.clipboard.writeText(texto);

alert("Copiado!");
}
