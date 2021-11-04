import React, { Fragment, useState } from "react";
import Escena from "./components/escena/Escena";
import datos from "./datos";
import Boto from "./components/Boto";
import WelcomeView from "./views/WelcomeView";
import styled from "@emotion/styled";

const Div = styled.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.image});
`;

function App() {
  const [selectedScene, setSelectedScene] = useState(0);
  const [isLandingPage, setIsLandingPage] = useState(true);

  /*  ESTO ES LO MISMO QUE LO DE ARRIBA: const [printHello, setPrintHello] = useState('')
        let printHelloVariable = ''
        const setPrintHelloVariable = (value) => {
          printHelloVariable = value
        }
  */

  const handleSetSelectedScene = (operator) => {
    if (operator === "-" && selectedScene > 0) {
      setSelectedScene(selectedScene - 1);
    }

    if (operator === "+" && selectedScene < 3) {
      setSelectedScene(selectedScene + 1);
    }
  };

  // IF PRIMERA VEZ QUE SE VISITA LA PAGINA O NO
  const retrieveImage = () => {
    return datos[selectedScene].img;
  };

  return (
    <Fragment>
      {/* RENDERIZADO CONDICIONAL */}

      {isLandingPage ? (
        <WelcomeView setPageVisitedBefore={setIsLandingPage} />
      ) : (
        <Div image={retrieveImage}>
          <Boto setSelectedScene={handleSetSelectedScene} />
          {datos.map((dato, index, imagen) => (
            <Escena
              isSelectedScene={index === selectedScene}
              selectedScene={selectedScene}
              dato={dato.txt}
              imagen={dato.img}
            />
          ))}
        </Div>
      )}
    </Fragment>
  );
}

export default App;
