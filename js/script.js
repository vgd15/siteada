document.getElementById("botaoenviar").addEventListener("click", validaFormulario)

const inputName = document.getElementById("nome");
const inputEmail = document.getElementById("email");

function validaFormulario(){ 
  
  nome = inputName.velue;
  email = inputEmail.velue;
  
  if(nome.length < 1 || email.length < 1) {
    alert("Por favor, preencha os campos nome e email.")
  }else{
    alert("Prontinho! você receberá as novidades por email!")}
}