/**
 * Created by Administrator on 2018/4/26.
 */

"use strict";
var page_name="test";
var pageName='test';

var errplace=require('moonlight_function_errplace');
var com=require('./com');

//----------------------------------------------------------------------------------------------------------------------
//test common
var comm = com.common
var getRandChar = comm.getRandChar;
var len = getRandChar(16);
console.log (pageName, ':len:',len);


// ---------------------------------------------------------------------------------------------------------------------
//Test crypto
var crypto=com.crypto;
var s = 'menghuiqiang';

var sSha1=com.crypto.sha.sha1(s);
console.log (page_name + ':sha1 s:' + sSha1);

var key='key11166661111111111222222222232';
var iv= 'iv123456789abcde';
var sAes256 =  com.crypto.aes.encrypto(s,key,iv);
console.log (page_name + ':aes256 s:' + sAes256);


var md5 = crypto.md5;
md5(s,function(err,output){
  console.log (pageName + ':md5:' + output);
});

//----------------------------------------------------------------------------------------------------------------------
//Test xml
var xml2json = com.xml.xml2json;

var xml = "<xml><ToUserName><![CDATA[wwf54870d97f9ee496]]></ToUserName><FromUserName><![CDATA[MengHuiQiang]]></FromUserName><CreateTime>1526202917</CreateTime><MsgType><![CDATA[text]]></MsgType><Content><![CDATA[好]]></Content><MsgId>1629647924</MsgId><AgentID>1000004</AgentID></xml>";

xml2json(xml,function (err,jsonCallback) {
    console.log (pageName,':json of xml :',jsonCallback);

});



/*
try{

//----------------------------------------------------------------------------------------------------------------------
// Note:
//
//
    try{

        var mncrypto=function() {
            var where_in_page = "crypto in test of com";
            var crypt = com.crypto;
            var md5 = crypt.md5;
            var input = "Shenzhen moonlight wine Co. Ltd";
            md5(input, function (result) {
                console.log(page_name + ":" + input + ":crypto_md5:" + result);
                console.log("The md5 function ok");
            })
        }
    }catch(err){
        catcherr(err,where_in_page);
    }




//----------------------------------------------------------------------------------------------------------------------
// Note:
//
//
    var where_in_page="https in test of com";
    try{
        var mnget=function(){
            var https=com.https;
            var get=https.get;

            var corpid = "wwf54870d97f9ee496";   //企业微信：深圳XX公司
            var corpsecret = "g3_EqQQtTvWMaOi7HoWZ4-0oqDExr9i3-D-QcXc7Un4";   //通讯录

            var host = "qyapi.weixin.qq.com";
            var url = "/cgi-bin/gettoken?corpid=" + corpid + "&corpsecret=" + corpsecret;
            get(host, url,function(data_callback) {
                console.log(page_name + ":data_callback:" + data_callback);
            })
        };

    }catch(err){
        catcherr(err,where_in_page);
    }
//----------------------------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------------------------
// Note:
//
//
    try{
        var where_in_page="redis in test of com";

        var mnredis=function(){
            var redis=com.redis;

            var setkey=redis.setkey;
            var setex_key=redis.setex_key;
            var getkey=redis.getkey;

            var expire_time=redis.expire_time;

            var key="moonlight";
            //setkey(key,"wine");
            setex_key(key,30,"wine");
            expire_time(key,60);

            getkey(key,function(value){
                console.log(page_name +":value:"+ value);
            })
        }

    }catch(err){
        catcherr(err,where_in_page);
    }

//----------------------------------------------------------------------------------------------------------------------
    try{
        var where_in_page="test post";

        var test_post=function(){
            var userid = "MengHuiQiang";
            var access_token="6FLZS4ZbH_Et5AE3NfLYOGjxmynKESSK_TpRZeX8xeeqfGzooS2KumY62xWVNZKwJmboU2VUVOWgYcUBf8lycv8MRS0FrUdcGXzYTrB8fqzPTcfONst9rZ1Ra9Sk1NZx17lppqPhw8Rnp-CE5zWVE0SwVV_TqYi7hueLU-SnW_X7JD14AkR-fzOAyQq3oLPvrLuI0NrVnicb3pAn-FK-VA";

            var https= com.https;
            var post=https.post;
            var data = {
                "userid": "zhangsan7",
                "name": "张三3",
                "english_name": "jackzhaneg",
                "mobile": "15945216521",
                "department": [1],
                "order": [10, 40],
                "position": "产品经理",
                "gender": "1",
                "isleader": 1,
                "enable": 1
            };

            var createuser_corpweixin = function (data) {
                var host = "qyapi.weixin.qq.com";
                var url = "/cgi-bin/user/create?access_token=" + access_token;
                var content=JSON.stringify(data);
                post(host, url,content,function(result){
                    console.log(page_name+":the post result: "+ result);

                });
            };
            createuser_corpweixin(data);
        };





    }catch(err){
        catcherr(err,where_in_page);
    }
//----------------------------------------------------------------------------------------------------------------------



    //mnget();
    mncrypto();
    mnredis();
    test_post();

}catch(err){
    errplace(err,page_name);
}
*/
/*
//----------------------------------------------------------------------------------------------------------------------
//test mongodb
var mongodb = com.mongodb;

var options = {
    collectionName : "peweb"
};


var document = { name : "孟会强" , mobile : "18607558188" , weixin : "menghuiqiang999", city : "Shenzhen"};

//mongodb.insert ( document , options   );

var assert = require ('assert') ;



var defaultOptions = {
    url :  "mongodb://localhost:27017",
    dbName : "moonlight",
    collectionName : "pewebs"
};


mongodb.setDefaultOptions(defaultOptions,function(err,result_callback){
    if (err) {
        return console(pageName + 'this is a erroe from setDefaultOptions' );
    }
    console.log (pageName + ':result_callback:' + result_callback );
    if (result_callback) {

        mongodb.insert (document, function (err,result)  {
            if (err) {
                return console.log (pageName + ':The is a err from mongodb.insert' );
            };
            console.log (pageName + ":result:" + JSON.stringify (result) ) ;

        } );
    }
});



*/
