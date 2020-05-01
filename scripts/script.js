
const proxyurl = "https://cors-anywhere.herokuapp.com/"; //This Url is used to by pass the Cors or Access-Control-Allow-Origin repsonse header
const url = "https://www.iwillfearnoevil.com/screen/string.txt"; //Set url to variable


var storedText="";
var newString;
var topThree;

fetch(proxyurl + url)
  .then(r => r.text()) 
    .then( d => {
      storedText = d;
      FindTheThree();
})



function FindTheThree(storedText) {
   console.log(storedText);
   var newString = storedText.split("\n");
    for(var i = 0; i < newString.length; i++){
      newString[i] = parseInt(newString[i]);
    }
  console.log(newString);
  newString.sort();
  console.log(newString);

for (var k = 0; k < newString.length; k++) {
    var target = newString[k];
    for (var j = k - 1; j >= 0 && (newString[j] > target); j--) {
        newString[j+1] = newString[j];
    }
    newString[j+1] = target
}
console.log(newString);

  for(var z = 0; z <= newString; z++){
    if(newString[z]!=newString[z + 1]){
      topThree=topThree.push(newString[z]);
    }
    console.log(topThree);
  }

}





  