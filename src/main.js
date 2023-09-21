import { filtrarData} from "./dataFunctions.js";
import { renderItems } from "./view.js";
import { sortData } from "./dataFunctions.js";

// import data from './data/lol/lol.js';

//RENDERITEMS de la lista
import data from "./data/rickandmorty/rickandmorty.js";


const ordenarresultados = sortData(data.results, 'name', 'asc');
console.log(ordenarresultados);

const selectsort = document.getElementById("select-sort");
selectsort.addEventListener("change", function() {
  //console.log("Cambio");
  const actualizarresultados = sortData(data.results, 'name', selectsort.value);
  showItems(actualizarresultados)//COnvierte en html y se agrega al DOM
  //console.log(actualizarresultados);
 // return renderItems(actualizarresultados);
} )

function showItems(results){ //Convierte los resultados en li y los agrega al DOM como contenido del ul
  const res = renderItems(results); //convierte resultados en li
  const ul = document.body.querySelector("#root ul"); //busca el contenido por los li calculados
  ul.innerHTML = res.join(""); //reemplaza los resultados
}
showItems(data.results)//muestra todos los datos por defecto sin ningún orden en específico

const selectfilter = document.body.querySelector("[name='especie']")
selectfilter.addEventListener("change", function (){
  const especie = selectfilter.value
  const result = filtrarData(data.results,especie)
  showItems(result);
})



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






