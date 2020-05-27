'use strict';

//partner.js
//a model scheme for our partner documents
const uuid = require('uuid');
const db = require('./db.js');
const table = "PartnerTable";

exports.create = function(params){
  return new Promise(function(resolve, reject) {
    
      var createParams = {
        TableName: table,
        Item:{
          "id": uuid.v1(),
          "firstName": params.firstName,
          "lastName": params.lastName,
          "percentage": params.percentage
        },
        ReturnValues: "ALL_OLD",
        ConsistentRead: true
      };

      db.create(createParams).then(function(item){
        resolve(item)
      });
    });
} 
 
exports.scan = function(){
    return new Promise(function(resolve, reject) {
      var scanParams = {
        TableName: table,
        ProjectionExpression: "firstName, lastName, percentage",
        ConsistentRead: true
      };
      resolve(db.scan(scanParams));
    });
}

