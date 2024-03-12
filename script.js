fetch('https://4noy.github.io/static/header.html')
        .then(response => response.text())
        .then(html => {
          document.getElementById('common-content').innerHTML = html;
        })
        .catch(error => console.error('Error fetching HTML:', error));

let hashes = [
  "26010c5a26090f38d288cd8a00c38b41548a3e70f77ce3ecd487d819986b2b28",
  "c11a610981a5251aea302e862267c2b389b5ecff233708881f5beabdf614aa1b",
  "51b1463f66df7462b15056f4dc9d6a5d9a43e676b5e793e36578580487b69377",
  "2b84da5ec8f1973fef408f285613191ba5c9898185febc0560f004960471f0a2",
  "1105ca72602e35e8c9b011366fc8dcb04450a952892bf971b65d7316ff056623",
  "90d5a0ce78165291e1b4ed4da92dc58d83256cb874798cb3c47c5c683309fa47",
  "votre_hash_correcte_7",
  "votre_hash_correcte_8",
  "votre_hash_correcte_9"
];

for (let i = 1; i <= 9; i++) {
  let flagId = "flag" + i;
  let resultId = "result" + i;
  let hash = hashes[i - 1];

  document.getElementById(flagId).addEventListener("keyup", function(event) {
    handleEnterKeyPress(event, flagId, resultId, hash);
  });
}




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

