//Funciones en JS
const saludar = function (nombre) {
  return `Hola, ${nombre}`;
};

//FUNCIONES DE FLECHA
const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
};

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;

//console.log(saludar("Goku"));
console.log(saludar2("Vegueta"));
console.log(saludar3("Pikolo"));
console.log(saludar4());

const getUser = () => ({
  uid: "ABC123",
  username: "El_papi1502",
});

const user = getUser();
console.log(user);

//TAREA
//1. Transformar a una función de Flecha
//2. Tiene que retornar un objeto implicito
//3. Pruebas

/*function getUsuarioActivo(nombre) {
  return {
    uid: "ABC567",
    username: nombre,
  };
}*/

const getUsuarioActivo = (nombre) => ({
  uid: "ABC567",
  username: nombre,
});

const usuarioActivo = getUsuarioActivo("Fernando");
console.log(usuarioActivo);
