/**
 * Created by Administrator on 2018/5/21.
 */
'use strict';
var pageName = 'upload_material';


var file= function(){

};
module.exports = file;


/**
 *
 * @param url
 * @param type
 * @param filePathName
 * @param fileUploadName
 */

file.upload = function (url,nameType,filePathName,fileUploadName,resCallback){


    var fs = require ('fs');

    fs.stat(filePathName,function(err,stat){


        var request = require ('request');

        var formstream = require ('formstream');

        var form = formstream();

        form.file(nameType , filePathName , fileUploadName , stat.size);


        var uploadFile = request.post(url,{headers:form.headers()},function(err,req,res){
            if (err) {
                resCallback(err);
                return console.err('上传失败',err);
            }
            //console.log(req);
            console.log('上传成功！服务器结果：', res);
            resCallback(null,res);
        });
        form.pipe(uploadFile);

    });

};

file.download = function(url,dir,fileName){
    var request = require('request');

    var fs = require('fs');


    //采用request模块，向服务器发起一次请求，获取图片资源
    request.head(url,function(err,res,body){
        if(err){
            console.log(err);
        }
    });

    request(url).pipe(fs.createWriteStream(dir + fileName));


};

