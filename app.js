const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');

const app = express();

// Google Search Console doğrulama dosyası
app.get('/google123456.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'google0e31c5c7650e76aa.html'));
});

// Proxy yönlendirme
app.use('/tumutoptan', createProxyMiddleware({
  target: 'https://thebravecartel.co.za',
  changeOrigin: true,
  secure: false,
}));

app.listen(process.env.PORT || 3000);
