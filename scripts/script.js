
const proxyurl = "https://cors-anywhere.herokuapp.com/"; //This Url is used to by pass the Cors or Access-Control-Allow-Origin repsonse header
const url = "https://www.iwillfearnoevil.com/screen/string.txt"; //Set url to variable

var storedText="";
var newString;
var finale;
 theData = finale;
fetch(proxyurl + url)
  .then(r => r.text()) 
    .then( d => {
      storedText = d;
      FindTheThree(storedText);
})

function FindTheThree(storedText){
   newString = storedText.split("\n");

   newString.sort();
   newString.sort((a,b)=>a-b);
   var finale=[];
    for(var i = 0; i < newString.length; i++){
      var num = parseInt(newString[i]);
      if(!isNaN(num)){
        finale.push(num)
      }
    }
    for(var x = 0;x<=3;x++){
      console.log(finale[x]);
    }
  }