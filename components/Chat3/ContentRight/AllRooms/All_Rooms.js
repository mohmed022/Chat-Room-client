




import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { UseNameActiveRoom } from './UseName_Active_Room';
import MapRooms from './_MapRooms';
import PupCenter from '../../../Pup/PupCenter';

const AllRooms = () => {
    const {activeChat} = useSelector((state) => state.activeChat);
    const {UserFulterArry , isLoadingUser , errorUser} = useSelector((state) => state.UserFulterArry);
    const {RoomsArry} = useSelector((state) => state.RoomsArry);
    const {addRoom , ActiveChat} = UseNameActiveRoom()
    // console.log("RoomsArry",RoomsArry)
    // useEffect(() => {
    //   if (RoomsArry) {
    //     addRoom(RoomsArry[0]?.name);
    //     if (activeChat === null) {
    //       ActiveChat(0);
    //       console.log("Activechat1",activeChat)
    //     }else{
    //       ActiveChat(RoomsArry[0]?.id)
    //       console.log("Activechat2",activeChat)
    //     }
    //   }
    // }, [RoomsArry , activeChat]);
  
    const SetMapingRooms =RoomsArry&&RoomsArry.map((room)=>{
      return (<MapRooms {...room} key={room.id} />)
    })
    return (
        <div className='w-full h-50 p-1 mt-10'>
          {SetMapingRooms}
        </div>
    );
}

export default AllRooms;



// const AllRooms = () => {
//     const {UserFulterArry , isLoadingUser , errorUser} = useSelector((state) => state.UserFulterArry);
//     const {RoomsArry} = useSelector((state) => state.RoomsArry);
//     const {addRoom , ActiveChat} = UseNameActiveRoom()
//     useEffect(() => {
//       addRoom(RoomsArry[0]?.name)
//       ActiveChat(RoomsArry[0]?.id)
//     }, [RoomsArry]);
  
//     const SetMapingRooms =RoomsArry&&RoomsArry.map((room)=>{
//       return (<MapRooms {...room} />)
//     })
//     return (
//         <div className='w-full h-50 bb-1 p-1'>
//            {SetMapingRooms}
//         </div>
//     );
// }

// export default AllRooms;
