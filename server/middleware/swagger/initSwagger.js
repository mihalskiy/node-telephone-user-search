const swaggerUi = require('swaggerize-ui');


function initSwagger(app) {
  app.use('/api-docs', (req, res) => {
    res.json(require('./swaggerDocs'));
  });

  app.use('/docs', swaggerUi({
    docs: '/api-docs', // from the express route above.
  }));
}

module.exports = initSwagger;
