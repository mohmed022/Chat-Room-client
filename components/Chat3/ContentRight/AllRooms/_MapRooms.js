import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formatDate } from '../../ContentChatRoom/_BodyChat/Use_Col_Fun/useHandelerTime';
import { UseNameActiveRoom } from './UseName_Active_Room';
import { DeleteRooms } from '../../../Store/redux/Chats/RoomsSlice';
import MapsUsersRoom from './_MapsUsersRoom';
import EideatRoom from './_EideatRoom';

const MapRooms = (props) => {
    const {activeChat} = useSelector((state) => state.activeChat);
    const {name , id , users , created_at , image} = props
    const { time , date} = formatDate(created_at)
    const dispatch = useDispatch();

// updated_at

    const {addRoom , ActiveChat} = UseNameActiveRoom()
    const {UserFulterArry , isLoadingUser} = useSelector((state) => state.UserFulterArry);
    const {UserlistArry} = useSelector((state) => state.UserlistArry);

    const Navigations = useSelector((state) => state.Navigations.Navigations);
    const [filterNavigations, setfilterNavigations] = useState([]);

    const { allUsers } = useSelector((state) => state.is_online);
    const get_Is_Online = allUsers.filter((is_on)=> is_on.id === users?.id)[0]


    const filterUserlistArry = UserlistArry.filter(user => user.user_name === name)[0]
    const [pupusersRoom, setPupusersRoom] = useState(false);
    const [pupEdeatRoom, setpupEdeatRoom] = useState(false);





    useEffect(() => {
      const filterNavigationsi = Navigations.filter((navigation) => navigation.is_read === false && Number(navigation.room_id) === id )
      setfilterNavigations(filterNavigationsi)
    }, [id]);




    return (
    <div className={`d-flex align-c jus-b flex-nw pl-5 pr-5 pt-1 pb-2 cursor-pointer bo-1 rad-10 m-2 hover:bg-slate-200 p-rel ${activeChat === id && "bg-slate-300 rad-10"}`} 
         onClick={()=>{addRoom(name);ActiveChat(id)}}>
        <div className='flex align-c jus-c'>
        <div className={`avatar ${get_Is_Online?.is_online ? "online" : "offline"}`}>
           <div className="w-10 h-10 rounded-full">
             <img src={image} />
           </div>
        </div>
          <h1 className='lg:fs-25 fs-14 fw-700 col-dis pl-3'>{name}</h1>
          <p className="fs-10 cod-dis p-abs bottom-0 right-3">{date}</p>
        </div>
        {pupusersRoom&&
        <MapsUsersRoom setPupusersRoom={setPupusersRoom} pupusersRoom={pupusersRoom} name={name} dataRoom={props}/>
        }

        {pupEdeatRoom && <EideatRoom props={props} name_stary={name} pupEdeatRoom={pupEdeatRoom} setpupEdeatRoom={setpupEdeatRoom} users={users} />}
        <div className='flex align-c juc-b'>
        <i onClick={(e)=>{dispatch(DeleteRooms(id))}} class="fa-solid fa-trash fs-16 cursor-pointer hover:text-orange-400 p-1 col-dis"></i>
        <i onClick={(e)=>{setpupEdeatRoom(!pupEdeatRoom)}} class="fa-solid fa-pen-to-square fs-16 cursor-pointer hover:text-orange-400 p-1 col-dis"></i>
        <i onClick={(e)=>{setPupusersRoom(!pupusersRoom)}} class="fa-solid fa-users-rays fs-16 cursor-pointer hover:text-orange-400 p-1 col-dis"></i>
            {/* <div className="radial-progress h-15 text-gray-500 w-15" style={{"--value":80}}>80%</div> */}
             {/* {filterNavigations&&<div className="indicator p-abs top-5 mr-16" >
                  <span className="indicator-item fs-10 badge badge-secondary mr-10">{filterNavigations.length >0 && filterNavigations.length}</span> 
                  <i class="fa-solid fa-bell fs-20 mr-5 cursor-pointer"></i>
              </div>} */}
        </div>
        
    </div>
    );
}

export default MapRooms;
