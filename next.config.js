const withSvgrTM = require('next-svgr');

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
