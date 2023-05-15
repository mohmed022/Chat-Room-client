import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PupCenter from '../../../Pup/PupCenter';
import SlectedUser from './SlectedUser/SlectedUser';

function AddClubUsersButton({ title, selectedUserIds, setSelectedUserIds }) {
  const {UserlistArry , isLoadingUser , errorUser} = useSelector((state) => state.UserFulterArry);
  // console.log("UserlistArry",UserlistArry)
  const userIds = UserlistArry?.map((user) => user.id);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button type="button" className="btn" onClick={() => setIsOpen(true)}>
        <p className="fs-14 col-or">{title}</p>
      </button>
      {isOpen && (
        <PupCenter>
          <div className="bb-1 rad-10 m-2 p-2 w-full o-f-a" style={{ width: '98%', height: '98%' }}>
            <div className="d-flex align-c jus-b ml-2 mr-2">
              <p className="fs-14 col-or">{title}</p>
              <p onClick={() => setIsOpen(false)} className="fs-14 col-or">
                close
              </p>
            </div>
            <SlectedUser
              UserlistArry={UserlistArry}
              userIds={userIds}
              selectedUserIds={selectedUserIds}
              setSelectedUserIds={setSelectedUserIds}
            />
          </div>
        </PupCenter>
      )}
    </>
  );
}

export default function FormRoom({
  setAdministratorIds,
  setClubCoachesIds,
  setClubLeaderIds,
  administratorIds,
  clubCoachesIds,
  clubLeaderIds,
  users,
  setClubCoaches,
  setClubLeader,
  handleAddRoom,
  setName,
  setDescription,
  setImage,
  selectedUserIds,
  setSelectedUserIds,
}) {
  const { UserlistArry } = useSelector((state) => state.UserFulterArry);

  return (
    <form onSubmit={handleAddRoom}>
      <div className="m-4">
        <input className="input w-2/3" onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter room name" />
        <textarea className="input h-16" onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Enter room description"></textarea>
        <div className="d-flex align-c jus-b">
          <input type="file" onChange={(e) => setImage(e.target.files[0])} className="file-input w-full max-w-xs" />
        </div>
        <div className="h-80 o-f-a m-3 d-flex align-c jus-b flex-wrap bo-1 rad-10 p-2 ">
          <div className="d-flex align-c jus-b w-full">
            <AddClubUsersButton title="Add club users" selectedUserIds={selectedUserIds} setSelectedUserIds={setSelectedUserIds} />
            <AddClubUsersButton title="Add club admins" selectedUserIds={administratorIds} setSelectedUserIds={setAdministratorIds} />
            <AddClubUsersButton title="Add club coaches" selectedUserIds={clubCoachesIds} setSelectedUserIds={setClubCoachesIds} />
            <AddClubUsersButton title="Add club leaders" selectedUserIds={clubLeaderIds} setSelectedUserIds={setClubLeaderIds} />
          </div>
        </div>
      </div>
      <button className="btn-block btn">Save room</button>
    </form>
    
    )
  }





// import React, { useEffect } from 'react'
// import { useState } from 'react';
// import { useSelector } from 'react-redux';
// import PupCenter from '../../../Pup/PupCenter';
// import SlectedUser from './SlectedUser/SlectedUser';

// export default function FormRoom({ 
//   setadministratorIds , setclub_coachesIds , setclub_leaderIds , 
//   administratorIds , club_coachesIds , club_leaderIds , users , setclub_coaches, setclub_leader ,
//    handleAddRoom ,setName , setDescription , setimage , selectedUserIds ,setSelectedUserIds}) {
//     const {UserlistArry , isLoadingUser , errorUser} = useSelector((state) => state.UserFulterArry);
//     const filterGetAdmin = UserlistArry.filter((use)=>use.is_staff === true)
//     console.log("filterGetAdmin",filterGetAdmin)
//     // Get user ids from users
//     const userIds = Array.isArray(users) ?users.map((user) => user.id):[];
//     const userIds2 = UserlistArry?.map((user) => user.id);

//     const [pupAdmins, setpupAdmins] = useState(false);
//     const [pupCoachesIds, setpupCoachesIds] = useState(false);
//     const [pupLeaderIds, setpupLeaderIds] = useState(false);


//     useEffect(() => {
//       // Add users in usersIds to selectedUserIds
//       const newSelectedUserIds = [...selectedUserIds];
//       Array.isArray(users) && users.forEach((user) => {
//         if (userIds.includes(user.id) && !selectedUserIds.includes(user.id)) {
//           newSelectedUserIds.push(user.id);
//         }
//       });
//       setSelectedUserIds(newSelectedUserIds);
//     }, [users]); 


//   return (
//     <form onSubmit={handleAddRoom}>
//     <div className="m-4">
//       <input className="input w-2/3" onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter room name" />
//       <textarea className="input h-16" onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Enter room description"></textarea>
//       <div className='d-flex align-c jus-b'>
//       <input type="file" onChange={(e)=>{setimage(e.target.files[0])}} className="file-input w-full max-w-xs" />


//       </div>
//       <div className="h-80 o-f-a m-3 d-flex align-c jus-b flex-wrap bo-1 rad-10 p-2 ">
//         <div className='d-flex align-c jus-b w-full'>



//             <button type="button" className="btn" 
//               onClick={(e)=>{setpupCoachesIds(!pupCoachesIds)}}>
//               <p className='fs-14 col-or'>Add club users</p>
//             </button>
//             {pupCoachesIds && <PupCenter>
//               <div className='bb-1 rad-10 m-2 p-2 w-full o-f-a' style={{width:"98%", height:"98%"}}>
//                 <div className='d-flex align-c jus-b ml-2 mr-2'>
//                   <p className='fs-14 col-or'>Add club users</p>
//                   <p onClick={(e)=>{setpupCoachesIds(!pupCoachesIds)}} className='fs-14 col-or'>close</p>
//                 </div>
//                <SlectedUser UserlistArry={UserlistArry} userIds2={userIds2} 
//                selectedUserIds={selectedUserIds} 
//                setSelectedUserIds={setSelectedUserIds} />
//               </div>
//             </PupCenter>}


