
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeChat: null,
};

const activeChatSlice = createSlice({
  name: 'activeChat',
  initialState,
  reducers: {
    addactiveChat: (state, action) => {
      console.log("action.payload",action.payload)
      state.activeChat = action.payload;
    },
  },
});

export const { addactiveChat } = activeChatSlice.actions;

export default activeChatSlice.reducer;

