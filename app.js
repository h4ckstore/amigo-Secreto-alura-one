// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.
//Crear un array para almacenar los nombres: Inicia declarando una variable de tipo array, que almacenará los nombres de los amigos ingresados. Ejemplo:  
let amigos = [];
//https://www.freecodecamp.org/espanol/news/el-manual-de-arreglos-en-javascript/  lectura de arrays y utilizacion de los mismos
//capturar el valor del campo de entrada
function agregarAmigo()  {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();


//validar la entrada
    if (nombre === "") {
        alert("por favor ingrese nombre");
        return; //validacion para asegurarse que el campo no este vacio 
    }
//actualizar el array de amigos 
    amigos.push(nombre);
//limpiar el campo de entrada 

    input.value = '';
//lista actualizada amigos
    mostrarAmigos(); 
}
function mostrarAmigos() {
    //obtener el elemento de la lista
    const lista = document.getElementById('listaAmigos');
//limpiar la lista existente
    lista.innerHTML = "";
//iterar sobre arreglo  bucle for / crear elementos de lista
    for (let i = 0; i < amigos.length; i++) {
    //crear nuevo elemento
        const li = document.createElement('li');
        li.textContent = amigos[i];
    //crear elemento de lista
        lista.appendChild(li);
}  

}

//sortear amigos 
function sortearAmigo() {
    //validar que haya amigos 
    if (amigos.length === 0) {
        alert("No hay amigos para sortear");
        //salir de la funcion no hay amigos
        return;

    }
    //generr un indice aleatorio math 
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
//obtener el nombre sorteado 
    const amigoSorteado = amigos[indiceAleatorio];
//mostrar el resultado 
    const resultado = document.getElementById('resultado'); 
    resultado.innerHTML = `el amigo secretro es: ${amigoSorteado}`;
}

