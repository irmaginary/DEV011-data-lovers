// Función filtrar por especie
export function filtrarData(data, especie) {
  if (especie === "todos") {
    // especie === ""
    return data; // Si especie es null, undefined o una cadena vacía, devuelve data sin filtrar.
  }

  const result = data.filter(function (item) {
    return item.species === especie;
  });

  return result;
}

// Función SORT-DATA
export function sortData(data, sortBy, sortOrder) {
  //console.log(sortOrder);
  if (sortOrder === "asc") {
    return data.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
  } else if (sortOrder === "desc") {
    return data.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
  } else {
    throw new Error('El sortOrder debe ser "asc" o "desc".');
  }
}

export function computeStat(data) {
  const initialCounts = {
    male: 0,
    female: 0,
    unknown: 0,
  };

  const datagender = data.reduce((counts, item) => {
    const word = item.gender.toLowerCase();

    if (word === "male") {
      counts.male++;
    } else if (word === "female") {
      counts.female++;
    } else if (word === "unknown") {
      counts.unknown++;
    }

    return counts;
  }, initialCounts);

  // Convertir los valores a tipo "number" usando parseInt
  datagender.male = parseInt(datagender.male);
  datagender.female = parseInt(datagender.female);
  datagender.unknown = parseInt(datagender.unknown);

  return datagender;
}
//Función datos random (estadística)
//export function computeStat(data) {
//const sum = data.reduce((a, b) => a + b, 0);
//const average = sum / data.lenght;
//const max = data.reduce((a, b) => Math.max(a, b), -Infinity);
//const min = data.reduce((a, b) => Math.min(a, b), Infinity);

//console.log(sum);
//return {
//sum: sum,
//average: average,
//max: max,
//min: min,
//};
//}

/*export function computeStat(data) {
  let malecount = 0;
  let femcount = 0;
  let unkcount = 0;

  for (let i = 0; i < data.length; i++) {
    const word = data[i].gender.toLowerCase();
    if (word === "male") {
      malecount++;
    } if (word === "female") {
      femcount++;
    } else if (word === "unknown") {
      unkcount++;
    }
  }
  const datagender = {
    male: malecount,
    female: femcount,
    unknown: unkcount,

  };
  return datagender
  //console.log(datagender);
  
//function calculateprom(a, b) {
  //const prom = data.reduce(a, b) => (a / b) * 100;

//}

  
}*/
/*export function computeStat(data) {
  let malecount = 0;
  let femcount = 0;
  let unkcount = 0;

  data.forEach((item) => {
    const word = item.gender.toLowerCase();
    if (word === "male") {
      malecount++;
    } else if (word === "female") {
      femcount++;
    } else if (word === "unknown") {
      unkcount++;
    }
  });

  const datagender = {
    male: malecount,
    female: femcount,
    unknown: unkcount,
  };

  return datagender;
}*/
/*export function computeStat(data) {
  const initialCounts = {
    male: 0,
    female: 0,
    unknown: 0,
  };

  const datagender = data.reduce((counts, item) => {
    const word = item.gender.toLowerCase();

    if (word === "male") {
      counts.male++;
    } else if (word === "female") {
      counts.female++;
    } else if (word === "unknown") {
      counts.unknown++;
    }

    return counts;
  }, initialCounts);

  return datagender;
}*/
