// import Head from "next/head";
// import React from "react";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { insertListuniversityphoto } from "../../Store/redux/University/universityphotoSlice";
// import AddGloball from "./MainAdd/Index";




// const AddPhotoUn = ({IdUn , user , auth}) => {
//   // const {UserFulterArry} = useSelector((state) => state.UserFulterArry);
//   const inputs = [
//     {name:"photo" , type:"file" , placeholder:"" , element:"input" ,style:"p-abs top-0 left-0 " },
//   ]

//   const [fromValues, setfromValues] = useState({ photo:""  })
//   const dispatch = useDispatch();
//   const handelSubmit = (e)=>{
//     e.preventDefault();
//     let data = new FormData();
//         data.append("photo", fromValues.photo, fromValues.photo.name);
//         data.append("university", Number(IdUn));
//         data.append("created_by_universityPhotoArry",user.id);

//     dispatch(insertListuniversityphoto(data));
//     console.log([...data]);
//   }

//   return (
//     <div className="bg-w">
//     <Head>
//       <html dir="rtl" />
//       <title>Add</title>
//       <meta property="og:title" dir="rtl" lang="ar" content="My page title" key="title" />
//     </Head>
  
//     <div className="container mx-auto my-10 ">
//       <AddGloball inputs={inputs} fromValues={fromValues} setfromValues={setfromValues} handleSubmit={handelSubmit}  title={"title"} />
//     </div>
//   </div>


//   )
// };

// export default AddPhotoUn;

 