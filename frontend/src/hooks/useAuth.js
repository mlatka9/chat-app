import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import axios from 'axios';

const provider = new GoogleAuthProvider();

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        setCurrentUser(user);
      }
    });

    return subscribe;
  }, []);

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signUpWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
  };

  const readFromBackend = async () => {
    const idToken = await auth.currentUser.getIdToken(true);
    console.log(idToken);
    const data = await axios.get('http://localhost:5000/api/random', {
      headers: {
        authorization: `Bearer ${idToken}`,
      },
    });
    console.log(data);
  };

  const value = {
    currentUser,
    signup,
    signUpWithGoogle,
    readFromBackend,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
