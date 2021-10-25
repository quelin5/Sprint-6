import React, {Fragment, useState} from 'react';
import Escena from './components/escena/Escena';
import datos from './datos.json';
import Boto from './components/Boto';


function App() {
  const [selectedScene, setSelectedScene] = useState(0)
  const [printHello, setPrintHello] = useState('')


/*  ESTO ES LO MISMO QUE LO DE ARRIBA: const [printHello, setPrintHello] = useState('')

      let printHelloVariable = ''

      const setPrintHelloVariable = (value) => {
        printHelloVariable = value
      }
*/
  
    const handleSetSelectedScene = (value) => {
    setSelectedScene((prev) => prev + value)
  }



  return (
    <Fragment>
      <Boto setSelectedScene={handleSetSelectedScene} setPrintHello={setPrintHello}/>
      
      {datos.map((dato, index) => // Esto se ve muy feo! ??
        <Escena
        isSelectedScene={index === selectedScene}
        selectedScene={selectedScene}
        dato={dato}
        printHello={printHello}
        />
      )}
    </Fragment>
  );
}

export default App;
