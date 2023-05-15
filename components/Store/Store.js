import { configureStore } from "@reduxjs/toolkit";

import UserListSlice from "./redux/Account/UserListSlice"

import RoomsSlice from "./redux/Chats/RoomsSlice";
import messageSlice from "./redux/Chats/messageSlice";
import RoomNameSlice from "./redux/Chats/RoomNameSlice";
import NavigationsSlice from "./redux/Chats/NavigationsSlice";
import pageNumberReducer from "./redux/SimpleSlice/pageNumberReducer";
import activeChatSlice from "./redux/Chats/activeChatSlice";
import messageCountSlice from "./redux/Chats/valuesChat/messageCountSlice";
import is_onlineSlice from "./redux/Chats/valuesChat/is_onlineSlice";
 const Store = configureStore ({
    reducer: {
        RoomName: RoomNameSlice,
        messageCount: messageCountSlice,
        is_online:is_onlineSlice,
        activeChat:activeChatSlice,
        pageNumber: pageNumberReducer,
        Navigations:NavigationsSlice,
    
        UserlistArry:UserListSlice,
        UserFulterArry:UserListSlice,

        RoomsArry:RoomsSlice,
        // MessageArry:MessageSlice,
        Messages: messageSlice,
        // Notifications: messageSlice,

        
        
        // UserLoginArry:RegisterSlice,

    }
})

export default Store














// import { configureStore } from "@reduxjs/toolkit";
// import SebjectSlice from "./redux/SebjectSlice";
//  const Store = configureStore ({
//     reducer: {
//         subjects: SebjectSlice
//     }
// })

// export default Store















/*
[1] create reduser in file reducers

[2] import and add in file store

[3] lissin api 
1==> import createAsyncThunk 
2==> import LessonsSlice from './redux/LessonsSlice';
add cimport UserListSlice from './redux/UserListSlise';
onst import Lessons from '../Pages/Corses/PagesCorses/Lessons';
createAsyncThunk  ==>

// lissning API
const getsubject = createAsyncThunk("subjects/getsubject" , async ( _, thunkAPI) => {
    try {
        const res = await fetch ('http://127.0.0.1:7000/api/Subjects_MView/');
        const data =await res.json();
        return data;
    }catch(error){ console.log(error) }

})  

3==> extraReducers  دي فنكشن بتعمل اسنماع للفنكشن اللي خارج اليدروسر
    

*/