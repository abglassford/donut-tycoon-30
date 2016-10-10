(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const routes = require('../routes/index');
    const donutRoutes = require('../routes/donuts');
    const shopsRoutes = require('../routes/shops');

    // *** register routes *** //
    app.use('/', routes);
    app.use('/donuts', donutRoutes);
    app.use('/shops', shopsRoutes);

  };

})(module.exports);
