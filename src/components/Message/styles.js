import styled from 'styled-components';


export const MessageContainer = styled.div`
    background-color : #000;
    height:1000px;
`

export const MessageWrapper = styled.div`
    font-size: 50px;
    font-style: bold;
    padding: 130px 24px;
    display: flex;
    justify-content: center;
    //background: linear-gradient(to right, rgba(255,255,255,${({scroll}) => (scroll)}), rgba(255,255,255,${({scroll}) => (scroll)}));
    //background: linear-gradient(to right, rgba(255,255,255,${({scrollLeft}) => (Math.sin(scrollLeft))}), rgba(255,255,255,${({scrollRight}) => Math.sin(Math.PI/2 - scrollRight)}));
    background: linear-gradient(to right, rgba(255,255,255,${({scrollLeft}) => (Math.sin(scrollLeft))}), rgba(255,255,255,${({scrollRight}) => Math.sin(scrollRight)}));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`
