/**
 * Created by Administrator on 2018/6/19.
 */
'use strict';

const pageName = 'Time';


class Timestamp {
    constructor(){

    }

    toMs() {
        return Date.now();                          // 毫秒
    }

    toSecond(){
        return Math.floor(Date.now()/1000);      // 秒
    }


}
module.exports = Timestamp;

