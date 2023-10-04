//import { anotherExample } from "../src/dataFunctions.js";
import { data as fakeData } from "./data.js";
import { filtrarData } from "./src/dataFunctions.js";

console.log(fakeData);

describe("filtrarData", () => {
  it('Devuelve todos los datos si se especifica "All"', () => {
    const especie = "All";
    const resultado = filtrarData(data, especie);
    expect(resultado).toEqual(data);
  });

  it("Devuelve sólo los datos de la especie seleccionada", () => {
    const especie = "Human";
    const resultado = filtrarData(data, especie);

    const resultadoesperado = [
      { id: 1, species: "human" },
      { id: 3, species: "human" },
    ];
    expect(resultado).toEqual(resultadoesperado);
  });

  it("Devuelve un array vacío si la especie seleccionada no existe en los datos", () => {
    const especie = "perro"; // Una especie que no está en los datos
    const resultado = filtrarData(data, especie);
    expect(resultado).toEqual([]);
  });
});

//describe("anotherExample", () => {
  //it("returns `anotherExample`", () => {
    //expect(anotherExample()).toBe("OMG");
  //});
//});
