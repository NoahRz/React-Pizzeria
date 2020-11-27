import React, {useState} from 'react';
import {
    SigninFormInput,
    SigninFormWrap,
    SigninFormContainer,
    SigninFormContent,
    SigninFormH1,
    SigninFormLabel,
    SigninLogo,
    Form,
    SigninFormButton
} from './styles';

const SigninForm = () => {

    return (
        <>
            <SigninFormContainer>
                <SigninFormWrap>
                    <SigninFormContent>
                        <Form action="#">
                            <SigninLogo to="/">🍕 Pizza</SigninLogo>
                            <SigninFormH1>Sign in to your account</SigninFormH1>
                            <SigninFormLabel htmlFor='for'>Email</SigninFormLabel>
                            <SigninFormInput type='email' required />
                            <SigninFormLabel htmlFor='for'>Password</SigninFormLabel>
                            <SigninFormInput type='password' reqiores />
                            <SigninFormButton type='submit'>Continue</SigninFormButton>
                        </Form>
                    </SigninFormContent>
                </SigninFormWrap>
            </SigninFormContainer>
        </>
    )
}

export default SigninForm;