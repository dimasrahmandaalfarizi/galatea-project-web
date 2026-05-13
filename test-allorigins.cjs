fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('https://www.cnnindonesia.com/nasional/rss'))
  .then(response => {
    if (response.ok) return response.json();
    throw new Error('Network response was not ok.');
  })
  .then(data => {
    console.log('Status:', data.status?.http_code);
    console.log('Content length:', data.contents?.length);
    console.log(data.contents.substring(0, 200));
  })
  .catch(error => {
    console.error('Error:', error);
  });
