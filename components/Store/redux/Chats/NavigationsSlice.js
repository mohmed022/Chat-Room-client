import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BasUrl, NotificationsLink } from "../GlobalLinks/GlobalLinks";

const initialState = {
  Navigations: [],
  status: "idle",
  error: null,
};



export const fetchNotifications = createAsyncThunk(
  "Navigations/fetchNotifications",
  async (room_id) => {
    console.log("room_idroom_idroom_idroom_id",room_id)
    try {
      const authTokens = JSON.parse(localStorage.getItem('authTokens'));
      if (!authTokens || !authTokens.access) {
        return thunkAPI.rejectWithValue("Missing auth token");
      }

      const response = await fetch(Notific`${BasUrl}/api/chat3/Notifications/`,{
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
      console.log("Notifications",data)
      return data;

    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);



// export const deleteNotificationsByRoom = createAsyncThunk(
//   'notifications/deleteNotificationsByRoom',
//   async (id, { rejectWithValue, getState }) => {
//     const authTokens = JSON.parse(localStorage.getItem('authTokens'));
//     if (!authTokens || !authTokens.access) {
//       return rejectWithValue('Missing auth token');
//     }
//     try {
//       const response = await fetch(`${NotificationsLink}${id}/`, {
//         method: 'DELETE',
//         headers: {
//           'Authorization': `Bearer ${authTokens.access}`,
//           'Content-Type': 'application/json',
//         },
//       });
//       if (!response.ok) {
//         const error = await response.json();
//         return rejectWithValue(error);
//       }
//       return id;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
export const updateNotifications = createAsyncThunk(
  'notifications/updateNotifications',
  async (roomId, { rejectWithValue }) => {
    const authTokens = JSON.parse(localStorage.getItem('authTokens'));
    if (!authTokens || !authTokens.access) {
      return rejectWithValue('Missing auth token');
    }
    try {
      const response = await fetch(`${BasUrl}/api/chat3/Notifications/${Number(roomId)}/update/`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${authTokens.access}`,
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        const error = await response.json();
        return rejectWithValue(error);
      }
      return roomId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);



  



const NavigationsSlice = createSlice({
  name: "Navigations",
  initialState,
  reducers: {
    addNavigation: (state, action) => {
      state.Navigations.push(action.payload);
    },
    deleteNavigation: (state, action) => {
      state.Navigations = state.Navigations.filter(
        (Navigation) => Navigation.id !== action.payload
      );
    },
    updateNavigation: (state, action) => {
      const { id, text } = action.payload;
      const NavigationIndex = state.Navigations.findIndex(
        (Navigation) => Navigation.id === id
      );
      if (NavigationIndex !== -1) {
        state.Navigations[NavigationIndex].text = text;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotifications.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNotifications.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.Navigations = state.Navigations.concat(action.payload);
        console.log("jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj",state, action)
      })
      .addCase(fetchNotifications.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(updateNotifications.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateNotifications.fulfilled, (state, action) => {
        state.loading = false;
        state.Navigations = state.Navigations.map((notification) =>
          notification.room_id === action.payload ? { ...notification, is_read: true } : notification
        );
      })
      .addCase(updateNotifications.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { addNavigation, deleteNavigation, updateNavigation ,notificationDeleted} =
  NavigationsSlice.actions;

export default NavigationsSlice.reducer;





// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   Navigations: [],
// };

// const NavigationsSlice = createSlice({
//   name: "Navigations",
//   initialState,
//   reducers: {
//     addNavigation: (state, action) => {
//       state.Navigations.push(action.payload);
//     },
//     deleteNavigation: (state, action) => {
//       state.Navigations = state.Navigations.filter(
//         (Navigation) => Navigation.id !== action.payload
//       );
//     },
//     updateNavigation: (state, action) => {
//       const { id, text } = action.payload;
//       const NavigationIndex = state.Navigations.findIndex(
//         (Navigation) => Navigation.id === id
//       );
//       if (NavigationIndex !== -1) {
//         state.Navigations[NavigationIndex].text = text;
//       }
//     },
//   },
// });

// export const { addNavigation, deleteNavigation, updateNavigation } = NavigationsSlice.actions;

// export default NavigationsSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   Navigations: [],
// };

// const NavigationsSlice = createSlice({
//     name: 'Navigations',
//     initialState,
//     reducers: {
//       addNavigations: (state, action) => {
//         state.Navigations = action.payload;
//       },
//     },
//   });

// export const { addNavigations } = NavigationsSlice.actions;

// export default NavigationsSlice.reducer;
