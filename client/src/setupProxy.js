const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
	app.use('/api',
		createProxyMiddleware({
			target: 'https://tstudy.run.goorm.io:3001',
			changeOrigin: true,
		})
	);
};