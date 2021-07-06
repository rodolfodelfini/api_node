//const bodyParser = require('body-parser');
const cors = require('cors');
const port  = process.env.PORT;
//const compression = require('compression');
//const helmet = require('helmet');

module.exports = (app) => {
  app.set('port', port);
  app.set('json spaces', 4);
  //app.use(helmet());
  app.use(cors({
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: [
      'Content-Type',
      'Authorization',
      'userSession',
      'limit',
      'order',
      'order_field',
      'search',
      'page',
    ],
  }));
  //app.use(compression());
  //app.use(bodyParser.json());
  // app.use(async (req, res, next) => {
  //   try {
  //     const { headers } = req;
  //     if (!Object.prototype.hasOwnProperty.call(headers, 'usersession')) {
  //       //return res.json(responses.error({}, 'Sessão não encontrada.', {}));
  //       return res.json('Sessão não encontrada.');
  //     }

  //     req.user = JSON.parse(headers.usersession);
  //   } catch (error) {
  //     //return res.json(responses.error({}, error.message, error));
  //     return res.json(error.message, error);
  //   }

  //   return next();
  // });
};
