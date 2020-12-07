import React, { useState } from 'react';

import {
    SigninForm,
} from '../components';

const initialUserFormData = Object.freeze({
    email: "",
    password: "",
    msg: null
});

const Signin = () => {

    const [userFormData, setUserFormData] = useState(initialUserFormData);

    return (
        <div>
            <SigninForm userFormData={userFormData} setUserFormData={setUserFormData} />
        </div>
    )
}

export default Signin;