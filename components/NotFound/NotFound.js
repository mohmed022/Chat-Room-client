import React from 'react';
import Link from 'next/link';

import style from "./NotFound.module.css"
const NotFound = ({handellPuP , P , H }) => {

    return (

        <div className={`${style.pabs0}`}>


        <div>
          <div className={style.starsec + "bg[#]"}></div>
          <div className={style.starthird}></div>
          <div className={style.starfourth}></div>
          <div className={style.starfifth}></div>
        </div>
        
        
        <div className={style.lamp__wrap}>
          <div className={style.lamp}>
            <div className={style.cable}></div>
            <div className={style.cover}></div>
            <div className={style.inCover}>
              <div className={style.bulb}></div>
            </div>
            <div className={style.light}></div>
          </div>
        </div>
        <section className={style.NotFund}>
          <div className={style.NotFund__content}>
            <div className={style.NotFund__message + style.message}>
              <h1 className={style.message__title}>{`${H ?H : "Page Not Found" }`}</h1>
              <p className={style.message__text}>{`${P ? P :"We're sorry, the page you were looking for isn't found here. The link you followed may either be broken or no longer exists. Please try again, or take a look at our."}`}</p>
            </div>
            <div className={style.NotFund__nav + style.wNav}>
            {handellPuP ? ( <button onClick={handellPuP} className={style.eNav__link}></button> ):(  <Link href="/" className={style.eNav__link}></Link> )}
            </div>
          </div>
        
        </section>
        </div>
    
    
    
    );
}

export default NotFound;
