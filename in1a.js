// Uppgift 1a1:
function buttonAction1() {
  //Kod här!
} // Slut!

// Uppgift 1a2 här:
function buttonAction2() {
  //Kode här
} // Slut!

// Uppgift 1a3 här:
function buttonAction3() {
  //Kode här!
} // Slut!

// Uppgift 1a4 här:
function buttonAction4() {
  //Kode här!
} // Slut!

// Uppgift 1a5 här:
function buttonAction5() {
  //Kode här!
} // Slut!

// Uppgift 1a6 här:
function buttonAction6() {
  //Kode här!
} // Slut.

// Uppgift 1a7 här:
function buttonAction7() {
  //Kode här!
} // Slut! :)

// Uppgift 1a8 här:
function buttonAction8() {
  //Kode här!
} //Slut!

// Sista proceduren: Placera data i en tabell som byggs upp
function buttonAction9() {
  //Kode här
} //Slut! Nu kan ni kolla över eran kod och lämna in. Gott jobbat!

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
