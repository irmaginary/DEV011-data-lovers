import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

// import data from './data/lol/lol.js';
<<<<<<< HEAD
//import data from './data/pokemon/pokemon.js';
 import data from './data/rickandmorty/rickandmorty.js';

console.log(example, renderItems, data);


=======

import data from './data/rickandmorty/rickandmorty.js';
const res = renderItems(data.results)
console.log("res: ", res)

const ul = document.body.querySelector("#root ul");
ul.innerHTML = res.join("");
//reemplaza la información por el resultado, uniendo todos los arreglos.

//console.log(example, renderItems, data);
>>>>>>> 9b674b5dc50bd2be51692ff16c02bd563a1c2752
