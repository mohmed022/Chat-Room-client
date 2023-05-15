import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addactiveChat } from '../../../Store/redux/Chats/activeChatSlice';
import { addRoomName } from '../../../Store/redux/Chats/RoomNameSlice';

export const UseNameActiveRoom = () => {
    const dispatch = useDispatch();
    const addRoom =(name)=>{
        dispatch(addRoomName(name))        
      }

    const ActiveChat=(id)=>{
      console.log("ActiveChat id",id)
        dispatch(addactiveChat(id))
      }

    return {addRoom , ActiveChat}

}

