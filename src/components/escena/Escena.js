import React, {Fragment} from 'react';
import styled from '@emotion/styled';

const EscenaStyled = styled.p`
    border-style: solid;
    border-color: black;
    border-radius: 4em;
    padding: 1em;
    text-align: center;
`;

const EscenaStyledClicked = styled.p`
        border-style: solid;
        border-color: black;
        border-radius: 4em;
        padding: 1em;
        text-align: center;
        background-color: pink;
`;


//const [frase, onclick] = useState(true);


function Escena ({dato}) {

    return ( 
        <Fragment>
            <EscenaStyled>{dato}</EscenaStyled> 
        </Fragment>   
    );
}
 
export default Escena;