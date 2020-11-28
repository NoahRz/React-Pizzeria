import styled from 'styled-components';

export const SignupFormContainer = styled.div`
    margin-top: 100px;
    margin-bottom: 100px;
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    min-height: 692px;
`;

export const SignupFormWrap = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;

    @media screen and (max-width: 400px) {
        height: 80%
    }
`;

export const SignupFormContent = styled.div`
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
    max-width: 600px;
    width: 100%;
    z-index: 1;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.9);

    @media screen and (max-width: 400px){
        padding: 32px 32px;
    }
`;

export const FormRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    @media screen and (max-width: 400px){
        flex-direction: column;
    }
`

export const FormElement = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const SignupFormH1 = styled.h1`
    font-size: 20px;
    font-weight: 400;
    color: #fff;
    text-align: center;
    margin-bottom: 40px;
`;

export const SignupFormLabel = styled.label`
    font-size: 14px;
    margin-bottom: 8px;
    margin-left: 8px;
    color: #fff;
`;

export const SignupFormInput = styled.input`
    border: none;
    border-radius: 4px;
    margin-bottom: 32px;
    margin-left: 8px;
    margin-right: 8px;
    padding: 16px 16px;
`;

export const SignupFormButton = styled.button`
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 20px;
    padding: 16px 0;
    background: #fb770d;
    cursor: pointer;
`;

