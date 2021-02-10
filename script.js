
let badWords = [];
let goodwords = [];
let hang = 0;
let goodWord = true;
let gameOver = false;
let lives = 6;


//get random value from array
var names = ["daniel","aurelie","papa","mariane"];
let word = names[Math.floor(Math.random() * names.length)];

//start with the letter that have been choseen
function start(){

    fillEmptyLetter();
    var indices = containsInWord(letter(), word);
   
    
    if(indices.length > 0){
       
        document.getElementById("guess").innerHTML = goodwords;

    }else{
        //alert("vai entrar no else ");
        
        //in case that is not the word will put the list 
        badWords.push(letter());
        document.getElementById("guessed").innerHTML = badWords;
        //draw the toy with the lifes max 6
        hang = hang + 1; 
        
            if(hang <= 6){
                var div = document.createElement("div");
                var elem = document.createElement("img");
                div.setAttribute('class', 'col-sm');
                div.setAttribute('id', 'show'+hang);
                
                elem.src ="assets/rope"+hang+".png";
                elem.setAttribute("height", "250");
                elem.setAttribute("width", "150");
                elem.setAttribute("alt", "hang");
                
                document.getElementById("show0").appendChild(div);
                document.getElementById("show"+hang).appendChild(elem);
                document.getElementById("life").innerHTML = lives = lives -1;
                //remove picture to replace the new one 
                if(hang > 1){
                    var temp = hang;
                    temp -= 1
                    document.getElementById("show"+temp).remove(elem);
                }
                if(hang == 6){
                    alert('GAME OVER!!!, the word was:  ' + word );
                    document.getElementById('restart').click();
                }
            }
    }
    
}

//verify if contain the letter in the word
function containsInWord(searchStr, str){
    
    var searchStrLen = searchStr.length;
    var startIndex = 0, index, indices = [];
    if (searchStrLen == 0) {
    
        return [];
    }
   
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

   var underline= [];
   var firstLetterValue;
   for(var i= 0; i <= word.length; i++){
       //get the letter from indice
       firstLetterValue = word.charAt(i);
       //verify the word if contains 
        if(firstLetterValue == letter()){
            underline[i]= firstLetterValue;
            //set goodwords with the good letter
            underline.forEach((value,x ) =>{
                if(value == firstLetterValue){
                    goodwords[i]= firstLetterValue;
                }
                //if is the same lenght the game is finished
                if(word.length === goodwords.length){
                   alert('you won the game congratulations!!!, the word was ' + word);
                   document.getElementById('restart').click();
                }
            })
        }
   }
}
