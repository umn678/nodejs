const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/', createProxyMiddleware({
    target: 'https://mynet.com', // Proxy yapmak istediğin site
    changeOrigin: true,
    secure: false,
}));

app.listen(process.env.PORT || 3000);
