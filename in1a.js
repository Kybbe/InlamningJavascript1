var namn = "Klicka på Knapp 2 först och skriv in ditt namn tack!"; // För uppgift 3, om man inte klickat på knapparna i ordning så är inte namn inskrivet.

// Uppgift 1a1:
function buttonAction1() {
  let currentdate = new Date(); 
  let time = currentdate.getHours() + ":";
  if(currentdate.getMinutes() <= 9 ){
    time += "0" + currentdate.getMinutes();
  } else {
    time += currentdate.getMinutes();
  }

  alert("Hejsan! Klockan är " + time + "!");
};

// Uppgift 1a2 här:
function buttonAction2() {
  namn = window.prompt("Hej! Vad är ditt namn?");
  if(namn == "" || namn == null) {
    alert("Vänligen skriv in ditt namn!!");
    buttonAction2();
    return;
  }
  let namnUpperCase = namn.toUpperCase();

  alert(namnUpperCase + " är ett jättefint namn!");

  namn +=  " var namnet du skrev in på uppgift 2.";
};

// Uppgift 1a3 här:
function buttonAction3() {
  document.getElementById("result3").innerHTML = namn;
};

// Uppgift 1a4 här:
function buttonAction4() {
  let result = document.getElementById("result4");
  let startTime = Date.now();
  result.innerHTML = "Klicka igen för att stoppa tidtagaren.";
  clickedButton4Twice(startTime, result);
  startTime = undefined;
};

function clickedButton4Twice(startTime, result) {
  document.getElementsByName("button4")[0].onclick = function() {
    let svar = timeToString(Date.now() - startTime);
    alert(svar);
    result.innerHTML = svar;

    document.getElementsByName("button4")[0].onclick = buttonAction4;
  };
};

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
};

// Uppgift 1a5 här:
function buttonAction5() {
  let n1 = document.getElementById("number1").value;
  let n2 = document.getElementById("number2").value;
  
  if(
    n1 >= 0 && n2 >= 0
    && n1 <= 1000 && n2 <= 1000 
    && n1 != "" && n2 != ""
    ){
    document.getElementById("result5").innerHTML = n1 * n2;
  } else {
    alert("Något gick fel! Endast siffror mellan 0 & 1000 är godkända.");
  }; 
};

// Uppgift 1a6 här:
function buttonAction6() {
  let textInput = document.getElementById("textInput").value;
  let wordcounter = document.getElementById("wordCount");
  let words = 1;

  for (let i = 0; i < textInput.length; i++) {
    if (textInput[i] == " ") {
      words += 1;
    };
  };
  
  wordcounter.innerHTML = words;
};

// Uppgift 1a7 här:
function buttonAction7() {
  let msg = window.prompt("Skriv ett meddelande som ska repeteras 10 ggr: ");
  let duplicatedMsg = "";

  for (let i = 0; i < 10; i++) {
    duplicatedMsg += "#" + (i + 1) + " " + msg + "\n";
  };

  alert(duplicatedMsg);
} ;

// Uppgift 1a8 här:
function buttonAction8() {
  let hiddenButton = document.getElementById("hiddenButton")

  if(hiddenButton.style.visibility == "visible") {
    hiddenButton.style.visibility = null;
  } else {
    hiddenButton.style.visibility = "visible";
  };
};

// Sista proceduren: Placera data i en tabell som byggs upp
function buttonAction9() {
  let input = document.getElementById("arrayInput").value; // Där användaren skriver.
  let result = document.getElementById("tableContainer"); // Resultat "rutan".
  let maxLength = 7; // Uppgiften specificerar max 7 i en rad.
  result.innerHTML = "" // Så vi tömmer rutan när användaren redan klickat en gång.
  let inputArr = input.split(",") // Separera ut alla inputs vid "," och gör ny lista.
  inputArr = inputArr.filter((a) => a); // Ta bort alla null, undefined och tomma celler.

  const rows = Math.floor(inputArr.length / maxLength) + 1; // För att snabbt kolla hur många rader som behövs.
  
  const tbl = document.createElement("table");

  for (let i = 0; i < rows; i++) { // Gör en rad för varje row(s) som behövs
    const tr = tbl.insertRow();

    for (let j = 0; j < 7; j++){ // Skapa en cell för varje del av inputArr, med max 7 i varje rad
      if(inputArr[0] != undefined) { // Sålänge inte arrayen är tom, gör:
        const td = tr.insertCell(); // Skapa cell
        td.appendChild(document.createTextNode(inputArr[0])); // Lägg till texten i varje cell
        inputArr.splice(0, 1); // Ta bort den "cellen" som vi skrev ut ur inputArr
      } else { // När tabellen är fylld och inputArr är tom:
        result.appendChild(tbl); // Pusha ut tabellen i result rutan
        return; // avsluta funktionen.
      };
    };
  };
};

function filterArray(inputArr) {
  inputArr = inputArr.split(","); // Separera ut alla inputs vid "," och gör ny lista.
  inputArr = inputArr.filter((a) => a); // Ta bort alla null, undefined och tomma celler.
  inputArr = inputArr.filter(function(a){return a !== ' '});

  return inputArr;
};

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
  makeBackground();
};

/*
 * Anger att när webläsaren är klar med att läsa in html, css ska den
 * köra funktionen onDoneLoadingHtml
 */
window.onload = onDoneLoadingHtml;


// För att ge bokstäverna J,A,C,O,B en "random" position.
function makeBackground() {
  let letters = document.getElementById("background").children; // Hitta alla bokstäver

  for(i = 0; i < letters.length; i++){ // För varje bokstav
    setRandomLocation(letters[i]); // Ge random top och left properties
  };
};

function setRandomLocation(letter) {
	let x = Math.random() * document.documentElement.clientWidth;// Siffra mellan 1 och max bredden av användarens skärm
  let y = Math.random() * document.documentElement.clientHeight; // Samma för höjden
	let rotation = Math.random() * 360;
	
	letter.style.transform = "rotate(" + rotation + "deg)";
  letter.style.top = (y - 60) + "px";
  letter.style.left = (x - 230) + "px";
};