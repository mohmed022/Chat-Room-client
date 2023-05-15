// // is_onlineSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { notify } from '../../../../Notify/Notify';
import { getUserList } from '../../Account/UserListSlice';

const initialState = {
  allUsers: [],
  onlineUsers: [],
  offlineUsers: [],
  lastNotification: null, // يخزن آخر إشعار تم إظهاره
  messages: [] // حالة الرسائل
};

export const is_onlineSlice = createSlice({
  name: 'is_online',
  initialState,
  reducers: {
    add_message: (state, action) => {
      const isNewMessage = !state.messages.some((message) => message.id === action.payload.id);
      if (isNewMessage) {
        state.messages.push(action.payload);
        toast.info(`New message: ${action.payload.message} / ${action.payload.user_name}`);
      }
    },    

    delete_message: (state, action) => {
      state.messages = state.messages.filter((message) => message.id !== action.payload);
    },
    delete_all_messages: (state) => {
      state.messages = [];
    },

    user_join: (state, action) => {
      const userId = action.payload;
      const user = state.allUsers.find((u) => u.id === userId);
      if (!user || user.is_online) return;
    
      user.is_online = true;
    
      state.onlineUsers.push(user);
      state.offlineUsers = state.offlineUsers.filter((u) => u.id !== user.id);
    
      if (!state.lastNotification || !state.onlineUsers.some((u) => u.id === state.lastNotification.id)) {
        // يتم إظهار الإشعار فقط إذا كان الإشعار السابق ليس مثل الجديد
        offline
        notify(`User ${user.user_name} is online`,info)

        toast.info(`User ${user.user_name} is online`);
        state.lastNotification = { id: user.id };
      }
    },
    

    user_leave: (state, action) => {
      const userIndex = state.allUsers.findIndex((u) => u.id === action.payload);
    
      if (userIndex === -1) return;
    
      const user = state.allUsers[userIndex];
      user.is_online = false;
      state.allUsers[userIndex] = user;
    
      state.onlineUsers = state.onlineUsers.filter((u) => u.id !== user.id);
      state.offlineUsers = [...state.offlineUsers.filter((u) => u.id !== user.id), user];
    
      if (!state.lastNotification || state.lastNotification.id !== user.id) {
        notify(`User ${user.user_name} is offline`, "info")
        state.lastNotification = user;
      }
    },
    user_update: (state, action) => {
      const updatedUser = action.payload;
      const userIndex = state.allUsers.findIndex((u) => u.id === updatedUser.id);
    
      if (userIndex === -1) return;
    
      const user = state.allUsers[userIndex];
      const updatedUserOnlineStatus = updatedUser.is_online;
    
      if (updatedUserOnlineStatus && !user.is_online) {
        user.is_online = true;
        state.onlineUsers.push(user);
        state.offlineUsers = state.offlineUsers.filter((u) => u.id !== user.id);
    
        if (!state.lastNotification || state.lastNotification.id !== user.id) {
          notify(`User ${user.user_name} is online`,info)
          state.lastNotification = user;
        }
      } else if (!updatedUserOnlineStatus && user.is_online) {
        user.is_online = false;
        state.allUsers[userIndex] = user;
    
        state.onlineUsers = state.onlineUsers.filter((u) => u.id !== user.id);
        state.offlineUsers = [...state.offlineUsers.filter((u) => u.id !== user.id), user];
    
        if (!state.lastNotification || state.lastNotification.id !== user.id) {
          notify(`User ${user.user_name} is offline`,info)
          state.lastNotification = user;
        }
      }
    
      state.allUsers[userIndex] = updatedUser;
    },
    

    clear_notifications: (state) => {
      state.lastNotification = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserList.fulfilled, (state, action) => {
        state.allUsers = action.payload;
        state.offlineUsers = action.payload;
      })
      .addCase(getUserList.rejected, (state, action) => {
        console.error(action.payload);
      });
  }
});

export const {
  user_join,
  user_leave,
  clear_notifications,
  add_message,
  delete_message,
  delete_all_messages,
  user_update,
} = is_onlineSlice.actions;

