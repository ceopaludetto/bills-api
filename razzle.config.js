const path = require("path");

module.exports = {
  options: { verbose: false, enableReactRefresh: false, buildType: "serveronly", disableWebpackbar: true },
  plugins: [
    {
      name: "typescript",
      options: {
        useBabel: true,
      },
    },
  ],
  modifyPaths({ paths }) {
    paths.appServerIndexJs = path.resolve("src", "index.ts");

    return paths;
  },
  modifyWebpackOptions({ options: { webpackOptions }, env: { target } }) {
    if (target === "node") {
      webpackOptions.terserPluginOptions = {
        terserOptions: {
          mangle: false,
          compress: {
            keep_classnames: true,
            keep_fnames: true,
          },
        },
        sourceMap: true,
        parallel: true,
      };
    }

    return webpackOptions;
  },
  modifyWebpackConfig({ webpackConfig }) {
    const config = webpackConfig;

    config.resolve.alias["@"] = path.resolve("src");
    config.resolve.alias["lodash-es"] = "lodash";

    // config.plugins.unshift(new LodashPlugin({ paths: true }));

    return config;
  },
  modifyJestConfig({ jestConfig }) {
    delete jestConfig.transform["^.+\\.(js|jsx|mjs|cjs|ts|tsx)$"];

    jestConfig = {
      ...jestConfig,
      preset: "ts-jest/presets/js-with-babel",
      moduleNameMapper: {
        ...jestConfig.moduleNameMapper,
        "^@/(.*)$": "<rootDir>/src/$1",
      },
      coverageDirectory: "<rootDir>/coverage",
      globals: {
        "ts-jest": {
          babelConfig: "babel.config.js",
          tsconfig: "tsconfig.orm.json",
        },
      },
    };

    return jestConfig;
  },
};
