const config = {
  entry: './main.js',

  output: {
    path: './',
    filename: 'index.js'
  },

  devServer: {
    inline: true,
    port: 8080
  },

  module: {
    loaders: [
      {
        test:/\.jsx?$/,
        exclude: /node_module/,
        loader: 'babel',


        query: {
          presets: ['es2015', 'react', 'stage-0', 'stage-1', 'stage-3'],
          plugins: ['transform-decorators-legacy']
        }
      }
    ]
  }

};

module.exports = config;