export default is_onlineSlice.reducer;
































// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   onlineUsers: [],
//   offlineUsers: [],
//   notificationUsers: [],
// };

// export const is_onlineSlice = createSlice({
//   name: 'is_online',
//   initialState,
//   reducers: {
//     user_join: (state, action) => {
//       state.onlineUsers.push(action.payload);
//       state.notificationUsers.push(action.payload);
//     },
//     user_leave: (state, action) => {
//       const userIndex = state.onlineUsers.findIndex(user => user.id === action.payload.id);
//       if (userIndex !== -1) {
//         state.onlineUsers.splice(userIndex, 1);
//       }
//       state.offlineUsers.push(action.payload);
//     },
//     user_update: (state, action) => {
//       state.onlineUsers = action.payload.filter(user => user.is_online === true);
//       state.offlineUsers = action.payload.filter(user => user.is_online === false);
//     },
//     clear_notifications: (state) => {
//       state.notificationUsers = [];
//     },
//   },
// });

// export const { user_join, user_leave, user_update, clear_notifications } = is_onlineSlice.actions;

// export default is_onlineSlice.reducer;


























// import { createSlice } from '@reduxjs/toolkit';
// import { toast } from 'react-toastify';
// import { getUserList } from '../../Account/UserListSlice';

// const initialState = {
//   allUsers: [],
//   onlineUsers: [],
//   offlineUsers: [],
//   notificationUsers: []
// };

// export const is_onlineSlice = createSlice({
//   name: 'is_online',
//   initialState,
//   reducers: {
//     user_join: (state, action) => {
//       const userId = action.payload.id;
//       const user = state.allUsers.find((u) => u.id === userId);
//       if (!user) return;
    
//       user.is_online = true;
    
//       state.onlineUsers.push(user);
//       console.log("user_join", state.onlineUsers)
//       console.log("user_join userId", userId)
//       state.offlineUsers = state.offlineUsers.filter((u) => u.id !== user.id);
//       console.log("state.offlineUsers ", state.offlineUsers)
    
//       // Add a new notification only if the user is not already in the notification list
//       const isAlreadyNotified = state.notificationUsers.some((u) => u.id === user.id);
//       if (!isAlreadyNotified) {
//         state.notificationUsers.push(user);
//       }

//       // toast.info(`User ${user.user_name} is online`);
//     },
    
//     user_leave: (state, action) => {
//       const userId = action.payload.id;
//       const userIndex = state.allUsers.findIndex((u) => u.id === userId);

//       if (userIndex === -1) return;
    
//       const user = state.allUsers[userIndex];
//       user.is_online = false;
//       state.allUsers[userIndex] = user;
      
//       state.onlineUsers = state.onlineUsers.filter((u) => u.id !== user.id);
//       state.offlineUsers = [...state.offlineUsers.filter((u) => u.id !== user.id), user];
    
//       // Add a new notification only if the user is not already in the notification list
//       const isAlreadyNotified = state.notificationUsers.some((u) => u.id === user.id);
//       if (!isAlreadyNotified) {
//         state.notificationUsers.push(user);
//       }

//       // toast.info(`User ${user.user_name} is offline`);
//     },
    
