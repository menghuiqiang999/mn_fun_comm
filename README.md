#This is a function from Moonlight
##Prerequisite:

    Rewquire: moonlight_function_errplace use: npm install moonlight_function_errplace
    Require: ioredis use: npm install ioredis

#Quick Start
##install
    npm install mn_fun_comm
##Basic Usage

##common
###get_nonce

param len
returns {number}
example

    var nonce = getNonce(10);

###get_rand_char

module getRandChar - generate a rand char, the digit is len.

param len {integer } must > 1

return getRandChar - rand char , len digit

example

    var len = getRandChar(16);

###get_timestamp
returns {number} - return a timestamp , the seconds from 1-1-1970

example

    var timestamp = getTimestamp ();

###translate_options_callback
module translateOptionsCallback

version 1.0.0

param {object} arguments  The arguments of the Function use this function.

param {object} callback function

returns {object} callback function, if success: {null,{ "options" : options , "callback" : callback } }

example   This is example of use case

    var.insert = function(document,options,resultCallback){
       translateOpertionsCallback(arguments,function(err,result){
                         ......
       }
    }


##crypto
###aes
####encrypto
>加密方法

>param data     需要加密的数据 encoding:utf8

>param key 加密key

>param iv       向量

>returns string  format:base64

    var encrypted = encrypto (data,key,iv);

####encryptoPkcs7

输入buf   对buffer 进行pkcs7方式进行补位，然后进行aes -256- cbc 方式
进行加密
param bufData
param key  - 加密Key
param iv  - 矢量
returns crypted   加密后的字符串base64编码。
example:

    const com =  require('mn_fun_comm');
    const encrypto = com.crypto.aes.encryptoPkcs7;
    const encrypted1 = encrypto(buf,bAesKey,bIv);



####decrypto

解密方法

>param crypted  密文  format: base64

>param key      解密的key

>param iv       向量 *

>returns string  format:utf8

>example

    var decrypted = decrypto (crypted,key,iv);

####decryptoPkcs7
输入buffer ,  对buffer 进行AES解密，然后按pkcs7方式支除补位
param encrypted  {buffer} -需要解的buffer
param key
param iv
returns 如果解密过程发生错误，返回错误，如果没有错误发生，err 为null, 返回正确的buf{buffer}
example:

    const decrypto= com.crypto.aes.decryptoPkcs7;
    const com =  require('mn_fun_comm');
    const [err,buf] =decrypto(encrypted,bAesKey,bIv);
        if (err) {
            return console.log(err);
        }
    console.log(buf);


###md5
module md5   - the result is UperCase

param input - need to be md5

param callback

returns callback - (err,output)

example

    md5(input,function(err,output){
        ......
    };




###sha
####sha1
param content - Need to sha1

returns d {string} - Returns  the result of sha1

example

    var encryped = sha (content);

##http
###file

####upload
upload a file to url , and callback the response of server.

param url{string}      -  such as https://www......?.......

param nameType {string}    - 'media' neet the request of server

param filePathName {string}  - include the dir and the file name ,such as ../images/output.jpg

param fileUploadName {string} - file name in the server you want to upload

return resCallback  {object} - res come back form server you uploaded

example

    upload (url,nameType,filePathName,fileUploadName,function(err,resResult){

    });

####download
down a file from the url, and save it in the dir

param url {string}    such as : http://www...........output.jpg

param dir {string}   - the dir you want to save this file

param fileName {string} - the file name you want to save

example

    download(url,dir,fileName);

###downloadFile
down a file from the url ,and save it in the dir, if success callback true.

param url {string}    such as : http://www...........output.jpg

param dir {string}   - the dir you want to save this file

param fileName {string} - the file name you want to save

param callback
example

    downloadFile(url,dir,fileName,function(err,result){

    });
###downUpload
down a file from the urlDownload, and upload to anther urlUpload

param urlDownload {string}  - url you want to download ,such as http:// .... or https://...

param urlUpload {string}  - url you want to uppload ,such as http://... or https://

param fieldName {string}  -   name of form field

param fileName {string} -  file name you want to save in the server

param resCallback

example
    downUpload(urlDown,urlUp,'media',fileName,function(err,result){

    });

###get
param host - such as  qyapi.weixin.qq.com

param uri   - such as /cgi-bin/uer/get?access_token=ACCESS_TOKEN ......

param data_callback

example

    get(host,uri,function(err,result){
          ......
    });


###post
param host - Such as  qyapi.weixin.qq.com

param uri - Such as /cgi-bin/uer/get?access_token=ACCESS_TOKEN ......

param content

param data_callback

example

    var host = "qyapi.weixin.qq.com";
    var url = "/cgi-bin/user/create?access_token=" + access_token;
    var content=JSON.stringify(data);
    post (host,uri,content,function(err,result){
        ......
    });



##Https
###get
param host - such as  qyapi.weixin.qq.com

param uri   - such as /cgi-bin/uer/get?access_token=ACCESS_TOKEN ......

param data_callback

example

    get(host,uri,function(err,result){
          ......
    });


###post
param host - Such as  qyapi.weixin.qq.com

param uri - Such as /cgi-bin/uer/get?access_token=ACCESS_TOKEN ......

param content

param data_callback

example

    var host = "qyapi.weixin.qq.com";
    var url = "/cgi-bin/user/create?access_token=" + access_token;
    var content=JSON.stringify(data);
    post (host,uri,content,function(err,result){
        ......
    });

###postBuffer
param host - Such as  qyapi.weixin.qq.com

param uri - Such as /cgi-bin/uer/get?access_token=ACCESS_TOKEN ......

param content

param data_callback

example
    post (host,uri,content,function(err,result){
          ......
    });


##Mongodb

###Method Class Insert

options 为数据库的参数，如下样例：

    const options = {
        url :  "mongodb://localhost:27017",
        dbName : "booklist",
        collectionName : "booklist"
    };

document 为要插入的文档，如下样例：

    const  document = {
        corpId : "123456789" ,
        user : "menghuiqiang2" ,
        content:content ,
        trimContent: trim(content) ,
        timestamp :  Date.now()
    };

    const Insert = com.mongo.Insert;
    const insert =  new Insert(document,options);

    insert.colMethod(insert,(err,result) => {
       if (err) {
           conssole.log(err);
       }
       console.log(result);
    });
###Method Class Find

whereStr为查询条件，样例如下：

    const whereStr= {trimContent:/孟会强/};

    const Find = com.mongo.Find;
    const find = new Find(whereStr,options);

    find.colMethod(find,(err,result) => {
        if (err) {
            conssole.log(err);
        }
        console.log(result);
    });

###Method Class FindSort

sortStr为排序条件，样例如下：

    const sortStr = {"timestamp" : -1};
    const findSort = new com.mongo.FindSort(whereStr,sortStr,options);
    findSort.colMethod(findSort,(err,result) => {
        if (err) {
            conssole.log(err);
        }
        console.log(result);
    });

###Method Class Aggregation

    const aggregationArray = [{$sort:{user:-1,timestamp:1}},{$group:{_id:"$user",content:{$first:"$content"},timestamp:{$first:"$timestamp"}}}];
    const aggregationItems = new com.mongo.AggregateItems(aggregationArray,options);
    aggregationItems.colMethod(aggregationItems,(err,result) => {
        if (err) {
            conssole.log(err);
        }
        console.log(result);
    });
##Redis


    var com = require('moonlight_function_common');
    var redis =com.redis;

####set_key:
    redis.setex_key(key,seconds,value);    //Such as redis.setex_key(key,7200,access_token);     // 7200seconds

    //put value in redis by key_name key, expire time seconds.

####get_key:
get a value from redis by the key_name key, the value callback in the result.

if result is NULL, is means that there is not a vaule in redis by the key_name key.

Such as:

    redis.getkey(key,function(err,result){
       ......
    });

##time
###format_time
####formatDate
param timeMs - Input mileSeconds from 1970-1-1 00:00:00
returns {string}- Such as :2018-06-21
example

   const date = formatDate(timeMs);

date 输出 :2018-06-21

###formatTime
param timeMs - Input mileSeconds from 1970-1-1 00:00:00
returns {string}- Such as :2018-06-21 12:34:05
example

   const date = formatTime(timeMs);

###Timestamp
返回当前时间的秒数或毫秒数
example

    const timestamp = new Timestamp ;

    const timeMs = timestamp.toMs;   //返回毫秒 mileSeconds from 1970-1-1 00:00:00
    const time = timestamp.toSecond ; //返回秒数 Seconds from 1970-1-1 00:00:00



##Xml

###xml2json
param xml - xml from corpweixn

return xmljson -  such as {"xml":{"ToUserName":["wwf54870d97f9ee496"],"AgentID":["1000004"]}}

example

    xml2json(xml,funciotn(err,jsonCallback){
       ......
    });