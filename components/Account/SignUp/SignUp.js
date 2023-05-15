import React from "react";
import SignUpOne from "./MainSignUp/SignUp1";
const SignUp = ({handelSubmit , setemail , setuser_name , setfirst_name , setLastName , setpassword ,setuniversity , setsections}) => {

  
  return (
    <form action="#" onSubmit={handelSubmit} className=" formLogin sign-up-form">
      <SignUpOne setemail={setemail} setuser_name={setuser_name} setuniversity={setuniversity} setsections={setsections} setfirst_name={setfirst_name} setLastName={setLastName} setpassword={setpassword} />
      <input type="submit" className="btnLogin w-100-100  w-vh-20 t-a-c fs-20 iconDiv" value="Sign up" />

      {/* <SocialMedia /> */}
    </form>
  );
};

export default SignUp;
