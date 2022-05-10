const withSvgrTM = require('next-svgr')('next-transpile-modules')([
    'react-markdown',
]);

module.exports = withSvgrTM({
    async rewrites() {
        return [
            {
                source: '/',
                destination: '/home',
            },
        ];
    },
});
