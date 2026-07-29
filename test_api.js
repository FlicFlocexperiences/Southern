const http = require('http');
const req = http.request({
  hostname: 'localhost',
  port: 3000,
  path: '/api/generate-article',
  method: 'POST',
  headers: { 'Content-Type': 'application/json' }
}, (res) => {
  console.log('STATUS:', res.statusCode);
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    console.log('BODY LENGTH:', data.length);
    console.log('BODY SAMPLE:', data.substring(0, 200));
    try {
      JSON.parse(data);
      console.log('JSON PARSE: SUCCESS');
    } catch(e) {
      console.log('JSON PARSE ERROR:', e.message);
    }
  });
});
req.write(JSON.stringify({ primaryKeyword: "SEO for E-commerce" }));
req.end();
