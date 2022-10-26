import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, isLoading} = useContext(AuthContext);
    const location = useLocation();
    if (isLoading) {
        return "isLoading";
    }
    if (!user) {
       return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
    return children;      
};

export default PrivateRoute;