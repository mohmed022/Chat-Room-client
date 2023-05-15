import React from 'react';

const SignUp1 = ({setemail , setuser_name , setfirst_name , setLastName , setpassword ,setuniversity , setsections}) => {

    return (
        <>
        <h2 className="titleLogin">Sign up</h2>
        <div className="input-field b-error-">
          <i className="fas fa-user"></i>
          <input className="" name="first_name"  onChange={(e)=>{setfirst_name(e.target.value)}} type="text"   placeholder="First Name" />
        </div>
        <div className="input-field">
          <i className="fas fa-user"></i>
          <input name="LastName"  onChange={(e)=>{setLastName(e.target.value)}} type="text"   placeholder=" Last Name" />
        </div>

        <div className="input-field">
          <i className="fas fa-user"></i>
          <input name="user_name" onChange={(e)=>{setuser_name(e.target.value)}} type="username" autoComplete='off' placeholder="User Name" />
        </div>

        <div className="input-field">
          <i className="fas fa-envelope"></i>
          <input name="email" onChange={(e)=>{setemail(e.target.value)}} type="email"  placeholder=" Email"/>
        </div>
        <div className="input-field">
          <i className="fas fa-lock"></i>
          <input  name="password"  onChange={(e)=>{setpassword(e.target.value)}} type="password"   placeholder=" Password"/>
        </div>
        </>
    );
}

export default SignUp1;
