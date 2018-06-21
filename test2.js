/**
 * Created by Administrator on 2018/6/18.
 */
'use strict';
const pageName = 'test2';

const options = {
    url :  "mongodb://localhost:27017",
    dbName : "booklist",
    collectionName : "booklist"
};

const content = '孟 会 强 186 0755 8188';
const com=require('./com');




const string = new com.common.String;
const trim = string.trim;


const  document = {
    corpId : "123456789" ,
    user : "menghuiqiang2" ,
    content:content ,
    trimContent: trim(content) ,
    timestamp :  Date.now()
};
const whereStr= {trimContent:/孟会强/};
const sortStr = {"timestamp" : -1};

const Insert = com.mongo.Insert;
const insert =  new Insert(document,options);
const Find = com.mongo.Find;
const find = new Find(whereStr,options);

const findSort = new com.mongo.FindSort(whereStr,sortStr,options);

//console.log(insert);
/*
insert.colMethod(insert,(err,result) => {
    if (err) {
        conssole.log(err);
    }
    console.log(result);
});
*/
find.colMethod(find,(err,result) => {
    if (err) {
        conssole.log(err);
    }
    console.log(result);
});

findSort.colMethod(findSort,(err,result) => {
    if (err) {
        conssole.log(err);
    }
    console.log(result);
});



const aggregationArray = [{$sort:{user:-1,timestamp:1}},{$group:{_id:"$user",content:{$first:"$content"},timestamp:{$first:"$timestamp"}}}];
const aggregationItems = new com.mongo.AggregateItems(aggregationArray,options);
aggregationItems.colMethod(aggregationItems,(err,result) => {
    if (err) {
        conssole.log(err);
    }
    console.log(result);
});



