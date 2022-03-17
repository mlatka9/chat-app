import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  updateProfile,
  getIdToken,
} from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import axios from 'axios';
import { CustomFirebaseError } from 'errors/CustomFirebaseError';

const provider = new GoogleAuthProvider();
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
      setCurrentUser(user);
    });

    return subscribe;
  }, []);

  const signup = async (email, password) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // await updateProfile(response.user, {
      //   photoURL: 'http://shorturl.at/cBPT5',
      // });
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        throw new CustomFirebaseError(
          'an account with the given email already exists'
        );
      }
    }
  };

  const update = async () => {
    const random = Math.floor(Math.random() * 20 + 1);
    await updateProfile(auth.currentUser, {
      photoURL: `https://i.pravatar.cc/300?img=${random}`,
    });
  };

  const logoutUser = async () => {
    await signOut(auth);
  };

  const loginUser = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      if ((err.code = 'auth/user-not-found')) {
        throw new CustomFirebaseError('Invalid email or password');
      }
    }
  };

  const signUpWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
  };

  const readFromBackend = async () => {
    const idToken = await auth.currentUser.getIdToken(true);
    const data = await axios.get('http://localhost:5000/api/random', {
      headers: {
        authorization: `Bearer ${idToken}`,
      },
    });
  };

  const value = {
    currentUser,
    signup,
    signUpWithGoogle,
    readFromBackend,
    logoutUser,
    loginUser,
    update,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
