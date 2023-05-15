import React, { useState } from 'react'
import PupCenter from '../../../Pup/PupCenter'
import FormRoom from './_FormRoom'
import { useDispatch, useSelector } from 'react-redux';
import { EdietRooms } from '../../../Store/redux/Chats/RoomsSlice';

export default function EideatRoom({props  , pupEdeatRoom , setpupEdeatRoom , users}) {
  const {UserFulterArry} = useSelector((state) => state.UserFulterArry);
  const {UserlistArry , isLoadingUser , errorUser} = useSelector((state) => state.UserFulterArry);

  const {activeChat} = useSelector((state) => state.activeChat);

  const [name, setName] = useState('');
  const [image, setimage] = useState('');
  const [description, setDescription] = useState('');
  const [selectedUserIds, setSelectedUserIds] = useState([]);
  const [administratorIds, setadministratorIds] = useState([]);
  const [club_coachesIds, setclub_coachesIds] = useState([]);
  const [club_leaderIds, setclub_leaderIds] = useState([]);

  const dispatch = useDispatch();
  const handleAddRoom = (e)=>{
    e.preventDefault();

    const administrator = UserFulterArry?.id
    const Name_Room = name ? name : props.name
    const description_Room = description ? description : props.description
    const administratorIds_Room =  administratorIds ? administratorIds : props.administratorIds
    const club_leader_Room =  club_coachesIds ? club_coachesIds : props.club_leader
    const club_coaches_Room = club_leaderIds ?  club_leaderIds : props.club_coaches
    const selectedUserIds_Room = selectedUserIds ? selectedUserIds : props.users
    const data = {
      activeChat,
      Name_Room,
      description_Room,
      administratorIds_Room,
      club_leader_Room,
      club_coaches_Room,
      user_ids: [...selectedUserIds_Room],
    }
    if (image) { data.image = image; }
    console.log("data111111111",data)
    dispatch(EdietRooms(data));
  }
 console.log("activeChat",activeChat)
 
  return (
    <PupCenter rad={"red-10"}>
    <label onClick={()=>{setpupEdeatRoom(!pupEdeatRoom)}} className="btn btn-circle h-10 w-12 p-abs left-1/2 -translate-x-1/2 -mt-8">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
    </label> 
    <h1 className='text-center p-2 m-2 fs-20 fw-500 col-bl bbb-1'> Edeate room {name}</h1>
    <div className='o-f-a rad-10 bb-1 p-2 m-1' style={{height:"63vh"}}>
    <FormRoom handleAddRoom={handleAddRoom} 
                      setSelectedUserIds={setSelectedUserIds} 
                      setName={setName}
                      setimage={setimage}
                      setDescription={setDescription}
                      selectedUserIds={selectedUserIds}
                      setadministratorIds={setadministratorIds}
                      setclub_coachesIds={setclub_coachesIds}
                      setclub_leaderIds={setclub_leaderIds}
                      administratorIds={administratorIds}
                      club_coachesIds={club_coachesIds}
                      club_leaderIds={club_leaderIds}
                      users = {props.users}
                      />
    </div>
  </PupCenter>
  )
}
