import React, { useEffect } from 'react';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import MessagesMap from './MessagesMap/MessagesMap';

const _BodyChat = () => {
    const Messages = useSelector((state) => state.Messages.Messages);
    const {activeChat} = useSelector((state) => state.activeChat);
    const messagesContainerRef = useRef(null);

    useEffect(() => {
      const messagesContainer = messagesContainerRef.current;
      if (messagesContainer) {
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
      }
    }, [Messages,activeChat]);

    
    return (
        <div className='h-4/5 lg:h-5/6 pb-5 p-4 bbo-1 o-f-a ' ref={messagesContainerRef}>
           <MessagesMap  />
        </div>
    );
}

export default _BodyChat;


