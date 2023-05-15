import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage, edite_message_Q, updateMessagesStatus } from '../../../../Store/redux/Chats/messageSlice';
import { addNavigation } from '../../../../Store/redux/Chats/NavigationsSlice';
import { BasUrlws } from '../../../../Store/redux/GlobalLinks/GlobalLinks';

export const UseGETNEWMSG = () => {
    const Messages = useSelector((state) => state.Messages.Messages);
    // const { activeChat } = useSelector((state) => state.activeChat);
    
    const Navigations = useSelector((state) => state.Navigations.Navigations);


    // console.log("Navigations",Navigations)
    const {UserFulterArry} = useSelector((state) => state.UserFulterArry);
    const dispatch = useDispatch();

    const GetMessages = (RoomName , activeChat)=>{
        let socket = null;
        if (!RoomName) {
          return;
        }
      
        try {
          const token = JSON.parse(localStorage.getItem('authTokens')).access
          // socket = new WebSocket(`${BasUrlws}/ws/chat/${RoomName}/?token=${token}&&activeChat=${activeChat}`);
          socket = new WebSocket(`ws://localhost:8000/ws/chat/${RoomName}/?token=${token}&&activeChat=${activeChat}/`);
          // socket = new WebSocket(`wss://localhost:8000/ws/chat/mohmeduser/`);
      
          // Add event listeners for WebSocket events
          socket.addEventListener('open', () => {
            console.log('Connected to WebSocket server');
          });
          // socket.addEventListener('message', (event) => {
          //   // Parse the message data
          //   const messageData = JSON.parse(event.data);      
          //   // console.log("messageData",messageData)
          //   console.log("message",Messages)
      
          //   // Check if the message already exists in the messages state
          //   const MessagesExists = Messages.some((message) => message.id === messageData.id);
          //   // const filterMessages = Messages.filter((message) => message.is_read === false && message.room_id === activeChat);
          //   const filterMessages = Messages.filter((message) => message.is_read === false && message.room_id === activeChat);
          //   const unreadMessageIds = filterMessages.map(message => message.id);

          //   const NavigationsExists = Navigations.some((navigation) => navigation.id === messageData.id);
          //   if (messageData.type === 'chat_message_update_is_read'){
          //     // if(filterMessages){
          //       dispatch(updateMessagesStatus(unreadMessageIds))
          //         console.log("messageData",messageData)
          //     // }
          //   }
          //   if (!MessagesExists) {
          //     if(messageData.type === "chat_message"){
          //         dispatch(addMessage(messageData));
          //         if(messageData.is_read === true && messageData.room_id=== activeChat){
          //           dispatch(updateMessagesStatus(unreadMessageIds))
          //         }
          //         console.log("messageData",messageData)
          //     }
          //   }

          //   if (!NavigationsExists) {
          //     if(messageData.type === "send_notification"){
          //       dispatch(addNavigation(messageData));
          //       // console.log("send_notification",Navigations)
          //     }
          //   }

          // });

          // socket.addEventListener('message', (event) => {
          //   // Parse the message data
          //   const messageData = JSON.parse(event.data);      
          
          //   // Check if the message already exists in the messages state
          //   const messagesExists = Messages.some((message) => message.id === messageData.id && message.is_read === false && message.room_id === activeChat);
          //   const unreadMessageIds = Messages.filter((message) => message.is_read === false && message.room_id === activeChat).map(message => message.id);
          
          //   const navigationsExists = Navigations.some((navigation) => navigation.id === messageData.id);
          
          //   switch (messageData.type) {
          //     case 'chat_message_update_is_read':
          //       console.log('chat_message_update_',messageData.type , messageData.updated_messages_ids ,messageData , unreadMessageIds)
          //       if (unreadMessageIds.length) {
          //         dispatch(updateMessagesStatus(unreadMessageIds))
          //       }
          //       break;
          //     case 'chat_message':
          //       if (!messagesExists) {
          //         dispatch(addMessage(messageData));
          //         if (messageData.is_read === true && messageData.room_id === activeChat) {
          //           dispatch(updateMessagesStatus(unreadMessageIds))
          //         }
          //       }
          //       break;
          //     case 'send_notification':
          //       if (!navigationsExists) {
          //         dispatch(addNavigation(messageData));
          //       }
          //       break;
          //     default:
          //       break;
          //   }
          // });
          
          
          
          socket.addEventListener('message', (event) => {
            const messageData = JSON.parse(event.data);
            const { id, is_read, room_id, type } = messageData;
          
            const isMessageUnread = Messages?.find((message) => message.id === id && !message.is_read && message.room_id === activeChat);
            const isNavigationExist = Navigations.some((navigation) => navigation.id === id);
          
            switch (type) {
              case 'chat_message_update_is_read':
                if (is_read) {
                  console.log("messageData",messageData)
                  dispatch(updateMessagesStatus(room_id));
                }
                break;
              case 'chat_message':
                if (!isMessageUnread) {
                  dispatch(addMessage(messageData));
                }
                break;
              case 'send_notification':
                if (!isNavigationExist) {
                  dispatch(addNavigation(messageData));
                }
                break;
              case 'edite_message_List_popel':
                console.log("event",messageData)
                dispatch(edite_message_Q(messageData));


              default:
                break;
            }
          });
          
          
          socket.addEventListener('close', () => {
            console.log('Disconnected from WebSocket server');
            // dispatch(addactiveChat(null))
          });
          socket.addEventListener('error', (error) => {
            console.log('WebSocket error:', error);
          });
        } catch (error) {
          console.error('WebSocket connection error:', error);
          // Handle the error as appropriate
        }
      
        // Clean up the WebSocket connection when the component unmounts
        return () => {
          if (socket) {
            socket.close();
          }
        };
    }


  
  
  
      const Get_Notification = (RoomName , activeChat)=>{
        let socket = null;
        if (!RoomName) {
          return;
        }
      
        try {
          const token = JSON.parse(localStorage.getItem('authTokens')).access
          // const socket = new WebSocket(`${BasUrlws}/ws/chat/${RoomName}/?token=${token}&mssege_in_lockalhost=${true}`);
          socket = new WebSocket(`ws://localhost:8000/ws/chat/${RoomName}/?token=${token}&&activeChat=${activeChat}`);
          
          // socket = new WebSocket(`wss://127.0.0.1:8000/ws/chat/mohmeduser/`);
      
          // Add event listeners for WebSocket events
          socket.addEventListener('open', () => {
            console.log('Connected to WebSocket server');
          });
          socket.addEventListener('message', (event) => {
            // Parse the message data
            const messageData = JSON.parse(event.data);      
            console.log("edite_message",event)
      
            if(messageData.type === "send_notification"){
              dispatch(addNavigation(messageData));
              console.log("send_notification",messageData)
            }

            if(messageData.type === "edite_message"){
              dispatch(addMessage(messageData));
              console.log("edite_message888888888888888888",messageData)
            }
            // Check if the message already exists in the messages state
            const messageExists = Messages.some((message) => message.id === messageData.id);
      
            if (!messageExists) {
              if(messageData.type === "chat_message"){
                  dispatch(addMessage(messageData));
                  console.log("messageData",messageData)
              }
  
              
            }
          });
          socket.addEventListener('close', () => {
            console.log('Disconnected from WebSocket server');
            // dispatch(addactiveChat(null))
          });
          socket.addEventListener('error', (error) => {
            console.log('WebSocket error:', error);
          });
        } catch (error) {
          console.error('WebSocket connection error:', error);
          // Handle the error as appropriate
        }
      
        // Clean up the WebSocket connection when the component unmounts
        return () => {
          if (socket) {
            socket.close();
          }
        };
    }
    return {GetMessages , Get_Notification}
}








