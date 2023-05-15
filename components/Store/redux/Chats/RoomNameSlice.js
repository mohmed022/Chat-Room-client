import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  RoomName: null,
};

const RoomNameSlice = createSlice({
  name: 'RoomName',
  initialState,
  reducers: {
    addRoomName: (state, action) => {
      state.RoomName = action.payload;
    },
  },
});

export const { addRoomName } = RoomNameSlice.actions;

export default RoomNameSlice.reducer;



