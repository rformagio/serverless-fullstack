'use strict';

const mod = require('../partner.js');

const jestPlugin = require('serverless-jest-plugin');
const lambdaWrapper = jestPlugin.lambdaWrapper;
const wrapped = lambdaWrapper.wrap(mod, { handler: 'submit' });

describe('Submit', () => {
  it('Should return statusCode 400 when firstName is empty', () => {
    var event = new Event();
    event.body = '{"firstName":"", "lastName":"Willis", "percentage":20}';
    return wrapped.run(event).then((response) => {
      expect(response.statusCode).toEqual(400);
     // expect(JSON.parse(response.body)).toEqual({"message": "Your function executed successfully!", "params": {"a": "b"}})
    });
  }, 20000);
});

describe('Submit', () => {
    it('Should return statusCode 400 and error message when percentage is greater than 100', () => {
      var event = new Event();
      event.body = '{"firstName":"Bruce", "lastName":"Willis", "percentage":101}';
      return wrapped.run(event).then((response) => {
        expect(response.statusCode).toEqual(400);
        expect(JSON.parse(response.body)).toEqual({"message": ["A participação é obrigatória e deve estar entre 1 e 100 %"]})
      });
    }, 20000);
  });

function Event() {
    this.body;
}