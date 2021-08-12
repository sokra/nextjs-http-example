const path = require("path");

module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.experiments = config.experiments || {};
    config.experiments.buildHttp = {
      // Setup lockfile location, to allow server and client
      // share the same lockfile and cache.
      lockfileLocation: path.resolve("webpack.lock"),
      cacheLocation: path.resolve("webpack.lock.data"),
      // You could switch off auto-upgrading http modules:
      // upgrade: false
    };
    return config;
  },
};
