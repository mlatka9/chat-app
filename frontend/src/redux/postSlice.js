import { createSlice } from '@reduxjs/toolkit';
import postsService from 'service/posts';

export const getPostsFromChannel = (channelId) => {
  return async (dispatch) => {
    const channels = await postsService.getPostsFromChannel(channelId);
    dispatch(postSlice.actions.setPosts(channels));
  };
};

export const createPost = (postBody) => {
  return async () => {
    await postsService.addPost(postBody);
  };
};

const postSlice = createSlice({
  name: 'post',
  initialState: [],
  reducers: {
    setPosts: (state, action) => {
      return action.payload;
    },
    addPost: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addPost } = postSlice.actions;
export default postSlice.reducer;
