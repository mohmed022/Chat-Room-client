import React from 'react';
import { useState, useEffect } from 'react';
// 
import MainAddImg from './MainAddImg/MainAddImg';

const AddImgUser = ({handleChange , PropsValue}) => {
  const [imagestate, setimagestatestate] = useState('');
  const [passportState, setpassportState] = useState('');
  const [AcademicState, setAcademicState] = useState('');


    return (
        <div className="p-relative transX-3 ml-10 parantimge">  

          {PropsValue === "male" &&<MainAddImg     DefIMG={"/img/6av.jpg"} MSG={"Add a personal photo"} setStateImg={setimagestatestate} StateImg={imagestate} handleChange={handleChange} Name={"image"} />}
          {PropsValue === "female" &&<MainAddImg   DefIMG={"/img/1av.jpg"} MSG={"Add a personal photo"} setStateImg={setimagestatestate} StateImg={imagestate} handleChange={handleChange} Name={"image"} />}
          {PropsValue === "Academic" &&<MainAddImg DefIMG={"img/pass.jpg"} MSG={"Add a picture of the scientific certificate"} setStateImg={setAcademicState} StateImg={AcademicState} handleChange={handleChange} Name={"Academic"} />}
          {PropsValue === "passport" &&<MainAddImg DefIMG={"img/pass.jpg"} MSG={"Add the passport"} setStateImg={setpassportState} StateImg={passportState} handleChange={handleChange} Name={"passport"} />}

        
        </div>

    );
}

export default AddImgUser;





