module.exports = {
  // module: {
  //   rules: [{
  //     test: /\.less$/,
  //     loader: 'less-loader' // 将 Less 编译为 CSS
  //   }]
  // },
  resolve: {
    alias: {
      '@': require('path').resolve(__dirname, 'src'),
    },
  }
  
};