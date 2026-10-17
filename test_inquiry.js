const http = require('http');

const data = JSON.stringify({
  name: 'Aarav Patel',
  email: 'aarav@acme-corp.com',
  company: 'Acme Systems',
  phone: '9876543210',
  projectType: 'Full-Stack Web App',
  budget: '$10,000 - $25,000',
  message: 'We need an enterprise full-stack web application with Three.js graphics and PostgreSQL backend.',
  _timestamp: Date.now() - 5000,
});

const options = {
  hostname: 'localhost',
  port: 3001,
  path: '/api/v1/inquiries',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(data),
  },
};

const req = http.request(options, (res) => {
  let body = '';
  res.on('data', (chunk) => (body += chunk));
  res.on('end', () => {
    console.log('STATUS:', res.statusCode);
    console.log('RESPONSE:', body);
  });
});

req.on('error', (e) => {
  console.error('ERROR:', e.message);
});

req.write(data);
req.end();
