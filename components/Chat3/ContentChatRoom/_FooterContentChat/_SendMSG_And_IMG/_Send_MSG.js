import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { HANDELERSEND_MSG_OR_IMG } from '../HANDELERSEND_MSG_OR_IMG';
import PupCenter from '../../../../Pup/PupCenter';
import { BasUrl } from '../../../../Store/redux/GlobalLinks/GlobalLinks';
import Send_Vote from './_Send_Vote';

const _Send_MSG = () => {   
  const {UserFulterArry} = useSelector((state) => state.UserFulterArry);
  const RoomName = useSelector(state => state.RoomName.RoomName);
  const {activeChat} = useSelector((state) => state.activeChat);

  const [Message, setMessage] = useState("");



  const [Image, setImage] = useState(null);
  const [Room_id, setRoom_id] = useState(null);
  const [User_id, setUser_id] = useState(null);
  const [PupAddIMG, setPupAddIMG] = useState(false);
  const [PupAdd_AS, setPupAdd_AS] = useState(false);
  const [Vote, setVote] = useState({
    description_discussion: '',
    discussion_topic: '',
    voting_questions: [{
    }],
    // files: ''
  });
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name.startsWith('input')) {
      const inputIndex = parseInt(name.slice(-1));
      const updatedQuestions = Vote.voting_questions.map((question, index) => {
        if (index === inputIndex) {
          return { ...question, [`input${inputIndex}`]: value };
        }
        return question;
      });
      setVote(prevState => ({ ...prevState, voting_questions: updatedQuestions }));
    } else {
      setVote(prevState => ({ ...prevState, [name]: value }));
    }
  };
  
  const handleAddInput = () => {
    setVote(prevState => ({
      ...prevState,
      voting_questions: [
        ...prevState.voting_questions,
        {

        }
      ]
    }));
  };



  useEffect(() => {
    setRoom_id(activeChat);
    setUser_id(UserFulterArry?.id);
  }, [UserFulterArry , activeChat]);





  const {HANDELERSEND_VALUE} = HANDELERSEND_MSG_OR_IMG (Message , setMessage , Image , setImage ,  Room_id , User_id  ,  (RoomName) , Vote ) 
    return (
      <>
        <form className='d-flex align-c lg:w-1/2 m-auto jus-b min-w-full lg:pt-2 pb-2 pl-2 pr-2' onSubmit={HANDELERSEND_VALUE}>
            <input type="text" onChange={(e)=>{setMessage(e.target.value)}} placeholder="Type here" value={Message} className="p-3 rad-49 w-full " />
            <input id={"input"+activeChat} accept="image/*" 
                   type="file" onChange={(e)=>{setImage(e.target.files[0])}} className="none" />
            {!Message && <label htmlFor={"input"+activeChat} onClick={(e)=>{setPupAddIMG(!PupAddIMG)}}  className="">
            <i class="cursor-pointer hover:text-blue-500 fa-solid fa-image col-or fs-33 p-3"></i>
            </label>}


            <i onClick={()=>{setPupAdd_AS(!PupAdd_AS)}} class="cursor-pointer hover:text-blue-500 fa-solid fa-hashtag col-or fs-33 p-3"></i>
            {PupAdd_AS && <PupCenter><Send_Vote handleAddInput ={handleAddInput} HANDELERSEND_VALUE={HANDELERSEND_VALUE} setPupAdd_AS={setPupAdd_AS} vote={Vote} setVote={setVote} handleChange={handleChange} /></PupCenter>}
           
            <input type="submit" id={`sendbuttom${activeChat}`}  className='none' />
            {!Message?
              <label htmlFor={`sendbuttom${activeChat}`} className="">
                <i class={`cursor-pointer hover:text-blue-500 fa-solid fa-paper-plane col-or fs-33 p-3`}></i>
              </label>
              :
              <label onClick={!Image&&HANDELERSEND_VALUE} className="">
                <i class={`cursor-pointer hover:text-blue-500 fa-solid fa-paper-plane col-or fs-33 p-3`}></i>
              </label>
            }



        </form>

        
      </>
    );
}

