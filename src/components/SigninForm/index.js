import React, { useState } from 'react';
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

import axios from 'axios';


import { connect } from 'react-redux';
import { login } from '../../redux/auth/auth-actions';

async function makePostRequest(url, newEmail, newPassword) {

    let res = await axios.post(url, {
        email: newEmail,
        password: newPassword
    });
    return res;
}

const SigninForm = ({ userFormData, setUserFormData, login }) => {

    const handleChange = (e) => {
        setUserFormData({
            ...userFormData,

            // Trimming any whitespace
            [e.target.name]: e.target.value.trim()
        });
        console.log(e.target.name, e.target.value.trim())
    };

    const handleSubmit = (e) => {
        e.preventDefault() // to prevent the browser for changes

        console.log("machine");

        // ... submit to API
        makePostRequest('http://localhost:3000/api/v1/signin',
            userFormData.email,
            userFormData.password
        )
            .then((res) => {

                console.log(res.data);
                login(res.data); //token
                //};
            }
            )
            .catch((err) => console.log(err))
    };

    return (
        <>
            <SigninFormContainer>
                <SigninFormWrap>
                    <SigninFormContent>
                        <Form action="#">
                            <SigninLogo to="/">🍕 Pizza</SigninLogo>
                            <SigninFormH1>Sign in to your account</SigninFormH1>
                            <SigninFormLabel htmlFor='for'>Email</SigninFormLabel>
                            <SigninFormInput name="email" onChange={handleChange} type='email' required />
                            <SigninFormLabel htmlFor='for'>Password</SigninFormLabel>
                            <SigninFormInput name="password" onChange={handleChange} type='password' required />
                            <SigninFormButton type='submit' onClick={handleSubmit} >Continue</SigninFormButton>
                        </Form>
                    </SigninFormContent>
                </SigninFormWrap>
            </SigninFormContainer>
        </>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        login: (data) => dispatch(login(data))
    }
}

export default connect(null, mapDispatchToProps)(SigninForm);

//export default SigninForm;