/**
 * Created by Administrator on 2018/6/20.
 */
'use strict';
const pageName = 'mongo';


const collectionMethod = require('./Collection_method');
exports.Insert = collectionMethod.Insert ;

exports.Find = collectionMethod.Find ;

exports.FindSort = collectionMethod.FindSort ;

exports.AggregateItems = collectionMethod.AggregateItems ;