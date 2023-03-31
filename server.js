import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import fs from 'node:fs';

const subdomain = 'emaildemo';
const app = express();

const index = JSON.parse(fs.readFileSync('./github/index.json', 'utf-8'));

app.use(express.static('.'))
app.use(
  '/',
  createProxyMiddleware({
    target: `https://dev--${subdomain}.doc2.email/github?index=${encodeURIComponent(JSON.stringify(index))}&username=doc2-site-bot&`,
    changeOrigin: true,
  })
);
app.listen(3000);

console.log('Running http://localhost:3000')