import React from 'react';

export default function SlectedUser({ UserlistArry, selectedUserIds, setSelectedUserIds }) {
  const handleSelectAll = () => {
    setSelectedUserIds(UserlistArry.map((user) => user.id));
  };

  const handleDeselectAll = () => {
    setSelectedUserIds([]);
  };

  return (
    <div>
      <div className="mb-2">
        <button type="button" className="btn" onClick={selectedUserIds?.length === UserlistArry?.length ? handleDeselectAll : handleSelectAll}>
          {selectedUserIds?.length === UserlistArry?.length ? 'Deselect all' : 'Select all'}
        </button>
      </div>
      {UserlistArry?.map((user) => (
        <div key={user.id} className="form-control bb-1 m-2 rad-10" style={{ width: '95%' }}>
          <label className="label cursor-pointer">
            <div className="d-flex align-c jus-b">
              <div className={`avatar`}>
                <div className="w-10 h-10 rounded-full">
                  <img src={user.image} alt={user.user_name} />
                </div>
              </div>
              <span className="lg:fs-25 fs-14 fw-700 col-dis pl-3">{user.user_name}</span>
            </div>
            <input
              type="checkbox"
              className="checkbox"
              checked={selectedUserIds.includes(user.id)}
              onChange={(e) => {
                if (e.target.checked) {
                  setSelectedUserIds([...selectedUserIds, user.id]);
                } else {
                  setSelectedUserIds(selectedUserIds.filter((id) => id !== user.id));
                }
              }}
            />
          </label>
        </div>
      ))}
    </div>
  );
}














// import React from 'react'

// export default function SlectedUser({UserlistArry , userIds2 , selectedUserIds , setSelectedUserIds}) {

//     const handleSelectAll = () => {
//         setSelectedUserIds(userIds2);
//       };
  
//       const handleDeselectAll = () => {
//         setSelectedUserIds([]);
//       };

//   return (
//     <div>
//         <div className=" mb-2">
//           <button type="button" className="btn" 
//           onClick={selectedUserIds.length === UserlistArry.length ? handleDeselectAll : handleSelectAll}>
//             {selectedUserIds.length === UserlistArry.length ? 'Deselect all' : 'Select all'}
//           </button>
//         </div>
//         {UserlistArry.map((user) => (
//                 <div key={user.id} className="form-control bb-1 m-2 rad-10" style={{width:"95%"}}>
//                 <label className="label cursor-pointer">
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
//               {/* {userIds.includes(user.id) && <span className="text-green-500 ml-2">&#10003;</span>} */}
//             </label>
//           </div>
//         ))}
//     </div>
//   )
// }
