/**
 * Created by Administrator on 2018/6/19.
 */
'use strict';
const pageName= 'String';

class String{
    constructor(){}
    trim(str){
        const result =  str.replace(/(\s)/g ,"");
        return result;
    }

}
module.exports = String