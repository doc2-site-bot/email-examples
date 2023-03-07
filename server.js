import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import fs from 'node:fs';

const project = '04d6f867-abdf-48d1-9e19-496a3ee28054';
const app = express();

const index = JSON.parse(fs.readFileSync('./github/index.json', 'utf-8'));

app.use(express.static('.'))
app.use(
  '/',
  createProxyMiddleware({
    target: `https://dev--${project}.doc2.email/github?index=${encodeURIComponent(JSON.stringify(index))}&username=doc2-site-bot&`,
    changeOrigin: true,
  })
);
app.listen(3000);

console.log('Running http://localhost:3000')