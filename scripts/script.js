
const proxyurl = "https://cors-anywhere.herokuapp.com/"; //This Url is used to by pass the Cors or Access-Control-Allow-Origin repsonse header
const url = "https://www.iwillfearnoevil.com/screen/string.txt"; //Set url to variable


var storedText="";
var newString;
var finale;

fetch(proxyurl + url)
  .then(r => r.text()) 
    .then( d => {
      storedText = d;
      FindTheThree(storedText, finale);
})

function FindTheThree(storedText,finale){
   newString = storedText.split("\n");
    for(var i = 0; i < newString.length; i++){
      newString[i] = parseInt(newString[i]);
    }
  newString.sort();
  newString.sort((a,b)=>a-b);
  console.log(newString);
  for(var x = 0;x<=newString.length;x++){
    if(typeof newString[x] == "number" && newString[x]!=NaN){
      finale.push(newString[x])
    }
  }
}