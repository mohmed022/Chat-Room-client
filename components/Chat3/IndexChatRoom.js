import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ContentChatRoom from './ContentChatRoom/ContentChatRoom';
import MapRooms from './ContentRight/AllRooms/_MapRooms';
import ContentRight from './ContentRight/ContentRight';
import FooterChat from './FooterChat/FooterChat';
import NavbarChat from './NavbarChat/NavbarChat';
import { UseNameActiveRoom } from './ContentRight/AllRooms/UseName_Active_Room';
import ModelNavChatIcons from './models/Model_Nav_chat_icons';

const IndexChatRoom = () => {
    return (
      <>
        <div className='lg:p-3 rad-3 bg-w absolute grid grid-cols-6 grid-rows-6 gap-0 sh3'>
          <NavbarChat  />
          {/* <div></div> */}
          <ContentChatRoom  />
          <ContentRight stateStyle={"hidden"} />
          <FooterChat  />
          
        </div>
        <ModelNavChatIcons stateStyle={""}/>
      </>

    );
}

export default IndexChatRoom;
