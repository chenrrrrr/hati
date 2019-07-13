module.exports = {
  // 本地开发请注释
  // baseUrl: "./",
  outputDir: "dist",
  configureWebpack: {
    externals: {
      vue: "Vue",
      axios: "axios"
    }
  }
};
