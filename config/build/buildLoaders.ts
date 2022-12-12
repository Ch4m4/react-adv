import {RuleSetRule} from 'webpack';
import MiniCssExtractPlugin from "mini-css-extract-plugin";

function buildLoaders(isDev: boolean): RuleSetRule[] {
  const typescriptLoader: RuleSetRule = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const stylesLoader: RuleSetRule = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: /\.module/,
            localIdentName: isDev ? '[local]--[hash:base64:6]' : '[hash:base64:8]',
          }
        }
      },
      'sass-loader',
    ],
  }

  return [
    typescriptLoader,
    stylesLoader
  ]
}

export default buildLoaders;
