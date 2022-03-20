import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  updateEmail,
  updatePassword,
  updateProfile,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from 'firebase/auth';
import { db } from '../firebase';
import { doc, setDoc, updateDoc, getDoc } from 'firebase/firestore';
import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import axios from 'axios';
import { CustomFirebaseError } from 'errors/CustomFirebaseError';

const provider = new GoogleAuthProvider();
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, async (user) => {
      console.log(user);
      setCurrentUser(user);
      if (user) {
        const details = await getUserDetails(user.uid);
        console.log(details);
        setUserDetails(details);
      }
    });

    return subscribe;
  }, []);

  // useEffect(() => {
  //   getUserDetails()
  //     .then((user) => {
  //       setUserDetails(user.data());
  //     })
  //     .catch((err) => console.log(err));
  // }, [getUserDetails]);

  const signup = async (email, password) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await setDoc(doc(db, 'users', response.user.uid), {
        bio: '',
        phoneNumber: '',
      });

      await updateProfile(response.user, {
        photoURL: `https://picsum.photos/id/${
          Math.floor(Math.random() * 99) + 1
        }/200/200`,
      });
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        throw new CustomFirebaseError(
          'an account with the given email already exists'
        );
      }
    }
  };

  // const update = async () => {
  //   const random = Math.floor(Math.random() * 20 + 1);
  //   await updateProfile(auth.currentUser, {
  //     photoURL: `https://i.pravatar.cc/300?img=${random}`,
  //   });
  // };

  const logoutUser = async () => {
    await signOut(auth);
  };

  const loginUser = async (email, password) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
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

  const updateUserProfile = async (dataToUpdate) => {
    console.log(dataToUpdate);
    const {
      name: displayName,
      phone: phoneNumber,
      bio,
      email,
      password,
    } = dataToUpdate;

    await updateProfile(auth.currentUser, {
      displayName,
    });

    const userRef = doc(db, 'users', currentUser.uid);

    const fieldToUpdate = {
      ...(phoneNumber ? { phoneNumber } : {}),
      ...(bio ? { bio } : {}),
    };

    console.log('FIELDS TO UPDATE:', fieldToUpdate);

    await updateDoc(userRef, fieldToUpdate);
    const details = await getUserDetails(currentUser.uid);
    setUserDetails(details);

    if (email !== currentUser.email || password) {
      const providedPassword = prompt('password: ');
      let credential = EmailAuthProvider.credential(
        currentUser.email,
        providedPassword
      );
      await reauthenticateWithCredential(currentUser, credential);
    }

    if (email !== auth.currentUser) {
      await updateEmail(auth.currentUser, email);
    }

    if (password) {
      await updatePassword(auth.currentUser, password);
    }
  };

  const getUserDetails = async (userId) => {
    const docRef = doc(db, 'users', userId);
    return (await getDoc(docRef)).data();
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
    updateUserProfile,
    userDetails,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