//           <button type="button" className="btn" 
//             onClick={(e)=>{setpupAdmins(!pupAdmins)}}>
//               <p className='fs-14 col-or'>Add club Admins</p>
//             </button>
//             {pupAdmins && <PupCenter>
//               <div className='bb-1 rad-10 m-2 p-2 w-full o-f-a' style={{width:"98%", height:"98%"}}>
//                 <div className='d-flex align-c jus-b ml-2 mr-2'>
//                   <p className='fs-14 col-or'>Add club Admins</p>
//                   <p onClick={(e)=>{setpupAdmins(!pupAdmins)}} className='fs-14 col-or'>close</p>
//                 </div>
//                <SlectedUser UserlistArry={UserlistArry} userIds2={userIds2} 
//                             selectedUserIds={administratorIds} 
//                             setSelectedUserIds={setadministratorIds} />
//               </div>
//             </PupCenter>}







//             <button type="button" className="btn" 
//             onClick={(e)=>{setpupCoachesIds(!pupCoachesIds)}}>
//               <p className='fs-14 col-or'>Add club coaches</p>
//             </button>
//             {pupCoachesIds && <PupCenter>
//               <div className='bb-1 rad-10 m-2 p-2 w-full o-f-a' style={{width:"98%", height:"98%"}}>
//                 <div className='d-flex align-c jus-b ml-2 mr-2'>
//                   <p className='fs-14 col-or'>Add club coaches</p>
//                   <p onClick={(e)=>{setpupCoachesIds(!pupCoachesIds)}} className='fs-14 col-or'>close</p>
//                 </div>
//                <SlectedUser UserlistArry={UserlistArry} 
//                             userIds2={userIds2} 
//                             selectedUserIds={club_coachesIds} 
//                             setSelectedUserIds={setclub_coachesIds} />
//               </div>
//             </PupCenter>}








//             <button type="button" className="btn" 
//             onClick={(e)=>{setpupLeaderIds(!pupLeaderIds)}}>
//              <p className='fs-14 col-or'> Add club Leaders</p>
//             </button>
//             {pupLeaderIds && <PupCenter>
//               <div className='bb-1 rad-10 m-2 p-2 w-full o-f-a' style={{width:"98%", height:"98%"}}>
//                 <div className='d-flex align-c jus-b ml-2 mr-2'>
//                   <p className='fs-14 col-or'>Add club Admins</p>
//                   <p onClick={(e)=>{setpupLeaderIds(!pupLeaderIds)}} className='fs-14 col-or'>close</p>
//                 </div>
//                 <SlectedUser UserlistArry={UserlistArry} 
//                              userIds2={userIds2} 
//                              selectedUserIds={club_leaderIds} 
//                              setSelectedUserIds={setclub_leaderIds} />
//               </div>
//             </PupCenter>}

//         </div>






//         {/* <SlectedUser UserlistArry={UserlistArry} userIds2={userIds2} selectedUserIds={selectedUserIds} setSelectedUserIds={setSelectedUserIds} /> */}

//       </div>
//     </div>
//     <button className="btn-block btn">Save room</button>    
//   </form>
//   )
// }


{/* <select onChange={(e)=>{setclub_coaches(e.target.value)}} className="select select-warning w-full max-w-xs bb-1">
<option disabled selected>Choose club coach</option>
{UserlistArry.filter((use)=>use.is_staff === true).map((user)=>(
  <option value={user.id}>{user.user_name}</option>
))}
</select> */}




// import React from 'react'
// import { useSelector } from 'react-redux';

// export default function FormRoom({users , handleAddRoom ,setName , setDescription , setimage , selectedUserIds ,setSelectedUserIds}) {
//     const {UserlistArry , isLoadingUser , errorUser} = useSelector((state) => state.UserFulterArry);

//   return (
//     <form onSubmit={handleAddRoom}>
//     <div className="m-4">
//       <input className="input w-2/3" onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter room name" />
//       <textarea className="input h-36" onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Enter room description"></textarea>
      
//       <input type="file" onChange={(e)=>{setimage(e.target.files[0])}} className="file-input w-full max-w-xs" />
//       <div className="h-80 o-f-a m-3 d-flex align-c jus-b flex-wrap bo-1 rad-10 p-2 ">
//         {UserlistArry.map((user) => (
//           <div key={user.id} className="form-control bb-1 m-2 rad-10 w-60 ">
//             <label className="label cursor-pointer">
//               <div className="d-flex align-c jus-b">
//                 <div className={`avatar`}>
//                   <div className="w-10 h-10 rounded-full">
//                     <img src={user.image} alt={user.user_name} />
//                   </div>
//                 </div>
//                 <span className="lg:fs-25 fs-14 fw-700 col-dis pl-3">{user.user_name}</span>
//               </div>
//               <input
//                 type="checkbox"
//                 className="checkbox"
//                 checked={selectedUserIds.includes(user.id)}
//                 onChange={(e) => {
//                   if (e.target.checked) {
//                     setSelectedUserIds([...selectedUserIds, user.id]);
//                   } else {
//                     setSelectedUserIds(selectedUserIds.filter((id) => id !== user.id));
//                   }
//                 }}
//               />
//             </label>
//           </div>
//         ))}
//       </div>
//     </div>
//     <button className="btn-block btn">Save room</button>    
//   </form>
//   )
// }
