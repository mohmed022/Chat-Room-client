import React from 'react';
import AllRooms from './AllRooms/All_Rooms';
import PupCenter from '../../Pup/PupCenter';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { insertRooms } from '../../Store/redux/Chats/RoomsSlice';
import FormRoom from './AllRooms/_FormRoom';

const ContentRight = ({ stateStyle }) => {
  const { UserFulterArry } = useSelector((state) => state.UserFulterArry);
  const { UserlistArry } = useSelector((state) => state.UserFulterArry);

  const [pupAddRoom, setPupAddRoom] = useState(false);
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [selectedUserIds, setSelectedUserIds] = useState([]);
  const [administratorIds, setAdministratorIds] = useState([]);
  const [clubCoachesIds, setClubCoachesIds] = useState([]);
  const [clubLeaderIds, setClubLeaderIds] = useState([]);

  const dispatch = useDispatch();

  const handleAddRoom = (e) => {
    e.preventDefault();
  
    if (!name) {
      console.log('Name is required');
      return;
    }
    const data = new FormData();
    data.append('name', name);
    data.append('description', description);
    data.append('administrator', JSON.stringify(administratorIds));
    data.append('club_leader',  JSON.stringify(clubLeaderIds));
    data.append('club_coaches', JSON.stringify(clubCoachesIds));
    data.append('image', image, image.name);
    data.append('user_ids', JSON.stringify(selectedUserIds));
    console.log("datadata",[...data])
    dispatch(insertRooms(data));
  };

  return (
    <div className={`border-b-1 bg-wh col-span-1 row-span-4 lg:flex rad-10 sh-2 h-full o-f-a bo-4 p-rel ${stateStyle}`}>
      <i on class="fa-regular fa-square-plus fs-32 p-abs left-2 top-1 cursor-pointer text-orange-500 hover:text-orange-900  "></i>
      <i onClick={() => setPupAddRoom(!pupAddRoom)} class="fa-regular fa-square-plus fs-32 p-abs left-2 top-1 cursor-pointer text-orange-500 hover:text-orange-900  "></i>
      {pupAddRoom && (
        <PupCenter>
          <div>
            <label onClick={() => setPupAddRoom(!pupAddRoom)} className="btn btn-circle h-10 w-12 p-abs left-1/2 -translate-x-1/2 -mt-8">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </label>
          </div>
          <FormRoom
            handleAddRoom={handleAddRoom}
            setSelectedUserIds={setSelectedUserIds}
            setName={setName}
            setImage={setImage}
            setDescription={setDescription}
            setAdministratorIds={setAdministratorIds}
            setClubCoachesIds={setClubCoachesIds}
            setClubLeaderIds={setClubLeaderIds}
            administratorIds={administratorIds}
            clubCoachesIds={clubCoachesIds}
            clubLeaderIds={clubLeaderIds}
            selectedUserIds={selectedUserIds}
          />
        </PupCenter>
      )}
      <AllRooms />
    </div>
  );
};

export default ContentRight;

















// import React from 'react';
// import AllRooms from './AllRooms/All_Rooms';
// import PupCenter from '../../Pup/PupCenter';
// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { insertRooms } from '../../Store/redux/Chats/RoomsSlice';
// import FormRoom from './AllRooms/_FormRoom';

// const ContentRight = ({stateStyle}) => {
//  const {UserFulterArry} = useSelector((state) => state.UserFulterArry);
//  const {UserlistArry , isLoadingUser , errorUser} = useSelector((state) => state.UserFulterArry);
// //  console.log("UserlistArry",UserFulterArry)
//  const [pupAddRoom, setPupAddRoom] = useState(false);
//  const [name, setName] = useState('');
//  const [image, setimage] = useState('');

//  const [description, setDescription] = useState('');
//  const [selectedUserIds, setSelectedUserIds] = useState([]);
//  const [administratorIds, setadministratorIds] = useState([]);
//  const [club_coachesIds, setclub_coachesIds] = useState([]);
//  const [club_leaderIds, setclub_leaderIds] = useState([]);

//  const [isLoading, setIsLoading] = useState(false);
//  const [error, setError] = useState(null);


//  const dispatch = useDispatch();
//  const handleAddRoom = (e)=>{
//     e.preventDefault();
//     const administrator = UserFulterArry?.id
//     let usersIds = selectedUserIds
//     console.log("usersIds",usersIds)

//     if (!name) {
//       console.log('Name is required');
//       return;
//     }

//     const idAdmin = UserFulterArry?.id
//     const data = {
//         image,
//         name,
//         description,
//         administratorIds: [...administratorIds],
//         club_coachesIds: [...club_coachesIds],
//         club_leaderIds: [...club_leaderIds],
//         user_ids: [...selectedUserIds],
//     }
//     console.log("data111111111",data)
//     dispatch(insertRooms(data));
// }

//     return (
//         <div className={`border-b-1 bg-wh col-span-1 row-span-4 lg:flex rad-10 sh-2 h-full o-f-a bo-4 p-rel ${stateStyle}`}>
//           <i on class="fa-regular fa-square-plus fs-32 p-abs left-2 top-1 cursor-pointer text-orange-500 hover:text-orange-900  "></i>
//           <i onClick={()=>{setPupAddRoom(!pupAddRoom)}} class="fa-regular fa-square-plus fs-32 p-abs left-2 top-1 cursor-pointer text-orange-500 hover:text-orange-900  "></i>
//           {pupAddRoom &&
//           <PupCenter>
//             <div>
//             <label onClick={()=>{setPupAddRoom(!pupAddRoom)}} className="btn btn-circle h-10 w-12 p-abs left-1/2 -translate-x-1/2 -mt-8">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
//             </label> 
//             </div>
//             <FormRoom handleAddRoom={handleAddRoom} 
//                       setSelectedUserIds={setSelectedUserIds} 
//                       setName={setName}
//                       setimage={setimage}
//                       setDescription={setDescription}
//                       setadministratorIds={setadministratorIds}
//                       setclub_coachesIds={setclub_coachesIds}
//                       setclub_leaderIds={setclub_leaderIds}
//                       administratorIds={administratorIds}
//                       club_coachesIds={club_coachesIds}
//                       club_leaderIds={club_leaderIds}
//                       selectedUserIds={selectedUserIds} />
//           </PupCenter>}
//             <AllRooms />
//         </div>
//     );
// }

// export default ContentRight;
