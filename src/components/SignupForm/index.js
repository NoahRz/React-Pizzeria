import React from 'react';
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

import { connect } from 'react-redux';
//import { register } from '../../redux/auth/auth-actions';
import { addToUser } from '../../redux/auth/auth-actions';

async function makePostRequest(url, newUsername, newPassword, newFirstname, newLastname, newEmail, newAddress) {

    let res = await axios.post(url, {
        username: newUsername,
        password: newPassword,
        firstname: newFirstname,
        lastname: newLastname,
        email: newEmail,
        address: newAddress,
    });
    return res;
}

const SignupForm = ({ user, setUser, userFormData, setUserFormData, addToUser }) => {

    const handleChange = (e) => {
        setUserFormData({
            ...userFormData,

            // Trimming any whitespace
            [e.target.name]: e.target.value.trim()
        });
        console.log(e.target.name, e.target.value.trim())

        //this.setState({ [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault() // to prevent the browser for changes

        // ... submit to API
        makePostRequest('http://localhost:3000/api/v1/signup',
            userFormData.username,
            userFormData.password,
            userFormData.firstname,
            userFormData.lastname,
            userFormData.email,
            userFormData.address)
            .then((res) => {
                console.log(res.data);
                addToUser(res.data); //token
                //};
            }
            )
            .catch((err) => console.log(err))
    };
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
                                    <SignupFormInput name="username" onChange={handleChange} type='text' required />
                                </FormElement>
                                <FormElement>
                                    <SignupFormLabel htmlFor='for'>Password</SignupFormLabel>
                                    <SignupFormInput name="password" onChange={handleChange} type='password' required />
                                </FormElement>
                            </FormRow>

                            <FormRow>
                                <FormElement>
                                    <SignupFormLabel htmlFor='for'>Firstname</SignupFormLabel>
                                    <SignupFormInput name="firstname" onChange={handleChange} type='text' required />
                                </FormElement>
                                <FormElement>
                                    <SignupFormLabel htmlFor='for'>Lastname</SignupFormLabel>
                                    <SignupFormInput name="lastname" onChange={handleChange} type='text' required />
                                </FormElement>
                            </FormRow>

                            <SignupFormLabel htmlFor='for'>Email</SignupFormLabel>
                            <SignupFormInput name="email" onChange={handleChange} type='Email' required />
                            <SignupFormLabel htmlFor='for'>address</SignupFormLabel>
                            <SignupFormInput name="address" onChange={handleChange} type='text' required />
                            <SignupFormButton type='submit' onClick={handleSubmit} >Continue</SignupFormButton>
                        </Form>
                    </SignupFormContent>
                </SignupFormWrap>
            </SignupFormContainer>
        </>
    )
    //}
}

const mapDispatchToProps = dispatch => {
    return {
        addToUser: (data) => dispatch(addToUser(data))
    }
}

export default connect(null, mapDispatchToProps)(SignupForm);