import React from "react";
import ReactDOM from "react-dom/client"; //Herramienta para renderizar
//import { HelloWorldApp } from "./HelloWorldApp";
// import { FirstApp } from "./FirstApp";
import { CounterApp } from "./CounterApp";

//Forma de renderizar el componente
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <HelloWorldApp />
//   </React.StrictMode>
// );

import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterApp value={10} />
  </React.StrictMode>
);
