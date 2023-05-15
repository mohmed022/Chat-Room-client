import React from 'react';

const SubmitNext1 = ({handleSubmit1 , transX  , handleSubmitBack}) => {
    return (
        // <input type="submit" className={`btnLogin w-100-100 ${transX}`} value="Next"  />
        <div className='d-flex align-c jus-c'>
            <div className="fa-solid fa-arrow-right w-vh-20 t-a-c fs-20 bb-1 col-bl bg-wh p-10 m-10 iconDiv" onClick={handleSubmit1}></div>
        </div>
    );
}

export default SubmitNext1;
