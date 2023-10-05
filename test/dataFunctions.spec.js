//import { anotherExample } from "../src/dataFunctions.js";
import { data as fakeData } from "./data.js";
import { filtrarData } from "../src/dataFunctions.js";
import { sortData } from "../src/dataFunctions.js";

//console.log(fakeData);

describe("filtrarData", () => {
  it('Devuelve todos los datos si se especifica "All"', () => {
    const especie = "All";
    const resultado = filtrarData(fakeData, especie);
    expect(resultado).toEqual(fakeData);
  });

  it("Devuelve sólo los datos de la especie seleccionada", () => {
    const especie = "human";
    const resultado = filtrarData(fakeData, especie);

    const resultadoesperado = [
      { id: 1, species: "human" },
      { id: 3, species: "human" },
    ];
    expect(resultado).toBe(resultadoesperado);
  });

  it("Devuelve un array vacío si la especie seleccionada no existe en los datos", () => {
    const especie = "perro"; // Una especie que no está en los datos
    const resultado = filtrarData(fakeData, especie);
    expect(resultado).toEqual([]);
  });
});

//Caso de pueba 1: orden ascendente
describe("sortData", () => {
  it('Orden ascendente', () => {

    const sortBy = 'nombre';
    const sortOrder = 'asc';
    const result = sortData(fakeData, sortBy, sortOrder);
    // Verifica que la función devuelva un arreglo ordenado ascendente
    expect(result).toEqual([
      { id: 2, nombre: "Morty Smith" },
      { id: 1, nombre: "Rick Sanchez" },
      { id: 3, nombre: "Summer Smith" },
    ]);
  });
  // Caso de prueba 2: Orden descendente (desc)
  it('Orden descendente', () => {
  
    const sortBy = 'nombre';
    const sortOrder = 'desc';
    const result = sortData(fakeData, sortBy, sortOrder);
    // Verifica que la función devuelva un arreglo ordenado descendente
    expect(result).toEqual([
      { id: 3, nombre: "Summer Smith" },
      { id: 1, nombre: "Rick Sanchez" },
      { id: 2, nombre: "Morty Smith" },
    ]);
  });
});
 








//describe("anotherExample", () => {
//it("returns `anotherExample`", () => {
//expect(anotherExample()).toBe("OMG");
//});
//});
