import axios from 'axios';
import { auth } from '../firebase';

const baseURL = `${process.env.REACT_APP_SERVER_BASE_URL}/api/v1/persons`;

const getPersonDetails = (id) => {
  const headers = {
    Authorization: `Bearer ${auth.currentUser.accessToken}`,
  };
  return axios.get(`${baseURL}/${id}`, { headers });
};

const exportedObject = {
  getPersonDetails,
};

export default exportedObject;
