const persona = {
  nombre: "Tony",
  apellido: "Stark",
  edad: 45,
  direccion: {
    ciudad: "New York",
    zio: 55334467,
    lat: 14.3232,
    long: 34.92323231,
  },
};

//console.table(persona);
console.log(persona);

//asignación de referencia, posición de memoria
//NO HACERLA
//const persona2 = persona;

//Se crea un clon del objeto
const persona2 = { ...persona };
console.log(persona2);
