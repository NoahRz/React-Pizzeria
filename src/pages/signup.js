import React, {useState} from 'react';

import {
    SignupForm,
} from '../components';

const initialUserFormData = Object.freeze({
    username : "",
    password : "",
    firstname : "",
    lastname :"",
    email : "",
    address: "",
  });

const Signup = ({user, setUser}) => {

    const [userFormData, setUserFormData] = useState(initialUserFormData);

    return (
        <div>
           <SignupForm user={user} setUser={setUser} userFormData={userFormData} setUserFormData={setUserFormData}/>
        </div>
    )
}

export default Signup;