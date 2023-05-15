import React from 'react';

const SubmitSignUp = ({transX , handleSubmit1 , conAcc}) => {
    return (
        <div onClick={()=> conAcc.classList.toggle("SignUpMode")} className='d-flex align-c jus-b w-vh-50 mt-80 lein transX-3'>
            <input type="submit" className={`btnLogin w-100-100  w-vh-20 t-a-c fs-20 iconDiv ${transX}`} value="Sign up" />
            <div className="fa-solid fa-arrow-right bb-1 col-bl bg-wh p-10 m-10 lein w-vh-20 t-a-c fs-20 iconDiv" onClick={handleSubmit1}></div>
        </div>

        
    );
}

export default SubmitSignUp;
{/* <p className="social-text">Or Sign up with social platforms</p> */}