// the profile page
import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';

import axios from 'axios';

async function makeGetRequest(url, config) {


    let res = await axios.get(url, config);
    let data = res.data;

    return data;
}

const Profile = ({ auth }) => {

    const [isAuthorized, setAuthorized] = useState(false);

    const { token } = auth;

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    const fetchData = () => {
        makeGetRequest('http://localhost:3000/api/v1/profile', config)
            .then((res) => {
                setAuthorized(true)
            })
            .catch((err) => {
                setAuthorized(false);
            })
    }

    useEffect(() => {
        fetchData();
    }, [])


    return (
        <div>
            {isAuthorized ? <h4>Welcome</h4> : <h4>Sorry</h4>}
        </div>
    )
}


const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Profile);