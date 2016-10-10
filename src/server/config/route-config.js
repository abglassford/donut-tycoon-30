(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const routes = require('../routes/index');
    const donutRoutes = require('../routes/donut');

    // *** register routes *** //
    app.use('/', routes);
    app.use('/donut', donutRoutes);

  };

})(module.exports);
