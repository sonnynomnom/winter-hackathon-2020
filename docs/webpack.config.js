const path = require("path");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src", "index"),

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },

  module: {
    rules: [
      //  use babel-loader to load our jsx and tsx files
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },

      // css & style loader for css
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },

      // also handle scss files
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },

  plugins: [],

  devServer: {
    contentBase: [path.join(__dirname, "../"), path.join(__dirname, "../..")],
    publicPath: "/docs/dist/",
    compress: true,
    port: 5050,
  },
};
