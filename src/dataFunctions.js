// estas funciones son de ejemplo

export const example = () => {
  return "example";
};

export const anotherExample = () => {
  return [];
};

//SORT-DATA
export function sortData(data, sortBy, sortOrder) {
  console.log(sortOrder);
  if (sortOrder === "asc") {
    return data.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
  } else if (sortOrder === "desc") {
    return data.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
  } else {
    throw new Error('El sortOrder debe ser "asc" o "desc".');
  }
};

//FUNCION FILTRAR POR CATEGORIA "ESPECIE: HUMANO"
//Definir función filter data
//export const filterData= (data, filterBy, value) => {
//return data.filter(item => item[filterBy] === value);
//}
//Filtrar cataegoría "species"
//const filtercat= filterData (data, 'species', 'human');
//console.log(filtercat);
