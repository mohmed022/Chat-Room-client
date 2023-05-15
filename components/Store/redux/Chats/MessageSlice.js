import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UseReduxGet, UseReduxInsert, UseReduxEdiet, UseReduxDelete } from '../useRedux/useRedux';
import { BasUrl, MessageLink } from "../GlobalLinks/GlobalLinks";
// import { notify } from '../../../Notify/Notify';

export const getMessage = createAsyncThunk(
      "MessageSlise/getMessage",
      async (_, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
          const res = await fetch(`${BasUrl}/api/chat3/ChatView/64/`,{
          })
          const data = await res.json();
          // console.log(data);

          return data;
        } catch (errorCommintsPost) {
          const error = rejectWithValue(errorCommintsPost.message)
          return error;
        }
      }
    );

    // export const getMessage = createAsyncThunk(
    //   "MessageSlise/getMessage",
    //   async (_, thunkAPI) => {
    //     const authTokens = JSON.parse(localStorage.getItem('authTokens'));
    //     if (!authTokens || !authTokens.access) {
    //       return thunkAPI.rejectWithValue("Missing auth token");
    //     }
        
    //     try {
    //       const res = await fetch("http://127.0.0.1:8000/api2/ChatView/", {
    //         headers: {
    //           'Authorization': `Bearer ${authTokens.access}`,
    //           'Content-Type': 'application/json'
    //         }
    //       });
    //       if (!state === 200) {
    //         return thunkAPI.rejectWithValue("Failed to get Message");
    //       }
    //       const data = await res.json();
    //       console.log(data)
    //       return data;
    //     } catch (error) {
    //       return thunkAPI.rejectWithValue(error.message);
    //     }
    //   }
    // );


    export const insertMessage = createAsyncThunk(
      "Message/insertMessage",
      async (Data, thunkAPI) => {
        const { rejectWithValue, getState } = thunkAPI;
        try {
          const add = await fetch(`http://localhost:8000/api/chat3/ChatView`, {
             method: "POST",
            body: Data.data
          
          });
          const DataJson = await add.json();
          const image_url = DataJson.image
          console.log("image_url",image_url)

          
      if (add.status === 201) {
        console.log(DataJson);
        Data.SEND_MESSAGE(DataJson)
      }
          // console.log(DataJson.image);
          // notify("تم ارسال الصوره بنجاح" , "success");
          // Data.setImage("knjn")
          // console.log(DataJson)  
          return DataJson;
        } catch (errorLesson) {
          return rejectWithValue(errorLesson.message);
        }
      }
    );
    



const [Ediet] = UseReduxEdiet( MessageLink , "Message/EdietMessage" , "scss Edit Message" )
export const EdietMessage = Ediet
const [Delete] = UseReduxDelete( MessageLink , "Message/DeleteMessage" , "scss Delete Message")
export const DeleteMessage = Delete



const MessageSlice = createSlice({
  name: "Message",
  initialState: { MessageArry: [], NewMessageArry: [] , isLoadingMessage: false, errorMessage: null },
  extraReducers: {
    [getMessage.pending]: (state, action) => {
      state.isLoadingMessage = true;
      state.errorMessage = null;
      // notify("loding Get All Message")
    },
    [getMessage.fulfilled]: (state, action) => {
      state.isLoadingMessage = false;
      state.MessageArry = action.payload;
      // notify("scss Get All Message")

    },
    [getMessage.rejected]: (state, action) => {
      state.errorMessage = action.payload;
      // notify("error Get All Message")
    },

    // insert Message
    [insertMessage.pending]: (state, action) => {
      state.isLoadingMessage = true;
      state.errorMessage = null;
    },
    [insertMessage.fulfilled]: (state, action) => {
      state.isLoadingMessage = false;
      state.MessageArry.push(action.payload);
      // console.log(action.payload);
      // console.log(action);
      // console.log(state);
      // console.log(state.MessageArry);
      // notify("scss create " + action.payload && action.payload.Name_Message)

      // SetEl
      

    },
    [insertMessage.rejected]: (state, action) => {
      state.errorMessage = action.payload;
    },

    // Ediet Message
    // [EdietMessage.pending]: (state, action) => {
    //   state.isLoadingMessage = true;
    //   state.errorMessage = null;
    // },
    // [EdietMessage.fulfilled]: (state, action) => {
    //   state.isLoadingMessage = false;
    //   state.MessageArry.push(action.payload);
    //   console.log(action.payload);
    // },
    
    // [EdietMessage.rejected]: (state, action) => {
    //   state.errorMessage = action.payload;
    // },


    [EdietMessage.pending]: (state, action) => {
      state.isLoadingMessage = true;
      state.errorMessage = null;
    },
    
    [EdietMessage.fulfilled]: (state, action) => {
      state.isLoadingMessage = false;
      const updatedMessage = action.payload;
      const MessageIndex = state.MessageArry.findIndex(pkg => pkg.id === updatedMessage.id);
      if (MessageIndex !== -1) {
        state.MessageArry[MessageIndex] = updatedMessage;
      }
      console.log(action.payload);
    },
    
    [EdietMessage.rejected]: (state, action) => {
      state.isLoadingMessage = false;
      state.errorMessage = action.payload?.message || action.error?.message || "Unknown error";
    },

    // Delete Message
    [DeleteMessage.pending]: (state, action) => {
      state.isLoadingMessage = true;
      state.errorMessage = null;
    },
    [DeleteMessage.fulfilled]: (state, action) => {
      state.isLoadingMessage = false;
      // state.PostMessageArry.push(action.payload);
      state.MessageArry = state.MessageArry.filter((el) => el.id !== action.payload)
      console.log(action.payload)
    },
    [DeleteMessage.rejected]: (state, action) => {
      state.errorMessage = action.payload;
    },
    
  },
});
export default MessageSlice.reducer;
