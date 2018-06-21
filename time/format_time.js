/**
 * Created by Administrator on 2018/6/20.
 */
'use strict';

const pageName = 'format_time';

function formatDate (timeMs) {
    const time = new Date(timeMs);   //毫秒
    const year = time.getFullYear();
    const month = time.getMonth()+1;
    const date = time.getDate();
    return year + '-' + twoDigit(month) + '-' + twoDigit(date) ;
}

function formatTime (timeMs) {
    const  date =formatDate(timeMs);
    const time = new Date(timeMs);   //毫秒
    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();
    return date + ' ' + twoDigit(hour) + ':'+ twoDigit(minute) + ':' +twoDigit(second)  ;
}

exports.formatDate = formatDate;
exports.formatTime = formatTime;

function twoDigit(x) {
    return x < 10 ?  '0' + x : x ;
}