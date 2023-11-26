//Creating Infinite loops

var phrases = ["Cooking gone wrong ?", "Unexpected guest ?" ,"Hungry ?" ,"Movie marathon ?" , "Game night ?"];
//pharses is an array
var currentPhraseIndex = 0;//currentPharseIndex ia a variable that keeps track of the index of currently displayed pharse
var phraseElement = document.getElementById('phrase');//phraseElement is a reference element id pharse

function changeText() {
    phraseElement.innerHTML = phrases[currentPhraseIndex];
    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
}

setInterval(changeText, 3000);//setInterval function is used to call the function and how many times it should be called(In this case : 'changetext' function is called and it is called within in 3 seconds)