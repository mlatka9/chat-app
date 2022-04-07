import axios from 'axios';
import { auth } from '../firebase';

const baseURL = `${process.env.REACT_APP_SERVER_BASE_URL}/api/v1/posts`;

const getPostsFromChannel = async (channelId) => {
  const headers = {
    Authorization: `Bearer ${auth.currentUser.accessToken}`,
  };
  const params = {
    channelId,
  };
  const response = await axios.get(`${baseURL}`, { headers, params });
  return response.data;
};

const addPost = async (postBody) => {
  const headers = {
    Authorization: `Bearer ${auth.currentUser.accessToken}`,
  };
  const response = await axios.post(`${baseURL}`, postBody, { headers });
  return response.data;
};

const exportedObject = {
  getPostsFromChannel,
  addPost,
};

export default exportedObject;
