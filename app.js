// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
  let inputAmigo = document.getElementById("amigo");
  let amigo = inputAmigo.value;
  
  if (amigo === "") {
    alert("Por favor, ingresa el nombre de un amigo.");
    return;
  }
  
  amigos.push(amigo);
  
  mostrarAmigos();
  
  inputAmigo.value = "";
}

function mostrarAmigos() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  
  for (let i = 0; i < amigos.length; i++) {
    let amigo = document.createElement('li');
    amigo.textContent = amigos[i];
    lista.appendChild(amigo);
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("¡No hay amigos para sortear! Agrega algunos nombres primero.");
    return;
  }
  
  let resultado = document.getElementById("resultado");
  
  let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  
  let amigoSorteado = amigos[indiceAleatorio];
  
  resultado.innerHTML = `El amigo secreto sorteado es: <strong>${amigoSorteado}</strong>`;
}

function reiniciar() {
  amigos = [];
  let lista = document.getElementById("listaAmigos");
  let resultado = document.getElementById("resultado");
  
  lista.innerHTML = "";
  resultado.innerHTML = "";
}
