//Ejemplos

// const newMessage = "Fernando";

// const getNumber = (a, b) => {
//   return a + b;
// };

import PropTypes from "prop-types";

//functional component
export const FirstApp = ({ title, subTitle, name }) => {
  //console.log(props);

  return (
    <>
      {/* <h1>{getNumber(1, 7)}</h1> */}
      <h1>{title}</h1>
      <p>{subTitle}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};

FirstApp.defaultProps = {
  title: "No hay ningún título",
  subTitle: "No hay subtítulo",
  name: "Fernando Herrera",
};
