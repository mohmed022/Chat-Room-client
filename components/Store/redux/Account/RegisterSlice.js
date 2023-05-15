import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { create } from "../GlobalLinks/GlobalLinks";
import { UseReduxInsert, UseReduxEdiet} from '../useRedux/useRedux';




const [Insert] = UseReduxInsert( create , "Register/insertRegister" , "scss created Register")
export const insertRegister = Insert

const [Ediet] = UseReduxEdiet( create , "Register/EdietRegister" , "scss Edit Register" )
export const EdietRegister = Ediet




const RegisterSlice = createSlice({
  name: "Register",
  initialState: { RegisterArry: [], isLoadingRegister: false, errorRegister: null },
  extraReducers: {
    [insertRegister.pending]: (state, action) => {
      state.isLoadingRegister = true;
      state.errorRegister = null;
    },
    [insertRegister.fulfilled]: (state, action) => {
      state.isLoadingRegister = false;
      state.RegisterArry.push(action.payload);
      console.log(action.payload);
    },
    [insertRegister.rejected]: (state, action) => {
      state.errorRegister = action.payload;
    },

    // Ediet Register
    [EdietRegister.pending]: (state, action) => {
      state.isLoadingRegister = true;
      state.errorRegister = null;
    },
    [EdietRegister.fulfilled]: (state, action) => {
      state.isLoadingRegister = false;
      state.RegisterArry.push(action.payload);
      console.log(action.payload);
    },
    [EdietRegister.rejected]: (state, action) => {
      state.errorRegister = action.payload;
    },
    
  },
});
export default RegisterSlice.reducer;
