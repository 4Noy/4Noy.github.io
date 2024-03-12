fetch('https://4noy.github.io/static/header.html')
        .then(response => response.text())
        .then(html => {
          document.getElementById('common-content').innerHTML = html;
        })
        .catch(error => console.error('Error fetching HTML:', error));


function hash(string) {
  const utf8 = new TextEncoder().encode(string);
  return crypto.subtle.digest('SHA-256', utf8).then((hashBuffer) => {
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((bytes) => bytes.toString(16).padStart(2, '0'))
      .join('');
    return hashHex;
  });
}

async function checkFlag(inputId, resultId, correctHash) {
  var input = document.getElementById(inputId).value;
  var resultElement = document.getElementById(resultId);
  
  try {
    var hashedInput = await hash(input);

    if (hashedInput === correctHash) {
      resultElement.textContent = "Correct !";
      resultElement.style.color = "green";
    } else {
      resultElement.textContent = "Incorrect :'(";
      resultElement.style.color = "red";
    }
  } catch (error) {
    console.error("Erreur lors de la génération du hash :", error);
  }
}

