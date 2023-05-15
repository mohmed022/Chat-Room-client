import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UseReduxGet, UseReduxInsert, UseReduxEdiet, UseReduxDelete } from '../useRedux/useRedux';
import axios from 'axios';
import { BasUrl } from "../GlobalLinks/GlobalLinks";
import { notify } from '../../../Notify/Notify';
const RoomsLink = `${BasUrl}/api/chat3/rooms/`;

export const getRooms = createAsyncThunk(
  "Rooms/getRooms",
  async (_, thunkAPI) => {
    try {
      const authTokens = JSON.parse(localStorage.getItem('authTokens'));
      if (!authTokens || !authTokens.access) {
        return thunkAPI.rejectWithValue("Missing auth token");
      }
      const response = await axios.get(RoomsLink, {
        headers: {
          'Authorization': `Bearer ${authTokens.access}`,
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      notify(error.message , "error");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const insertRooms = createAsyncThunk(
  "Rooms/insertRooms",
  async (data, thunkAPI) => {
    try { 
      // const { image , name , club_coachesIds , club_leaderIds  , administratorIds , description , user_ids } = data;
      // if (!name) {
      //   throw new Error('Name is required');
      // }
      const authTokens = JSON.parse(localStorage.getItem('authTokens'));
      if (!authTokens || !authTokens.access) {
        return thunkAPI.rejectWithValue("Missing auth token");
      }
      const response = await axios.post(RoomsLink, data, {
        headers: {
          'Authorization': `Bearer ${authTokens.access}`,
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log("response",response)

      notify("Room added successfully","success");
      return response.data;
    } catch (error) {
      notify(error.message,error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);



export const EdietRooms = createAsyncThunk(
  "Rooms/EdietRooms",
  async (data, thunkAPI) => {
    try {
      const {administratorIds_Room, club_leader_Room, club_coaches_Room, Name_Room, description_Room, image, user_ids, activeChat } = data;
      const formData = new FormData();
      if (Name_Room) { formData.append('name', Name_Room); }
      if (description_Room) { formData.append('description', description_Room); }
      if (image) { formData.append('image', image, image.name); }
      if (user_ids) { formData.append('user_ids', JSON.stringify(user_ids)); }

      if (administratorIds_Room) { formData.append('administrator', JSON.stringify(administratorIds_Room)); }
      if (club_leader_Room) { formData.append('club_leader', JSON.stringify(club_leader_Room)); }
      if (club_coaches_Room) { formData.append('club_coaches', JSON.stringify(club_coaches_Room)); }

      const authTokens = JSON.parse(localStorage.getItem('authTokens'));
      if (!authTokens || !authTokens.access) {
        return thunkAPI.rejectWithValue("Missing auth token");
      }
      const response = await axios.put(`${RoomsLink}${activeChat}/`, formData, {
        headers: {
          'Authorization': `Bearer ${authTokens.access}`,
        }
      });
      notify("Room updated successfully","success");
      console.log("response.data",response.data)
      return response.data;
    } catch (error) {
      notify(error.message,"error");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);



export const DeleteRooms = createAsyncThunk(
  "Rooms/deleteRooms",
  async (id, thunkAPI) => {
    try {
      const authTokens = JSON.parse(localStorage.getItem('authTokens'));
      if (!authTokens || !authTokens.access) {
        return thunkAPI.rejectWithValue("Missing auth token");
      }
      const response = await axios.delete(`${RoomsLink}${id}/`, {
        headers: {
          'Authorization': `Bearer ${authTokens.access}`,
        }
      });
      notify("Room deleted successfully","success");
      return id;
    } catch (error) {
      notify(error.message,"error");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);









// const [Ediet] = UseReduxEdiet( RoomsLink , "Rooms/EdietRooms" , "scss Edit Rooms" )
// export const EdietRooms = Ediet
// const [Delete] = UseReduxDelete( RoomsLink , "Rooms/DeleteRooms" , "scss Delete Rooms")
// export const DeleteRooms = Delete




const RoomsSlice = createSlice({
  name: "Rooms",
  initialState: { RoomsArry: [], isLoadingRooms: false, errorRooms: null },
  extraReducers: {
    [getRooms.pending]: (state, action) => {
      state.isLoadingRooms = true;
      state.errorRooms = null;
      // notify("loding Get All Rooms")

    },
    [getRooms.fulfilled]: (state, action) => {
      state.isLoadingRooms = false;
      state.RoomsArry = action.payload;
      // notify("scss Get All Rooms")

    },
    [getRooms.rejected]: (state, action) => {
      state.errorRooms = action.payload;
      // notify("error Get All Rooms")
    },

    // insert Rooms
    [insertRooms.pending]: (state, action) => {
      state.isLoadingRooms = true;
      state.errorRooms = null;
    },
    [insertRooms.fulfilled]: (state, action) => {
      state.isLoadingRooms = false;
      state.RoomsArry.push(action.payload);
      // console.log(action.payload);
      // console.log(action);
      // console.log(state);
      // console.log(state.RoomsArry);
      // notify("scss create " + action.payload && action.payload.Name_Rooms)

      // SetEl
      

    },
    [insertRooms.rejected]: (state, action) => {
      state.errorRooms = action.payload;
    },

    // Ediet Rooms
    // [EdietRooms.pending]: (state, action) => {
    //   state.isLoadingRooms = true;
    //   state.errorRooms = null;
    // },
    // [EdietRooms.fulfilled]: (state, action) => {
    //   state.isLoadingRooms = false;
    //   state.RoomsArry.push(action.payload);
    //   console.log(action.payload);
    // },
    
    // [EdietRooms.rejected]: (state, action) => {
    //   state.errorRooms = action.payload;
    // },


    [EdietRooms.pending]: (state, action) => {
      state.isLoadingRooms = true;
      state.errorRooms = null;
    },
    
    [EdietRooms.fulfilled]: (state, action) => {
      state.isLoadingRooms = false;
      const updatedRooms = action.payload;
      const RoomsIndex = state.RoomsArry.findIndex(pkg => pkg.id === updatedRooms.id);
      if (RoomsIndex !== -1) {
        state.RoomsArry[RoomsIndex] = updatedRooms;
      }
      console.log(action.payload);
    },
    
    [EdietRooms.rejected]: (state, action) => {
      state.isLoadingRooms = false;
      state.errorRooms = action.payload?.message || action.error?.message || "Unknown error";
    },

    // Delete Rooms
    [DeleteRooms.pending]: (state, action) => {
      state.isLoadingRooms = true;
      state.errorRooms = null;
    },
    [DeleteRooms.fulfilled]: (state, action) => {
      state.isLoadingRooms = false;
      // state.PostRoomsArry.push(action.payload);
      state.RoomsArry = state.RoomsArry.filter((el) => el.id !== action.payload)
      console.log(action.payload)
    },
    [DeleteRooms.rejected]: (state, action) => {
      state.errorRooms = action.payload;
    },
    
  },
});
export default RoomsSlice.reducer;
