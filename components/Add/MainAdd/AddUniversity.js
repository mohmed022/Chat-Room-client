import Head from "next/head";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { insertUniversity } from "../../Store/redux/University/UniversitySlice";
import ViewUn from "../../ViewUniversity/ViewUniversity";
import AddGloball from "./MainAdd/Index";





const AddUniversity = ({user}) => {
  const {UserFulterArry} = useSelector((state) => state.UserFulterArry);
  const inputs = [
    {name:"name"  , max:140 , type:"text" , placeholder:"ادخال اسم الجامعه" , element:"input" , style:"p-5 rad-10 wid-100-70" },
    {name:"price" , max:10 , type:"text" , placeholder:"ادخال سعر التحضيري " , element:"input" ,style:"p-5 rad-10 wid-100-30"},
    {name:"photo" , type:"file" , placeholder:"" , element:"input" ,style:"p-5 rad-10 w-60"},
    {name:"link" , type:"text" , placeholder:"Add Link video" , element:"textarea" ,style:"p-2 rad-10 w-full"},
    {name:"description" , max:480 , type:"text" , placeholder:"ادخال وصف الجامعه" , element:"textarea",style:"p-2 rad-10 w-full" },
  ]

  const [fromValues, setfromValues] = useState({ name:"", description:"" , price:"", photo:"" , link:"" })
  const dispatch = useDispatch();
  const handelSubmit = (e)=>{
    e.preventDefault();
    let data = new FormData();
        data.append("name", fromValues.name);
        data.append("price", fromValues.price);
        data.append("description", fromValues.description);
        data.append("created_by_university",UserFulterArry && UserFulterArry.id);
        fromValues.link ?  data.append("link",fromValues.link ) : data.append("link","No Add Link Video" )
        data.append("photo", fromValues.photo, fromValues.photo.name);
    dispatch(insertUniversity(data));
    console.log([...data]);
  }

  return (
    <div className="h-full w-full o-f-a bg-w">
    <Head>
      {/* <html dir="rtl" /> */}
      <title>Add</title>
      <meta property="og:title" dir="rtl" lang="ar" content="My page title" key="title" />
    </Head>
  
    <div className="container mx-auto my-10 p-rel">
      <AddGloball inputs={inputs} fromValues={fromValues} setfromValues={setfromValues} handleSubmit={handelSubmit}  title={"title"} />
      <ViewUn type={"Add"}/>
    </div>
  </div>


  )
};

export default AddUniversity;


























    // <Add inputs={inputs} fromValues={fromValues} setfromValues={setfromValues} handleSubmit={handelSubmit} />


        {/* <form onSubmit={handelSubmit} className="">
          <input value={fromValues.name} type="text" onChange={(e)=>{handellinputs(e)}} className="p-3 m-3 w-60-100 text-xl" name="name" placeholder="ادخال اسم الجامعه"  />
          <input value={fromValues.price} type="text" onChange={(e)=>{handellinputs(e)}} className="p-3 m-3 w-20-100 text-xl" name="price" placeholder="سعر التحضيري"  />
          <input type="file" onChange={(e)=>{handellinputs(e)}} className="none" name="photo" id="photoid" placeholder="enter price university"  />
          <input type="file" onChange={(e)=>{handellinputs(e)}} className="none" name="video" id="videoid" placeholder="enter price university"  />
          <label className="p-6" htmlFor="videoid">
            <i className="fa-sharp fa-solid fa-image text-orange-500 p-3 text-3xl"></i>
          </label>
          <label className="p-6" htmlFor="photoid">
             <i className="fa-solid fa-clapperboard   text-orange-500 p-3 text-3xl"></i>
          </label>
          <textarea value={fromValues.description} type="text" onChange={(e)=>{handellinputs(e)}} className="p-3 m-3 w-90-100 text-xl" name="description" placeholder="ادخال وصف مختصر بظهر للمستخدم في البدايه"/>
          <textarea value={fromValues.description2} type="text" onChange={(e)=>{handellinputs(e)}} className="p-3 m-3 w-90-100 text-xl" name="description2" placeholder="تقديم بحث كامل عن الجامعه تظهر به كامل البيانات"/>
          <input name="submit" className="p-3 m-3 w-90-100 text-xl border-red-400" style={{border:"blue 2px solid" , cursor:"pointer"}} type="submit"  placeholder="submut" />

      </form> */}