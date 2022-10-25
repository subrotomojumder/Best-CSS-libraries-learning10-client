import React from 'react';
import { createContext } from 'react';
export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const contextInfo = {he: 'idkfj'}
    return (
        <AuthContext.Provider value={contextInfo}>
            {children}
        </AuthContext.Provider> 
    );
};

export default AuthProvider;