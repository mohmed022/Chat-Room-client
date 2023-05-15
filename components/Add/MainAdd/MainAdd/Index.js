// import React from 'react';
// import MapInputFile from './MapInputFile';
// import MapInputText from './MapInputText';

// const inputTypes = {
//   text: MapInputText,
//   file: MapInputFile,
//   div: MapInputText
// };

// export default function AddGlobal(props) {
//   const { inputs, fromValues, setfromValues, handleSubmit } = props;

//   const handellinputs = (e) => {
//     const newObj = {
//       ...fromValues,
//       [e.target.name]: e.target.files ? e.target.files[0] : e.target.value
//     };
//     setfromValues(newObj);
//     console.log(fromValues);
//   };

//   const mapInputs = inputs.map((ele, i) => {
//     const InputType = inputTypes[ele.type || 'text'];
//     return (
//       <div key={`${ele.name}-${i}`}>
//         <InputType ele={ele} handellinputs={handellinputs} fromValues={fromValues} />
//       </div>
//     );
//   });

//   return (
//     <div className="container mx-auto my-10 ">
//       <div className="w-100-100">
//         <form onSubmit={handleSubmit} className="p-rel">
//           {mapInputs}
//           <input
//             name="submit"
//             style={{ border: 'blue 2px solid', cursor: 'pointer' }}
//             className="p-3 m-3 w-60-100 text-xl border-red-400"
//             type="submit"
//             placeholder="submit"
//           />
//         </form>
//       </div>
//     </div>
//   );
// }













import React, { useState } from 'react'
import MapInputFile from './MapInputFile'
import MapInputText from './MapInputText'
export default function AddGloball(props) {
    const {inputs , fromValues , setfromValues , handleSubmit} = props

    const handellinputs= (e)=>{
        const newObj = {
            ...fromValues,
            [e.target.name]:e.target.files ? e.target.files[0] : e.target.value
        };
        setfromValues(newObj)
        console.log(fromValues)
    }

const MapInputs = inputs.map((ele, i)=>{
    if (ele.type === "text" || ele.name === "div"){
        return <MapInputText key={i} ele={ele} handellinputs={handellinputs} fromValues={fromValues} />
    } 
    if (ele.type === "file" ){
        return (
           <div className='filestyle' key={i}>
              <MapInputFile key={i} ele={ele} handellinputs={handellinputs} fromValues={fromValues}/>
           </div>
        )
    } 

})



  return (
    <div className="container mx-auto my-10 ">
        <div className="w-100-100" >
            <form onSubmit={handleSubmit} className="p-rel">
                  {MapInputs}
                  <input name="submit" style={{border:"blue 2px solid" , cursor:"pointer"}} className="p-3 m-3 w-60-100 text-xl border-red-400" type="submit"  placeholder="submut" />
            </form>
        </div>
    </div>
  )
}
