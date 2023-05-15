import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
const SendIMG = (Image) => {
  
// console.log(Userlist.filter(itm => itm === UserFulterArry )[0])
const {UserFulterArry} = useSelector((state) => state.UserFulterArry);
// console.log(UserFulterArry)

  const [image, setimage] = useState('');
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (image) {
      setImageUrl(URL.createObjectURL(image));
    }
  }, [image]);
  const changHandler = (e) =>{
    setimage(e.target.files[0])
  }





    return (
    <div className="p-rel"> 



      <form className="from" onSubmit={handleSubmitimage} >
      <img id='imgid'
        className="lg:w-80 lg:h-80 h-52 w-52 p-3 bl-1 bbb-1 m-auto rad-10"
        src={imageUrl === null ? (`${BasUrl}${UserFulterArry&&UserFulterArry.image}`) : (imageUrl)}
        alt=""
      />

        <input id='Submitfrom' className=" none" type="submit" placeholder="seve Imge" />
        <div className='p-rel'>
          <input className="none" accept="image/jpeg,image/png,image/gif" id="input_field" onChange={changHandler} type="file" placeholder="enter photo creacte"  />
          <label htmlFor="input_field">
            <i onClick={(e)=> {document.getElementById("iconSave").classList.toggle("none"); e.target.classList.toggle("none")}} 
            id="iconEdit" className="p-abs lg:bottom-5 bottom-1 fs-24 left-1/2 lg:-translate-x-40 -translate-x-28 bbb-1 blb-1 p-2 fs-33 col-or rad-100-50 fa-solid fa-pen-to-square"></i>
          </label>

          <label htmlFor="Submitfrom">
          <i onClick={(e)=> {document.getElementById("iconEdit").classList.toggle("none"); e.target.classList.toggle("none")}} 
          id='iconSave' className="none p-abs bottom-5 left-1/2 -translate-x-40 fs-33 bb-2 p-2 col-or fs-33 col-or rad-100-50 fa-solid fa-paper-plane"></i>
          </label>
        </div>  
      </form>



        
      </div>
    );
}

export default SendIMG;

























// import React from 'react';
// import { useSelector } from 'react-redux';
// import PupCenter from '../../../../Pup/PupCenter';

// const SendIMG = ({ Image , setImage}) => {
//   const {activeChat} = useSelector((state) => state.activeChat);

//   return (
// <div>
// hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh {activeChat}
// </div>
//   );
// };

// export default SendIMG;















// import React from 'react';
// import { useSelector } from 'react-redux';

// const SendIMG = ({ Image , setImage , setPupAddIMG , PupAddIMG}) => {
//   const {activeChat} = useSelector((state) => state.activeChat);
//   console.log("Image",Image)
//   return (
//     <>

//           <div className="bb-1 rad-10 w-full h-5/6">
//           <label htmlFor={"input"+activeChat} className="cursor-pointer">
//             <img src={`${ Image ? URL.createObjectURL(Image) : "./img/1.png" }`} alt="" className="w-full h-full" />
//           </label>
//             <div className="modal-action justify-between">

//               <div onClick={(e)=>{setImage(null);setPupAddIMG(!PupAddIMG)}} className="ml-2">
//                 <i class="fa-solid fa-trash col-or fs-33 p-3 bb-1 rad-100-50"></i>
//               </div>

//               <label htmlFor={`sendbuttom${activeChat}`} className="mr-2">
//                 <i class="fa-solid fa-paper-plane col-or fs-33 p-3 bb-1 rad-100-50"></i>
//               </label>

//             </div>
//           </div>
    

//     </>
//   );
// };

// export default SendIMG;
















// import React, { useEffect, useState } from 'react';

// const SendIMG = ({ HANDELERSEND_VALUE, Image }) => {
//   const [Img, setImg] = useState(null);

//   useEffect( async () => {
//       const file = Image
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
  
//       const loadImg = () => {
//         return new Promise((resolve, reject) => {
//           reader.onload = () => resolve(reader.result);
//           reader.onerror = (error) => reject(error);
//         });
//       };
  
//       const imgDataUrl = await loadImg();
//       setImg(imgDataUrl); // update the Image state with the selected image
//       setModalActive(true)

//   }, [Image]);

//   console.log(Img)
//   return (
//     <div className='p-abs left-2 -top-96 right-2 d-flex align-c jus-c bb-1 p-5 bg-or'>
//       <p>hi mohmed</p>
//       <img className="w-full h-full" src={Img} alt="" />
//     </div>
//   );
// }

// export default SendIMG;
























// import React from 'react';

// const SendIMG = ({ HANDELERSEND_VALUE, Image, Img }) => {
// console.log(Image)
// console.log(Img)
//   return (
//     <div className="z-30">

//       <input type="checkbox" className="modal-toggle" checked={Image !== null} />

//       <div className="modal modal-bottom sm:modal-middle">
//         <div className="modal-box">
//           <img className="w-full h-full" src={Img} alt="" />
//           <p>pjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj</p>
//           <div className="modal-action">
//             <label htmlFor="sendbuttom" className="">
//               <i className="fa-solid fa-paper-plane col-or fs-33 p-3 bb-1 rad-100-50"></i>
//             </label>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SendIMG;









// import React, { useEffect, useState } from 'react';

// const SendIMG = ({HANDELERSEND_VALUE , Image , Img}) => {
//     console.log(Img)
//     const [state, setstate] = useState(null);
//     useEffect(() => {
//       setstate(Img)
//     }, [Img]);
//     return (
//           <div className="z-30">

//           {/* <input type="checkbox" className="modal-toggle" checked={Image !== null ? true : false} /> */}
          
//             <input type="checkbox"  className="modal-toggle" checked="true" />

//             <div className="modal modal-bottom sm:modal-middle">
//               <div className="modal-box">
//                <img className="w-full h-full" src={Img}  alt='' />
//                 <div className="modal-action">
//                    <label htmlFor="sendbuttom" className="">
//                       <i class="fa-solid fa-paper-plane col-or fs-33 p-3 bb-1 rad-100-50"></i>
//                    </label>
//                 </div>
//               </div>
//             </div> 
//         </div>
//     );
// }

// export default SendIMG;
