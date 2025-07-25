const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/tumutoptan', createProxyMiddleware({
  target: 'https://thebravecartel.co.za',
  changeOrigin: true,
  secure: false,
}));

app.listen(process.env.PORT || 3000);
