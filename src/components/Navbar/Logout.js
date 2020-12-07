import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../redux/auth/auth-actions';
import {
    NavLinks,
} from './styles';

const Logout = ({ logout }) => {
    return (
        <>
            <NavLinks onClick={() => logout()} to="/">Logout</NavLinks>

        </>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(null, mapDispatchToProps)(Logout);

//export default connect(null, (logout))(Logout);