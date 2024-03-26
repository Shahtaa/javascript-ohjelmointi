// Image switcher code

let myImage = document.querySelector('img');

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
let myContent = "Mozilla is Cool";
let myName = "";

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute ('src','images/firefox2.png');
    document.body.style.backgroundColor = 'white';
    myContent = "Is Brave Cooler?";
    myHeading.innerHTML = myContent;
    if(myName){
        myHeading.innerHTML = myContent+ "," + myName;
    }
    
   

  } else {
    myImage.setAttribute ('src','images/firefox-icon.png');
    myContent= 'Mozilla is cool';
    myHeading.innerHTML = myContent;
    document.body.style.backgroundColor = '#ff9500';
    if(myName){
        myHeading.innerHTML = myContent+ "," + myName;
    }
  }
}

// Personalized welcome message code



function setUserName() {
 myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);

    myHeading.innerHTML = myContent + ", "+ myName;
  }
}



myButton.onclick = function() {
  setUserName();
}