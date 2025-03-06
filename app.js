// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []

function recorrerLista (){
    
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""
    i = 0;

    for(i in amigos){
        let elemento = document.createElement("li")
        elemento.innerHTML = amigos[i];
        lista.appendChild(elemento)
        console.log(amigos.length);
    }
}


function agregarAmigo(){
    
    let nombre = document.getElementById("amigo").value;
    
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
    } else if (amigos.includes(nombre)){
        alert("Este nombre ya ha sido ingresado.");
        document.getElementById("amigo").value = "";
    } else {
        amigos.push(nombre);
        document.getElementById("amigo").value = "";
        recorrerLista();
    }
}

function sortearAmigo(){
    
    let amigoSorteado = document.getElementById("resultado");

    if (amigos.length <= 1){
        alert("Debe agregar 2 nombres o mas para poder realizar el sorteo.")
    } else{
        amigoSorteado.innerHTML = `El amigo sorteado fue: ${amigos[Math.floor(Math.random()*(amigos.length)+1)]}`;
    }
}