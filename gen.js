/**
 * This is used to update our `api.ts` file.
 * Run `node gen.js` while the backend is running and the latest
 * endpoint updates will be pulled.
 */

var CodeGen = require("swagger-typescript-codegen").CodeGen;
const http = require('http');
const fs = require('fs');

http.get('http://localhost:8888/webapi/swagger.json', (resp) => {
  let data = '';
  resp.on('data', (chunk) => {
    data += chunk;
  });
  resp.on('end', () => {
    var swagger = JSON.parse(data);
    var tsSourceCode = CodeGen.getTypescriptCode({
      className: "Test",
      swagger: swagger
    });

    // Enable this to be more strict with types from Swagger
    // tsSourceCode = tsSourceCode.replace(/\[key\: string\]\: any\;/g, '');
    
    fs.writeFileSync('src/api.ts', tsSourceCode);
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
