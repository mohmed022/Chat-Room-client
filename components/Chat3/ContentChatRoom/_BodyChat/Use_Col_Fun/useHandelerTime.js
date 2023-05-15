import React from 'react';
import moment from 'moment';

export const formatDate =(dateString) => {
    // تحويل الوقت بتنسيق ISO 8601 إلى تاريخ ووقت
    const dateTime = moment(dateString);

    // استخراج الوقت المحلي
    const localTime = dateTime.local().format('h:mm');

    // استخراج التاريخ المحلي
    const localDate = dateTime.local().format('MMMM DD, YYYY');

    // إرجاع الوقت والتاريخ المحليين في متغيرين منفصلين
    return { time: localTime, date: localDate };
}



