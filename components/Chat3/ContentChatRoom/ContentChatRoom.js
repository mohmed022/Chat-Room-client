import React from 'react';
import BodyChat from './_BodyChat/_BodyChat';
import NavContentChat from './_NavContentChat/_NavContentChat';
import _FooterContentChat from './_FooterContentChat/_FooterContentChat';
import { useSelector } from 'react-redux';
const ContentChatRoom = () => {
  const {activeChat} = useSelector((state) => state.activeChat);

    return (
    <div className={`border-b-1 bg-white sh3 lg:col-span-4 col-span-5 lg:row-span-4 row-span-5 rad-10 sh-2 bo-5`}>
      <NavContentChat/>
      <BodyChat/>
      <_FooterContentChat/>
    </div>
    );
}

export default ContentChatRoom;




{/* <p className="text-center text-gray-700 font-semibold">Content of the chat room</p> */}
