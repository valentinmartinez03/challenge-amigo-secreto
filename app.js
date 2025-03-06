// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []

function agregarAmigo(){
    nombre = document.getElementById(`amigo`).value;
    console.log(nombre);
    if (nombre === "") {
        alert(`Por favor, inserte un nombre`);
    } else{
        amigos.push(nombre);
        nombre = "";
    }
}