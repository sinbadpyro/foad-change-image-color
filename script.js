
//Variables to get the images
let getmer = document.getElementById("mer");
let getmontagne = document.getElementById("montagne");
let getcampagne = document.getElementById("campagne");

//functions to show and hide the images
function showmer(){
    getmontagne.style.display = "none";
    getcampagne.style.display = "none";

    if (getmer.style.display === "none") {
        getmer.style.display = "block";
      } else {
        getmer.style.display = "none";   
      }
}

function showmontagne(){
    getmer.style.display = "none";
    getcampagne.style.display = "none";
    if (getmontagne.style.display === "none") {
        getmontagne.style.display = "block";
      } else {
        getmontagne.style.display = "none";   
      }
}

function showcampagne(){
    getmer.style.display = "none";
    getmontagne.style.display = "none";
    if (getcampagne.style.display === "none") {
        getcampagne.style.display = "block";
      } else {
        getcampagne.style.display = "none";   
      }
}
//End of function for hiding and showing images

//Function to print out upper text I type in

const textinput = document.getElementById("fname");
const textoutput = document.getElementById("top-text");

function showUpperText(){
    textoutput.innerHTML = textinput.value
}

textinput.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
        showUpperText();
    }
});
//END OF Function to print out upper text I type in

//Function to print out bottom text I type in

const bottomTextOutput = document.getElementById("bottomtext");
const bottomTextInput = document.getElementById("bottomtextinput");

function showBottomText(){
    bottomTextOutput.innerHTML = bottomTextInput.value
}

bottomTextInput.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
        showBottomText();
    }
});

//Function to change Fonts

function verdanaFont(){
    textoutput.style.fontFamily = "verdana";
    bottomTextOutput.style.fontFamily = "verdana";
}
function robotoFont(){
    textoutput.style.fontFamily = "roboto";
    bottomTextOutput.style.fontFamily = "roboto";
}
function arialFont(){
    textoutput.style.fontFamily = "Arial";
    bottomTextOutput.style.fontFamily = "Arial";
}

//function to change text color 

let colorPicker;
const defaultColor = "#0000ff";

window.addEventListener("load", startup, false);
function startup() {
    colorPicker = document.getElementById("color-picker");
    colorPicker.value = defaultColor;
    colorPicker.addEventListener("input", updateFirst, false);
    colorPicker.addEventListener("change", updateAll, false);
    colorPicker.select();
  }

  function updateFirst(event) {
    
    if (textoutput) {
      textoutput.style.color = event.target.value;
    }
    if(bottomTextOutput){
        bottomTextOutput.style.color = event.target.value;
    }
  }
  
  //Function to change text style 
  
function normalstyle(){
    textoutput.style.fontStyle = "normal";
    bottomTextOutput.style.fontStyle = "normal";
}
function italicstyle(){
    textoutput.style.fontStyle = "italic";
    bottomTextOutput.style.fontStyle = "italic";
}
function strongstyle(){
    textoutput.style.fontStyle = "strong";
    bottomTextOutput.style.fontFamily = "strong";
}

// function to bring up the print bar
const printbtn = document.getElementById("print");

printbtn.addEventListener('click', function(){
    print();
})