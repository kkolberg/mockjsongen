'use strict';
var dummyjson = require('dummy-json');
var fs = require('fs')
var template = `
  {{#repeat 5000}}
  {
  "id": {{@index}},
  "users": [
    {{#repeat 2}}
    {
      "id": {{@index}},
      "name": "{{firstName}} {{lastName}}",
      "work": "{{company}}",
      "email": "{{email}}",
      "dob": "{{date '1900' '2000' 'YYYY'}}",
      "address": "{{int 1 100}} {{street}}",
      "city": "{{city}}",
      "optedin": {{boolean}}
    }
    {{/repeat}}
  ],
  "images": [
    {{#repeat 3}}
    "img{{@index}}.png"
    {{/repeat}}
  ],
  "coordinates": {
    "x": {{float -50 50 '0.00'}},
    "y": {{float -25 25 '0.00'}}
  },
  "price": "{{ int 0 99999 '0,0'}}"
}
{{/repeat}}
`;

var mock = dummyjson.parse(template);
// module.exports.hello = (event, context, callback) => {
//   const response = {
//     statusCode: 200,
//     body: mock
//   };


//   callback(null, response);

// };
fs.appendFileSync("data.json", "[");
for (var i = 0; i < 100; i++) {
  fs.appendFileSync("data.json", mock);
  if (i < 999) {
    fs.appendFileSync("data.json", ",");
  }
}
fs.appendFileSync("data.json", "]");