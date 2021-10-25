import React from 'react';
import styled from '@emotion/styled';
import Escena from './escena/Escena';


const BotoStyled = styled.button`
    width: 100%;
    padding: 1.5rem;
`;


const DivFlex = styled.div`
    display: flex;
    flex-direction: row;
`;


const Boto = () => {
    return ( 
        <DivFlex>
            <BotoStyled className='Anterior'>
                Anterior
            </BotoStyled>

            <BotoStyled className='Següent'>
                Següent
            </BotoStyled>   
        </DivFlex>
    );
}
 
export default Boto;