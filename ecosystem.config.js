module.exports = {
  apps: [
    {
      name: "synorq-web",
      script: "node_modules/.bin/next",
      args: "start",
      cwd: "/var/www/synorq-web",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
