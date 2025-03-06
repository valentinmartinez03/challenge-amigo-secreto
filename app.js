// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []

function agregarAmigo(){
    let nombre = document.getElementById("amigo").value;
    console.log(nombre);
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
    } else if (nombre === Number){
        alert("Por favor, inserte un nombre valido.")
    } else if(nombre in amigos){
        alert("Este nombre ya ha sido ingresado.")
    }
    else {
        amigos.push(nombre);
        document.getElementById("amigo").value = "";
    }
}