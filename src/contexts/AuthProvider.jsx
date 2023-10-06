import React, { createContext } from 'react';
import app from '../firebase/firebase.config.js';
import { GithubAuthProvider, GoogleAuthProvider, getAuth } from "firebase/auth";


export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {


    const authInfo ={

    }

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;