import React from 'react';
import styled from '@emotion/styled';
//import Escena from './escena/Escena';


const BotoStyled = styled.button`
    width: 100%;
    padding: 1.5rem;
`;


const DivFlex = styled.div`
    display: flex;
    flex-direction: row;
`;


const Boto = ({setSelectedScene}) => {
    
    return ( 
        <DivFlex>
            <BotoStyled className='Anterior' onClick={()=> {
                setSelectedScene('-')
            }}>
                Anterior
            </BotoStyled >

            <BotoStyled className='Següent' onClick={()=>{
                setSelectedScene('+')
            }}>
                Següent
            </BotoStyled>   
        </DivFlex>
    );
}
 
export default Boto;