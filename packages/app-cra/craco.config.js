

const path = require("path");
const { getLoader, loaderByName } = require("@craco/craco");

const packages = [];
packages.push(path.join(__dirname, "../ui-components"));
packages.push(path.join(__dirname, "../utils"));
packages.push(path.join(__dirname, "../theme"));
module.exports = {
    webpack: {
        configure: (webpackConfig, arg) => {
            const { isFound, match } = getLoader(
                webpackConfig,
                loaderByName("babel-loader")
            );
            if (isFound) {
                const include = Array.isArray(match.loader.include)
                    ? match.loader.include
                    : [match.loader.include];

                match.loader.include = include.concat(packages);
            }
            let oneOfRule = webpackConfig.module.rules.find((r) => r.oneOf);
            oneOfRule.oneOf.splice(0, 0, {
                test: /\.svg$/,
                use: ['svg-url-loader'],
            });

            return webpackConfig;
        },

        alias: {
            '~Atoms': path.resolve(
                __dirname,
                '../ui-components/src/components/Atoms'
            ),
            '~Molecules': path.resolve(
                __dirname,
                '../ui-components/src/components/Molecules'
            ),
            '~Organisms': path.resolve(
                __dirname,
                '../ui-components/src/components/Organisms'
            ),
            '~Templates': path.resolve(
                __dirname,
                '../ui-components/src/components/Templates'
            ),
            '~Pages': path.resolve(
                __dirname,
                '../ui-components/src/components/Pages'
            ),
            '~hooks': path.resolve(__dirname, '../ui-components/src/hooks'),
        },

    },
};