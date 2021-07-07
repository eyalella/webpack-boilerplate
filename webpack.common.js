const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackRTLPlugin = require('webpack-rtl-plugin');

module.exports = {
    entry: {
        'common/common': ["./src/common/common.scss", "./src/common/common.js"],
        'home/home': ["./src/home/home.scss", "./src/home/home.js"],
        'signin/signin': ["./src/signin/signin.scss", "./src/signin/signin.js"],
        'signin-block-email/signin-block-email': ["./src/signin-block-email/signin-block-email.scss", "./src/signin-block-email/signin-block-email.js"],
        'registration/registration': ["./src/registration/registration.scss", "./src/registration/registration.js"],
        'profile/profile': ["./src/profile/profile.scss", "./src/profile/profile.js"],
        'about/about': ["./src/about/about.scss", "./src/about/about.js"],
        'green-rechesh/green-rechesh': ["./src/green-rechesh/green-rechesh.scss", "./src/green-rechesh/green-rechesh.js"],
        'q-and-a/q-and-a': ["./src/q-and-a/q-and-a.scss", "./src/q-and-a/q-and-a.js"],
        'contact-us/contact-us': ["./src/contact-us/contact-us.scss", "./src/contact-us/contact-us.js"],
        'contact-tender/contact-tender': ["./src/contact-tender/contact-tender.scss", "./src/contact-tender/contact-tender.js"],
        'contact-us-q-and-a/contact-us-q-and-a': ["./src/contact-us-q-and-a/contact-us-q-and-a.scss", "./src/contact-us-q-and-a/contact-us-q-and-a.js"],
        'contact-job-owners/contact-job-owners': ["./src/contact-job-owners/contact-job-owners.scss", "./src/contact-job-owners/contact-job-owners.js"],
        'contact-from-suppliers/contact-from-suppliers': ["./src/contact-from-suppliers/contact-from-suppliers.scss", "./src/contact-from-suppliers/contact-from-suppliers.js"],
        'dictionary/dictionary': ["./src/dictionary/dictionary.scss", "./src/dictionary/dictionary.js"],
        'sapakim/sapakim': ["./src/sapakim/sapakim.scss", "./src/sapakim/sapakim.js"],
        'mepharsemim/mepharsemim': ["./src/mepharsemim/mepharsemim.scss", "./src/mepharsemim/mepharsemim.js"],
        'job-owners/job-owners': ["./src/job-owners/job-owners.scss", "./src/job-owners/job-owners.js"],
        'bids/bids': ["./src/bids/bids.scss", "./src/bids/bids.js"],
        'search-results/search-results': ["./src/search-results/search-results.scss", "./src/search-results/search-results.js"],
        'search-results-exemption/search-results-exemption': ["./src/search-results-exemption/search-results-exemption.scss", "./src/search-results-exemption/search-results-exemption.js"],
        'search-results-2/search-results-2': ["./src/search-results-2/search-results-2.scss", "./src/search-results-2/search-results-2.js"],
        'search-for-others/search-for-others': ["./src/search-for-others/search-for-others.scss", "./src/search-for-others/search-for-others.js"],
        'aggregated-search/aggregated-search': ["./src/aggregated-search/aggregated-search.scss", "./src/aggregated-search/aggregated-search.js"],
        'regulation/regulation': ["./src/regulation/regulation.scss", "./src/regulation/regulation.js"],
        'news/news': ["./src/news/news.scss", "./src/news/news.js"],
        'sitemap/sitemap': ["./src/sitemap/sitemap.scss", "./src/sitemap/sitemap.js"],
        'reporting/reporting': ["./src/reporting/reporting.scss", "./src/reporting/reporting.js"],
        'forgot-password-a/forgot-password-a': ["./src/forgot-password-a/forgot-password-a.scss", "./src/forgot-password-a/forgot-password-a.js"],
        'forgot-password-c-from-link/forgot-password-c-from-link': ["./src/forgot-password-c-from-link/forgot-password-c-from-link.scss", "./src/forgot-password-c-from-link/forgot-password-c-from-link.js"],
        'websites-links-2/websites-links-2': ["./src/websites-links-2/websites-links-2.scss", "./src/websites-links-2/websites-links-2.js"],
        'tender-exemption-form/tender-exemption-form': ["./src/tender-exemption-form/tender-exemption-form.scss", "./src/tender-exemption-form/tender-exemption-form.js"],
        'tender-exemption/tender-exemption': ["./src/tender-exemption/tender-exemption.scss", "./src/tender-exemption/tender-exemption.js"],
        'error-page/error-page': ["./src/error-page/error-page.scss", "./src/error-page/error-page.js"]
    },
    output: {
        filename: "[name].min.js",
        publicPath: "/",
        path: path.resolve(__dirname, "dist")
    },
    resolve: {
    alias: {
           handlebars: 'handlebars/dist/handlebars.min.js'
        }
    },
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /(node_modules)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env']
                }
              }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    publicPath: '../',
                    use: [
                        { loader: "css-loader", options: { sourceMap: true } },
                        { loader: "postcss-loader", options: { sourceMap: true } },
                        { loader: "sass-loader", options: { sourceMap: true } }
                    ]
                })
            }, {
                test: /\.html$/,
                use: {
                    loader: "html-loader",
                    options: { interpolate: "require" }
                }
            },
            {
                test: /\.(ico|jpg|jpeg|gif|webp)(\?.*)?$/,
                loader: "file-loader",
                options: {
                    name: "images/[name].[ext]"
                }
            },
            {
                test: /\.(otf|ttf|png|svg|woff|woff2|eot)(\?.*)?$/,
                loader: "url-loader",
                options: {
                    limit: 10000,
                    name: "images/[name].[ext]"
                }
            }
        ]
    },

    plugins: [
        new CopyWebpackPlugin([
            { from: "src/common/images", to: "common/images" },
            { from: "src/fonts", to: "fonts" },
            { from: "src/common/fonts.scss", to: "common/fonts.css" },
            { from: "src/mailing", to: "mailing" }
        ]),
        new ExtractTextPlugin("[name].css"),
        new HtmlWebpackPlugin({
            chunks: ['home/home'],
            filename: path.resolve(__dirname, "dist/home/index.html"),
            template: path.resolve(__dirname, "src/home/index.html")
        }),
        new HtmlWebpackPlugin({
            chunks: ['signin/signin'],
            filename: path.resolve(__dirname, "dist/signin/index.html"),
            template: path.resolve(__dirname, "src/signin/index.html")
        }),
        new HtmlWebpackPlugin({
            chunks: ['signin-block-email/signin-block-email'],
            filename: path.resolve(__dirname, "dist/signin-block-email/index.html"),
            template: path.resolve(__dirname, "src/signin-block-email/index.html")
        }),
        new HtmlWebpackPlugin({
            chunks: ['registration/registration'],
            filename: path.resolve(__dirname, "dist/registration/index.html"),
            template: path.resolve(__dirname, "src/registration/index.html")
        }), 
        new HtmlWebpackPlugin({
            chunks: ['profile/profile'],
            filename: path.resolve(__dirname, "dist/profile/index.html"),
            template: path.resolve(__dirname, "src/profile/index.html")
        }),
        new HtmlWebpackPlugin({
            chunks: ['about/about'],
            filename: path.resolve(__dirname, "dist/about/index.html"),
            template: path.resolve(__dirname, "src/about/index.html")
        }),
        new HtmlWebpackPlugin({
            chunks: ['green-rechesh/green-rechesh'],
            filename: path.resolve(__dirname, "dist/green-rechesh/index.html"),
            template: path.resolve(__dirname, "src/green-rechesh/index.html")
        }),
        new HtmlWebpackPlugin({
            chunks: ['q-and-a/q-and-a'],
            filename: path.resolve(__dirname, "dist/q-and-a/index.html"),
            template: path.resolve(__dirname, "src/q-and-a/index.html")
        }), 
        new HtmlWebpackPlugin({
            chunks: ['contact-us/contact-us'],
            filename: path.resolve(__dirname, "dist/contact-us/index.html"),
            template: path.resolve(__dirname, "src/contact-us/index.html")
        }),
        new HtmlWebpackPlugin({
            chunks: ['contact-tender/contact-tender'],
            filename: path.resolve(__dirname, "dist/contact-tender/index.html"),
            template: path.resolve(__dirname, "src/contact-tender/index.html")
        }),
        new HtmlWebpackPlugin({
            chunks: ['contact-us-q-and-a/contact-us-q-and-a'],
            filename: path.resolve(__dirname, "dist/contact-us-q-and-a/index.html"),
            template: path.resolve(__dirname, "src/contact-us-q-and-a/index.html")
        }),
        new HtmlWebpackPlugin({
            chunks: ['contact-job-owners/contact-job-owners'],
            filename: path.resolve(__dirname, "dist/contact-job-owners/index.html"),
            template: path.resolve(__dirname, "src/contact-job-owners/index.html")
        }),
        new HtmlWebpackPlugin({
            chunks: ['contact-from-suppliers/contact-from-suppliers'],
            filename: path.resolve(__dirname, "dist/contact-from-suppliers/index.html"),
            template: path.resolve(__dirname, "src/contact-from-suppliers/index.html")
        }),
        new HtmlWebpackPlugin({
            chunks: ['dictionary/dictionary'],
            filename: path.resolve(__dirname, "dist/dictionary/index.html"),
            template: path.resolve(__dirname, "src/dictionary/index.html")
        }),
        new HtmlWebpackPlugin({
            chunks: ['sapakim/sapakim'],
            filename: path.resolve(__dirname, "dist/sapakim/index.html"),
            template: path.resolve(__dirname, "src/sapakim/index.html")
        }),
        new HtmlWebpackPlugin({
            chunks: ['mepharsemim/mepharsemim'],
            filename: path.resolve(__dirname, "dist/mepharsemim/index.html"),
            template: path.resolve(__dirname, "src/mepharsemim/index.html")
        }),
        new HtmlWebpackPlugin({
            chunks: ['job-owners/job-owners'],
            filename: path.resolve(__dirname, "dist/job-owners/index.html"),
            template: path.resolve(__dirname, "src/job-owners/index.html")
        }),
        new HtmlWebpackPlugin({
            chunks: ['bids/bids'],
            filename: path.resolve(__dirname, "dist/bids/index.html"),
            template: path.resolve(__dirname, "src/bids/index.html")
        }),
        new HtmlWebpackPlugin({
            chunks: ['search-results/search-results'],
            filename: path.resolve(__dirname, "dist/search-results/index.html"),
            template: path.resolve(__dirname, "src/search-results/index.html")
        }),
        new HtmlWebpackPlugin({
            chunks: ['search-results-exemption/search-results-exemption'],
            filename: path.resolve(__dirname, "dist/search-results-exemption/index.html"),
            template: path.resolve(__dirname, "src/search-results-exemption/index.html")
        }),
        new HtmlWebpackPlugin({
            chunks: ['search-results-2/search-results-2'],
            filename: path.resolve(__dirname, "dist/search-results-2/index.html"),
            template: path.resolve(__dirname, "src/search-results-2/index.html")
        }),
        new HtmlWebpackPlugin({
            chunks: ['search-for-others/search-for-others'],
            filename: path.resolve(__dirname, "dist/search-for-others/index.html"),
            template: path.resolve(__dirname, "src/search-for-others/index.html")
        }),
        new HtmlWebpackPlugin({
            chunks: ['aggregated-search/aggregated-search'],
            filename: path.resolve(__dirname, "dist/aggregated-search/index.html"),
            template: path.resolve(__dirname, "src/aggregated-search/index.html")
        }),
        new HtmlWebpackPlugin({
            chunks: ['regulation/regulation'],
            filename: path.resolve(__dirname, "dist/regulation/index.html"),
            template: path.resolve(__dirname, "src/regulation/index.html")
        }),
        new HtmlWebpackPlugin({
            chunks: ['news/news'],
            filename: path.resolve(__dirname, "dist/news/index.html"),
            template: path.resolve(__dirname, "src/news/index.html")
        }),
        new HtmlWebpackPlugin({
            chunks: ['sitemap/sitemap'],
            filename: path.resolve(__dirname, "dist/sitemap/index.html"),
            template: path.resolve(__dirname, "src/sitemap/index.html")
        }),
        new HtmlWebpackPlugin({
            chunks: ['reporting/reporting'],
            filename: path.resolve(__dirname, "dist/reporting/index.html"),
            template: path.resolve(__dirname, "src/reporting/index.html")
        }),
        new HtmlWebpackPlugin({
            chunks: ['forgot-password-a/forgot-password-a'],
            filename: path.resolve(__dirname, "dist/forgot-password-a/index.html"),
            template: path.resolve(__dirname, "src/forgot-password-a/index.html")
        }),
        new HtmlWebpackPlugin({
            chunks: ['forgot-password-c-from-link/forgot-password-c-from-link'],
            filename: path.resolve(__dirname, "dist/forgot-password-c-from-link/index.html"),
            template: path.resolve(__dirname, "src/forgot-password-c-from-link/index.html")
        }),
        new HtmlWebpackPlugin({
            chunks: ['websites-links-2/websites-links-2'],
            filename: path.resolve(__dirname, "dist/websites-links-2/index.html"),
            template: path.resolve(__dirname, "src/websites-links-2/index.html")
        }),
        new HtmlWebpackPlugin({
            chunks: ['tender-exemption-form/tender-exemption-form'],
            filename: path.resolve(__dirname, "dist/tender-exemption-form/index.html"),
            template: path.resolve(__dirname, "src/tender-exemption-form/index.html")
        }),
        new HtmlWebpackPlugin({
            chunks: ['tender-exemption/tender-exemption'],
            filename: path.resolve(__dirname, "dist/tender-exemption/index.html"),
            template: path.resolve(__dirname, "src/tender-exemption/index.html")
        }),
        new HtmlWebpackPlugin({
            chunks: ['error-page/error-page'],
            filename: path.resolve(__dirname, "dist/error-page/index.html"),
            template: path.resolve(__dirname, "src/error-page/index.html")
        }),
        new WebpackRTLPlugin({
            
            minify: false,
            //blacklist: {'.form-checkbox:checked:after':true}
        })
    ]
};