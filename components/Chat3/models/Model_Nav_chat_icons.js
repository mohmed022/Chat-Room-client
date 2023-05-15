import React from 'react';
import ContentRight from '../ContentRight/ContentRight';
import { useMediaQuery } from 'react-responsive';

const ModelNavChatIcons = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1441px)' }); // التحقق من حجم الشاشة
  
  return (
    <>
      {isTabletOrMobile && (
        <div className='z-10 p-rel'>
          {/* Put this part before </body> tag */}
          <input type="checkbox" id="ModelNavChatIcons" className="modal-toggle" />

          <div className="modal">
            <div className="modal-box w-11/12 max-w-5xl hit-100 o-f-a p-abs bottom-4 left-4 right-4 m-auto">
              <label htmlFor="ModelNavChatIcons" > <ContentRight  /></label>

              <div className='p-abs -top-6 left-1/2 -translate-x-1/2'>
                <label htmlFor="ModelNavChatIcons" className="btn btn-circle h-10 w-12" style={{zIndex:"99999"}}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ModelNavChatIcons;













// import React from 'react';
// import ContentRight from '../ContentRight/ContentRight';

// const ModelNavChatIcons = () => {
//     return (
//         <div className='z-10 p-rel'>
//             {/* Put this part before </body> tag */}
//             <input type="checkbox" id="ModelNavChatIcons" className="modal-toggle" />
            
//             <div className="modal">
//               <div className="modal-box w-11/12 max-w-5xl hit-100 o-f-a p-abs bottom-4 left-4 right-4">
//               <label htmlFor="ModelNavChatIcons" > <ContentRight  /></label>



//               <div className='p-abs -top-6 left-1/2 -translate-x-1/2'>
//                   <label  htmlFor="ModelNavChatIcons" className="btn btn-circle h-10 w-12" style={{zIndex:"99999"}}>
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                     </svg>
//                   </label>
//                 </div>
//               </div>
//             </div>
            
//         </div>
//     );
// }

// export default ModelNavChatIcons;
