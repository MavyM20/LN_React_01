import { getHeroeById } from "./bases/08-imp-exp";

//Promesas

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     //Tarea
//     //1. Importar el 08-imp-exp.js
//     const heroe = getHeroeById(2);
//     //console.log("2 segundos después");
//     resolve(heroe);
//     //reject("No se pudo encontrar el héroe");
//   }, 2000);
// });

// promesa
//   .then((heroe) => {
//     console.log("heroe", heroe);
//   })
//   .catch((err) => console.warn(err));

const getHeroeByIDAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id);
      if (heroe === undefined) {
        reject("No se pudo encontrar el héroe");
      } else {
        resolve(heroe);
      }
    }, 2000);
  });
};

getHeroeByIDAsync(3).then(console.log).catch(console.warn);
