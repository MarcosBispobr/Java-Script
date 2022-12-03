
let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
let name = document.getElementById("name").value;
let lastName = document.getElementById("lastName").value;
let usuario = {
    'nome': name,
    'sobrenome': lastName
}
validarOpcao(usuario)
})

function validarOpcao(usuario) {
    if(usuario.nome && usuario.sobrenome){
       return document.getElementById("mensagem").innerHTML = "Cadastro completo";
    }
    if(usuario.nome){
        return document.getElementById("mensagem").innerHTML = "Sobrenome não digitado"
    }
    if(usuario.sobrenome){
        return document.getElementById("mensagem").innerHTML = "Nome não digitado"
    }
    return document.getElementById("mensagem").innerHTML = "Digite um nome e um sobrenome!";
}
