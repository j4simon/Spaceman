'use strict';
class SecretWord {
    constructor(level,words,guesses) {
        this.level = level;
        this.words = words;
        this.guesses = guesses;
        
    }  
}


// Load screen has player instructions and start button
// }
let start = document.getElementById("start");
let answer = "";
let letters = [];
let level1 = new SecretWord(0,['ADULT','AGENT','ANGER','APPLE','AWARD','BEACH','BIRTH','BLOCK','BOARD','BRAIN','BREAD','CHAIN','CHAIR','CHEST','CHIEF','CHILD','CLASS','CLOCK','COACH','COAST','COURT','COVER','CREAM','CROWN','CYCLE','DANCE','DEPTH','DOUBT','DRAFT','DRAMA','DREAM','DRESS','FLOOR','FOCUS','FORCE','FRAME','FRONT','FRUIT','GLASS','GRASS','GREEN','HORSE','HOTEL','HOUSE','IMAGE','INDEX','INPUT','ISSUE','JUDGE','KNIFE','LAYER','LEVEL','LIGHT','LIMIT','LUNCH','MAJOR','MARCH','MATCH','METAL','MODEL','MONEY','MONTH','NORTH','NOVEL','NURSE','OFFER','ORDER','PAPER','PARTY','PEACE','PROOF','QUEEN','RADIO','RANGE','RATIO','ROUND','ROUTE','SCALE','SCENE','SHEEP','SHEET','SHIFT','SHIRT','SMOKE','SOUND','SOUTH','SPACE','STYLE','SUGAR','TABLE','TASTE','THEME','THING','TITLE','TOTAL','TOUCH','UNCLE','UNION','UNITY','VALUE','VIDEO','VISIT','VOICE','WASTE','WATCH','WATER','WHILE','WOMAN','WORLD','YOUTH'],6);

start.addEventListener('click', () => {

   answer = level1.words[Math.floor(Math.random() * level1.words.length)];
   for (let i=0 ; i < answer.length; i++) {
    const letterDiv = document.createElement('div');
    const letterText = document.createElement("p");
    letterText.style.color = "white";
    letterText.innerText = answer[i];
    letters.push(letterText);
    // debugger
    letterDiv.classList.add("letter");
    letterDiv.appendChild(letterText);
    const secretDiv = document.querySelector("#underScores");
    secretDiv.appendChild(letterDiv);
    document.getElementById("start").style="display: none";
    document.getElementById("afterStart").style="display: block";
    document.getElementById("gameName").style.backgroundColor = "black";
    document.getElementById("gameName").style.color = "white";
    document.getElementById("restart").style="display: block"
  
   
//    document.querySelector("#remainingGuesses").innerHTML = " " + remaining;

   }
   clickGuess()  
})

//     player character appears in field with a cow and UFO can be seen in the distance
document.querySelector("#remainingGuesses").innerHTML = " " + level1.guesses;

//restart button


//     A random word of specific length is generated

//     Clickable alphabet populates on screen 
function btnClickListener(e) {

    let currentLetter = e.target.textContent

       e.target.style.backgroundColor = "black";
       e.target.style.color = "darkgray";
    let j = 0; 
    let letterMatch = false; 

    while (j < letters.length) {
        // see if matches letter A
        if (letters[j].textContent === currentLetter){
            //if does, make visible
            letters[j].style.color = "black";
            letterMatch = true;
        };
        j = j+1;
    }
    // if no letters matc
    if(letterMatch === false){
        //subtract 1 from remaining guesses
        level1.guesses -= 1;
    }
    if(level1.guesses === 5){
        document.getElementById("ufo").style.width = "30%";
        document.getElementById("ufo").style.borderBottom = "30px";
        document.getElementById("ufo").style.marginLeft = "10px";
    } else if(level1.guesses === 4){
        document.getElementById("ufo").style.width = "40%";
        document.getElementById("ufo").style.borderBottom = "20px";
        document.getElementById("ufo").style.marginLeft = "20px";
    } else if(level1.guesses === 3){
        document.getElementById("ufo").style.width = "50%";
        document.getElementById("ufo").style.borderBottom = "10px";
        document.getElementById("ufo").style.marginLeft = "30px";
    } else if(level1.guesses === 2){
        document.getElementById("ufo").style.width = "60%";
        document.getElementById("ufo").style.borderBottom = "0px";
        document.getElementById("ufo").style.marginLeft = "30px";
    } else if(level1.guesses === 1){
        document.getElementById("ufo").style.width = "70%";
        document.getElementById("ufo").style.borderBottom = "-10px";
        document.getElementById("ufo").style.marginLeft = "30px";
    } else if(level1.guesses === 0){
        document.getElementById("field").style="display: none";
        document.getElementById("lost").style="display: block";
        document.getElementById("ufo").style="display: none";
        alert("You've been abducted. Enjoy your new life as an astronaut.");
        alert("Refresh page to try again");
    }
    document.querySelector("#remainingGuesses").innerHTML = " " + level1.guesses;

    let allLettersBlack = true;
    let l = 0;
    //if allLettersBlack = true
    while(l < letters.length){
        //player has won the game
        if(letters[l].style.color == "white"){ 
            allLettersBlack = false;
        }
        l = l+1;
        }
        if(allLettersBlack === true){
            alert("Winner!!");
            location.reload();
            
    }

}
function clickGuess () {

    document.getElementById("A").addEventListener('click', btnClickListener);
    document.getElementById("B").addEventListener('click', btnClickListener);
    document.getElementById("C").addEventListener('click', btnClickListener);
    document.getElementById("D").addEventListener('click', btnClickListener);
    document.getElementById("E").addEventListener('click', btnClickListener);
    document.getElementById("F").addEventListener('click', btnClickListener);
    document.getElementById("G").addEventListener('click', btnClickListener);
    document.getElementById("H").addEventListener('click', btnClickListener);
    document.getElementById("I").addEventListener('click', btnClickListener);
    document.getElementById("J").addEventListener('click', btnClickListener);
    document.getElementById("K").addEventListener('click', btnClickListener);
    document.getElementById("L").addEventListener('click', btnClickListener);
    document.getElementById("M").addEventListener('click', btnClickListener);
    document.getElementById("N").addEventListener('click', btnClickListener);
    document.getElementById("O").addEventListener('click', btnClickListener);
    document.getElementById("P").addEventListener('click', btnClickListener);
    document.getElementById("Q").addEventListener('click', btnClickListener);
    document.getElementById("R").addEventListener('click', btnClickListener);
    document.getElementById("S").addEventListener('click', btnClickListener);
    document.getElementById("T").addEventListener('click', btnClickListener);
    document.getElementById("U").addEventListener('click', btnClickListener);
    document.getElementById("V").addEventListener('click', btnClickListener);
    document.getElementById("W").addEventListener('click', btnClickListener);
    document.getElementById("X").addEventListener('click', btnClickListener);
    document.getElementById("Y").addEventListener('click', btnClickListener);
    document.getElementById("Z").addEventListener('click', btnClickListener);
}

// When player chooses a letter
//     that letter disapears from the choose options
// guesses.onclick = function(e) {
// }
// If player guesses a correct letter
//     letter(s) in answer becomes visible
// else
//     alert informs player that the letter is incorrect
//     UFO moves closer to the player character
