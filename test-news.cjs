const https = require('https');

https.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.antaranews.com%2Frss%2Flingkungan', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    console.log(data);
  });
});
