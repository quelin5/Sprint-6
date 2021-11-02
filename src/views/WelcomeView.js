import React, { Fragment } from 'react';
import styled from '@emotion/styled';

const WelcomeView = ({setPageVisitedBefore}) => {

    const handlesOnClick = () => {
        setPageVisitedBefore(true)
    }

    const HeaderStyled = styled.h1`
        color: grey;
    `;

    const ParagraphStyled = styled.p`
        color: grey;
        padding: 2rem;
        font-family: "Lucida Console", "Courier New", monospace;
    `;

    const MainDivStyled = styled.div`
        background-color: pink;
        width: 100vw;
        height: 100vh;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center; // makes the divs be centered on the whole page --> align along the main axis!
        align-items: center; // makes the divs centered on the middle of daddy div --> align along the cross axis! 
        flex-direction: column;
    `;

    return ( 
        <MainDivStyled>
                <HeaderStyled> Welcome to the project! </HeaderStyled>
                <ParagraphStyled> ······· Click START to get to the story ······· </ParagraphStyled>
                <ParagraphStyled> This page displays the first lines of a story that occur in a space setting. </ParagraphStyled>
                <button onClick={handlesOnClick}> START </button>
        </MainDivStyled>
    );
}
 
export default WelcomeView;