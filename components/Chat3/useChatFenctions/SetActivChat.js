import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addactiveChat } from '../../Store/redux/Chats/activeChatSlice';
import { addRoomName } from '../../Store/redux/Chats/RoomNameSlice';

const SetActivChat = () => {
    const {RoomsArry} = useSelector((state) => state.RoomsArry);
    const {activeChat} = useSelector((state) => state.activeChat);
    const dispatch = useDispatch();
    const setActivChatAndRoomName = () => {
        try {
          const roomToActivate =RoomsArry[0]?.id;
          const roomToAddRoom = RoomsArry[0]?.name;
      
          if (activeChat === null) {
            dispatch(addactiveChat(roomToActivate));
            dispatch(addRoomName(roomToAddRoom));
            console.log(`Activated chat room with ID: ${roomToActivate}`);
          } else {
            dispatch(addactiveChat(null));
            console.log('No active chat room');
          }
        } catch (error) {
          console.error(error);
        }
      };
    return {setActivChatAndRoomName} 
}

export default SetActivChat;
