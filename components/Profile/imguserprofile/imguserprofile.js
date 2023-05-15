import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import { EdietRegister } from '../../Store/redux/Account/RegisterSlice';
import { EdietuserProfile } from '../../Store/redux/Account/UserListSlice';
import { BasUrl } from '../../Store/redux/GlobalLinks/GlobalLinks';
const Imguserprofile = () => {
  
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

  const dispatch = useDispatch();
  
  const handleSubmitimage = (e) => {
    e.preventDefault();
    if (image){
      notify("تم تفيير الصوره بنجاح")
    }else{
      notifyerror("حدث خطاء لم  يتم تقيير الصوره ")
    }
    let data = new FormData();
    data.append('image' , image, image.name);
    data.append('id' , UserFulterArry&&UserFulterArry.id )


    data.append('country' , UserFulterArry&&UserFulterArry.country )
    data.append('flag' , UserFulterArry&&UserFulterArry.flag )
    data.append('gender' , UserFulterArry&&UserFulterArry.gender )
    data.append('email' , UserFulterArry&&UserFulterArry.email )
    data.append('user_name' , UserFulterArry&&UserFulterArry.user_name )
    data.append('first_name' , UserFulterArry&&UserFulterArry.first_name )
    data.append('LastName' , UserFulterArry&&UserFulterArry.LastName )
    data.append('university' , UserFulterArry&&UserFulterArry.university )
    data.append('sections' , UserFulterArry&&UserFulterArry.sections )
    data.append('start_date' , UserFulterArry&&UserFulterArry.start_date )
    data.append('about' , UserFulterArry&&UserFulterArry.about )
    data.append('is_staff' , UserFulterArry&&UserFulterArry.is_staff )
    data.append('is_active' , UserFulterArry&&UserFulterArry.is_active )
    data.append('is_Assistant' , UserFulterArry&&UserFulterArry.is_Assistant )
















    dispatch(EdietuserProfile(data));
    console.log([...data]);

  };
const notifyerror = (msg) => {
  toast.error(msg, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
  }

 const notify = (msg) => {
    toast.success(msg, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    }

  console.log(UserFulterArry.image)
  console.log(UserFulterArry)
    return (
    <div className="p-rel"> 



      <form className="from" onSubmit={handleSubmitimage} >
      <img id='imgid'
        className="lg:w-80 lg:h-80 h-52 w-52 p-3 bl-1 bbb-1 m-auto rad-100-50"
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

export default Imguserprofile;
