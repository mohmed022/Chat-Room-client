import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BasUrl } from '../../../Store/redux/GlobalLinks/GlobalLinks';
import SetActivChat from '../../useChatFenctions/SetActivChat';
import { useMediaQuery } from 'react-responsive';
const _NavCcontentChat = () => {
  const {activeChat} = useSelector((state) => state.activeChat);
  const {RoomsArry} = useSelector((state) => state.RoomsArry);
  const [Active, setActive] = useState([]);
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 991px)' }); // التحقق من حجم الشاشة

  useEffect(() => {
    const ActiveChat = RoomsArry.filter((room)=> room.id === activeChat)[0]
    setActive(ActiveChat)
  }, [RoomsArry , activeChat]);

  const { allUsers } = useSelector((state) => state.is_online);
  const get_Is_Online = allUsers.filter((is_on)=> is_on.id === Active?.users?.id)[0]
  // console.log("get_Is_Online" , get_Is_Online)
  const {setActivChatAndRoomName} = SetActivChat()
    return (
        <div className='h-16 w-full rad-5 p-1 '>
            
            <div className='d-flex align-c jus-b flex-nw pl-5 pr-5 pt-1 pb-2 bbo-1'>
                <div className='flex align-c jus-c'>
                <div className={`avatar ${get_Is_Online?.is_online ? "online" : "offline"}`}>
                   <div className="w-10 h-10 rounded-full">
                     <img src={get_Is_Online?.image} />
                   </div>
                </div>
                <h1 className='lg:fs-25 fs-14 fw-700 col-dis pl-3'>{get_Is_Online?.user_name}</h1>
                </div>
                <p>{get_Is_Online?.is_online? " متصل " : " غير متصل "}</p>



                <div className='flex align-c juc-b '>
                  {isTabletOrMobile&&
                    <label htmlFor="ModelNavChatIcons" className="btn btn-circle h-10 w-12 mr-5"> 
                        <i class="fa-solid fa-outdent fs-25 p-2"></i>
                    </label>}

                    <div className="indicator pr-5">
                      <span className="indicator-item badge badge-secondary fs-12 mt-10 mr-7">2500</span>
                      <button className="btn btn-circle h-10 w-12">
                      <i class="fa-solid fa-coins fs-25 p-2"></i>
                      </button>
                    </div>

                    <label onClick={()=>{setActivChatAndRoomName()}} htmlFor="chatBoxview" className="btn btn-circle h-10 w-12">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </label>

                </div>
                
            </div>
        </div>
    );
}

export default _NavCcontentChat;
