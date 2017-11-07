const debug = require('debug')("app:server:routes:user");

module.exports = function(server) {

  debug("Including user routes");

  server.get('/api/user', (req, res) => {
    res.sendStatus(200);
  });

};