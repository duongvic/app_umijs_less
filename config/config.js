import { defineConfig } from 'umi';
import routes from './routes';
import locale from './locale';

export default defineConfig({
  model: {},
  antd: {
    // // configProvider
    // configProvider: {},
    // // themes
    // // dark: true,
    // compact: true,
    // // babel-plugin-import
    // import: true,
    // // less or css, default less
    // style: 'less',
    // // shortcut of `configProvider.theme`
    // // use to configure theme token, antd v5 only
    // theme: {},
    // // antd <App /> valid for version 5.1.0 or higher, default: undefined
    // appConfig: {},
    // // Transform DayJS to MomentJS
    // momentPicker: true,
    // // Add StyleProvider for legacy browsers
    // styleProvider: {
    //   hashPriority: 'high',
    //   legacyTransformer: true,
    // },
  },
  request: {},
  initialState: {},
  mock: {
    // include: ['src/pages/**/_mock.ts'],
  },
  fastRefresh: true,
  dva: {
    // hmr: true
  },
  layout: {
    // https://umijs.org/docs/max/layout-menu#构建时配置
    title: 'SMS',
    locale: true,
  },
  // https://umijs.org/zh-CN/plugins/plugin-locale
  locale,
  plugins: [
    'umi-plugin-react',
    {
      chunks: ['bizcharts', 'vendors', 'umi'],
      // dva: {
      //   webpackChunkName: true,
      // },
      dynamicImport: {
        webpackChunkName: true,
        // loadingComponent: './components/Loading.js',
      },
      title: {
        defaultTitle: 'SMS',
        useLocale: true,
      },
      dll: {
        exclude: []
      },
      locale,
      library: 'react',
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    },
  ],
  ignoreMomentLocale: true,
  routes,
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
});