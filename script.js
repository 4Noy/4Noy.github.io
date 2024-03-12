fetch('https://4noy.github.io/static/header.html')
        .then(response => response.text())
        .then(html => {
          document.getElementById('common-content').innerHTML = html;
        })
        .catch(error => console.error('Error fetching HTML:', error));

function checkFlag(inputId, resultId, hashId, correctHash) {
  var input = document.getElementById(inputId).value;
  var hash = document.getElementById(hashId).textContent;
  var resultElement = document.getElementById(resultId);
  
  // Hasher l'entrée utilisateur avec SHA-256
  var hashedInput = sha256(input);
  
  // Vérifier si le hash de l'entrée correspond au hash correct
  if (hashedInput === correctHash) {
    resultElement.textContent = "Correct ! Vous avez trouvé le flag.";
    resultElement.style.color = "green";
  } else {
    resultElement.textContent = "Désolé, ce n'est pas le bon flag.";
    resultElement.style.color = "red";
  }
}
