import React, {useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {updateNotifications } from '../../../../Store/redux/Chats/NavigationsSlice';
import { BasUrl } from '../../../../Store/redux/GlobalLinks/GlobalLinks';
import { formatDate } from '../Use_Col_Fun/useHandelerTime';
import { zoomInImage } from './Zoom_image';
import {AS_Map} from './AS_Map'
const MessagesMap = () => {
  const { activeChat } = useSelector((state) => state.activeChat);
  const { UserFulterArry } = useSelector((state) => state.UserFulterArry);
  const { Messages } = useSelector((state) => state.Messages);
  const filteredMessages = Messages.filter((message) => message.room_id === activeChat); // استخدام المصفوفة المؤقتة بدلاً من Redux state
  const Navigations = useSelector((state) => state.Navigations.Navigations);
  const dispatch = useDispatch();
  console.log("Messages",Messages)
  useEffect(() => {
    activeChat&&dispatch(updateNotifications(activeChat));
  }, [activeChat]);
  console.log("Messages",Messages)
  const sortedMessages = filteredMessages.slice().sort((a, b) => a.id - b.id);
  return (
    <div className="chat-container w-full" style={{ display: 'flex', flexDirection: 'column', overflowY: 'auto', flexGrow: 1 }}>
      {sortedMessages?.map((message, index) => {
        const { time , date} = formatDate(message.created_at2)
        const arr = message.user_name;
        const str1 = arr && arr.toString();
        const isCurrentUser = UserFulterArry && UserFulterArry.user_name === str1;
        const messageStatus = message.is_read ? '✓✓' : '✓';
        return (
          <div className={`chat ${isCurrentUser ? 'chat-start text-start' : 'chat-end text-end'} p-rel mb-5`} key={index}>

            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src={`${BasUrl}${message.user_image}`} alt="" />
              </div>
            </div>

            {message.message &&
              <div className="chat-bubble message-content">
                <p className={`col-wh text-end`} >{message.message}</p>
                <div className='w-16'>
                  <time className={`fs-10 opacity-50 p-abs bottom-0  ${isCurrentUser ? "right-3": "left-3"}`}>{time}</time> 
                </div>
                <p className={`fs-10 opacity-50 p-abs bottom-0 message-content ${!isCurrentUser ? "right-3": "left-3"}`}>{isCurrentUser && messageStatus } {message.user_name} {!isCurrentUser&& messageStatus}</p>
              </div>
            }
            


            {message.image&& (
              <img
                className="image w-96 h-48 rad-10 cursor-pointer"
                src={`${message.image}`}
                loading="lazy"
                width={300}
                height={150}
                onClick={()=>{zoomInImage(message.image)}}
              />
            )}

            {message.vote?.user_id[0]&&<AS_Map message={message} I={index} />}
  
            <div className="chat-header">
              <time className={`text-xs opacity-50 ${!isCurrentUser ? "mr-3": "ml-3"}`}>{date}</time>
            </div>
          </div>
        );})}

        


      </div>
  );
};















{/* <div className="chat-container" style={{ display: 'flex', flexDirection: 'column', overflowY: 'auto', flexGrow: 1 }}>
{sortedMessages?.map((message, index) => {
  const { time , date} = formatDate(message.created_at2)
  const arr = message.user_name;
  const str1 = arr && arr.toString();
  const isCurrentUser = UserFulterArry && UserFulterArry.user_name === str1;
  const messageStatus = message.is_read ? '✓✓' : '✓';
  return (

    <div className={`chat ${isCurrentUser ? 'chat-start text-start' : 'chat-end text-end'} p-rel mb-5`} key={index}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full zoomInDown">
          <img src={`${BasUrl}${message.user_image}`} alt="" />
        </div>
      </div>
      <div className={`chat-header lg:w-2/3`}>
        <div className={`chat-bubble ${isCurrentUser ? 'bbb-2 brb-2' : 'bob-2'} `} >
        {/* {message.message && <p className={`text-justifyb text-opacity-50 font-medium fs-14`}>{message.message}</p>} */}
//         {message.message && <p className={`message-text`} 
//         style={{ fontFamily: 'Arial', lineHeight: '1.5' }}>{message.message}</p>}

//           {message.image&& (
//             <img
//               className="image w-96 h-48 rad-10 cursor-pointer"
//               src={`${message.image}`}
//               loading="lazy"
//               width={300}
//               height={150}
//               onClick={()=>{zoomInImage(message.image)}}
//             />
//           )}


          // <div className={`chat-footer opacity-50 d-flex align-c jus-b p-rel -bottom-3 ${!isCurrentUser && "flex-row-reverse "}`}>
          //   <p className={`text-xs opacity-50 pl-1 text-end p-rel ${isCurrentUser ? "-left-5 "  : " left-5"}`}> {isCurrentUser && messageStatus } {message.user_name} {!isCurrentUser&& messageStatus}</p>
          //   <p className={`text-xs opacity-50 pl-1 text-end p-rel ${isCurrentUser ? "-right-5"  : "right-5"}`}>{time}</p>
          //   {/* <p className={` text-xs opacity-50 pl-1 text-end -right-5 p-rel`}>{date}</p> */}
          // </div>
//         </div>
//       </div>
//     </div>

//   );
// })}
// </div>


// import React, { useState, useRef, useEffect } from 'react';
// import { AnimationOnScroll } from 'react-animation-on-scroll';
// import { useSelector } from 'react-redux';
// import { BasUrl } from '../../../../Store/redux/GlobalLinks/GlobalLinks';
// import "animate.css/animate.min.css";

// const MessagesMap = ({Messages , UserFulterArry}) => {
//   const {activeChat} = useSelector((state) => state.activeChat);
//   const chatEndRef = useRef(null);
//   const chatContainerRef = useRef(null);
//   const scrollButtonRef = useRef(null);

//   const handleScroll = () => {
//     if (
//       chatEndRef.current &&
//       chatEndRef.current.getBoundingClientRect().top <= window.innerHeight
//     ) {
//     }

//     if (
//       chatContainerRef.current &&
//       scrollButtonRef.current
//     ) {
//       const scrollTop = chatContainerRef.current.scrollTop;
//       const scrollHeight = chatContainerRef.current.scrollHeight;
//       const offsetHeight = chatContainerRef.current.offsetHeight;

//       if (scrollHeight - (scrollTop + offsetHeight) >= window.innerHeight) {
//         scrollButtonRef.current.style.display = 'block';
//       } else {
//         scrollButtonRef.current.style.display = 'none';
//       }
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);
//   const filterMessages = Messages.filter((room)=> room.room_id === activeChat ) 
//   const sortedMessages = filterMessages.slice().sort((a, b) => a.id - b.id);
//   return (
//     <div className="chat-container" style={{ display: 'flex', flexDirection: 'column' }}>
//       {sortedMessages?.map((message, index) => {
//         const arr = message.user_name;
//         const str1 = arr && arr.toString();
//         const isCurrentUser =
//           UserFulterArry && UserFulterArry.user_name === str1;
//         const backgroundColor = isCurrentUser ? 'bg-or' : 'bg-bl';
//         const color = isCurrentUser ? 'col-bl' : 'col-bl';

