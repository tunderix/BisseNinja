import 'regenerator-runtime/runtime';
import path from 'path';
import globImporter from 'node-sass-glob-importer';
import TsconfigPathsWebpackPlugin from 'tsconfig-paths-webpack-plugin';
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-postcss'
  ],
  typescript: {
    reactDocgen: 'none'
  },
  core: {
    builder: 'webpack5'
  },
  webpackFinal: async (config: any) => {
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/];
    config.module.rules[0].use[0].options.plugins.push(
      require.resolve('babel-plugin-remove-graphql-queries')
    );
    config.resolve.alias = {
      ...config.resolve.alias,
      assets: path.resolve(__dirname, '../src/assets')
    };
    config.resolve?.plugins?.push(
      new TsconfigPathsWebpackPlugin({
        configFile: path.resolve(__dirname, '../tsconfig.json')
      })
    );
    config.resolve.extensions.push('.ts', '.tsx');
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            sassOptions: {
              importer: globImporter()
            }
          }
        }
      ]
    });
    config.module.rules.push({
      test: /\.tsx?$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          cacheDirectory: './node_modules/.cache/storybook',
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
            '@babel/preset-typescript'
          ],
          babelrc: false
        }
      }
    });
    return config;
  }
};
