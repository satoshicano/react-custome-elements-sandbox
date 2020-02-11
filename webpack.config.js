const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const root = file => path.resolve(__dirname, file);

module.exports = env => {
  const prod = env && env.production;

  return {
    entry: {
      main: root("src/index.js"),
      "components/date-picker": root("components/date-picker/src/index.js")
    },
    output: {
      path: root("docs"),
      filename: prod ? "[name].[chunkhash].js" : "[name].js"
    },
    resolve: {
      extensions: [".js"]
    },
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              cacheDirectory: true
            }
          }
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: root("src/index.html"),
        inject: false
      })
    ]
  };
};
