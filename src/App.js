import React, {Fragment} from 'react';
import Escena from './components/escena/Escena';
import datos from './datos.json';
import Boto from './components/Boto';


function App() {

  return (
    <Fragment>
      <Boto type='submit'
      />
      
      {datos.map(dato => // Esto se ve muy feo! ??
        <Escena
        dato={dato}
        />
      )}
    </Fragment>
  );
}

export default App;
