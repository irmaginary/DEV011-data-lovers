import { filtrarData} from "./dataFunctions.js";
import { renderItems } from "./view.js";
import { sortData } from "./dataFunctions.js";
import { computeStat } from "./dataFunctions.js";

import data from "./data/rickandmorty/rickandmorty.js";

//Data ordenada
const selectsort = document.getElementById("select-sort");
function mostrarinicial(){
  const dataordenada = sortData(data.results, 'name',selectsort.value );
  showItems(dataordenada)
}

//Limpiar los filtros y mostrar el valor/nombre de los filtros
function limpiar() { 
  document.body.querySelector("[name='especie']").value="todos"
  document.getElementById("select-sort").value="asc"
  mostrarinicial(); 
}

//Ordenar datos sobre la data filtrada
const selectfilter = document.body.querySelector("[name='especie']")
  
selectsort.addEventListener("change", function() {
  const resfiltrados = filtrarData(data.results, selectfilter.value)
  const actualizarresultados = sortData(resfiltrados, 'name', selectsort.value);
  showItems(actualizarresultados)//COnvierte en html y se agrega al DOM
} )

//Mostrar resultados de la data filtrada
function showItems(results){ //Convierte los resultados en li y los agrega al DOM como contenido del ul
  const res = renderItems(results); //convierte resultados en li
  const ul = document.body.querySelector("#root ul"); //busca el contenido por los li calculados
  ul.innerHTML = res.join(""); //reemplaza los resultados
}
mostrarinicial()

//Filtrar datos por especie
selectfilter.addEventListener("change", function (){
  const especie = selectfilter.value
  const result = filtrarData(data.results,especie)
  showItems(result);
})

//Llama al evento del botón reset
const botonReset = document.body.querySelector(".reset")
botonReset.addEventListener("click", limpiar);

//Llama al evento del botón Random Facts
const randomFacts = document.querySelector(".random")
randomFacts.addEventListener("click", function() {
  const datagender = computeStat(data.results);
  alert("¡Has seleccionado un dato random! En esta base de datos: " + datagender.male + " de los personajes son masculinos, " + datagender.female + " de los personajes son femeninos y " + datagender.unknown + " no tienen un género definido");

//const datagender = computeStat(data.results);
//console.log("personajes masculinos:", datagender.male);
//console.log("personajes femeninos:", datagender.female);
//console.log("genero desconocido:", datagender.unknown)
});








