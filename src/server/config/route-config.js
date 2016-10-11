(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const routes = require('../routes/index');
    const donutRoutes = require('../routes/donuts');
    const shopRoutes = require('../routes/shops');
    const employeeRoutes = require('../routes/employees');

    // *** register routes *** //
    app.use('/', routes);
    app.use('/donuts', donutRoutes);
    app.use('/shops', shopRoutes);
    app.use('/employees', employeeRoutes);
  };

})(module.exports);
