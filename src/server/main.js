import path from 'path';
import WebpackIsomorphicTools from 'webpack-isomorphic-tools';
import WebpackIsomorphicToolsConfig from '../../webpack/webpack.isomorphic.tools';

const rootDir = path.resolve(__dirname, '../../');
/* eslint no-underscore-dangle: 0*/
global.__DEVELOPMENT__ = process.env.NODE_ENV !== 'production';
global.webpackIsomorphicTools = new WebpackIsomorphicTools(WebpackIsomorphicToolsConfig)
  /* eslint no-undef: 0 */
  .development(__DEVELOPMENT__)
  .server(rootDir, () => {
    require('./server');
  });
