class SecretWord {
    constructor(level,words,guesses,underScores) {
        this.level = 0;
        this.words = words;
        this.guesses = guesses;
        // this.underScores = [];
    }
    
}

// Load screen has player instructions and start button
// }
let start = document.getElementById("start");
let answer = "";
let level1 = new SecretWord(0,['ADULT','AGENT','ANGER','APPLE','AWARD','BEACH','BIRTH','BLOCK','BOARD','BRAIN','BREAD','CHAIN','CHAIR','CHEST','CHIEF','CHILD','CLASS','CLOCK','COACH','COAST','COURT','COVER','CREAM','CROWN','CYCLE','DANCE','DEPTH','DOUBT','DRAFT','DRAMA','DREAM','DRESS','FLOOR','FOCUS','FORCE','FRAME','FRONT','FRUIT','GLASS','GRASS','GREEN','HORSE','HOTEL','HOUSE','IMAGE','INDEX','INPUT','ISSUE','JUDGE','KNIFE','LAYER','LEVEL','LIGHT','LIMIT','LUNCH','MAJOR','MARCH','MATCH','METAL','MODEL','MONEY','MONTH','NORTH','NOVEL','NURSE','OFFER','ORDER','PAPER','PARTY','PEACE','PROOF','QUEEN','RADIO','RANGE','RATIO','ROUND','ROUTE','SCALE','SCENE','SHEEP','SHEET','SHIFT','SHIRT','SMOKE','SOUND','SOUTH','SPACE','STYLE','SUGAR','TABLE','TASTE','THEME','THING','TITLE','TOTAL','TOUCH','UNCLE','UNION','UNITY','VALUE','VIDEO','VISIT','VOICE','WASTE','WATCH','WATER','WHILE','WOMAN','WORLD','YOUTH'],6);

start.addEventListener('click', () => {
   answer = level1.words[Math.floor(Math.random() * level1.words.length)];
   console.log(answer); 
   for (let i=0 ; i < answer.length; i++) {

   const letterDiv = document.createElement('div');
   const letterText = document.createElement("p");
   letterText.style.color = "white";
   letterText.innerText = answer[i];
   letterDiv.classList.add("letter");
   letterDiv.appendChild(letterText);
   const secretDiv = document.querySelector("#underScores");
   secretDiv.appendChild(letterDiv);
   document.getElementById("start").style.display = "none";
   document.getElementById("afterStart").style.display = "block";
   document.getElementById("gameName").style.backgroundColor = "black";
   document.getElementById("gameName").style.color = "white";
   clickGuess(letterText,level1) 
   
//    document.querySelector("#remainingGuesses").innerHTML = " " + remaining;

   }
   
})
//     player character appears in field with a cow and UFO can be seen in the distance

document.querySelector("#remainingGuesses").innerHTML = " " + level1.guesses;

//     A random word of specific length is generated

