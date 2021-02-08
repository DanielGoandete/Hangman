
let badWords = [];
let hang = 0;
let goodWord = true;

//get random value from array
var names = ["daniel","joao","paulo","xavier"];
let word = names[Math.floor(Math.random() * names.length)];

//start with the letter that have been choseen
function start(){

    fillEmptyLetter();
    var indices = containsInWord(letter(), word);
   
    
    if(indices.length > 0){
        //fazer um for depois para percorrer os achados 
        // document.getElementById("guess").innerHTML = indices + "";
        document.getElementById("guess").innerHTML = letter();

    }else{
        //in case that is not the word will put the list 
        badWords.push(letter());
        document.getElementById("guessed").innerHTML = badWords;
        //draw the toy with the lifes max 6
        hang = hang + 1; 
        
            if(hang <= 6){
            document.getElementById("show"+hang).innerHTML = 'hangman'+[hang];
            }else{
                alert('GAME OVER!!!')
            }
    }
    
}

//verify if contain the letter in the word
function containsInWord(searchStr, str){
    
    var searchStrLen = searchStr.length;
    
   
    if (searchStrLen == 0) {
    
        return [];
    }
    var startIndex = 0, index, indices = [];
    
    while ((index = str.indexOf(searchStr, startIndex)) > -1) {
        indices.push(index);
        startIndex = index + searchStrLen;
       
    }
    
    return indices;

}


//verify the letter onclick
function letter(){
    let chosenLetter = document.getElementById("letter").value;
    let aToZ = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
   
    aToZ.forEach((value,i) => { 
        if(chosenLetter == value){
            chosenLetter = value;
            
        }
   })
   
    
    return chosenLetter;
}

//fill the underline with the letter
function fillEmptyLetter(){

   alert(word.length);
   var underline= [];
   for(var i= 1; i <= word.length; i++){
    underline.push('__ ');
    
   }
   document.getElementById("guess").innerHTML = underline;
}
