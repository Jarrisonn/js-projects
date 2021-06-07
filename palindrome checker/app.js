// get user word
const userWord = document.querySelector("#userWord");
const container = document.querySelector(".container");
const submitButton = document.querySelector("#submitButton");
const form = document.querySelector("#form");

let wordInfo = "";


//display user word
const wordh1 = document.createElement("h1");
const wordh2 = document.createElement("h2");
let wordh2Info; 

submitButton.addEventListener("click", function(){
    event.preventDefault();
    //clear screen if anything on it.
    removePrevious();

    //append h1 with user text to form 
   wordInfo = userWord.value;
   wordh1.append(`You entered ${wordInfo}`);
    form.appendChild(wordh1);
   

    //create function which takes in word, splits word into characters, reverse chars, and join them back to create reveresed word, if reversed word == word taken in then word is palindrome
    function palindromeChecker(str) {
      let splitword = wordInfo.split("").reverse().join("");
      if(splitword == wordInfo){
        wordh2Info = `${wordInfo} is a palindrome, 
          it is the same back to front`;
          wordh2.append(wordh2Info);
          //append h2 saying if word is palindrome
          form.appendChild(wordh2);
      }else{
          wordh2Info = `${wordInfo} is not a palindrome`
          wordh2.append(wordh2Info);
          //append h2 saying if word is not palindrome
          form.appendChild(wordh2);
      }
      console.log(splitword);
    }

    
    palindromeChecker(wordInfo);
    
   
})




function removePrevious(){
  
    if(wordh1.textContent != null && wordh2.textContent != null ){
        wordh1.textContent = "";
        wordh2.textContent = "";
    }   
    
    

}


 
