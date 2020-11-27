import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const SigninFormContainer = styled.div`
    margin-top: 80px;
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    min-height: 692px;
`;

export const SigninFormWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;

    @media screen and (max-width: 400px) {
        height: 80%
    }
`;

export const SigninFormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px){
        padding: 10px;
    }
`;

export const Form = styled.form`
    background: #000;
    height: auto ;
    max-width: 400px;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto; // to center
    padding: 80px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.9);

    @media screen and (max-width: 400px){
        padding: 32px 32px;
    }
`;

export const SigninLogo = styled(Link)`
    color: #fff;
    margin-bottom: 40px;
    cursor: pointer;
    font-size: 2rem;
    text-align: center;
    font-weight: bold;
    text-decoration: none;
`;

export const SigninFormH1 = styled.h1`
    font-size: 20px;
    font-weight: 400;
    color: #fff;
    text-align: center;
    margin-bottom: 40px;
`;

export const SigninFormLabel = styled.label`
    font-size: 14px;
    margin-bottom: 8px;
    color: #fff;
`;

export const SigninFormInput = styled.input`
    border: none;
    border-radius: 4px;
    margin-bottom: 32px;
    padding: 16px 16px;
`;

export const SigninFormButton = styled.button`
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 20px;
    padding: 16px 0;
    background: #fb770d;
    cursor: pointer;
`;

