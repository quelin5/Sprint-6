import React, { Fragment, useState } from "react";
import Escena from "./components/escena/Escena";
import datos from "./datos";
import Boto from "./components/Boto";
import WelcomeView from "./views/WelcomeView";
import styled from "@emotion/styled";
import image0 from "./img/1.jpg";
import image1 from "./img/2.jpg";
import image2 from "./img/3.jpg";
import image3 from "./img/4.jpg";

const Div = styled.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background: url(${(props) => props.image});
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
    if (selectedScene === 0) {
      return image0;
    } else if (selectedScene === 1) {
      return image1;
    } else if (selectedScene === 2) {
      return image2;
    } else if (selectedScene === 3) {
      return image3;
    }
  };

  return (
    <Fragment>
      {/* RENDERIZADO CONDICIONAL */}

      {isLandingPage ? (
        <WelcomeView setPageVisitedBefore={setIsLandingPage} />
      ) : (
        <Div image={retrieveImage()}>
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
