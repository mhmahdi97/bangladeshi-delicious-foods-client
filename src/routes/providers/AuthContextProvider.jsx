// import all modules
import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../utilities/firebase.config';


// create and export react context
export const AuthContext = createContext(null);

// ger firebase auth
const auth = getAuth(app);

const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleProvider = new GoogleAuthProvider;
    const gitHubProvider = new GithubAuthProvider;

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const googleUser = result.user;
            console.log(googleUser);
        })
        .catch(error => {
            console.log(error)
        })
    
        const gitHubSignIn = () => {
        signInWithPopup(auth, gitHubProvider)
        .then(result => {
            const githubUser = result.user;
            console.log(githubUser);
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log('logged in user inside auth state observer', loggedUser)
            setUser(loggedUser);
            setLoading(false);
        })

        return () => {
            unsubscribe();
        }
    }, [])


     const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        handleGoogleSignIn,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;