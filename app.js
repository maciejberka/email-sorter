//contain entered text
let inputValue;

//contain found emails
let emails = [];

const submitButton = document.querySelector('button');

//take entered value to variable when user click at submit button
submitButton.addEventListener('click', () => {
  //clear previous array
  emails = [];
  
  paragraph.innerHTML = '';
  
  //get entered text
  inputValue = document.querySelector('.text').value;
  findEmails();
});

//this function looking for email adresses
function findEmails() {
  //take all words to the allWords array
  let allWords = inputValue.replace( /\n/g, " " ).split( " " );
  
  for(word of allWords){
    //if found email adress and array doesn't contain it yet
    if(word.includes('@') && !emails.includes(word)){
      //add it to emails array
      emails.push(word);
    }
  }
  
  sortByCompanyName();
  
};

//sort emails alphabetical by word after '@'
function sortByCompanyName() {
  
  emails.sort(function(a, b) {
    return a.substr(a.indexOf('@') + 1) > b.substr(b.indexOf('@') + 1);
  });
  
  printEmails();
  
}

const paragraph = document.querySelector('p');

//finnaly add sorted emails to the paragraph element
function printEmails(){
  
  for(email of emails){
    paragraph.innerHTML += `${email}<br>`;
  }
  
}


  















