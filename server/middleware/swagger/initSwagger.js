const jsYaml = require('js-yaml');
const fs = require('fs');

const middleware = require('swagger-express-middleware');
const swaggerUi = require('swagger-ui-express');

function initSwagger(app) {
  const yamlPath =
    `${process.cwd()}/server/middleware/swagger/swaggerDocs.yaml`;

  console.log('yamlPath', yamlPath);

  const yamlData = fs.readFileSync(yamlPath, 'utf8');
  // console.log('yamlData', yamlData);

  const yamlNativeObject = jsYaml.safeLoad(yamlData);
  // console.log('yamlNativeObject', yamlNativeObject);


  app.use('/docs', (req, res, next) => {
    next();
  }, swaggerUi.serve, swaggerUi.setup(yamlNativeObject));

  app.use('/api-docs', (req, res) => {
    res.json(yamlNativeObject);
  });

  middleware(yamlNativeObject, app, (err, middleware) => {
    app.use(
      middleware.metadata(),
      // middleware.CORS(),
      middleware.files(),
      middleware.parseRequest(),
      middleware.validateRequest());
  });

  console.log('The Swagger docs availabe at http://localhost:8000/docs');
}

module.exports = initSwagger;
