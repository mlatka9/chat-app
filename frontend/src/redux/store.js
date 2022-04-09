import { configureStore } from '@reduxjs/toolkit';
import channelReducer from './channelSlice';
import postReducer from './postSlice';

const store = configureStore({
  reducer: {
    channel: channelReducer,
    post: postReducer,
  },
});

export default store;
