let hashes = [
    "26010c5a26090f38d288cd8a00c38b41548a3e70f77ce3ecd487d819986b2b28",
    "c11a610981a5251aea302e862267c2b389b5ecff233708881f5beabdf614aa1b",
    "51b1463f66df7462b15056f4dc9d6a5d9a43e676b5e793e36578580487b69377",
    "2b84da5ec8f1973fef408f285613191ba5c9898185febc0560f004960471f0a2",
    "1105ca72602e35e8c9b011366fc8dcb04450a952892bf971b65d7316ff056623",
    "90d5a0ce78165291e1b4ed4da92dc58d83256cb874798cb3c47c5c683309fa47",
    "36495f0a487a851acf65f89fdffc3f45735e0b89e97570eabc349a434fa5d98a",
    "3fe25c26b52005ddf956cbebe656d692e76e6dc7011e46853b5f717f65d4ba87",
    "650dbdc2ec4c57eb303a3b894fc218cbd47412742ffca62ca5b4d0b0f8d09aeb",
    "38de86ed19691205c2c851cafd80bf2ea30a44b4ffd0d42de0cb7c6dfeba9741",
    "c2ae10e5b92956933d3f81ff1137f1a9edc57680adec865841a8e990159164ac",
    "a09a4e0630b18a835b9e2d97b315b897fa32ab586621011c605ce217561a1174",
    "51adb6f1e55285c9643bf9589dc3b952760dc19b13f01b795a4bb1f1c3c349df",
    "8172ac950f210218672621de560e52dfdaeef7832658e5c3bb825ea5b6a0b9d7",
    "148576b311aee3141909bf0ee2a2562655257e4cabcdc2b804b72ced884d265c",
    "91b23438be58977039e646dee8c134561eca0de4639f55cd721a8789d97ebc0b"
  ];
  
  
  
  function handleEnterKeyPress(event, inputId, resultId, correctHash) {
    if (event.keyCode === 13) {
      checkFlag(inputId, resultId, correctHash);
    }
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
  
  for (let i = 1; i <= hashes.length; i++) {
    let flagId = "flag" + i;
    let resultId = "result" + i;
    let hash = hashes[i - 1];
  
    document.getElementById(flagId).addEventListener("keyup", function(event) {
      handleEnterKeyPress(event, flagId, resultId, hash);
    });
  }