export default _Send_MSG;






























// import { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faImage, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

// function App() {
//   const [message, setMessage] = useState("");
//   const [image, setImage] = useState(null);
//   const [showPreview, setShowPreview] = useState(false);

//   const handleMessageChange = (event) => {
//     setMessage(event.target.value);
//   }

//   const handleImageChange = (event) => {
//     setImage(event.target.files[0]);
//     setShowPreview(true);
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Do something with the message and/or image data
//     console.log("Message:", message);
//     console.log("Image:", image);
//   }

//   const handlePreviewClose = () => {
//     setShowPreview(false);
//   }

//   return (
//     <div className="flex flex-col justify-center items-center h-screen">
//       <div className="w-full md:w-1/2 lg:w-1/3 border border-gray-400 rounded-md p-4">
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="message" className="block font-medium mb-1">Message</label>
//             <textarea id="message" name="message" rows="4" className="w-full border border-gray-400 rounded-md p-2" value={message} onChange={handleMessageChange}></textarea>
//           </div>
//           <div className="mb-4">
//             <label htmlFor="image" className="block font-medium mb-1">Image</label>
//             <div className="flex items-center">
//               <label htmlFor="image" className="cursor-pointer mr-4">
//                 <FontAwesomeIcon icon={faImage} className="text-gray-400 hover:text-gray-500 transition duration-300" />
//               </label>
//               <input type="file" id="image" name="image" accept="image/*" className="hidden" onChange={handleImageChange} />
//               {showPreview && image && (
//                 <div className="relative">
//                   <img src={URL.createObjectURL(image)} alt="Selected image" className="w-full h-auto rounded-md" />
//                   <button type="button" className="absolute top-0 right-0 m-2" onClick={handlePreviewClose}>
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-200 hover:text-gray-300 transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                     </svg>
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//           <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
//             <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
//             Send Message
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default App;





// import React, { useState } from 'react';
// import ModelCenter from './ModelCenter';
// import SendIMG from './SendIMG';

// const FormMSG = ({ HANDELERSEND_VALUE, Image, setImage, setMessage, Message, activeChat }) => {
//   const [isPopUpOpen, setIsPopUpOpen] = useState(false); // add state to manage the visibility of the pop-up

//   return (
//     <form className='d-flex align-c lg:w-1/2 m-auto bg-w jus-b p-abs bottom-1 left-1 right-1 z-20' onSubmit={HANDELERSEND_VALUE}>
//       <input type="text" onChange={(e) => { setMessage(e.target.value) }} placeholder="Type here" value={Message} className="p-3 rad-49 w-full " />
//       <input id='inputFileimgeMsg' accept="image/*" type="file" onChange={(e) => { setImage(e.target.files[0]) }} className="none" />
//       {!Message && <label htmlFor="inputFileimgeMsg" className="">
//         <i className="fa-solid fa-image col-or fs-33 p-3"></i>
//       </label>}
//       <input type="submit" id='sendbuttom' className='none' />
//       <label htmlFor="sendbuttom" className="">
//         <i className="fa-solid fa-paper-plane col-or fs-33 p-3"></i>
//       </label>

//       {/* The button to open modal */}
//       <label htmlFor={`pupaddimage${student}`} className="btn">open modal</label>
//       {isPopUpOpen && (
//         <div>
//           <input type="checkbox" id={`pupaddimage${student}`} className="modal-toggle" checked={isPopUpOpen} onChange={() => setIsPopUpOpen(!isPopUpOpen)} />
//           <div className="modal modal-bottom sm:modal-middle">
//             <div className="modal-box">
//               <SendIMG Image={Image} student={student} />
//               <label htmlFor={`pupaddimage${student}`} className="btn">Close Modal</label>
//             </div>
//           </div>
//         </div>
//       )}
//     </form>
//   );
// };

// export default FormMSG;










