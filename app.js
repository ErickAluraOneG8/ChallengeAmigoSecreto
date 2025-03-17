/*
Participante en programación G8-ONE.

Practicando lógica de Programación:
Challenge amigo secreto.

Realizado por: Erick Rodolfo

Deadline: 18 de marzo 2025
*/

//arreglo para almacenar amigos
let arrayAmigos = [];

//Función para agregar amigos a la lista
function agregarAmigo(){
  const amigoInput = document.getElementById('amigo');
  const nombreAmigo = amigoInput.value.trim();
  //Condiciones para ingresar datos
  if(!nombreAmigo || arrayAmigos.includes(nombreAmigo)){
    alert("Ingrese un nombre");
  } else if(/\d/.test(nombreAmigo)){
    alert("El nombre no puede contener números");
  } else {
    //console.log(arrayAmigos); //quitar comentario si se quiere ver el array antes de push
    arrayAmigos.push(nombreAmigo);
    mostrarAmigos();
    amigoInput.value = '';
    //console.log(arrayAmigos); //quitar comentario si se quiere ver el array después de push
  }
};

// Función para mostrar la lista de amigos
function mostrarAmigos(){
  const listaAmigos = document.getElementById('listaAmigos');
  listaAmigos.innerHTML = '';
  
  //console.log('Lista de amigos actualizada:', arrayAmigos); //quitar comentario para ver los amigos que están en el array

  arrayAmigos.forEach(amigo =>{
    const li = document.createElement('li');
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });
};

//Función para sortear amigo secreto
function sortearAmigo(){
  //console.log('Amigos antes del sorteo:', arrayAmigos); //quitar comentario para ver los amigos antes de realizar el sorteo
  //Condición para sortear más de dos amigos:
  if (arrayAmigos.length < 2){
    alert("Por favor, agregue al menos dos amigos");
    return;
  }
  //Otra lista para el sorteo y uso de "spread operator"
  let amigosSorteados = [...arrayAmigos];
  //console.log('Lista de amigos sorteados (copia):', amigosSorteados); //quitar comentario para ver la lista duplicada del sorteo
  const index = Math.floor(Math.random() * amigosSorteados.length);
  const amigoSecreto = amigosSorteados.splice(index, 1)[0];
  /*
  console.log('Amigo secreto sorteado:', amigoSecreto);  //quitar comentario para ver quién ha sido sorteado
  console.log('Lista de amigos sorteados después de remover:', amigosSorteados);  //quitar comentario para ver
  //cómo quedó la lista de amigos sorteados
  */
  //se invoca a la función mostrarResultados
  mostrarResultados(amigoSecreto);
};

//Función para mostrar resultado
function mostrarResultados(amigoSecreto){
  const resultadoList = document.getElementById('resultado');
  resultadoList.innerHTML = '';
  const li=document.createElement('li');
  //li.textContent = amigoSecreto;
  li.textContent = `El amigo secreto sorteado es: ${amigoSecreto}`;
  resultadoList.appendChild(li);
  /*
  console.log('Resultado mostrado:', `El amigo secreto sorteado es ${amigoSecreto}`); //quitar comentario para ver
  //cómo quedó la lista de amigos sorteados en el mensaje final 
  */
};