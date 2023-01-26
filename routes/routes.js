const express = require('express');


const apiRouter = express();


apiRouter.use('/user', require('./user'));
apiRouter.use('/product', require('./product'));

module.exports = apiRouter;
