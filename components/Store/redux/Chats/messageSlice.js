import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BasUrl } from "../GlobalLinks/GlobalLinks";
import { notify } from "../../../Notify/Notify";
import produce from 'immer';
export const fetchMessages = createAsyncThunk(
  "messages/fetchMessages",
  async (room_id) => {
    console.log("room_idroom_idroom_idroom_id",room_id)
    try {
      const authTokens = JSON.parse(localStorage.getItem('authTokens'));
      if (!authTokens || !authTokens.access) {
        return thunkAPI.rejectWithValue("Missing auth token");
      }

      const response = await fetch(`${BasUrl}/api/chat3/ChatView/`,{
        headers: {
          'Authorization': `Bearer ${authTokens.access}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        console.log('Failed to fetch messages')
        throw new Error('Failed to fetch messages');
      }

      const data = await response.json();
      console.log("datadatadatadatadata1",data)
      return data;

    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);




export const addNewMessage = createAsyncThunk(
  'messages/addNewMessage',
  async (Data) => {
    try {
      const authTokens = JSON.parse(localStorage.getItem('authTokens'));
      if (!authTokens || !authTokens.access) {
        return thunkAPI.rejectWithValue('Missing auth token');
      }

      const response = await fetch(`${BasUrl}/api/chat3/chat/`, {
        method: 'POST',
        body: Data.data
      });
      const DataJson = await response.json();
      if (!response.ok) {
        console.log('Failed to add new message');
        throw new Error('Failed to add new message');
      }

      const image_url = DataJson.image
      console.log("image_url",image_url)

      
        notify("تم ارسال الصوره بنجاح" , "success");
        Data.SEND_MESSAGE(DataJson)

      // console.log('data', Data);
      // console.log('DataJson', DataJson);

      return data;
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


const messageSlice = createSlice({
  name: "messageSlice",
  initialState: {
    Messages: [],
    Notifications: [],
    status: "idle",
    error: null,
    loading: false,
  },
  reducers: {
    edite_message_Q: (state, action) => {
        const { Messages } = state;
        const { msg_id, voting_question, room_id } = action.payload;
        const {list_of_people_who_vote , question_text }= voting_question

      
        const updatedMessages = Messages.map((message) => {
          if (message.id === msg_id) {
            const updatedVotingQuestions = message.vote.voting_questions.map((question) => {
              if (question.id === voting_question.id) {
                return {
                  ...question,
                  list_of_people_who_vote: [...list_of_people_who_vote],
                };
              }
              return question;
            });
      
            return {
              ...message,
              vote: {
                ...message.vote,
                voting_questions: updatedVotingQuestions,
              },
            };
          }
          return message;
        });
      
        return {
          ...state,
          Messages: updatedMessages,
        };
      },
  
    addMessage: (state, action) => {
      const newMessage = action.payload;
      const messageIndex = state.Messages.findIndex(
        (message) => message.id === newMessage.id
      );
      if (messageIndex === -1) {
        state.Messages.push(newMessage);
      }
    },
    deleteMessage: (state, action) => {
      state.loading = true;
      const messageId = action.payload;
      state.Messages = state.Messages.filter(
        (message) => message.id !== messageId
      );
      state.loading = false;
    },
 
    updateMessagesStatus: (state, action) => {
      const { Messages } = state;
      const room_id = action.payload;
      console.log("Room_id",Number(room_id))
      const messagesToUpdate = Messages.filter((message) => message.room_id === Number(room_id) && !message.is_read);
      return {
        ...state,
        Messages: Messages.map((message) => {
          if (messagesToUpdate.includes(message)) {
            return { ...message, is_read: true };
          }
          return message;
        }),
      };
    },

  
     
    clear_Messages: (state) => {
      state.Messages = [];
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },


  extraReducers: (builder) => {
    builder
      .addCase(fetchMessages.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMessages.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.Messages = action.payload;
      })
      .addCase(fetchMessages.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addNewMessage.pending, (state) => {
        state.loading = true;
      })
      .addCase(addNewMessage.fulfilled, (state, action) => {
        state.loading = false;
        state.Messages.push(action.payload);
      })
      .addCase(addNewMessage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addMessage, deleteMessage, updateMessagesStatus , edite_message_Q ,clear_Messages} = messageSlice.actions;
// export const { addMessage, deleteMessage, updateMessage ,setMessages} = messageSlice.actions;

export default messageSlice.reducer;













