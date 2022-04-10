import axios from 'axios';
import { auth } from '../firebase';

const baseURL = `${process.env.REACT_APP_SERVER_BASE_URL}/api/v1/channels`;

const getAllChannels = async () => {
  const headers = {
    Authorization: `Bearer ${auth.currentUser.accessToken}`,
  };
  const response = await axios.get(baseURL, { headers });
  return response.data;
};

const getChannel = async (id) => {
  const headers = {
    Authorization: `Bearer ${auth.currentUser.accessToken}`,
  };
  const response = await axios.get(`${baseURL}/${id}`, { headers });
  return response.data;
};

const createChannel = async (channel) => {
  const headers = {
    Authorization: `Bearer ${auth.currentUser.accessToken}`,
  };

  const response = await axios.post(`${baseURL}`, channel, { headers });
  return response.data;
};

const joinChannel = async (channelId, channelPassword = '') => {
  const headers = {
    Authorization: `Bearer ${auth.currentUser.accessToken}`,
  };
  const response = await axios({
    method: 'post',
    url: `${baseURL}/${channelId}`,
    data: { channelPassword },
    headers,
  });
  return response.data;
};

const exportedObject = {
  getAllChannels,
  getChannel,
  createChannel,
  joinChannel,
};

export default exportedObject;
