/**
 * Created by Administrator on 2018/6/20.
 */
'use strict';
const pageName = 'Collection_mothod';
const mongoClient =  require ('mongodb').MongoClient;

class CollectionMethod {
    constructor(options){
        const defaultUrl= 'mongodb://localhost:27017';
        this.options= options;
        this.url= options.url || defaultUrl;
        this.dbName = options.dbName;
        this.collectionName = options.collectionName;
    }

    colMethod(method,callback){

        mongoClient.connect(this.url,(err,client) =>{

            if (err) { return callback (err)}
            const db = client.db(this.dbName);
            const col = db.collection(this.collectionName);

            method.collectionMethod(col,callback);

            client.close();
        });
    }
}
class Insert extends CollectionMethod  {
    constructor(document,options){
        super(options);
        this.document = document;
    }

    collectionMethod(col,callback){
        col.insert(this.document,callback);
    }
}
exports.Insert = Insert;

class Find extends CollectionMethod {
    constructor(whereStr,options){
        super(options);
        this.whereStr = whereStr;
    }

    collectionMethod(col,callback){
        col.find(this.whereStr).toArray(callback);
    }

}

exports.Find = Find;

class FindSort extends Find {

    constructor(whereStr,sortStr,options){
        super(whereStr,options);
        this.sortStr = sortStr;
    }

    collectionMethod(col,callback){
        col.find(this.whereStr).sort(this.sortStr).toArray(callback);
    }

}

exports.FindSort = FindSort ;
//  callback (err,items);
class AggregateItems extends CollectionMethod{
    constructor(aggregateArray,options){
        super(options);
        this.aggregateArray =  aggregateArray ;
    }

    collectionMethod(col,callback){
        col.aggregate(this.aggregateArray).toArray(callback);

    }
}

exports.AggregateItems = AggregateItems ;

class Db {


    constructor(url){
        const defaultUrl= 'mongodb://localhost:27017';
        this.url= url || defaultUrl;
    }



    insert(dbName, collectionName,document,callback){

        mongoClient.connect(this.url,(err,client) =>{

            if (err) { return callback (err)}
            const db = client.db(dbName);
            const col = db.collection(collectionName);
            col.insert(document, callback);
            client.close();
        });


    }

    find(dbName,collectionName,whereStr,callback){
        this.connect((err,client) => {
            if (err) { return callback (err)}
            const db = client.db(dbName);
            const col = db.collection(collectionName);
            col.find(whereStr).toArray(callback);
            client.close();

        })
    }
    findSort(dbName,collectionName,whereStr,sortStr,callback){
        this.connect((err,client) => {
            if (err) { return callback (err)}
            const db = client.db(dbName);
            const col = db.collection(collectionName);
            col.find(whereStr).sort(sortStr).toArray(callback);
            client.close();

        })
    }

    //  callback (err,items);
    aggregateItems(dbName,collectionName,aggregateArray,callback){

        this.connect((err,client) => {
            if (err) { return callback (err)}
            const db = client.db(dbName);
            const col = db.collection(collectionName);
            col.aggregate(aggregateArray).toArray(callback);


            client.close();

        })
    }



}

//module.exports = Db;

