import React, { useState, useEffect } from 'react';
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
import Alert from '@material-ui/lab/Alert';

import { useHistory } from "react-router-dom";

import { connect } from 'react-redux';
import { login } from '../../redux/auth/auth-actions';


const SigninForm = ({ userFormData, setUserFormData, login, error, isAuthenticated }) => {

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

        const user = {
            email: userFormData.email,
            password: userFormData.password
        }

        login(user);
        if (isAuthenticated) {
            this.props.history.push('/')
        }
    };

    useEffect(() => {
        // Check for register error
        if (error.id === 'LOGIN_FAIL') {
            setMsg(error.msg.msg);
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
            <SigninFormContainer>
                <SigninFormWrap>
                    <SigninFormContent>
                        <Form action="#">
                            {msg ? <Alert severity="error">{msg}</Alert> : null}
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

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

const mapDispatchToProps = dispatch => {
    return {
        login: (data) => dispatch(login(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SigninForm);

//export default SigninForm;