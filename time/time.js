/**
 * Created by Administrator on 2018/5/14.
 */
'use strict';
var pageName = 'time';


const formatTime = require('./format_time');
exports.formatDate= formatTime.formatDate;
exports.formatTime = formatTime.formatTime;

exports.Timestamp = require('./Timestamp');

