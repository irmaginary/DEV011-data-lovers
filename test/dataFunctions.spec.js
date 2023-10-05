//import { anotherExample } from "../src/dataFunctions.js";
import { datarym as fakeData } from "./data.js";
import { filtrarData, computeStat, sortData } from "../src/dataFunctions.js";

//console.log(fakeData);

//Prueba dataFilter
describe("filtrarData", () => {
  it("Devuelve sólo los datos de la especie seleccionada", () => {
    const species = "Human";
    const resultadoesperado = filtrarData(fakeData, species);
    expect(resultadoesperado[0].species).toEqual("Human");
    expect(resultadoesperado[1].species).toEqual("Human");
  });

  it("Devuelve un array vacío si la especie seleccionada no existe en los datos", () => {
    const especie = "perro"; // Una especie que no está en los datos
    const resultado = filtrarData(fakeData, especie);
    expect(resultado).toEqual([]);
  });

  it("Devuelve la data original si se selecciona la opción'All'", () => {
    const species = "todos";
    const resultado = filtrarData(fakeData, species);
    expect(resultado).toEqual(fakeData);

  })
});

//Prueba sortOrder: orden ascendente (asc)
describe("sortData", () => {
  it("Muestra los resultados por nombre en orden ascendente (A-Z)", () => {
    const sortBy = "name";
    const sortOrder = "asc";
    const result = sortData(fakeData, sortBy, sortOrder);
    // Verifica que la función devuelva un arreglo ordenado ascendente
    expect(result[0].name).toEqual("Alien Googah");
    expect(result[1].name).toEqual("Morty Smith");
    expect(result[2].name).toEqual("Rick Sanchez");
    expect(result[3].name).toEqual("Summer Smith") 
  });
  // Prueba 2: Orden descendente (desc)
  it("Muestra los resultados por nombre en orden descendente (Z-A)", () => {
    const sortBy = "name";
    const sortOrder = "desc";
    const result = sortData(fakeData, sortBy, sortOrder);
    // Verifica que la función devuelva un arreglo ordenado descendente
    expect(result[3].name).toEqual("Alien Googah");
    expect(result[2].name).toEqual("Morty Smith");
    expect(result[1].name).toEqual("Rick Sanchez");
    expect(result[0].name).toEqual("Summer Smith") 
  });
});

//Prueba para computeStat
describe("computeStat", () => {
  it("Cuenta las veces que aparece cada género: male, female y unknown", () => {
    const result = computeStat(fakeData);
    expect(result).toEqual({
      male: 2,
      female: 1,
      unknown: 1,
    });
  });
  it("Debería manejar casos en minúsculas", () => {
    const result = computeStat(fakeData);
    expect(result).toEqual({
      male: 2,
      female: 1,
      unknown: 1,
    });
  });
});

//describe("anotherExample", () => {
//it("returns `anotherExample`", () => {
//expect(anotherExample()).toBe("OMG");
//});
//});
