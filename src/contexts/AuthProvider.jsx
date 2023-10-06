import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config.js';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    // create user
    const createUser =(email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
// login in with email and password
    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

// Google Sign In
 const signInWithGoogle = () =>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
 }
//  Github Login
const signInWithGithub = () =>{
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
}

const profileUpdate =(profile) =>{
    setLoading(true);
    return updateProfile(auth.currentUser, profile)
}

const logOut =() =>{
    setLoading(true);
    return signOut(auth);
}

const  passwordReset = (email) =>{
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
}

useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, loggedUser =>{
        console.log('logged in user inside auth state observer', loggedUser)
        setUser(loggedUser);
        setLoading(false); 
    });
    return () =>{
        unsubscribe();
    }
},[])
    const authInfo ={
            user,
            loading,
            createUser,
            signIn,
            signInWithGoogle,
            signInWithGithub,
            logOut,
            passwordReset,
            profileUpdate

    }

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;