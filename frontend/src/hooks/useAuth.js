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
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase';
import axios from 'axios';
import { CustomFirebaseError } from 'errors/CustomFirebaseError';
import personsService from 'service/persons';

const provider = new GoogleAuthProvider();
const AuthContext = createContext();

const retrivingUserStateEnum = {
  FETCHING_USER: 'fetchingUser',
  FETCHING_USER_DATA: 'fetchingUserData',
  USER_AVAILABLE: 'userAvailable',
  USER_NOT_AVAILABLE: 'userNotAvailable',
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userDetails, setUserDetails] = useState(null);

  const [retrivingUserState, setRetrivingUserState] = useState(
    retrivingUserStateEnum.FETCHING_USER
  );

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);

      if (user) {
        setRetrivingUserState(retrivingUserStateEnum.FETCHING_USER_DATA);
        personsService
          .getPersonDetails(user.uid)
          .then(({ data }) => {
            setRetrivingUserState(retrivingUserStateEnum.USER_AVAILABLE);
            setUserDetails(data);
          })
          .catch((err) => {
            console.log('cant find user ', err);
          });
      } else {
        setCurrentUser(null);
        setUserDetails(null);
        setRetrivingUserState(retrivingUserStateEnum.USER_NOT_AVAILABLE);
      }
    });

    return subscribe;
  }, []);

  const createUserInCustomBacked = async (response) => {
    const data = {
      id: response.user.uid,
      name: response.user.email,
    };

    if (response.user.photoURL) {
      data.photoURL = response.user.photoURL;
    }

    const headers = {
      Authorization: `Bearer ${response.user.accessToken}`,
    };

    const createdUser = await axios.post(
      `${process.env.REACT_APP_SERVER_BASE_URL}/api/v1/persons`,
      data,
      { headers }
    );
    setUserDetails(createdUser.data);
    setRetrivingUserState(retrivingUserStateEnum.USER_AVAILABLE);
  };

  const signup = async (email, password) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await createUserInCustomBacked(response);
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
    await createUserInCustomBacked(response);
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
    retrivingUserState,
    retrivingUserStateEnum,
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