//         return (
         
//           <div className={`chat ${isCurrentUser ? 'chat-start text-start' : 'chat-end text-end'} p-rel pt-3 mb-5`} key={index} >
           
//             <div className="chat-image avatar ">

//               <div className="w-10 rounded-full zoomInDown">
//                 <img src={`${BasUrl}${message.user_image}`} alt="" />

//               </div>

//             </div>

//             <div className={`chat-header lg:w-2/3 `}>
//               <div className={`chat-bubble ${isCurrentUser ? 'bbb-2 brb-2' : 'bob-2'} ${backgroundColor} ${color} `} >
//                 {message.message !== 'null' && (
//                   <p className={` text-justify`}>{message.message}</p>
//                 )}
               
//                 {message.image !== null && (
//                   <img
//                     className="image w-96 h-48 rad-10"
//                     src={`${message.image}`}
//                     loading="lazy"
//                     width={300}
//                     height={150}
//                   />
//                 )}

//                 <div className={`chat-footer opacity-50 d-flex align-c jus-b p-rel -bottom-3`}>
//                   <p className={`${color} text-xs opacity-50 pl-1 text-end -left-5 p-rel`}>{message.user_name}</p>
//                   <p className={`${color} text-xs opacity-50 pl-1 text-end -right-5 p-rel`}>{message.created_time}</p>
//                 </div>
//               </div>
//             </div>
           
//           </div>
//         );
//       })}
//       <div ref={chatEndRef} />

//     </div>
//   );
// };




























