import React from 'react';

import { connect } from 'react-redux';

import UserOrder from './UserOrder';


import AlertMessage from './AlertMessage/index';


const Order = ({ auth }) => {

    const { user, isAuthenticated } = auth;
    return (
        <>
            {
                isAuthenticated ?
                    <UserOrder user={user} /> :
                    <AlertMessage />
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