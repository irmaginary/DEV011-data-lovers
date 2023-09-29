import { filtrarData} from "./dataFunctions.js";
import { renderItems } from "./view.js";
import { sortData } from "./dataFunctions.js";
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
  const root = document.body.querySelector("#root"); //busca el contenido por los li calculados
  root.innerHTML = res; //reemplaza los resultados
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



//const selectfilter = document.getElementById("select-filter");

//EVENT LISTENER para Ordenar resultados alfabéticamemte
//const selectOrden = document.getElementById("select-sort");
//selectOrden.addEventListener("click", function () {
//    const ordenSeleccionado = selectOrden.value;

//res.sort ((a,b) => {
//    const nameA = a.textContent.toUpperCase();
//  const nameB =b .textContent.toUpperCase();
//    if (ordenSeleccionado === "asc") {
//  if (nameA < nameB) return -1;
//  if (nameA > nameB) return 1;
//} else if (ordenSeleccionado === "desc") {
  //  if (nameA > nameB) return -1;
    //if (nameA < nameB) return 1;
//}
//    return 0;

//});

//const ul = document.body.querySelector("#root ul");
//ul.innerHTML = res.map(item => item.outerHTML).join(""); //reemplaza la información por el resultado, uniendo todos los arreglos.
//});

//console.log(example, renderItems, data);






