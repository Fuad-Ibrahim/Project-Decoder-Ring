// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  
  // you can add any code you want within this function scope
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  
  function caesar(input, shift, encode = true) {
    
    // your solution code here
      if(!shift || shift < -25 || shift > 25)  return false;
         let result = '';
  
          if (encode){
      result = encoded(input,shift);
            }
        else{
          result = decoded(input, shift);
        }
  return result;
  }
  
  // Encode
  function encoded(input, shift){

  let result = "";
  let char = input.toLowerCase();
 
  for(let i = 0; i < char.length; i++){
     
    let currentLetter = char[i];
   if(!alphabet.includes(currentLetter)){
      result += currentLetter;
      continue;
    }
    
    let currentIndex = alphabet.indexOf(currentLetter);
    let newIndex = currentIndex + shift;

    if(newIndex <= 0){newIndex += 26}
    else if(newIndex >= 26){newIndex -= 26}
    else{newIndex = newIndex};
    result += alphabet[newIndex]
  }

  return result;
}
  // Decode
  function decoded(input, shift){
  let result = "";
  let char = input.toLowerCase();

  for(let i = 0; i < char.length; i++){
    let currentLetter = char[i];
    if(!alphabet.includes(currentLetter)){
      result += currentLetter;
      continue;
    }

    let currentIndex = alphabet.indexOf (currentLetter);
    let newIndex = currentIndex - shift;

     if (newIndex > 25){ 
       let shiftedI = newIndex - 26; 
       result += alphabet[shiftedI];
       } 
    else if (newIndex < 0){ 
       let shiftedI = 26 + newIndex;
      result += alphabet[shiftedI];
    } 
    else{
      result += alphabet[newIndex];
    }
  }
  return result;
}

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
