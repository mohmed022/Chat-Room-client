import Head from "next/head";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { insertsections } from "../../Store/redux/SectionsSlice/SectionsSlice";
import AddGloball from "./MainAdd/Index";




const AddSection = ({item}) => {
  const {UserFulterArry} = useSelector((state) => state.UserFulterArry);
  const [Name, setName] = useState("");
  const [Description, setDescription] = useState("");
  const [Price, setPrice] = useState("");
  const [Photo, setPhoto] = useState("");
  const [Link, setLink] = useState("");
  console.log(Photo)
  const inputs = [
    {name:"name"  , max:80 , type:"text" , placeholder:"ادخال اسم التخصص" , element:"input" , style:"w-60-100" },
    {name:"price" , max:10 , type:"text" , placeholder:"ادخال سعر التخصص " , element:"input" ,style:"w-60-100"},
    {name:"photo" , type:"file" , placeholder:"" , element:"input" ,style:"p-abs top-10 left-10"},
    {name:"link" , type:"text" , placeholder:"Add Link video" , element:"textarea" ,style:"w-90-100"},
    {name:"description" , max:480 , type:"text" , placeholder:"ادخال وصف التخصص" , element:"textarea",style:"w-90-100" },
  ]

  const dispatch = useDispatch();
  const handelSubmit = (e)=>{
    // e.preventDefault();
    let data = new FormData();
        data.append("name", Name);
        data.append("created_by_sections",UserFulterArry.id);
        data.append("price", Price);
        data.append("university", item.id);
        data.append("description",Description);
        Link ?  data.append("link",Link ) : data.append("link","No Add Link Video" )
        data.append("photo", Photo, Photo.name);
    dispatch(insertsections(data));
    console.log([...data]);
  }

  return (
    <div className="">  
      <div className="container mx-auto my-10 ">

          <div className="d-flex align-c jus-b">
            <input type="file" onChange={(e)=>{setPhoto(e.target.files[0])}} className="file-input file-input-bordered file-input-warning w-full max-w-xs" />
            <input className="input text-end col-bl" type="number" onChange={(e)=>{setPrice(e.target.value)}} placeholder="السعر" max="20" />
            <input className="input text-end col-bl" type="text" onChange={(e)=>{setName(e.target.value)}} placeholder="اسم التخصص" max="140" />
          </div>

          <input onChange={(e)=>{setLink(e.target.value)}} type="text" placeholder="اضافه لينك فيديو" className="input w-full text-end" />
          <textarea className="input text-end col-bl h-48" type="text" onChange={(e)=>{setDescription(e.target.value)}} placeholder="وصف التخضض" max="3000" />
          <button onClick={handelSubmit} className="btn"> Save </button>
      </div>
  </div>


  )
};

export default AddSection;

