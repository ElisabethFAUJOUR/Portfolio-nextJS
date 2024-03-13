/** @type {import('next').NextConfig} */

const path = require('path')
const nextConfig = {
    i18n: {
        locales: ['fr', 'en'],
        defaultLocale: 'fr',
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'src/styles')],
    },
};
module.exports = nextConfig;

