import React from 'react';
import HashLoader from 'react-spinners/HashLoader';

const Loding = ({h , w}) => {
    return (
        <>
        <HashLoader
            color="#36d7b7"
            size={100}
            cssOverride={{height:h , width:w}}
          />
        </>
    );
}

export default Loding;



