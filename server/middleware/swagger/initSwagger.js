const swaggerUi = require('swaggerize-ui');
const jsYaml = require('js-yaml');
const fs = require('fs');

function initSwagger(app) {
  const yamlPath =
    `${process.cwd()}/server/middleware/swagger/swaggerDocs.yaml`;

  console.log('yamlPath', yamlPath);

  const yamlData = fs.readFileSync(yamlPath, 'utf8');
  // console.log('yamlData', yamlData);

  const yamlNativeObject = jsYaml.safeLoad(yamlData);
  // console.log('yamlNativeObject', yamlNativeObject);

  app.use('/api-docs', (req, res) => {
    res.json(yamlNativeObject);
  });

  app.use('/docs', swaggerUi({
    docs: '/api-docs', // from the express route above.
  }));

  console.log('The Swagger docs availabe at http://localhost:8000/docs');
}

module.exports = initSwagger;
