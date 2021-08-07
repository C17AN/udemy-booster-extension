module.exports = {
  devServer: {
    proxy: {
      "/": {
        target: "https://www.udemy.com/api-2.0",
      },
    },
  },
};
