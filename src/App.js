import React, {Fragment, useState} from 'react';
import Escena from './components/escena/Escena';
import datos from './datos';
import Boto from './components/Boto';
import WelcomeView from './views/WelcomeView';


function App() {
  const [selectedScene, setSelectedScene] = useState(0);
  const [pageVisitedBefore, setPageVisitedBefore] = useState(false);


  /*  ESTO ES LO MISMO QUE LO DE ARRIBA: const [printHello, setPrintHello] = useState('')
        let printHelloVariable = ''
        const setPrintHelloVariable = (value) => {
          printHelloVariable = value
        }
  */
  
    const handleSetSelectedScene = (value) => {
      setSelectedScene((prev) => ((prev <=2 && prev >= 0) ? (prev + value) : value = 0))};

    // IF PRIMERA VEZ QUE SE VISITA LA PAGINA O NO

    return (
      <Fragment>

        {/* RENDERIZADO CONDICIONAL */} 

          {pageVisitedBefore ? 
          <>
          <Boto setSelectedScene={handleSetSelectedScene}/> 
            {datos.map((dato, index, imagen) => 
              <Escena
              isSelectedScene={index === selectedScene}
              selectedScene={selectedScene}
              dato={dato.txt}
              imagen={dato.img}
              />
            )}
            </>
          : <WelcomeView  setPageVisitedBefore={setPageVisitedBefore}/>}
        

      </Fragment>
    );
}

export default App;
