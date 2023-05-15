import Head from "next/head";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { insertDescriptionUniversity } from "../../Store";
import AddGloball from "./MainAdd/Index";





const AddDescription = ({IdUn}) => {
  const {UserFulterArry} = useSelector((state) => state.UserFulterArry);


  const [Name, setName] = useState("");
  const [Description, setDescription] = useState("");
  const dispatch = useDispatch();
  const handelSubmit = (e)=>{
    e.preventDefault();
    let data = new FormData();
        data.append("created_by_universityDescription", UserFulterArry.id);
        data.append("name", Name);
        data.append("description", Description);
        data.append("university", Number(IdUn));
    dispatch(insertDescriptionUniversity(data));
    console.log([...data]);
  }

  return (
    <div className="bg-w">
    <div className="container mx-auto my-10 ">
        <input    className="input text-end col-bl" type="text" onChange={(e)=>{setName(e.target.value)}} placeholder="Name Description" max="140" />
        <textarea className="input text-end col-bl h-48" type="text" onChange={(e)=>{setDescription(e.target.value)}} placeholder="Description" max="480" />
        <button onClick={handelSubmit} className="btn"> Save </button>
    </div>
  </div>


  )
};

export default AddDescription;

