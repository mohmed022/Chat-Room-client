import React, { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";
import { BasUrl } from '../../Store/redux/GlobalLinks/GlobalLinks';
import { notify } from '../../Notify/Notify';
import axios from 'axios';


function SignIn() {
	const initialFormData = Object.freeze({
		email: '',
		password: '',
	});

	const [formData, updateFormData] = useState(initialFormData);
	const handleChangee = (e) => {
		updateFormData({
			...formData,
			[e.target.name]: e.target.value.trim(),
		});
	};




  let [authTokens, setAuthTokens] = useState()


  useEffect(() => {
    setAuthTokens(localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
  }, []);


let handleSubmit = async (e) => {
  e.preventDefault()
  try {
      let response = await axios.post(`${BasUrl}/api/token/`, {
          'email':formData.email, 
          'password':formData.password
      }, {
          headers:{
              'Content-Type':'application/json'
          }
      })

      if(response.status === 200){
          setAuthTokens(response.data)
          // setUser(jwt_decode(response.data.access))
          localStorage.setItem('authTokens', JSON.stringify(response.data))
          console.log(response.data)
          window.location.href = "/";
          notify("login success" , "success");
      }

  } catch (error) {
      notify("email or password wrong try ag!", "error");
      console.log(error)
  }
}


	return (
    <form action="#" className="formLogin sign-in-form">
    <h2 className="titleLogin">Sign in</h2>
    <div className="input-field">
      <i className="fas fa-user"></i>
      <input onChange={(e)=>{handleChangee(e)}} type="email" name="email" placeholder="email" />
    </div>
    <div className="input-field">
      <i className="fas fa-lock"></i>
      <input type="password" id="password" name="password" onChange={handleChangee} placeholder="Password" />
    </div>
    <button type="submit" onClick={handleSubmit} className="btnLogin w-100-100 lein" >login</button>
    <p className="social-text">Or Sign in with social platforms</p>
    <div className="social-media">
      <a href="#" className="social-icon">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="#" className="social-icon">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="#" className="social-icon">
        <i className="fab fa-google"></i>
      </a>
      <a href="#" className="social-icon">
        <i className="fab fa-linkedin-in"></i>
      </a>
    </div>
  </form>
	);
}

export default SignIn;

