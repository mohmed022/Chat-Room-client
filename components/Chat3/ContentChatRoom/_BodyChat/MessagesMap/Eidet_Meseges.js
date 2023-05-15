import React from 'react';
import { notify } from '../../../../Notify/Notify';

import { BasUrlws } from '../../../../Store/redux/GlobalLinks/GlobalLinks';

const HANDELER_EIDET_QUESTIONS = ()=>{
  const EIDET_MESSAGE = async (RoomName, room_id , msg_id , UserFulterArry_id , questions_id , e) => {
    e.preventDefault()
    const token = JSON.parse(localStorage.getItem('authTokens')).access
    const socket = new WebSocket(`ws:${BasUrlws}/ws/chat/${RoomName}/?token=${token}&mssege_in_lockalhost=${true}`);
    // list_of_people_who_vote
    try {
      await new Promise((resolve) => {
        if (socket.readyState === WebSocket.OPEN) {
          resolve();
        } else {
          socket.addEventListener('open', resolve);
        }
      });
      const MessageObj = {
        type: 'Eidet_questions',
        room: RoomName,
        questions_id,
        UserFulterArry_id,
        room_id,
        msg_id
      };

  
      // console.log("dataJsondataJsondataJsondataJson",MessageObj)
      socket.send(JSON.stringify(MessageObj));

    } catch (error) {
      console.log('Error sending message: ', error);
    }
  }

  return {EIDET_MESSAGE}
}


  export default HANDELER_EIDET_QUESTIONS



  