'use strict';

const partner = require('./model/partner.model')

module.exports.submit = (event, context, callback) => {

  const requestBody = JSON.parse(event.body);

  let messages = validateInput(requestBody);
  if(messages.length > 0){
    return callback(null, {
      statusCode: 400,
      body: JSON.stringify({
          message: messages
      })
    })
  } else {
  
      partner.scan().then(function(items){
      let sum = items.reduce((acc, p) => acc + p.percentage, 0 );
      if((sum + requestBody.percentage) > 100) {
        return callback(null, {
          statusCode: 400,
          body: JSON.stringify({
            message: 'Não foi possível cadatrar o sócio, pois a participação ultrapassou 100%'
          })
        })
      } else {
        partner.create(requestBody).then(function(item) {
          return callback(null, {
            statusCode: 200,
            body: JSON.stringify({
              partners: item
            })
          })
        });
      }
    });
  } 
}

module.exports.list = (event, context, callback) => {
  
    partner.scan().then(function(items){
      console.log(items);
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify({
            partners: items
        })
      })
    })
}

function validateInput(req) {

let messages = [];
 let i = 0;
if(req.firstName.length < 1 || req.firstName.kength > 20) {
  messages[ i++ ] = 'O nome é obrigatório e deve ter no máximo 20 caracteres!';
  console.log("firstName")
}
if(req.lastName.length < 1 || req.lastName.kength > 20) {
  messages[ i++ ] = 'O sobrenome é obrigatório e deve ter no máximo 20 caracteres!';
  console.log("lastName")
}
if(req.percentage < 1 || req.percentage > 100) {
  messages[ i++ ] = 'A participação é obrigatória e deve estar entre 1 e 100 %';
  console.log("percentage")
}

console.log("messages:" + messages.length)

return messages;

}