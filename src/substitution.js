// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    
    
         
    if(!alphabet){return false}
    const lengthofalphabet = alphabet.length;
    if (lengthofalphabet != 26){return false;}
    
    for (let firstLetter in alphabet) {
      for (let matchingLetter in alphabet) { 
        if (alphabet[firstLetter] === alphabet[matchingLetter] && firstLetter != matchingLetter) {
          return false; } } }
  
  const standardAlphabet = "abcdefghijklmnopqrstuvwxyz"; 
    let result = "";
 
    
    //Encode

   if(encode){
    for (let i = 0; i < input.length; i++){
     
      const inputCurrentLetter = input[i];
  const currentIndex = standardAlphabet.indexOf(inputCurrentLetter);
    
      if (!standardAlphabet.includes(inputCurrentLetter) ){
        result += inputCurrentLetter;
        continue;
      }
        result += alphabet[currentIndex]
    }
    }

    //decode
    else if(!encode)
    {
     
      
      for(let i = 0; i < input.length; i++){

      const inputCurrentLetter = input[i];
      const currentIndex = alphabet.indexOf(inputCurrentLetter);
    
      if (inputCurrentLetter === " ") {
        result += inputCurrentLetter;
        continue;
      }
        result += standardAlphabet[currentIndex]
      }
    }
    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
