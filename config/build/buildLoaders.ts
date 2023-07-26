import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options;
    const babelLoader = buildBabelLoader();

    const svgLoader = buildSvgLoader();

    const cssLoader = buildCssLoader(isDev);

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    return [
        babelLoader,
        fileLoader,
        svgLoader,
        typescriptLoader,
        cssLoader,
    ];
}
