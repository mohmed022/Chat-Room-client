import React from 'react';

const MapInputText = ({ele , handellinputs}) => {

    return (
            <div className={`${ele&&ele.style}`}>
                
                {ele.name === "name" && <input maxlength={ele.max} type={ele&&ele.type} placeholder={ele&&ele.placeholder} 
                name={ele&&ele.name} className={`${ele&&ele.style}`}  onChange={(e) =>{handellinputs(e)}} />}
                {ele.name === "price" && <input maxlength={ele.max} type="number" placeholder={ele&&ele.placeholder} 
                name={ele&&ele.name} className={`${ele&&ele.style}`}  onChange={(e) =>{handellinputs(e)}} />}
                {ele.name === "description" && <textarea maxlength={ele.max} type={ele&&ele.type} placeholder={ele&&ele.placeholder} 
                name={ele&&ele.name} className={`${ele&&ele.style}`}  onChange={(e) =>{handellinputs(e)}} />}
                {ele.name === "link" && <textarea maxlength={ele.max} type={ele&&ele.type} placeholder={ele&&ele.placeholder} 
                name={ele&&ele.name} className={`${ele&&ele.style}`}  onChange={(e) =>{handellinputs(e)}} />}
            </div>
    );
}

export default MapInputText;

