import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
const Send_Vote = ({setPupAdd_AS ,handleAddInput , handleChange , HANDELERSEND_VALUE , vote , setVote}) => {
    const {activeChat} = useSelector((state) => state.activeChat);
    const {UserFulterArry} = useSelector((state) => state.UserFulterArry);
    const [To_Nexr, setTo_Nexr] = useState(false);
    const [newInputs, setNewInputs] = useState([]);
  
    const handleDeleteInput = (index) => {
      setVote(prevState => ({
        ...prevState,
        voting_questions: prevState.voting_questions.filter((question, i) => i !== index)
      }));
    };


    return (
    <div className="p-rel"> 
      <div>
        <label onClick={() => setPupAdd_AS(false)} className="btn btn-circle h-10 w-12 p-abs left-1/2 -translate-x-1/2 -mt-8">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </label>
      </div>

      <div className={`m-4 p-2 bbb-1 blb-1 brb-1 rad-10 pt-5 pr-5 ${To_Nexr ? "none" : ""}`}>
          <textarea className={`input h-20 `} type="text" name="discussion_topic" value={vote.discussion_topic} onChange={handleChange} placeholder="Enter discussion topic"></textarea>
          <textarea className={`input w-2/3 h-96 `} type="text" name="description_discussion" value={vote.description_discussion} onChange={handleChange} placeholder="Enter description discussion" ></textarea>
      </div>

      <div className={`p-rel m-4 p-2 bbb-1 blb-1 brb-1 rad-10 pt-5 pr-5 o-f-a ${To_Nexr ? "" : "none"}`} style={{height:"58vh"}}>
        {vote.voting_questions.map((question, index) => {
          return(
            <div key={index} className='d-flex align-c jus-b'>
              <input
                key={index}
                className="input w-2/3 h-16 hover:border-spacing-1"
                type="text"
                name={`input${index}`}
                value={question[`input${index}`]}
                onChange={(event) => handleChange(event)}
                placeholder={`Enter new input ${index }`} />
              <i onClick={() => handleDeleteInput(index)} class="fa-solid fa-trash col-or fs-33 p-3 cursor-pointer hover:text-blue-500"></i>
            </div>
          )})
        }
      </div>

          {!To_Nexr && <i onClick={()=>{setTo_Nexr(!To_Nexr)}}  
                          class="fa-solid fa-angles-right col-wh fs-33 p-3 w-full text-center bg-orange-500 rad-10 cursor-pointer  hover:bg-blue-500"></i>}

          {To_Nexr && <div className="d-flex align-c jus-b">
            <i onClick={()=>{setTo_Nexr(!To_Nexr)}}  class="fa-solid fa-angles-left col-wh ml-5 fs-33 p-3 bg-orange-500 rad-100-50 cursor-pointer  hover:bg-blue-500"></i>
            {newInputs.length < 7 ? <i onClick={handleAddInput} class="fa-solid fa-plus col-wh ml-5 fs-33 p-3 bg-orange-500 rad-100-50 cursor-pointer mr-5 hover:bg-blue-500"></i>: ""}  

            <label onClick={HANDELERSEND_VALUE} className="">
              <i class={`fa-solid fa-paper-plane col-wh ml-5 fs-33 p-3 bg-orange-500 rad-100-50 cursor-pointer mr-5 hover:bg-blue-500 `}></i>
            </label>
          </div>
        }
        
      </div>
    );
}

export default Send_Vote;







            {/* <textarea className="input h-16"type="text" name="voting_questions" value={vote.voting_questions} onChange={handleChange} placeholder="Enter voting questions"></textarea> */}
            {/* <div className="d-flex align-c jus-b">
              <input type="file"  name="files" onChange={(e) => setImage(e.target.files[0])} className="file-input w-full max-w-xs" />
            </div> */}