import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  messageCount: 4,
};

const messageCountSlice = createSlice({
  name: 'messageCount',
  initialState,
  reducers: {
    addmessageCount: (state, action) => {
      state.messageCount = action.payload;
    },
  },
});

export const { addmessageCount } = messageCountSlice.actions;

export default messageCountSlice.reducer;
