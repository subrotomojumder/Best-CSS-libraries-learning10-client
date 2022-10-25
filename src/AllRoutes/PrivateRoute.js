import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, isLoading} = useContext(AuthContext);
    if (!user) {
        <Navigate to='/login' ></Navigate>
    }
    return (
        <div>
            ikkjj
        </div>
    );
};

export default PrivateRoute;