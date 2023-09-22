// Función filtrar por especie

export function filtrarData(data,especie){
  const  result = data.filter(function(item) {return item.species === especie})
  return result;
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



