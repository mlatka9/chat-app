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
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { db } from '../firebase';
import { doc, setDoc, updateDoc, getDoc } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase';
import axios from 'axios';
import { CustomFirebaseError } from 'errors/CustomFirebaseError';

const provider = new GoogleAuthProvider();
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      if (user) {
        getUserDetails(user.uid).then((details) => {
          setUserDetails(details);
        });
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

      await setDoc(doc(db, 'users', response.user.uid), {
        bio: '',
        phoneNumber: '',
      });

      // await updateProfile(response.user, {
      //   photoURL: `https://picsum.photos/id/${
      //     Math.floor(Math.random() * 99) + 1
      //   }/200/200`,
      // });
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
    const response = await signInWithPopup(auth, provider);
    const docRef = doc(db, 'users', response.user.uid);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      await setDoc(doc(db, 'users', response.user.uid), {
        bio: '',
        phoneNumber: '',
      });
    }

    // Do backend'u
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
    // const user = result.user;
  };

  const updateUserProfile = async (dataToUpdate) => {
    const {
      name: displayName,
      phone: phoneNumber,
      bio,
      email,
      password,
      photo,
    } = dataToUpdate;

    if (photo[0]) {
      const fileRef = ref(getStorage(), currentUser.uid);
      await uploadBytes(fileRef, photo[0]);
      const photoURL = await getDownloadURL(fileRef);
      await updateProfile(auth.currentUser, {
        photoURL,
      });
    }

    if (displayName !== currentUser.displayName) {
      await updateProfile(auth.currentUser, {
        displayName,
      });
    }

    const fieldToUpdate = {
      ...(phoneNumber !== userDetails.phoneNumber ? { phoneNumber } : {}),
      ...(bio !== userDetails.bio ? { bio } : {}),
    };

    if (Object.keys(fieldToUpdate).length > 0) {
      const userRef = doc(db, 'users', currentUser.uid);
      await updateDoc(userRef, fieldToUpdate);
      const details = await getUserDetails(currentUser.uid);
      setUserDetails(details);
    }

    if (email !== currentUser.email || password) {
      const providedPassword = prompt('password: ');
      let credential = EmailAuthProvider.credential(
        currentUser.email,
        providedPassword
      );
      await reauthenticateWithCredential(currentUser, credential);
    }

    if (email !== currentUser.email) {
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
    userDetails,
    signup,
    signUpWithGoogle,
    readFromBackend,
    logoutUser,
    loginUser,
    updateUserProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
