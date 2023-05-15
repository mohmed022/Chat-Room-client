import React from 'react';

const PupCenter = ({children,rad}) => {

    return (
        <div className='' style={{zIndex:10000}}>
        <div className='div-center-pup'></div>
            <div className='pup-center rad-10 '>
               {children}
            </div>
        </div>
       
    );
}

export default PupCenter;
