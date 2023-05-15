import React, {useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {updateNotifications } from '../../../../Store/redux/Chats/NavigationsSlice';
import { BasUrl } from '../../../../Store/redux/GlobalLinks/GlobalLinks';
import { formatDate } from '../Use_Col_Fun/useHandelerTime';
import { zoomInImage } from './Zoom_image';
import PupCenter from '../../../../Pup/PupCenter';
import HANDELER_EIDET_QUESTIONS from './Eidet_Meseges';

export const AS_Map = ({message , I}) => {
  const {voting_questions , description_discussion , discussion_topic}= message?.vote
  const {first_name , LastName , is_staff  }= message?.vote?.user_id[0]
  const {list_of_people_who_vote}= voting_questions
  const {room_id , id} = message


  const { UserFulterArry } = useSelector((state) => state.UserFulterArry);
  const { UserlistArry } = useSelector((state) => state.UserlistArry);

  const { RoomName } = useSelector((state) => state.RoomName);
  const {EIDET_MESSAGE}=HANDELER_EIDET_QUESTIONS()
  const [View_Des, setView_Des] = useState(false);

  useEffect(() => {
    const element = document.getElementById(I);
    if (element &&View_Des) {
      element.classList.remove('none');
    }else{
      element.classList.add('none');
    }
    // console.log(element)
  }, [View_Des]);
    

  const [Chaced_Input, setChaced_Input] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

return (
  <div className='w-1/2  col-dis fs-18 p-2 rad-10 h-auto sh-3 sh4 bbo-2 blo-2'>
    <div className='d-flex align-c jus-b pl-2 pr-2'>
      <p className='fs-10'>{first_name} {LastName}</p>

    <div className="avatar-group -space-x-6">
    {UserlistArry?.slice(0, 2).map((user) => {
    return (
      <div className="avatar">
        <div className="w-10">
          <img src={user.image} />
        </div>
      </div>
        );
      })}


{UserlistArry?.slice(0, 2).map((user) => {
    return (
      <div className="avatar">
        <div className="w-10">
          <img src={user.image} />
        </div>
      </div>
        );
      })}



{UserlistArry?.slice(0, 2).map((user) => {
    return (
      <div className="avatar">
        <div className="w-10">
          <img src={user.image} />
        </div>
      </div>
        );
      })}
      <div className="avatar placeholder">
        <div className="w-10 bg-neutral-focus text-neutral-content">
          <span>+50</span>
        </div>
      </div>
    </div>

      <p className='sf-10'>{is_staff ? "Admin" : "user"}</p>
    </div>

    <div className='p-3 mt-2 rad-20 p-rel'>
      <label onClick={(e)=> {setView_Des(!View_Des)}} className="cursor-pointer"> 
        <div className="rad-10 p-2 sh5 -translate-x-3 left-0 w-full bl-scss-9 bt-scss-1 d-flex align-c jus-b">
          <h1 className=''>{discussion_topic}</h1>
          <i class="fa-solid fa-circle-info cursor-pointer"></i>
        </div>
      </label>
      <p className={`fs-10 pt-3 ${View_Des ? "zoom" : "none"}`} id={I}>{description_discussion}</p>

      <div className='pl-2 pr-2 mt-4'>
      
{voting_questions.map((questions, index) => {
  const foundId = questions.list_of_people_who_vote.includes(UserFulterArry.id);
  const isSelected = selectedQuestion === questions.id;

  const totalUsers = voting_questions.reduce((acc, question) => {
    return acc + question.list_of_people_who_vote.length;
  }, 0);  
  const percentage = Math.round((questions.list_of_people_who_vote.length / totalUsers) * 100);
return (
    <div
      className={`${foundId ? 'bg-slate-600 col-wh' : ''} rad-10 mt-3 p-1 bbo-1 blo-9 sh5 cursor-pointer hover:bg-slate-400`}
      onClick={(e) => {
        setSelectedQuestion(questions.id);
        EIDET_MESSAGE(RoomName, room_id, id, UserFulterArry.id, questions.id, e);
      }}
    >
      <div className='d-flex align-c jus-b w-full'>
        <p className="fs-10 ml-2">{index+1}- {questions.question}</p>
        <div className='d-flex align-c juc-b'>
          <p clasName="ml-2 fs-10"> {percentage}</p>
          <i class="fa-solid fa-heart ml-1"></i>
        </div>
      </div>

      {/* {isSelected && ( */}
        <progress className="progress progress-warning w-full" value={percentage} max="100"></progress>
      {/* )} */}
    </div>
  );
})}
      </div>
      
    </div>
  </div>
  );
};

