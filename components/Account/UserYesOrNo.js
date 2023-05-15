import React from 'react';

export const UserYesOrNoImg = (UserFulterArry , img  ) => {
    const imguser = UserFulterArry ? UserFulterArry.image : img
    return imguser
}


export const UserYesOrNoHref = (UserFulterArry , hrefProfile , hrefLogin ) => {
    const hrefuser = UserFulterArry ? hrefProfile : hrefLogin
    return  hrefuser
}




