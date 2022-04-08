import { createSlice } from '@reduxjs/toolkit';
import ChannelsService from 'service/channels';

export const getChannels = () => {
  return async (dispatch) => {
    const channels = await ChannelsService.getAllChannels();
    dispatch(channelSlice.actions.addChannels(channels));
  };
};

export const getChannel = (id) => {
  return async (dispatch) => {
    const channels = await ChannelsService.getChannel(id);
    dispatch(channelSlice.actions.addChannel(channels));
  };
};

export const createChannel = (channel) => {
  return async (dispatch) => {
    const createdChannel = await ChannelsService.createChannel(channel);
    dispatch(channelSlice.actions.addChannel(createdChannel));
  };
};

const channelSlice = createSlice({
  name: 'comment',
  initialState: {},
  reducers: {
    addChannels: (state, action) => {
      action.payload.forEach(
        (channel) => (state[channel.id] = { ...state[channel.id], ...channel })
      );
    },
    addChannel: (state, action) => {
      state[action.payload.id] = action.payload;
    },
    addMemberToChannel: (state, action) => {
      const { channelId, member } = action.payload;
      state[channelId].members.push(member);
    },
  },
});

export const { addMemberToChannel } = channelSlice.actions;

export default channelSlice.reducer;
