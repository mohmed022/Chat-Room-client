import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { notify } from '../../../Notify/Notify';
import { insertMessage } from '../../../Store/redux/Chats/MessageSlice';
import { BasUrlws } from '../../../Store/redux/GlobalLinks/GlobalLinks';
import { addNewMessage } from '../../../Store/redux/Chats/messageSlice';

export const HANDELERSEND_MSG_OR_IMG = (Message , setMessage , Image , setImage ,  Room_id , User_id  , RoomName ,Vote) => {

    const dispatch = useDispatch();

    const HANDELERSEND_VALUE = (e) => { 
      e.preventDefault()
      
      // Message === "" || Message === " " ? notify("لا يمكن ارسال رساله فارغه" , "info") 
      // :  Object.values(Vote).some(value => value === "")
      // ? Image !== null ? HANDELERSEND_SEND("img") : 
      // notify("لا يمكن ارسال رساله فارغه" , "info") : 
      // HANDELERSEND_SEND() 
      
      // Message === "" || Message === " " && notify("لا يمكن ارسال رساله فارغه" , "info");
      // !Vote && (Image !== null 
      //   ? HANDELERSEND_SEND("img") : HANDELERSEND_SEND());
      // 
      if(Message){
        console.log("Message")
        SEND_MESSAGE()
      }
      
      if (Image){
        console.log("image")
        SEND_IMAGE()
      }
      
      if(Vote.description_discussion){
        console.log("Votedarrrrrr456",Vote , Vote.description_discussion)
        SEND_MESSAGE()
      }
      
      if(!Message && !Image && !Vote.description_discussion){
        // notify("لا يمكن ارسال رساله فارغه" , "info")
        console.log("================================================================")
      }
      
    }
    

    const HANDELERSEND_SEND = async (e) => {
      e === "img" ? SEND_IMAGE() : SEND_MESSAGE()
    } 

    const SEND_MESSAGE = async (DataJson) => {
      const token = JSON.parse(localStorage.getItem('authTokens')).access
      const socket = new WebSocket(`ws:${BasUrlws}/ws/chat/${RoomName}/?token=${token}&mssege_in_lockalhost=${true}`);
      // const socket = new WebSocket(`${BasUrlws}/ws/chat/${RoomName}/?token=${token}&mssege_in_lockalhost=${true}`);
      // socket = new WebSocket(`wss://localhost:8000/ws/chat/${RoomName}/?token=${token}&&activeChat=2`);
      // socket = new WebSocket(`wss://127.0.0.1:8000/ws/chat/mohmeduser/`);
      
      try {
        await new Promise((resolve) => {
          if (socket.readyState === WebSocket.OPEN) {
            resolve();
          } else {
            socket.addEventListener('open', resolve);
          }
        });
        const MessageObj = {
          type: 'chat_message',
          message: Message,
          room: RoomName,
          user: User_id,
          image:DataJson?.id,
          vote:Vote
        };

    
        console.log("dataJsondataJsondataJsondataJson",MessageObj)
    
        if (socket) {
          if(DataJson){
            // dispatch(addNewMessages([DataJson]));
            socket.send(JSON.stringify(MessageObj));
            // dispatch(fetchMessages(Room_id));
            setImage(null)
          }else{
            socket.send(JSON.stringify(MessageObj));
            console.log('WebSocket MessageObj sent:', MessageObj);
            setMessage("");
          }
        }

      } catch (error) {
        console.log('Error sending message: ', error);
      }
    }

    const SEND_IMAGE = async (socket) => {
      const data = new FormData();
      data.append('room_id', Room_id);
      data.append('user_id', User_id);
      // data.append('user_to', User_to);
      data.append('message', Message);
      data.append('image', Image, Image.name);
    
      const Data = {data , setImage , Image , SEND_MESSAGE}
      await dispatch(addNewMessage(Data));
      console.log([...data]);
    };



    return {HANDELERSEND_VALUE}
  }




  