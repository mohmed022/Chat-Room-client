import React from "react";

const MapInputFile = ({ele , handellinputs , fromValues}) => {
  return (
    <div key={ele.name + "tow"} className="p-rel">
      <input
        id={ele.name}
        name={ele.name}
        className="none"
        onChange={(e) => {handellinputs(e)}}
        type={ele.type}
        placeholder={ele.placeholder}
        value={fromValues.value && ele.name}
        maxlength={ele.max}
      />


      <label className="flex" htmlFor={ele.name}>
        {ele.name === "photo" && (
          <i className="fa-sharp fa-solid fa-image text-orange-500 text-3xl p-3 ml-32"></i>
        )}
        {ele.name === "video" && (
          <i className="fa-solid fa-clapperboard text-orange-500 text-3xl p-3"></i>
        )}
        {ele.name === "pdf_file" && (
          <i className="fa-solid fa-file-pdf text-orange-500 text-3xl p-3 ml-64"></i>
        )}
      </label>
    </div>
  );
};

export default MapInputFile;
