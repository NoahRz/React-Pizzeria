import styled from 'styled-components';


export const MessageContainer = styled.div`
    background-color : #FFF;
    height:600px;
`

export const MessageWrapper = styled.div`
    font-size: 50px;
    font-style: bold;
    padding: 220px 24px;
    display: flex;
    justify-content: center;
    text-align: center;
    background: #fa8787;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480x) {
        font-size: 32px;
    }
`
