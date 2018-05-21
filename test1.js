/**
 * Created by Administrator on 2018/5/21.
 */
'use strict';

var pageName = 'test1';

var com=require('./com');

//----------------------------------------------------------------------------------------------------------------------
// Test http file

var uploadFile = com.http.file.upload;



var accessToken='wowDZ2sGMKdCiFAMpLtSb02RmOGAk4X0MDtLGD9YxUZxF2LTSjVo9QbNjcBk6QJuYA9rt8wMi3Ht3eMqEvJ8Ewhk46iABhjUwNx-6kuvG3CkkjPumEQo3icUyZeLH6wROkc7NqMz0-LoKOI26P-9M8qJpi0uzr6OrbtYMIoV0W4I6sfWNIYEbFyyuZTNFZNM6feW0k5ZGLZw3CRNzEy2JA';
//上传成功！服务器结果： {"errcode":0,"errmsg":"ok","type":"image","media_id":"3VTyZhvPWo0A4C1eB_r_cQzs4BbCRmoqESN_jIVHmI71LNyWHtOPqcSl8r3SA63s3","created_at":"1526904727"}

var type = 'image';

var host = 'qyapi.weixin.qq.com' ;
var path = '/cgi-bin/media/upload?access_token=' + accessToken  + '&type=' +type ;
var url = 'https://' + host +path ;
var nameType = 'media';
var filePathName ='../mn_api_corpweixin/9a4dba08f2232fb32b8d1235c1f0a3bfb9732c34.jpg';
var fileUploadName= '1.jpg';
uploadFile(url,nameType,filePathName, fileUploadName,function(err,res){
    if (err){
        return;
    }
    console.log(res);
});



var imagesUrl= 'http://turing-chat.oss.tuling123.com/ef639ff694b75cf6b56f55574777c4e4.jpg' ;
var downFile = com.http.file.download;
downFile(imagesUrl,'./','1.jpg');

