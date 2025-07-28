//Desestructuración
//Asignación Desestructurante
const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Ironman",
  // rango: "Soldado",
};

// const { nombre, edad, clave } = persona; //extrae lo que está dento de las llaves del objeto

console.log(nombre);
// console.log(persona.edad);
// console.log(persona.clave);

const useContex = ({ nombre, edad, rango = "Capitán" }) => {
  // console.log(edad, nombre, rango);
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.1232,
      lng: -12.3232,
    },
  };
};

const {
  nombreClave,
  anios,
  latlng: { lat, lng },
} = useContex(persona);

console.log(nombreClave, anios);
console.log(lat, lng);
