import React from 'react';
import imgSignIn from "../../../public/assets/register.svg"
import imgSignUp from "../../../public/assets/log.svg"

const Panels = () => {
// const container = document.getElementById("ContainerRef");
// console.log(container)

    return (
		<div className="panels-boxAcount">

		<div className="panel left-panel">
		  <div className="contentbox">
			<h3 className='col-bl'>New here ?</h3>
			<p className='col-bl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,ex ratione. Aliquid!</p>
			<button onClick={()=> container&&container.classList.toggle("sign-up-mode")} className=" btnLogin col-wh col-w" id="sign-up-btn">
			  <p className='col-w'>Sign up</p>
			</button>
		  </div>
		  <img src="/assets/log.svg" className="image" alt="" />
		</div>

		<div className="panel right-panel">
		  <div className="contentbox">
			<h3 className='col-bl'>One of us ?</h3>
			<p className='col-bl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrumlaboriosam ad deleniti.</p>
			<button onClick={()=> {container&&container.classList.toggle("sign-up-mode")}} className=" btnLogin" id="sign-in-btn">
			  <p className='col-wh'>Sign in</p>
			</button>
		  </div>
		  <img src="/assets/register.svg" className="image" alt="" />
		</div>

	  </div>
    );
}

export default Panels;
