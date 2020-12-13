import React, { useState, useEffect } from 'react';
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
import Alert from '@material-ui/lab/Alert';

import { useHistory } from "react-router-dom";


import { connect } from 'react-redux';
import { register } from '../../redux/auth/auth-actions';

const SignupForm = ({ user, setUser, userFormData, setUserFormData, register, error, isAuthenticated }) => {

    const [msg, setMsg] = useState(null);

    const history = useHistory();

    const handleChange = (e) => {
        setUserFormData({
            ...userFormData,

            // Trimming any whitespace
            [e.target.name]: e.target.value.trim()
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault() // to prevent the browser for changes

        // ... submit to API
        const user = {
            username: userFormData.username,
            password: userFormData.password,
            firstname: userFormData.firstname,
            lastname: userFormData.lastname,
            email: userFormData.email,
            address: userFormData.address,
        }

        register(user);
        if (isAuthenticated) {
            this.props.history.push('/')
        }

    };

    useEffect(() => {
        // Check for register error
        if (error.id === 'REGISTER_FAIL') {
            setMsg(error.msg);
        } else {
            setMsg(null);
        }
    }, [error])

    useEffect(() => {
        if (isAuthenticated) {
            history.goBack();
        }
    }, [isAuthenticated])

    return (
        <>
            <SignupFormContainer>
                <SignupFormWrap>
                    <SignupFormContent>
                        <Form action="#">
                            {msg ? <Alert severity="error">{msg}</Alert> : null}
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
                            <SignupFormButton type='submit' onClick={handleSubmit} to={isAuthenticated ? "/" : "#"}>Continue</SignupFormButton>
                        </Form>
                    </SignupFormContent>
                </SignupFormWrap>
            </SignupFormContainer>
        </>
    )
    //}
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

const mapDispatchToProps = dispatch => {
    return {
        register: (user) => dispatch(register(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);