/**
 * Created by Administrator on 2018/5/16.
 */
'use strict';
var pageName = 'get_nonce';

var getNonce = function (len) {
    var rand = Math.random();
    console.log(pageName,':rand:',rand);
    while (rand < 1) {
        rand = rand * 10;
    };
    for (var i=0;  i < len-1; i ++){
        rand=rand * 10;
    };
    rand=Math.floor(rand);
    return rand;

};

module.exports = getNonce;
