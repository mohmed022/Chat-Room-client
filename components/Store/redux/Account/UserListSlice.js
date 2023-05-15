import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BasUrl } from "../GlobalLinks/GlobalLinks";
export const List   = `${BasUrl}/api/user/List/`;

// Get data in API
export const getUserList = createAsyncThunk("UserListName/getUserList", async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
        const res = await fetch(List);
        const data = await res.json();
        return data;
    } catch (errorUser) { return rejectWithValue(errorUser.message); }

})

// Get data in API
export const getUserFulterArry = createAsyncThunk("UserListName/getUserFulterArry", async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI
  try {
      const res = await fetch(`${BasUrl}/api/user/UserData`, {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${JSON.parse(localStorage.getItem('authTokens')).access}`
        }
    });
      const data = await res.json();
      // console.log(data)
      return data;
  } catch (errorUser) { return rejectWithValue(errorUser.message); }

})

// edit user by id api
export const EdietuserProfile = createAsyncThunk(
    "UserListName/EdietuserProfile",
    async (data, thunkAPI ) => {
      const ArryData = [...data]
      const GetidinArry = ArryData[1][1]
      const id = GetidinArry + '/'
      console.log( id + "kkkkkkkkkkkkkkkkkkkkkkk")
      console.log(ArryData)
      console.log(GetidinArry)
      const { rejectWithValue } = thunkAPI;
      try {
        const EidetuserProfile = await fetch(List + id , { method: "PUT", body: data, })
        const dataFech = await EidetuserProfile.json();
        console.log(dataFech)
      return dataFech;
  
      } catch (errorUser) {
        return rejectWithValue(errorUser.message);
      }
    }
  );
  


const UserListSlice = createSlice({
    name: "UserListName",
    initialState: { UserlistArry: [], UserFulterArry:[] , userNaw:[] , isLoadingUser: false, errorUser: null },
    extraReducers: {
        [getUserFulterArry.pending]: (state, action) => {
            state.isLoadingUser = true
            state.errorUser = null
        },
        [getUserFulterArry.fulfilled]: (state, action) => {
            state.isLoadingUser = false
            state.UserFulterArry = action.payload
        },
        [getUserFulterArry.rejected]: (state, action) => {
            state.errorUser = action.payload

        },




        [getUserList.pending]: (state, action) => {
          state.isLoadingUser = true
          state.errorUser = null
        },
        [getUserList.fulfilled]: (state, action) => {
            state.isLoadingUser = false
            state.UserlistArry = action.payload
        },
        [getUserList.rejected]: (state, action) => {
            state.errorUser = action.payload
  
        },


  
        // Ediet user
        [EdietuserProfile.pending]: (state, action) => {
          state.isLoadingUser = true;
          state.errorUser = null;
        },
        [EdietuserProfile.fulfilled]: (state, action) => {
          state.isLoadingUser = false;
          state.UserlistArry.push(action.payload);

        },
        [EdietuserProfile.rejected]: (state, action) => {
          state.errorUser = action.payload;
        },

    }

});
export default UserListSlice.reducer




