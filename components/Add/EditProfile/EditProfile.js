import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EdietuserProfile } from '../../Store/redux/Account/UserListSlice';

const EditProfile = () => {
    const {UserFulterArry} = useSelector((state) => state.UserFulterArry);
    // console.log(UserFulterArry.id)

    const [first_name, setfirst_name] = useState("");
    const [LastName, setLastName] = useState("");
    const [about, setabout] = useState("");
    // const [passport, setpassport] = useState(UserFulterArry.passport);
    // const [user_name, setuser_name] = useState(UserFulterArry.user_name);

// console.log(about)


    const dispatch = useDispatch();
    const handelSubmit = (e)=>{
    //   e.preventDefault();
      let data = new FormData();
        //   data.append("photo", fromValues.photo, fromValues.photo.name);
        // if (passport=== "" ){data.append(passport, UserFulterArry.passport);}
        // else{data.append(passport, passport);}


          if (first_name=== "" ){data.append("first_name", UserFulterArry.first_name);}
          else{data.append("first_name", first_name);}
          
          data.append("id", UserFulterArry.id);


          if (LastName=== "" ){data.append("LastName", UserFulterArry.LastName);}
          else{data.append("LastName", LastName);}
          

          if (about=== "" ){data.append("about", UserFulterArry.about);}
          else{data.append("about", about);}
          data.append("is_Assistant" ,UserFulterArry.is_Assistant)
          data.append("is_active" ,UserFulterArry.is_active)
          data.append("is_staff" ,UserFulterArry.is_staff)
          data.append("is_superuser" ,UserFulterArry.is_superuser)

        //   if (user_name=== "" ){data.append(user_name, UserFulterArry.user_name);}
        //   else{data.append(user_name, user_name);}
        
        
        
        

      dispatch(EdietuserProfile(data));
      console.log([...data]);
    }


    return (
        <div class="grid gap-6 mb-6 md:grid-cols-2 o-f-x-h">
 
            <div className="bg-dis  p-2 m-1 rad-10 bro-2  animate__zoomInDown o-f-x-h">
                <label htmlFor="firstname" class="block mb-2 text-sm font-medium text-white text-start animate__zoomInLeft">الاسم الاول:</label>
                <input id="firstname" onChange={(e)=> {setfirst_name(e.target.value)}} type="text"  class="wid-100-100 p-2 bbb-3 rad-10" placeholder=" احمد محمد عبد العظيم ..."/>
            </div>
    
            <div className="bg-dis  p-2 m-1 rad-10 bro-2 ">
                <label htmlFor="familename" class="block mb-2 text-sm font-medium text-white text-start"> اسم العائله / الاسم الاخير :  </label>
                <input name="familenameuser" id='familename' onChange={(e)=> {setLastName(e.target.value)}} type="text"  class="wid-100-100 p-2 bbb-3 rad-10" placeholder=" احمد..."  />
            </div>

            <div className="bg-dis  p-2 m-1 rad-10 bro-2 ">
                <label htmlFor="familename" class="block mb-2 text-sm font-medium text-white text-start"> about :  </label>
                <textarea name="familenameuser" maxlength="250" id='familename' onChange={(e)=> {setabout(e.target.value)}} type="text"  class="wid-100-100 p-2 bbb-3 rad-10" placeholder=" احمد..."  />
            </div>
    
            {/* <div className="bg-dis  p-2 m-1 rad-10 ">
                <label htmlFor="choseun" class="block mb-2 text-sm font-medium text-white text-start">اختيار الجامعه :</label>
                <input value={item.name} id="choseun" type="text" readOnly="true"  class="wid-100-100 p-2 bbb-3 rad-10 bg-gray-500"  />
            </div>  
    
            <div className="bg-dis  p-2 m-1 rad-10 bro-2 ">
                <label htmlFor="phone" class="block mb-2 text-sm font-medium text-white text-start">  رقم الهاتف :</label>
                <input name="phonenomer" id='phone' onChange={(e)=> {handelelements(e)}}  type="number"  class="wid-100-100 p-2 bbb-3 rad-10" placeholder="123-45-678" />
            </div> */}
    
    <div className="modal-action">
      <button onClick={handelSubmit} className="btn">حفظ التعديلات</button>

      <label htmlhtmlFor="pupeditprofile" className="btn">اغلاق</label>

    </div>

        </div>
    );
}

export default EditProfile;








  // Academic: "http://127.0.0.1:8000/media/default.png";
  // LastName: null;
  // about: "";

  // country: null;
  // email: "a@a.com";
  // first_name LastName
  // gender: null;
  // groups: [];
  // id: 1;
  // image: "http://127.0.0.1:8000/media/default.png";
  // is_Assistant: true;
  // is_active: true;
  // is_staff: true;
  // is_superuser: true;
  // last_login: "2023-02-14T05:30:49.774713Z";
  // passport: "http://127.0.0.1:8000/media/default.png";
  // password: "pbkdf2_sha256$260000$0aONmoBzDSdOA71nlw0xmb$vAgI1wzLNDe4VA0/UxbBBondQtvqSTmjLwlwrL5HlS4=";
  // start_date: "2023-02-14T05:30:27.152822Z";
  // user_name: "a";
  // user_permissions: [];