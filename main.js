class SecretWord {
    constructor(level,words) {
        this.level = 0;
        this.words = words;
    }
}

// Load screen has player instructions and start button

// }
let start = document.getElementById("start");
let answer = "";
let level1 = new SecretWord(0,['ADULT','AGENT','ANGER','APPLE','AWARD','BEACH','BIRTH','BLOCK','BOARD','BRAIN','BREAD','CHAIN','CHAIR','CHEST','CHIEF','CHILD','CLASS','CLOCK','COACH','COAST','COURT','COVER','CREAM','CROWN','CYCLE','DANCE','DEPTH','DOUBT','DRAFT','DRAMA','DREAM','DRESS','FLOOR','FOCUS','FORCE','FRAME','FRONT','FRUIT','GLASS','GRASS','GREEN','HORSE','HOTEL','HOUSE','IMAGE','INDEX','INPUT','ISSUE','JUDGE','KNIFE','LAYER','LEVEL','LIGHT','LIMIT','LUNCH','MAJOR','MARCH','MATCH','METAL','MODEL','MONEY','MONTH','NORTH','NOVEL','NURSE','OFFER','ORDER','PAPER','PARTY','PEACE','PROOF','QUEEN','RADIO','RANGE','RATIO','ROUND','ROUTE','SCALE','SCENE','SHEEP','SHEET','SHIFT','SHIRT','SMOKE','SOUND','SOUTH','SPACE','STYLE','SUGAR','TABLE','TASTE','THEME','THING','TITLE','TOTAL','TOUCH','UNCLE','UNION','UNITY','VALUE','VIDEO','VISIT','VOICE','WASTE','WATCH','WATER','WHILE','WOMAN','WORLD','YOUTH']);
let underScore = [];

start.addEventListener('click', () => {
   answer = level1.words[Math.floor(Math.random() * level1.words.length)];
   console.log(answer); 
   
})
//     player character appears in field with a cow and UFO can be seen in the distance

//     A random word of specific length is generated
function guessedWord() {
    underScore = answer.split('').map()
}



// while (remainingLetters > 0) {
//     document.getElementById("underScores") = underScore.join(" ");
// } 

//     Clickable alphabet populates on screen 
document.getElementById("A").addEventListener('click', (e) => {
    for (let j = 0; j < answer.length; j++) {
        for (let i = 0; i < answer.length; i++) {
            underScore[i] = "_";
        }
    let remainingLetters = answer.length;
    if(answer.indexOf(A.innerText) > -1) {
        if(answer[j] === A.innerText) {
        underScore[j] = A.innerText;
        console.log(true);
        remainingLetters--;
        console.log(A.innerText);
        }
      }
    }    
})    
document.getElementById("B").addEventListener('click', (e) => {
    console.log(B.innerText);    
})  
document.getElementById("C").addEventListener('click', (e) => {
    console.log(C.innerText);    
})  
document.getElementById("D").addEventListener('click', (e) => {
    console.log(D.innerText);    
})  
document.getElementById("E").addEventListener('click', (e) => {
    console.log(E.innerText);    
})  
document.getElementById("F").addEventListener('click', (e) => {
    console.log(F.innerText);    
})  
document.getElementById("G").addEventListener('click', (e) => {
    console.log(G.innerText);    
})  
document.getElementById("H").addEventListener('click', (e) => {
    console.log(H.innerText);    
})  
document.getElementById("I").addEventListener('click', (e) => {
    console.log(I.innerText);    
})  
document.getElementById("J").addEventListener('click', (e) => {
    console.log(J.innerText);    
})  
document.getElementById("K").addEventListener('click', (e) => {
    console.log(K.innerText);    
})  
document.getElementById("L").addEventListener('click', (e) => {
    console.log(L.innerText);    
})  
document.getElementById("M").addEventListener('click', (e) => {
    console.log(M.innerText);    
})  
document.getElementById("N").addEventListener('click', (e) => {
    console.log(N.innerText);    
})  
document.getElementById("O").addEventListener('click', (e) => {
    console.log(O.innerText);    
})  
document.getElementById("P").addEventListener('click', (e) => {
    console.log(P.innerText);    
})  
document.getElementById("Q").addEventListener('click', (e) => {
    console.log(Q.innerText);    
})  
document.getElementById("R").addEventListener('click', (e) => {
    console.log(R.innerText);    
})  
document.getElementById("S").addEventListener('click', (e) => {
    console.log(S.innerText);    
})  
document.getElementById("T").addEventListener('click', (e) => {
    console.log(T.innerText);    
})  
document.getElementById("U").addEventListener('click', (e) => {
    console.log(U.innerText);    
})  
document.getElementById("V").addEventListener('click', (e) => {
    console.log(V.innerText);    
})  
document.getElementById("W").addEventListener('click', (e) => {
    console.log(W.innerText);    
})  
document.getElementById("X").addEventListener('click', (e) => {
    console.log(X.innerText);    
})  
document.getElementById("Y").addEventListener('click', (e) => {
    console.log(Y.innerText);    
})  
document.getElementById("Z").addEventListener('click', (e) => {
    console.log(Z.innerText);    
})  

// When player chooses a letter
//     that letter disapears from the choose options
// guesses.onclick = function(e) {
//     if(words.contains(onclick.innerText) {
//         print(innerText)
// }
// If player guesses a correct letter
//     letter(s) in answer becomes visible
// else
//     alert informs player that the letter is incorrect
//     UFO moves closer to the player character
