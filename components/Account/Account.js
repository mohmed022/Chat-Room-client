import React, {useState } from "react";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import { BasUrl } from "../Store/redux/GlobalLinks/GlobalLinks";
import { notify } from "../Notify/Notify";

const Account = () => {
  const RegisterLink = `${BasUrl}/api/user/create`
  const [email , setemail] = useState("")
  const [user_name , setuser_name] = useState("")
  const [first_name , setfirst_name] = useState("")
  const [LastName , setLastName] = useState("")
  const [password , setpassword] = useState("")
  
  const handelSubmit=async (e)=>{
    e.preventDefault()
    try {
     const res = await fetch(RegisterLink , {
        method: "POST",
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({
          email,
          user_name,
          first_name,
          LastName,
          password,
        })
      })
      console.log(res)
      if (res.status === 201){
        document.getElementById("ContainerRef").classList.toggle("sign-up-mode")
        notify(`success created Account , hi ${first_name}` , "success");
      }else if (res.status === 400 ){
        if (!email || !user_name || !first_name || !LastName || !password){
          notify(`Please check all fields as they are required` , "error");
        }
      }else if (res.status === 500 ){
        notify(`This email has already been registered` , "error");
      }
    }catch(e){
      console.log(e)
      notify(`Please check all documents as they are required 2` , "error");
    }
  }


return (
  <div className="boxAcount" id="ContainerRef">

    <div className="forms-boxAcount">
      <div className="signin-signup">
        <SignIn />
        <SignUp handelSubmit={handelSubmit} 
                setemail={setemail}
                setuser_name={setuser_name} 
                setfirst_name={setfirst_name} 
                setLastName={setLastName} 
                setpassword={setpassword}  
        />
      </div>
    </div>

    <div className="panelsBoxAcount">

      <div className="PanelBox LeftPanel">
        <div className="contentbox">
        <h3 className='col-bl'>New here ?</h3>
        <p className='col-bl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,ex ratione. Aliquid!</p>
        <button onClick={()=> document.getElementById("ContainerRef").classList.toggle("sign-up-mode")} className="btnLogin col-wh col-w" id="sign-up-btn">
          <p className='col-w'>Sign up</p>
        </button>
        </div>
        <img src="/assets/log.svg" className="imagePanel" alt="" />
      </div>

      <div className="PanelBox right-panel">
        <div className="contentbox">
        <h3 className='col-bl'>One of us ?</h3>
        <p className='col-bl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrumlaboriosam ad deleniti.</p>
        <button onClick={()=> {document.getElementById("ContainerRef").classList.toggle("sign-up-mode")}} className="btnLogin" id="sign-in-btn">
          <p className='col-wh'>Sign in</p>
        </button>
        </div>
        <img src="/assets/register.svg" className="imagePanel" alt="" />
      </div>

    </div>
  </div>
  );
};

export default Account;
