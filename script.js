fetch('https://4noy.github.io/static/header.html')
        .then(response => response.text())
        .then(html => {
          document.getElementById('common-content').innerHTML = html;
        })
        .catch(error => console.error('Error fetching HTML:', error));