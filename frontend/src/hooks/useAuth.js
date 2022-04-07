import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  updateEmail,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { db } from '../firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase';
import axios from 'axios';
import { CustomFirebaseError } from 'errors/CustomFirebaseError';
import personsService from 'service/persons';

const provider = new GoogleAuthProvider();
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [isInitialUser, setIsInitialUser] = useState(false);

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);

      if (user) {
        personsService
          .getPersonDetails(user.uid)
          .then(({ data }) => {
            setUserDetails(data);
            setIsInitialUser(true);
          })
          .catch((err) => {
            console.log('cant find user ', err);
          });
      } else {
        setCurrentUser(null);
        setUserDetails(null);
      }
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

      const data = {
        id: response.user.uid,
        name: response.user.email,
      };

      const headers = {
        Authorization: `Bearer ${response.user.accessToken}`,
      };

      const createdUser = await axios.post(
        `${process.env.REACT_APP_SERVER_BASE_URL}/api/v1/persons`,
        data,
        { headers }
      );
      setUserDetails(createdUser.data);
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        throw new CustomFirebaseError(
          'an account with the given email already exists'
        );
      }
      console.log(err);
    }
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
    const response = await signInWithPopup(auth, provider);

    const docRef = doc(db, 'users', response.user.uid);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
      await setDoc(doc(db, 'users', response.user.uid), {
        bio: '',
        phoneNumber: '',
      });
    }
  };

  const reAuthUser = async (password) => {
    let credential = EmailAuthProvider.credential(currentUser.email, password);
    await reauthenticateWithCredential(currentUser, credential);
  };

  const updateUserProfile = async (dataToUpdate) => {
    const {
      name,
      phone: phoneNumber,
      bio,
      email,
      password,
      photo,
    } = dataToUpdate;

    const fieldsToUpdate = {};

    if (email !== currentUser.email) {
      try {
        await updateEmail(auth.currentUser, email);
      } catch (err) {
        throw new CustomFirebaseError('User need to re auth himself');
      }
    }

    if (password) {
      try {
        await updatePassword(auth.currentUser, password);
      } catch (err) {
        throw new CustomFirebaseError('User need to re auth himself');
      }
    }

    if (photo[0]) {
      const fileRef = ref(getStorage(), currentUser.uid);
      await uploadBytes(fileRef, photo[0]);
      const photoURL = await getDownloadURL(fileRef);

      if (photoURL) {
        fieldsToUpdate.photoURL = photoURL;
      }
    }

    if (phoneNumber !== userDetails.phoneNumber) {
      fieldsToUpdate.phoneNumber = phoneNumber;
    }
    if (name !== userDetails.name) {
      fieldsToUpdate.name = name;
    }
    if (bio !== userDetails.bio) {
      fieldsToUpdate.bio = bio;
    }

    if (Object.keys(fieldsToUpdate).length === 0) return;

    const headers = {
      headers: {
        authorization: `Bearer ${currentUser.accessToken}`,
      },
    };
    const updatedPerson = await axios.patch(
      `${process.env.REACT_APP_SERVER_BASE_URL}/api/v1/persons/${currentUser.uid}`,
      fieldsToUpdate,
      headers
    );

    setUserDetails(updatedPerson.data);
  };

  const value = {
    currentUser,
    userDetails,
    isInitialUser,
    signup,
    signUpWithGoogle,
    logoutUser,
    loginUser,
    updateUserProfile,
    reAuthUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
