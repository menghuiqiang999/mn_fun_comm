/**
 * Created by Administrator on 2018/5/16.
 */
'use strict';
var pageName = 'get_timestamp';

var getTimestamp = function () {

    var timestamp = Math.floor((new Date().getTime())/1000);
    
    return timestamp;
};
module.exports = getTimestamp;
