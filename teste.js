
let badWords = [];
var hang = 0;

//get random value from array
var names = ["daniel"];//"joao","paulo","jose"
let word = "daniel";//names[Math.floor(Math.random() * names.length)];

//start with the letter that have been choseen
function start(){

    alert(word);
    var indices = containsInWord(letter(), word);
    if(indices !=0){
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
    alert(indices);
    return indices;

}


//verify the letter onclick
function letter(){
    let chosenLetter = document.getElementById("letter").value;
    let buttonsIds = document.getElementsByTagName("button");
    for (var i= 0; i < buttonsIds.length; i++){
       
       if(chosenLetter == buttonsIds[i].value){
        chosenLetter = buttonsIds[i].value;
       }
    }
    
    return chosenLetter;
}



