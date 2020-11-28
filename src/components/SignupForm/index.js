import React, {useState} from 'react';
import {
    SignupFormInput,
    SignupFormWrap,
    SignupFormContainer,
    SignupFormContent,
    SignupFormH1,
    SignupFormLabel,
    Form,
    FormRow,
    FormElement,
    SignupFormButton
} from './styles';
import axios from 'axios';

async function makePostRequest(url, newUsername, newPassword, newFirstname, newLastname, newEmail, newAddress) {

    let res = await axios.post(url, {
      username : newUsername,
      password : newPassword,
      firstname : newFirstname,
      lastname :newLastname,
      email : newEmail,
      address: newAddress,
    });
    return res;
  }

const SignupForm = () => {

    return (
        <>
            <SignupFormContainer>
                <SignupFormWrap>
                    <SignupFormContent>
                        <Form action="#">
                            <SignupFormH1>Create your account</SignupFormH1>
                            <FormRow>
                                <FormElement>
                                    <SignupFormLabel htmlFor='for'>Username</SignupFormLabel>
                                    <SignupFormInput type='text' required />
                                </FormElement>
                                <FormElement>
                                    <SignupFormLabel htmlFor='for'>Password</SignupFormLabel>
                                    <SignupFormInput type='password' required />
                                </FormElement>
                            </FormRow>

                            <FormRow>
                                <FormElement>
                                    <SignupFormLabel htmlFor='for'>Firstname</SignupFormLabel>
                                    <SignupFormInput type='text' required />
                                </FormElement>
                                <FormElement>
                                    <SignupFormLabel htmlFor='for'>Lastname</SignupFormLabel>
                                    <SignupFormInput type='text' required />
                                </FormElement>
                            </FormRow>

                            <SignupFormLabel htmlFor='for'>Email</SignupFormLabel>
                            <SignupFormInput type='Email' required />
                            <SignupFormLabel htmlFor='for'>address</SignupFormLabel>
                            <SignupFormInput type='text' required />
                            <SignupFormButton type='submit'>Continue</SignupFormButton>
                        </Form>
                    </SignupFormContent>
                </SignupFormWrap>
            </SignupFormContainer>
        </>
    )
}

export default SignupForm;