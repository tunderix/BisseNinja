"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
dotenv.config({ path: __dirname + '/.env' });
exports.default = {
    siteMetadata: {
        title: process.env.APP_NAME,
        description: `Ultimate life of bisseninja.`,
        author: `@ioni`
    },
    plugins: [
        `gatsby-plugin-typescript`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-netlify-cms`,
        `gatsby-plugin-sass`,
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/blog`,
                name: `markdown-pages`
            }
        },
        `gatsby-transformer-remark`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#6fb22b`,
                theme_color: `#6fb22b`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
            }
        },
        `gatsby-plugin-gatsby-cloud`
    ]
};
