

async function test() {
  try {
    const res = await fetch('https://www.mongabay.co.id/feed/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      }
    });
    if (!res.ok) throw new Error('Status: ' + res.status);
    const text = await res.text();
    console.log('Success, length:', text.length);
    console.log(text.substring(0, 300));
  } catch (err) {
    console.error('Error:', err);
  }
}
test();
