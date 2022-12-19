const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodbUsername: "admin",
        mongodbPassword: "admin",
        mongodbClusterName: "cluster0",
        mongodbDatabase: "blog",
      },
    };
  }

  return {
    env: {
      mongodbUsername: "admin",
      mongodbPassword: "admin",
      mongodbClusterName: "cluster0",
      mongodbDatabase: "blog-production",
    },
  };
};
