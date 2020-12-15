import React from 'react';

import { connect } from 'react-redux';

import UserOrder from './UserOrder';

import Alert from '@material-ui/lab/Alert';



const Order = ({ auth }) => {

    const { user, isAuthenticated } = auth;

    console.log("isAuthenticated:", isAuthenticated)

    return (
        <>
            {
                isAuthenticated ?
                    <UserOrder user={user} /> :
                    <Alert severity="error" style={{ marginTop: "10px", marginBottom: "5px" }}>Please sign in</Alert>
            }
        </>
    )
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Order);