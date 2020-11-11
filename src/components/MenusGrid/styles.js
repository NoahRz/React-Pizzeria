import styled from 'styled-components';

export const MenusContainer = styled.div`
    background-color: #000;
    //height: 1000px
`

// difference entre div et section ?
export const MenusWrapper = styled.div`
    padding: 48px 0px;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    max-width: 100%;

    @media screen and (max-width: 770px){
        padding-top: 32px;
        flex-direction: column;
    }
`

export const MenuBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0;
    text-align: left;
    max-width: 33.3333%;
    height: calc(100vw * 0.65);
    //height : 900px;
    box-sizing: border-box;
    background-color: #fff;

    @media screen and (max-width: 770px) {
        height: calc(100vw * 1.5);
        margin: 0;
        padding: 10px;
        max-width: 100%;
    }

`

export const MenuImageBg = styled.div`
    max-width: 100%;
    height: 50%;

    @media screen and (max-width: 770px) {
       order: 1; // change order when the screen gets smaller
    }

`

export const  MenuImage = styled.img`
    width: 100%;
    height: 100%;

`

export const MenuContent = styled.div`
    width: 100%;
    height: 50%; 
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 770px) {
       order: 2;
    }
`

export const MenuH1 = styled.h1`
    color: #000;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480x) {
        font-size: 32px;
    }

`

export const MenuP = styled.p`
    color:#000;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }   

`

export const MenuBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`