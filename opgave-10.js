module.exports = {aantalKeerA}

/* Algoritmiek opgave #10
   deze functie geeft het aantal keer dat in de parameter 'woord'
   een 'a' voorkomt.
   
   Tip: gebruik charAt(), zie
     https://www.w3schools.com/jsref/jsref_charat.asp
*/

function aantalKeerA(woord) {
  // getallen is een array
  var uitkomst = 0;
  
  // typ hier je code
  for(let i = 0; i <woord.length; i++){
    letter = chasrAt(i)
    if(letter == "a"){
      uitkomst++
    }
  }
  
  
  
  return uitkomst;
}