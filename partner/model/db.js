'use strict';

const dbClient = require('serverless-dynamodb-client');
const dynamoDb = dbClient.doc;

const aws = require('aws-sdk');
aws.config.setPromisesDependency(require('bluebird'));

exports.create = function(params){
  return new Promise(function(resolve, reject) {
    dynamoDb.put(params, function(err, data) {
      if (err) {
        console.error(' Unable to add new item. Error JSON:', JSON.stringify(err, null, 2));
      }
      else {
        resolve(params.Item);
      }
    });
  });
}

//delete function in this case will not be used, instead update method will be used
exports.delete = function(table){
  //Not needed now
}

//query function

exports.scan = function(params){
  return new Promise(function(resolve, reject) {
    dynamoDb.scan(params, function(err, data) {
      if (err) {
        console.error('Error while querying', JSON.stringify(err, null, 2));
      }
      else {
        resolve(data.Items);
      }
    });
  });
}



