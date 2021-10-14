var namn = "Klicka på Knapp 2 först och skriv in ditt namn tack!"

// Uppgift 1a1:
function buttonAction1() {
  var currentdate = new Date(); 
  var time = currentdate.getHours() + ":";
  if(currentdate.getMinutes() <= 9 ){
    time += "0" + currentdate.getMinutes()
  } else {
    time += currentdate.getMinutes();
  }

  alert("Hejsan! Tid och datum är : " + time)
}

// Uppgift 1a2 här:
function buttonAction2() {
  namn = window.prompt("Hej! Vad är ditt namn?");
  if(namn == "") {
    alert("Vänligen skriv in ditt namn!!");
    buttonAction2();
    return;
  }
  var namnUpperCase = namn.toUpperCase();

  alert(namnUpperCase + " är ett jättefint namn!");
}

// Uppgift 1a3 här:
function buttonAction3() {
  document.getElementById("result3").innerHTML = namn;
}

// Uppgift 1a4 här:
function buttonAction4() {
  
}

// Uppgift 1a5 här:
function buttonAction5() {
  number1 = document.getElementById("number1")
  number2 = document.getElementById("number2")

  if(
    number1.value >= 0 
    && number1.value <= 1000 
    && number1.value != "" 
    
    && number2.value >= 0 
    && number2.value <= 1000
    && number2.value != "" 
    ){
    document.getElementById("result5").innerHTML = (parseFloat(number1.value) + parseFloat(number2.value));
  } else {
    alert("Något gick fel! Endast siffror mellan 0 & 1000 är godkända.")
  }
}

// Uppgift 1a6 här:
function buttonAction6() {
  let textInput = document.getElementById("textInput").value
  let wordcounter = document.getElementById("wordCount")
  let spaces = 0;

  for (let i = 0; i < textInput.length; i++) {
      if (textInput[i] == " ") {
          spaces += 1;
      }
  }

  spaces += 1; 
  
  wordcounter.innerHTML = spaces;
}

// Uppgift 1a7 här:
function buttonAction7() {
  let msg = window.prompt("Skriv ett meddelande som ska repeteras 10 ggr: ")
  let duplicatedMsg = "";

  for (let i = 0; i < 10; i++) {
    duplicatedMsg += msg + " \n ";
  }

  alert(duplicatedMsg)
} 

// Uppgift 1a8 här:
function buttonAction8() {
  let hiddenButton = document.getElementById("hiddenButton")

  if(hiddenButton.style.visibility == "visible") {
    hiddenButton.style.visibility = null;
  } else {
    hiddenButton.style.visibility = "visible";
  }
}

// Sista proceduren: Placera data i en tabell som byggs upp
function buttonAction9() {
  let input9 = document.getElementById("arrayInput").value;
  let result = document.getElementById("tableContainer");
  let inputArr = input9.split(",")
  const rows = Math.floor(inputArr.length / 7) + 1;
  var shouldBreak;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < 7; j++){
      if(inputArr[0] != undefined) {
        result.innerHTML += inputArr[0] + " "
        inputArr.splice(0, 1)
      } else {
        shouldBreak = true;
        return;
      }
    }
    if(!shouldBreak) {
      result.innerHTML += "<br>"
    }

  }
}

/*
 * Detta är en färdig procedur (funktion) som kopplar ihop händelsehanteraren
 * för alla knappar med de funktioner som ni har till uppgift att göra
 * NI SKALL INTE RÖRA NÅGOT HÄR:
 */

function onDoneLoadingHtml() {
  document.getElementsByName("button1")[0].onclick = buttonAction1;
  document.getElementsByName("button2")[0].onclick = buttonAction2;
  document.getElementsByName("button3")[0].onclick = buttonAction3;
  document.getElementsByName("button4")[0].onclick = buttonAction4;
  document.getElementsByName("button5")[0].onclick = buttonAction5;
  document.getElementsByName("button6")[0].onclick = buttonAction6;
  document.getElementsByName("button7")[0].onclick = buttonAction7;
  document.getElementsByName("button8")[0].onclick = buttonAction8;
  document.getElementsByName("button9")[0].onclick = buttonAction9;
  document.getElementById("hiddenButton").onclick = function () {
    alert("Neeeej!, \n du startade precis...\nKaffekokaren!");
  };
}

/*
 * Anger att när webläsaren är klar med att läsa in html, css ska den
 * köra funktionen onDoneLoadingHtml
 */
window.onload = onDoneLoadingHtml;






// Declare variables to use in our functions below

let startTime;
let elapsedTime = 0;
let timerInterval;

function timeToString(time) {
  let diffInHrs = time / 3600000;
  let hh = Math.floor(diffInHrs);

  let diffInMin = (diffInHrs - hh) * 60;
  let mm = Math.floor(diffInMin);

  let diffInSec = (diffInMin - mm) * 60;
  let ss = Math.floor(diffInSec);

  let diffInMs = (diffInSec - ss) * 100;
  let ms = Math.floor(diffInMs);

  let formattedMM = mm.toString().padStart(2, "0");
  let formattedSS = ss.toString().padStart(2, "0");
  let formattedMS = ms.toString().padStart(2, "0");

  return `${formattedMM}:${formattedSS}:${formattedMS}`;
}

// Create function to modify innerHTML

function print(txt) {
  document.getElementById("result3").innerHTML = txt;
}

// Create "start", "pause" and "reset" functions

function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function printTime() {
    elapsedTime = Date.now() - startTime;
    print(timeToString(elapsedTime));
  }, 10);
}

function pause() {
  clearInterval(timerInterval);
}