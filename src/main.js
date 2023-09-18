import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

// import data from './data/lol/lol.js';

import data from './data/rickandmorty/rickandmorty.js';
const res = renderItems(data.results)
console.log("res: ", res)

const ul = document.body.querySelector("#root ul");
ul.innerHTML = res.join("");
//reemplaza la información por el resultado, uniendo todos los arreglos.

//console.log(example, renderItems, data);
