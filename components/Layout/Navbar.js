import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { BasUrl } from "../Store/redux/GlobalLinks/GlobalLinks";
import { addRoomName } from "../Store/redux/Chats/RoomNameSlice";
import { delete_all_messages, delete_message } from "../Store/redux/Chats/valuesChat/is_onlineSlice";
import { addactiveChat } from "../Store/redux/Chats/activeChatSlice";
import SetActivChat from "../Chat3/useChatFenctions/SetActivChat";
import { useMediaQuery } from 'react-responsive';


const Navbar = () => {
  const {UserFulterArry , isLoadingUser , errorUser} = useSelector((state) => state.UserFulterArry);
  const {setActivChatAndRoomName} = SetActivChat()
  const Navigations = useSelector((state) => state.Navigations.Navigations);
  const filterNavigations = Navigations.filter(navigation => navigation.is_read === false)

  const dispatch = useDispatch();




  return (
    <>
    {UserFulterArry && (



    <div className="navbar bg-neutral text-neutral-content" style={{ zIndex: "200" }}>




      <div className="d-flex align-c jus-b ml-4 mr-4 w-full">
        {/* start icons left */}
        <div className="avatar cursor-pointer">
          <div className="w-11 rounded-full ring-offset-base-100 ring-offset-2 cursor-pointer">
            <img className="w-10 h-10" src="/img/Academic.png" /> 
          </div>      
          <a className="btn btn-ghost normal-case text-xl">A&M</a>
        </div>
        {/* end icons left */}

        {/* start icons center */}
        <div className="flixnone align-c jus-b ">
          <Link href="/about-us" className="btn btn-ghost normal-case text-xl"> معلومات عنا </Link>
          {/* <Link href="/sections/Translate-papers" className="btn btn-ghost normal-case text-xl"> ترجمه اوراق و معادله  </Link>
          <Link href="/sections/booking-flight" className="btn btn-ghost normal-case text-xl"> حجز طيران  </Link>
          <Link href="/sections/money-transfer" className="btn btn-ghost normal-case text-xl"> تحويل اموال </Link> */}
          <Link href="/Scholarships"  className="btn btn-ghost normal-case text-xl"> المنح الدراسية</Link>
          <Link href="/university" className="btn btn-ghost normal-case text-xl"> الجامعات الروسية</Link>
          <Link href="/" className="btn btn-ghost normal-case text-xl">الصفحة الرئيسية</Link>

        </div>
        {/* end icons center */}

        {/* start icons ri */}
        <div className="d-flex align-c jus cursor-pointer">



        <div className="relative">
        <div className="p-abs lg:w-96 lg:right-1 lg:top-10 -left-80 top-12 -mt-4">


      
    </div>
    </div>





      
        
          {!UserFulterArry.user_name && <div className="indicator">
            <span className="indicator-item badge badge-secondary mr-8">login</span> 
            <Link href="/account" className="fa-solid fa-right-to-bracket fs-25 mr-5 cursor-pointer"></Link>
          </div>}




          <div className="avatar cursor-pointer">
            <div className="w-10 rounded-full ring ring-green-500 ring-offset-base-100 ring-offset-2">
            <Link href="/profile"> <img src={BasUrl+UserFulterArry.image} /></Link>
            </div>      
          </div>

        </div>
        {/* end icons ri */}


      </div>


    </div>
        )}
    </>
  );
}

export default Navbar;