{/* 

import React, { useState, useRef, useEffect } from 'react';
import { BasUrl } from '../Store/redux/GlobalLinks/GlobalLinks';

const MessagesMap = ({Messages, UserFulterArry }) => {
  const chatEndRef = useRef(null);
  const chatContainerRef = useRef(null);
  const scrollButtonRef = useRef(null);

  const handleScroll = () => {
    if (
      chatEndRef.current &&
      chatEndRef.current.getBoundingClientRect().top <= window.innerHeight
    ) {
      setShowLoadMore(true);
    }

    if (
      chatContainerRef.current &&
      scrollButtonRef.current
    ) {
      const scrollTop = chatContainerRef.current.scrollTop;
      const scrollHeight = chatContainerRef.current.scrollHeight;
      const offsetHeight = chatContainerRef.current.offsetHeight;

      if (scrollHeight - (scrollTop + offsetHeight) >= window.innerHeight) {
        scrollButtonRef.current.style.display = 'block';
      } else {
        scrollButtonRef.current.style.display = 'none';
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const sortedMessages = Messages.slice().sort((a, b) => a.id - b.id);
  return (
    <div className="chat-container" style={{ display: 'flex', flexDirection: 'column' }}>
      {sortedMessages?.map((message, index) => {
        let image = message.image?.startsWith(BasUrl)?.replace(BasUrl, "")
        
        const arr = message.user_name;
        const str1 = arr && arr.toString();
        const isCurrentUser =
          UserFulterArry && UserFulterArry.user_name === str1;
        const backgroundColor = isCurrentUser ? 'bg-or' : 'bg-bl';
        const color = isCurrentUser ? 'col-bl' : 'col-bl';
        
        return (
          <div className={`chat  ${isCurrentUser ? 'chat-start text-start' : 'chat-end text-end'} p-rel pt-3 mb-5`} key={index} >
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src={`${BasUrl}${message.user_image}`} alt="" />
              </div>
            </div>

            <div className={`chat-header lg:w-2/3 `}>
              <div className={`chat-bubble ${isCurrentUser ? 'bbb-2 brb-2' : 'bob-2'} ${backgroundColor} ${color} `} >
                {message.message !== 'null' && (
                  <p className={` text-justify`}>{message.message}</p>
                )}
                {message.image !== null && (
                  <img className="image w-96 h-48 rad-10 " src={`${BasUrl}${message.image}`} loading="lazy" width={300} height={150} />
                )}
                <div className={`chat-footer opacity-50 d-flex align-c jus-b p-rel -bottom-3`}>
                  <p className={`${color} text-xs opacity-50 pl-1 text-end -left-5 p-rel`}>{message.user_name}</p>
                  <p className={`${color} text-xs opacity-50 pl-1 text-end -right-5 p-rel`}>{message.created_time}</p>
                </div>
              </div>
            </div>

          </div>
        );
      })}
      <div ref={chatEndRef} />
    </div>
  );
};

 */}





















// import React, { useState, useRef, useEffect } from 'react';
// import { BasUrl } from '../Store/redux/GlobalLinks/GlobalLinks';

// const MessagesMap = ({ message, UserFulterArry , setShowLoadMore}) => {
//   const chatEndRef = useRef(null);
//   const chatContainerRef = useRef(null);
//   const scrollButtonRef = useRef(null);

//   const handleScroll = () => {
//     if (
//       chatEndRef.current &&
//       chatEndRef.current.getBoundingClientRect().top <= window.innerHeight
//     ) {
//       setShowLoadMore(true);
//     }

//     if (
//       chatContainerRef.current &&
//       scrollButtonRef.current
//     ) {
//       const scrollTop = chatContainerRef.current.scrollTop;
//       const scrollHeight = chatContainerRef.current.scrollHeight;
//       const offsetHeight = chatContainerRef.current.offsetHeight;

//       if (scrollHeight - (scrollTop + offsetHeight) >= window.innerHeight) {
//         scrollButtonRef.current.style.display = 'block';
//       } else {
//         scrollButtonRef.current.style.display = 'none';
//       }
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // console.log(message);
 

//   // const lastMessages = Messages.slice(
//   //   Math.max(Messages.length - messageCount, 0)
//   // ).reverse();

//   // console.log(message)
//   // const arr = user_name;
//   // const str1 = arr && arr.toString();
//   const isCurrentUser =
//     UserFulterArry && UserFulterArry.user_name === message.user_name;
//   const backgroundColor = isCurrentUser ? 'bg-or' : 'bg-bl';
//   const color = isCurrentUser ? 'col-bl' : 'col-bl';


//   return (
    

        
//           <div className={`chat  ${isCurrentUser ? 'chat-start text-start' : 'chat-end text-end'} p-rel pt-3 mb-1`} key={message.id} >
//             <div className="chat-image avatar">
//               <div className="w-10 rounded-full">
//                 <img src={`${message.image_user}`} alt="" />
//               </div>
//             </div>

//             <div className={`chat-header lg:w-2/3 `}>
//               <div className={`chat-bubble ${isCurrentUser ? 'bbb-2 brb-2' : 'bob-2'} ${backgroundColor} ${color} `} >
//                 {message.message !== 'null' && (
//                   <p className={` text-justify`}>{message.message}</p>
//                 )}
//                 {message.image !== null && (
//                   <img className="image w-96 h-48 rad-10 " src={`${message.image}`} loading="lazy" width={300} height={150} />
//                 )}
//                 <div className={`chat-footer opacity-50 d-flex align-c jus-b p-rel -bottom-3`}>
//                   <p className={`${color} text-xs opacity-50 pl-1 text-end -left-5 p-rel`}>{message.user_name}</p>
//                   <p className={`${color} text-xs opacity-50 pl-1 text-end -right-5 p-rel`}>{message.created_time}</p>
//                 </div>
//               </div>
//             </div>

//           </div>
//   );
// };




export default MessagesMap;