//     clear_notifications: (state) => {
//       state.notificationUsers = [];
//     }
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(getUserList.fulfilled, (state, action) => {
//         state.allUsers = action.payload;
//         state.offlineUsers = action.payload;
//       })
//       .addCase(getUserList.rejected, (state, action) => {
//         console.error(action.payload);
//       });
//   }
// });

// export const {
//   user_join,
//   user_leave,
//   user_update,
//   clear_notifications,
// } = is_onlineSlice.actions;

// export default is_onlineSlice.reducer;

















// // في ملف is_onlineSlice.js

// import { createSlice } from '@reduxjs/toolkit';
// import { getUserList } from '../../Account/UserListSlice';

// const initialState = {
//   allUsers: [],
//   onlineUsers: [],
//   offlineUsers: [],
//   notificationUsers: []
// };

// export const is_onlineSlice = createSlice({
//   name: 'is_online',
//   initialState,
//   reducers: {
//     user_join: (state, action) => {
//       state.allUsers.push(action.payload);
//       state.offlineUsers.push(action.payload);
//     },
//     user_leave: (state, action) => {
//       state.allUsers = state.allUsers.filter(
//         (user) => user.id !== action.payload.id
//       );
//       state.onlineUsers = state.onlineUsers.filter(
//         (user) => user.id !== action.payload.id
//       );
//       state.offlineUsers = state.offlineUsers.filter(
//         (user) => user.id !== action.payload.id
//       );
//     },
//     user_update: (state, action) => {
//       const { id, is_online } = action.payload;
//       const user = state.allUsers.find((user) => user.id === id);
//       if (user) user.is_online = is_online;
//       if (is_online) {
//         state.onlineUsers.push(user);
//         state.offlineUsers = state.offlineUsers.filter(
//           (u) => u.id !== user.id
//         );
//         state.notificationUsers.push(user);
//       } else {
//         state.offlineUsers.push(user);
//         state.onlineUsers = state.onlineUsers.filter(
//           (u) => u.id !== user.id
//         );
//       }
//     },
//     clear_notifications: (state) => {
//       state.notificationUsers = [];
//     }
//   },
//   extraReducers: {
//     [getUserList.fulfilled]: (state, action) => {
//       state.allUsers = action.payload;
//       state.offlineUsers = action.payload;
//     },
//     [getUserList.rejected]: (state, action) => {
//       console.log(action.payload);
//     }
//   }
// });

// export const { user_join, user_leave, user_update, clear_notifications } =
//   is_onlineSlice.actions;

// export default is_onlineSlice.reducer;














// // is_onlineSlice.js

// import { createSlice } from '@reduxjs/toolkit';

// const isOnlineSlice = createSlice({
//   name: 'is_online',
//   initialState: {
//     users: [],
//     onlineUsers: [],
//   },
//   reducers: {
//     addis_online: (state, action) => {
//       state.onlineUsers = action.payload;
//     },
//     add_user_online: (state, action) => {
//       state.onlineUsers.push(action.payload);
//     },
//     remove_user_online: (state, action) => {
//       state.onlineUsers = state.onlineUsers.filter(
//         (user_name) => user_name !== action.payload
//       );
//     },
//     user_join: (state, action) => {
//       state.users.push(action.payload);
//     },
//     user_leave: (state, action) => {
//       state.users = state.users.filter(
//         (user_name) => user_name !== action.payload
//       );
//     },
//     user_online: (state, action) => {
//       state.users.push(action.payload);
//       state.onlineUsers.push(action.payload);
//     },
//     user_offline: (state, action) => {
//       state.onlineUsers = state.onlineUsers.filter(
//         (user_name) => user_name !== action.payload
//       );
//     },
//   },
// });

// export const {
//   addis_online,
//   add_user_online,
//   remove_user_online,
//   user_join,
//   user_leave,
//   user_online,
//   user_offline,
// } = isOnlineSlice.actions;
// export default isOnlineSlice.reducer;




// import { createSlice } from '@reduxjs/toolkit';

// const isOnlineSlice = createSlice({
//   name: 'is_online',
//   initialState: [],
//   reducers: {
//     addis_online: (state, action) => {
//       return action.payload;
//     },
//     add_user_online: (state, action) => {
//       return [...state, action.payload];
//     },
//     remove_user_online: (state, action) => {
//       return state.filter((user_name) => user_name !== action.payload);
//     },
//     add_user_join: (state, action) => {
//       return [...state, action.payload];
//     },
//     add_user_leave: (state, action) => {
//       return state.filter((user_name) => user_name !== action.payload);
//     },
//   },
// });

// export const { addis_online, add_user_online, remove_user_online, add_user_join, add_user_leave } = isOnlineSlice.actions;

// export default isOnlineSlice.reducer;
