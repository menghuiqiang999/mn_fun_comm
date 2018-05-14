/**
 * Created by Administrator on 2018/5/11.
 */

'use strict';
var pageName = 'aes';

var crypto = require('crypto');
var aes = function() {};

/**
 * 加密方法
 * @param data     需要加密的数据 encoding:utf8
 * @param key 加密key
 * @param iv       向量
 * @returns string  format:base64
 * @example
 * var encrypted = encrypto (data,key,iv);
 *
 */
aes.encrypto = function (data,key, iv) {
    var cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    cipher.setAutoPadding(true);
    var crypted = cipher.update(data, 'utf8', 'base64');
    crypted += cipher.final('base64');

    return crypted;
};

/**
 * 解密方法
 * @param crypted  密文  format: base64
 * @param key      解密的key
 * @param iv       向量 *
 * @returns string  format:utf8
 * @example
 * var decrypted = decrypto (crypted,key,iv);
 *
 */
aes.decrypto = function ( crypted,key, iv) {

    var decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    decipher.setAutoPadding(true);
    var decoded = decipher.update(crypted, 'base64', 'utf8');
    decoded += decipher.final('utf8');
    return decoded;
};
module.exports =aes;