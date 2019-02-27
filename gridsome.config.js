module.exports = {
  siteName: 'Gridsome',
  icon: 'src/assets/favicon.png',
  plugins: [],
  chainWebpack: (config) => {
    config.module
      .rule('typescript')
        .test(/\.tsx?$/)
        .use()
          .loader('ts-loader')
          .options({ appendTsSuffixTo: [/\.vue$/] });

    config.resolve.extensions
      .add('ts');

    config.resolve.alias
      .set('vue$', `${process.cwd()}/node_modules/vue/dist/vue.esm.js`);
  },
}