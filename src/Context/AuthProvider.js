import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.init.js';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    // user authentication code
    const createUser = (email, password) => {
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const updateUserProfileFunc = (displayName, photoURL) => {
        return updateProfile(auth.currentUser, {displayName, photoURL})
    }
    const emailVerifyFunc = () => {
        return sendEmailVerification(auth.currentUser);
    }
    const signIn = (email, password) => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleLogin = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider);
    }
    const facebookLogin = () => {
        setIsLoading(true)
        return signInWithPopup(auth, facebookProvider)
    }

    const logOut = () => {
        setIsLoading(true)
        return signOut(auth);
    }

    // instant changes user access 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setIsLoading(false);
        })

        return () => unSubscribe();
    }, [])

    console.log(user)
    const authInfo = {
        user,
        isLoading,
        setIsLoading,
        googleLogin,
        facebookLogin,
        logOut,
        createUser,
        signIn,
        updateUserProfileFunc,
        emailVerifyFunc
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
