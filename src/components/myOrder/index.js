import React from 'react';

import { connect } from 'react-redux';


const myOrder = ({ auth }) => {

    const { user } = auth;

    return (
        <div>
            <></>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(myOrder);