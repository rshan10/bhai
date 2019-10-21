const formData = new FormData();
const photos = document.querySelector('input[type="file"][multiple]');

formData.append('title', 'My Vegas Vacation');
for (let i = 0; i < photos.files.length; i++) {
  formData.append('photos', photos.files[i]);
}

try {
  const response = await fetch('https://example.com/posts', {
    method: 'POST',
    body: formData
  });
  const result = await response.json();
  console.log('Success:', JSON.stringify(result));
} catch (error) {
  console.error('Error:', error);
}
