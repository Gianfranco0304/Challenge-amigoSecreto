<h1 align="center"> Challenge amigo secreto </h1>
<img align="center" width="450" height="277" alt="amigo-secreto" src="https://github.com/user-attachments/assets/ac9d41de-24d9-46e5-9613-643fa9b8ecc4" />

<h2 aling = "center" Challenge terminado!  </h2>


Cómo funciona el código
let amigos = [];: Se crea una lista vacía llamada amigos para guardar los nombres.

agregarAmigo(): Cuando el usuario escribe un nombre y presiona el botón "Añadir", esta función toma el nombre, lo agrega a la lista amigos y luego llama a la función mostrarAmigos() para actualizar lo que se ve en la pantalla.

mostrarAmigos(): Esta función va al HTML, encuentra la lista visual de amigos y la actualiza para que se muestren todos los nombres que están en el array amigos. Antes de agregar los nuevos, limpia la lista para evitar que aparezcan nombres repetidos.

sortearAmigo(): Al presionar el botón "Sortear", esta función selecciona un nombre al azar de la lista amigos. Para esto, usa un cálculo matemático que elige un número de forma aleatoria, lo usa para encontrar un nombre en la lista y finalmente muestra ese nombre en la pantalla.

reiniciar(): Si quieres empezar de nuevo, esta función borra todos los nombres del array amigos y también limpia la lista de la pantalla para que todo quede como al principio.