//     Clickable alphabet populates on screen 
function clickGuess (letterText,level1) {

document.getElementById("A").addEventListener('click', (e) => { 
       e.target.style.backgroundColor = "black";
       e.target.style.color = "darkgray";
       console.log(A.innerText); 
       if (letterText.textContent.includes("A")) {
        letterText.style.color = "black";
       } 
})    
document.getElementById("B").addEventListener('click', (e) => {
    e.target.style.backgroundColor = "black";
    e.target.style.color = "darkgray";
    console.log(B.innerText);  
    if (letterText.textContent.includes("B")) {
     letterText.style.color = "black";
    }else {
        guesses -= 1;
        console.log(level1.guesses);
    }
})  
document.getElementById("C").addEventListener('click', (e) => {
    e.target.style.backgroundColor = "black";
    e.target.style.color = "darkgray";
    console.log(C.innerText);    
    if (letterText.textContent.includes("C")) {
     letterText.style.color = "black";
    } else {
        guesses -= 1;
        console.log(level1.guesses);
    }
})  
document.getElementById("D").addEventListener('click', (e) => {
    e.target.style.backgroundColor = "black";
    e.target.style.color = "darkgray";
    console.log(D.innerText); 
    guesses -= 1;
    if (letterText.textContent.includes("D")) {
     letterText.style.color = "black";
    }

})  
document.getElementById("E").addEventListener('click', (e) => {
    e.target.style.backgroundColor = "black";
    e.target.style.color = "darkgray";
    console.log(E.innerText);    
    guesses -= 1;
    if (letterText.textContent.includes("E")) {
     letterText.style.color = "black";
    }

})  
document.getElementById("F").addEventListener('click', (e) => {
    e.target.style.backgroundColor = "black";
    e.target.style.color = "darkgray";
    console.log(F.innerText);    
    guesses -= 1;
    if (letterText.textContent.includes("F")) {
     letterText.style.color = "black";
    }

})  
document.getElementById("G").addEventListener('click', (e) => {
    e.target.style.backgroundColor = "black";
    e.target.style.color = "darkgray";
    console.log(G.innerText);    
    guesses -= 1;
    if (letterText.textContent.includes("G")) {
     letterText.style.color = "black";
    }

})  
document.getElementById("H").addEventListener('click', (e) => {
    e.target.style.backgroundColor = "black";
    e.target.style.color = "darkgray";
    console.log(H.innerText);    
    guesses -= 1;
    if (letterText.textContent.includes("H")) {
     letterText.style.color = "black";
    }

})  
document.getElementById("I").addEventListener('click', (e) => {
    e.target.style.backgroundColor = "black";
    e.target.style.color = "darkgray";
    console.log(I.innerText);    
    guesses -= 1;
    if (letterText.textContent.includes("I")) {
     letterText.style.color = "black";
    }

})  
document.getElementById("J").addEventListener('click', (e) => {
    e.target.style.backgroundColor = "black";
    e.target.style.color = "darkgray";
    console.log(J.innerText);    
    guesses -= 1;
    if (letterText.textContent.includes("J")) {
     letterText.style.color = "black";
    }

})  
document.getElementById("K").addEventListener('click', (e) => {
    e.target.style.backgroundColor = "black";
    e.target.style.color = "darkgray";
    console.log(K.innerText);    
    guesses -= 1;
    if (letterText.textContent.includes("K")) {
     letterText.style.color = "black";
    }

})  
document.getElementById("L").addEventListener('click', (e) => {
    e.target.style.backgroundColor = "black";
    e.target.style.color = "darkgray";
    console.log(L.innerText);    
    guesses -= 1;
    if (letterText.textContent.includes("L")) {
     letterText.style.color = "black";
    }

})  
document.getElementById("M").addEventListener('click', (e) => {
    e.target.style.backgroundColor = "black";
    e.target.style.color = "darkgray";
    console.log(M.innerText);   
    guesses -= 1;
    if (letterText.textContent.includes("M")) {
     letterText.style.color = "black";
    }

})  
document.getElementById("N").addEventListener('click', (e) => {
    e.target.style.backgroundColor = "black";
    e.target.style.color = "darkgray";
    console.log(N.innerText);    
    guesses -= 1;
    if (letterText.textContent.includes("N")) {
     letterText.style.color = "black";
    }

})  
document.getElementById("O").addEventListener('click', (e) => {
    e.target.style.backgroundColor = "black";
    e.target.style.color = "darkgray";
    console.log(O.innerText);    
    guesses -= 1;
    if (letterText.textContent.includes("O")) {
     letterText.style.color = "black";
    }

})  
document.getElementById("P").addEventListener('click', (e) => {
    e.target.style.backgroundColor = "black";
    e.target.style.color = "darkgray";
    console.log(P.innerText);    
    guesses -= 1;
    if (letterText.textContent.includes("P")) {
     letterText.style.color = "black";
    }

})  
document.getElementById("Q").addEventListener('click', (e) => {
    e.target.style.backgroundColor = "black";
    e.target.style.color = "darkgray";
    console.log(Q.innerText);    
    guesses -= 1;
    if (letterText.textContent.includes("Q")) {
     letterText.style.color = "black";
    }

})  
document.getElementById("R").addEventListener('click', (e) => {
    e.target.style.backgroundColor = "black";
    e.target.style.color = "darkgray";
    console.log(R.innerText);    
    guesses -= 1;
    if (letterText.textContent.includes("R")) {
     letterText.style.color = "black";
    }

})  
document.getElementById("S").addEventListener('click', (e) => {
    e.target.style.backgroundColor = "black";
    e.target.style.color = "darkgray";
    console.log(S.innerText);   
    guesses -= 1;
    if (letterText.textContent.includes("S")) {
     letterText.style.color = "black";
    }

})  
document.getElementById("T").addEventListener('click', (e) => {
    e.target.style.backgroundColor = "black";
    e.target.style.color = "darkgray";
    console.log(T.innerText);    
    guesses -= 1;
    if (letterText.textContent.includes("T")) {
     letterText.style.color = "black";
    }

})  
document.getElementById("U").addEventListener('click', (e) => {
    e.target.style.backgroundColor = "black";
    e.target.style.color = "darkgray";
    console.log(U.innerText);   
    guesses -= 1;
    if (letterText.textContent.includes("U")) {
     letterText.style.color = "black";
    }

})  
document.getElementById("V").addEventListener('click', (e) => {
    e.target.style.backgroundColor = "black";
    e.target.style.color = "darkgray";
    console.log(V.innerText);    
    guesses -= 1;
    if (letterText.textContent.includes("V")) {
     letterText.style.color = "black";
    }

})  
document.getElementById("W").addEventListener('click', (e) => {
    e.target.style.backgroundColor = "black";
    e.target.style.color = "darkgray";
    console.log(W.innerText);   
    guesses -= 1;
    if (letterText.textContent.includes("W")) {
     letterText.style.color = "black";
    }

})  
document.getElementById("X").addEventListener('click', (e) => {
    e.target.style.backgroundColor = "black";
    e.target.style.color = "darkgray";
    console.log(X.innerText);    
    guesses -= 1;
    if (letterText.textContent.includes("X")) {
     letterText.style.color = "black";
    }

})  
document.getElementById("Y").addEventListener('click', (e) => {
    e.target.style.backgroundColor = "black";
    e.target.style.color = "darkgray";
    console.log(Y.innerText);  
    guesses -= 1;
    if (letterText.textContent.includes("Y")) {
     letterText.style.color = "black";
    }

})  
document.getElementById("Z").addEventListener('click', (e) => {
    e.target.style.backgroundColor = "black";
    e.target.style.color = "darkgray";
    console.log(Z.innerText);    
    guesses -= 1;
    if (letterText.textContent.includes("Z")) {
     letterText.style.color = "black";
    }

})  

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
