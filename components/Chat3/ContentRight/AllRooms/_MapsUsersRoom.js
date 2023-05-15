
import React from 'react'
import PupCenter from '../../../Pup/PupCenter'
import { DeleteRooms } from '../../../Store/redux/Chats/RoomsSlice'
import { BasUrl } from '../../../Store/redux/GlobalLinks/GlobalLinks'
import { useDispatch } from 'react-redux';


export default function MapsUsersRoom({setPupusersRoom ,pupusersRoom , name , dataRoom}) {
  const {users , administrator ,club_coaches ,club_leader}= dataRoom
    const dispatch = useDispatch();


  return (
    <PupCenter rad={"red-10"}>
    <label onClick={()=>{setPupusersRoom(!pupusersRoom)}} className="btn btn-circle h-10 w-12 p-abs left-1/2 -translate-x-1/2 -mt-8">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
    </label> 
    <h1 className='text-center p-2 m-2 fs-20 fw-500 col-bl bbb-1'>All users in room {name}</h1>
    <div className='o-f-a h-5/6 bb-20 rad-10 bb-1 p-2 m-2 mt-8'>
    {users.map((user , i)=>(
         <div className={`d-flex align-c jus-b flex-nw pl-5 pr-5 pt-1 pb-2 cursor-pointer bo-1 rad-10 m-2 hover:bg-slate-200 p-rel`} >
        <div className='flex align-c jus-c'>
        <div className={`avatar ${user.is_online ? "online" : "offline"}`}>
           <div className="w-10 h-10 rounded-full">
             <img src={`${BasUrl}/${user.image}`} />
           </div>
        </div>
          <h1 className='lg:fs-25 fs-14 fw-700 col-dis pl-3'>{i+1}- {user.user_name}</h1>
          {/* <p className="fs-10 cod-dis p-abs bottom-0 right-3">{date}</p> */}
        </div>
        <h1 className='lg:fs-25 fs-14 fw-700 col-dis pl-3'>
        {
            user.id === administrator ? "Admin" : ""
        }
        </h1>

        <h1 className='lg:fs-25 fs-14 fw-700 col-dis pl-3'>
        {
            user.id === club_coaches ? "club coaches" 
          : user.id === club_leader ? "club_leader" : ""
        }
        </h1>

        <div className='flex align-c juc-b'>
        <i onClick={(e)=>{dispatch(DeleteRooms(user.id))}} class="fa-solid fa-trash fs-16 cursor-pointer hover:text-orange-400 p-1 col-dis"></i>
        <i onClick={(e)=>{}} class="fa-solid fa-pen-to-square fs-16 cursor-pointer hover:text-orange-400 p-1 col-dis"></i>
        </div>
        
    </div>
    ))}
    </div>
  </PupCenter>
  )
}
