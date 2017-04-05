function countLetters(str){
 var noSpaces = str.split(" ").join("");
 var result = {};
 for (var i = 0; i < noSpaces.length; i++) {
   var c = noSpaces[i];
   if(result[c]){
     result[c].push(i);
   }
   else{
     result[c] = [i];
   }
 }
 return result;
}

console.log(countLetters("lighthouse in the house"));